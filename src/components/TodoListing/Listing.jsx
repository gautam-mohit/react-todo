import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

// {
//     "sing":false,
//     "dance":false,
// }

export default function Listing(props) {
  const { item } = props;
  const [todos, setTodos] = useState({});
  const [originalTodos, setOriginalTodos] = useState({});

  useEffect(() => {
    if (item) {
      //   creating new copy
      const newTodo = { ...todos };
      // adding new element
      newTodo[item] = false;
      setTodos(newTodo);
      setOriginalTodos(newTodo);
    }
  }, [item]);

  const changeStatus = (todo, status) => {
    //   creating new copy
    const newTodo = { ...todos };
    // adding new element
    newTodo[todo] = status;
    setTodos(newTodo);
    setOriginalTodos(newTodo);
  };

  const deleteTodo = (todo) => {
    //   creating new copy
    const newTodo = { ...todos };
    // adding new element
    delete newTodo[todo];
    setTodos(newTodo);
    setOriginalTodos(newTodo);
  };
  const updateTodo = (oldValue, newValue) => {
    //   creating new copy
    const newTodo = { ...todos };
    newTodo[newValue] = newTodo[oldValue];
    delete newTodo[oldValue];
    setTodos(newTodo);
    setOriginalTodos(newTodo);
  };

  const filterTodo = (status) => {
    switch (status) {
      case "complete":
        const completeTodos = {};
        Object.keys(originalTodos).forEach((todo) => {
          if (todos[todo]) {
            completeTodos[todo] = true;
          }
        });
        setTodos(completeTodos);
        break;
      case "incomplete":
        const inCompleteTodos = {};
        Object.keys(originalTodos).forEach((todo) => {
          if (!todos[todo]) {
            inCompleteTodos[todo] = false;
          }
        });
        setTodos(inCompleteTodos);
        break;
      default:
        setTodos(originalTodos);
        break;
    }
  };

  return (
    <div>
      {Object.keys(todos).map((todo) => {
        return (
          <TodoItem
            name={todo}
            status={todos[todo]}
            key={todo}
            onStatusChange={changeStatus}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        );
      })}
      <div className="filter">
        <p>{Object.keys(todos).length} Todos</p>
        <button onClick={() => filterTodo("all")}>All</button>
        <button onClick={() => filterTodo("complete")}>Complete</button>
        <button onClick={() => filterTodo("incomplete")}>Incomplete</button>
      </div>
    </div>
  );
}
