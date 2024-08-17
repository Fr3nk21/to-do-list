import React, { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TasksContainer />
    </div>
  );
}

export function TasksContainer() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="bg-gray-800 py-10 px-16 rounded-3xl">
      <h1 className="text-4xl text-white font-sans uppercase font-bold tracking-wider">
        List of your tasks
      </h1>
      <NewTask onAddTask={addTask} />
      <TasksList tasks={tasks} />
      <ButtonsBanner />
    </div>
  );
}

export function NewTask({ onAddTask }) {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask.trim()) {
      onAddTask(inputTask);
      setInputTask("");
    }
    console.log("New task:", inputTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full h-8 mt-10 mb-10 rounded-md"
          type="text"
          value={inputTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export function TasksList({ tasks }) {
  return (
    <div className=" text-white">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export function ButtonsBanner() {
  return (
    <div className="flex-row flex justify-between mt-20">
      <ButtonPlus />
      <ButtonMinus />
    </div>
  );
}

export function ButtonPlus() {
  return (
    <div className="bg-green-600 text-center px-5 pt-2 pb-3 rounded-full">
      <span className="text-white text-4xl">+</span>
    </div>
  );
}

export function ButtonMinus() {
  return (
    <div className="bg-red-600 text-center px-6 pt-2 pb-4 rounded-full">
      <span className="text-white text-4xl">-</span>
    </div>
  );
}

export default App;
