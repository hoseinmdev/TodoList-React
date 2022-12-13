// import Todo from "./components/Todo/Todo";
import TodoApp from "./components/TodoApp/TodoApp";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";

const App = () => {
  return (
    <TodoApp>
      <TodoInput />
      <TodoList />
    </TodoApp>
  );
};

export default App;
