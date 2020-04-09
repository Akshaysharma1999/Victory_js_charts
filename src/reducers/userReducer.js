import {ERROR} from '../actions/types'
const INITIAL_STATE={
    errors:{}
}
export default (state=INITIAL_STATE,action)=>{
    if(action.type===ERROR)
    {
        // console.log(action.payload)
       return {...state,errors:action.payload}
    }
    else
    {
       return state
    }
}
