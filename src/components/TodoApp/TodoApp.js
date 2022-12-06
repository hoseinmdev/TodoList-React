import Todo from "../Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";
import styles from "./todoApp.module.css"
const TodoApp = () => {
    return (
      <div className={styles.todoPosition}>
        <TodoInput />
        <Todo />
      </div>
    );
}
 
export default TodoApp;