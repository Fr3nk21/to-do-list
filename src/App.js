import React from "react";
import "./styles.css";
import TasksContainer from "./components/TasksContainer.js";

// TODO - Hover tags on icons
// TODO - Style correctly the application
// TODO - Break down the TasksContainer into smaller components
// TODO - Filter implementation, to filter tasks by day

function App() {
  return (
    <div className="flex justify-center align-middle min-h-screen py-40">
      <TasksContainer />
    </div>
  );
}

export default App;
