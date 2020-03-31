import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import HbarSort from '../Charts/HbarSort'

class HbarSortCard extends React.Component {
    render() {
        return (
            <Card>
                <HbarSort  data={[[{ x: "A", y: 5 }, { x: "B", y: 7 }, { x: "C", y: 2 }, { x: "D", y: 4 }, { x: "E", y: 1 }, { x: "F", y: 10 }]]} />
            </Card>
        )
    }
}
export default HbarSortCard