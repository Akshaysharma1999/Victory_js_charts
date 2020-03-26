import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import GroupBarCharts from '../Charts/GroupBarCharts'

class GroupedBarCard extends React.Component {
    render() {
        return (
            <Card>
                 <GroupBarCharts data={[[{ x: "A", y: 1 }, { x: "B", y: 2 }, { x: "C", y: 5 }],[{ x: "A", y: 2 }, { x: "B", y: 1 }, { x: "C", y: 7 }],[{ x: "A", y: 3 }, { x: "B", y: 4 }, { x: "C", y: 9 }]]} horizontal={this.props.horizontal}/>
            </Card>
        )
    }
}
export default GroupedBarCard