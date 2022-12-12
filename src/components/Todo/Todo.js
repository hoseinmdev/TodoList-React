import styles from "./todo.module.css";

import { FaTrash, FaCheck, FaUserEdit, FaTimes } from "react-icons/fa";
import { useTodosContext } from "../TodoApp/TodoApp";
import { toast } from "react-hot-toast";
import { useRef, useState, useEffect } from "react";
import TodoInput from "../TodoInput/TodoInput";

const Todo = ({ title, id, date }) => {
  const [show, setShow] = useState(0);
  const [iconShow, setIconShow] = useState(0);
  const [fade, setFade] = useState(1);
  const [edit, setEdit] = useState(false);
  const { dispatch, state } = useTodosContext();
  const todoBlockText = useRef();

  useEffect(() => {
    setIconShow(1);
    setShow(1);
    setFade(1);
  }, []);

  const deleteHandler = () => {
    toast.error("تودو حذف شد");
    setShow(0);
    setTimeout(() => dispatch({ id: id, type: "deleteTodo" }), 110);
  };
  const editHandler = () => {
    toast.success("ویرایش شد");
    if (!edit) {
      setIconShow(0);
      setTimeout(() => setIconShow(1), 110);
      setEdit(true);
    } else {
      setIconShow(0);
      setEdit(false);
      setTimeout(() => setIconShow(1), 110);
    }
  };
  const completeHandler = () => {
    if (fade === 1) {
      setFade(0.5);
      todoBlockText.current.classList.toggle(styles.todoCompletedText);
      toast.success("به لیست انجام شده ها اضافه شد");
    } else {
      setFade(1);
      todoBlockText.current.classList.remove(styles.todoCompletedText);
      toast.error("از لیست انجام شده ها حذف شد");
    }
    dispatch({ id: id, type: "completeTodo" });
  };
  return (
    <>
      <div
        className={`${styles.todoBlock}`}
        style={{ transform: `scale(${show})`, opacity: `${fade}` }}
      >
        <div>
          <div className={`${styles.todoTitleDate}`}>
            <p ref={todoBlockText}>{title}</p>
            <p>تاریخ : {date}</p>
          </div>
          <div>
            <span
              onClick={() => editHandler()}
              className={styles.editIcon}
              style={{ scale: `${iconShow}` }}
            >
              {!edit ? <FaUserEdit /> : <FaTimes />}
            </span>
            <span onClick={() => deleteHandler()} className={styles.trashIcon}>
              <FaTrash />
            </span>
            <span
              onClick={() => completeHandler()}
              className={styles.checkIcon}
            >
              <FaCheck />
            </span>
          </div>
        </div>
        <div className={`${styles.todoInputBlock}`}>
          {edit ? (
            <TodoInput
              todoValue={title}
              buttonTitle={"ویرایش"}
              placeholder={"متن جدید را وارد کنید"}
              todoId={id}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
