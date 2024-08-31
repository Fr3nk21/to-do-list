// import React, { useState } from "react";

// export default function TagTask({ onAddTag }) {
//   const [selectedTag, setSelectedTag] = useState("");

//   const handleSelectChange = (e) => {
//     const newTag = e.target.value;
//     setSelectedTag(newTag);
//     onAddTag(newTag);
//   };

//   return (
//     <div>
//       <select
//         name="tag"
//         className="py-2 px-3 rounded.md text-gray-400"
//         onChange={handleSelectChange}
//         value={selectedTag}
//       >
//         <option value=""></option>
//         <option value="Tag 1">Tag 1</option>
//         <option value="Tag 2">Tag 2</option>
//         <option value="Tag 3">Tag 3</option>
//         <option value="Tag 4">Tag 4</option>
//       </select>
//       {selectedTag && <p className="text-white">Your tag is: {selectedTag}</p>}
//     </div>
//   );
// }
