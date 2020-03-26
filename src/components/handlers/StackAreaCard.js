import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import StackAreaChart from '../Charts/StackAreaChart'

class StackAreaCard extends React.Component {
    render() {
        return (
            <Card>
                <StackAreaChart data = {[[{ x: "A", y: 2 }, { x: "B", y: 3 }, { x: "C", y: 5 }],[{ x: "A", y: 1 }, { x: "B", y: 4 }, { x: "C", y: 5 }],[{ x: "A", y: 3 }, { x: "B", y: 2 }, { x: "C", y: 6 }]]}/>
            </Card>
        )
    }
}
export default StackAreaCard