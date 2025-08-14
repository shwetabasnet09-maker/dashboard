import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CreateCustomerForm = ({ show, customer, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    inquiryNo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    inquiryKind: '',
    occupation: '',
    address1: '',
    address2: '',
    country: '',
    city: '',
    sourceType: '',
    remarks: '',
    vehicles: [{ make: '', model: '', year: '' }],
    contacts: [{ type: 'Home', number: '' }],
    emails: [{ type: 'Home', email: '' }]
  });

  const [addVehicleChecked, setAddVehicleChecked] = useState(false);

  useEffect(() => {
    if (customer) {
      setFormData({
        inquiryNo: customer.inquiryNo || '',
        firstName: customer.name?.split(' ')[0] || '',
        middleName: customer.name?.split(' ')[1] || '',
        lastName: customer.name?.split(' ').slice(2).join(' ') || '',
        inquiryKind: customer.inquiryKind || '',
        occupation: '',
        address1: '',
        address2: '',
        country: '',
        city: '',
        sourceType: '',
        remarks: '',
        vehicles: customer.vehicles || [{ make: '', model: '', year: '' }],
        contacts: customer.contacts || [{ type: 'Home', number: '' }],
        emails: customer.emails || [{ type: 'Home', email: '' }]
      });
    }
  }, [customer]);

  const addVehicle = () =>
    setFormData((prev) => ({
      ...prev,
      vehicles: [...prev.vehicles, { make: '', model: '', year: '' }]
    }));

  const removeVehicle = (index) =>
    setFormData((prev) => ({
      ...prev,
      vehicles: prev.vehicles.filter((_, i) => i !== index)
    }));

  const addContact = () =>
    setFormData((prev) => ({
      ...prev,
      contacts: [...prev.contacts, { type: 'Home', number: '' }]
    }));

  const removeContact = (index) =>
    setFormData((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index)
    }));

  const addEmail = () =>
    setFormData((prev) => ({
      ...prev,
      emails: [...prev.emails, { type: 'Home', email: '' }]
    }));

  const removeEmail = (index) =>
    setFormData((prev) => ({
      ...prev,
      emails: prev.emails.filter((_, i) => i !== index)
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      ...formData,
      name: `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim(),
      inquiryDate: new Date().toISOString().split('T')[0],
      bookedDate: new Date().toISOString().split('T')[0],
      inquiryAge: 0,
      bookingAge: 0
    };
    onSave(customerData);
  };

  if (!show) return null;

  return (
    <div className=" fixed inset-0 flex justify-end h-screen">
      <div className="bg-white  w-full max-w-7xl  overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#635bff] text-white">
          <h2 className="text-lg font-semibold">
            {customer ? 'Edit Customer' : 'Add Customer'}
          </h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Left Column - Customer Info */}
            <div>
              <h3 className="text-md font-medium mb-4">Customer Information</h3>

              {/* Inquiry No */}
              <input
                type="text"
                value={formData.inquiryNo}
                disabled
                placeholder="Auto-generated"
                className="w-full mb-4 border border-gray-300 rounded px-3 py-2 text-sm"
              />

              {/* Name fields */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={(e) => setFormData((p) => ({ ...p, middleName: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* Inquiry Kind & Occupation */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select
                  value={formData.inquiryKind}
                  onChange={(e) => setFormData((p) => ({ ...p, inquiryKind: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="">Select Inquiry Kind</option>
                  <option value="Hot">Hot</option>
                  <option value="Warm">Warm</option>
                  <option value="Cold">Cold</option>
                </select>
                <select
                  value={formData.occupation}
                  onChange={(e) => setFormData((p) => ({ ...p, occupation: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="">Select Occupation</option>
                  <option value="Business">Business</option>
                  <option value="Service">Service</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Address */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Enter Address 1"
                  value={formData.address1}
                  onChange={(e) => setFormData((p) => ({ ...p, address1: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Address 2"
                  value={formData.address2}
                  onChange={(e) => setFormData((p) => ({ ...p, address2: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              {/* Country & City */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select
                  value={formData.country}
                  onChange={(e) => setFormData((p) => ({ ...p, country: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="Nepal">Nepal</option>
                  <option value="India">India</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter City"
                  value={formData.city}
                  onChange={(e) => setFormData((p) => ({ ...p, city: e.target.value }))}
                  className="border border-gray-300 rounded px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* Source Type */}
              <select
                value={formData.sourceType}
                onChange={(e) => setFormData((p) => ({ ...p, sourceType: e.target.value }))}
                className="border border-gray-300 rounded px-3 py-2 text-sm mb-4"
                required
              >
                <option value="">Select Source Type</option>
                <option value="Online">Online</option>
                <option value="Referral">Referral</option>
                <option value="Walk-in">Walk-in</option>
              </select>

              {/* Remarks */}
              <textarea
                placeholder="Remarks"
                value={formData.remarks}
                onChange={(e) => setFormData((p) => ({ ...p, remarks: e.target.value }))}
                className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
              />
            </div>

            {/* Right Column - Vehicle + Contact */}
            <div>
              {/* Vehicle Info */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="checkbox"
                    checked={addVehicleChecked}
                    onChange={(e) => setAddVehicleChecked(e.target.checked)}
                  />
                  <label className="text-sm font-medium">Add Vehicle</label>
                </div>
                {addVehicleChecked &&
                  formData.vehicles.map((vehicle, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                    >
                      <input
                        type="text"
                        placeholder="Vehicle Make"
                        value={vehicle.make}
                        onChange={(e) => {
                          const newVehicles = [...formData.vehicles];
                          newVehicles[index].make = e.target.value;
                          setFormData((p) => ({ ...p, vehicles: newVehicles }));
                        }}
                        className="border border-gray-300 rounded px-3 py-2 text-sm mb-2 w-full"
                      />
                      <input
                        type="text"
                        placeholder="Vehicle Model"
                        value={vehicle.model}
                        onChange={(e) => {
                          const newVehicles = [...formData.vehicles];
                          newVehicles[index].model = e.target.value;
                          setFormData((p) => ({ ...p, vehicles: newVehicles }));
                        }}
                        className="border border-gray-300 rounded px-3 py-2 text-sm mb-2 w-full"
                      />
                      <input
                        type="text"
                        placeholder="Year"
                        value={vehicle.year}
                        onChange={(e) => {
                          const newVehicles = [...formData.vehicles];
                          newVehicles[index].year = e.target.value;
                          setFormData((p) => ({ ...p, vehicles: newVehicles }));
                        }}
                        className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                      />
                      {formData.vehicles.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeVehicle(index)}
                          className="text-red-500 text-xs mt-2"
                        >
                          Remove Vehicle
                        </button>
                      )}
                    </div>
                  ))}
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-md font-medium mb-4">Contact Information</h3>

                {formData.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                  >
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={contact.number}
                      onChange={(e) => {
                        const newContacts = [...formData.contacts];
                        newContacts[index].number = e.target.value;
                        setFormData((p) => ({ ...p, contacts: newContacts }));
                      }}
                      className="border border-gray-300 rounded px-3 py-2 text-sm mb-2 w-full"
                    />
                    <select
                      value={contact.type}
                      onChange={(e) => {
                        const newContacts = [...formData.contacts];
                        newContacts[index].type = e.target.value;
                        setFormData((p) => ({ ...p, contacts: newContacts }));
                      }}
                      className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                    >
                      <option value="Home">Home</option>
                      <option value="Work">Work</option>
                      <option value="Mobile">Mobile</option>
                    </select>
                    {formData.contacts.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeContact(index)}
                        className="text-red-500 text-xs mt-2"
                      >
                        Remove Contact
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addContact}
                  className="text-indigo-600 text-sm"
                >
                  + Add Phone
                </button>

                {/* Email */}
                <div className="mt-6">
                  {formData.emails.map((email, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                    >
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={email.email}
                        onChange={(e) => {
                          const newEmails = [...formData.emails];
                          newEmails[index].email = e.target.value;
                          setFormData((p) => ({ ...p, emails: newEmails }));
                        }}
                        className="border border-gray-300 rounded px-3 py-2 text-sm mb-2 w-full"
                        required={index === 0}
                      />
                      <select
                        value={email.type}
                        onChange={(e) => {
                          const newEmails = [...formData.emails];
                          newEmails[index].type = e.target.value;
                          setFormData((p) => ({ ...p, emails: newEmails }));
                        }}
                        className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                      >
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                      </select>
                      {formData.emails.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEmail(index)}
                          className="text-red-500 text-xs mt-2"
                        >
                          Remove Email
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addEmail}
                    className="text-indigo-600 text-sm"
                  >
                    + Add Email
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer buttons */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-700 bg-white hover:bg-gray-50 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded text-white bg-[#635bff] hover:bg-[#5146cc] text-sm"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomerForm;
