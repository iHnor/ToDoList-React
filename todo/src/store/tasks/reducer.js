import { TASKS_LOADED, TASK_UPDATE_DONE, TASK_CREATED, TASKS_DELETE, TODAY_LOADED } from './types'

const TasksReducer = (state = [], action) => {
    switch (action.type) {
        case TASKS_LOADED:
            return action.payload;
        case TASK_UPDATE_DONE:
            return state.map(s => s.id === action.payload.id ? action.payload : s);
        case TASK_CREATED:
            return [...state, action.payload];
        case TASKS_DELETE:
            return state.filter(s => s.id !== action.payload.id );
        case TODAY_LOADED:
            return action.payload;    
        default:
            return state;
    }
}

export default TasksReducer;