import {combineReducers} from 'redux'
import test from './test'
import { reducer as formReducer } from 'redux-form'

export default combineReducers(
    {
        test:test,
        form:formReducer
    }
)