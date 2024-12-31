"use client"
import ThreeScene from './components/ThreeScene';
import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <ThreeScene style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
      <Header style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />
      <Homepage/>
    </div>
  );
}
