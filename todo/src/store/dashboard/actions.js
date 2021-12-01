export const DASHBOARD_LOADED = 'dashboard/loaded'
const lists = "https://localhost:5001/dashboard";

export const loadDashboard = dispatch => {
    fetch(lists)
        .then(res => res.json())
        .then(dashboard => dispatch({
            type: DASHBOARD_LOADED,
            payload: dashboard
        }))
}