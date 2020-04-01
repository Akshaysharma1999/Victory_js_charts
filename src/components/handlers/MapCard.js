import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import MapChart from '../Charts/MapChart'

class MapCard extends React.Component {
    render() {
        return (
            <Card>
               <MapChart/>
            </Card>
        )
    }
}
export default MapCard