import React, { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [inputTask, setInputTask] = useState(""); // This state is responsible to create a string from the "inputTask"

  // This arrow function it's responsible to set the setInputTask to the e.target.value, that it's the value of the user input
  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  // This arrow function it's responsible to save the task created by the user and clear the input field
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim()) {
      onAddTask(inputTask);
      setInputTask("");
    }
    console.log("New task:", inputTask); // console.log used as a debugging tool
  };

  return (
    <div className="flex flex-row justify-stretch w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <input
          className="h-8 mt-10 mb-10 rounded-md w-80"
          type="text"
          value={inputTask}
          onChange={handleInputChange}
          placeholder="Insert a Task"
        />
        <button
          type="submit"
          className="px-2 py-1 ml-6 rounded-md text-white font-sans uppercase font-bold  bg-green-600 hover:bg-green-900 duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
}
