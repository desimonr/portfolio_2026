import React from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Archive from './components/Archive';
import Stack from './components/Stack';
import Footer from './components/Footer';
import CaseStudyOverlay from './components/CaseStudyOverlay';
import { OverlayProvider } from './contexts/OverlayContext';

function Home() {
  return (
    <>
      <Hero />
      <Archive />
      <Stack />
    </>
  );
}

/** Renders the overlay whenever the URL is /project/:slug — lives inside the Router */
function CaseStudyOverlayManager() {
  const { pathname } = useLocation();
  const slug = pathname.match(/^\/project\/([^/]+)/)?.[1] ?? null;
  if (!slug) return null;
  return <CaseStudyOverlay slug={slug} />;
}

function App() {
  const rawBase = import.meta.env.BASE_URL || '/';
  const basename = rawBase.replace(/\/+$/, '');

  return (
    <Router basename={basename}>
      <OverlayProvider>
        <main className="bg-slate min-h-screen font-sans selection:bg-blurple selection:text-white overflow-x-hidden">
          <Navbar />
          {/*
                     * <Home> is ALWAYS mounted — never remounts when the overlay opens/closes.
                     * This means scroll position is naturally preserved; no scroll-to-top needed.
                     */}
          <Home />
          <CaseStudyOverlayManager />
          <Footer />
        </main>
      </OverlayProvider>
    </Router>
  );
}

export default App;
