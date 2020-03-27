import React from 'react'
import { VictoryLine, VictoryChart, VictoryTheme, VictoryTooltip, VictoryScatter, VictoryGroup, VictoryVoronoiContainer, VictoryLabel ,VictoryZoomContainer,createContainer} from 'victory'

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

class LineChart extends React.Component {
    constructor() {
        super()
        this.state = { data: [{ y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }, { y: 0 }] }
    }
    componentDidMount() {
        this.setState({ data: this.props.data })
    }
    render() {
        return (
            <VictoryChart height={300} width={300}
                containerComponent={<VictoryZoomVoronoiContainer/>}              
                theme={VictoryTheme.material}
            >
                <VictoryGroup
                    color="#c43a31"
                    labels={({ datum }) => `${datum.x}: ${datum.y}`}
                    labelComponent={
                        <VictoryTooltip
                            style={{ fontSize: 20 }}
                        />
                    }
                    data={this.state.data}
                >
                    <VictoryLine
                        animate                        
                    />
                    <VictoryScatter                   
                        size={({ active }) => active ? 8 : 3}
                    />
                </VictoryGroup>
                <VictoryLabel text="Y label" x={10} y={150} textAnchor="middle" labelPlacement="parallel" angle="270" />
                <VictoryLabel text="X label" x={150} y={288} textAnchor="middle" labelPlacement="parallel" />
            </VictoryChart>
        )
    }
}

export default LineChart 