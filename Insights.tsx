import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Download, TrendingUp, TrendingDown, Users, Award, Target, BookOpen } from 'lucide-react';
import { mockStudents } from '../data/mockData';

const Insights: React.FC = () => {
  const { user } = useAuth();
  const [selectedClass, setSelectedClass] = useState('Grade 10');

  if (!user) return null;

  // Mock data for different user roles
  const subjectData = [
    { subject: 'Mathematics', average: 85, highest: 98, lowest: 65 },
    { subject: 'Physics', average: 82, highest: 95, lowest: 58 },
    { subject: 'Chemistry', average: 78, highest: 90, lowest: 55 },
    { subject: 'English', average: 86, highest: 96, lowest: 70 },
    { subject: 'Biology', average: 80, highest: 92, lowest: 62 },
  ];

  const performanceTrend = [
    { month: 'Jan', score: 75 },
    { month: 'Feb', score: 78 },
    { month: 'Mar', score: 82 },
    { month: 'Apr', score: 85 },
    { month: 'May', score: 88 },
    { month: 'Jun', score: 90 },
  ];

  const classDistribution = [
    { grade: 'A+', count: 45, color: '#10B981' },
    { grade: 'A', count: 120, color: '#3B82F6' },
    { grade: 'B+', count: 95, color: '#F59E0B' },
    { grade: 'B', count: 60, color: '#EF4444' },
    { grade: 'C', count: 25, color: '#6B7280' },
  ];

  const handleDownload = () => {
    // Mock download functionality
    alert('Report downloaded successfully!');
  };

  const PrincipalView = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">1,245</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-2 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+5.2% from last year</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Score</p>
              <p className="text-2xl font-bold text-gray-900">82.3%</p>
            </div>
            <Target className="h-8 w-8 text-green-500" />
          </div>
          <div className="mt-2 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+2.1% from last term</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Top Performers</p>
              <p className="text-2xl font-bold text-gray-900">165</p>
            </div>
            <Award className="h-8 w-8 text-yellow-500" />
          </div>
          <div className="mt-2 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">+8.3% improvement</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pass Rate</p>
              <p className="text-2xl font-bold text-gray-900">95.2%</p>
            </div>
            <BookOpen className="h-8 w-8 text-purple-500" />
          </div>
          <div className="mt-2 flex items-center">
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-sm text-red-600">-1.2% from target</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Subject-wise Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="average" fill="#3B82F6" />
              <Bar dataKey="highest" fill="#10B981" />
              <Bar dataKey="lowest" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Grade Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={classDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ grade, count }) => `${grade}: ${count}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {classDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Performance Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const TeacherView = () => (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Class Performance - {selectedClass}</h2>
        <button
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-600">Class Average</p>
          <p className="text-2xl font-bold text-gray-900">84.8%</p>
          <p className="text-sm text-green-600">Above school average</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-600">Top Performer</p>
          <p className="text-2xl font-bold text-gray-900">John Doe</p>
          <p className="text-sm text-blue-600">92.4% average</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-600">Students</p>
          <p className="text-2xl font-bold text-gray-900">3</p>
          <p className="text-sm text-gray-600">In your class</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Student Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Math
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Physics
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chemistry
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.rollNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.marks.Mathematics}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.marks.Physics}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.marks.Chemistry}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.percentage}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.rank}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const StudentView = () => {
    const studentData = mockStudents[0]; // Assuming current user is John Doe
    
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">My Performance Dashboard</h2>
          <button
            onClick={handleDownload}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Report Card
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-600">Overall Percentage</p>
            <p className="text-2xl font-bold text-gray-900">{studentData.percentage}%</p>
            <p className="text-sm text-green-600">Above class average</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-600">Class Rank</p>
            <p className="text-2xl font-bold text-gray-900">#{studentData.rank}</p>
            <p className="text-sm text-blue-600">out of 30 students</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-600">Best Subject</p>
            <p className="text-2xl font-bold text-gray-900">Physics</p>
            <p className="text-sm text-green-600">92 marks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm font-medium text-gray-600">Improvement Area</p>
            <p className="text-2xl font-bold text-gray-900">Chemistry</p>
            <p className="text-sm text-orange-600">78 marks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">My Marks vs Class Average</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={Object.entries(studentData.marks).map(([subject, mark]) => ({
                subject,
                myMark: mark,
                classAverage: subjectData.find(s => s.subject === subject)?.average || 80
              }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="myMark" fill="#3B82F6" name="My Score" />
                <Bar dataKey="classAverage" fill="#10B981" name="Class Average" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Performance Comparison</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">My Score</span>
                <span className="text-lg font-bold text-blue-600">{studentData.percentage}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Class Average</span>
                <span className="text-lg font-bold text-green-600">82.3%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Class Topper</span>
                <span className="text-lg font-bold text-purple-600">92.4%</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Difference from Topper</span>
                  <span className="text-lg font-bold text-orange-600">-7.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Subject-wise Performance</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    My Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class Average
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Difference
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(studentData.marks).map(([subject, mark]) => {
                  const avg = subjectData.find(s => s.subject === subject)?.average || 80;
                  const diff = mark - avg;
                  const grade = mark >= 90 ? 'A+' : mark >= 80 ? 'A' : mark >= 70 ? 'B+' : mark >= 60 ? 'B' : 'C';
                  
                  return (
                    <tr key={subject}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {mark}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {avg}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {diff >= 0 ? '+' : ''}{diff}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {grade}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Performance Insights
          </h1>
          <p className="mt-2 text-gray-600">
            {user.role === 'principal' && 'School-wide performance analytics and insights'}
            {user.role === 'teacher' && 'Class performance analytics and student progress'}
            {user.role === 'student' && 'Your academic performance and progress tracking'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {user.role === 'principal' && <PrincipalView />}
        {user.role === 'teacher' && <TeacherView />}
        {user.role === 'student' && <StudentView />}
      </div>
    </div>
  );
};

export default Insights;