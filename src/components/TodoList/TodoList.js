import { useEffect } from "react";
import Todo from "../Todo/Todo";
import TodoFilter from "../TodoFilter/TodoFilter";
import { useTodosContext } from "../TodoApp/TodoApp";
import styles from "./todolist.module.css";
const TodoList = () => {
  const { state } = useTodosContext();
  useEffect(() => {}, [state]);
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(getTodos)
  return (
    <div>
      {!getTodos ? (
        <h1 className={styles.notTodoBlock}>
          درحال حاظر هیچ تودویی وجود ندارد
        </h1>
      ) : (
        ""
      )}
      {!getTodos ? "" : <TodoFilter />}
      <div className={styles.todoContainer}>
        {getTodos? getTodos.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              title={todo.title}
              id={todo.id}
              date={todo.date}
            />
          );
        }) : ""}
      </div>
    </div>
  );
};

export default TodoList;
