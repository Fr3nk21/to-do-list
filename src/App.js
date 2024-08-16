import React, { useState } from "react";
import "./styles.css";

// L'iinput section è completata e dovrebbe essere funzionale. Il prossimo step è quello di prendere il valore immesso nella form e trasferirlo nella lista delle task sottostante.

function App() {
  return (
    <div className="App">
      <TasksContainer />
    </div>
  );
}

export function TasksContainer() {
  return (
    <div className="bg-gray-800 py-10 px-16 rounded-3xl">
      <h1 className="text-4xl text-white font-sans uppercase font-bold tracking-wider">
        List of your tasks
      </h1>
      <NewTask />
      <TasksList />
      <ButtonsBanner />
    </div>
  );
}

export function NewTask() {
  const [inputTask, setInputTask] = useState("");

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputTask);
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

export function TasksList() {
  return (
    <div className=" text-white">
      <ul>
        <li>This is a task</li>
        <li>This is a task</li>
        <li>This is a task</li>
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
