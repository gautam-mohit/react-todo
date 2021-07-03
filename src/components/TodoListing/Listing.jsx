import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

// {
//     "sing":false,
//     "dance":false,
// }

export default function Listing(props) {
  const { item } = props;
  const [todos, setTodos] = useState({});

  useEffect(() => {
    //   creating new copy
    const newTodo = { ...todos };
    // adding new element
    newTodo[item] = false;
    setTodos(newTodo);
  }, [item]);

  return (
    <div>
      {Object.keys(todos).map((todo) => {
        return <TodoItem name={todo} status={todos[todo]} key={todo} />;
      })}
    </div>
  );
}
