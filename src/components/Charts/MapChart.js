import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIN from "@highcharts/map-collection/countries/in/in-all.geo.json"
import PieChart from './PieChart'
highchartsMap(Highcharts); // Initialize the map module


if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
}

const mapOptions = {
    chart: {
        map: "countries/in/in-all"
    },
    title: {
        text: " "
    },
    credits: {
        enabled: false
    },
    mapNavigation: {
        enabled: true
    },
    tooltip: {
        useHTML:true,
        formatter:function(){
           return '<PieChart/>';
        }
    },
    series: [
        {
            // Use the gb-all map with no data as a basemap
            name: "Basemap",
            mapData: mapDataIN,
            borderColor: "#A0A0A0",
            nullColor: "rgba(200, 200, 200, 0.3)",
            showInLegend: false
        },
        {
            // Specify points using lat/lon
            type: "mapbubble",
            name: "ABC",
            color: "#4169E1",
            data: [{ z: 10, keyword: "Madhya Pradesh", lat: 22.9734, lon: 78.6569 }, { z: 5, keyword: "Delhi", lat: 28.69, lon: 77.0856 }],
            cursor: "pointer",           
            point: {
                events: {
                    click: function () {
                        console.log(this.keyword);
                    }
                }
            }
        }
    ]
};

class MapChart extends React.Component {   
    render() {
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
