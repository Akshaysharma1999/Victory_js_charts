import React from 'react'
import { VictoryBar, VictoryStack, VictoryAxis, VictoryLabel } from 'victory'

const dataA = [
  { x: "Personal Drones", y: 57 },
  { x: "Smart Thermostat", y: 40 },
  { x: "Television", y: 38 },
  { x: "Smartwatch", y: 37 },
  { x: "Fitness Monitor", y: 25 },
  { x: "Tablet", y: 19 },
  { x: "Camera", y: 15 },
  { x: "Laptop", y: 13 },
  { x: "Phone", y: 12 }
]

const dataB = [
  { x: "Personal Drones", y: 57 },
  { x: "Smart Thermostat", y: 40 },
  { x: "Television", y: 38 },
  { x: "Smartwatch", y: 37 },
  { x: "Fitness Monitor", y: 25 },
  { x: "Tablet", y: 19 },
  { x: "Camera", y: 15 },
  { x: "Laptop", y: 13 },
  { x: "Phone", y: 12 }
]
const width = 500;
const height = 500;
const padding = { top: 40, bottom: 40, left: 40, right: 40 };

class StackBarHorCentral extends React.Component {

  render() {
    return (
      <svg width={300} height={300} viewBox={`0 0 ${width} ${height}`}>
        <VictoryStack horizontal
          standalone={false}
          padding={padding}
          height={height}
          width={width}
          style={{ data: { width: 20 }, labels: { fontSize: 11 } }}
        >
          <VictoryBar
            style={{ data: { fill: "tomato" } }}
            standalone={false}
            data={dataA}
            y={(data) => (-Math.abs(data.y))}
            labels={({ datum }) => (`${Math.round(Math.abs(datum.y))}%`)}
            animate
          />
          <VictoryBar
            animate
            style={{ data: { fill: "orange" } }}
            standalone={false}
            data={dataB}
            labels={({ datum }) => (`${Math.round(Math.abs(datum.y))}%`)}
          />
        </VictoryStack>

        <VictoryAxis dependentAxis
          standalone={false}
          height={height}
          width={width}
          padding={padding}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 11, fill: "black" }
          }}
          tickLabelComponent={<VictoryLabel x={250} textAnchor="middle" />}
          tickValues={dataA.map((point) => point.x).reverse()}
        />
      </svg>
    );
  }
}
export default StackBarHorCentral