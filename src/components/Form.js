import React, { useContext, useState } from 'react';
import { TaskContext } from "../contexts/TaskContext";

const AddTaskForm = () => {
    
    const { dispatch } = useContext(TaskContext);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        dispatch({type: "ADD_TASK", task: {
            name, date
        }});
        setName("");
        setDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Please Enter Task" value={name}
                onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Please Enter Date" value={date}
                onChange={(e) => setDate(e.target.value)} required />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddTaskForm;