import React from 'react'
import { VictoryChart, VictoryBar, VictoryGroup, VictoryTheme } from 'victory'

class GroupCharts extends React.Component {

    renderBars = () => {
        console.log(this.props.data)
        const dArr = this.props.data
        return dArr.map((Arr) => {
            // console.log(Arr)
            return <VictoryBar
                data={Arr}
                animate
            />
        })      
    }

    render() {
        return (
            <svg width={300} height={300} >
                <VictoryChart
                    theme={VictoryTheme.material}
                    standalone={false}
                    width={300} height={300}
                >
                    <VictoryGroup offset={12}
                        colorScale={"qualitative"}
                        standalone={false}
                        width={300} height={300}
                        animate
                    >
                        {this.renderBars()}
                    </VictoryGroup>
                </VictoryChart>
            </svg>
        )
    }
}

export default GroupCharts