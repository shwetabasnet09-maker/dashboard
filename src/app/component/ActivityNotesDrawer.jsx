"use client";
import React, { useState } from "react";
import { X, Plus, Activity, Edit2, Phone, Mail, Calendar, Users, MoreHorizontal } from "lucide-react";

const ActivityNotesDrawer = ({ show, customer, type, onClose, onTypeChange }) => {
  // Dummy data
  const dummyCustomer = customer || { id: 1, name: "Rupak Tiwari" };

  const [activities, setActivities] = useState({
    [dummyCustomer.id]: [
      { id: 1, type: "Call", description: "Follow up about order", date: "2025-08-14", time: "10:00", priority: "High", timestamp: new Date().toISOString() },
      { id: 2, type: "Email", description: "Send invoice", date: "2025-08-13", time: "14:00", priority: "Medium", timestamp: new Date().toISOString() }
    ]
  });

  const [notes, setNotes] = useState({
    [dummyCustomer.id]: [
      { id: 1, content: "Customer prefers evening calls.", timestamp: new Date().toISOString() },
      { id: 2, content: "Check last purchase history.", timestamp: new Date().toISOString() }
    ]
  });

  const [newActivity, setNewActivity] = useState({
    type: "Call",
    description: "",
    date: "",
    time: "",
    priority: "Medium"
  });
  const [newNote, setNewNote] = useState("");
  const [isAddingActivity, setIsAddingActivity] = useState(false);

  const customerId = dummyCustomer?.id;
  const customerActivities = activities?.[customerId] || [];
  const customerNotes = notes?.[customerId] || [];

  const addActivity = () => {
    if (newActivity.description && newActivity.date && newActivity.time && customerId) {
      const activity = { ...newActivity, id: Date.now(), timestamp: new Date().toISOString() };
      setActivities(prev => ({
        ...prev,
        [customerId]: [...(prev[customerId] || []), activity]
      }));
      setNewActivity({ type: "Call", description: "", date: "", time: "", priority: "Medium" });
      setIsAddingActivity(false);
    }
  };

  const addNote = () => {
    if (newNote.trim() && customerId) {
      const note = { id: Date.now(), content: newNote, timestamp: new Date().toISOString() };
      setNotes(prev => ({
        ...prev,
        [customerId]: [...(prev[customerId] || []), note]
      }));
      setNewNote("");
    }
  };

  const getActivityIcon = (activityType) => {
    switch (activityType) {
      case "Call": return <Phone size={14} className="text-white" />;
      case "Email": return <Mail size={14} className="text-white" />;
      case "Meeting": return <Users size={14} className="text-white" />;
      case "Follow-up": return <Activity size={14} className="text-white" />;
      default: return <Phone size={14} className="text-white" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "text-red-600";
      case "Medium": return "text-orange-600";
      case "Low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end  ">
      <div className="w-2/5 min-w-[950px] h-full bg-white  flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
          <h2 className="text-lg font-medium">{dummyCustomer.name}</h2>
          <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-white">
          <button
            onClick={() => onTypeChange("activity")}
            className={`flex-1 py-3 px-4 flex items-center justify-center space-x-2 text-sm font-medium border-r border-gray-200 ${
              type === "activity"
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <Activity size={16} />
            <span>Activity</span>
          </button>
          <button
            onClick={() => onTypeChange("notes")}
            className={`flex-1 py-3 px-4 flex items-center justify-center space-x-2 text-sm font-medium ${
              type === "notes"
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            <Edit2 size={16} />
            <span>Notes</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          {type === "activity" ? (
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-gray-900">Activity</h3>
                <button
                  onClick={() => setIsAddingActivity(true)}
                  className="flex items-center space-x-1 px-3 py-1.5 text-sm text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  <Plus size={14} />
                  <span>Add</span>
                </button>
              </div>

              {/* Add Activity Form */}
              {isAddingActivity && (
                <div className="p-4 mb-4 bg-white rounded border space-y-3">
                  <select
                    value={newActivity.type}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Call">Call</option>
                    <option value="Email">Email</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Follow-up">Follow-up</option>
                  </select>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={newActivity.date}
                      onChange={(e) => setNewActivity(prev => ({ ...prev, date: e.target.value }))}
                      className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="time"
                      value={newActivity.time}
                      onChange={(e) => setNewActivity(prev => ({ ...prev, time: e.target.value }))}
                      className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <select
                    value={newActivity.priority}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, priority: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <textarea
                    value={newActivity.description}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Activity description..."
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setIsAddingActivity(false)}
                      className="flex-1 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={addActivity}
                      className="flex-1 px-3 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}

              {/* Activity List */}
              <div className="space-y-3">
                {/* Current Activity */}
                <div className="bg-white rounded border p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Call</p>
                          <p className="text-xs text-red-600 font-medium">● High</p>
                          <p className="text-xs text-gray-500 mt-1">2025-06-17 01:10 PM</p>
                          <p className="text-xs text-gray-500">Niraj Prasapati</p>
                          <p className="text-xs text-gray-500">9846572355</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* History Section */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">History</h4>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200"></div>
                    
                    {/* Today */}
                    <div className="relative">
                      <div className="bg-gray-100 text-center py-2 mb-4">
                        <span className="text-xs text-gray-600 bg-gray-100 px-2">Today</span>
                      </div>
                      
                      <div className="relative flex items-start space-x-3 pb-4">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 relative z-10">
                          <Phone size={14} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">Call</p>
                          <p className="text-xs text-orange-600 font-medium">● Medium</p>
                          <p className="text-xs text-gray-500 mt-1">01:10 PM</p>
                          <p className="text-xs text-gray-500">Niraj Prasapati</p>
                          <p className="text-xs text-gray-500">9846572355</p>
                        </div>
                      </div>
                    </div>

                    {/* 10 June, 2025 */}
                    <div className="relative">
                      <div className="bg-gray-100 text-center py-2 mb-4">
                        <span className="text-xs text-gray-600 bg-gray-100 px-2">10 June, 2025</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="relative flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 relative z-10">
                            <Calendar size={14} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">Lead Created to deal</p>
                            <p className="text-xs text-gray-500 mt-1">12:16 AM</p>
                            <p className="text-xs text-gray-500">Niraj Prasapati</p>
                          </div>
                        </div>

                        <div className="relative flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 relative z-10">
                            <Activity size={14} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">Lead Created</p>
                            <p className="text-xs text-gray-500 mt-1">11:10 AM</p>
                            <p className="text-xs text-gray-500">Niraj Prasapati</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show existing activities */}
                {customerActivities.map(activity => (
                  <div key={activity.id} className="bg-white rounded border p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                            <p className={`text-xs font-medium ${getPriorityColor(activity.priority)}`}>● {activity.priority}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.date} {activity.time}</p>
                            <p className="text-xs text-gray-500">{activity.description}</p>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Notes</h3>
              <div className="bg-white rounded border">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span className="font-bold">B</span>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span className="italic">I</span>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span className="underline">U</span>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span>🔗</span>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span>📎</span>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <span>≡</span>
                    </button>
                  </div>
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Start typing your note..."
                    rows={8}
                    className="w-full resize-none border-0 focus:outline-none text-sm"
                  />
                </div>
                <div className="p-4 flex justify-end space-x-2">
                  <button 
                    onClick={() => setNewNote("")}
                    className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={addNote}
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>

              {/* Notes List */}
              <div className="mt-4 space-y-3">
                {customerNotes.map(note => (
                  <div key={note.id} className="bg-white rounded border p-4">
                    <div className="text-xs text-gray-500 mb-2">
                      {new Date(note.timestamp).toLocaleDateString()}
                    </div>
                    <p className="text-sm text-gray-700">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityNotesDrawer;