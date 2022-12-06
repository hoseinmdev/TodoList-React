import styles from "./todo.module.css";
import { FaTrash, FaCheck } from "react-icons/fa";

const Todo = ({title}) => {
  return (
    <div className={styles.todoPosition}>
      <div className={styles.todoBlock}>
        <p>{title}</p>
        <div>
          <span className={styles.trashIcon}>
            <FaTrash />
          </span>
          <span className={styles.checkIcon}>
            <FaCheck />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
