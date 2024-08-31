import React, { useState } from "react";
import "./styles.css";
import TasksContainer from "./components/TasksContainer.js";

// TODO - Consider adding basic validation to ensure the task input is not empty before submission. (Form Submission Logic)
// TODO - Ensure that all form controls have corresponding labels, especially for screen readers. (aria-label)
// TODO - Break down the TasksContainer into smaller components

function App() {
  return (
    <div className="flex justify-center align-middle min-h-screen py-40">
      <TasksContainer />
    </div>
  );
}

export default App;
