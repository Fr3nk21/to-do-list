import React from "react";
import "./styles.css";
import TasksContainer from "./components/TasksContainer.js";

// TODO - Break down the TasksContainer into smaller components

function App() {
  return (
    <div className="flex justify-center align-middle min-h-screen py-40">
      <TasksContainer />
    </div>
  );
}

export default App;
