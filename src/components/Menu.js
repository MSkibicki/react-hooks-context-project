import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';


const Menu = () => {
    const { tasks } = useContext(TaskContext);
    return(
        <div className="menu">
            <h1>Task List</h1>
            <p>You have {tasks.length} tasks.</p>
        </div>
    );
}

export default Menu;