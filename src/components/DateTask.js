// import React, { useState } from "react";

// export default function DateTask({ onAddDate }) {
//   const [selectedDate, setSelectedDate] = useState("");

//   const handleDateSelection = (e) => {
//     const newDate = e.target.value;
//     setSelectedDate(newDate);
//     if (onAddDate) {
//       onAddDate(newDate);
//     }
//   };

//   return (
//     <div classNae="flex flex-row items-center">
//       <h2 className="text-white pr-4">Select Date:</h2>
//       <input
//         type="date"
//         value={selectedDate}
//         onChange={handleDateSelection}
//         className="py-1 px-3 rounded-md text-gray-400"
//       />
//       {selectedDate && (
//         <p className="text-white ml-4">You selected: {selectedDate}</p>
//       )}
//     </div>
//   );
// }
