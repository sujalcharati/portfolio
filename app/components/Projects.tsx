"use client"
import React from 'react'

export const Projects: React.FC = () => {
  const projectList = [
    { title: 'Project One', description: 'Description for project one' },
    { title: 'Project Two', description: 'Description for project two' },
    { title: 'Project Three', description: 'Description for project three' },
    // Add more projects as needed
  ];

  return (
    <div className='text-white'>
      <h2 className='text-2xl mb-4'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projectList.map((project, index) => (
          <div key={index} className='bg-gray-800 p-4 rounded-lg shadow-md'>
            <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
