import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import Task from './views/Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>
);