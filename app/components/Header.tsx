import React from "react";
interface HeaderProps {

    style?: React.CSSProperties;
  
  }
export const Header: React.FC<HeaderProps> = ({ style }) => {
    return ( 
        <div className="text-white" style={style}>
            <nav>
            <ul className="flex items-center justify-center list-none p-0" style={{ backgroundColor: 'black', fontSize: '18px' }}>
            <li className="mr-5"><a href="#home">Home</a></li>
            <li className="mr-5"><a href="#projects">Projects</a></li>
            <li className="mr-5"><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
        </div>
    );
};