import { combineReducers } from 'redux'
import { dataReducer } from './dataReducer'
import { handelLogin } from './handelLogin'
import { handelVideo } from './handelVideo'


export const rootReducer = combineReducers({
    DataR: dataReducer,
    Red: handelLogin,
    Video :handelVideo
})