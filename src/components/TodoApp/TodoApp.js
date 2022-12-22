import styles from "./todoApp.module.css";
import { v4 as uuid } from "uuid";
import { createContext, useContext, useReducer, useEffect } from "react";
import { Toaster } from "react-hot-toast";
export const TodoContext = createContext();

const TodoApp = ({ children }) => {
  const reducer = (state, action) => {
    if (action.type === "addTodo") {
      const unique_id = uuid();
      let options = { year: "numeric", month: "long", day: "numeric" };
      const newTodo = {
        title: action.value,
        id: unique_id,
        date: new Date().toLocaleDateString("fa-IR", options),
        isCompleted: false,
      };
      return {
        ...state,
        backup: [...state.backup, newTodo],
        todos: [...state.todos, newTodo],
      };
    }
    if (action.type === "deleteTodo") {
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.id);
      return { backup: updatedTodos, todos: updatedTodos };
    }
    if (action.type === "completeTodo") {
      const completedTodo = state.todos.map((todo) => {
        if (todo.id === action.id) {
          if (todo.isCompleted === true) {
            todo.isCompleted = false;
          } else {
            todo.isCompleted = true;
          }
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(completedTodo));
      return { backup: completedTodo, todos: completedTodo };
    }
    if (action.type === "editTodo") {
      const todoEdited = state.todos.map((todo) => {
        if (todo.id === action.id) {
          todo.title = action.value;
        }
        return todo;
      });
      return { backup: todoEdited, todos: todoEdited };
    }
    // Filter todos actions
    if (action.type === "all") {
      return { backup: state.backup, todos: state.backup };
    }
    if (action.type === "completed") {
      const completedTodos = state.backup.filter(
        (todo) => todo.isCompleted !== false
      );
      localStorage.setItem("todos", JSON.stringify(completedTodos));
      return {
        backup: state.backup,
        todos: completedTodos.length !== 0 ? completedTodos : state.backup,
      };
    }
    if (action.type === "unCompleted") {
      const unCompletedTodos = state.backup.filter(
        (todo) => todo.isCompleted === false
      );
      localStorage.setItem("todos", JSON.stringify(unCompletedTodos));

      return {
        backup: state.backup,
        todos: unCompletedTodos.length !== 0 ? unCompletedTodos : state.backup,
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, { todos: [], backup: [] });
  if (state.backup.length !== 0) {
    localStorage.setItem("todos", JSON.stringify(state));
  }
  const value = { state: state.todos, dispatch };

  return (
    <div className={styles.todoPosition}>
      <h1>اپلیکیشن تودولیست / React.js</h1>
      <TodoContext.Provider value={value}>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#6d28d9",
                secondary: "white",
              },
            },
            error: {
              style: {
                color: "#dc2626",
              },
            },
            style: {
              color: "#6d28d9",
            },
          }}
          position="top-left"
          reverseOrder={true}
        />
        {children}
      </TodoContext.Provider>
    </div>
  );
};

export const useTodosContext = () => useContext(TodoContext);
export default TodoApp;
