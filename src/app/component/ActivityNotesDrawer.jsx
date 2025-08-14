"use client";
import React, { useState } from "react";
import { X, Plus, Activity, Edit2, Phone, Calendar, Clock, AlertCircle, FileText, CheckCircle } from "lucide-react";

const ActivityNotesDrawer = ({ show, customer, type, onClose, onTypeChange }) => {
  // Dummy data
  const dummyCustomer = customer || { id: 1, name: "John Doe" };

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
      case "Call": return <Phone size={16} className="text-emerald-600" />;
      case "Email": return <FileText size={16} className="text-blue-600" />;
      case "Meeting": return <Calendar size={16} className="text-purple-600" />;
      case "Follow-up": return <CheckCircle size={16} className="text-orange-600" />;
      default: return <Activity size={16} className="text-gray-600" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 border-red-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-2/5 min-w-[520px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 border-b border-slate-700">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">{dummyCustomer.name}</h2>
              <p className="text-slate-300 text-sm mt-1">Customer Profile</p>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-50 border-b border-slate-200">
          <button
            onClick={() => onTypeChange("activity")}
            className={`flex-1 py-4 px-6 flex items-center justify-center space-x-3 text-sm font-medium transition-all duration-200 relative ${
              type === "activity"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-800 hover:bg-white/50"
            }`}
          >
            <Activity size={18} />
            <span>Activities</span>
            {type === "activity" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            )}
          </button>
          <button
            onClick={() => onTypeChange("notes")}
            className={`flex-1 py-4 px-6 flex items-center justify-center space-x-3 text-sm font-medium transition-all duration-200 relative ${
              type === "notes"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-800 hover:bg-white/50"
            }`}
          >
            <Edit2 size={18} />
            <span>Notes</span>
            {type === "notes" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-slate-50">
          {type === "activity" ? (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Activity Timeline</h3>
                  <p className="text-slate-600 text-sm mt-1">{customerActivities.length} activities recorded</p>
                </div>
                <button
                  onClick={() => setIsAddingActivity(true)}
                  className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Plus size={16} /> 
                  <span>New Activity</span>
                </button>
              </div>

              {/* Add Activity Form */}
              {isAddingActivity && (
                <div className="mb-6 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                  <h4 className="text-base font-medium text-slate-900 mb-4">Create New Activity</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Type</label>
                        <select
                          value={newActivity.type}
                          onChange={(e) => setNewActivity(prev => ({ ...prev, type: e.target.value }))}
                          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="Call">Call</option>
                          <option value="Email">Email</option>
                          <option value="Meeting">Meeting</option>
                          <option value="Follow-up">Follow-up</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Priority</label>
                        <select
                          value={newActivity.priority}
                          onChange={(e) => setNewActivity(prev => ({ ...prev, priority: e.target.value }))}
                          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        >
                          <option value="High">High Priority</option>
                          <option value="Medium">Medium Priority</option>
                          <option value="Low">Low Priority</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Date</label>
                        <input
                          type="date"
                          value={newActivity.date}
                          onChange={(e) => setNewActivity(prev => ({ ...prev, date: e.target.value }))}
                          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Time</label>
                        <input
                          type="time"
                          value={newActivity.time}
                          onChange={(e) => setNewActivity(prev => ({ ...prev, time: e.target.value }))}
                          className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">Description</label>
                      <textarea
                        value={newActivity.description}
                        onChange={(e) => setNewActivity(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe the activity..."
                        rows={3}
                        className="w-full px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                      />
                    </div>
                    <div className="flex space-x-3 pt-2">
                      <button 
                        onClick={() => setIsAddingActivity(false)}
                        className="flex-1 px-4 py-2.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={addActivity}
                        className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                      >
                        Save Activity
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Activity List */}
              <div className="space-y-4">
                {customerActivities.map((activity, index) => (
                  <div key={activity.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-sm font-semibold text-slate-900">{activity.type}</h4>
                            <div className="flex items-center space-x-3 mt-1">
                              <span className="flex items-center text-xs text-slate-500">
                                <Calendar size={12} className="mr-1" />
                                {activity.date}
                              </span>
                              <span className="flex items-center text-xs text-slate-500">
                                <Clock size={12} className="mr-1" />
                                {activity.time}
                              </span>
                            </div>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(activity.priority)}`}>
                            {activity.priority}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {customerActivities.length === 0 && (
                  <div className="text-center py-12">
                    <Activity size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-sm font-medium text-slate-600 mb-2">No activities yet</h3>
                    <p className="text-xs text-slate-500">Start by adding your first activity above</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Customer Notes</h3>
                <p className="text-slate-600 text-sm mt-1">Keep track of important information</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 mb-6">
                <label className="block text-xs font-medium text-slate-600 mb-3 uppercase tracking-wide">Add New Note</label>
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Write your note here..."
                  rows={6}
                  className="w-full px-0 py-2 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm placeholder-slate-400 resize-none"
                />
                <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => setNewNote("")}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    Clear
                  </button>
                  <button 
                    onClick={addNote}
                    className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    Save Note
                  </button>
                </div>
              </div>

              {/* Notes List */}
              <div className="space-y-4">
                {customerNotes.map(note => (
                  <div key={note.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Edit2 size={14} className="text-amber-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                            {new Date(note.timestamp).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">{note.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {customerNotes.length === 0 && (
                  <div className="text-center py-12">
                    <Edit2 size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-sm font-medium text-slate-600 mb-2">No notes yet</h3>
                    <p className="text-xs text-slate-500">Add your first note above to get started</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityNotesDrawer;