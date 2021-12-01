import { TASKS_LOADED, TASK_UPDATE_DONE } from "./types"
const listsURL = "https://localhost:5001/list";
const taskURL = "https://localhost:5001/task";

export const loadTasks = id => dispatch => {
    fetch(listsURL + "/" + id)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            payload: tasks
        }))
}

export const doneTask = task => dispatch => {
    fetch(taskURL + '/' + task.id, {
        method: 'PATCH',
    })
        .then(_ => dispatch({
            type: TASK_UPDATE_DONE,
            payload: task
        }))
}