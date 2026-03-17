import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float, Stage, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, baseRotation, scale = 1, position = [0, 0, 0], mousePivotIntensity }) {
    const { scene } = useGLTF(url);
    const group = useRef();

    // Custom mouse-follow rotation logic
    useFrame((state) => {
        if (!group.current) return;

        // Target rotation based on mouse position (-1 to 1)
        const targetRotateY = state.mouse.x * mousePivotIntensity[0]; // Horizontal pivot limit
        const targetRotateX = -state.mouse.y * mousePivotIntensity[1]; // Vertical pivot limit

        // Smoothly interpolate (lerp) toward the target
        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            targetRotateY,
            0.08
        );
        group.current.rotation.x = THREE.MathUtils.lerp(
            group.current.rotation.x,
            targetRotateX,
            0.08
        );
    });

    return (
        <group ref={group} dispose={null}>
            <primitive object={scene} scale={[scale, scale, scale]} position={position} rotation={baseRotation} />
        </group>
    );
}

export default function Hero3D({
    modelUrl,
    baseRotation = [0, Math.PI / 2, 0],
    scale = 1,
    position = [0, 0, 0],
    mousePivotIntensity = [0.15, 0.09] // Default: [horizontal, vertical]
}) {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas
                shadows
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Performance optimization for high-DPI screens
            >
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={25} />

                    <Stage
                        intensity={0.5}
                        environment="city"
                        adjustCamera={false}
                        shadows="contact"
                        opacity={0.4}
                        contactShadow={{ blur: 2, far: 1 }}
                    >
                        <Float
                            speed={1} // Slower animation speed
                            rotationIntensity={0.1} // Very subtle ambient rotation
                            floatIntensity={0.05} // Very subtle floating
                            floatingRange={[0.0, 0.05]} // Tiny restricted bounce to keep it steady in frame and above floor
                        >
                            <Model url={modelUrl} baseRotation={baseRotation} scale={scale} position={position} mousePivotIntensity={mousePivotIntensity} />
                        </Float>
                    </Stage>

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
