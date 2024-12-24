import React from "react";
import { observer } from "mobx-react-lite";
import { taskStore } from "../stores/taskStore";

const TaskList = observer(() => {
    const toggleCompleted = (id) => {
        // Змінюємо стан конкретного завдання
        const task = taskStore.tasks.find((t) => t.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    };

    const removeTask = (id) => {
        // Видаляємо завдання з масиву
        taskStore.deleteTask(id);
    };

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {taskStore.tasks.map((task) => (
                <li key={task.id} style={{ margin: "10px 0", display: "flex", alignItems: "center" }}>
                    <label style={{ flex: 1 }}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleCompleted(task.id)}
                        />
                        <span style={{ textDecoration: task.completed ? "line-through" : "none", marginLeft: "10px" }}>
              {task.text}
            </span>
                    </label>
                    <button
                        onClick={() => removeTask(task.id)}
                        style={{
                            marginLeft: "10px",
                            padding: "5px 10px",
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
});

export default TaskList;
