import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import StackBarChart from '../Charts/StackBarChart'

class StackBarCard extends React.Component {
    render() {
        return (
            <Card>
                <StackBarChart data={[[{ x: "A", y: 2 }, { x: "B", y: 3 }, { x: "C", y: 5 }], [{ x: "A", y: 1 }, { x: "B", y: 4 }, { x: "C", y: 5 }], [{ x: "A", y: 3 }, { x: "B", y: 2 }, { x: "C", y: 6 }]]} horizontal={this.props.horizontal} />
            </Card>
        )
    }
}
export default StackBarCard