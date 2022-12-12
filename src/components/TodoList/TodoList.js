import { useRef, useEffect } from "react";
import Todo from "../Todo/Todo";
import { useTodosContext } from "../TodoApp/TodoApp";
import TodoInput from "../TodoInput/TodoInput";
import styles from "./todolist.module.css";
const TodoList = () => {
  const { dispatch, state } = useTodosContext();

  useEffect(() => {
    console.log("reloaded")
  }, [state]);
  
  return (
    <div className={styles.todoContainer}>
      {state.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            date={todo.date}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
