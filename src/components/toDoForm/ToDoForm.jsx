

import React, { useState } from 'react';
import './todoform.css';

const ToDoForm = ({ onAddTransaction }) => {
  const [task, setTask] = useState('',);
  const [date, setDate] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction({ task, date});
    setTask('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        id='input'
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
        required
      />
       <input
        type="date"
        value={date}
        id='input'
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button id='button' type="submit">Add Task</button>
    </form>
  );
}

export default ToDoForm;

