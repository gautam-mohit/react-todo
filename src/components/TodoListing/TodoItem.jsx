import React, { useState } from "react";

export default function TodoItem(props) {
  const { name, status, onStatusChange, onDelete, onUpdate } = props;
  const [editMode, setEditMode] = useState(false);

  const handleEdit = (todo) => {
    if (editMode) {
      // TODO:Function to update the single todo
      onUpdate(name, document.getElementsByClassName(name)[0].value);
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value={status}
        onChange={(e) => onStatusChange(name, e.target.checked)}
      />
      {editMode ? (
        <input type="text" defaultValue={name} className={name} />
      ) : (
        <div style={{ color: status ? "green" : "red" }}>{name}</div>
      )}

      <button onClick={() => handleEdit(name)}>
        {editMode ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(name)}>Delete</button>
    </div>
  );
}
