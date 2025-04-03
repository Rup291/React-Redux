import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return; // Prevent empty tasks
    dispatch(addTodo(task));
    setTask(""); // Clear input field after adding
  };

  return (
    <div className="container mt-3">
      <form className="row g-2 justify-content-center" onSubmit={submitHandler}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            value={task}
            placeholder="Enter a task..."
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
