import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskInfo from "./TaskInfo";
import "../components/Tasks.scss";

const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => {
          return <TaskInfo task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default Tasks;
