import { DASHBOARD_LOADED } from './actions'
import { combineReducers } from 'redux'

const openedTasksReducer = (state = {}, action) => {
    switch (action.type){
        case "DASHBOARD_LOADED":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    today: (today = 0, { type, payload }) => type === DASHBOARD_LOADED ? payload.todayTasks : today,
    lists: (lists = [], { type, payload }) => type === DASHBOARD_LOADED ? payload.unDoneList : lists,
    openedTasks: openedTasksReducer
})



// import { configureStore } from '@reduxjs/toolkit'
// const reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case "ADD_CASH":
//             return { ...state, cash: state.cash + action.payload }
//         case "GET_CASH":
//             return { ...state, cash: state.cash + action.payload }
//         default:
//             return state;
//     }
// }
// const store = createStore(reducer)
// export default configureStore({ store });
