import React from 'react'
import { VictoryStack, VictoryChart, VictoryBar, VictoryTheme } from 'victory'

class StackBarChart extends React.Component {

    renderBars = () => {
        // console.log(this.props.data)
        let dArr = this.props.data
        return (
            dArr.map((d)=>{
                return(<VictoryBar
                    horizontal={this.props.horizontal}
                    animate
                    width={300}
                    height={300}
                    data={d}
                />)
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
                    domainPadding={30}
                >
                    <VictoryStack
                        standalone={false}
                        // theme={VictoryTheme.material}
                        colorScale="qualitative"
                        animate
                        width={300}
                        height={300}
                    >
                     {this.renderBars()}                       
                    </VictoryStack>
                </VictoryChart>
            </svg>
        )
    }
}

export default StackBarChart