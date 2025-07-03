import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Excellence Academy</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nurturing young minds for a bright future through quality education and holistic development.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/academics" className="text-gray-300 hover:text-white">Academics</a></li>
              <li><a href="/admissions" className="text-gray-300 hover:text-white">Admissions</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="/announcements" className="text-gray-300 hover:text-white">Announcements</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Primary School (K-5)</li>
              <li>Middle School (6-8)</li>
              <li>High School (9-12)</li>
              <li>Advanced Placement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-300">123 Education Street, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">info@excellenceacademy.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Excellence Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;