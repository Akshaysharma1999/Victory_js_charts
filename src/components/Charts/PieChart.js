import React from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory'


class PieChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 100 }] }
    }
    componentDidMount() {
        this.setState({ data: this.props.data })
    }
    render() {
        return (

            <svg width="300" height="300" viewBox="0 0 300 300">
                <VictoryPie
                    standalone={false}
                    data={this.state.data}
                    colorScale="qualitative"
                    labelRadius="70"
                    width={300}
                    height={300}                    
                    animate
                    // style={{ labels: { fontSize: 15, fill: "black" } }}  
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