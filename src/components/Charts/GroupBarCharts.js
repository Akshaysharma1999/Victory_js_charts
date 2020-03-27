import React from 'react'
import { VictoryChart, VictoryBar, VictoryGroup, VictoryTheme,VictoryLabel} from 'victory'

class GroupCharts extends React.Component {

    renderBars = () => {
        console.log(this.props.data)
        const dArr = this.props.data
        return dArr.map((Arr) => {
            // console.log(Arr)
            return <VictoryBar
                horizontal={this.props.horizontal}
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
                    domainPadding={30}
                >
                    <VictoryGroup offset={12}
                        colorScale={"qualitative"}
                        standalone={false}
                        width={300} height={300}
                        animate
                    >
                        {this.renderBars()}
                    </VictoryGroup>
                    <VictoryLabel text="Y label" x={15} y={150} textAnchor="middle" labelPlacement="parallel" angle="270"/>
                    <VictoryLabel text="X label" x={150} y={288} textAnchor="middle" labelPlacement="parallel" />
                </VictoryChart>
            </svg>
        )
    }
}

export default GroupCharts