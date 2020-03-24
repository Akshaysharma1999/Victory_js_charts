import React from 'react'
import {VictoryTheme,VictoryChart,VictoryBar} from 'victory'

class BarChart extends React.Component {

    constructor(props) {
      super(props);
      console.log(this.props)
      this.state = {
        data:this.props.data
      }
    }
  
    componentDidMount() {     
        // this.setState({data :[{x:1,y:5},{x:2,y:7},{x:3,y:2},{x:4,y:4},{x:5,y:1}]})
        // setInterval(()=>{
        //     this.setState({data :[{x:1,y:3},{x:2,y:6},{x:3,y:4},{x:4,y:8}]})
        // },3000)
    }

    render() {
      return (
        <VictoryChart
          domainPadding={{ x: 40 }} 
        //   animate
        >
        <VictoryBar           
            data={this.state.data}
            animate           
        />            
        </VictoryChart>      
      )
    }
  }
  
export default BarChart