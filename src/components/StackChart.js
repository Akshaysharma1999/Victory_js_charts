import React from 'react'
import { VictoryStack, VictoryArea, VictoryTheme, VictoryChart } from 'victory'
import AreaChart from './AreaChart'

class StackChart extends React.Component {  

    renderAreaCharts = () => {
        // console.log(this.props.data)
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
                </VictoryChart>
            </svg>
        )
    }
}

export default StackChart