import { combineReducers } from 'redux'
import customerReducer from './customer'

const rootReducer = combineReducers(
    {
        customerReducer
    }
)

export default rootReducer