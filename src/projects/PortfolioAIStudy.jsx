import React from 'react';
import Hero3D from '../components/Hero3D';
import { CONTENT } from '../content';

export default function PortfolioAIStudy() {
    return (
        <article className="pt-0 pb-0 md:pt-32 md:pb-20 md:px-12 max-w-5xl mx-auto">
            <header className="mb-16 px-6 md:px-0 pt-16 md:pt-0 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">AI Portfolio Design</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Architecting a premium digital presence through human-AI collaboration.
                </p>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[400px] md:h-[500px] rounded-none md:rounded-3xl bg-slate border-y md:border border-white/40 shadow-sm overflow-hidden mb-16 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blurple/10 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center overflow-hidden">
                    <Hero3D
                        modelUrl={`${import.meta.env.BASE_URL}${CONTENT.work.projects.find(p => p.slug === 'ai-portfolio').modelUrl}`}
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-panel p-6 rounded-2xl border border-white/20 backdrop-blur-xl max-w-sm text-center">
                        <p className="text-ink font-mono text-sm uppercase tracking-widest mb-2">Technical Meta Study</p>
                        <h2 className="text-2xl font-bold text-ink tracking-tight">How it was built with Antigravity</h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 px-6 md:px-0 pb-20 md:pb-0">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">About the Project</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            This portfolio is more than a showcase of work—it's a living experiment in human-AI collaborative design. Utilizing Google's Antigravity, Gemini, and Claude, I transformed a vision for a cinematic, high-end digital presence into a fully realized, performant, and accessible React application.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The primary goal was to move beyond the "minimalist portfolio" cliche and create something that felt **cinematic and premium**. This required:
                        </p>
                        <ul className="list-disc list-inside space-y-3 text-ink/80 mb-6">
                            <li>Implementing complex GSAP-powered 3D animations without sacrificing performance.</li>
                            <li>Ensuring rigorous accessibility (WCAG 2.1) compliance for all interactive elements.</li>
                            <li>Creating a modular, content-first architecture that allows for rapid updates via a single configuration file.</li>
                        </ul>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">AI-Driven Development</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            By leveraging Antigravity's agentic capabilities, we achieved development speeds that would traditionally take weeks. The AI wasn't just writing code; it was acting as a design partner, suggesting refinements to button shapes, shadow weights, and animation curves.
                        </p>
                        {/* Progressive Disclosure / Screenshots Section */}
                        <div className="grid grid-cols-1 gap-6 mb-8">
                            <div className="bg-slate rounded-2xl border border-white/40 overflow-hidden">
                                <img src="/brain/f71bfa76-6bb3-43dc-8a36-21a65cf5c4e6/focused_project_card_final_1772927145491.png" alt="Accessibility Focus States" className="w-full h-auto" />
                                <div className="p-4 bg-white/50 backdrop-blur-md border-t border-white/20">
                                    <p className="text-xs font-mono text-ink/60 uppercase">Figure 01: Rigorous focus-state engineering for inclusive navigation.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            We prioritized **Accessibility (a11y)** from day one. Using automated audits and manual verification, we implemented focus restoration, ARIA-compliant overlays, and logical keyboard heading structures.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Visual Identity & Assets</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Every visual asset on this site, from the macro-focused thumbnails to the high-fidelity case study heros, was orchestrated through AI. By refining prompts for industrial-tech and premium healthcare aesthetics, we created a cohesive visual language that honors the technical nature of my UX work.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="rounded-xl overflow-hidden border border-white/20 relative aspect-video">
                                <img src={`${import.meta.env.BASE_URL}img/voice_guidelines/header.png`} alt="Voice Guidelines Hero" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-xl overflow-hidden border border-white/20 relative aspect-video">
                                <img src={`${import.meta.env.BASE_URL}img/mynm_redesign/new_design/mockup_no_bg.png`} alt="MyNM App Hero" className="w-full h-full object-cover scale-150 transform translate-y-4" />
                            </div>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Outcome</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The final result is a portfolio that perfectly balances high-end aesthetics with technical precision. It serves as a testament to the future of design: a frictionless collaboration where AI amplifies the creative intent of the human designer.
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
