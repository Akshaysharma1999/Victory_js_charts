import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import StackBarChart from '../Charts/StackBarChart'

class BarCard extends React.Component {
    render() {
        return (
            <Card>
                <StackBarChart data={[[{ x: "A", y: 5 }, { x: "B", y: 7 }, { x: "C", y: 2 }, { x: "D", y: 4 }, { x: "E", y: 1 }, { x: "F", y: 10 }]]} horizontal={this.props.horizontal} />
            </Card>
        )
    }
}
export default BarCard