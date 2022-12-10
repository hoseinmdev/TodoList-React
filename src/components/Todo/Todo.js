import styles from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useTodosContext } from "../TodoApp/TodoApp";
import { toast } from "react-hot-toast";

const Todo = ({ title, id, date }) => {
  const { dispatch } = useTodosContext();

  const deleteHandler = () => {
    toast.error("تودو حذف شد");
    dispatch({ id: id, type: "deleteTodo" });
  };
  const completeHandler = () => {
    toast.success("به لیست انجام شده ها اضافه شد")
    // dispatch({ id: id, type: "deleteTodo" });
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
