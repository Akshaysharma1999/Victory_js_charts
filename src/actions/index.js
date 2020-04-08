import history from '../history'
import {LOG_IN} from './types'
// import api from '../api'

export const logIn = (formValues) =>{
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
        // await localStorage.setItem('jwt', JSON.stringify(response.data.user.token))
        // await dispatch({ type: 'LOG_IN', payload: response.data })
        // history.push(`/`)
    }
}