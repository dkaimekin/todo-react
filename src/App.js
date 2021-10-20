import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
    // Function to add new task to the list
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task };
        updateTasks([...tasks, newTask]);
    };
    // Function to delete a task from UI
    const deleteTask = (id) => {
        updateTasks(tasks.filter((task) => task.id !== id));
    };
    // Function to mark a task done (or mark undone)
    const changeTaskStatus = (id) => {
        updateTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };
    // Default use state of the app (data is stored in file, not in localstorage or somewhere else)
    const [tasks, updateTasks] = useState([
        {
            id: 0,
            name: "write a midterm",
            date: "October 20, 2021",
            isDone: false,
        },
        {
            id: 1,
            name: "go to the gym",
            date: "October 19, 2021",
            isDone: true,
        },
        {
            id: 2,
            name: "call a friend about a party",
            date: "October 22, 2021",
            isDone: false,
        },
    ]);
    return (
        <div className="container">
            <Header title="React To Do List" />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
                <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onMarkDone={changeTaskStatus}
                />
            ) : (
                <h3>Nothing to show.</h3>
            )}
        </div>
    );
}

export default App;
