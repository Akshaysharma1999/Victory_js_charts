import React from 'react'
import { VictoryPie, VictoryTheme, VictoryLabel, VictoryLegend } from 'victory'

// [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 100 }]
class PieChart extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.data.length)
        this.state = { data: this.props.data.map((val,index)=>{
                        if(index === this.props.data.length-1)
                        {
                           return{y:100}
                        }
                        return {y:0}
                     }), 
                     legendData: [] 
                    }
    }
    componentDidMount() {
        console.log(this.state.data)       
        this.setState({ data: this.props.data })
        this.setState({ legendData: this.props.legendData })  
         setTimeout(()=>{
            this.setState({data:[{ x: "A", y: 35 }, { x: "B", y: 35 }, { x: "C", y: 2 }, { x: "D", y: 1 }, { x: "E", y: 15 }, { x: "F", y: 1 }], legendData:[{ name: "A"}, { name: "B"}, { name : "C"}, { name: "D"}, { name: "E"}, {name: "F"}] } )
         },3000)     
    }
    render() {
        return (
            <svg width="300" height="300" viewBox="0 0 300 300">
                <VictoryLegend       
                // animate
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