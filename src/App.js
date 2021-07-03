import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Listing from "./components/TodoListing/Listing";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const getTodoValue = (value) => {
    setTodoItem(value);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoInput getValue={getTodoValue} />
      <Listing item={todoItem} />
    </div>
  );
}

export default App;
