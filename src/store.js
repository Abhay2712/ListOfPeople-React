import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {personListReducer, personDetailsReducer} from './reducers/personReducers'

const reducer= combineReducers({
    personList: personListReducer,
    personDetails: personDetailsReducer
})

const middleware=[thunk]

const store= createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
