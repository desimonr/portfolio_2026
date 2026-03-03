import React, { useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import InvisibleAICaseStudy from '../pages/InvisibleAICaseStudy';
import VoiceGuidelinesCaseStudy from '../pages/VoiceGuidelinesCaseStudy';
import MyNMApp from '../pages/MyNMApp';

const CASE_STUDIES = [
    { slug: 'invisible-ai', label: 'Invisible AI', Component: InvisibleAICaseStudy, bg: 'bg-indigo-50' },
    { slug: 'voice-guidelines', label: 'Voice Guidelines', Component: VoiceGuidelinesCaseStudy, bg: 'bg-teal-50' },
    { slug: 'mynm-app', label: 'MyNM App', Component: MyNMApp, bg: 'bg-rose-50' },
];

export function getCaseStudySlugs() {
    return CASE_STUDIES.map((cs) => cs.slug);
}

export default function CaseStudyOverlay({ slug }) {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const touchStartX = useRef(null);
    const touchStartY = useRef(null);

    const currentIndex = CASE_STUDIES.findIndex((cs) => cs.slug === slug);
    const { Component, bg } = CASE_STUDIES[currentIndex] ?? {};

    const close = useCallback(() => navigate('/'), [navigate]);

    const goNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
        navigate(`/project/${CASE_STUDIES[nextIndex].slug}`);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [currentIndex, navigate]);

    const goPrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
        navigate(`/project/${CASE_STUDIES[prevIndex].slug}`);
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [currentIndex, navigate]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [close, goNext, goPrev]);

    // Lock body scroll while overlay is open
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = prev; };
    }, []);

    // Scroll to top when slug changes
    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [slug]);

    // Touch / swipe handling
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        const dy = e.changedTouches[0].clientY - touchStartY.current;
        // Only trigger if horizontal swipe > 60px and more horizontal than vertical
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) goNext();
            else goPrev();
        }
        touchStartX.current = null;
        touchStartY.current = null;
    };

    if (!Component) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
                onClick={close}
                aria-hidden="true"
            />

            {/* Overlay panel */}
            <div
                className="fixed inset-x-0 top-8 bottom-8 z-50 flex items-stretch justify-center animate-overlay-in"
                role="dialog"
                aria-modal="true"
                aria-label="Case study"
            >
                {/* Left arrow — desktop only */}
                <button
                    onClick={goPrev}
                    aria-label="Previous case study"
                    className="hidden md:flex items-center justify-center w-16 shrink-0 text-ink/40 hover:text-ink transition-colors group"
                >
                    <span className="w-10 h-10 rounded-full border border-ink/20 group-hover:border-ink/50 group-hover:bg-white/10 flex items-center justify-center transition-all">
                        <ChevronLeft size={20} />
                    </span>
                </button>

                {/* Scrollable content */}
                <div
                    ref={scrollRef}
                    className={`relative flex-1 max-w-6xl ${bg ?? 'bg-slate'} overflow-y-auto overscroll-contain rounded-2xl border border-white/50 shadow-[0_24px_64px_rgba(0,0,0,0.35)] ring-1 ring-white/20`}
                    style={{ maxHeight: '100%' }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Close button */}
                    <button
                        onClick={close}
                        aria-label="Close"
                        className="sticky top-4 float-right mr-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-white/20 transition-all shadow-lg"
                    >
                        <X size={18} />
                    </button>

                    {/* Case study content */}
                    <div className="clear-right">
                        <Component />
                    </div>

                    {/* Bottom nav */}
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

                {/* Right arrow — desktop only */}
                <button
                    onClick={goNext}
                    aria-label="Next case study"
                    className="hidden md:flex items-center justify-center w-16 shrink-0 text-ink/40 hover:text-ink transition-colors group"
                >
                    <span className="w-10 h-10 rounded-full border border-ink/20 group-hover:border-ink/50 group-hover:bg-white/10 flex items-center justify-center transition-all">
                        <ChevronRight size={20} />
                    </span>
                </button>
            </div>
        </>
    );
}
