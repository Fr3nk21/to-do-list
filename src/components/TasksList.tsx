import React, { useState } from "react";
import CalendarIcon from "./CalendarIcon";
import TagIcon from "./TagIcon";
import FolderIcon from "./FolderIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface Task {
  id: number;
  text: string;
  date?: Date;
  tag?: string;
  project?: string;
}

interface TasksListProps {
  tasks: Task[];
  onRemoveTask: (id: number) => void;
}

export default function TasksList({ tasks, onRemoveTask }: TasksListProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <ul className="w-full">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex flex-row text-white border-b-2 border-slate-700 border-solid pt-6 pb-1 justify-between ${
              isChecked ? "checked" : ""
            }`}
          >
            <div
              className={`bg-green-400 w-96 h-1 absolute z-30 mt-4 rounded-md ${
                isChecked ? "visible" : "invisible"
              }`}
            ></div>
            <div className="flex justify-center">
              <input
                type="checkbox"
                id="taskNumber"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="my-checkbox"
              />
              <label
                htmlFor="taskNumber"
                className="content-center ml-3 checkbox-label"
              >
                {task.text}
                {task.date && <p>{task.date.toLocaleDateString("en-US")}</p>}
                {task.tag && <p>{task.tag}</p>}
                {task.project && <p>{task.project}</p>}
              </label>
            </div>
            <div className="flex flex-row">
              <CalendarIcon />
              <TagIcon />
              <FolderIcon />
              <button
                onClick={() => onRemoveTask(task.id)}
                className="px-2 ml-auto rounded-md text-red-900 font-sans uppercase font-bold hover:text-white hover:bg-red-800 duration-300"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
