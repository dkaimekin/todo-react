import React from "react";
import { useState } from "react";
import "./addTask.css";

function AddTask({ onAdd }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Please add task name");
            return;
        }
        onAdd({ name, date });
        setName("");
        setDate("");
    };
    return (
        <div className="task-form">
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Task</label>
                    <input
                        type="text"
                        placeholder="Add new task"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Due date</label>
                    <input
                        type="text"
                        placeholder="Add due date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value="Save task"
                    className="btn btn-block"
                />
            </form>
        </div>
    );
}

export default AddTask;
