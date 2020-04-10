import React from 'react'
import { Container,Dropdown,Image,Menu, Button, Icon,Card,Segment,Grid,Placeholder} from 'semantic-ui-react'

class Profile extends React.Component{
    render(){
        return(
        <Container style={{ marginTop: '3em', padding: '2em' }}>

           <Grid columns={2} celled stackable>
            <Grid.Row >
              <Grid.Column width={3} >
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'  />
              </Grid.Column>
              <Grid.Column width={13}>                     
                <Segment fuild>
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
              </Grid.Column> 
            </Grid.Row>
          </Grid>     
          
        </Container>
        )
    }
}

export default Profile