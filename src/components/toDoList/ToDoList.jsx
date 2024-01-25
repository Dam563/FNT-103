


import React from 'react';
import './todolist.css';

const ToDoList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.date}     : {transaction.task}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
