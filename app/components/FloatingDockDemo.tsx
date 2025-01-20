

import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Home",
    },

    {
      title: "Projects",
      icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/Projects",
    },
    {
      title: "Linkedin",
      icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sujal-charati-2468931ba/",
    },
    {
      title: "Twitter",
      icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/suj25887",
    },
    {
      title: "GitHub",
      icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/sujalcharati",
    }
    ];
  return (
    <div className="flex items-center justify-center pt-0 h-[35rem] w-full fixed top-80">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
    );
}

