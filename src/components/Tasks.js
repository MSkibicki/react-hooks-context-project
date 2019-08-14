import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext';
import TaskInfo from './TaskInfo';

const Tasks = () => {
   const { tasks } = useContext(TaskContext);
   return tasks.length ? (
    <div className="task-list">
        <ul>
            {tasks.map(task => {
                return (
                    <TaskInfo task={task} key={task.id} />
                );
            })}
        </ul>
    </div>
   ) : (
       <div className="empty">Your task list is empty.</div>
   )
}

export default Tasks;