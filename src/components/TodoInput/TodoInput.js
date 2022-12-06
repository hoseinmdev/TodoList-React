import { useState, useRef } from "react";
import styles from "./todoInput.module.css";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const inputBox = useRef();

  const inputHandler = () => {
    const value = inputBox.current.value;
    setValue(value);
    console.log(value)
  };

  return (
    <div>
      <div className={styles.todoInput}>
        <input ref={inputBox} placeholder="عنوان را وارد کنید" />
        <button onClick={inputHandler}>افزودن</button>
      </div>
    </div>
  );
};

export default TodoInput;
