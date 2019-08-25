import React from 'react';
import TaskContextProvider from './contexts/TaskContext';
import Menu from './components/Menu';
import Tasks from './components/Tasks';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <TaskContextProvider>
        <Menu />
        <Tasks />
        <Form />
      </TaskContextProvider>
    </div>
  );
}

export default App;
