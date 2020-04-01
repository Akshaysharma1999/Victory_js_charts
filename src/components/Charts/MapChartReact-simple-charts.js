import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,  
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

  const markers = [
    {
      markerOffset: -15,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    },]
 
const MapChart  = ({ setTooltipContent }) => {
  
  return (
    <div>
      <ComposableMap
      data-tip=""
       projection="geoAzimuthalEqualArea"
       projectionConfig={{
        rotate: [-80, -21, 3],
        scale: 1000
      }}    
      width={980}
      height={500}
      style={{ width: "800px", height: "auto" }}
      >
        {/* <ZoomableGroup zoom={1}> */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography 
                key={geo.rsmKey} geography={geo}
                onMouseEnter={() => {
                  // console.log(geo.properties)
                  setTooltipContent(`${geo.properties.NAME_1}`)
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}              
                style={{
                  default: {
                    fill: "#EAEAEC",
                    outline: "none",
                    stroke:"#D6D6DA"
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none"
                  }
                }}
                />
              ))
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  )
}

export default MapChart;
