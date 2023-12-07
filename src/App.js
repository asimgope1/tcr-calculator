import React from 'react';
import Field from './components/Field';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full mx-4 flex justify-between">
        {/* Left-aligned Fields */}
        <div className="w-1/2 pr-2">
          <Field
            label="Bungalow type"
            type="text"
            placeholder="Enter bungalow type"
          />
          <Field
            label="Number of Floors"
            type="text"
            placeholder="Enter number of floors"
          />
          <Field
            label="Remoteness Factor"
            type="text"
            placeholder="Enter remoteness factor"
          />
          <Field
            label="Land Rate at Purchase"
            type="text"
            placeholder="Enter land rate at purchase"
          />
          <Field
            label="Land value sell factor"
            type="text"
            placeholder="Enter land value sell factor"
          />
        </div>
        
        {/* Right-aligned Fields */}
        <div className="w-1/2 pl-2">
          <Field
            label="Legal Charge"
            type="text"
            placeholder="Enter legal charge"
          />
          <Field
            label="Filling Rate"
            type="text"
            placeholder="Enter filling rate"
          />
          <Field
            label="Project Management Cost"
            type="text"
            placeholder="Enter project management cost"
          />
          <Field
            label="Unit Filling Depth"
            type="text"
            placeholder="Enter unit filling depth"
          />
          <Field
            label="Facing Type"
            type="text"
            placeholder="Enter facing type"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
