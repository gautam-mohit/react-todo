import React from "react";

export default function TodoInput(props) {
  const { getValue } = props;

  const addTodo = (e) => {
    e.preventDefault();
    const form = document.forms["todoForm"];
    getValue(form.todoText.value);
  };

  return (
    <div>
      <form name="todoForm" onSubmit={(e) => addTodo(e)}>
        <input type="text" name="todoText" />
      </form>
    </div>
  );
}
