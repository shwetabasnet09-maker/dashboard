import React from 'react';
import { Eye, Users } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-indigo-600">Pagoda DMS</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>CRM</span>
            <span>/</span>
            <span>Customer</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Eye size={20} />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Users size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;