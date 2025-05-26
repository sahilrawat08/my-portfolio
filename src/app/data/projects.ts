export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export const projects = [
  {
    title: 'Library Management System',
    description: 'A library management system using React, Python and Node.js and some hardware components like Arduino and RFID tech',
    tech: ['React', 'Node.js', 'Python'],
    link: 'https://github.com/sahilrawat08/Library_management_system.git',
    image: '/lbms.jpg',
  },
  {
    title: 'code snippet manager',
    description: 'A console based code snippet manager in java',
    tech: ['java'],
    link: 'https://github.com/sahilrawat08/code-snippet-organizer.git',
    image: '/csm.jpg',
  }
]; 
