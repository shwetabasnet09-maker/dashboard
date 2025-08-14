import React from 'react';

const ConfirmationPopup = ({ show, customer, vehicle, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Confirm Lead Conversion</h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to convert this lead to a deal?
        </p>
        
        {customer && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">Customer: {customer.name}</h3>
            {vehicle && (
              <p className="text-sm text-gray-600">
                Vehicle: {vehicle.make} {vehicle.model} ({vehicle.year})
              </p>
            )}
          </div>
        )}

        <div className="flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Confirm Conversion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;