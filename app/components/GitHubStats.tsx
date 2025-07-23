"use client"
import React from "react";

const GitHubStats: React.FC = () => {
  const username = "sujalcharati"; // Your GitHub username

  return (
    <section id="github-stats" className="py-12 md:py-20 border-b border-gray-200">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            A visual representation of my coding journey and contribution patterns over the past year
          </p>
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Contribution Calendar
              </h3>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 md:px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 w-full sm:w-auto"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View Profile
              </a>
            </div>
            
            <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-6 shadow-inner border border-gray-50">
              <div className="overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/${username}`}
                  alt="GitHub Contribution Calendar"
                  className="w-full h-auto rounded-md md:rounded-lg transform hover:scale-105 transition-transform duration-300 min-w-[600px] md:min-w-0"
                  loading="lazy"
                  style={{ 
                    minHeight: '120px',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                  }}
                />
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
