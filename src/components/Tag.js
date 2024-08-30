import React, { useState } from "react";

export default function Tag() {
  const [selectedTag, setSelectedTag] = useState("");

  const handleSelectChange = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <div>
      <select
        name="tag"
        className="py-2 px-3 rounded-md text-gray-400"
        onChange={handleSelectChange}
        value={selectedTag}
      >
        <option value="">Add a tag</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {selectedTag && <p className="text-white">You selected: {selectedTag}</p>}
    </div>
  );
}
