import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskInfo = ({task}) => {
    const { dispatch } = useContext(TaskContext);
    return (
        <li>
            <div className="task-main">
                <div className="name">{task.name}</div>
                <div className="date">{task.date}</div>
                <span onClick={() => dispatch({type: "REMOVE_TASK", id: task.id})}>X</span>
            </div>
            <div className="task-details">
                <div className="details">{task.details}</div>
            </div>
        </li>
    );
}

export default TaskInfo;