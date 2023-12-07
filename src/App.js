import React, { useState } from 'react';
import Field from './components/Field';

function App() {


  const initialFieldValues = {
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
    totalLandArea: '',
    totalBuiltUpArea: '',
    baseBuiltUpRate: '',
    currentLandRate: '',
    developmentCharge: '',
    adjustmentFactor: '',
    cornerFactor: '',
    unitAdjustmentFactor: '',
    cornerFacing: '',
    additionalSemiFinished: '',
  };
  
  const [fieldValues, setFieldValues] = useState(initialFieldValues
    );

  const handleInputChange = (fieldName: string, value: string) => {
    setFieldValues({
      ...fieldValues,
      [fieldName]: value,
    });
  };

  const handleReset = () => {
    setFieldValues(initialFieldValues);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full mx-4 flex justify-around">
        <div className="w-1/2 pr-1">
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
        <div className="w-1/2 pl-1 ml-5">
          <Field
            label="Total Land Area (Sq. Ft.)"
            type="text"
            placeholder="Enter Total Land Area (Sq. Ft.)"
            value={fieldValues.totalLandArea}
            onChange={(e) => handleInputChange('totalLandArea', e.target.value)}
          
          
          />
          <Field
            label="Total BuiltUp Area (Sq. Ft.)"
            type="text"
            placeholder="EnterTotal BuiltUp Area (Sq. Ft.)"
            value={fieldValues.totalBuiltUpArea}
            onChange={(e) => handleInputChange('totalBuiltUpArea', e.target.value)}
          
          
          />
          <Field
            label="Base BuiltUp Rate"
            type="text"
            placeholder="Enter Base BuiltUp Rate"
            value={fieldValues.baseBuiltUpRate}
            onChange={(e) => handleInputChange('baseBuiltUpRate', e.target.value)}
          
          
          />
          <Field
            label="Current land rate as per market"
            type="text"
            placeholder="Current land rate as per market"
            value={fieldValues.currentLandRate}
            onChange={(e) => handleInputChange('currentLandRate', e.target.value)}
          
          
          />
          <Field
            label="Development Charge"
            type="text"
            placeholder="Enter Development Charge"
            value={fieldValues.developmentCharge}
            onChange={(e) => handleInputChange('developmentCharge', e.target.value)}
          
          
          />
          <Field
            label="Adjustment Factor"
            type="text"
            placeholder="Enter Adjustment Factor"
            value={fieldValues.adjustmentFactor}
            onChange={(e) => handleInputChange('adjustmentFactor', e.target.value)}
          
          
          />
          <Field
            label="Corner Factor"
            type="text"
            placeholder="Enter Corner Factor"
            value={fieldValues.cornerFactor}
            onChange={(e) => handleInputChange('cornerFactor', e.target.value)}
          
          
          />
          <Field
            label="Unit Adjustment Factor"
            type="text"
            placeholder="Enter Adjustment Factor"
            value={fieldValues.unitAdjustmentFactor}
            onChange={(e) => handleInputChange('unitAdjustmentFactor', e.target.value)}
          
          
          />
          <Field
            label="Corner Facing"
            type="text"
            placeholder="EnterCorner Facing"
            value={fieldValues.cornerFacing}
            onChange={(e) => handleInputChange('cornerFacing', e.target.value)}
          
          
          />
          <Field
            label="Additional Semi Finished "
            type="text"
            placeholder="Enter Additional Semi Finished Builtup "
            value={fieldValues.additionalSemiFinished}
            onChange={(e) => handleInputChange('additionalSemiFinishedBuiltup', e.target.value)}
          
          
          />
         
        </div>
      
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
