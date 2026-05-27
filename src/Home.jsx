import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyHireMe from './components/WhyHireMe';
import Experience from './components/Experience';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Scroll progress + active section tracker
  useEffect(() => {
    const bar = document.getElementById('scrollBar');
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (bar) {
        const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        bar.style.transform = `scaleX(${pct})`;
      }
    };
    window.addEventListener('scroll', onScroll);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting && e.target.id) setActiveSection(e.target.id); }),
      { threshold: 0.25 }
    );
    document.querySelectorAll('section[id]').forEach(el => obs.observe(el));

    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  // GSAP scroll animations
  useEffect(() => {
    const fadeUp = (sel, stagger = 0.1) => {
      gsap.utils.toArray(sel).forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: 'power3.out',
            delay: i * stagger,
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    };

    // Hero stat counter
    const statEls = document.querySelectorAll('.hstat-n');
    statEls.forEach(el => {
      const target = parseInt(el.dataset.val || '0');
      const suffix = el.dataset.suffix || '';
      gsap.fromTo({ val: 0 }, { val: target }, {
        duration: 2, delay: 1.6, ease: 'power2.out',
        onUpdate: function () { el.innerHTML = `${Math.round(this.targets()[0].val)}<em style="font-style:normal;color:#7c5cfc">${suffix}</em>`; },
      });
    });

    // Scroll-triggered reveals
    fadeUp('.glass', 0.08);
    fadeUp('.sec-tag', 0);
    fadeUp('.sec-h', 0);
    fadeUp('.sec-sub', 0);

    // Project cards 3D tilt
    document.querySelectorAll('.proj-card,.auto-card,.srv-card,.why-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const rx = ((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)) * -6;
        const ry = ((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)) * 6;
        gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.4, ease: 'power2.out', transformPerspective: 800 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power3.out' });
      });
    });

    // Magnetic buttons
    document.querySelectorAll('.btn-primary,.btn-outline').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        gsap.to(btn, { x: dx * 0.22, y: dy * 0.22, duration: 0.4, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
      });
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scrollBar" className="scroll-bar" />

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />

      <Hero scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <Services />
      <Skills />
      <Projects />
      <WhyHireMe />
      <CTA scrollTo={scrollTo} />
      <Experience />
      <Contact />
      <Footer scrollTo={scrollTo} />

      {/* Scroll to top */}
      <div
        className={`scroll-top ${scrolled ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >↑</div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919943269660?text=Hi%20Naveen!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        className="float-wa-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.818 6.51L4 29l7.67-1.79A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z" fill="#fff"/>
          <path d="M21.5 18.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" fill="#25d366"/>
        </svg>
        <span className="float-wa-label">Chat with me</span>
        <span className="float-wa-pulse" />
      </a>

      <style>{`
        .float-wa-btn {
          position: fixed;
          bottom: 28px;
          left: 28px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25d366, #128c3b);
          color: #fff;
          text-decoration: none;
          padding: 13px 20px 13px 16px;
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.3);
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.2px;
          transition: transform .22s, box-shadow .22s, padding .22s;
          overflow: hidden;
        }
        .float-wa-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 14px 40px rgba(37,211,102,0.5), 0 4px 12px rgba(0,0,0,0.3);
        }
        .float-wa-label {
          white-space: nowrap;
        }
        .float-wa-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50px;
          background: rgba(255,255,255,0.18);
          animation: waPulse 2s ease-out infinite;
          pointer-events: none;
        }
        @keyframes waPulse {
          0%   { transform: scale(1); opacity: 0.6; }
          70%  { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @media(max-width:600px){
          .float-wa-btn { padding: 12px; border-radius: 50%; left: 20px; bottom: 20px; }
          .float-wa-label { display: none; }
        }
      `}</style>
    </>
  );
};

export default Home;
