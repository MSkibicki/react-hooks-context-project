import React from 'react';
import TaskContextProvider from './contexts/TaskContext';
import Menu from './components/Menu';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="App">
      <TaskContextProvider>
        <Menu />
        <Tasks />
      </TaskContextProvider>
    </div>
  );
}

export default App;
