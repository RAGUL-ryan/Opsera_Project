import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy, Calendar, Bell, ArrowRight } from 'lucide-react';
import { mockAnnouncements } from '../data/mockData';

const Home: React.FC = () => {
  const recentAnnouncements = mockAnnouncements.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Excellence Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nurturing young minds for a bright future through quality education, 
            innovative teaching, and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/academics"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Academics
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Excellence Academy
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985, Excellence Academy has been at the forefront of educational excellence 
              for over three decades. We believe in nurturing every child's potential through innovative 
              teaching methods, state-of-the-art facilities, and a supportive learning environment.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to create well-rounded individuals who are not only academically excellent 
              but also socially responsible, creative, and ready to face the challenges of tomorrow.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-gray-600">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Awards</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students in classroom"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/academics"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academics</h3>
              <p className="text-gray-600 mb-4">Explore our comprehensive curriculum and educational programs</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>

            <Link
              to="/admissions"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4 group-hover:bg-emerald-200 transition-colors">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Admissions</h3>
              <p className="text-gray-600 mb-4">Join our community and start your educational journey</p>
              <div className="flex items-center text-emerald-600 group-hover:text-emerald-700">
                <span className="text-sm font-medium">Apply now</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>

            <Link
              to="/events"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 group-hover:bg-amber-200 transition-colors">
                <Calendar className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Events</h3>
              <p className="text-gray-600 mb-4">Discover upcoming events and celebrate achievements</p>
              <div className="flex items-center text-amber-600 group-hover:text-amber-700">
                <span className="text-sm font-medium">View events</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>

            <Link
              to="/announcements"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Announcements</h3>
              <p className="text-gray-600 mb-4">Stay updated with important notices and information</p>
              <div className="flex items-center text-purple-600 group-hover:text-purple-700">
                <span className="text-sm font-medium">View all</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Announcements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recent Announcements</h2>
          <Link
            to="/announcements"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
          >
            View all <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentAnnouncements.map((announcement) => (
            <div key={announcement.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  announcement.type === 'exam' ? 'bg-red-100 text-red-800' :
                  announcement.type === 'ptm' ? 'bg-blue-100 text-blue-800' :
                  announcement.type === 'holiday' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {announcement.type.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">
                  {announcement.date.toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {announcement.title}
              </h3>
              <p className="text-gray-600">
                {announcement.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Excellence Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Education</h3>
              <p className="text-gray-600">
                Our experienced faculty and modern curriculum ensure that every student receives the best education possible.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Development</h3>
              <p className="text-gray-600">
                We focus on developing not just academic skills but also character, creativity, and leadership qualities.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4">
                <Trophy className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence in Results</h3>
              <p className="text-gray-600">
                Our students consistently achieve outstanding results in academics, sports, and extracurricular activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;