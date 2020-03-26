import React from "react";
import { VictoryChart, VictoryArea, VictoryTheme, VictoryLabel, VictoryAxis} from "victory";


class AreaChart extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [{ x: 0, y: 0 }]
    }
  }
  componentDidMount() {
    //   console.log(this.props.data)
    this.setState({ data: this.props.data })
  }

  render() {
    return (     
          <svg width={300} height={300} >
            <VictoryChart
              theme={VictoryTheme.material}
              standalone={false}
              width={300} height={300}              
            >
              <VictoryArea
                standalone={false}
                theme={VictoryTheme.material}
                animate
                width={300} height={300}
                // interpolation="natural"            
                data={this.state.data}
              />
            </VictoryChart>
          </svg>        
    )
  }
}
export default AreaChart
