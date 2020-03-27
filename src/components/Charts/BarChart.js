import React from 'react'
import {VictoryTheme,VictoryChart,VictoryBar,VictoryLabel} from 'victory'

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
        //     this.setState({data :[{x:"1",y:"13"},{x:"2",y:"16"},{x:"3",y:"14"},{x:"4",y:"8"},{x:"5",y:"2"},{x:"6",y:"1"}]})
        // },3000)
    }

    render() {
      return (        
       
        <svg width={300} height={250} >
        <VictoryChart           
          domainPadding={{ x: 25 }} 
          standalone={false}
          width={300} height={250}
          theme={VictoryTheme.material}  
          //   animate
        >
        <VictoryBar    
        // horizontal 
        // theme={VictoryTheme.material} 
        width={300} height={250}     
        data={this.state.data}
        animate  
        />            
        </VictoryChart>
        
        </svg>
       
      )
    }
  }
  
export default BarChart