// import React, { useState } from 'react';
// import { Plus, Edit2, Activity, Users, Eye, Search, Menu, Home, User, Moon, Maximize2, Grid3X3 } from 'lucide-react';

// const CRMCustomerInterface = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showRows, setShowRows] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);
  
//   // Sample customer data matching the screenshot
//   const customers = [
//     { id: 1, inquiryNo: 'INQ-231418-2081-82', name: 'Rupak Tiwari', inquiryAge: 0, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '2024-12-27', inquiryKind: 'Hot' },
//     { id: 2, inquiryNo: 'INQ-231417-2081-82', name: 'Karma Dorje Lama', inquiryAge: 0, bookingAge: 145, inquiryDate: '2024-12-27', bookedDate: '2024-12-27', inquiryKind: 'Hot' },
//     { id: 3, inquiryNo: 'INQ-231416-2081-82', name: 'Rupesh Prasad Bhandari', inquiryAge: 255, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Hot' },
//     { id: 4, inquiryNo: 'INQ-231415-2081-82', name: 'Karma Dorje Lama', inquiryAge: 426, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Warm' },
//     { id: 5, inquiryNo: 'INQ-231414-2081-82', name: 'Rupesh Prasad Bhandari', inquiryAge: 6, bookingAge: 542, inquiryDate: '2024-12-27', bookedDate: '2024-12-27', inquiryKind: 'Warm' },
//     { id: 6, inquiryNo: 'INQ-231413-2081-82', name: 'Karma Dorje Lama', inquiryAge: 548, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Cold' },
//     { id: 7, inquiryNo: 'INQ-231412-2081-82', name: 'Pranaya Rajbhandari', inquiryAge: 548, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Cold' },
//     { id: 8, inquiryNo: 'INQ-231411-2081-82', name: 'Jivan Thapa', inquiryAge: 548, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Hot' },
//     { id: 9, inquiryNo: 'INQ-231410-2081-82', name: 'Prebin Sunam', inquiryAge: 548, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Hot' },
//     { id: 10, inquiryNo: 'INQ-231409-2081-82', name: 'Ananda Gauchan', inquiryAge: 548, bookingAge: 0, inquiryDate: '2024-12-27', bookedDate: '', inquiryKind: 'Warm' }
//   ];

//   const filteredCustomers = customers.filter(customer =>
//     customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     customer.inquiryNo.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Top Navigation Bar */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="flex items-center justify-between px-6 py-3">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-xl font-semibold text-indigo-600">CRM</h1>
//             <Grid3X3 className="text-gray-400" size={20} />
//           </div>
//           <div className="flex items-center space-x-4">
//             <Moon className="text-gray-400 cursor-pointer" size={20} />
//             <Maximize2 className="text-gray-400 cursor-pointer" size={20} />
//             <User className="text-gray-400 cursor-pointer" size={20} />
//           </div>
//         </div>
//       </div>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
//           <div className="p-4">
//             <div className="flex items-center space-x-2 text-indigo-600 mb-6">
//               <Grid3X3 size={16} />
//               <span className="font-medium">CRM</span>
//             </div>
//             <nav className="space-y-2">
//               <div className="text-gray-600 text-sm font-medium mb-3">Customer</div>
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1">
//           {/* Breadcrumb */}
//           <div className="bg-white border-b border-gray-200 px-6 py-3">
//             <div className="flex items-center space-x-2 text-sm text-gray-600">
//               <Home size={16} />
//               <span>/</span>
//               <span>Customers</span>
//             </div>
//           </div>

//           {/* Content Header */}
//           <div className="bg-white border-b border-gray-200 px-6 py-4">
//             <div className="flex items-center justify-between">
//               <h2 className="text-lg font-semibold text-gray-900">Customers</h2>
//               <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
//                 <Plus size={16} />
//                 <span>Create</span>
//               </button>
//             </div>
//           </div>

