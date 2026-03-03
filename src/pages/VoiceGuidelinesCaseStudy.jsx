import React from 'react';

export default function VoiceGuidelinesCaseStudy() {
    return (
        <article className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">

            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">Conversational AI Voice Guidelines</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Standardizing conversational NLP frameworks across product suites.
                </p>
            </header>

            {/* Hero Image / Header */}
            <div className="w-full h-[400px] md:h-[500px] rounded-3xl bg-slate border border-white/40 shadow-xl overflow-hidden mb-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blurple/10 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Temporarily pointing to parent folder image path, assuming public access or we move assets later */}
                    <img
                        src="/img/voice_guidelines/header.webp"
                        alt="Voice Guidelines Header"
                        className="w-full h-full object-cover mix-blend-multiply opacity-50 block md:hidden"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <span className="text-ink/40 font-mono text-sm z-20">[ header image placeholder ]</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Objective</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            At the end of 2020, Northwestern Medicine (NM) launched a proprietary NLP-powered chatbot on NM.org to address overwhelming patient demand for self-service options. Built on Microsoft Azure Language Services, the chatbot used natural language processing to understand patient intent and route users to the right information — from finding a doctor to paying a bill.
                        </p>
                        <p className="text-ink/80 leading-relaxed">
                            My role was to ensure that the chatbot's human-written responses and the AI system's configured personality worked together as a seamless, consistent experience. I worked with stakeholders across the health system to develop formal voice guidelines that would govern both the copy written by content teams and the tone parameters configured in the NLP model itself.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Designing voice for a conversational AI system is more complex than defining a brand voice for static content. The chatbot's responses emerge from two interacting layers: human-written copy authored by content writers, and personality parameters configured directly in the NLP model. A misalignment between these two layers would produce an inconsistent, untrustworthy user experience — especially problematic in healthcare, where patients are often stressed or confused.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Stakeholder Survey</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The chatbot's implementation touched teams across the health system — brand, clinical, and operational. I designed a structured survey to draw on their collective expertise in patient interactions and customer service, using the NNG dimensions as the survey framework so responses would be directly applicable to both the guidelines and the model configuration.
                        </p>
                        <div className="w-full h-64 bg-slate rounded-xl border border-white/40 flex items-center justify-center font-mono text-sm text-ink/40 mb-6">[ survey_results.png ]</div>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Across all four dimensions, a majority of stakeholders agreed to shift one point toward the warmer, friendlier end of the scale.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Outcome</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The chatbot launched initially under pressure from a surge in COVID-19 inquiries, with responses copied directly from existing NM.org content. Over time, content writers systematically rewrote responses to align with the voice guidelines — and the impact was measurable. The system achieved a <strong className="text-blurple">95% intent recognition rate</strong>, meaning the NLP model successfully understood and routed 95 out of every 100 patient questions. By April 2021, the chatbot was handling over <strong className="text-blurple">3,800 conversations per month</strong>.
                        </p>
                    </section>

                </div>

                {/* Info Sidebar */}
                <aside className="md:col-span-1">
                    <div className="glass-panel p-8 rounded-3xl">
                        <h3 className="text-lg font-bold text-ink mb-6 pb-4 border-b border-ink/10">Project Details</h3>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Responsibilities</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Conversational AI Design</li>
                                <li>Research & Strategy</li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Players</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Brand & Comms Stakeholders</li>
                                <li>Clinical/Operational Teams</li>
                                <li>Chatbot Developers</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-mono text-blurple uppercase tracking-wider mb-3">Tools</h4>
                            <ul className="space-y-2 text-ink/80 font-medium">
                                <li>Azure Language Services</li>
                                <li>Hotjar</li>
                                <li>Figma</li>
                            </ul>
                        </div>

                    </div>
                </aside>
            </div>
        </article>
    );
}
