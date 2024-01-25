

import React, { useState } from 'react';
import './todo.css';
import ToDoList from '../../components/toDoList/ToDoList';
import ToDoForm from '../../components/toDoForm/ToDoForm';

const Todo = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, {...newTransaction, id: Date.now()}]);
  };

  return (
    <div className="my-todo">
      <h2>My ToDo For the Week</h2>
      <ToDoForm onAddTransaction={addTransaction} />
      <ToDoList transactions={transactions} />
    </div>
  );
}

export default Todo;
