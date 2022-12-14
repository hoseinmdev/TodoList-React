import TodoInput from "../TodoInput/TodoInput";
import { useTodosContext } from "../TodoApp/TodoApp";
import { useState, useEffect } from "react";
import { FaTrash, FaCheck, FaUserEdit, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";
import styles from "./todo.module.css";

const Todo = ({ title, id, date }) => {
  const [show, setShow] = useState(0);
  const [iconShow, setIconShow] = useState(0);
  const [completedIconShow, setCompletedIconShow] = useState(0);
  const [fade, setFade] = useState(0);
  const [edit, setEdit] = useState(false);
  const { dispatch, state } = useTodosContext();
  const getTodos = JSON.parse(localStorage.getItem("todos"));

  useEffect(() => {
    setIconShow(1);
    setCompletedIconShow(1);
    setShow(1);
    setFade(1);
  }, []);
  useEffect(() => {
    const findTodo = getTodos.todos.find((todo) => todo.isCompleted);
    if (findTodo) {
      console.log(findTodo.id);
      if (findTodo.id === id) {
        setFade(0.5);
      }
    }
  }, [state]);

  const deleteHandler = () => {
    toast.error("تودو حذف شد");
    setShow(0);
    setTimeout(() => dispatch({ id: id, type: "deleteTodo" }), 120);
  };
  const editHandler = () => {
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
      setCompletedIconShow(0);
      setTimeout(() => setCompletedIconShow(1), 110);
      toast.success("به لیست انجام شده ها اضافه شد");
    } else {
      setFade(1);
      setCompletedIconShow(0);
      setTimeout(() => setCompletedIconShow(1), 110);
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
            <p>{title}</p>
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
              style={{ scale: `${completedIconShow}` }}
            >
              {fade === 0.5 ? <FaTimes /> : <FaCheck />}
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
              setEdit={setEdit}
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
