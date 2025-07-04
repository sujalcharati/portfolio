import React from "react";

interface Update {
  date: string;
  text: string;
}

const updates: Update[] = [
  {
    date: "June 2025",
    text: ' Started as Research Intern at IIIT Kurnool in the field of Cryptography.',
  },
  {
    date: "March 2025",
    text: "Onboarded as a Junior Frontend Engineer Intern at Coduter.",
  },
  {
    date: "Jul 2023",
    text: '“Distributional Distance Classifiers for Goal-Conditioned Reinforcement Learning” accepted to the New Frontiers in Learning, Control, and Dynamical Systems Workshop, ICML 2023.',
  },
];

const Updates: React.FC = () => {
  return (
    <section id="news" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Updates</h2>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="flex items-start">
            <p className="text-gray-500 w-28 flex-shrink-0">
              <span className="font-semibold text-gray-600">[{update.date}]</span>
            </p>
            <p className="text-gray-700">{update.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates; 