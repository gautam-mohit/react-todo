import "./App.css";
import TodoInput from "./components/TodoInput";
import Listing from "./components/TodoListing/Listing";

function App() {
  const getTodoValue = (value) => {
    console.log("Value from form==>", value);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoInput getValue={getTodoValue} />
      <Listing />
    </div>
  );
}

export default App;
