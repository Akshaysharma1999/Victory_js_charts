import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment, Input } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { otpLogIn, sendOtp } from '../../actions'
import { Link } from 'react-router-dom'

class LogInWithOtp extends React.Component {    

    renderErrorMessage = ({ error, touched }) => {
        if (error && touched) {
            return { content: error, pointing: 'below' }
        }
        else {
            return false
        }
    }

    renderInput = ({ input, meta, placeholder, label, type, icon }) => {
        // console.log(meta)
        return (
            <Form.Field >
                <label left>{label}</label>
                <Form.Input error={this.renderErrorMessage(meta)}
                    {...input}
                    icon={icon}
                    iconPosition='left'
                    type={type}
                    onChange={input.onChange}
                    value={input.value} placeholder={placeholder} />
                {/* {this.renderErrorMessage(meta)} */}
            </Form.Field>
        )
    }
   
    renderRequestError = () => {
        console.log(this.props.requestErrors)
        if(this.props.requestErrors.message)
        {
            return (
                < Message negative >
                    <Message.Header>Error</Message.Header>
                    <p>{this.props.requestErrors.message}</p>
                </Message >
            )
        }
    }
    
    renderRequestSuccess = () => {
        console.log(this.props.requestSuccess)
        if(this.props.requestSuccess.message)
        {
            return (                
                < Message success >
                    <Message.Header>Success</Message.Header>
                    <p>{this.props.requestSuccess.message}</p>
                </Message >
            )
        }
    }

    renderSegment = () => {
        if (this.props.requestSuccess.message === undefined) {
            return (
                <Segment textAlign="left">
                    <Field name="mobileNo" component={this.renderInput} icon="phone" label="Mobile No" placeholder="Enter Mobile No" type="text"></Field>
                    {this.renderButton("Send OTP")}
                </Segment>
            )
        }
        else {
            return (
                <Segment textAlign="left">
                    <Field name="otp" component={this.renderInput} icon="user secret" label="OTP" placeholder="Enter OTP" type="password"></Field>
                    {this.renderButton("Login")}
                </Segment>
            )
        }
    }

    renderButton = (text) => {
    return (<Button color='teal' fluid size='large'>{text}</Button>)
    }

    onSubmit = (formvalues) => {
        if(this.props.requestSuccess.message === undefined)
        {
            this.props.sendOtp(formvalues)
            this.setState({temp:true})
        }
        else
        {
            this.props.otpLogIn(formvalues)
        }
    }

    render() {
        // console.log(this.props)
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    {this.renderRequestError()}
                    {this.renderRequestSuccess()}
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name="signup" /> Log-in to your account
                    </Header>
                    <Form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <Segment textAlign="left">
                            {this.renderSegment()}
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.mobileNo) {
        errors.mobileNo = 'You must enter Mobile Number'
    }
    else if (!/^\d{10}$/.test(formValues.mobileNo)) {
        errors.mobileNo = 'Enter a valid Phone-No'
    }

    return errors
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {requestErrors:state.user.errors,requestSuccess:state.user.success}
}

export default connect(mapStateToProps, { otpLogIn, sendOtp })(reduxForm({ form: 'LoginForm', validate })(LogInWithOtp))