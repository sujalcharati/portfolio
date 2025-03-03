"use client"
import React from 'react';
import { FloatingDockDemo } from "../components/FloatingDockDemo";
import { Header } from "../components/Header"
// import {  Homepage  } from "../components/Homepage"
import ThreeScene from "../components/ThreeScene"
export default function Home(){
    return (
<div>
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <ThreeScene style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
        <Header style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />
    </div>
    {/* <Homepage /> */}
   <FloatingDockDemo/>
</div>
    );

}