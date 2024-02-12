import React from 'react';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <h3>{task.text} <button onClick={() => onDelete(task.id)} className="btn delete-btn">Delete</button></h3>
          <p>{task.day}</p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
