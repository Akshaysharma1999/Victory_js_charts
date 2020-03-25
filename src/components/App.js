import React from 'react'
import PieChart from './PieChart'
import AreaChart from './AreaChart'
import BarChart from './BarChart'
import LineChart from './LineChart'
import GroupCharts from './GroupCharts'
import StackChart from './StackChart'

class App extends React.Component {
  render() {
    return (
      <div>   
      <AreaChart data={[{ x: 1, y: 10 }, { x: 2, y: 5 }, { x: 3, y: 8 }, { x: 4, y: 6 }, { x: 5, y: 20 }]} />
      <PieChart data={[{ x: "A", y: 25 }, { x: "B", y: 15 }, { x: "C", y: 20 }, { x: "D", y: 10 }, { x: "E", y: 18 }, { x: "F", y: 12 }]} />
      <BarChart data={[{ x: 1, y: 5 }, { x: 2, y: 7 }, { x: 3, y: 2 }, { x: 4, y: 4 }, { x: 5, y: 1 }, { x: 6, y: 10 }]} /> 
      <StackChart data = {[[{ x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 5 }],[{ x: "a", y: 1 }, { x: "b", y: 4 }, { x: "c", y: 5 }],[{ x: "a", y: 3 }, { x: "b", y: 2 }, { x: "c", y: 6 }]]}/>
      <LineChart data={[{ x: 1, y: 2 },{ x: 2, y: 3 },{ x: 3, y: 5 },{ x: 4, y: 4 },{ x: 5, y: 7 }]}/>
      <GroupCharts data={[[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }],[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }],[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]]}/>
      </div>      
    )
  }
}

export default App