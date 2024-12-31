"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps extends React.HTMLAttributes<HTMLDivElement> {
    style?: React.CSSProperties;
}

const ThreeScene: React.FC<ThreeSceneProps> = (props) => {
    const { style, ...rest } = props;
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const particleCount = 1000;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10; // X position
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y position
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z position
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.05 });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);

        scene.add(particles);

        // Set camera position
        camera.position.z = 5;

        // Animation loop
        const animate = function () {
            requestAnimationFrame(animate);
            particles.rotation.x += 0.01;
            particles.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={style} {...rest} />;
};

export default ThreeScene;
