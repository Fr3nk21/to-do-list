import React, { useState, useRef } from "react";
import "/Users/fr3nk/Documents/GitHub/my-projects/to-do-list/src/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

export default function FolderIcon() {
  const [selectedProject, setSelectedProject] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectRef = useRef<HTMLDivElement>(null);

  const handleIconClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (projectRef.current && !projectRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProject(e.target.value);
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={projectRef} className="relative">
      <button
        className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase"
        onClick={handleIconClick}
      >
        <div
          className={`w-28 bg-red-400 absolute -top-8 -left-12 rounded-md ${
            isHovered && selectedProject ? "visible" : "hidden"
          }`}
        >
          <p className="py-1 px-2">{selectedProject}</p>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faFolder}
            className={selectedProject ? "text-red-500" : ""}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-10 w-36">
          <select
            name="tag"
            className="py-2 px-3 rounded-md text-gray-400 w-full mb-6"
            onChange={handleTagChange}
            value={selectedProject}
          >
            <option value="">Select a Project</option>
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
            <option value="Project 4">Project 4</option>
          </select>
        </div>
      )}
    </div>
  );
}
