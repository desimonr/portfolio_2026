import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Environment, Float, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Orb({ isHovered }) {
    const materialRef = useRef();
    const lightGroup = useRef();
    const meshRef = useRef();

    // Animate the distortion material and lights
    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Slowly rotate the directional lights like a steering wheel to shift the hues
        if (lightGroup.current) {
            lightGroup.current.rotation.z = time * 0.15;
        }

        // Pulse the orb and speed up when hovered
        if (materialRef.current) {
            const targetDistort = isHovered ? 0.8 : 0.25; // Increased from 0.6/0.12
            const targetSpeed = isHovered ? 5 : 1.2; // Increased from 4.0/0.6

            materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.05);
            materialRef.current.speed = THREE.MathUtils.lerp(materialRef.current.speed, targetSpeed, 0.05);
        }

        // Push the orb away from the mouse cursor when it gets close
        if (meshRef.current) {
            // pointer is in normalized device coordinates (-1 to +1)
            const distance = Math.sqrt(state.pointer.x * state.pointer.x + state.pointer.y * state.pointer.y);

            // Influence creates a "repulsion field". As distance drops below 1.2, influence grows.
            const influence = Math.max(0, 1.2 - distance);

            // Target position is opposite to the pointer direction, scaled by influence
            const targetX = -state.pointer.x * influence * 0.5; // Controls maximum push distance
            const targetY = -state.pointer.y * influence * 0.5;

            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
        }
    });

    return (
        <group>
            {/* Static directional lights to bathe the front in soft full-surface gradients */}
            <group ref={lightGroup}>
                <directionalLight position={[5, 5, 5]} color="#ff00cc" intensity={6} />
                <directionalLight position={[-5, -5, 5]} color="#00d2ff" intensity={6} />
                <directionalLight position={[5, -5, 5]} color="#7a00ff" intensity={6} />
                <directionalLight position={[-5, 5, 5]} color="#0033ff" intensity={6} />
                <directionalLight position={[0, 0, 5]} color="#ff9900" intensity={4} />
                <directionalLight position={[0, 5, 0]} color="#99ff00" intensity={4} />
            </group>

            {/* Base ambient light reduced to prevent washout */}
            <ambientLight intensity={0.2} />

            <Sphere ref={meshRef} args={[1, 128, 128]} scale={1.2} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#ffffff" // Pure white base to catch the colored lights accurately
                    roughness={1} // Fully diffuse/matte - removes all sharp specular highlights
                    metalness={0} // No mirror reflections
                    distort={0.25}
                    speed={1.2}
                />
            </Sphere>
        </group>
    );
}

export default function VoiceOrb3D() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full h-full cursor-pointer relative"
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <Canvas
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />

                <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.1} floatingRange={[-0.1, 0.1]}>
                    <Orb isHovered={isHovered} />
                </Float>

                {/* Ground shadow purely for grounding the orb in the container */}
                <ContactShadows
                    position={[0, -1.8, 0]}
                    opacity={0.4}
                    scale={5}
                    blur={2.5}
                    far={2}
                    color="#000000"
                />

                {/* Environment removed to eliminate studio reflections */}
            </Canvas>
        </div>
    );
}
