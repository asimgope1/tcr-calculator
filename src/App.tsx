import React, { useState } from "react";
import Field from "./components/Field";
import Dropdown from "./components/DropDown";

function App() {
  const initialFieldValues = {
    bungalowType: "",
    numberOfFloors: "1",
    remotenessFactor: "0.0",
    landRateAtPurchase: "1000",
    landValueSellFactor: "0.0",
    legalCharge: "1",
    fillingRate: "1",
    projectManagementCost: "1",
    unitFillingDepth: "1",
    facingType: "",
    totalLandArea: "50",
    totalBuiltUpArea: "50",
    baseBuiltUpRate: "1000",
    currentLandRate: "1000",
    developmentCharge: "1",
    adjustmentFactor: "0.0",
    cornerFactor: "0.0",
    unitAdjustmentFactor: "0.0",
    cornerFacing: "",
    additionalSemiFinishedBuiltup: "50",
  };

  const [fieldValues, setFieldValues] = useState(initialFieldValues);

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
    <div className="bg-white-100 min-h-screen flex flex-col items-center ">
      <div className="max-w-md w-full mx-4  flex justify-between">
        <div className="w-1/2 pr-2">
          <Dropdown
            label="Bungalow type"
            options={[
              "Raw",
              "Economy",
              "Delux",
              "SuperDelux",
              "Luxury",
              "SuperLuxury",
            ]}
            value={fieldValues.bungalowType}
            onSelect={(value) => handleInputChange("bungalowType", value)}
          />
          <Field
            label="Number of Floors"
            type="text"
            placeholder="Enter number of floors"
            value={fieldValues.numberOfFloors}
            onChange={(e) =>
              handleInputChange("numberOfFloors", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                numberOfFloors: String(
                  (parseInt(prevValues.numberOfFloors as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.numberOfFloors as string, 10) || 0;
                const newValue = currentValue > 1 ? currentValue - 1 : 1;

                return {
                  ...prevValues,
                  numberOfFloors: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Remoteness Factor"
            type="text"
            placeholder="Enter remoteness factor"
            value={fieldValues.remotenessFactor}
            onChange={(e) =>
              handleInputChange("remotenessFactor", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseFloat(prevValues.remotenessFactor as string) || 0;
                const newValue =
                  currentValue >= 0 && currentValue < 1
                    ? currentValue + 0.1
                    : 1; 

                return {
                  ...prevValues,
                  remotenessFactor: String(newValue.toFixed(1)), 
                };
              });
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseFloat(prevValues.remotenessFactor as string) || 0;
                const newValue =
                  currentValue > 0 && currentValue <= 1
                    ? currentValue - 0.1
                    : 0; 

                return {
                  ...prevValues,
                  remotenessFactor: String(newValue.toFixed(1)), 
                };
              });
            }}
          />

<Field
  label="Land Rate at Purchase"
  type="text"
  placeholder="Enter land rate at purchase"
  value={fieldValues.landRateAtPurchase}
  onChange={(e) => handleInputChange("landRateAtPurchase", e.target.value)}
  onIncrement={() => {
    setFieldValues((prevValues) => ({
      ...prevValues,
      landRateAtPurchase: String(
        (parseInt(prevValues.landRateAtPurchase as string, 10) || 0) + 1
      ),
    }));
  }}
  onDecrement={() => {
    setFieldValues((prevValues) => {
      const currentValue =
        parseInt(prevValues.landRateAtPurchase as string, 10) || 0;
      const newValue = currentValue > 1000 ? currentValue - 1 : 1000; // Set minimum value as 1000

      return {
        ...prevValues,
        landRateAtPurchase: String(newValue),
      };
    });
  }}
/>

<Field
  label="Land value sell factor"
  type="text"
  placeholder="Enter land value sell factor"
  value={fieldValues.landValueSellFactor}
  onChange={(e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 1) {
      handleInputChange("landValueSellFactor", String(value));
    }
  }}
  onIncrement={() => {
    setFieldValues((prevValues) => {
      const currentValue = parseFloat(prevValues.landValueSellFactor) || 0;
      const newValue = currentValue < 1 ? currentValue + 0.1 : 1;
      return {
        ...prevValues,
        landValueSellFactor: String(newValue.toFixed(1)),
      };
    });
  }}
  onDecrement={() => {
    setFieldValues((prevValues) => {
      const currentValue = parseFloat(prevValues.landValueSellFactor) || 0;
      const newValue = currentValue > 0 ? currentValue - 0.1 : 0;
      return {
        ...prevValues,
        landValueSellFactor: String(newValue.toFixed(1)),
      };
    });
  }}
/>

          <Field
            label="Legal Charge"
            type="text"
            placeholder="Enter legal charge"
            value={fieldValues.legalCharge}
            onChange={(e) => handleInputChange("legalCharge", e.target.value)}
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                legalCharge: String(
                  (parseInt(prevValues.legalCharge as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.legalCharge as string, 10) || 0;
                const newValue = currentValue > 1 ? currentValue - 1 : 1;

                return {
                  ...prevValues,
                  legalCharge: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Filling Rate"
            type="text"
            placeholder="Enter filling rate"
            value={fieldValues.fillingRate}
            onChange={(e) => handleInputChange("fillingRate", e.target.value)}
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                fillingRate: String(
                  (parseInt(prevValues.fillingRate as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.fillingRate as string, 10) || 0;
                const newValue = currentValue > 1 ? currentValue - 1 : 1;

                return {
                  ...prevValues,
                  fillingRate: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Project Management Cost"
            type="text"
            placeholder="Enter project management cost"
            value={fieldValues.projectManagementCost}
            onChange={(e) =>
              handleInputChange("projectManagementCost", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                projectManagementCost: String(
                  (parseInt(prevValues.projectManagementCost as string, 10) ||
                    0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.projectManagementCost as string, 10) || 0;
                const newValue = currentValue > 1 ? currentValue - 1 : 1;

                return {
                  ...prevValues,
                  projectManagementCost: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Unit Filling Depth"
            type="text"
            placeholder="Enter unit filling depth"
            value={fieldValues.unitFillingDepth}
            onChange={(e) =>
              handleInputChange("unitFillingDepth", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                unitFillingDepth: String(
                  (parseInt(prevValues.unitFillingDepth as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.unitFillingDepth as string, 10) || 0;
                const newValue = currentValue > 1 ? currentValue - 1 : 1;

                return {
                  ...prevValues,
                  unitFillingDepth: String(newValue),
                };
              });
            }}
          />
          <Dropdown
            label="Facing Type"
            options={["North", "South", "East", "West"]}
            value={fieldValues.facingType}
            onSelect={(value) => handleInputChange("facingType", value)}
          />
        </div>

        {/* Right-aligned Fields */}
        <div className="w-1/2 pl-1 ml-5">
          <Field
            label="Total Land Area (Sq. Ft.)"
            type="text"
            placeholder="Enter Total Land Area (Sq. Ft.)"
            value={fieldValues.totalLandArea}
            onChange={(e) => handleInputChange("totalLandArea", e.target.value)}
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                totalLandArea: String(
                  (parseInt(prevValues.totalLandArea as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.totalLandArea as string, 10) || 0;
                const newValue = currentValue > 50 ? currentValue - 1 : 50;

                return {
                  ...prevValues,
                  totalLandArea: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Total BuiltUp Area (Sq. Ft.)"
            type="text"
            placeholder="EnterTotal BuiltUp Area (Sq. Ft.)"
            value={fieldValues.totalBuiltUpArea}
            onChange={(e) =>
              handleInputChange("totalBuiltUpArea", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                totalBuiltUpArea: String(
                  (parseInt(prevValues.totalBuiltUpArea as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.totalBuiltUpArea as string, 10) || 0;
                const newValue = currentValue > 50 ? currentValue - 1 : 50;

                return {
                  ...prevValues,
                  totalBuiltUpArea: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Base BuiltUp Rate"
            type="text"
            placeholder="Enter Base BuiltUp Rate"
            value={fieldValues.baseBuiltUpRate}
            onChange={(e) =>
              handleInputChange("baseBuiltUpRate", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                baseBuiltUpRate: String(
                  (parseInt(prevValues.baseBuiltUpRate as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.baseBuiltUpRate as string, 10) || 0;
                const newValue = currentValue > 1000 ? currentValue - 1 : 1000;

                return {
                  ...prevValues,
                  baseBuiltUpRate: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Current land rate as per market"
            type="text"
            placeholder="Current land rate as per market"
            value={fieldValues.currentLandRate}
            onChange={(e) =>
              handleInputChange("currentLandRate", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                currentLandRate: String(
                  (parseInt(prevValues.currentLandRate as string, 10) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.currentLandRate as string, 10) || 0;
                const newValue = currentValue > 1000 ? currentValue - 1 : 1000;

                return {
                  ...prevValues,
                  currentLandRate: String(newValue),
                };
              });
            }}
          />
          <Field
            label="Development Charge"
            type="text"
            placeholder="Enter Development Charge"
            value={fieldValues.developmentCharge}
            onChange={(e) =>
              handleInputChange("developmentCharge", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                developmentCharge: String(
                  (parseInt(prevValues.developmentCharge as string, 10) || 0) +
                    1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(prevValues.developmentCharge as string, 10) || 0;
                const newValue = currentValue > 1 ? currentValue - 1 : 1;

                return {
                  ...prevValues,
                  developmentCharge: String(newValue),
                };
              });
            }}
          />
       <Field
  label="Adjustment Factor"
  type="text"
  placeholder="Enter Adjustment Factor"
  value={fieldValues.adjustmentFactor}
  onChange={(e) => handleInputChange("adjustmentFactor", e.target.value)}
  onIncrement={() => {
    setFieldValues((prevValues) => {
      const currentValue =
        parseFloat(prevValues.adjustmentFactor as string) || 0;
      const newValue = currentValue >= 1 ? 1 : Math.min(currentValue + 0.1, 1);

      return {
        ...prevValues,
        adjustmentFactor: String(newValue.toFixed(1)),
      };
    });
  }}
  onDecrement={() => {
    setFieldValues((prevValues) => {
      const currentValue =
        parseFloat(prevValues.adjustmentFactor as string) || 0;
      const newValue = currentValue <= 0 ? 0 : Math.max(currentValue - 0.1, 0);

      return {
        ...prevValues,
        adjustmentFactor: String(newValue.toFixed(1)),
      };
    });
  }}
/>

<Field
  label="Corner Factor"
  type="text"
  placeholder="Enter Corner Factor"
  value={fieldValues.cornerFactor}
  onChange={(e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 1) {
      handleInputChange("cornerFactor", newValue.toString());
    }
  }}
  onIncrement={() => {
    setFieldValues((prevValues) => {
      const currentValue = parseFloat(prevValues.cornerFactor as string) || 0;
      const newValue = currentValue + 0.1 <= 1 ? currentValue + 0.1 : 1;

      return {
        ...prevValues,
        cornerFactor: newValue.toFixed(1),
      };
    });
  }}
  onDecrement={() => {
    setFieldValues((prevValues) => {
      const currentValue = parseFloat(prevValues.cornerFactor as string) || 0;
      const newValue = currentValue - 0.1 >= 0 ? currentValue - 0.1 : 0;

      return {
        ...prevValues,
        cornerFactor: newValue.toFixed(1),
      };
    });
  }}
/>


<Field
  label="Unit Adjustment Factor"
  type="text"
  placeholder="Enter Adjustment Factor"
  value={fieldValues.unitAdjustmentFactor}
  onChange={(e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 1) {
      handleInputChange("unitAdjustmentFactor", newValue.toString());
    }
  }}
  onIncrement={() => {
    setFieldValues((prevValues) => {
      const currentValue = parseFloat(prevValues.unitAdjustmentFactor as string) || 0;
      const newValue = currentValue + 0.1 <= 1 ? currentValue + 0.1 : 1;

      return {
        ...prevValues,
        unitAdjustmentFactor: newValue.toFixed(1),
      };
    });
  }}
  onDecrement={() => {
    setFieldValues((prevValues) => {
      const currentValue = parseFloat(prevValues.unitAdjustmentFactor as string) || 0;
      const newValue = currentValue - 0.1 >= 0 ? currentValue - 0.1 : 0;

      return {
        ...prevValues,
        unitAdjustmentFactor: newValue.toFixed(1),
      };
    });
  }}
/>

          <Dropdown
            label="Corner Facing"
            options={["Yes", "No"]}
            value={fieldValues.cornerFacing}
            onSelect={(value) => handleInputChange("cornerFacing", value)}
          />
          <Field
            label="Additional Semi Finished "
            type="text"
            placeholder="Enter Additional Semi Finished Builtup "
            value={fieldValues.additionalSemiFinishedBuiltup}
            onChange={(e) =>
              handleInputChange("additionalSemiFinishedBuiltup", e.target.value)
            }
            onIncrement={() => {
              setFieldValues((prevValues) => ({
                ...prevValues,
                additionalSemiFinishedBuiltup: String(
                  (parseInt(
                    prevValues.additionalSemiFinishedBuiltup as string,
                    10
                  ) || 0) + 1
                ),
              }));
            }}
            onDecrement={() => {
              setFieldValues((prevValues) => {
                const currentValue =
                  parseInt(
                    prevValues.additionalSemiFinishedBuiltup as string,
                    10
                  ) || 0;
                const newValue = currentValue > 50 ? currentValue - 1 : 50;

                return {
                  ...prevValues,
                  additionalSemiFinishedBuiltup: String(newValue),
                };
              });
            }}
          />
        </div>
      </div>
      <button
        className="mb-10 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleReset}
      >
        Reset
      </button>
      <div className="w-full flex items-center bg-gray-100 border-t-2 border-gray-200">
        <div className="flex justify-between w-full mt-4 mb-4">
          <div className="w-1/2">
            <div className="flex flex-col justify-between">
              <div className="text-gray-600">Land Price :</div>
              <div className="text-gray-600">Sub Total :</div>
              <div className="text-gray-600">Facing Charge :  INR 0</div>
              <div className="text-gray-600">Remoteness Charge : </div>
              <div className="text-gray-600">Project Adjustment Charge :</div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col justify-between">
              <div className="text-gray-600">Unit Adjustment Factor :</div>
              <div className="text-gray-600">Building Price :</div>
              <div className="text-gray-600">Corner Charge :</div>
              <div className="text-gray-600">Filling Charge :</div>
              <div className="text-gray-600">Project Management Cost :</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full flex items-center bg-gray-100 border-t-2 border-gray-200"
        style={{ height: "100px" }}
      >
        {" "}
        Grand Total:
      </div>
    </div>
  );
}

export default App;
