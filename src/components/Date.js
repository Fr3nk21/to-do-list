import React, { useState } from "react";

export default function Date() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelection = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex flex-row">
      <h2 className="text-white pr-4">Select Date:</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateSelection}
        className="py-1 px-3 rounded-md text-gray-400"
      />
      {selectedDate && (
        <p className="text-white">You selected: {selectedDate}</p>
      )}
    </div>
  );
}
