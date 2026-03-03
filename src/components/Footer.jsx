import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Footer() {
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
                        LET'S BUILD
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blurple to-[#4A43D4]">SOMETHING.</span>
                    </h2>
                </div>

                <div className="w-full max-w-2xl bg-[#0F2D4A] rounded-2xl p-6 border border-white/10 shadow-2xl mb-12">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex items-center gap-2 text-white/50 font-mono text-xs ml-4">
                            <TerminalIcon size={14} />
                            <span>bash - root@rd-portfolio ~</span>
                        </div>
                    </div>

                    <div className="font-mono text-left space-y-4 text-sm md:text-base">
                        <div className="flex text-white/70">
                            <span className="text-blurple mr-2">$</span>
                            <span className="typing-cmd">sudo initiate_contact --target linkedin</span>
                        </div>
                        <div className="text-white animate-pulse">
                        </div>
                        <div className="pt-4">
                            <a
                                href="https://linkedin.com/in/raymonddesimone"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-ink font-sans font-bold py-3 px-8 rounded-sm hover:bg-slate hover:scale-[1.02] transition-all magnetic"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 mt-16 text-white/50 font-mono text-xs uppercase tracking-widest">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span>System Operational</span>
                    </div>

                    <div>
                        <span>&copy; {new Date().getFullYear()} RD. All Rights Reserved.</span>
                    </div>

                    <div className="flex gap-6">
                        <span>LOCAL TIME: {time}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
