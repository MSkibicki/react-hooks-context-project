import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { ModeContext } from "../contexts/ModeContext";
import "../components/TaskInfo.scss";

const TaskInfo = ({ task }) => {
  const { dispatch } = useContext(TaskContext);
  const { darkMode, dark, light } = useContext(ModeContext);
  const mode = darkMode ? dark : light;

  return (
    <li style={{ background: mode.li, color: mode.color }}>
      <div className="task-main">
        <div className="name">{task.name}</div>
        <div className="date">{task.date}</div>
        <span onClick={() => dispatch({ type: "REMOVE_TASK", id: task.id })}>
          X
        </span>
      </div>
      <div
        className="task-details"
        style={{ background: mode.taskDetails, color: mode.color }}
      >
        <div className="details">{task.details}</div>
      </div>
    </li>
  );
};

export default TaskInfo;
