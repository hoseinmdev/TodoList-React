import { useState, useRef, useContext } from "react";
import styles from "./todoInput.module.css";
import { useTodosContext } from "../TodoApp/TodoApp";
import { Toaster, toast } from "react-hot-toast";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const inputBox = useRef();
  const { dispatch } = useTodosContext();

  const clickHandler = (e) => {
    if (value === "") {
      alert("dsada");
    } else {
      toast.success("تودو اضافه شد");
      dispatch({ value: value, type: "addTodo" });
    }
    inputBox.current.value = "";
  };
  return (
    <div>
      <div className={styles.todoInput}>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="عنوان را وارد کنید"
          ref={inputBox}
        />
        <button
          onClick={() => {
            clickHandler();
            setValue("");
          }}
        >
          افزودن
        </button>
      </div>

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
    </div>
  );
};

export default TodoInput;
