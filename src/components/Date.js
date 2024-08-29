import React, { useState } from "react";

export default function Date() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelection = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <h2 className="text-white">Select Date:</h2>
      <input type="date" value={selectedDate} onChange={handleDateSelection} />
      {selectedDate && (
        <p className="text-white">You selected: {selectedDate}</p>
      )}
    </div>
  );
}
