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
  return (
    <Router>
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
