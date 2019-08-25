import React, { createContext, useState } from 'react';
import uuid from "uuid/v1";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {name: "Buy milk", date: "10.08.2019", id: uuid()},
        {name: "Watch movie", date: "16.07.2020", id: uuid()}
    ]);
    const addTask = (name, date) => {
        setTasks([...tasks, {name, date, id: uuid() }]);
    };
    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    return (
        <TaskContext.Provider value={{tasks, addTask, removeTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;