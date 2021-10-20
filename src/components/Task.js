import "./task.css";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete }) {
    return (
        <div className="task">
            <h3 className="taskname">{task.name}</h3>
            <p className="taskdate">{task.date}</p>
            <div className="actionsDiv" onClick={() => onDelete(task.id)}>
                <FaTimes className="fa-icon-delete" />
                <span className="fa-icon-delete"> Delete task</span>
            </div>
        </div>
    );
}

export default Task;
