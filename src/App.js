import React, { useState } from "react";
import "./styles.css";

import TasksContainer from "./components/TasksContainer.js";

function App() {
  return (
    <div className="flex justify-center align-middle min-h-screen py-40">
      <TasksContainer />
    </div>
  );
}

export default App;
