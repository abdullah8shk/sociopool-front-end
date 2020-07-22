import {combineReducers} from 'redux'
import {appReducer} from './State'


const rootReducer = combineReducers({
    app: appReducer
})

export default rootReducer