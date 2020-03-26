import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import LineChart from '../Charts/LineChart'

class LineCard extends React.Component {
    render() {
        return (
            <Card>
                <LineChart data={[{ x: "A", y: 2 }, { x: "B", y: 3 }, { x: "C", y: 5 }, { x: "D", y: 4 }, { x: "E", y: 7 }]} />
            </Card>
        )
    }
}
export default LineCard