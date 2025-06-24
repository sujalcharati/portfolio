"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    image: "/streamvibe.png", // placeholder
    title: "StreamVibe",
    description: "A decentralized video streaming platform using WebRTC and Mediasoup. Built with WebRTC, Mediasoup, FFMPEG, Node.js, and React.",
    links: [
      { name: "Live Demo", href: "#" },
      { name: "Source Code", href: "#" },
    ],
  },
  {
    image: "/shopsavvy.png", // placeholder
    title: "ShopSavvy",
    description: "An e-commerce platform with a focus on personalized recommendations. Built with Next.js, TypeScript, Tailwind, Node.js, and MongoDB.",
    links: [
        { name: "Live Demo", href: "#" },
        { name: "Source Code", href: "#" },
    ],
  },
  {
    image: "/eth-vault.png", // placeholder
    title: "Ethereum Vault",
    description: "A secure smart contract for managing ERC-20 tokens and NFTs. Built with Hardhat, Solidity, Ethers.js, and React.",
    links: [
        { name: "Source Code", href: "#" },
        { name: "Docs", href: "#" },
    ],
  },
  {
    image: "/did-solana.png", // placeholder
    title: "Decentralized Identity on Solana",
    description: "Implemented a self-sovereign identity solution on Solana using Anchor. Built with Solana, Anchor, Rust, and React Native.",
    links: [
        { name: "Source Code", href: "#" },
    ],
  }
];

const ProjectItem: React.FC<Project> = ({ image, title, description, links }) => (
  <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 py-8">
    <div className="w-full md:w-1/3 flex-shrink-0">
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Image</span>
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
    <section id="projects" className="py-16 border-b border-gray-200">
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

