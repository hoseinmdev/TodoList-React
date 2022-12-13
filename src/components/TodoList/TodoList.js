import { useEffect } from "react";
import Todo from "../Todo/Todo";
import TodoFilter from "../TodoFilter/TodoFilter";
import { useTodosContext } from "../TodoApp/TodoApp";
import styles from "./todolist.module.css";
const TodoList = () => {
  const { state } = useTodosContext();
  useEffect(() => {}, [state]);
  
  return (
    <div>
      {state.length === 0 ? (
        <h1 className={styles.notTodoBlock}>
          درحال حاظر هیچ تودویی وجود ندارد
        </h1>
      ) : (
        ""
      )}
      {state.length === 0 ? "" : <TodoFilter />}
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
    </div>
  );
};

export default TodoList;
