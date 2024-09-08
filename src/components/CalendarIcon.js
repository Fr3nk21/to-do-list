import React, { useState, useRef } from "react";
import "/Users/fr3nk/Documents/GitHub/my-projects/to-do-list/src/styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function CalendarIcon() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const calendarRef = useRef(null);

  const handleIconClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={calendarRef} className="relative">
      <button
        className="py-1 pr-3 ml-auto rounded-md text-white font-sans uppercase"
        onClick={handleIconClick}
      >
        <div
          className={` bg-red-400 absolute -top-8 -left-11 rounded-md ${
            isHovered && selectedDate ? "visible" : "hidden"
          }`}
        >
          <p className="py-1 px-2">
            {selectedDate ? selectedDate.toLocaleDateString() : ""}
          </p>
        </div>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FontAwesomeIcon
            icon={faCalendar}
            className={selectedDate ? "text-red-500" : ""}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 z-10">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
        </div>
      )}
    </div>
  );
}
