import "./task.css";

function Task({ task, onDelete, onMarkDone }) {
    return (
        <div className="task">
            <div className="taskInfo">
                <p>{task.isDone ? "Done" : "Not done"}</p>
                <p className="taskname">
                    <b>{task.name}</b>
                </p>
                <p className="taskdate">{task.date}</p>
            </div>
            <div className="table">
                <ul className="actions">
                    <li className="action">
                        <button
                            className="delete"
                            onClick={() => onDelete(task.id)}
                        >
                            Delete task
                        </button>
                    </li>
                    <li className="action">
                        <button
                            className="markdone"
                            onClick={() => onMarkDone(task.id)}
                        >
                            Mark done
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Task;
