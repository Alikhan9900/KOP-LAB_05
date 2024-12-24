import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import DebugPanel from "./components/DebugPanel";
import './App.css';

const App = () => {
    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h1>MobX To-Do List</h1>
            <AddTask />
            <TaskList />
            <DebugPanel /> {/* Відображення DebugPanel */}
        </div>
    );
};

export default App;
