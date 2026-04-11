import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CornerRightDown, Code2 } from 'lucide-react';

export default function Hero({ content }) {
    const containerRef = useRef(null);
    const [text, setText] = useState('');
    const fullText = content.telemetryText;

    useEffect(() => {
        // Typing effect logic
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        // GSAP Animation logic
        let ctx = gsap.context(() => {
            gsap.from('.hero-text-line', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.from('.hero-button', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 1.2
            });

            gsap.fromTo('.bg-shape',
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
            );
        }, containerRef);

        return () => {
            clearInterval(typingInterval);
            ctx.revert();
        };
    }, [fullText]);

    return (
        <section ref={containerRef} className="relative min-h-[90dvh] pt-32 pb-20 overflow-hidden flex flex-col justify-center">
            {/* Background Angled Shape (Fintech Fluid Preset) */}
            <div className="absolute inset-0 z-0 bg-slate overflow-hidden">
                <div className="bg-shape absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-gradient-to-bl from-[#E2E8F0] to-[#F6F9FC] transform rotate-12 -skew-x-12 origin-top-right opacity-0" />
                <div className="bg-shape absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/50 backdrop-blur-3xl transform -rotate-6 rounded-full blur-3xl opacity-0" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <div className="overflow-hidden mb-2">
                        <p className="hero-text-line text-lg md:text-xl font-medium text-ink/70">
                            {content.greeting}
                        </p>
                    </div>

                    <div className="overflow-hidden mb-6 pb-2">
                        <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-balance">
                            {content.title}
                        </h1>
                    </div>
                    <div className="overflow-hidden mb-8">
                        <h2 className="hero-text-line text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-blurple to-[#4A43D4] pr-1 pb-2">
                            {content.subtitle}
                        </h2>
                    </div>

                    <div className="overflow-hidden mb-12 flex items-center gap-3">
                        <div className="hero-text-line font-mono text-sm text-ink/60 bg-white/60 px-4 py-2 rounded-md shadow-sm border border-white/40 inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            {text}
                            <span className="w-2 h-4 bg-blurple animate-[ping_1s_infinite] ml-1" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <a href="#work" className="hero-button magnetic flex items-center justify-center gap-2 bg-ink text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <span>{content.cta}</span>
                            <CornerRightDown size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
