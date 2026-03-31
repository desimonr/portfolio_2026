import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Activity, Terminal, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useOverlayContext } from '../contexts/OverlayContext';

const ArchiveCard = ({ title, desc, thumb, icon: Icon, index, to }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
    const navigate = useNavigate();
    const { cardRectRef, triggerRef } = useOverlayContext();

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

        // Subtle image scale
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1.1,
                duration: 0.5,
                ease: 'power2.out'
            });
        }
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
        if (imageRef.current) {
            gsap.to(imageRef.current, {
                scale: 1,
                duration: 0.8,
                ease: 'power2.out'
            });
        }
    };

    return (
        <Link
            to={to}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
                if (cardRef.current && cardRectRef) {
                    cardRectRef.current = cardRef.current.getBoundingClientRect();
                    triggerRef.current = e.currentTarget;
                }
            }}
            className={`block group relative h-[480px] rounded-3xl p-1 bg-gradient-to-br from-white to-slate overflow-hidden cursor-pointer shadow-fintech border border-white/60 transform-style-3d focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple`}
        >
            {/* Dynamic Glare Effect */}
            <div
                className="absolute inset-0 z-20 transition-opacity duration-300 pointer-events-none"
                style={{
                    opacity: glare.opacity,
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
                }}
            />

            {/* Inner Card Content */}
            <div className="relative z-10 w-full h-full bg-slate-50 rounded-[22px] flex flex-col overflow-hidden border border-white/20">
                {/* Image Section */}
                <div className="relative h-1/2 overflow-hidden bg-slate border-b border-white/20">
                    {thumb && (
                        <img
                            ref={imageRef}
                            src={`${import.meta.env.BASE_URL}${thumb}`}
                            alt={title}
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate/40 to-transparent" />

                    {/* Icon Floating Badge */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/90 text-blurple flex items-center justify-center backdrop-blur-md border border-white shadow-lg z-10">
                        <Icon size={20} />
                    </div>
                </div>

                {/* Text Content */}
                <div ref={contentRef} className="p-8 flex flex-col justify-between flex-grow transform-style-3d">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="font-mono text-[10px] text-blurple font-bold tracking-[0.2em] uppercase">Project 0{index}</div>
                            <div className="w-8 h-8 rounded-full bg-blurple/5 text-blurple flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                <ArrowUpRight size={16} />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-ink mb-2 leading-tight">{title}</h3>
                        <p className="text-sm text-ink/60 font-medium leading-relaxed">{desc}</p>
                    </div>

                    {/* Gradient highlight on hover */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blurple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            </div>
        </Link>
    );
};

export default function Archive({ content }) {
    const [activeFilter, setActiveFilter] = useState("All");

    // Curated list of filters relevant for a senior UX role based on project tags
    const filters = ["All", "AI", "Design System", "Information Architecture", "UX Strategy"];
    // Map of icons to project slugs for easy editing
    const iconMap = {
        'invisible-ai': Layers,
        'voice-guidelines': Terminal,
        'mynm-app': Activity
    };

    // Filter projects based on the active filter tag
    const filteredProjects = content.projects.filter(project =>
        activeFilter === "All" || (project.tags && project.tags.includes(activeFilter))
    );

    return (
        <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink mb-4">{content.title}</h2>
                <p className="text-lg text-ink/60 font-medium max-w-xl">
                    {content.description}
                </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
                {filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple ${activeFilter === filter
                                ? 'bg-blurple text-white border-blurple shadow-md'
                                : 'bg-slate-50 text-ink/60 border-ink/10 hover:border-blurple/50 hover:text-blurple hover:bg-white'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
                {filteredProjects.map((project, idx) => (
                    <ArchiveCard
                        key={project.slug}
                        index={idx + 1}
                        title={project.title}
                        desc={project.desc}
                        thumb={project.thumb}
                        icon={iconMap[project.slug] || Layers}
                        to={`/project/${project.slug}`}
                    />
                ))}
            </div>
        </section>
    );
}
