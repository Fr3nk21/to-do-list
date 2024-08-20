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
        List of your tasks
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

export function TasksList({ tasks, onRemoveTask }) {
  return (
    <div className=" text-white">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => onRemoveTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
