"use client";

import { useRef, useLayoutEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Import GSAP and ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * This component handles the 3D model and its GSAP animations
 */
function AnimatedModel(props) { 
    const modelRef = useRef();
    const { scene } = useGLTF('/human_cell.glb'); 
    const { camera } = useThree(); 
    const [orbitEnabled, setOrbitEnabled] = useState(false);

    useLayoutEffect(() => {
        if (!modelRef.current) return;

        // --- Set Initial States ---
        camera.position.set(0, 0, 15);
        modelRef.current.rotation.set(Math.PI / -1, 1, -3); 
        modelRef.current.position.set(0, 0, 0);

        // --- Create GSAP Timeline for scroll animation ---
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#next-section",
                start: "top bottom",
                end: "top top",
                scrub: 1,
                // markers: true, // Uncomment for debugging
            }
        });

        // Animate camera zoom
        timeline.to(camera.position, {
            z: 8,
            duration: 1,
        }, 0);

        // Animate model rotation to standing position
        timeline.to(modelRef.current.rotation, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
        }, 0);

        // --- Create ScrollTrigger to enable orbit controls ---
        ScrollTrigger.create({
            trigger: "#orbit-section",
            start: "top center",
            onEnter: () => {
                setOrbitEnabled(true);
                console.log("Orbit controls enabled");
            },
            onLeaveBack: () => {
                setOrbitEnabled(false);
                console.log("Orbit controls disabled");
            },
            // markers: true, // Uncomment for debugging
        });

        // Cleanup
        return () => {
            timeline.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };

    }, [scene, camera]);
    
    return (
        <>
            <group ref={modelRef} {...props}>
                <primitive object={scene} />
            </group>
            
            {/* OrbitControls - only enabled after scroll animation completes */}
            {/* Re-enable pointer events when orbit controls are active */}
            {orbitEnabled && (
                <>
                    <OrbitControls 
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={3}
                        maxDistance={20}
                    />
                    {/* This invisible helper re-enables pointer events for the canvas */}
                    <mesh visible={false}>
                        <boxGeometry args={[100, 100, 0.1]} />
                    </mesh>
                </>
            )}
        </>
    );
}

/**
 * This is the main scene export.
 */
export default function Scene() {
    useGLTF.preload('/human_cell.glb');

    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <AnimatedModel scale={3} />
        </>
    )
}