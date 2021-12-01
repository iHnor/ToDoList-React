import { TASKS_LOADED } from './actions'
// import { combineReducers } from 'redux'

const TasksReducer = (state = [], action) => {
    switch (action.type){
        case TASKS_LOADED:
            return action.payload;
        default:
            return state;
    }
}

export default TasksReducer;