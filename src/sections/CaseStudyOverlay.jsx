import React, { useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import InvisibleAICaseStudy from '../projects/InvisibleAICaseStudy';
import VoiceGuidelinesCaseStudy from '../projects/VoiceGuidelinesCaseStudy';
import MyNMApp from '../projects/MyNMApp';
import { useCardRect } from '../contexts/OverlayContext';

const CASE_STUDIES = [
    { slug: 'invisible-ai', label: 'Invisible AI', Component: InvisibleAICaseStudy, bg: 'bg-indigo-50' },
    { slug: 'voice-guidelines', label: 'Voice Guidelines', Component: VoiceGuidelinesCaseStudy, bg: 'bg-teal-50' },
    { slug: 'mynm-app', label: 'MyNM App', Component: MyNMApp, bg: 'bg-rose-50' },
];

export default function CaseStudyOverlay({ slug }) {
    const navigate = useNavigate();
    const cardRectRef = useCardRect();
    const panelRef = useRef(null);   // outer glass panel — GSAP target
    const scrollRef = useRef(null);   // inner scroll container
    const backdropRef = useRef(null);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    const currentIndex = CASE_STUDIES.findIndex((cs) => cs.slug === slug);
    const { Component, bg } = CASE_STUDIES[currentIndex] ?? {};

    const close = useCallback(() => navigate('/'), [navigate]);

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
            panelEl.style.clipPath = `inset(${t}px ${r}px ${b}px ${l}px round 1.5rem)`;

            gsap.to(panelEl, {
                clipPath: 'inset(0px 0px 0px 0px round 1rem)',
                duration: 0.55,
                ease: 'expo.out',
                onComplete: () => {
                    panelEl.style.clipPath = 'none'; // hand off to CSS border-radius
                },
            });

            // Clear so switching between studies doesn't reuse stale rect
            cardRectRef.current = null;
        } else {
            // Fallback: gentle fade + rise (deep link or keyboard open)
            gsap.fromTo(panelEl,
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' }
            );
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps — intentionally mount-only

    // ─── Scroll lock: preserve page scroll position ───────────────────────────
    useEffect(() => {
        const scrollY = window.scrollY;
        // position:fixed trick — keeps layout stable and remembers scroll offset
        document.body.style.top = `-${scrollY}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.overflowY = 'scroll'; // prevent layout shift from scrollbar hiding
        return () => {
            document.body.style.top = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';
            window.scrollTo(0, scrollY); // restore exact position
        };
    }, []);

    // ─── Scroll overlay to top when navigating between studies ───────────────
    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
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
    };
    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        const dy = e.changedTouches[0].clientY - touchStartY.current;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) goNext(); else goPrev();
        }
        touchStartX.current = null;
        touchStartY.current = null;
    };

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
                className="fixed inset-x-0 top-8 bottom-8 z-[70] flex items-stretch justify-center"
                role="dialog"
                aria-modal="true"
                aria-label="Case study"
            >
                {/* Left arrow — desktop only */}
                <button
                    onClick={goPrev}
                    aria-label="Previous case study"
                    className="hidden md:flex items-center justify-center w-16 shrink-0 text-white/50 hover:text-white transition-colors group"
                >
                    <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 flex items-center justify-center transition-all">
                        <ChevronLeft size={20} />
                    </span>
                </button>

                {/* Glass panel */}
                <div
                    ref={panelRef}
                    className={`relative flex-1 max-w-6xl ${bg ?? 'bg-slate'} rounded-2xl border border-white/50 shadow-[0_24px_64px_rgba(0,0,0,0.35)] ring-1 ring-white/20 overflow-hidden`}
                >
                    {/* Scrollable inner area */}
                    <div
                        ref={scrollRef}
                        className="h-full overflow-y-auto overscroll-contain"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Close button — sticky inside scroll area */}
                        <button
                            onClick={close}
                            aria-label="Close"
                            className="sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-white/50 transition-all shadow-lg"
                        >
                            <X size={18} />
                        </button>

                        {/* Case study content */}
                        <div className="clear-right">
                            <Component />
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

                {/* Right arrow — desktop only */}
                <button
                    onClick={goNext}
                    aria-label="Next case study"
                    className="hidden md:flex items-center justify-center w-16 shrink-0 text-white/50 hover:text-white transition-colors group"
                >
                    <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 flex items-center justify-center transition-all">
                        <ChevronRight size={20} />
                    </span>
                </button>
            </div>
        </>
    );
}
