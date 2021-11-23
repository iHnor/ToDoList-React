import React from "react"

const DescriptDelete = ({desc}) => {
    return (
        <div className="description-delete">
            <p>{desc}</p>
            <button>X</button>
        </div>
    )
}

export default DescriptDelete