import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIN from "@highcharts/map-collection/countries/in/in-all.geo.json"
import PieChart from './PieChart'
highchartsMap(Highcharts);

let dataIn =[{ z: 10, keyword: "Madhya Pradesh", lat: 22.9734, lon: 78.6569 }, { z: 5, keyword: "Delhi", lat: 28.69, lon: 77.0856 }]
let dataCh = []

if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
}

let mapOptions
class MapChart extends React.Component {
    constructor() {
        super()
        this.fun()
        mapOptions = {
            chart: {
                map: "countries/in/in-all"
            },
            title: {
                text: ""
            },
            credits: {
                enabled: false
            },
            mapNavigation: {
                enabled: true
            },
            series: [
                {
                    name: "Basemap",
                    mapData: mapDataIN,
                    borderColor: "#A0A0A0",
                    nullColor: "rgba(200, 200, 200, 0.3)",
                    showInLegend: false
                },
                {
                    type: "mapbubble",
                    name: "ABC",
                    color: "#4169E1",
                    data: dataIn,
                    cursor: "pointer",
                    tooltip: {
                        headerFormat: " ",
                        pointFormat: " {point.keyword} <br> lat: {point.lat}, lon: {point.lon}"
                    },
                    point: {
                        events: {
                            click: function () {
                                console.log(this.keyword);
                            }
                        }
                    }
                }
            ]
        }
    }

    componentDidMount() {

    }

    fun = async () => {
        mapDataIN.features.map((x) => {
            // console.log(x.properties.name)
            dataIn.map((y) => {
                if (y.keyword == x.properties.name) {
                    console.log(x.properties.labelrank)
                    // console.log(x.properties.latitude)
                    let obj = {
                        z: x.properties.labelrank,
                        keyword: x.properties.name,
                        lat: x.properties.latitude,
                        lon: x.properties.longitude
                    }
                    dataCh.push(obj)
                }
            })
        }
        )
        console.log(dataCh)
    }
    render() {
        console.log(mapDataIN.features)
        return (
            <div>
                <HighchartsReact
                    constructorType={"mapChart"}
                    highcharts={Highcharts}
                    options={mapOptions}
                />
            </div>
        )
    }
}

export default MapChart
