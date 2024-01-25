


import React from 'react';
import './todolist.css';

const ToDoList = ({ transactions }) => {
  return (
    <ul id='ul'>
      {transactions.map((transaction) => (
        <li id='li'
        key={transaction.id}>
          {transaction.date}     : {transaction.task}
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
