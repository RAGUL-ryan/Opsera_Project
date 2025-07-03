import { Student, AdmissionForm, Event, Announcement, Faculty } from '../types';

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    class: 'Grade 10',
    rollNumber: '001',
    marks: { Mathematics: 85, Physics: 92, Chemistry: 78, English: 88, Biology: 81 },
    totalMarks: 424,
    percentage: 84.8,
    rank: 1
  },
  {
    id: '2',
    name: 'Jane Smith',
    class: 'Grade 10',
    rollNumber: '002',
    marks: { Mathematics: 78, Physics: 85, Chemistry: 88, English: 92, Biology: 76 },
    totalMarks: 419,
    percentage: 83.8,
    rank: 2
  },
  {
    id: '3',
    name: 'Mike Johnson',
    class: 'Grade 10',
    rollNumber: '003',
    marks: { Mathematics: 92, Physics: 88, Chemistry: 85, English: 78, Biology: 89 },
    totalMarks: 432,
    percentage: 86.4,
    rank: 3
  },
];

export const mockAdmissions: AdmissionForm[] = [
  {
    id: '1',
    studentName: 'Alex Wilson',
    admittedInto: 'Grade 11',
    previousClass: 'Grade 10',
    previousMarks: { Mathematics: 85, Physics: 88, Chemistry: 82, English: 90, Biology: 86 },
    contactInfo: {
      email: 'alex.wilson@email.com',
      phone: '+1234567890',
      address: '123 Main Street, City'
    },
    status: 'pending',
    submittedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    studentName: 'Sarah Davis',
    admittedInto: 'Grade 9',
    previousClass: 'Grade 8',
    previousMarks: { Mathematics: 92, Science: 89, English: 85, Social: 88, Hindi: 83 },
    contactInfo: {
      email: 'sarah.davis@email.com',
      phone: '+1234567891',
      address: '456 Oak Avenue, City'
    },
    status: 'approved',
    submittedAt: new Date('2024-01-10')
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Science Fair',
    date: new Date('2024-02-15'),
    description: 'Students showcase their innovative science projects',
    image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'academic'
  },
  {
    id: '2',
    title: 'Cultural Festival',
    date: new Date('2024-03-20'),
    description: 'Celebrating diversity through music, dance, and art',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'cultural'
  },
  {
    id: '3',
    title: 'Inter-School Sports Championship',
    date: new Date('2024-04-10'),
    description: 'Annual sports competition with neighboring schools',
    image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'sports'
  },
];

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Mid-term Examinations',
    content: 'Mid-term examinations will be conducted from February 1-15, 2024. Please check the examination schedule on the notice board.',
    date: new Date('2024-01-20'),
    type: 'exam',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Parent-Teacher Meeting',
    content: 'Parent-Teacher Meeting is scheduled for February 25, 2024, from 9:00 AM to 4:00 PM. All parents are requested to attend.',
    date: new Date('2024-01-18'),
    type: 'ptm',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Winter Holidays',
    content: 'School will remain closed from December 25, 2024, to January 5, 2025, for winter holidays.',
    date: new Date('2024-01-15'),
    type: 'holiday',
    priority: 'low'
  },
];

export const mockFaculty: Faculty[] = [
  {
    id: '1',
    name: 'Dr. Emily Johnson',
    subject: 'Mathematics',
    qualification: 'Ph.D. in Mathematics',
    experience: '15 years',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '2',
    name: 'Prof. Robert Smith',
    subject: 'Physics',
    qualification: 'M.Sc. Physics',
    experience: '12 years',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '3',
    name: 'Dr. Sarah Wilson',
    subject: 'Chemistry',
    qualification: 'Ph.D. in Chemistry',
    experience: '18 years',
    image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: '4',
    name: 'Ms. Lisa Brown',
    subject: 'English',
    qualification: 'M.A. English Literature',
    experience: '10 years',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
];