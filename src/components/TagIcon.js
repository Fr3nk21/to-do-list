import React, { useState, useRef } from "react";
import "/Users/fr3nk/Documents/GitHub/my-projects/to-do-list/src/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

export default function TagIcon() {
  const [selectedTag, setSelectedTag] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const [style, setStyle] = useState({ display: "none" });
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

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
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
        {/* <div
          style={style}
          className="w-72 h-10 bg-red-400 absolute -top-10 -left-32"
        >
          <p>You select: {selectedTag}</p>
        </div>
        <div
          className="bg-blue-400 w-10"
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <FontAwesomeIcon
            icon={faTag}
            className={selectedTag === "" ? "text-white" : "text-red-500"}
          />
        </div> */}
        <div
          className={`w-16 bg-red-400 absolute -top-6 -left-7 rounded-md ${
            isHovered && selectedTag ? "visible" : "hidden"
          }`}
        >
          <p>{selectedTag}</p>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faTag}
            className={selectedTag ? "text-red-500" : ""}
          />
        </div>
      </button>

      {/* <ShowButtonHover /> */}
      {isOpen && (
        <div className="absolute top-10 right-0 z-10 w-36">
          <select
            name="tag"
            className="py-2 px-3 rounded-md text-gray-400 w-full mb-6"
            onChange={handleTagChange}
            value={selectedTag}
          >
            <option value="">Select a Tag</option>
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

// function ShowButtonHover() {
//   const [style, setStyle] = useState({ display: "none" });

//   return (
//     <div>
//       <FontAwesomeIcon />
//       <div
//         className="bg-red-500 w-10 h-5"
//         onMouseEnter={(e) => {
//           setStyle({ display: "block" });
//         }}
//         onMouseLeave={(e) => {
//           setStyle({ display: "none" });
//         }}
//       >
//         <button style={style}>Click the button</button>
//       </div>
//     </div>
//   );
// }
