import React, { useState } from "react";
import TasksList from "./TasksList";

// It's used to define the structure of the Task object
interface Task {
  id: number;
  text: string;
}

export default function TasksContainer() {
  const [tasks, setTasks] = useState<Task[]>([]); // It tells TypeScript that tasks is expected to be an array of Task objects
  const [inputTask, setInputTask] = useState("");
  const [showError, setShowError] = useState(false);

  const tasksNumber = tasks.length; // Tasks's number

  // Handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // It tells TypeScript what kind of event is and what kind of HTML element it comes from.
    e.preventDefault(); // Stops the form from submitting and refreshing the page
    if (inputTask === "") {
      setShowError(true);
    } else {
      setShowError(false);
      const taskWithId: Task = {
        id: Date.now(),
        text: inputTask,
      };
      setTasks([...tasks, taskWithId]);
      setInputTask("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  // This is the key logic for removing the task. The .filter() method returns a new array containing only the tasks where the condition (task.id !== taskId) is true. In other words, it keeps all the tasks except the one with the id that matches taskId. The .filter() method is commonly used to remove an item from an array because it creates a new array without mutating the original one.
  const handleRemoveTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="bg-gray-800 py-10 px-16 rounded-3xl">
      <h1 className="text-4xl text-white font-sans uppercase font-bold tracking-wider">
        You have {tasksNumber} tasks
      </h1>

      {/* Task's name component */}
      <div className="flex flex-row justify-stretch">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            id="userTask"
            className="h-8 mt-10 mb-6 rounded-md w-80"
            type="text"
            value={inputTask}
            onChange={handleInputChange}
            placeholder="Insert a Task"
            aria-label="userTask"
          />
          <button
            type="submit"
            className="px-2 py-1 ml-6 rounded-md text-white font-sans uppercase font-bold bg-green-600 hover:bg-green-900 duration-300"
          >
            Add
          </button>
        </form>
      </div>

      {/* TasksList component */}
      {showError && (
        <p className="text-red-900 bg-red-400 p-4 mt-6 rounded-md font-sans font-bold">
          Please, insert a task!
        </p>
      )}
      <TasksList tasks={tasks} onRemoveTask={handleRemoveTask} />
    </div>
  );
}
