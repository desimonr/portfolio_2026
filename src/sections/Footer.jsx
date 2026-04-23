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
        <footer id="connect" className="py-24 px-6 md:px-12 bg-appfg text-appbg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                <div className="mb-12">
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none text-white dark:text-appfg mb-6 transform scale-y-110">
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
                        className="inline-block bg-white dark:bg-blurple text-appbg dark:text-white font-sans font-bold py-3 px-8 rounded-full hover:bg-appfg dark:hover:bg-blurple/90 hover:scale-[1.02] transition-all magnetic"
                    >
                        {content.ctaLabel}
                    </a>
                </div>

                {/* Status Bar */}
                <div className="pt-8 border-t border-appbg/20 flex flex-col md:flex-row justify-between items-center gap-6 w-full text-xs uppercase tracking-widest">
                    <p className="font-mono text-appbg/50">
                        &copy; {new Date().getFullYear()} Raymond DeSimone // All rights reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span>System Operational</span>
                    </div>


                    <div className="flex gap-6">
                        <span>LOCAL TIME: {time}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
