import React, { useState } from "react";
import TasksList from "./TasksList.js";

export default function TasksContainer() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [showError, setShowError] = useState(false);

  const tasksNumber = tasks.length; // Tasks's number

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputTask === "") {
      setShowError(true);
    } else {
      setShowError(false);
      const taskWithId = {
        id: Date.now(),
        text: inputTask,
        date: selectedDate,
        tag: selectedTag,
        project: selectedProject,
      };
      setTasks([...tasks, taskWithId]);
      setInputTask("");
      setSelectedDate("");
      setSelectedTag("");
      setSelectedProject("");
    }
  };

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  const handleDateSelection = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="bg-gray-800 py-10 px-16 rounded-3xl">
      <h1 className="text-4xl text-white font-sans uppercase font-bold tracking-wider">
        You have {tasksNumber} tasks
      </h1>

      {/* Task's name component */}
      <div className="flex flex-row justify-stretch w-full">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            id="userTask"
            className="h-8 mt-10 mb-10 rounded-md w-80"
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
          {showError && <p className="text-red-500">Error message</p>}
        </form>
      </div>

      {/* Task's date component */}
      <div className="flex flex-row items-center">
        <h2 className="text-white pr-4">Select Date:</h2>
        <input
          id="taskDate"
          type="datetime-local"
          value={selectedDate}
          onChange={handleDateSelection}
          className="py-1 px-3 rounded-md text-gray-400"
          aria-label="taskDate"
          onfocus="(this.type='date')"
          placeholder="Date"
        />
        {selectedDate && console.log(`You selected: ${selectedDate}`)}
      </div>

      {/* Task's tag component */}
      <div>
        <select
          name="tag"
          className="py-2 px-3 rounded-md text-gray-400"
          onChange={handleTagChange}
          value={selectedTag}
        >
          <option value=""></option>
          <option value="Tag 1">Tag 1</option>
          <option value="Tag 2">Tag 2</option>
          <option value="Tag 3">Tag 3</option>
          <option value="Tag 4">Tag 4</option>
        </select>
        {selectedTag && console.log(`Your tag is: ${selectedTag}`)}
      </div>

      {/* Task's project component */}
      <div>
        <select
          name="project"
          className="py-2 px-3 rounded-md text-gray-400"
          onChange={handleProjectChange}
          value={selectedProject}
        >
          <option value="">Select a Project</option>
          <option value="Project 1">Project 1</option>
          <option value="Project 2">Project 2</option>
          <option value="Project 3">Project 3</option>
          <option value="Project 4">Project 4</option>
        </select>
        {selectedProject && console.log(`Your project is: ${selectedProject}`)}
      </div>

      {/* TasksList component */}
      <TasksList tasks={tasks} onRemoveTask={removeTask} />
    </div>
  );
}
