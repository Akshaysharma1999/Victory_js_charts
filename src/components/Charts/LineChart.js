import React from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory'

class LineChart extends React.Component {
    constructor()
    {
        super()
        this.state = {data:[{ y: 0 }, { y: 0 }, { y:0 },{y:0},{y:0}]}
    }
    componentDidMount()
    {
        this.setState({data:this.props.data})
    }
    render() {
        return (
            <svg width="300" height="300" viewBox="0 0 300 300">
            <VictoryChart
                theme={VictoryTheme.material}
                standalone={false}
                width={300}
                height={300}
            >
                <VictoryLine
                colorScale ="heat"
                standalone={false}
                // interpolation="natural"
                width={300}
                height={300}
                animate
                 data={this.state.data}
                />               
            </VictoryChart>
            </svg>
        )
    }
}

export default LineChart 