// "use client";
// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// export const Contact: React.FC = () => {
//   return (
//     <div className="bg-black text-white min-h-screen p-6">
//       <div className="flex justify-start items-center min-h-20">
//         <h3 className="text-4xl">Contact 🚀</h3>
//       </div>
//       <div className="flex items-center mt-6 space-x-4">
//         <a href="https://github.com/sujalcharati" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-github text-3xl"></i>
//         </a>
//         <a href="https://www.linkedin.com/in/sujal-charati-2468931ba/" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin text-3xl"></i>
//         </a>
//         <a href="">
//           <i className="fas fa-envelope text-3xl"></i>
//         </a>
//         <a href="https://x.com/suj25887" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter text-3xl"></i>
//         </a>
//       </div>
      
//     </div>
//   );
// };
// import React from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from "@tabler/icons-react";
// import Image from "next/image";

// export function Contact () {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },

//     {
//       title: "Products",
//       icon: (
//         <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "Components",
//       icon: (
//         <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "Aceternity UI",
//       icon: (
//         <Image
//           src="https://assets.aceternity.com/logo-dark.png"
//           width={20}
//           height={20}
//           alt="Aceternity Logo"
//         />
//       ),
//       href: "#",
//     },
//     {
//       title: "Changelog",
//       icon: (
//         <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },

//     {
//       title: "Twitter",
//       icon: (
//         <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//     {
//       title: "GitHub",
//       icon: (
//         <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//       ),
//       href: "#",
//     },
//   ];
//   return (
//     <div className="flex items-center justify-center h-[35rem] w-full">
//       <FloatingDock
//         mobileClassName="translate-y-20" // only for demo, remove for production
//         items={links}
//       />
//     </div>
//   );
// }

import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
   
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    }
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

