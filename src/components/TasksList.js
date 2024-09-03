import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faTag,
  faFolder,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export default function TasksList({ tasks, onRemoveTask }) {
  return (
    <div>
      <ul className="w-full">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex flex-row text-white border-b-2 border-slate-700 border-solid pt-6 pb-1 justify-between"
          >
            <div>
              <input type="checkbox" id="taskNumber" className="my-checkbox" />
              <label
                for="taskNumber"
                className="content-center ml-3 checkbox-label"
              >
                {task.text}
                {task.date && <p>{task.date.toLocaleDateString("en-US")}</p>}
                {task.tag && <p>{task.tag}</p>}
                {task.project && <p>{task.project}</p>}
              </label>
            </div>
            <div>
              <button className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase font-bold">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className={task.date && "text-red-600"}
                />
              </button>
              <button className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase font-bold">
                <FontAwesomeIcon
                  icon={faTag}
                  className={task.tag && "text-red-600"}
                />
              </button>
              <button className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase font-bold">
                <FontAwesomeIcon
                  icon={faFolder}
                  className={task.project && "text-red-600"}
                />
              </button>
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
