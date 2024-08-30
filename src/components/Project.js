import React, { useState } from "react";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState("");

  const handleSelectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  return (
    <div>
      <select
        name="project"
        className="py-2 px-3 rounded-md text-gray-400"
        onChange={handleSelectChange}
        value={selectedProject}
      >
        <option value="">Select a project</option>
        <option value="Project 1">Project 1</option>
        <option value="Project 2">Project 2</option>
        <option value="Project 3">Project 3</option>
        <option value="Project 4">Project 4</option>
      </select>
      {selectedProject && (
        <p className="text-white">Your Porject: {selectedProject}</p>
      )}
    </div>
  );
}
