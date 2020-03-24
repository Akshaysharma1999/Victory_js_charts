import React from 'react'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import BarChart from './BarChart'

class App extends React.Component {
  render() {
    return (
      <div>
       <AreaChart data= {[{x:1,y:10},{x:2,y:5},{x:3,y:8},{x:4,y:6},{x:5,y:20}]} />   
       <PieChart data = {[{ x: "A", y: 25 },{ x: "B", y: 15 },{ x: "C", y: 20 },{ x: "D", y: 10 },{ x: "E", y: 18 },{ x: "F", y: 12 }]}/>
       <BarChart data={[{x:1,y:5},{x:2,y:7},{x:3,y:2},{x:4,y:4},{x:5,y:1}]}/>
      </div>
    )
  }
}

export default App