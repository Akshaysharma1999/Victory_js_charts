import history from '../history'
import {LOG_IN,ERROR,SUCCESS} from './types'
import api from '../api'

export const logIn = (formValues) =>{
    return async (dispatch, getState) => {
        // console.log(formValues)
        api.post('/register', {email:formValues.username,password:formValues.password})
            .then((response)=>{ 
                console.log(response)
                localStorage.setItem('jwt', JSON.stringify(response.data.token))
                dispatch({ type: 'LOG_IN', payload: response.data })              
                history.push(`/profile`)              
            })
            .catch((error)=>{
                // console.log(error.request)
                // console.log(error.response)
                // console.log(error.message)
                dispatch({ type: ERROR, payload:{message:error.message}})       
            })           
      
        // await localStorage.setItem('jwt', JSON.stringify(response.data.user.token))
        // await dispatch({ type: 'LOG_IN', payload: response.data })        
        // history.push(`/profile`)
    }
}

export const otpLogIn = (formValues) =>{
    return async (dispatch, getState) => {
        console.log(formValues)
         api.post('/checkOtp', {otp:formValues.otp})
            .then((response)=>{ 
                console.log(response)
                localStorage.setItem('jwt', JSON.stringify(response.data.token))
                dispatch({ type: 'LOG_IN', payload: response.data })              
                history.push(`/profile`)              
            })
            .catch((error)=>{
                // console.log(error.request)
                // console.log(error.response)
                // console.log(error.message)
                dispatch({ type: ERROR, payload:{message:error.message}})       
            })     
        // const response = await api.post('/', { "user": { ...formValues } })
        // await localStorage.setItem('jwt', JSON.stringify(response.data.user.token))
        // await dispatch({ type: 'LOG_IN', payload: response.data })        
        // history.push(`/profile`)
    }
}

export const sendOtp = (formValues) =>{
    return async (dispatch, getState) => {
        console.log(formValues)
        api.post('/otp', { "key": { ...formValues } })
            .then((response)=>{ 
                console.log(response)
                // localStorage.setItem('otptoken', JSON.stringify(response.data.id))                             
                // dispatch({type:SUCCESS,payload:{message:response.message}})          
                dispatch({type:SUCCESS,payload:{message:"OTP sent successfully"}})                           
            })
            .catch((error)=>{
                // console.log(error.request)
                // console.log(error.response)
                // console.log(error.message)
                dispatch({ type: ERROR, payload:{message:error.message}})         
            })         
        // const response = await api.post('/', { "user": { ...formValues } })    
        // await localStorage.setItem('otp', JSON.stringify(response.data.user.token))
        // await dispatch({ type: 'LOG_IN', payload: response.data })
        // history.push(`/`)
    }
}