import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Footer({ content }) {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }) + ' UTC' + (now.getTimezoneOffset() / -60 > 0 ? '+' : '') + (now.getTimezoneOffset() / -60));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer id="connect" className="bg-ink text-slate py-32 relative overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blurple/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                <div className="mb-12">
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none text-white mb-6 transform scale-y-110">
                        {content.headline}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blurple to-[#4A43D4]">{content.subHeadline}</span>
                    </h2>
                </div>

                <div className="pt-4 mb-12">
                    <a
                        href={content.links[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-ink font-sans font-bold py-3 px-8 rounded-full hover:bg-slate hover:scale-[1.02] transition-all magnetic"
                    >
                        {content.ctaLabel}
                    </a>
                </div>

                {/* Status Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 mt-16 text-white/50 font-mono text-xs uppercase tracking-widest">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span>System Operational</span>
                    </div>

                    <div>
                        <span>&copy; {new Date().getFullYear()} {content.copyright}</span>
                    </div>

                    <div className="flex gap-6">
                        <span>LOCAL TIME: {time}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
