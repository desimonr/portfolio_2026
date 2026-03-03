import React, { useState, useEffect } from 'react';
import { Linkedin } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'w-[90%] max-w-5xl glass-panel py-3 px-6 rounded-full' : 'w-full max-w-7xl py-6 px-12 bg-transparent'}`}>
            <div className="flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tighter text-ink magnetic block">
                    RD<span className="text-blurple">.</span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#work" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Work</a>
                    <a href="#stack" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Stack</a>
                    <a href="#connect" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline">Connect</a>
                </div>

                <a
                    href="https://linkedin.com/in/raymonddesimone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic flex items-center gap-2 bg-blurple text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(99,91,255,0.4)] hover:shadow-[0_0_30px_rgba(99,91,255,0.6)] transition-all"
                >
                    <Linkedin size={16} />
                    <span>Connect</span>
                </a>
            </div>
        </nav>
    );
}
