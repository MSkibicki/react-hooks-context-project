import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';


const Menu = () => {
    const { tasks } = useContext(TaskContext);

    return(
        <div className="menu">
            <h1>Task List</h1>
            <p>{tasks.length ? `You have ${tasks.length} task(s)` : `Your task list is empty. Please add a new task.`}</p>
        </div>
    );
}

export default Menu;