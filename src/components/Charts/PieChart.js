import React from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel, VictoryLegend } from 'victory'


class PieChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 100 }], legendData: [] }
    }
    componentDidMount() {
        this.setState({ data: this.props.data })
        this.setState({ legendData: this.props.legendData })
    }
    render() {
        return (

            <svg width="300" height="300" viewBox="0 0 300 300">
                <VictoryLegend       
                    x={0}
                    y={230}        
                    standalone={false}
                    colorScale="qualitative"
                    title="ABC-LEGEND"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    // style={{ border: { stroke: "black" }, title: { fontSize: 20 } ,padding:10}}
                    data={this.state.legendData}
                />                
                <VictoryPie
                    padding={{
                        left:10,top:15,bottom:90
                    }}
                    standalone={false}
                    data={this.state.data}
                    colorScale="qualitative"
                    labelRadius="70"
                    width={300}
                    height={300}
                    animate
                    style={{ labels: { fontSize: 15, fill: "white" }}}
                    // width={150} height={150}           
                    radius="100"
                    // cornerRadius="10"
                    innerRadius={this.props.inRadius}
                // theme = {VictoryTheme.material}
                />

            </svg>

        )
    }
}

export default PieChart