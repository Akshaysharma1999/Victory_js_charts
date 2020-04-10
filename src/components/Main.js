import React from 'react'
import { Container, Header, Card, Segment, Loader, Dimmer, Image, Statistic, Icon,Placeholder } from 'semantic-ui-react'

import PieCard from './handlers/PieCard'
import AreaCard from './handlers/AreaCard'
import StackAreaCard from './handlers/StackAreaCard'
import GroupedBarCard from './handlers/GroupedBarCard'
import BarCard from './handlers/BarCard'
import StackBarCard from './handlers/StackBarCard'
import LineCard from './handlers/LineCard'
import MapCard from './handlers/MapCard'
import HbarSortCard from './handlers/HbarSortCard'
import StackBarHorCentralChart from './Charts/StackedBarHorCentral'
import StackBarHorCentralCard from './handlers/StackBarHorCentralCard'
import CheckBox from './CheckBoxFilter'
import HorSideBar from './HorSideBar'

const data = [
    {
        "_id": 1,
        "name": "PieChart"
    },
    {
        "_id": 2,
        "name": "DonutChart"
    },
    {
        "_id": 3,
        "name": "AreaChart"
    },
    {
        "_id": 4,
        "name": "StackAreaChart"
    },
    {
        "_id": 5,
        "name": "GroupedBarChart"
    },
    {
        "_id": 6,
        "name": "BarChart"
    },
    {
        "_id": 7,
        "name": "StackBarChart"
    },
    {
        "_id": 8,
        "name": "LineChart"
    },
]

class Main extends React.Component {

    constructor() {
        super()
        this.state = { list: [] }
    }

    handleOnChange = (id, checked) => {
        // console.log(id)
        // console.log(checked)
        // console.log(this.state)

        if (checked === true) {
            const currentChecked = [...this.state.list]
            currentChecked.push(id)
            this.setState({ list: currentChecked })
        }
        else {
            const currentChecked = [...this.state.list]
            const newChecked = currentChecked.filter((i) => i !== id)
            this.setState({ list: newChecked })
        }
    }

    renderCards = () => {
        let list = this.state.list
        console.log(this.state.list)
        return list.map((d) => {
            if (d == 1) {
                return <PieCard inRadius={0} />
            }
            if (d == 2) {
                return <PieCard inRadius={60} />
            }
            if (d == 3) {
                return <AreaCard />
            }
            if (d == 4) {
                return <StackAreaCard />
            }
            if (d == 5) {
                return <GroupedBarCard horizontal={false} />
                //   return  <GroupedBarCard horizontal={true}/>
            }
            if (d == 6) {
                return <BarCard horizontal={false} />
                //   return  <BarCard horizontal={true}/>   
            }
            if (d == 7) {
                return <StackBarCard horizontal={false} />
                //   return  <StackBarCard horizontal={true}/>
            }
            if (d == 8) {
                return <LineCard />
            }
            if (d == 9) {
                return <MapCard />
            }
            if (d == 10) {
                return <HbarSortCard />
            }
            if (d == 11) {
                return <StackBarHorCentralCard />
            }
        })
    }

    renderLoading = () => {
        let list = this.state.list
        if (list.length == 0) {
            console.log("f")
            return (

                // <Segment>
                //     <Dimmer active inverted>
                //         <Loader size='large'>Loading</Loader>
                //     </Dimmer>

                //     <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
                //     <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

                // </Segment>
                <Segment>
                <Placeholder  fluid style={{ height: 320}}>
                    <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
                </Segment>
            )
        }
    }

    render() {
        return (
            <Container style={{ marginTop: '3em', padding: '2em' }}>
              
                 <Statistic.Group style={{padding: '1em' }}>
                    <Card.Group>
                    <Card>
                    <Statistic>
                        <Statistic.Value>11+</Statistic.Value>
                        <Statistic.Label>Charts</Statistic.Label>
                    </Statistic>
                    </Card>
                   <Card>
                    <Statistic>
                        <Statistic.Value>19,200</Statistic.Value>
                        <Statistic.Label>Minutes</Statistic.Label>
                    </Statistic>
                    </Card>
                    <Card>
                    <Statistic>
                        <Statistic.Value>12.304</Statistic.Value>
                        <Statistic.Label>Something</Statistic.Label>
                    </Statistic>
                    </Card>                   
                    </Card.Group>
               </Statistic.Group>
                <Card.Group style={{ padding: '1em' }}>
                    <CheckBox handleOnChange={this.handleOnChange} />
                    {this.renderCards()} 
                    {/* <PieCard inRadius={0}/>
                    <PieCard inRadius={60}/>   
                    <AreaCard/>   
                    <StackAreaCard/>     
                    <GroupedBarCard horizontal={false}/>  
                    <GroupedBarCard horizontal={true}/>  
                    <BarCard horizontal={false}/>   
                    <BarCard horizontal={true}/>
                    <StackBarCard horizontal={false}/>
                    <StackBarCard horizontal={true}/>
                    <LineCard/>  */}
                    {/* <MapCard/> */}
                    {/* <HbarSortCard/> */}
                    {/* <StackBarHorCentralCard/> */}
                    {/* <StackBarHorCentralChart/> */}

                </Card.Group> 

                {this.renderLoading()} 
               

            </Container>
        )
    }
}

export default Main