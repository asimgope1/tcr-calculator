import React, { useState } from 'react';
import Field from './components/Field';

function App() {
  const [fieldValues, setFieldValues] = useState({
    bungalowType: '',
    numberOfFloors: '',
    remotenessFactor: '',
    landRateAtPurchase: '',
    landValueSellFactor: '',
    legalCharge: '',
    fillingRate: '',
    projectManagementCost: '',
    unitFillingDepth: '',
    facingType: '',
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFieldValues({
      ...fieldValues,
      [fieldName]: value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full mx-4 flex justify-between">
        {/* Left-aligned Fields */}
        <div className="w-1/2 pr-2">
          <Field
            label="Bungalow type"
            type="text"
            placeholder="Enter bungalow type"
            value={fieldValues.bungalowType}
            onChange={(e) => handleInputChange('bungalowType', e.target.value)}
          />
          <Field
            label="Number of Floors"
            type="text"
            placeholder="Enter number of floors"
            value={fieldValues.numberOfFloors}
            onChange={(e) => handleInputChange('numberOfFloors', e.target.value)}
          />
          <Field
            label="Remoteness Factor"
            type="text"
            placeholder="Enter remoteness factor"
            value={fieldValues.remotenessFactor}
            onChange={(e) => handleInputChange('remotenessFactor', e.target.value)}
          />
          <Field
            label="Land Rate at Purchase"
            type="text"
            placeholder="Enter land rate at purchase"
            value={fieldValues.landRateAtPurchase}
            onChange={(e) => handleInputChange('landRateAtPurchase', e.target.value)}
          />
          <Field
            label="Land value sell factor"
            type="text"
            placeholder="Enter land value sell factor"
            value={fieldValues.landValueSellFactor}
            onChange={(e) => handleInputChange('landValueSellFactor', e.target.value)}
          />

<Field
            label="Legal Charge"
            type="text"
            placeholder="Enter legal charge"
            value={fieldValues.legalCharge}
            onChange={(e) => handleInputChange('legalCharge', e.target.value)}
          />
          <Field
            label="Filling Rate"
            type="text"
            placeholder="Enter filling rate"
            value={fieldValues.fillingRate}
            onChange={(e) => handleInputChange('fillingRate', e.target.value)}
          />
          <Field
            label="Project Management Cost"
            type="text"
            placeholder="Enter project management cost"
            value={fieldValues.projectManagementCost}
            onChange={(e) => handleInputChange('projectManagementCost', e.target.value)}
          />
          <Field
            label="Unit Filling Depth"
            type="text"
            placeholder="Enter unit filling depth"
            value={fieldValues.unitFillingDepth}
            onChange={(e) => handleInputChange('unitFillingDepth', e.target.value)}
          />
          <Field
            label="Facing Type"
            type="text"
            placeholder="Enter facing type"
            value={fieldValues.facingType}
            onChange={(e) => handleInputChange('facingType', e.target.value)}
          />
        </div>
        
        {/* Right-aligned Fields */}
        <div className="w-1/2 pl-2">
         
        </div>
      </div>
    </div>
  );
}

export default App;
