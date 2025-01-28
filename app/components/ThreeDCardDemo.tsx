"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";


interface ProjectCardInterface {
  title:string,
  description: string,
  paintImg:string,
  projectUrl :string
  
}



export const ProjectCard: React.FC<ProjectCardInterface> = ({ title, description, paintImg, projectUrl }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
               {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        {description}
       </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={paintImg}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={projectUrl}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Source
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
<CardContainer className="inter-var mt-8"></CardContainer>


export function ThreeDCardDemo() {
  return(
    <div className="flex flex-row justify-center items-center px-4 md:px-20 mx-4 pt-7 md:mx-28 my-8 space-x-16">
      <ProjectCard  
      title="🎨 Paint"
      description="A simple paint web application built using HTML5 Canvas and JavaScript." 
      paintImg="/paint.png" 
      projectUrl="https://sujalcharati.github.io/Paint/" 
      />
      <ProjectCard 
      title="💼 Walleto" 
      description="A simple wallet application for managing your finances." 
      paintImg="/walleto.png" 
      projectUrl="https://sujalcharati.github/" 
      />
    </div>
  )
}