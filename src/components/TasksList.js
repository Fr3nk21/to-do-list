import React, { useState } from "react";

export default function TasksList({ tasks, onRemoveTask }) {
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
