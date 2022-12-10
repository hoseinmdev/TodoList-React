import Todo from "../Todo/Todo";
import { useTodosContext } from "../TodoApp/TodoApp";

const TodoList = () => {
  const { dispatch, state } = useTodosContext();
  return (
    <div>
      {state.map((todo, id) => {
        return <Todo key={id} title={todo.title} id={todo.id} date={todo.date}/>;
      })}
    </div>
  );
};

export default TodoList;
