import React from 'react'
import { Container, Header, Card } from 'semantic-ui-react'

import PieCard from './handlers/PieCard'
import AreaCard from './handlers/AreaCard'
import StackAreaCard from './handlers/StackAreaCard'
import GroupedBarCard from './handlers/GroupedBarCard'
import BarCard from './handlers/BarCard'
import StackBarCard from './handlers/StackBarCard'
import LineCard from './handlers/LineCard'

class Main extends React.Component {
    render() {
        return (
            <Container  style={{ marginTop: '7em' }}>
                <Header as='h1'>Charts</Header>
                <Card.Group itemsPerRow={3}>
                    <PieCard inRadius={0}/>
                    <PieCard inRadius={60}/>   
                    <AreaCard/>   
                    <StackAreaCard/>     
                    <GroupedBarCard horizontal={false}/>  
                    <GroupedBarCard horizontal={true}/>  
                    <BarCard horizontal={false}/>   
                    <BarCard horizontal={true}/>
                    <StackBarCard horizontal={false}/>
                    <StackBarCard horizontal={true}/>
                    <LineCard/>
                </Card.Group>
            </Container>
        )
    }
}

export default Main