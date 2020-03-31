import React from 'react'
import { VictoryStack, VictoryChart, VictoryBar, VictoryTheme,VictoryLabel} from 'victory'

class StackBarChart extends React.Component {

    renderBars = () => {
        // console.log(this.props.data)
        let dArr = this.props.data
        return (
            dArr.map((d)=>{
                return(<VictoryBar
                    horizontal={this.props.horizontal}
                    // animate
                    width={300}
                    height={300}
                    data={d}
                    labels={({ datum }) => `${Math.round(datum.y)}`}
                    sortKey={this.props.sortKey}
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
                    animate
                >
                    <VictoryStack
                        standalone={false}
                        // theme={VictoryTheme.material}
                        colorScale="qualitative"                      
                        width={300}
                        height={300}
                    >
                     {this.renderBars()}                       
                    </VictoryStack>

                    <VictoryLabel text="Y label" x={15} y={150} textAnchor="middle" labelPlacement="parallel" angle="270"/>
                    <VictoryLabel text="X label" x={150} y={288} textAnchor="middle" labelPlacement="parallel" />
                </VictoryChart>
            </svg>
        )
    }
}

export default StackBarChart