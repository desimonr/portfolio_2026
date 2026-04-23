import React from 'react';

const techs = [
    "Figma", "UserTesting", "Sketch", "Optimal Workshop", "Azure Language Services", "Claude", "Gemini", "Photoshop", "Illustrator", "Prompt Engineering", "NLP"
];

export default function Stack({ content }) {
    const techs = content.techMarquee;

    return (
        <section id="skills" className="py-48 bg-white dark:bg-appbg/10 border-y border-appbg dark:border-white/5 relative overflow-hidden transition-colors duration-300">
            {/* CSS Marquee */}
            <div className="flex whitespace-nowrap overflow-hidden py-10 mb-16 opacity-30">
                <div className="animate-marquee inline-block whitespace-nowrap font-mono text-5xl md:text-7xl font-bold text-appfg/20">
                    {techs.map((tech, i) => (
                        <span key={i} className="mx-8">{tech}</span>
                    ))}
                    {techs.map((tech, i) => (
                        <span key={`dup-${i}`} className="mx-8">{tech}</span>
                    ))}
                </div>
                {/* duplicate for seamless loop */}
                <div className="animate-marquee inline-block whitespace-nowrap font-mono text-5xl md:text-7xl font-bold text-appfg/20 ml-8">
                    {techs.map((tech, i) => (
                        <span key={i} className="mx-8">{tech}</span>
                    ))}
                    {techs.map((tech, i) => (
                        <span key={`dup-${i}`} className="mx-8">{tech}</span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                {content.categories.map((cat) => (
                    <div key={cat.id} className="group relative pl-6 border-l border-appbg dark:border-white/10 hover:border-blurple transition-colors duration-300">
                        <div className="absolute left-[-1px] top-0 w-[2px] h-0 bg-blurple transition-all duration-300 group-hover:h-full"></div>
                        <h3 className="text-sm font-mono text-blurple mb-6 tracking-widest uppercase">{cat.id} // {cat.label}</h3>
                        <ul className="space-y-4 font-medium text-appfg/80 text-lg">
                            {cat.items.map((item, idx) => (
                                <li key={idx} className="hover:text-appfg transition-colors cursor-default">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
