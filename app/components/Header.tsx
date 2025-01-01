import React from "react";
import Link from "next/link";

interface HeaderProps {

    style?: React.CSSProperties;
  
  }
export const Header: React.FC<HeaderProps> = ({ style }) => {
    return ( 
        <div className="text-white" style={style}>
            <nav>
            <ul className="flex items-center justify-center list-none p-0" style={{ backgroundColor: 'black', fontSize: '18px' }}>
            <li className="mr-5"><Link href="/home">Home</Link></li>
            <li className="mr-5"><Link href="/projects">Projects</Link></li>
            <li className="mr-5"><Link href="/resume">Resume</Link></li>
            <li><Link href="#contact">Contact</Link></li>
            </ul>
            </nav>
        </div>
    );
};