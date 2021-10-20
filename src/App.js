import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
    const deleteTask = (id) => {
        updateTasks(tasks.filter((task) => task.id !== id));
    };
    const [tasks, updateTasks] = useState([
        {
            id: 0,
            name: "write a midterm",
            date: "October 20, 2021",
            reminder: false,
            isDone: false,
        },
        {
            id: 1,
            name: "go to the gym",
            date: "October 19, 2021",
            reminder: false,
            isDone: true,
        },
        {
            id: 2,
            name: "call a friend about a party",
            date: "October 22, 2021",
            reminder: false,
            isDone: false,
        },
    ]);
    return (
        <div className="container">
            <Header title="React To Do List" />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App;
