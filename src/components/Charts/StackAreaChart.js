import React from 'react'
import { VictoryStack, VictoryArea, VictoryTheme, VictoryChart,VictoryLabel,VictoryScatter} from 'victory'
import AreaChart from './AreaChart'


class StackChart extends React.Component {  
    constructor()
    {
        super()
        this.state = {
            data: [{ x: 0, y: 0 }]
          }
    }

    renderAreaCharts = () => {       
        let dArr = this.props.data
        return (
            dArr.map((d) => {
                return (
                   
                    <VictoryArea
                        standalone={false}
                        width={300}
                        height={300}
                        animate
                        data={d}
                    />                   
                )
            })
        )
    }
    
    render() {
        return (
            <svg width={300} height={300} >
                <VictoryChart
                    standalone={false}
                    theme={VictoryTheme.material}
                    width={300}
                    height={300}
                >
                    <VictoryStack
                        standalone={false}
                        // theme={VictoryTheme.material}
                        colorScale="qualitative"
                        animate
                        width={300}
                        height={300}
                    >
                        {this.renderAreaCharts()}
                      
                    </VictoryStack>
                    <VictoryLabel text="Y label" x={15} y={150} textAnchor="middle" labelPlacement="parallel" angle="270"/>
                    <VictoryLabel text="X label" x={150} y={288} textAnchor="middle" labelPlacement="parallel" />
                </VictoryChart>
            </svg>
        )
    }
}

export default StackChart