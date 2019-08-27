import React, { createContext, useReducer, useEffect } from 'react';
import { tasksReducer } from '../reducers/tasksReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
        const currentStorage = localStorage.getItem("tasks");
        return currentStorage ? JSON.parse(currentStorage) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return (
        <TaskContext.Provider value={{tasks, dispatch}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;