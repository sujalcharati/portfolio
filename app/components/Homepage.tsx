import React from "react";
import ThreeScene from "./ThreeScene";
import Link from "next/link";
export const Homepage =()=>{
    return (
        <div className="flex justify-center items-center text-white bg-black bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg shadow-md w-1/2 h-52 fixed inset-0 m-auto p-4">
            <p className="text-lg font-semibold">
                Welcome to my portfolio!  I'm sujal charati,full-stack developer from Odisha, specializing in building and designing exceptional digital experiences. Here you will find information about my projects, skills, and experience. Feel free to explore and learn more about my work.
            </p>
           
        </div>
        // <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        // <ThreeScene style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
        // {/* <Header style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }} /> */}
    
    //   </div>
    );
}