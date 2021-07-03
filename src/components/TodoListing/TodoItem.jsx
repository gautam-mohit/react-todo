import React from "react";

export default function TodoItem(props) {
  const { name, status, onStatusChange, onDelete } = props;
  return (
    <div>
      <input
        type="checkbox"
        value={status}
        onChange={(e) => onStatusChange(name, e.target.checked)}
      />
      <div style={{ color: status ? "green" : "red" }}>{name}</div>
      <button onClick={() => onDelete(name)}>Delete</button>
    </div>
  );
}
