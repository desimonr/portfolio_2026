import React from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Archive from './sections/Archive';
import Stack from './sections/Stack';
import Footer from './sections/Footer';
import CaseStudyOverlay from './sections/CaseStudyOverlay';
import { OverlayProvider } from './contexts/OverlayContext';
import { CONTENT } from './content';
import { useGLTF } from '@react-three/drei';

// Preload 3D models globally so they open instantly without a loading flash
CONTENT.work.projects.forEach(project => {
  if (project.modelUrl) {
    useGLTF.preload(`${import.meta.env.BASE_URL}${project.modelUrl}`);
  }
});

function Home() {
  return (
    <>
      <Hero content={CONTENT.hero} />
      <Archive content={CONTENT.work} />
      <Stack content={CONTENT.skills} />
    </>
  );
}

/** Renders the overlay whenever the URL is /project/:slug – lives inside the Router */
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
          <div id="main-nav">
            <Navbar content={CONTENT.navbar} />
          </div>
          <div id="homepage-content">
            <Home />
            <Footer content={CONTENT.footer} />
          </div>
          <CaseStudyOverlayManager />
        </main>
      </OverlayProvider>
    </Router>
  );
}

export default App;
