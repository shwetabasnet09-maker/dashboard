import React, { useState } from 'react';
import { X, Plus, Activity, Edit2, Phone } from 'lucide-react';

const ActivityNotesDrawer = ({ show, customer, type, onClose, onTypeChange, activities, notes, onUpdateActivities, onUpdateNotes }) => {
  const [newActivity, setNewActivity] = useState({ type: 'Call', description: '', date: '', time: '', priority: 'Medium' });
  const [newNote, setNewNote] = useState('');
  const [isAddingActivity, setIsAddingActivity] = useState(false);

  const customerActivities = activities[customer?.id] || [
    {
      id: 1,
      type: 'Call',
      priority: 'Medium',
      time: '01:10 PM',
      description: 'Niroj Prajapati',
      phone: '9845512355',
      date: '16 June 2025'
    },
    {
      id: 2,
      type: 'Lead converted to deal',
      time: '12:10 AM',
      description: 'Niroj Prajapati',
      date: '16 June 2025'
    },
    {
      id: 3,
      type: 'Lead Created',
      time: '11:10 AM',
      description: 'Niroj Prajapati',
      date: '16 June 2025'
    }
  ];
  const customerNotes = notes[customer?.id] || [];

  const addActivity = () => {
    if (newActivity.description && newActivity.date && newActivity.time) {
      const activity = {
        ...newActivity,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };
      onUpdateActivities(prev => ({
        ...prev,
        [customer.id]: [...(prev[customer.id] || []), activity]
      }));
      setNewActivity({ type: 'Call', description: '', date: '', time: '', priority: 'Medium' });
      setIsAddingActivity(false);
    }
  };

  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        content: newNote,
        timestamp: new Date().toISOString()
      };
      onUpdateNotes(prev => ({
        ...prev,
        [customer.id]: [...(prev[customer.id] || []), note]
      }));
      setNewNote('');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">{customer?.name}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-white border-b border-gray-200">
          <button
            onClick={() => onTypeChange('activity')}
            className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center space-x-2 ${
              type === 'activity'
                ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <Activity size={16} />
            <span>Activity</span>
          </button>
          <button
            onClick={() => onTypeChange('notes')}
            className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center space-x-2 ${
              type === 'notes'
                ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <Edit2 size={16} />
            <span>Notes</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {type === 'activity' ? (
            <div className="h-full flex flex-col">
              {/* Activity Header */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Activity</h3>
                <button
                  onClick={() => setIsAddingActivity(true)}
                  className="flex items-center space-x-1 px-3 py-1 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
                >
                  <Plus size={16} />
                  <span>Add</span>
                </button>
              </div>

              {/* Add Activity Form */}
              {isAddingActivity && (
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="space-y-3">
                    <select
                      value={newActivity.type}
                      onChange={(e) => setNewActivity(prev => ({...prev, type: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
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
                        onChange={(e) => setNewActivity(prev => ({...prev, date: e.target.value}))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                      <input
                        type="time"
                        value={newActivity.time}
                        onChange={(e) => setNewActivity(prev => ({...prev, time: e.target.value}))}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      />
                    </div>

                    <select
                      value={newActivity.priority}
                      onChange={(e) => setNewActivity(prev => ({...prev, priority: e.target.value}))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>

                    <textarea
                      value={newActivity.description}
                      onChange={(e) => setNewActivity(prev => ({...prev, description: e.target.value}))}
                      placeholder="Activity description..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setIsAddingActivity(false)}
                        className="flex-1 px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={addActivity}
                        className="flex-1 px-3 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Activity Content */}
              <div className="flex-1 overflow-auto">
                <div className="p-4">
                  <div className="text-sm text-gray-600 mb-4">
                    Click add to create an activity.
                  </div>

                  {/* History Section */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">History</h4>
                    
                    {/* Today Section */}
                    <div className="text-center py-2">
                      <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Today</span>
                    </div>

                    {/* Activity Items */}
                    <div className="space-y-4 mt-4">
                      {customerActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            activity.type === 'Call' ? 'bg-blue-100' :
                            activity.type === 'Lead converted to deal' ? 'bg-purple-100' :
                            'bg-purple-100'
                          }`}>
                            {activity.type === 'Call' ? (
                              <Phone size={14} className="text-blue-600" />
                            ) : (
                              <div className={`w-3 h-3 rounded-full ${
                                activity.type === 'Lead converted to deal' ? 'bg-purple-600' : 'bg-purple-600'
                              }`}></div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                              <span className="text-xs text-gray-500">{activity.time}</span>
                            </div>
                            
                            {activity.priority && (
                              <div className="flex items-center mt-1">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                  activity.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                  activity.priority === 'High' ? 'bg-red-100 text-red-800' :
                                  'bg-green-100 text-green-800'
                                }`}>
                                  <div className={`w-2 h-2 rounded-full mr-1 ${
                                    activity.priority === 'Medium' ? 'bg-yellow-400' :
                                    activity.priority === 'High' ? 'bg-red-400' :
                                    'bg-green-400'
                                  }`}></div>
                                  {activity.priority}
                                </span>
                              </div>
                            )}
                            
                            <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                            {activity.phone && (
                              <p className="text-sm text-gray-500 mt-1">{activity.phone}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Date Separator */}
                    <div className="text-center py-4">
                      <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">16 June 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              {/* Notes Header */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Notes</h3>
              </div>

              {/* Rich Text Editor */}
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-gray-200">
                  {/* Text Editor Toolbar */}
                  <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-200">
                    <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                      <span className="font-bold text-sm">B</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                      <span className="italic text-sm">I</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                      <span className="underline text-sm">U</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                      <span className="text-sm">🔗</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                      <span className="text-sm">≡</span>
                    </button>
                    <button className="p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded">
                      <span className="text-sm">📝</span>
                    </button>
                  </div>

                  {/* Text Area */}
                  <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Start typing your note..."
                    rows={8}
                    className="w-full px-0 py-2 border-0 focus:outline-none focus:ring-0 resize-none text-sm"
                  />

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-2 mt-4">
                    <button
                      onClick={() => setNewNote('')}
                      className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={addNote}
                      className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                    >
                      Save
                    </button>
                  </div>
                </div>

                {/* Notes List */}
                <div className="flex-1 overflow-auto p-4">
                  {customerNotes.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-500 text-sm">No notes yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {customerNotes.map((note) => (
                        <div key={note.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-500">
                              {new Date(note.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityNotesDrawer;