import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskInfo = ({task}) => {
    const { removeTask } = useContext(TaskContext);
    return (
        <li>
            <div className="task">
                <div className="name">{task.name}</div>
                <div className="date">{task.date}</div>
                <span onClick={() => removeTask(task.id)}>X</span>
            </div>
        </li>
    );
}

export default TaskInfo;