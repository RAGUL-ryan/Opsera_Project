export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'principal' | 'teacher' | 'student';
  class?: string;
  subjects?: string[];
}

export interface Student {
  id: string;
  name: string;
  class: string;
  rollNumber: string;
  marks: { [subject: string]: number };
  totalMarks: number;
  percentage: number;
  rank: number;
}

export interface AdmissionForm {
  id: string;
  studentName: string;
  admittedInto: string;
  previousClass: string;
  previousMarks: { [subject: string]: number };
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  description: string;
  image?: string;
  type: 'academic' | 'cultural' | 'sports' | 'other';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: Date;
  type: 'exam' | 'holiday' | 'ptm' | 'general';
  priority: 'high' | 'medium' | 'low';
}

export interface Faculty {
  id: string;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  image?: string;
}