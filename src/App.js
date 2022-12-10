// import Todo from "./components/Todo/Todo";
import TodoApp from "./components/TodoApp/TodoApp";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
    return ( 
        <TodoApp>
            <TodoInput/>
            <TodoList/>
        </TodoApp>
     );
}
 
export default App;