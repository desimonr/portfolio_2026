import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvisibleAICaseStudy() {
    return (
        <article className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-blurple transition-colors font-medium mb-12 group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Archive
            </Link>

            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">Invisible AI: Video Review Interface</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Next-generation computer vision interfaces for industrial performance.
                </p>
            </header>

            {/* Hero Image / Header */}
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl bg-slate border border-white/40 shadow-xl overflow-hidden mb-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blurple/10 to-transparent z-10" />
                {/* We will load the actual image when available, using placeholder for now */}
                <div className="absolute inset-0 flex items-center justify-center text-ink/40 font-mono text-sm">
                    [ header.png — loads on live site ]
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">About Invisible AI</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Invisible AI builds computer vision software for manufacturing, using AI to automatically track worker safety and operational progress across factory camera networks. The system's cameras observe factory floors continuously, using computer vision to identify workers, group all footage of the same subject across multiple cameras, and surface safety and productivity insights to Site Managers and Engineers through a web application.
                        </p>
                        <p className="text-ink/80 leading-relaxed">
                            As a UX Consultant, I was brought in to redesign the video review interface — the core part of the app where managers and engineers search for, watch, and act on AI-organized footage.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The central UX challenge of this project was one that's native to AI-powered products: the system's computer vision automatically groups all footage of a given subject across every camera in the facility. This is powerful — it means a Site Manager can search for a specific worker or vehicle and instantly surface every angle of their activity without manually scrubbing through hours of footage from individual cameras.
                        </p>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            But this comprehensiveness creates a new problem. When the AI returns everything it knows about a subject, the interface has to present that volume of content in a way that's scannable, navigable, and trustworthy. A search result that surfaces dozens of clips from across a 500-camera network — with no filtering, grouping, or hierarchy — creates cognitive overload, not clarity.
                        </p>
                        <p className="text-ink/80 leading-relaxed font-bold border-l-4 border-blurple pl-4 py-1">
                            The design question was: how do you build an interface that makes AI-organized video content feel manageable and actionable, rather than overwhelming?
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Key Design Decisions</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The original interface presented all search results as an undifferentiated list with no filtering or grouping by camera location. Every clip the AI had identified was surfaced at equal weight, forcing users to impose their own mental model on the results.
                        </p>
                        <div className="w-full h-64 bg-slate rounded-xl border border-white/40 flex items-center justify-center font-mono text-sm text-ink/40 mb-6">[ original_ui.png ]</div>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The redesign introduced line-level filtering as the primary organizational layer, so users could scope results to a specific production area immediately after searching. This respected the AI's comprehensive grouping while giving users control over what they saw — reducing the interface from a complete data dump to a focused, actionable view.
                        </p>
                        <div className="w-full h-96 bg-slate rounded-xl border border-white/40 flex items-center justify-center font-mono text-sm text-ink/40 mb-6">[ new_ui.png ]</div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Outcome</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The redesigned interface gave Invisible AI a video review experience built around the specific challenges of presenting AI-organized content at industrial scale. By introducing line-level filtering, clearer spatial navigation, and a design system grounded in the product's actual context, the redesign addressed the core tension of the product: an AI that sees everything, surfaced through an interface that helps users focus on what matters.
                        </p>
                    </section>

                </div>

                {/* Info Sidebar */}
                <aside className="md:col-span-1">
                    <div className="sticky top-32 glass-panel p-8 rounded-3xl">
                        <h3 className="text-lg font-bold text-ink mb-6 pb-4 border-b border-ink/10">Project Details</h3>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Responsibilities</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>AI Interface Design</li>
                                <li>UX Research</li>
                                <li>Wireframing</li>
                                <li>Design System</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Players</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>UX Consultant</li>
                                <li>Site Managers</li>
                                <li>Engineers</li>
                                <li>Product Team</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Tools</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Figma</li>
                                <li>FigJam</li>
                                <li>Material 3</li>
                            </ul>
                        </div>

                    </div>
                </aside>
            </div>
        </article>
    );
}
