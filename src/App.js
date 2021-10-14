import React from 'react';
import Form from './components/Form';
import "./App.css";

const App = () => {
  const todos = ["Laundry", "Cleaning", "Code", "Testing", "Walk the dog"]
  const todoItems = todos.map((todo) =>
  <li key={todo.id}>    {todo.text}</li>
);

  return (
    <div>
      <header>
        <h1>Inventora Tasks </h1>
      <div className="header-line"></div>  
      </header>  
    <Form/>
          <h2>To-Do</h2>
          {todoItems}

          <h2>Completed</h2>
          <p>Completed task</p>
          <p>Another completed task</p>
    </div>
  )
}

export default App

