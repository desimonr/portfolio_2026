import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Archive from './components/Archive';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CaseStudyOverlay from './components/CaseStudyOverlay';

// A simple scroll-to-top component so React Router natively brings you to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Only scroll to top when navigating away from a project (i.e., to home)
    if (!pathname.startsWith('/project/')) {
      window.scrollTo(0, 0);
    }
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

// Renders the homepage behind an active overlay
function HomeWithOverlay() {
  const { slug } = useParams();
  return (
    <>
      <Home />
      <CaseStudyOverlay slug={slug} />
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

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <main className="bg-slate min-h-screen font-sans selection:bg-blurple selection:text-white overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<HomeWithOverlay />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
