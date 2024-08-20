import React, { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="flex justify-center align-middle min-h-screen py-40">
      <TasksContainer />
    </div>
  );
}

export function TasksContainer() {
  const [tasks, setTasks] = useState([]);

  const taskNumber = tasks.length;

  // The addTask function adds a new task to the list of tasks by creating an object that includes a unique ID and the task text, and then updates the state with this new list of tasks
  const addTask = (newTask) => {
    const taskWithId = { id: Date.now(), text: newTask };
    setTasks([...tasks, taskWithId]);
  };

  // The removeTask function removes a task from the list by filtering out the task whose id matches the taskId provided as an argument. After filtering, it updates the state with the new list of tasks that no longer includes the task that was removed
  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="bg-gray-800 py-10 px-16 rounded-3xl">
      <h1 className="text-4xl text-white font-sans uppercase font-bold tracking-wider">
        You have {taskNumber} tasks
      </h1>
      <NewTask onAddTask={addTask} />
      <TasksList tasks={tasks} onRemoveTask={removeTask} />
    </div>
  );
}

export function NewTask({ onAddTask }) {
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

export function TasksList({ tasks, onRemoveTask }) {
  return (
    <div>
      <ul className="w-full">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex flex-row justify-between text-white border-b-2 border-slate-700 border-solid"
          >
            <div className="justify-center align-middle py-2">{task.text}</div>
            <button
              onClick={() => onRemoveTask(task.id)}
              className="px-2 py-1 ml-6 rounded-md text-red-900 font-sans uppercase font-bold hover:text-white hover:bg-red-800 duration-300"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
