"use client"
import React from "react";
import Image from "next/image";

interface ProjectLink {
  name: string;
  href: string;
}

interface Project {
  image: string; // path to image
  title: string;
  description: string;
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    image: "/walleto.png", // placeholder
    title: "Walleto",
    description: "An expense tracker application for managing personal finances and budgeting. Built with React, Node.js, MongoDB, and features real-time expense tracking and analytics.",
    links: [
      { name: "Live Demo", href: "https://walleto.vercel.app" },
      { name: "Source Code", href: "https://github.com/sujalcharati/Walleto" },
    ],
  },
  {
    image: "/cipherpay.png", // placeholder
    title: "CipherPay",
    description: "A web-based cryptocurrency wallet for managing digital assets and blockchain transactions. Built with Next.js, TypeScript, Tailwind, Node.js, and Web3 integration.",
    links: [
        { name: "Live Demo", href: "https://cipher-pay.vercel.app/" },
        { name: "Source Code", href: "https://github.com/sujalcharati/cipherPay" },
    ],
  },
];

const ProjectItem: React.FC<Project> = ({ image, title, description, links }) => (
  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 py-8">
    <div className="w-full md:w-1/3 flex-shrink-0">
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          width={500}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-xl text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

