import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default function TagIcon() {
  const [selectedTag, setSelectedTag] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const tagRef = useRef(null);

  const handleIconClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (tagRef.current && !tagRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={tagRef} className="relative">
      <button
        className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase font-bold"
        onClick={handleIconClick}
      >
        <FontAwesomeIcon
          icon={faTag}
          className={selectedTag && "text-red-500"}
        />
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-10">
          <select
            name="tag"
            className="py-2 px-3 rounded-md text-gray-400 w-full mb-6"
            onChange={handleTagChange}
            value={selectedTag}
          >
            <option value="Tag 1">Tag 1</option>
            <option value="Tag 2">Tag 2</option>
            <option value="Tag 3">Tag 3</option>
            <option value="Tag 4">Tag 4</option>
          </select>
        </div>
      )}
    </div>
  );
}
