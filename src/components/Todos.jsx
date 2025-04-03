import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    console.log("clicked", id);
    dispatch(deleteTodo(id));
  };
  const markAsDoneHandler = (id) => {
    console.log("clicked", id);
    dispatch(markAsDone(id));

    };

  return (
    <div className="container mt-4">
      <AddForm />
      <h2 className="text-center mb-3">My Todos</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                className="form-check-input"
                checked={todo.isDone}
                onChange={() => markAsDoneHandler(todo.id)}
              />
              <span className={todo.isDone ? "text-decoration-line-through text-muted" : ""}>
                {todo.task}
              </span>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => clickHandler(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
