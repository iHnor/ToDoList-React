import { createStore } from 'redux'
import { combineReducers, applyMiddleware } from 'redux'
import dashboardReducer from './dashboard/reducer'
import tasksReducer from './tasks/reducer'
import thunk from 'redux-thunk';


export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks: tasksReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store