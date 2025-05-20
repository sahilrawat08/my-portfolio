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
    title: 'LeetCode Stats',
    description: 'A web application to track and display LeetCode statistics',
    tech: ['React', 'TypeScript', 'Node.js'],
    link: 'https://github.com/sahilrawat08/leetcode-stats',
    image: '/leetcode.jpg',
  }
]; 