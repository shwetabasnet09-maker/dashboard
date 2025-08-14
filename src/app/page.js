"use client";
import React, { useState, useEffect } from 'react';
import { X, Plus, Edit2, Activity, Users, Phone, Mail, Car, Eye, EyeOff, Search, MoreHorizontal } from 'lucide-react';
import CustomerTable from './component/CustomerTable';
import CreateCustomerForm from './component/CreateCustomerForm';
import ColumnManager from './component/ColumnManger';
import ActivityNotesDrawer from './component/ActivityNotesDrawer';
import VehicleSelectorDrawer from './component/VehicleSelectorDrawer';
import ConfirmationPopup from './component/CofirmationPopup';
import Header from './component/Header';



// Sample data
const initialCustomers = [
  {
    id: 1,
    inquiryNo: 'INQ 23/5118/2081-82',
    name: 'Rupak Tiwari',
    inquiryAge: 0,
    bookingAge: 0,
    inquiryDate: '2024-12-27',
    bookedDate: '2024-12-27',
    inquiryKind: 'Hot',
    vehicles: [{ make: 'Toyota', model: 'Camry', year: '2023' }],
    contacts: [{ type: 'Home', number: '+977-9841234567' }],
    emails: [{ type: 'Personal', email: 'rupak@gmail.com' }]
  },
  {
    id: 2,
    inquiryNo: 'INQ 23/5117/2081-82',
    name: 'Karma Dorje Lama',
    inquiryAge: 0,
    bookingAge: 145,
    inquiryDate: '2024-12-27',
    bookedDate: '2024-12-27',
    inquiryKind: 'Hot',
    vehicles: [
      { make: 'Honda', model: 'Civic', year: '2022' },
      { make: 'BMW', model: 'X5', year: '2023' }
    ],
    contacts: [{ type: 'Work', number: '+977-9841234568' }],
    emails: [{ type: 'Work', email: 'karma@company.com' }]
  }
];

const CRMDashboard = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showColumnManager, setShowColumnManager] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showVehicleSelector, setShowVehicleSelector] = useState(false);
  const [showConfirmConversion, setShowConfirmConversion] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [drawerType, setDrawerType] = useState('activity');
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [visibleColumns, setVisibleColumns] = useState({
    action: true,
    inquiryNo: true,
    name: true,
    inquiryAge: true,
    bookingAge: true,
    inquiryDate: true,
    bookedDate: true,
    inquiryKind: true
  });

  const [activities, setActivities] = useState({});
  const [notes, setNotes] = useState({});

  // Filter customers based on search
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.inquiryNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
    setShowCreateForm(true);
  };

  const handleShowActivity = (customer) => {
    setSelectedCustomer(customer);
    setShowDrawer(true);
  };

  const handleConvertLead = (customer) => {
    if (customer.vehicles.length === 1) {
      setSelectedCustomer(customer);
      setSelectedVehicle(customer.vehicles[0]);
      setShowConfirmConversion(true);
    } else {
      setSelectedCustomer(customer);
      setShowVehicleSelector(true);
    }
  };

  const handleSaveCustomer = (customerData) => {
    if (editingCustomer) {
      setCustomers(prev => prev.map(c => c.id === editingCustomer.id ? {...customerData, id: editingCustomer.id} : c));
    } else {
      setCustomers(prev => [...prev, {...customerData, id: Date.now()}]);
    }
    setShowCreateForm(false);
    setEditingCustomer(null);
  };

  const handleConfirmConversion = () => {
    console.log('Converting lead to deal:', selectedCustomer, selectedVehicle);
    setShowConfirmConversion(false);
    setSelectedCustomer(null);
    setSelectedVehicle(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <CustomerTable
            customers={filteredCustomers}
            visibleColumns={visibleColumns}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onShowColumnManager={() => setShowColumnManager(true)}
            onShowCreateForm={() => setShowCreateForm(true)}
            onEditCustomer={handleEditCustomer}
            onShowActivity={handleShowActivity}
            onConvertLead={handleConvertLead}
          />
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

      <ColumnManager
        show={showColumnManager}
        columns={visibleColumns}
        onClose={() => setShowColumnManager(false)}
        onSave={setVisibleColumns}
      />

      <ActivityNotesDrawer
        show={showDrawer}
        customer={selectedCustomer}
        type={drawerType}
        onClose={() => setShowDrawer(false)}
        onTypeChange={setDrawerType}
        activities={activities}
        notes={notes}
        onUpdateActivities={setActivities}
        onUpdateNotes={setNotes}
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

export default CRMDashboard;