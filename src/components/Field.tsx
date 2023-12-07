import React, { ChangeEvent } from 'react';

interface FieldProps {
  label: string;
  type: 'text' | 'number'; // Define type as 'number' for numeric input
  placeholder: string;
  value: string | number; // Use string | number for flexible value
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Field: React.FC<FieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <div className="flex items-center">
        <button className="text-gray-600" onClick={onDecrement}>-</button>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ width: '100%' }}
        />
        <button className="text-gray-600" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Field;
