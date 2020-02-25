import React from "react";
import TaskContextProvider from "./contexts/TaskContext";
import ModeContextProvider from "./contexts/ModeContext";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="App">
      <ModeContextProvider>
        <TaskContextProvider>
          <Body />
        </TaskContextProvider>
      </ModeContextProvider>
    </div>
  );
};

export default App;
