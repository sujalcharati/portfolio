import React from "react";
interface HeaderProps {

    style?: React.CSSProperties;
  
  }
export const Header: React.FC<HeaderProps> = ({ style }) => {
    return ( 
        <div className="text-white bg-transparent" style={style}>
            <nav>
            <ul className="flex list-none p-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <li className="mr-5"><a href="#home">Home</a></li>
            <li className="mr-5"><a href="#projects">Projects</a></li>
            <li className="mr-5"><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
        </div>
    );
};