"use client"
import React from 'react'

export const Projects: React.FC = () => {


  return (

        <div className=" bg-black text-white min-h-screen p-6">
          <h2 className="flex justify-center items-center min-h-20">
            <span className='text-4xl' >Projects 🚀</span>
            
          </h2>
          <div className="border border-gray-700 rounded-lg p-4">
            <a
              href="#"
              className="text-blue-400 text-lg font-semibold flex items-center space-x-2 mb-2"
            >
           
              <span> 🎨Paint</span>
            </a>
            <p className="text-gray-300 text-sm mb-4">
            A simple paint application built using HTML5 Canvas and JavaScript.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                HTML
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                CSS
              </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
             
            </div>
          </div>
        </div>
      );
    };
    
    export default Projects;
    

