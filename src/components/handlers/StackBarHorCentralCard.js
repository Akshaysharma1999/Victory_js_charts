import React from 'react'
import { Card } from 'semantic-ui-react'
import StackBarHorCentralChart from '../Charts/StackedBarHorCentral'


class StackBarHorCentralCard extends React.Component {
    render() {
        return (
            <Card>
                <StackBarHorCentralChart
                    dataA={[
                        { x: "Personal Drones", y: 57 },
                        { x: "Smart Thermostat", y: 40 },
                        { x: "Television", y: 38 },
                        { x: "Smartwatch", y: 37 },
                        { x: "Fitness Monitor", y: 25 },
                        { x: "Tablet", y: 19 },
                        { x: "Camera", y: 15 },
                        { x: "Laptop", y: 13 },
                        { x: "Phone", y: 12 }
                    ]}

                    dataB={[
                        { x: "Personal Drones", y: 57 },
                        { x: "Smart Thermostat", y: 40 },
                        { x: "Television", y: 38 },
                        { x: "Smartwatch", y: 37 },
                        { x: "Fitness Monitor", y: 25 },
                        { x: "Tablet", y: 19 },
                        { x: "Camera", y: 15 },
                        { x: "Laptop", y: 13 },
                        { x: "Phone", y: 12 }
                    ]}
                />
            </Card>
        )
    }
}
export default StackBarHorCentralCard