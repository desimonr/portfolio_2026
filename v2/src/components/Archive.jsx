import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Activity, Terminal, Layers } from 'lucide-react';

const ArchiveCard = ({ title, desc, icon: Icon, index }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate percentage for glare position
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;

        setGlare({ x: px, y: py, opacity: 1 });

        // 3D Tilt calculation (max 10 degrees)
        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        gsap.to(cardRef.current, {
            rotateY,
            rotateX,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
        });

        // Lift content on Z axis
        gsap.to(contentRef.current, {
            z: 50,
            duration: 0.5,
            ease: 'power2.out',
            transformPerspective: 1000
        });
    };

    const handleMouseLeave = () => {
        setGlare({ ...glare, opacity: 0 });
        gsap.to(cardRef.current, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'all'
        });
        gsap.to(contentRef.current, {
            z: 0,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'all'
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative h-[400px] rounded-3xl p-1 bg-gradient-to-br from-white to-slate overflow-hidden cursor-pointer shadow-fintech border border-white/60 transform-style-3d`}
        >
            {/* Dynamic Glare Effect */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    opacity: glare.opacity,
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
                }}
            />

            {/* Inner Card Content */}
            <div className="relative z-10 w-full h-full bg-slate/50 backdrop-blur-md rounded-[22px] p-8 flex flex-col justify-between border border-white/20">
                <div ref={contentRef} className="flex flex-col justify-between h-full transform-style-3d">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-blurple/10 text-blurple flex items-center justify-center backdrop-blur-sm border border-blurple/20">
                            <Icon size={24} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-ink">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>

                    <div>
                        <div className="font-mono text-xs text-blurple font-medium mb-3 tracking-wider uppercase">Project 0{index}</div>
                        <h3 className="text-2xl font-bold tracking-tight text-ink mb-2">{title}</h3>
                        <p className="text-ink/60 font-medium">{desc}</p>
                    </div>
                </div>

                {/* specific card backgrounds based on index implicitly via CSS absolute elements logic from requirement */}
                {index === 1 && (
                    <div className="absolute top-1/4 -right-1/4 w-64 h-64 bg-blurple/5 rounded-full blur-3xl -z-10 group-hover:bg-blurple/10 transition-colors duration-500" />
                )}
            </div>
        </div>
    );
};

export default function Archive() {
    return (
        <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink mb-4">The Archive.</h2>
                <p className="text-lg text-ink/60 font-medium max-w-xl">
                    Signature projects and core skill pillars engineered for scale and precision.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
                <ArchiveCard
                    index={1}
                    title="Invisible AI"
                    desc="The Showcase Hologram. Next-generation computer vision interfaces for industrial performance."
                    icon={Layers}
                />
                <ArchiveCard
                    index={2}
                    title="Voice Guidelines"
                    desc="The Telemetry Typewriter. Standardizing conversational NLP frameworks across product suites."
                    icon={Terminal}
                />
                <ArchiveCard
                    index={3}
                    title="MyNM App"
                    desc="The Protocol View. Streamlining healthcare access through intuitive patient-centered design."
                    icon={Activity}
                />
            </div>
        </section>
    );
}
