export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export const projects = [
  {
    title: 'CollabBoard',
    description: 'collaborative drawing board',
    tech: ['javascript','webRTC','React','Mongobd','Express'],
    link: 'https://github.com/sahilrawat08/CollabBoard.git',
    image: '/csm.jpg',
  },
  {
    title: 'resumeAI',
    description: 'AI based resume tester',
    tech: ['typecript','React','Mongobd','Express'],
    link: 'https://github.com/sahilrawat08/resumeAI.git',
    image: '/csm.jpg',
  },
  {
    title: 'MoodTracker',
    description: 'context based journal app',
    tech: ['javascript','React','Mongobd','Express'],
    link: 'https://github.com/sahilrawat08/context-based-journal.git',
    image: '/csm.jpg',
  },
{
    title: 'Thinkboard',
    description: 'a basic note taking app',
    tech: ['javascript','React','Mongobd','Express'],
    link: 'https://github.com/sahilrawat08/thinkboard.git',
    image: '/csm.jpg',
  },
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
