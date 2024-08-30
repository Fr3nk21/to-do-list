import React, { useState } from "react";
import "./styles.css";
import TasksContainer from "./components/TasksContainer.js";

//TODO - Fix, style and set in the proper way the Date.js component
//TODO - Fix, style and set in the proper way the Tag.js component
//TODO - Create an option to select the Task's Project filter by date/tag for the tasks
//TODO - Create a filter by date/tag for the tasks

function App() {
  return (
    <div className="flex justify-center align-middle min-h-screen py-40">
      <TasksContainer />
    </div>
  );
}

export default App;
