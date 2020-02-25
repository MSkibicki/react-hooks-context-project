import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { ModeContext } from "../contexts/ModeContext";

const Form = () => {
  const { darkMode, dark, light } = useContext(ModeContext);
  const mode = darkMode ? dark : light;

  const { dispatch } = useContext(TaskContext);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      task: {
        name,
        date,
        details
      }
    });
    setName("");
    setDate("");
    setDetails("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        style={{ background: mode.li, color: mode.color }}
        placeholder="Please Enter Task"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="date"
        style={{ background: mode.li, color: mode.color }}
        placeholder="Please Enter Date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        style={{ background: mode.li, color: mode.color }}
        placeholder="Please Enter Details (optional)"
        className="input-details"
        value={details}
        onChange={e => setDetails(e.target.value)}
      />
      <input
        type="submit"
        style={{ background: mode.taskDetails, color: mode.color }}
        value="Add"
      />
    </form>
  );
};

export default Form;
