import React from 'react'
import { VictoryTheme, VictoryChart, VictoryBar } from 'victory'
import StackBarChart from './StackBarChart'

class HbarSort extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      data: this.props.data
    }
  }

  componentDidMount() { 
    
    setTimeout(()=>{
      this.setState({data:[[{ x: "A", y: 2 }, { x: "B", y: 10 }, { x: "C", y: 12 }, { x: "D", y: 14 }, { x: "E", y: 11 }, { x: "F", y: 7 }]] })
     },3000)
      
  }

  render() {
    return (
      <StackBarChart data={this.state.data} horizontal={true} sortKey={'y'}/>
    )
  }
}

export default HbarSort