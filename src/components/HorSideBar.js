import React from 'react'
import { Sidebar, Segment, Menu, Icon, Header, Image, Container } from 'semantic-ui-react'

class HorSidebar extends React.Component {

  constructor() {
    super()
    this.state = { visible: true }
  }
  render() {
    return (     
      
          <Sidebar
            as={Menu}
            animation='scaledown'
            icon='labeled'
            inverted
            vertical
            visible={this.props.visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
            Home
          </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
            Games
          </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
            Channels
          </Menu.Item>
          </Sidebar>        
       
    )
  }
}

export default HorSidebar