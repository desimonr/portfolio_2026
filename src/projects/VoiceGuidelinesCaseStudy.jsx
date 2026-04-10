import React from 'react';
import VoiceOrb3D from '../components/VoiceOrb3D';
import { CONTENT } from '../content';

export default function VoiceGuidelinesCaseStudy() {
    return (
        <article className="pt-0 pb-0 md:pt-32 md:pb-20 md:px-12 max-w-5xl mx-auto">

            <header className="mb-16 px-6 md:px-0 pt-16 md:pt-0 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-ink mb-6">Conversational AI Voice Guidelines</h1>
                <p className="text-xl text-ink/70 font-medium max-w-3xl mx-auto text-balance">
                    Standardizing conversational NLP frameworks across product suites.
                </p>
            </header>

            {/* Hero Image / Header */}
            <div className="w-full h-[400px] md:h-[500px] rounded-none md:rounded-3xl bg-slate border-y md:border border-white/40 shadow-sm overflow-hidden mb-16 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blurple/10 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center overflow-hidden">
                    <VoiceOrb3D />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 px-6 md:px-0 pb-20 md:pb-0">
                <div className="md:col-span-2 space-y-12">

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Objective</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            At the end of 2020, Northwestern Medicine (NM) launched a proprietary NLP-powered chatbot on NM.org to address overwhelming patient demand for self-service options. Built on Microsoft Azure Language Services, the chatbot used natural language processing to understand patient intent and route users to the right information – from finding a doctor to paying a bill.
                        </p>
                        <p className="text-ink/80 leading-relaxed">
                            My role was to ensure that the chatbot's human-written responses and the AI system's configured personality worked together as a seamless, consistent experience. I worked with stakeholders across the health system to develop formal voice guidelines that would govern both the copy written by content teams and the tone parameters configured in the NLP model itself.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">The Design Challenge</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            Designing voice for a conversational AI system is more complex than defining a brand voice for static content. The chatbot's responses emerge from two interacting layers: human-written copy authored by content writers, and personality parameters configured directly in the NLP model. A misalignment between these two layers would produce an inconsistent, untrustworthy user experience – especially problematic in healthcare, where patients are often stressed or confused.
                        </p>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Stakeholder Survey</h2>
                        <p className="text-ink/80 leading-relaxed mb-6">
                            The chatbot's implementation touched teams across the health system – brand, clinical, and operational. I designed a structured survey to draw on their collective expertise in patient interactions and customer service, using the Nielsen Norman Group (NNG) tone of voice dimensions as the survey framework. This ensured responses would be directly applicable to both the written guidelines and the model configuration.
                        </p>

                        <div className="w-full bg-slate rounded-xl border border-white/40 overflow-hidden mb-8">
                            <img src={`${import.meta.env.BASE_URL}img/voice_guidelines/nng-dimensions.png`} alt="NNG Voice Dimensions" className="w-full h-auto object-cover" />
                        </div>

                        <p className="text-ink/80 leading-relaxed mb-6">
                            We mapped the existing dimensions for different NM entities to identify where the new conversational AI should sit. Across all four dimensions, a majority of stakeholders agreed to shift one point toward the warmer, friendlier end of the scale for the chatbot, distinct from the broader corporate brand.
                        </p>

                        <div className="grid grid-cols-1 gap-10 mb-12">
                            <div className="w-full bg-slate rounded-2xl border border-white/40 overflow-hidden flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}img/voice_guidelines/survey-humor-enthusiasm.png`} alt="Humor and Enthusiasm Survey Results" className="w-full h-auto object-cover" />
                            </div>
                            <div className="w-full bg-slate rounded-2xl border border-white/40 overflow-hidden flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}img/voice_guidelines/survey-respect-formalness.png`} alt="Respect and Formalness Survey Results" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </section>

                    <section className="prose prose-lg prose-slate max-w-none">
                        <h2 className="text-2xl font-bold tracking-tight text-ink mb-4">Outcome</h2>
                        <p className="text-ink/80 leading-relaxed mb-8">
                            The chatbot launched initially under pressure from a surge in COVID-19 inquiries, with responses copied directly from existing NM.org content. Over time, content writers systematically rewrote responses to align with the voice guidelines – and the impact was measurable. The system achieved a <strong className="text-blurple">95% intent recognition rate</strong>, meaning the NLP model successfully understood and routed 95 out of every 100 patient questions. By April 2021, the chatbot was handling over <strong className="text-blurple">3,800 conversations per month</strong>.
                        </p>

                        <div className="w-full flex justify-center mt-6 mb-12">
                            <div className="w-full max-w-[320px] bg-white rounded-[2.5rem] border-[6px] border-slate/50 overflow-hidden shadow-2xl relative">
                                <div className="absolute top-0 inset-x-0 h-6 bg-slate/50 z-10 flex justify-center items-end pb-1 rounded-b-xl max-w-[120px] mx-auto"></div>
                                <img src={`${import.meta.env.BASE_URL}img/voice_guidelines/chatbot.gif`} alt="Chatbot Interaction Demo" className="w-full h-auto object-cover relative z-0" />
                            </div>
                        </div>
                    </section>

                </div>

                {/* Info Sidebar */}
                <aside className="md:col-span-1">
                    <div className="glass-card p-8 rounded-3xl">
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
