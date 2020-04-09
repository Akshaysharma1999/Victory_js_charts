import history from '../history'
import {LOG_IN,ERROR} from './types'
import api from '../api'

export const logIn = (formValues) =>{
    return async (dispatch, getState) => {
        // console.log(formValues)
        api.get('/user', { "key": { ...formValues } })
            .then((response)=>{ 
                // await localStorage.setItem('jwt', JSON.stringify(response.data.user.token))
                // await dispatch({ type: 'LOG_IN', payload: response.data })              
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
        // const response = await api.post('/', { "user": { ...formValues } })
        // await localStorage.setItem('jwt', JSON.stringify(response.data.user.token))
        // await dispatch({ type: 'LOG_IN', payload: response.data })        
        history.push(`/profile`)
    }
}

export const sendOtp = (formValues) =>{
    return async (dispatch, getState) => {
        console.log(formValues)
        // const response = await api.post('/', { "user": { ...formValues } })    
        // await localStorage.setItem('otp', JSON.stringify(response.data.user.token))
        // await dispatch({ type: 'LOG_IN', payload: response.data })
        // history.push(`/`)
    }
}