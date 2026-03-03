import React from 'react';

const techs = [
    "Figma", "FigJam", "Sketch", "Optimal Workshop", "Azure Language Services", "Claude", "Gemini", "Photoshop", "Illustrator", "Prompt Engineering", "NLP"
];

export default function Stack() {
    return (
        <section id="stack" className="py-32 bg-white border-y border-slate relative overflow-hidden">
            {/* CSS Marquee */}
            <div className="flex whitespace-nowrap overflow-hidden py-10 mb-16 opacity-30">
                <div className="animate-marquee inline-block whitespace-nowrap font-mono text-5xl md:text-7xl font-bold text-ink/20">
                    {techs.map((tech, i) => (
                        <span key={i} className="mx-8">{tech}</span>
                    ))}
                    {techs.map((tech, i) => (
                        <span key={`dup-${i}`} className="mx-8">{tech}</span>
                    ))}
                </div>
                {/* duplicate for seamless loop */}
                <div className="animate-marquee inline-block whitespace-nowrap font-mono text-5xl md:text-7xl font-bold text-ink/20 ml-8">
                    {techs.map((tech, i) => (
                        <span key={i} className="mx-8">{tech}</span>
                    ))}
                    {techs.map((tech, i) => (
                        <span key={`dup-${i}`} className="mx-8">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="group relative pl-6 border-l border-slate hover:border-blurple transition-colors duration-300">
                    <div className="absolute left-[-1px] top-0 w-[2px] h-0 bg-blurple transition-all duration-300 group-hover:h-full"></div>
                    <h3 className="text-sm font-mono text-blurple mb-6 tracking-widest uppercase">01 // Research & Strategy</h3>
                    <ul className="space-y-4 font-medium text-ink/80 text-lg">
                        <li className="hover:text-ink transition-colors cursor-default">Usability Testing & Moderation</li>
                        <li className="hover:text-ink transition-colors cursor-default">Qualitative Synthesis</li>
                        <li className="hover:text-ink transition-colors cursor-default">Journey Mapping</li>
                        <li className="hover:text-ink transition-colors cursor-default">Competitive Analysis</li>
                    </ul>
                </div>

                <div className="group relative pl-6 border-l border-slate hover:border-blurple transition-colors duration-300">
                    <div className="absolute left-[-1px] top-0 w-[2px] h-0 bg-blurple transition-all duration-300 group-hover:h-full"></div>
                    <h3 className="text-sm font-mono text-blurple mb-6 tracking-widest uppercase">02 // Conversational AI</h3>
                    <ul className="space-y-4 font-medium text-ink/80 text-lg">
                        <li className="hover:text-ink transition-colors cursor-default">Voice & Tone Strategy</li>
                        <li className="hover:text-ink transition-colors cursor-default">Prompt Engineering</li>
                        <li className="hover:text-ink transition-colors cursor-default">Multimodal Interfaces</li>
                        <li className="hover:text-ink transition-colors cursor-default">NLP Interaction Design</li>
                    </ul>
                </div>

                <div className="group relative pl-6 border-l border-slate hover:border-blurple transition-colors duration-300">
                    <div className="absolute left-[-1px] top-0 w-[2px] h-0 bg-blurple transition-all duration-300 group-hover:h-full"></div>
                    <h3 className="text-sm font-mono text-blurple mb-6 tracking-widest uppercase">03 // UX Architecture</h3>
                    <ul className="space-y-4 font-medium text-ink/80 text-lg">
                        <li className="hover:text-ink transition-colors cursor-default">Design Systems</li>
                        <li className="hover:text-ink transition-colors cursor-default">Information Architecture</li>
                        <li className="hover:text-ink transition-colors cursor-default">Accessibility (A11y)</li>
                        <li className="hover:text-ink transition-colors cursor-default">Wireframing & Prototyping</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
