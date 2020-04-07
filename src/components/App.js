import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
// import PieChart from './PieChart'
// import AreaChart from './AreaChart'
// import BarChart from './BarChart'
// import LineChart from './LineChart'
// import GroupBarCharts from './GroupBarCharts'
// import StackAreaChart from './StackAreaChart'
// import StackBarChart from './StackBarChart'
// import HbarSort from './Charts/HbarSort'
import Layout from './Layout'
// import MapChart from './Charts/MapChart'
// import Central from './Charts/StackedBarHorCentral'
// import MapChartCard from './handlers/MapChartReact-simple-charts'
import LoginForm from './Login_SignUp/LoginForm'
import { Header } from 'semantic-ui-react'
import history from '../history'

class App extends React.Component {
  render() {
    return (
      // <div>
      //   {/* area chart  data in the form of 2d array  */}
      // <StackAreaChart data={[[{ x: "A", y: 10 }, { x: "B", y: 5 }, { x: "C", y: 8 }, { x: "D", y: 6 }, { x: "E", y: 20 }]]} />

      //   {/* stack area chart data in the form of 2d array */}
      // <StackAreaChart data = {[[{ x: "A", y: 2 }, { x: "B", y: 3 }, { x: "C", y: 5 }],[{ x: "A", y: 1 }, { x: "B", y: 4 }, { x: "C", y: 5 }],[{ x: "A", y: 3 }, { x: "B", y: 2 }, { x: "C", y: 6 }]]}/>

      // {/* pie chart need a handler for default props */}
      // <PieChart data={[{ x: "A", y: 25 }, { x: "B", y: 15 }, { x: "C", y: 20 }, { x: "D", y: 10 }, { x: "E", y: 18 }, { x: "F", y: 12 }]} inRadius={0} />

      // {/* donut chart need a handler for default props*/}
      // <PieChart data={[{ x: "A", y: 25 }, { x: "B", y: 15 }, { x: "C", y: 20 }, { x: "D", y: 10 }, { x: "E", y: 18 }, { x: "F", y: 12 }]} inRadius={40} />

      // {/* grouped bar chart exmaple with 3 grouped data */}
      // <GroupBarCharts data={[[{ x: "A", y: 1 }, { x: "B", y: 2 }, { x: "C", y: 5 }],[{ x: "A", y: 2 }, { x: "B", y: 1 }, { x: "C", y: 7 }],[{ x: "A", y: 3 }, { x: "B", y: 4 }, { x: "C", y: 9 }]]} horizontal={false}/>

      // {/*grouped bar chart horizontal*/}
      // <GroupBarCharts data={[[{ x: "A", y: 1 }, { x: "B", y: 2 }, { x: "C", y: 5 }],[{ x: "A", y: 2 }, { x: "B", y: 1 }, { x: "C", y: 7 }],[{ x: "A", y: 3 }, { x: "B", y: 4 }, { x: "C", y: 9 }]]} horizontal={true}/>

      // {/* Bar chart requires data in the form of 2d array */}     
      // <StackBarChart  data={[[{ x: "A", y: 5 }, { x: "B", y: 7 }, { x: "C", y: 2 }, { x: "D", y: 4 }, { x: "E", y: 1 }, { x: "F", y: 10 }]]} horizontal={false}/>

      // {/* Bar chart horizontal */}
      // <StackBarChart  data={[[{ x: "A", y: 5 }, { x: "B", y: 7 }, { x: "C", y: 2 }, { x: "D", y: 4 }, { x: "E", y: 1 }, { x: "F", y: 10 }]]} horizontal={true}/>

      // {/*Stack bar chart requires data in the form of 2d array*/}
      // <StackBarChart data={[[{ x: "A", y: 2 }, { x: "B", y: 3 }, { x: "C", y: 5 }],[{ x: "A", y: 1 }, { x: "B", y: 4 }, { x: "C", y: 5 }],[{ x: "A", y: 3 }, { x: "B", y: 2 }, { x: "C", y: 6 }]]} horizontal={false} />

      // {/*Stack Bar Chart horizontal */}
      // <StackBarChart data={[[{ x: "A", y: 2 }, { x: "B", y: 3 }, { x: "C", y: 5 }],[{ x: "A", y: 1 }, { x: "B", y: 4 }, { x: "C", y: 5 }],[{ x: "A", y: 3 }, { x: "B", y: 2 }, { x: "C", y: 6 }]]} horizontal={true}/>

      // {/* Line Chart */}
      // <LineChart data={[{ x: "A", y: 2 },{ x: "B", y: 3 },{ x: "C", y: 5 },{ x: "D", y: 4 },{ x: "E", y: 7 }]}/>         

      // {/* <HbarSort data={[{ x: "a", y: 5 }, { x: "b", y: 7 }, { x: "c", y: 2 }, { x: "d", y: 4 }, { x: "e", y: 1 }, { x: "f", y: 10 }]} /> */}
      // </div>      

      //{/* map chart */}
      // <MapChart/>

      //{}
      // <div>
      //   <Central/>
      // </div>

      //{}
      // <div>
      //     <HbarSort  data={[[{ x: "A", y: 5 }, { x: "B", y: 7 }, { x: "C", y: 2 }, { x: "D", y: 4 }, { x: "E", y: 1 }, { x: "F", y: 10 }]]} />
      // </div>
      // <div>
      //   <MapChartCard />
      // </div>

      // <div>
      //   <Central/>
      // </div>

      // <div>
      //     <Layout/>
      // </div>

      // <div>
      //   <LoginForm />
      // </div>

      // <div>Hello</div>
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/login" exact component={LoginForm} />
            <Route path="/home" exact component={Layout} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App