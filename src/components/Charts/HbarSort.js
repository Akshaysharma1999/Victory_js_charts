import React from 'react'
import { VictoryTheme, VictoryChart, VictoryBar } from 'victory'


class HbarSort extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      data: this.props.data
    }
  }

  componentDidMount() {
    // this.setState({data :[{x:1,y:5},{x:2,y:7},{x:3,y:2},{x:4,y:4},{x:5,y:1}]})
    setTimeout(()=>{
        this.setState({data :[{x:"a",y:13},{x:"b",y:16},{x:"c",y:14},{x:"d",y:8},{x:"e",y:2},{x:"f",y:1}]})

    },3000)
    // setInterval(()=>{
    //     this.setState({data :[{x:"1",y:"10"},{x:"2",y:"13"},{x:"3",y:"24"},{x:"4",y:"8"},{x:"5",y:"21"},{x:"6",y:"11"}]})
    // },3000)
  }

  render() {
    return (
      <svg width={300} height={250} >
        <VictoryChart
          // horizontal
          domainPadding={{ x: 25 }}
          standalone={false}
          width={300} height={250}
          theme={VictoryTheme.material}
          animate
        >
          <VictoryBar
            sortKey="x"
            sortKey="y"
            horizontal
            labels={({ datum }) => `${datum.y}`}
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

export default HbarSort