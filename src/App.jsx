import React from 'react';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import CertificationsPage from './pages/CertificationsPage';
import ScrollToTop from './Helpers/ScrollToTop';
import FireflyBackground from "./components/FireflyBackground/FireflyBackground";
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
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPageContent />} />
        <Route path='/certifications' element={<CertificationsPage />} />
      </Routes>
    </>
  );
}

export default App;