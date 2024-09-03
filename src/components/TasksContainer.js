import React, { useState } from "react";
import TasksList from "./TasksList.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faFolder,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export default function TasksContainer() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
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
      setSelectedDate(null);
      setSelectedTag("");
      setSelectedProject("");
    }
  };

  const handleInputChange = (e) => {
    setInputTask(e.target.value);
  };

  // const handleDateSelection = (date) => {
  //   setSelectedDate(date);
  // };

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

      {/* Task's date component */}
      <div className="flex flex-row items-center min-w-fit mb-6">
        {/* <h2 className="text-white pr-4">Select Date:</h2> */}
        <DatePicker
          id="taskDate"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="py-1 px-3 rounded-md text-gray-400 w-96"
          dateFormat="yyyy/MM/dd"
          placeholderText="Select a date"
          aria-label="taskDate"
        />
        {selectedDate &&
          console.log(`You selected: ${selectedDate.toLocaleDateString()}`)}
      </div>

      {/* Task's tag component */}
      <div>
        <select
          name="tag"
          className="py-2 px-3 rounded-md text-gray-400 w-full mb-6"
          onChange={handleTagChange}
          value={selectedTag}
        >
          <option value="">Select a Tag</option>
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
          className="py-2 px-3 rounded-md text-gray-400 w-full"
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
      {showError && (
        <p className="text-red-900 bg-red-400 p-4 mt-6 rounded-md font-sans font-bold">
          Please, insert a task!
        </p>
      )}
      <TasksList tasks={tasks} onRemoveTask={removeTask} />
    </div>
  );
}
