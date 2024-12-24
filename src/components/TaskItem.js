import React from "react";
import { taskStore } from "../stores/taskStore";

const TaskItem = ({ task }) => {
    return (
        <div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => taskStore.toggleTask(task.id)}
            />
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    marginLeft: "10px",
                }}
            >
        {task.text}
      </span>
            <button
                style={{ marginLeft: "auto" }}
                onClick={() => taskStore.deleteTask(task.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TaskItem;
