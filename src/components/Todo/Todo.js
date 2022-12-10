import styles from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useTodosContext } from "../TodoApp/TodoApp";
import { toast } from "react-hot-toast";

import "react-toastify/dist/ReactToastify.css";

const Todo = ({ title, id, date }) => {
  const { dispatch } = useTodosContext();

  const deleteHandler = () => {
    toast.error("تودو حذف شد");
    dispatch({ id: id, type: "deleteTodo" });
  };
  const completeHandler = (e) => {
    console.log("completed");
  };
  return (
    <div>
      <div className={`${styles.todoBlock}`}>
        <div className={`${styles.todoTitleDate}`}>
          <p>{title}</p>
          <p>تاریخ : {date}</p>
        </div>
        <div>
          <span onClick={() => deleteHandler()} className={styles.trashIcon}>
            <FaTrash />
          </span>
          <span onClick={() => completeHandler()} className={styles.checkIcon}>
            <FaCheck />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
