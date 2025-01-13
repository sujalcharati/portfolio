"use client";
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex justify-start items-center min-h-20">
        <h3 className="text-4xl">Contact 🚀</h3>
      </div>
      <div className="flex items-center mt-6 space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-3xl"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-3xl"></i>
        </a>
        <a href="mailto:your.email@example.com">
          <i className="fas fa-envelope text-3xl"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-3xl"></i>
        </a>
      </div>
    </div>
  );
};
