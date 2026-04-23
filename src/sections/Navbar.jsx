import React, { useState, useEffect } from 'react';
import { Linkedin, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function Navbar({ content }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // derive a base path without trailing slash so we can match `/${base}`
    // whether or not the URL ends with a slash.
    const rawBase = import.meta.env.BASE_URL || '/';
    const base = rawBase.replace(/\/+$/, '');
    // remove the base from the current pathname for comparison
    let path = location.pathname;
    if (base && path.startsWith(base)) {
        path = path.slice(base.length);
    }
    if (path === '') path = '/';
    const isHome = path === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = content.links;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (e, linkHref) => {
        if (!linkHref.startsWith('#')) return;
        
        e.preventDefault();
        setMobileMenuOpen(false);
        
        const id = linkHref.substring(1);
        
        if (path !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState({}, '', `${base || '/'}#${id}`);
        }
    };

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${scrolled || mobileMenuOpen ? 'w-[90%] max-w-5xl glass-panel py-3 px-6 rounded-3xl md:rounded-full' : 'w-full max-w-7xl py-6 px-12 bg-transparent'}`}>
            <div className="flex items-center justify-between">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} aria-label="Raymond DeSimone Home" className="text-xl font-bold tracking-tighter text-ink magnetic block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple rounded-lg">
                    {content.logo}
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isAnchor = link.href.startsWith('#');
                        const href = isAnchor ? link.href : `${base}${link.href}`;
                        return (
                            <a
                                key={link.name}
                                href={href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple rounded-md"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle className="hidden md:flex" />
                    <a
                        href={content.cta.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Connect on LinkedIn"
                        className="hidden md:flex magnetic items-center gap-2 bg-blurple text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(99,91,255,0.4)] hover:shadow-[0_0_30px_rgba(99,91,255,0.6)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blurple"
                    >
                        <Linkedin size={16} />
                        <span>{content.cta.label}</span>
                    </a>

                    <button
                        className="md:hidden text-appfg p-2 hover:bg-appfg/5 dark:hover:bg-white/5 rounded-full transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden pt-6 pb-4 border-t border-appfg/10 dark:border-white/10 mt-4 animate-in slide-in-from-top-4 fade-in duration-200">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2 mb-2">
                            <span className="text-sm font-mono text-appfg/40 dark:text-white/40 uppercase tracking-widest">Theme</span>
                            <ThemeToggle />
                        </div>
                        {navLinks.map((link) => {
                            const isAnchor = link.href.startsWith('#');
                            const href = isAnchor ? link.href : `${base}${link.href}`;
                            return (
                                <a
                                    key={link.name}
                                    href={href}
                                    onClick={(e) => {
                                        if (isAnchor) {
                                            handleNavClick(e, link.href);
                                        } else {
                                            setMobileMenuOpen(false);
                                        }
                                    }}
                                    className="text-lg font-medium text-ink/80 hover:text-blurple transition-colors px-2"
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href={content.cta.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center justify-center gap-2 bg-blurple text-white px-6 py-3 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(99,91,255,0.4)] transition-all"
                        >
                            <Linkedin size={18} />
                            <span>{content.cta.label} on LinkedIn</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
