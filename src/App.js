import { TodoFrame } from "./components/TodoFrame";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoFrame>
        <TodoInput />
        <TodoList />
      </TodoFrame>
    </div>
  );
}

export default App;
