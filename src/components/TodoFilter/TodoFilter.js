import React, { useContext } from "react";
import { TodoContext } from "../TodoApp/TodoApp";
import Select from "react-select";
import styles from "./todoFilter.module.css";

const TodoFilter = () => {
  const options = [
    { value: "all", label: "همه" },
    { value: "completed", label: "فقط انجام شده ها" },
    { value: "unCompleted", label: "فقط انجام نشده ها" },
  ];
  const { dispatch, state } = useContext(TodoContext);
  
  const filterTodoHandler = (e) => {
    dispatch({ type: e.value });
  };
  return (
    <div>
      <Select
        options={options}
        onChange={(e) => filterTodoHandler(e)}
        placeholder="فیلتر بر اساس :"
        className={styles.todoFilter}
      />
    </div>
  );
};

export default TodoFilter;
