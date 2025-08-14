import React from 'react';
import { X, Car } from 'lucide-react';

const VehicleSelectorDrawer = ({ show, customer, onClose, onSelectVehicle }) => {
  if (!show || !customer) return null;

  return (
    <div className="fixed flex items-end justify-end z-50">
      {/* Transparent with blur effect */}
      <div className="bg-white/30 backdrop-blur-md w-full max-w-md h-96 flex flex-col rounded-lg shadow-lg border border-white/20">
        <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
          <h2 className="text-lg font-semibold text-gray-900">Select Vehicle</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <p className="text-sm text-gray-600 mb-4">
            Select which vehicle to convert for {customer.name}:
          </p>
          <div className="space-y-3">
            {customer.vehicles?.map((vehicle, index) => (
              <div
                key={index}
                onClick={() => onSelectVehicle(vehicle)}
                className="p-4 border border-gray-200/50 rounded-lg cursor-pointer hover:bg-gray-50/40 hover:border-indigo-300"
              >
                <div className="flex items-center space-x-3">
                  <Car size={20} className="text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">
                      {vehicle.make} {vehicle.model}
                    </p>
                    <p className="text-sm text-gray-500">Year: {vehicle.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelectorDrawer;
