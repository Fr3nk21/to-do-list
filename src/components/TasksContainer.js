import React, { useState } from "react";
import NewTask from "./NewTask.js";
import TasksList from "./TasksList.js";
import DateSelector from "./DateSelector.js";
import Tag from "./Tag.js";
import Project from "./Project.js";

export default function TasksContainer() {
  const [tasks, setTasks] = useState([]);
  const [tag, setTag] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

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

  const addTag = (newTag) => {
    setTag(newTag);
  };

  const addSetSelectedDate = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="bg-gray-800 py-10 px-16 rounded-3xl">
      <h1 className="text-4xl text-white font-sans uppercase font-bold tracking-wider">
        You have {taskNumber} tasks
      </h1>
      <NewTask onAddTask={addTask} />
      <DateSelector onDateSelect={addSetSelectedDate} />
      <Tag onAddTag={addTag} />
      <Project />
      <TasksList
        tasks={tasks}
        tag={tag}
        selectedDate={selectedDate}
        onRemoveTask={removeTask}
      />
    </div>
  );
}
