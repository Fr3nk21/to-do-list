import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

export default function FolderIcon() {
  const [selectedProject, setSelectedProject] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const projectRef = useRef(null);

  const handleIconClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (projectRef.current && !projectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleTagChange = (project) => {
    setSelectedProject(project);
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
        className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase font-bold"
        onClick={handleIconClick}
      >
        <FontAwesomeIcon
          icon={faFolder}
          className={selectedProject && "text-red-500"}
        />
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
