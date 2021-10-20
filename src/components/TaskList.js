import Task from "./Task";
function TaskList({ tasks, onDelete, onMarkDone, onAdd }) {
    return (
        <div>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onMarkDone={onMarkDone}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
}

export default TaskList;
