import React from 'react';
import { CONTENT } from '../content';

export default function PortfolioAIStudy() {
    return (
        <article className="pt-0 pb-0 md:pt-32 md:pb-20 md:px-12 max-w-5xl mx-auto">
            <header className="mb-16 px-6 md:px-0 pt-16 md:pt-0 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">AI Portfolio Architecture</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Structuring a high-fidelity WebGL React application through LLM-assisted development pipelines.
                </p>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-none md:rounded-3xl bg-slate border-y md:border border-white/40 shadow-sm overflow-hidden mb-16 relative">
                <img src={`${import.meta.env.BASE_URL}img/ai_portfolio/thumb.png`} alt="Portfolio Home Page" className="w-full h-full object-cover object-top" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 px-6 md:px-0 pb-20 md:pb-0">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">About the Project</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            This portfolio application serves as a practical exploration of AI-assisted engineering applied to high-fidelity interface design. The objective was to architect a highly performant, accessible React application capable of rendering advanced 3D environments while maintaining production-grade code quality and modularity.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The core constraint was balancing complex, GSAP-powered interactions and robust WebGL components with strict performance benchmarks and accessibility standards. This required a scalable architecture where components could be rapidly iterated upon without introducing technical debt:
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-ink/80 mb-6">
                            <li>Implementing Three.js WebGL scenes via `@react-three/fiber` optimized for framerate and load times.</li>
                            <li>Enforcing keyboard-navigable focus states and ARIA-compliant modal structures (WCAG 2.1).</li>
                            <li>Establishing a single-source-of-truth configuration model for rapid content deployment without direct UI manipulation.</li>
                        </ul>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Architectural Strategy</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Development velocity was accelerated through the strategic orchestration of AI agents. Rather than manual drafting, the workflow focused on prompt engineering, architectural planning, and code review. This approach allowed for rapid iteration on granular details like bezier animation curves, tokenized shadow weights, and interactive 3D materials.
                        </p>

                        <div className="grid grid-cols-1 gap-6 mb-8 mt-8">
                            <div className="bg-slate rounded-2xl border border-white/40 overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}img/voice_guidelines_thumb.png`} alt="Voice Guidelines 3D Orb" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-white/50 backdrop-blur-md border-t border-white/20">
                                    <p className="text-xs font-mono text-ink/60 uppercase">Figure 01: Integrating custom distortion shaders and dynamic directional lighting models for the Voice Guidelines hero.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Implementation Details</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            A central requirement was ensuring all interactive elements met strict usability criteria. Focus management algorithms were implemented to explicitly guide keyboard users through the interface, ensuring focus restoration upon closing complex components like the case study overlays. Performance budgets structured how the layout handled component reflows when transitioning between 2D and 3D contexts.
                        </p>
                        <div className="grid grid-cols-1 gap-6 mb-8 mt-8">
                            <div className="rounded-xl overflow-hidden border border-white/40 relative">
                                <img src={`${import.meta.env.BASE_URL}img/invisible_ai_thumb.png`} alt="Invisible AI Hero" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-white/50 backdrop-blur-md border-t border-white/20">
                                    <p className="text-xs font-mono text-ink/60 uppercase">Figure 02: Responsive 3D viewport tracking user cursor position, rendered via WebGL within the Invisible AI hero section.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Outcome</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The resulting application functions as a highly scalable design system framework. It successfully validates the efficacy of AI-augmented development pipelines for delivering complex, polished user experiences and robust frontend architectures within compressed operational timelines.
                        </p>
                    </section>
                </div>

                {/* Sidebar */}
                <aside className="md:col-span-1">
                    <div className="glass-card p-8 rounded-3xl sticky top-32">
                        <h3 className="text-lg font-bold text-ink mb-6 pb-4 border-b border-ink/10">Tech Stack</h3>
                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">AI Partners</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Google Antigravity</li>
                                <li>Claude 3.5 Sonnet</li>
                                <li>Gemini 1.5 Pro</li>
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Development</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>React / Vite</li>
                                <li>GSAP Animations</li>
                                <li>Tailwind / Vanilla CSS</li>
                                <li>Lucide Icons</li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}
