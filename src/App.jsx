import React, { Suspense, lazy } from 'react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import { Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Helpers/ScrollToTop';
import FireflyBackground from "./components/FireflyBackground/FireflyBackground";
import Spinner from './components/Spinner/Spinner';
import LanguageToggle from './components/LanguageToggle/LanguageToggle';

// Code-split the certifications page so it doesn't load with the home page.
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));

function MainPageContent() {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <FireflyBackground /> {/* Fondo de luciérnagas */}
      <LanguageToggle />
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<MainPageContent />} />
          <Route path='/certifications' element={<CertificationsPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;