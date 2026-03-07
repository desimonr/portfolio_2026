import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: "Senior UX Designer",
        company: "Northwestern Medicine",
        period: "2020 - Present",
        desc: "Led conversational AI design for NM.org's virtual assistant. Established design system and accessibility standards for a newly formed UX team."
    },
    {
        role: "UX Consultant",
        company: "Invisible AI",
        period: "2021 - 2022",
        desc: "Redesigned the core video review interface, solving the UX challenge of presenting AI-grouped video content to industrial Site Managers."
    },
    {
        role: "Web Builder",
        company: "McMaster-Carr",
        period: "2018 - 2019",
        desc: "Optimized web design for customer engagement using internal metrics and qualitative research; planning layouts for product lines."
    }
];

export default function Experience() {
    const sectionRef = useRef(null);
    const pathRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // SVG Path drawing animation
            const pathLength = pathRef.current.getTotalLength();

            gsap.set(pathRef.current, {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            });

            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            });

            // Item illumination staggered on scroll
            itemsRef.current.forEach((item, index) => {
                gsap.fromTo(item,
                    { opacity: 0.3, x: 20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: item,
                            start: "top 60%",
                            end: "top 40%",
                            scrub: true,
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 bg-slate relative">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-ink mb-4">The Execution Log.</h2>
                    <p className="text-lg text-ink/60 font-medium">Tracing the deployment over time.</p>
                </div>

                <div className="relative">
                    {/* SVG pulsing pathway */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-0">
                        <svg
                            className="w-full h-full drop-shadow-[0_0_8px_rgba(99,91,255,0.4)]"
                            viewBox="0 0 100 1000"
                            preserveAspectRatio="none"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Background faint path */}
                            <path d="M50 0 L50 1000" stroke="#e2e8f0" strokeWidth="4" />
                            {/* Scroll drawn path */}
                            <path
                                ref={pathRef}
                                d="M50 0 L50 1000"
                                stroke="#635BFF"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div className="space-y-24 pt-8 pb-8 relative z-10">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                ref={el => itemsRef.current[index] = el}
                                className="pl-16 md:pl-24 relative"
                            >
                                {/* Node Dot */}
                                <div className="absolute left-[36px] md:left-[52px] top-2 w-4 h-4 rounded-full bg-white border-[3px] border-blurple shadow-[0_0_12px_rgba(99,91,255,0.6)] z-20" />

                                <div className="font-mono text-sm text-blurple font-medium mb-2 tracking-widest">{exp.period}</div>
                                <h3 className="text-2xl font-bold text-ink tracking-tight mb-1">{exp.role}</h3>
                                <h4 className="text-ink/60 font-medium mb-4">{exp.company}</h4>
                                <p className="text-ink/80 leading-relaxed max-w-2xl text-lg">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
