import React from 'react';
import { CONTENT } from '../content';

export default function NMDesignSystem() {
    return (
        <article className="pt-0 pb-0 md:pt-32 md:pb-20 md:px-12 max-w-5xl mx-auto">

            <header className="mb-16 px-6 md:px-0 pt-16 md:pt-0 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">NM.org Design System</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Building a shared design language to standardize foundational elements and components across NM.org.
                </p>
            </header>

            {/* Hero Image / Header */}
            <div className="w-full h-[400px] md:h-[500px] rounded-none md:rounded-3xl bg-slate border-y md:border border-white/40 shadow-sm overflow-hidden mb-16 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blurple/10 via-transparent to-blurple/5 pointer-events-none" />
                {/* Placeholder hero – replace with a screenshot or 3D asset when ready */}
                <div className="relative z-10 text-center px-8">
                    <p className="text-xs font-mono text-blurple uppercase tracking-widest mb-4">In Progress</p>
                    <p className="text-2xl font-bold text-ink/40 tracking-tight">Hero image coming soon</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 px-6 md:px-0 pb-20 md:pb-0">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Objective</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            NM.org is one of the largest health system websites in the country, serving millions of patients and caregivers. Over time, the site had accumulated inconsistent UI patterns, duplicated components, and fragmented styling — a natural consequence of growth across many teams and timelines. The goal of this project was to establish a unified design system that would give both designers and developers a shared, authoritative source of truth.
                        </p>
                        <p className="text-ink/80 leading-relaxed">
                            I worked alongside my manager, a senior designer, and two senior developers to define and build out <strong className="text-blurple">foundational elements and reusable components</strong> that could scale across the full NM.org ecosystem.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Design systems live or die by adoption. The challenge wasn't just defining the right tokens and components — it was creating something that developers could trust and designers would actually use. That required the system to bridge both worlds: <strong className="text-blurple">designer-friendly in Figma, developer-ready in code.</strong>
                        </p>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            A secondary challenge was ensuring that updates could propagate consistently. Without a reliable sync mechanism between design and development environments, tokens defined in Figma would drift from their code counterparts over time — undermining the system's value entirely.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Approach</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The project was deliberately collaborative from the start. Rather than handing off specs, designers and developers worked in parallel — aligning on naming conventions, token structure, and component APIs before a single component was finalized. This cross-functional ownership meant <strong className="text-blurple">fewer surprises at handoff and a system both teams felt invested in.</strong>
                        </p>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            On the design side, we leveraged <strong className="text-blurple">Figma Variables</strong> to define design tokens (colors, spacing, typography, and radii) that map directly to their code equivalents. On the development side, we implemented <strong className="text-blurple">Figma Code Connect</strong> to link Figma components to their live code implementations — so developers inspecting a component in Figma see actual, production-ready code snippets instead of guessing at the right import.
                        </p>
                        {/* Placeholder for a process image */}
                        <div className="w-full bg-slate rounded-2xl border border-white/40 overflow-hidden mb-6 flex items-center justify-center h-48">
                            <p className="text-xs font-mono text-ink/30 uppercase tracking-widest">Process image — coming soon</p>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">What We Built</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The initial phase focused on solidifying the foundation: color palettes, spacing scales, typography ramps, elevation tokens, and a core set of UI components. Each component was built to spec in Figma with corresponding Code Connect annotations, ensuring the design and development layers stayed in sync as the system evolved.
                        </p>
                        {/* Placeholder for a component library image */}
                        <div className="w-full bg-slate rounded-2xl border border-white/40 overflow-hidden mb-6 flex items-center justify-center h-48">
                            <p className="text-xs font-mono text-ink/30 uppercase tracking-widest">Component library screenshot — coming soon</p>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">What's Next</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            This is an ongoing project with a clear roadmap for deeper integration. The next milestone is leveraging the <strong className="text-blurple">Figma API to automatically push variable changes to the development environment,</strong> eliminating manual token sync entirely. We are also conducting early experiments with <strong className="text-blurple">MCP server integration</strong> to unlock AI-assisted design and development workflows — enabling teams to query the design system directly through natural language and receive context-aware component recommendations.
                        </p>
                    </section>

                </div>

                {/* Info Sidebar */}
                <aside className="md:col-span-1">
                    <div className="glass-card p-8 rounded-3xl sticky top-32">
                        <h3 className="text-lg font-bold text-ink mb-6 pb-4 border-b border-ink/10">Project Details</h3>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Responsibilities</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Design Tokens & Variables</li>
                                <li>Component Design</li>
                                <li>Figma Code Connect</li>
                                <li>Documentation</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Team</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Design Manager</li>
                                <li>Senior Designer</li>
                                <li>Senior Developers (×2)</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Tools</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Figma Variables</li>
                                <li>Figma Code Connect</li>
                                <li>Figma API</li>
                                <li>MCP Server</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Status</h4>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                In Progress
                            </span>
                        </div>

                    </div>
                </aside>
            </div>
        </article>
    );
}
