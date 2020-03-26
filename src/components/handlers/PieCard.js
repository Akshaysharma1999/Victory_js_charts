import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import PieChart from '../Charts/PieChart'

class PieCard extends React.Component {
    render() {
        return (
            <Card>
                <PieChart data={[{ x: "A", y: 25 }, { x: "B", y: 15 }, { x: "C", y: 20 }, { x: "D", y: 10 }, { x: "E", y: 18 }, { x: "F", y: 12 }]} inRadius={this.props.inRadius} />
            </Card>
        )
    }
}
export default PieCard