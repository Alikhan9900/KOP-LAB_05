import React from "react";
import { observer } from "mobx-react-lite";
import { taskStore } from "../stores/taskStore";

const DebugPanel = observer(() => {
    return (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h3>Debug Panel</h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                <tr>
                    <th style={{ border: "1px solid #ccc", padding: "5px" }}>ID</th>
                    <th style={{ border: "1px solid #ccc", padding: "5px" }}>Text</th>
                    <th style={{ border: "1px solid #ccc", padding: "5px" }}>Completed</th>
                </tr>
                </thead>
                <tbody>
                {taskStore.tasks.map((task) => (
                    <tr key={task.id}>
                        <td style={{ border: "1px solid #ccc", padding: "5px" }}>{task.id}</td>
                        <td style={{ border: "1px solid #ccc", padding: "5px" }}>{task.text}</td>
                        <td style={{ border: "1px solid #ccc", padding: "5px" }}>
                            {task.completed ? "Yes" : "No"}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
});

export default DebugPanel;
