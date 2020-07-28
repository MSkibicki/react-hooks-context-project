import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { ModeContext } from "../contexts/ModeContext";
import "../components/Menu.scss";

const Menu = () => {
  const { tasks } = useContext(TaskContext);
  const { darkMode, dark, light } = useContext(ModeContext);
  const mode = darkMode ? dark : light;

  return (
    <div className="menu" style={{ background: mode.menu, color: mode.color }}>
      <h1>Task List</h1>
      <p>
        {tasks.length
          ? `You have ${tasks.length} task(s)`
          : `Your task list is empty. Please add a new task.`}
      </p>
    </div>
  );
};

export default Menu;
