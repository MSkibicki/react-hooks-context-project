import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskInfo = ({task}) => {
    const { dispatch } = useContext(TaskContext);
    return (
        <li>
            <div className="task">
                <div className="name">{task.name}</div>
                <div className="date">{task.date}</div>
                <span onClick={() => dispatch({type: "REMOVE_TASK", id: task.id})}>X</span>
            </div>
        </li>
    );
}

export default TaskInfo;