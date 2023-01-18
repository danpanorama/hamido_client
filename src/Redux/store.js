import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import ErrorReducer from './reducers/errReducer'
import storeReducer from './reducers/storeReducer'
import usersReducer from './reducers/usersReducer'



const reducer = combineReducers({
    err:ErrorReducer,
    users:usersReducer,
    store:storeReducer
 
   
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store