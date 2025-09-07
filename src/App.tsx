import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollAnimations from './components/ScrollAnimations';
import ProjectPage from './components/ProjectPage'; 


function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) { 
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollAnimations />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services /> 
              <Projects />
              <Testimonials />
              <Partners />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;