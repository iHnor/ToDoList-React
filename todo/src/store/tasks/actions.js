export const TASKS_LOADED = 'tasks/loaded'
const lists = "https://localhost:5001/list";

export const loadTasks = id => dispatch => {
    fetch(lists + "/" + id)
        .then(res => res.json())
        .then(tasks => dispatch({
            type: TASKS_LOADED,
            payload: tasks
        }))
}