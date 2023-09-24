import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timer from './App';
import TodoList from './Todos';
import Form1 from './form';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Timer />
    <TodoList />
    <Form1 />
  </React.StrictMode>
);