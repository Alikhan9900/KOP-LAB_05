import React, { useState } from "react";
import { taskStore } from "../stores/taskStore";

const AddTask = () => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            taskStore.addTask(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
