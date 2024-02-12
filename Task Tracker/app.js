import React, { useState } from 'react';
import Tasks from './Tasks';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <AddTaskForm onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
