import React, { useEffect, useLayoutEffect, useRef, useCallback, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import InvisibleAICaseStudy from '../projects/InvisibleAICaseStudy';
import VoiceGuidelinesCaseStudy from '../projects/VoiceGuidelinesCaseStudy';
import MyNMApp from '../projects/MyNMApp';
import PortfolioAIStudy from '../projects/PortfolioAIStudy';
import { useOverlayContext } from '../contexts/OverlayContext';

function ProjectLoadingState() {
    return (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-700">
            <Loader2 className="w-8 h-8 text-indigo-400/40 animate-spin" />
            <div className="w-48 h-1.5 bg-black/5 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]" />
            </div>
        </div>
    );
}

const CASE_STUDIES = [
    { slug: 'invisible-ai', label: 'Invisible AI', Component: InvisibleAICaseStudy, bg: 'bg-indigo-50' },
    { slug: 'voice-guidelines', label: 'Voice Guidelines', Component: VoiceGuidelinesCaseStudy, bg: 'bg-indigo-50' },
    { slug: 'mynm-app', label: 'MyNM App', Component: MyNMApp, bg: 'bg-indigo-50' },
    { slug: 'ai-portfolio', label: 'AI Portfolio', Component: PortfolioAIStudy, bg: 'bg-indigo-50' },
];

export default function CaseStudyOverlay({ slug }) {
    const navigate = useNavigate();
    const { cardRectRef, triggerRef } = useOverlayContext();
    const panelRef = useRef(null);   // outer glass panel – GSAP target
    const scrollRef = useRef(null);   // inner scroll container
    const backdropRef = useRef(null);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);
    const [layoutMode, setLayoutMode] = React.useState('fixed');
    const [isTransitioning, setIsTransitioning] = React.useState(true);

    const currentIndex = CASE_STUDIES.findIndex((cs) => cs.slug === slug);
    const { Component, bg } = CASE_STUDIES[currentIndex] ?? {};

    const close = useCallback(() => {
        const panelEl = panelRef.current;
        const backdropEl = backdropRef.current;
        if (!panelEl) return navigate('/');

        const isMobile = window.innerWidth < 768;
        const home = document.getElementById('homepage-content');
        const nav = document.getElementById('main-nav');
        
        // Step 1: Unfreeze the homepage and restore the window scroll
        // This makes the homepage content appear exactly where it was before the overlay opened
        if (isMobile) {
            // CRITICAL: Disable smooth scroll globally for the jump to prevent the "abrupt scroll" visual
            document.documentElement.style.scrollBehavior = 'auto';
            
            if (home) { home.style.position = ''; home.style.top = ''; home.style.width = ''; }
            if (nav) { nav.style.position = ''; nav.style.top = ''; nav.style.width = ''; }
            
            const savedPos = parseInt(document.body.dataset.scrollPos || '0');
            window.scrollTo(0, savedPos);
            setLayoutMode('fixed');

            // Restore smooth scroll in the next frame
            requestAnimationFrame(() => {
                document.documentElement.style.scrollBehavior = '';
            });
        }

        const tl = gsap.timeline({
            onComplete: () => navigate('/')
        });

        // Fade backdrop out
        if (backdropEl) {
            tl.to(backdropEl, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0);
        }

        const triggerEl = triggerRef?.current;
        if (triggerEl) {
            // Step 2: Now that the window is scrolled back, get the REAL current rect of the card
            const cr = triggerEl.getBoundingClientRect();
            const pr = panelEl.getBoundingClientRect();

            // Calculate insets to match the card's position in its restored scroll state
            const t = Math.max(0, cr.top - pr.top);
            const r = Math.max(0, pr.right - cr.right);
            const b = Math.max(0, pr.bottom - cr.bottom);
            const l = Math.max(0, cr.left - pr.left);

            tl.to(panelEl, {
                clipPath: `inset(${t}px ${r}px ${b}px ${l}px round ${isMobile ? '0px' : '1.5rem'})`,
                duration: 0.45,
                ease: 'expo.inOut'
            }, 0);

            tl.to(panelEl, {
                autoAlpha: 0,
                duration: 0.2,
                ease: 'power2.in'
            }, 0.25);
        } else {
            tl.to(panelEl, {
                autoAlpha: 0,
                y: 24,
                duration: 0.3,
                ease: 'power3.in'
            }, 0);
        }
    }, [navigate, triggerRef]);

    const goNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
        navigate(`/project/${CASE_STUDIES[nextIndex].slug}`);
    }, [currentIndex, navigate]);

    const goPrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
        navigate(`/project/${CASE_STUDIES[prevIndex].slug}`);
    }, [currentIndex, navigate]);

    // ─── Opening animation (runs once on mount) ──────────────────────────────
    useLayoutEffect(() => {
        const panelEl = panelRef.current;
        const backdropEl = backdropRef.current;
        if (!panelEl) return;

        // Fade backdrop in
        if (backdropEl) {
            gsap.fromTo(backdropEl, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out' });
        }

        const cr = cardRectRef?.current; // DOMRect of the clicked card, if any
        if (cr) {
            // Expand from card position via clip-path
            const pr = panelEl.getBoundingClientRect();
            const t = Math.max(0, cr.top - pr.top);
            const r = Math.max(0, pr.right - cr.right);
            const b = Math.max(0, pr.bottom - cr.bottom);
            const l = Math.max(0, cr.left - pr.left);

            // Set immediately (avoids flash-of-full-panel before GSAP starts)
            const isMobile = window.innerWidth < 768;
            const finalRound = isMobile ? '0px' : '1.5rem';
            panelEl.style.clipPath = `inset(${t}px ${r}px ${b}px ${l}px round ${finalRound})`;

            gsap.to(panelEl, {
                clipPath: `inset(0px 0px 0px 0px round ${finalRound})`,
                duration: 0.55,
                ease: 'expo.out',
                onComplete: () => {
                    if (isMobile) {
                        const home = document.getElementById('homepage-content');
                        const nav = document.getElementById('main-nav');
                        const scroll = parseInt(document.body.dataset.scrollPos || '0');
                        
                        // Freeze home page at its current visual state 
                        // so we can switch the window to the project scroller
                        if (home) {
                            home.style.position = 'fixed';
                            home.style.top = `-${scroll}px`;
                            home.style.width = '100%';
                        }
                        if (nav) {
                            nav.style.position = 'fixed';
                            nav.style.top = `-${scroll}px`;
                            nav.style.width = '100%';
                        }
                        
                        document.documentElement.style.scrollBehavior = 'auto';
                        setLayoutMode('absolute');
                        window.scrollTo(0, 0);
                        requestAnimationFrame(() => {
                            document.documentElement.style.scrollBehavior = '';
                        });
                    }
                    setIsTransitioning(false);
                }
            });

            // Clear so switching between studies doesn't reuse stale rect
            cardRectRef.current = null;
        } else {
            // Fallback: gentle fade + rise (deep link or keyboard open)
            gsap.fromTo(panelEl,
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out',
                  onComplete: () => setIsTransitioning(false) }
            );
        }
    }, [cardRectRef]);

    // ─── Scroll lock & Theme sync ─────────────────────────────────────────────
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const themeColor = bg === 'bg-indigo-50' ? '#f0f4ff' : '#F6F9FC';
        const originalBodyBg = document.body.style.backgroundColor;
        const originalThemeMeta = document.querySelector('meta[name="theme-color"]')?.getAttribute('content');
        const home = document.getElementById('homepage-content');
        const nav = document.getElementById('main-nav');
        const scrollPos = window.scrollY;

        // Sync system UI colors
        document.body.style.backgroundColor = themeColor;
        let metaTag = document.querySelector('meta[name="theme-color"]');
        if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.name = "theme-color";
            document.head.appendChild(metaTag);
        }
        metaTag.setAttribute('content', themeColor);

        if (isMobile) {
            // Store position visually during transition
            document.body.dataset.scrollPos = scrollPos.toString();
            return () => {
                // Return to previous scroll state
                const home = document.getElementById('homepage-content');
                const nav = document.getElementById('main-nav');
                if (home) { home.style.position = ''; home.style.top = ''; }
                if (nav) { nav.style.position = ''; nav.style.top = ''; }
                window.scrollTo(0, scrollPos);
            };
        }

        // DESKTOP: Traditional scroll lock
        document.body.style.top = `-${scrollPos}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        return () => {
            document.body.style.top = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.backgroundColor = originalBodyBg;
            if (originalThemeMeta) metaTag.setAttribute('content', originalThemeMeta);
            window.scrollTo(0, scrollPos);

            if (triggerRef?.current) {
                triggerRef.current.focus();
            }
        };
    }, [bg, triggerRef]);

    // ─── Scroll overlay to top when navigating between studies ───────────────
    useEffect(() => {
        if (window.innerWidth < 768) {
            window.scrollTo(0, 0);
        } else if (scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [slug]);

    // ─── Keyboard navigation ──────────────────────────────────────────────────
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [close, goNext, goPrev]);

    // ─── Touch / swipe ────────────────────────────────────────────────────────
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        // Ensure no transitions during active tracking
        gsap.killTweensOf(panelRef.current);
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === null) return;
        const dx = e.touches[0].clientX - touchStartX.current;
        const dy = e.touches[0].clientY - touchStartY.current;

        // Only track horizontal if it's the dominant gesture
        if (Math.abs(dx) > Math.abs(dy)) {
            // Move panel following finger
            gsap.set(panelRef.current, { x: dx });
            
            // Move neighbor panels too
            const neighbors = document.querySelectorAll('.neighbor-panel');
            neighbors.forEach(n => {
                const baseTranslate = n.classList.contains('left-panel') ? -100 : 100;
                gsap.set(n, { xPercent: baseTranslate, x: dx });
            });

            e.preventDefault(); // prevent vertical scroll during horizontal swipe
        }
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        const threshold = window.innerWidth * 0.25;

        if (Math.abs(dx) > threshold) {
            // Swipe committed
            const direction = dx < 0 ? 1 : -1;
            gsap.to(panelRef.current, {
                x: direction * -window.innerWidth,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    // Reset position BEFORE navigating so the next project appears centered
                    gsap.set(panelRef.current, { x: 0, opacity: 1 });
                    if (direction === 1) goNext(); else goPrev();
                }
            });
        } else {
            // Snap back
            gsap.to(panelRef.current, { x: 0, duration: 0.3, ease: 'power2.out' });
        }
        touchStartX.current = null;
        touchStartY.current = null;
    };

    const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
    const prevIndex = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
    const NextComponent = CASE_STUDIES[nextIndex].Component;
    const PrevComponent = CASE_STUDIES[prevIndex].Component;

    if (!Component) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
                onClick={close}
                aria-hidden="true"
            />

            {/* Panel container */}
            <div
                className={`z-[70] ${layoutMode === 'fixed' ? 'fixed inset-0 p-0 md:p-8 flex items-stretch justify-center pointer-events-none' : 'absolute inset-x-0'}`}
                role="dialog"
                aria-modal="true"
                aria-label="Case study"
            >
                {/* Mobile fixed close button – outside any scroll/transform context */}
                <div className="md:hidden fixed top-4 right-4 z-[110] pointer-events-auto">
                    <button
                        onClick={close}
                        aria-label="Close"
                        className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-white/50 transition-all shadow-lg active:scale-95"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Horizontal slide container for neighbors */}
                <div className="absolute inset-0 flex items-stretch overflow-hidden pointer-events-none md:pointer-events-auto">
                    {/* Neighbor Left */}
                    <div 
                        className="neighbor-panel left-panel flex-1 md:max-w-6xl w-full h-full translate-x-[-100%] absolute inset-0 bg-slate" 
                        style={{ transform: 'translateX(-100%)' }}
                    >
                        <div className="h-full overflow-hidden opacity-10 pt-16 md:px-12 md:pt-32">
                             <PrevComponent />
                        </div>
                    </div>
                    {/* Neighbor Right */}
                    <div 
                        className="neighbor-panel right-panel flex-1 md:max-w-6xl w-full h-full translate-x-[100%] absolute inset-0 bg-slate"
                        style={{ transform: 'translateX(100%)' }}
                    >
                        <div className="h-full overflow-hidden opacity-10 pt-16 md:px-12 md:pt-32">
                            <NextComponent />
                        </div>
                    </div>
                </div>

                {/* Left arrow – desktop only */}
                <button
                    onClick={goPrev}
                    aria-label="Previous case study"
                    className="hidden md:flex items-center justify-center w-16 shrink-0 text-white/50 hover:text-white transition-colors group focus-visible:outline-none"
                >
                    <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 flex items-center justify-center transition-all group-focus-visible:ring-2 group-focus-visible:ring-white">
                        <ChevronLeft size={20} />
                    </span>
                </button>

                {/* Glass panel */}
                <div
                    ref={panelRef}
                    className={`relative flex-1 md:max-w-6xl w-full h-full pointer-events-auto ${bg ?? 'bg-slate'} rounded-none md:rounded-2xl border-0 md:border md:border-white/50 md:shadow-[0_24px_64px_rgba(0,0,0,0.35)] md:ring-1 md:ring-white/20`}
                >
                    {/* Scrollable inner area - uses window scroll on mobile */}
                    <div
                        ref={scrollRef}
                        className={`${window.innerWidth < 768 ? 'w-full pb-20' : 'h-full overflow-y-auto overscroll-contain'}`}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Close button – desktop only */}
                        <button
                            onClick={close}
                            aria-label="Close"
                            className="hidden md:flex sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 items-center justify-center text-ink/60 hover:text-ink hover:bg-white/50 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blurple"
                        >
                            <X size={18} />
                        </button>

                        {/* Case study content */}
                        <div className="clear-right">
                            <Suspense fallback={<ProjectLoadingState />}>
                                <Component />
                            </Suspense>
                        </div>

                        {/* Bottom prev / next nav */}
                        <div className="flex items-center justify-between px-6 md:px-12 py-10 border-t border-ink/10">
                            <button
                                onClick={goPrev}
                                className="inline-flex items-center gap-2 text-ink/50 hover:text-blurple transition-colors font-medium group"
                            >
                                <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                                {CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length].label}
                            </button>
                            <button
                                onClick={goNext}
                                className="inline-flex items-center gap-2 text-ink/50 hover:text-blurple transition-colors font-medium group"
                            >
                                {CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length].label}
                                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right arrow – desktop only */}
                <button
                    onClick={goNext}
                    aria-label="Next case study"
                    className="hidden md:flex items-center justify-center w-16 shrink-0 text-white/50 hover:text-white transition-colors group focus-visible:outline-none"
                >
                    <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 flex items-center justify-center transition-all group-focus-visible:ring-2 group-focus-visible:ring-white">
                        <ChevronRight size={20} />
                    </span>
                </button>
            </div>
        </>
    );
}
