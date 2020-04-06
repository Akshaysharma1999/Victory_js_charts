import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {

  constructor() {
    super()
    this.state = ({ submit: false })
  }

  renderInputs = () => {
    console.log(this.state.submit)
    if (this.state.submit == false) {
      return (
        <Segment >
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
          <Button color='teal' fluid size='large'>Login</Button>
        </Segment>
      )
    }
    else {
      return (
        <Segment >
          <Form.Input fluid icon='phone' iconPosition='left' placeholder='Enter Mobile No.' />
          <Button color='teal' fluid size='large'>Send OTP</Button>
        </Segment>
      )
    }
  }

  renderMessage = () => {
    if (this.state.submit == false) {
    return (
      <Message>
        <Button>Forgot password</Button>
      </Message>
    )
    }
  }

  handleonSubmit = (e,d)=>{
    console.log(e)
    console.log(d)
    console.log("go to login through otp ")
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Icon name="signup" /> Log-in to your account
          </Header>
          <Form size='large' onSubmit={(e,d)=>this.handleonSubmit(d)}>
            {this.renderInputs()}
          </Form>
          <Form size='large' onSubmit={() => this.setState({ submit: !this.state.submit })}>
            {this.renderMessage()}
          </Form>
        </Grid.Column>
      </Grid>
    )
  }

}

export default LoginForm