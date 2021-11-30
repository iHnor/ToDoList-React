class QueriesRestApi {

    delete(task, URL) {
        fetch(URL + '/' + task.id, {
            method: 'DELETE'
        })
    }

    create(newTask, URL) {
        console.log(newTask);
        return fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())
    }

    update(id, URL) {
        fetch(URL + '/' + id, {
            method: 'PATCH',
        })
    }
}
export default QueriesRestApi;