import React from "react";
import Link from "next/link";

interface HeaderProps {

    style?: React.CSSProperties;
  
  }
export const Header: React.FC<HeaderProps> = ({ style }) => {
    return ( 
        <div className="text-white" style={style}>
            <nav style={{ position: 'fixed', top: 0, width: '100%' }}>
            <ul className="flex items-center justify-center list-none p-0" style={{ backgroundColor: 'black', fontSize: '18px' }}>
            <li className="mr-5"><Link href="/Home">Home</Link></li>
            
            </ul>
            </nav>
        </div>
    );
};