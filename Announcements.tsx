import React, { useState } from 'react';
import { Bell, AlertTriangle, Calendar, Clock, Filter } from 'lucide-react';
import { mockAnnouncements } from '../data/mockData';

const Announcements: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  const types = ['all', 'exam', 'holiday', 'ptm', 'general'];
  const priorities = ['all', 'high', 'medium', 'low'];

  const filteredAnnouncements = mockAnnouncements.filter(announcement => {
    const typeMatch = selectedType === 'all' || announcement.type === selectedType;
    const priorityMatch = selectedPriority === 'all' || announcement.priority === selectedPriority;
    return typeMatch && priorityMatch;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'exam': return 'bg-red-100 text-red-800';
      case 'holiday': return 'bg-green-100 text-green-800';
      case 'ptm': return 'bg-blue-100 text-blue-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'exam': return AlertTriangle;
      case 'holiday': return Calendar;
      case 'ptm': return Clock;
      default: return Bell;
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Announcements</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed with the latest updates, notices, and important information from Excellence Academy
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Announcements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {priorities.map(priority => (
                  <option key={priority} value={priority}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement) => {
              const TypeIcon = getTypeIcon(announcement.type);
              return (
                <div key={announcement.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(announcement.type)}`}>
                          <TypeIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{announcement.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {announcement.date.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(announcement.priority)}`}>
                          {announcement.priority.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(announcement.type)}`}>
                          {announcement.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                  </div>
                  
                  {announcement.priority === 'high' && (
                    <div className="bg-red-50 border-t border-red-200 px-6 py-3">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                        <span className="text-sm font-medium text-red-800">High Priority Notice</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No announcements found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more announcements.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Announcement Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-2">
                {mockAnnouncements.length}
              </div>
              <div className="text-gray-600">Total Announcements</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">
                {mockAnnouncements.filter(a => a.priority === 'high').length}
              </div>
              <div className="text-gray-600">High Priority</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {mockAnnouncements.filter(a => a.type === 'exam').length}
              </div>
              <div className="text-gray-600">Exam Related</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {mockAnnouncements.filter(a => a.type === 'holiday').length}
              </div>
              <div className="text-gray-600">Holiday Notices</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcements;