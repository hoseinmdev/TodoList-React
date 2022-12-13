import { useState, useEffect } from "react";
import styles from "./todoInput.module.css";
import { useTodosContext } from "../TodoApp/TodoApp";
import { toast } from "react-hot-toast";

const TodoInput = ({
  buttonTitle,
  placeholder,
  todoValue = "",
  todoId,
  setEdit,
}) => {
  const [show, setShow] = useState(0);
  const [fade, setFade] = useState(0)
  const [value, setValue] = useState(todoValue);
  const { dispatch } = useTodosContext();

  useEffect(() => {
    setShow(1)
    setTimeout(() => setFade(1), 10);
  }, []);

  const addTodoHandler = () => {
    if (value === "") {
      toast.error("عنوان را وارد کنید");
    } else {
      toast.success("تودو اضافه شد");
      dispatch({ value: value, type: "addTodo" });
    }
    setValue("");
  };
  const editTodoHandler = () => {
    toast.success("ویرایش شد");
    setShow(0);
    setTimeout(
      () => dispatch({ id: todoId, value: value, type: "editTodo" }),
      150
    );
    setEdit(false);
  };

  return (
    <div>
      {show ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={styles.todoInput}
          style={{ transform: `scale(${fade})` }}
        >
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder ? placeholder : "عنوان را وارد کنید"}
            type="text"
            value={value}
            minLength={1}
            maxLength={18}
          />
          <button
            onClick={() => {
              !buttonTitle ? addTodoHandler() : editTodoHandler();
              setValue("");
            }}
          >
            {buttonTitle ? buttonTitle : "افزودن"}
          </button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoInput;
