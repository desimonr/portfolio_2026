import React from 'react';
import { CONTENT } from '../content';

export default function PortfolioAIStudy() {
    return (
        <article className="w-full pt-0 pb-0 md:pt-32 md:pb-20 md:px-12 md:max-w-5xl md:mx-auto">
            <header className="mb-16 px-6 md:px-0 pt-16 md:pt-0 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">AI Portfolio Architecture</h1>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-none md:rounded-3xl bg-slate border-y md:border border-white/40 shadow-sm overflow-hidden mb-16 relative">
                <img src={`${import.meta.env.BASE_URL}img/ai_portfolio/thumb.png`} alt="Portfolio Home Page" className="w-full h-full object-cover object-top" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 px-6 md:px-0 pb-20 md:pb-0">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Vision</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            This portfolio is more than a gallery of work; it is a live experiment in <strong className="text-blurple">AI-augmented design excellence</strong>. The goal was to build a premium, immersive digital experience that showcases high-fidelity interactions and 3D environments without compromising on the performance and accessibility standards expected by modern design leaders.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The primary challenge was balancing visual weight with technical agility. I wanted to incorporate complex WebGL elements and cinematic transitions while ensuring the interface felt <strong className="text-blurple">light, responsive, and intuitive</strong>. This required a deep focus on:
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-ink/80 mb-6">
                            <li>Translating static design tokens into dynamic, interactive 3D materials.</li>
                            <li>Ensuring that "wow" moments like 3D model interactions worked seamlessly across desktop hovers and mobile touches.</li>
                            <li>Maintaining a cohesive visual language through glassmorphism, subtle gradients, and custom typography.</li>
                        </ul>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Collaboration over Architecture</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Rather than viewing AI as a code generator, I treated it as a <strong className="text-blurple">design partner and technical strategist</strong>. This collaborative workflow allowed me to offload repetitive tasks—like boilerplate component setup and accessibility auditing—so I could focus on the creative direction and the nuances of the user journey.
                        </p>

                        <div className="grid grid-cols-1 gap-6 mb-8 mt-8">
                            <div className="bg-slate rounded-2xl border border-white/40 overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}img/voice_guidelines_thumb.png`} alt="Voice Guidelines 3D Orb" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-white/50 backdrop-blur-md border-t border-white/20">
                                    <p className="text-xs font-mono text-ink/60 uppercase">Refining the "vocal orb" visual: Using AI to rapidly prototype custom distortion shaders that respond to user presence.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Interactive Polish & Micro-interactions</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The "premium" feel of the site comes from the details. I spent significant time fine-tuning the <strong className="text-blurple">GSAP animation curves</strong> to ensure every transition felt intentional and fluid. Whether it’s the way the project overlays slide into view or the subtle parallax of the 3D heroes, every micro-interaction was iterated upon multiple times to find the perfect balance of speed and elegance.
                        </p>
                        <div className="grid grid-cols-1 gap-6 mb-8 mt-8">
                            <div className="rounded-xl overflow-hidden border border-white/40 relative">
                                <img src={`${import.meta.env.BASE_URL}img/invisible_ai_thumb.png`} alt="Invisible AI Hero" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-white/50 backdrop-blur-md border-t border-white/20">
                                    <p className="text-xs font-mono text-ink/60 uppercase">Mobile Optimization: Re-configuring 3D viewports to maintain interactive depth on smaller touchscreens while preserving framerate.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Outcome</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The result is a scalable, design-led framework that serves as a testament to what's possible when a designer leverages AI to bridge the gap between <strong className="text-blurple">vision and execution</strong>. It’s not just a portfolio; it’s a demonstration of how modern tools can elevate the craft of digital product design.
                        </p>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="md:col-span-1">
                    <div className="glass-card p-8 rounded-3xl sticky top-32">
                        <h3 className="text-lg font-bold text-ink mb-6 pb-4 border-b border-ink/10">Project Details</h3>
                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Role</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Creative Direction</li>
                                <li>Interaction Design</li>
                                <li>Frontend Development</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Design Partners</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Google Antigravity</li>
                                <li>Claude 3.5 Sonnet</li>
                                <li>Gemini 1.5 Pro</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Tech & Tools</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>React & Three.js</li>
                                <li>GSAP Animations</li>
                                <li>Figma</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}