//           {/* Search and Controls */}
//           <div className="bg-white border-b border-gray-200 px-6 py-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2 text-sm">
//                   <span className="text-gray-600">Search:</span>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       placeholder="Search here..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="pl-3 pr-4 py-1 w-64 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
//                 <Eye size={16} />
//                 <span>Columns</span>
//               </button>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="bg-white">
//             <div className="overflow-x-auto">
//               <table className="min-w-full">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       SN
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Action
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Inq. No
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Inq. Age
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Booking Age
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Inq. Date
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
//                       Booked Date
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Inq. Kind
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredCustomers.slice((currentPage - 1) * showRows, currentPage * showRows).map((customer, index) => (
//                     <tr key={customer.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {(currentPage - 1) * showRows + index + 1}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
//                         <div className="flex items-center space-x-1">
//                           <button className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded flex items-center justify-center hover:bg-yellow-200">
//                             <Edit2 size={12} />
//                           </button>
//                           <button className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center hover:bg-blue-200">
//                             <Activity size={12} />
//                           </button>
//                           <button className="w-6 h-6 bg-green-100 text-green-600 rounded flex items-center justify-center hover:bg-green-200">
//                             <Users size={12} />
//                           </button>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {customer.inquiryNo}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {customer.name}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {customer.inquiryAge}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {customer.bookingAge}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {customer.inquiryDate}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
//                         {customer.bookedDate}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
//                           customer.inquiryKind === 'Hot' 
//                             ? 'bg-red-100 text-red-800'
//                             : customer.inquiryKind === 'Warm'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-blue-100 text-blue-800'
//                         }`}>
//                           {customer.inquiryKind}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination Footer */}
//             <div className="bg-white px-6 py-3 border-t border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2 text-sm text-gray-700">
//                   <span>Show rows</span>
//                   <select 
//                     value={showRows}
//                     onChange={(e) => setShowRows(Number(e.target.value))}
//                     className="border border-gray-300 rounded px-2 py-1 text-sm"
//                   >
//                     <option value={10}>10</option>
//                     <option value={25}>25</option>
//                     <option value={50}>50</option>
//                   </select>
//                   <span>1 - 10 of 46 entries</span>
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   <button 
//                     onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                     className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
//                   >
//                     Previous
//                   </button>
//                   {[1, 2, 3].map((page) => (
//                     <button 
//                       key={page}
//                       onClick={() => setCurrentPage(page)}
//                       className={`px-3 py-1 text-sm rounded ${
//                         currentPage === page 
//                           ? 'bg-indigo-600 text-white' 
//                           : 'border border-gray-300 hover:bg-gray-50'
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}
//                   <button 
//                     onClick={() => setCurrentPage(currentPage + 1)}
//                     className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="bg-gray-50 px-6 py-3 text-center text-xs text-gray-500 border-t border-gray-200">
//               © 2025 Crafted with ♡ by <span className="text-indigo-600">Pagoda Labs</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default CRMCustomerInterface;

"use client";
import React, { useState } from "react";
import {
  Plus,
  Edit2,
  Activity,
  Users,
  Eye,
  Home,
  User,
  Moon,
  Maximize2,
  Grid3X3,
} from "lucide-react";

import CreateCustomerForm from "@/app/component/CreateCustomerForm";


import ConfirmationPopup from "@/app/component/CofirmationPopup";
import VehicleSelectorDrawer from "./VehicleSelectorDrawer";
import ActivityNotesDrawer from "./ActivityNotesDrawer";

const initialCustomers = [
  {
    id: 1,
    inquiryNo: "INQ-231418-2081-82",
    name: "Rupak Tiwari",
    inquiryAge: 0,
    bookingAge: 0,
    inquiryDate: "2024-12-27",
    bookedDate: "2024-12-27",
    inquiryKind: "Hot",
    vehicles: [{ make: "Toyota", model: "Camry", year: "2023" }],
  },
  {
    id: 2,
    inquiryNo: "INQ-231417-2081-82",
    name: "Karma Dorje Lama",
    inquiryAge: 0,
    bookingAge: 145,
    inquiryDate: "2024-12-27",
    bookedDate: "2024-12-27",
    inquiryKind: "Hot",
    vehicles: [
      { make: "Honda", model: "Civic", year: "2022" },
      { make: "BMW", model: "X5", year: "2023" },
    ],
  },
  // add other customers...
];

const CRMCustomerInterface = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showRows, setShowRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modal & drawer states
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [drawerType, setDrawerType] = useState("activity");
  const [showVehicleSelector, setShowVehicleSelector] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showConfirmConversion, setShowConfirmConversion] = useState(false);

  // Filter customers
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.inquiryNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handlers
  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
    setShowCreateForm(true);
  };

  const handleShowActivity = (customer) => {
    setSelectedCustomer(customer);
    setDrawerType("activity");
    setShowDrawer(true);
  };

  const handleConvertLead = (customer) => {
    if (customer.vehicles?.length === 1) {
      setSelectedCustomer(customer);
      setSelectedVehicle(customer.vehicles[0]);
      setShowConfirmConversion(true);
    } else if (customer.vehicles?.length > 1) {
      setSelectedCustomer(customer);
      setShowVehicleSelector(true);
    }
  };

  const handleSaveCustomer = (customerData) => {
    if (editingCustomer) {
      setCustomers((prev) =>
        prev.map((c) =>
          c.id === editingCustomer.id ? { ...customerData, id: editingCustomer.id } : c
        )
      );
    } else {
      setCustomers((prev) => [...prev, { ...customerData, id: Date.now() }]);
    }
    setShowCreateForm(false);
    setEditingCustomer(null);
  };

  const handleConfirmConversion = () => {
    console.log("Converting lead to deal:", selectedCustomer, selectedVehicle);
    setShowConfirmConversion(false);
    setSelectedCustomer(null);
    setSelectedVehicle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-indigo-600">CRM</h1>
            <Grid3X3 className="text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <Moon className="text-gray-400 cursor-pointer" size={20} />
            <Maximize2 className="text-gray-400 cursor-pointer" size={20} />
            <User className="text-gray-400 cursor-pointer" size={20} />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <div className="flex items-center space-x-2 text-indigo-600 mb-6">
              <Grid3X3 size={16} />
              <span className="font-medium">CRM</span>
            </div>
            <nav className="space-y-2">
              <div className="text-gray-600 text-sm font-medium mb-3">Customer</div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-white border-b border-gray-200 px-6 py-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Home size={16} />
              <span>/</span>
              <span>Customers</span>
            </div>
          </div>

          {/* Content Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Customers</h2>
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium"
              onClick={() => setShowCreateForm(true)}
            >
              <Plus size={16} />
              <span>Create</span>
            </button>
          </div>

          {/* Search and Controls */}
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-gray-600">Search:</span>
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 pr-4 py-1 w-64 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
              />
            </div>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200">
              <Eye size={16} />
              <span>Columns</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    SN
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Inq. No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Inq. Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Booking Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Inq. Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                    Booked Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Inq. Kind
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCustomers
                  .slice((currentPage - 1) * showRows, currentPage * showRows)
                  .map((customer, index) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {(currentPage - 1) * showRows + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border-r border-gray-200">
                        <div className="flex items-center space-x-1">
                          <button
                            className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded flex items-center justify-center hover:bg-yellow-200"
                            onClick={() => handleEditCustomer(customer)}
                          >
                            <Edit2 size={12} />
                          </button>
                          <button
                            className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center hover:bg-blue-200"
                            onClick={() => handleShowActivity(customer)}
                          >
                            <Activity size={12} />
                          </button>
                          <button
                            className="w-6 h-6 bg-green-100 text-green-600 rounded flex items-center justify-center hover:bg-green-200"
                            onClick={() => handleConvertLead(customer)}
                          >
                            <Users size={12} />
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {customer.inquiryNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {customer.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {customer.inquiryAge}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {customer.bookingAge}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {customer.inquiryDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                        {customer.bookedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded ${
                            customer.inquiryKind === "Hot"
                              ? "bg-red-100 text-red-800"
                              : customer.inquiryKind === "Warm"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {customer.inquiryKind}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <span>Show rows</span>
              <select
                value={showRows}
                onChange={(e) => setShowRows(Number(e.target.value))}
                className="border border-gray-300 rounded px-2 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>
                {(currentPage - 1) * showRows + 1} -{" "}
                {Math.min(currentPage * showRows, filteredCustomers.length)} of{" "}
                {filteredCustomers.length} entries
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
              >
                Previous
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 text-sm rounded ${
                    currentPage === page
                      ? "bg-indigo-600 text-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage(
                    Math.min(
                      Math.ceil(filteredCustomers.length / showRows),
                      currentPage + 1
                    )
                  )
                }
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-3 text-center text-xs text-gray-500 border-t border-gray-200">
            © 2025 Crafted with ♡ by{" "}
            <span className="text-indigo-600">Pagoda Labs</span>
          </div>
        </div>
      </div>

      {/* Modals and Drawers */}
      <CreateCustomerForm
        show={showCreateForm}
        customer={editingCustomer}
        onClose={() => {
          setShowCreateForm(false);
          setEditingCustomer(null);
        }}
        onSave={handleSaveCustomer}
      />

      <ActivityNotesDrawer
        show={showDrawer}
        customer={selectedCustomer}
        type={drawerType}
        onClose={() => setShowDrawer(false)}
      />

      <VehicleSelectorDrawer
        show={showVehicleSelector}
        customer={selectedCustomer}
        onClose={() => setShowVehicleSelector(false)}
        onSelectVehicle={(vehicle) => {
          setSelectedVehicle(vehicle);
          setShowVehicleSelector(false);
          setShowConfirmConversion(true);
        }}
      />

      <ConfirmationPopup
        show={showConfirmConversion}
        customer={selectedCustomer}
        vehicle={selectedVehicle}
        onClose={() => setShowConfirmConversion(false)}
        onConfirm={handleConfirmConversion}
      />
    </div>
  );
};

export default CRMCustomerInterface;
