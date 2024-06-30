import React from "react";

function DeleteButton({ onDelete,id }) {
    return <button
    className="card__delete"
    onClick={() => onDelete(id)}
    >X</button>
}

export default DeleteButton