import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ label = "Category", options, selected, onSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div className="relative">
        <button
          className="flex items-center justify-between w-48 px-5 py-3 bg-white border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:border-yellow-500 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {selected}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Small floating label on open */}
        {(
          <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500 rounded-sm shadow-sm z-20">
            {label}
          </div>
        )}
      </div>

      {open && (
        <ul className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
