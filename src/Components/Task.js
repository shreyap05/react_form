import React from 'react';
import "../App.css";

export default function Task( {taskName, time}) {
  return (
    <div className="task">
        <h1>Task Name: {taskName}</h1>
        <h1>Time to complete: {time}</h1>
      
    </div>
  );
}
