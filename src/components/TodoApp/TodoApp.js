import styles from "./todoApp.module.css";
import { v4 as uuid } from "uuid";
import { createContext, useContext, useReducer } from "react";
import { Toaster, toast } from "react-hot-toast";
import TodoInput from "../TodoInput/TodoInput";
export const TodoContext = createContext();

const TodoApp = ({ children }) => {
  // const completeTodoHandler = (id) => {
  //   const completedTodo = todo.map((todo) => {
  //     if (todo.id === id) {
  //       if (todo.isCompleted === true) {
  //         todo.isCompleted = false;
  //       } else {
  //         todo.isCompleted = true;
  //       }
  //     }
  //     return todo;
  //   });
  //   setTodo(completedTodo);
  // };

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
      return [...state, newTodo];
    }
    if (action.type === "deleteTodo") {
      const updatedTodos = state.filter((todo) => todo.id !== action.id);
      return updatedTodos;
    }
    if (action.type === "completeTodo") {
      const completedTodo = state.map((todo) => {
        if (todo.id === action.id) {
          if (todo.isCompleted === true) {
            todo.isCompleted = false;
          } else {
            todo.isCompleted = true;
          }
        }
        return todo;
      });
      return completedTodo;
    }
    if (action.type === "editTodo") {
      const todoEdited = state.map((todo) => {
        if (todo.id === action.id) {
          todo.title = action.value;
        }
        return todo;
      });
      return todoEdited;
    }
  };

  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
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
