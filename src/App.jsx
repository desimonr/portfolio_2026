import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Archive from './components/Archive';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Footer from './components/Footer';

// Placeholder imports for standard case study pages
import InvisibleAICaseStudy from './pages/InvisibleAICaseStudy';
import VoiceGuidelinesCaseStudy from './pages/VoiceGuidelinesCaseStudy';
import MyNMApp from './pages/MyNMApp';

// A simple scroll-to-top component so React Router natively brings you to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    console.log('navigated to', pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Archive />
      <Stack />
      <Experience />
    </>
  );
}

function App() {
  // When exporting to a subdirectory the Vite `BASE_URL` ends with a slash.
  // React Router will only strip the basename if the pathname starts with it
  // exactly, so we remove any trailing slash to match both `/foo` and
  // `/foo/` requests.
  const rawBase = import.meta.env.BASE_URL || '/';
  const basename = rawBase.replace(/\/+$/, '');

  // debug info to help diagnose mismatched routes in production
  if (typeof window !== 'undefined') {
    console.log('App initializing');
    console.log('  rawBase', rawBase);
    console.log('  basename', basename);
    console.log('  current window.location.pathname', window.location.pathname);
  }

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <main className="bg-slate min-h-screen font-sans selection:bg-blurple selection:text-white overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/invisible-ai" element={<InvisibleAICaseStudy />} />
          <Route path="/project/voice-guidelines" element={<VoiceGuidelinesCaseStudy />} />
          <Route path="/project/mynm-app" element={<MyNMApp />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
