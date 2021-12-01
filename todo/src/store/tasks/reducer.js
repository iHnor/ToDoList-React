import { TASKS_LOADED, TASK_UPDATE_DONE } from './types'
// import { combineReducers } from 'redux'

const TasksReducer = (state = [], action) => {
    switch (action.type) {
        case TASKS_LOADED:
            return action.payload;
        case TASK_UPDATE_DONE:
            return state.map(s => s.id === action.payload.id ? action.payload : s);
        default:
            return state;
    }
}

export default TasksReducer;