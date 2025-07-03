import React from 'react';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import { mockFaculty } from '../data/mockData';

const Academics: React.FC = () => {
  const curriculumData = [
    {
      grade: 'Primary School (K-5)',
      description: 'Foundation building with focus on basic literacy, numeracy, and social skills.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      grade: 'Middle School (6-8)',
      description: 'Comprehensive curriculum to develop critical thinking and analytical skills.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Foreign Language', 'Computer Science'],
      color: 'bg-emerald-50 border-emerald-200'
    },
    {
      grade: 'High School (9-12)',
      description: 'Advanced coursework preparing students for higher education and careers.',
      subjects: ['Advanced English', 'Calculus', 'Physics', 'Chemistry', 'Biology', 'AP Courses'],
      color: 'bg-amber-50 border-amber-200'
    },
  ];

  const examInfo = {
    midTerm: {
      date: 'February 1-15, 2024',
      subjects: ['All core subjects', 'Practical examinations', 'Project submissions'],
      duration: '2 weeks'
    },
    finals: {
      date: 'May 15-30, 2024',
      subjects: ['Comprehensive examinations', 'Oral assessments', 'Final projects'],
      duration: '2 weeks'
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Excellence in education through innovative curriculum, experienced faculty, and comprehensive assessment
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Curriculum Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {curriculumData.map((level, index) => (
            <div key={index} className={`border-2 rounded-lg p-6 ${level.color}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{level.grade}</h3>
              <p className="text-gray-600 mb-6">{level.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Core Subjects:</h4>
                <div className="flex flex-wrap gap-2">
                  {level.subjects.map((subject, subIndex) => (
                    <span
                      key={subIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examination Information */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Examination Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Mid-Term Examinations</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Date: </span>
                  <span className="text-gray-600">{examInfo.midTerm.date}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Duration: </span>
                  <span className="text-gray-600">{examInfo.midTerm.duration}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Includes: </span>
                  <ul className="text-gray-600 ml-4 list-disc">
                    {examInfo.midTerm.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">Final Examinations</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Date: </span>
                  <span className="text-gray-600">{examInfo.finals.date}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Duration: </span>
                  <span className="text-gray-600">{examInfo.finals.duration}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Includes: </span>
                  <ul className="text-gray-600 ml-4 list-disc">
                    {examInfo.finals.subjects.map((subject, index) => (
                      <li key={index}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockFaculty.map((faculty) => (
            <div key={faculty.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faculty.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{faculty.subject}</p>
                <p className="text-gray-600 text-sm mb-2">{faculty.qualification}</p>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-gray-500 text-sm">{faculty.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Pass Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">88%</div>
              <div className="text-gray-600">First Division</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-amber-600 mb-2">15:1</div>
              <div className="text-gray-600">Student-Teacher Ratio</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Academic Awards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;