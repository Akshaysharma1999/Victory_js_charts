import React from 'react'
import { Container,Dropdown,Image,Menu, Button, Icon} from 'semantic-ui-react'


class Navbar extends React.Component {
    render() {
        return (
           
            <Menu fixed='top' inverted size="massive">                 
                <Container>
                    <Menu.Item as='a' header onClick={this.props.onClick}>
                      <Icon name="sidebar"/>
                   Project Name
                             </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>  

                    <Dropdown item simple text='Dropdown'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon' />
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Menu>            
        )
    }
}

export default Navbar
