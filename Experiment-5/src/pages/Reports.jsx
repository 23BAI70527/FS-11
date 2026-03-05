import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTask, deleteTask } from "../redux/slices/taskSlice";

function Reports() {

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  /* useMemo for derived data */

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.completed).length;
  }, [tasks]);

  const pendingTasks = useMemo(() => {
    return tasks.filter((task) => !task.completed).length;
  }, [tasks]);

  return (
    <div className="page">

      <h1>Reports / Task Manager</h1>

      {/* Stats Section */}
      <div className="stats">

        <div className="stat-card">
          <h3>Total</h3>
          <p>{tasks.length}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>

      </div>

      {/* Add Task */}

      <div className="task-input">

        <input
          type="text"
          placeholder="Enter a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />

        <button onClick={handleAddTask}>Add Task</button>

      </div>

      {/* Task List */}

      <ul className="task-list">

        {tasks.map((task) => (

          <li key={task.id} className="task-item">

            <span
              className={task.completed ? "task-text completed" : "task-text"}
            >
              {task.text}
            </span>

            <div className="task-buttons">

              <button
                className="complete-btn"
                onClick={() => dispatch(toggleTask(task.id))}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="delete-btn"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </button>

            </div>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default Reports;