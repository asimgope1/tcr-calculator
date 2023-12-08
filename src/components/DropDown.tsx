import React, { useState } from 'react';

interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onSelect }) => {
  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={handleSelection}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 01-0.001-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
