import React, { useState } from "react";

export default function TasksList({
  tasks,
  onRemoveTask,
  inputTask,
  selectedDate,
  selectedTag,
  selectedProject,
}) {
  return (
    <div>
      <ul className="w-full">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex flex-row text-white border-b-2 border-slate-700 border-solid py-3"
          >
            {" "}
            <input type="checkbox" id="taskNumber" className="my-checkbox" />
            <label
              for="taskNumber"
              className="content-center ml-3 checkbox-label"
            >
              {task.text}
              {inputTask}
              {selectedDate}
              {selectedTag}
              {selectedProject}
            </label>
            <button
              onClick={() => onRemoveTask(task.id)}
              className="px-2 py-1 ml-auto rounded-md text-red-900 font-sans uppercase font-bold hover:text-white hover:bg-red-800 duration-300"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
