import React from 'react'
import {VictoryPie, VictoryTheme, VictoryLabel} from 'victory'


class PieChart extends React.Component
{
    constructor(props){
        super(props)
        this.state = {data:[{ y: 0 }, { y: 0 }, { y:0 },{y:0},{y:0},{y:100}]}
    }
    componentDidMount()
    {     
        this.setState({data:this.props.data})        
    }
    render()
    {
        return(   
                   
            <svg width="200" height="200" viewBox="0 0 200 200">
            <VictoryPie  
            standalone={false}           
            data = {this.state.data}
            colorScale="qualitative"
            labelRadius="70"  
            width={200}
            height={200}        
            // style={{ labels: { fontSize: 15, fill: "black" } }}  
            // width={150} height={150}                 
            animate
            radius = "100"
            // cornerRadius="10"
            // innerRadius="30"
            // theme = {VictoryTheme.material}
            />    
            </svg>
           
        )
    }
}

export default PieChart