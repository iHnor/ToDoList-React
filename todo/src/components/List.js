import React from "react";

const List = (props) => {
    return (
        <button className = "list-button" disabled={false}>{props.list.title}</button> 
    )
}

export default List;