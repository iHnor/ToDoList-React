import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import List from "./List";
import { useDispatch, useSelector } from 'react-redux';
import { loadDashboard } from '../store/dashboard/actions';

const LeftBar = () => {

    const dispatch = useDispatch();
    const lists = useSelector(state => state.dashboard.lists);

    useEffect(() => {
        dispatch(loadDashboard)
    }, [])

    return (
        <div className="menu">

            <NavLink to={"/today"}>
                <button id="done-button">На сьогодні</button>
            </NavLink>
            <h3>Списки</h3>
            {
                lists.map((l, id) => <List list={l} key={id} />)
            }
        </div >

    )
}

export default LeftBar;