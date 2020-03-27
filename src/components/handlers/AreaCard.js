import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import StackAreaChart from '../Charts/StackAreaChart'

class AreaCard extends React.Component {
    render() {
        return (
            <Card >
                <StackAreaChart  data={[[{ x: "A", y: 10}, { x: "B", y: 5 }, { x: "C", y: 8 }, { x: "D", y: 6 }, { x: "E", y: 20 }]]} />
            </Card>
        )
    }
}
export default AreaCard