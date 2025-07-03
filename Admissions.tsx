import React, { useState } from 'react';
import { FileText, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { AdmissionForm } from '../types';

const Admissions: React.FC = () => {
  const [formData, setFormData] = useState<Partial<AdmissionForm>>({
    studentName: '',
    admittedInto: '',
    previousClass: '',
    previousMarks: {},
    contactInfo: {
      email: '',
      phone: '',
      address: ''
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const gradeOptions = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
    'Grade 11', 'Grade 12'
  ];

  const subjects = ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setSubmitted(true);
    setShowForm(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContactChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      contactInfo: { ...prev.contactInfo, [field]: value }
    }));
  };

  const handleMarkChange = (subject: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      previousMarks: { ...prev.previousMarks, [subject]: parseInt(value) || 0 }
    }));
  };

  const admissionProcess = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete and submit the online admission form with required documents.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Our admissions team will verify all submitted documents and credentials.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Students may be required to take an entrance assessment based on grade level.',
      icon: Calendar
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment instructions via email.',
      icon: AlertCircle
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our community of learners and embark on an educational journey that will shape your future
          </p>
        </div>
      </section>

      {/* Success Message */}
      {submitted && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-800 mb-2">Application Submitted Successfully!</h3>
            <p className="text-green-700">
              Thank you for your interest in Excellence Academy. We will review your application and contact you soon.
            </p>
          </div>
        </div>
      )}

      {/* Admission Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {admissionProcess.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <step.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">Step {step.step}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Birth certificate or age proof
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Previous school transcript and transfer certificate
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Passport-sized photographs (4 copies)
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Parent/Guardian identification documents
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Medical fitness certificate
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Age-appropriate grade level admission
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Minimum 60% marks in previous class
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Good conduct certificate from previous school
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  English proficiency assessment
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  Parent interview and commitment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Application Form</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below to start your admission process
          </p>
          {!showForm && !submitted && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Start Application
            </button>
          )}
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => handleInputChange('studentName', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admitted Into *
                  </label>
                  <select
                    required
                    value={formData.admittedInto}
                    onChange={(e) => handleInputChange('admittedInto', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Select Grade</option>
                    {gradeOptions.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Class *
                </label>
                <input
                  type="text"
                  required
                  value={formData.previousClass}
                  onChange={(e) => handleInputChange('previousClass', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Previous Marks (Subject-wise) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subjects.map(subject => (
                    <div key={subject}>
                      <label className="block text-sm text-gray-600 mb-1">{subject}</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        required
                        value={formData.previousMarks?.[subject] || ''}
                        onChange={(e) => handleMarkChange(subject, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.contactInfo?.email || ''}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactInfo?.phone || ''}
                      onChange={(e) => handleContactChange('phone', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.contactInfo?.address || ''}
                    onChange={(e) => handleContactChange('address', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Admissions;