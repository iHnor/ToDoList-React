import { TASKS_LOADED, TASK_UPDATE_DONE, TASK_CREATED, TASKS_DELETE } from "./types"
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

export const createTask = newTask => dispatch => {
    fetch(taskURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
    .then(res => res.json())
    .then(task => dispatch({
        type: TASK_CREATED,
        payload: task
    }))
}

export const removeTask = task => dispatch => {
    fetch(taskURL + '/' + task.id, {
        method: 'DELETE'
    })
    .then(_ => dispatch({
        type: TASKS_DELETE,
        payload: task
    }))
}