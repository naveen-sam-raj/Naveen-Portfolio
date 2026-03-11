import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────────
   NAVEEN SAM RAJ — Portfolio v3
   Theme: DRC — Cream / Navy / Gold
   Animations: GSAP + ScrollTrigger
───────────────────────────────────────────────────────────────── */

const Home = () => {
  const form       = useRef();
  const heroRef    = useRef();
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_zcx7jv5",
        "template_fca8rm9",
        form.current,
        "wUsO6V4EJSmz7scT7"
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        e.target.reset();
      })
      .catch(() => {
        setSending(false);
        alert("Failed. Try again.");
      });
  };

  // ── GSAP Hero Animations ──────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero badge slides down
      gsap.fromTo(".hero-badge",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // "Hey there" fades up
      gsap.fromTo(".hero-hi",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.5 }
      );

      // Name splits + staggers
      gsap.fromTo(".hero-name",
        { y: 80, opacity: 0, skewY: 4 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.1, ease: "power4.out", delay: 0.75 }
      );

      // Role text
      gsap.fromTo(".hero-role",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 1.2 }
      );

      // Social pills stagger
      gsap.fromTo(".hero-soc .soc",
        { y: 20, opacity: 0, scale: 0.85 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)", stagger: 0.1, delay: 1.5 }
      );

      // Buttons
      gsap.fromTo(".hero-btns .btn-p, .hero-btns .btn-o",
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)", stagger: 0.12, delay: 1.7 }
      );

      // Stats bar
      gsap.fromTo(".hero-stats",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 2.0 }
      );

      // Stats numbers count up
      gsap.delayedCall(2.1, () => {
        document.querySelectorAll(".hs-num").forEach((el) => {
          const target = parseInt(el.dataset.target, 10);
          gsap.fromTo(el, { innerText: 0 }, {
            innerText: target, duration: 1.5, ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate() { el.innerText = Math.floor(parseFloat(el.innerText)); },
          });
        });
      });

      // Floating particles
      gsap.utils.toArray(".hero-particle").forEach((el, i) => {
        gsap.to(el, {
          y: -50 - i * 12,
          x: (i % 2 === 0 ? 1 : -1) * (20 + i * 6),
          opacity: 0,
          duration: 2.5 + i * 0.3,
          ease: "power1.out",
          repeat: -1,
          delay: i * 0.5,
        });
      });

      // Scroll hint
      gsap.fromTo(".scroll-hint",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 2.5 }
      );

    }, heroRef);
    return () => ctx.revert();
  }, []);

  // ── GSAP Scroll Animations ────────────────────────────────────
  useEffect(() => {
    // Section headings — slide from top
    gsap.utils.toArray(".reveal-top").forEach((el, i) => {
      gsap.fromTo(el,
        { y: -50, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
          delay: (i % 3) * 0.06,
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    });

    // Cards — slide from left
    gsap.utils.toArray(".reveal-left").forEach((el, i) => {
      gsap.fromTo(el,
        { x: -80, opacity: 0, scale: 0.96 },
        {
          x: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out",
          delay: i * 0.06,
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    });

    // Cards — slide from right
    gsap.utils.toArray(".reveal-right").forEach((el, i) => {
      gsap.fromTo(el,
        { x: 80, opacity: 0, scale: 0.96 },
        {
          x: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out",
          delay: i * 0.06,
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    });

    // Cards — fade up
    gsap.utils.toArray(".reveal-up").forEach((el, i) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    });

    // Photo — scale in
    gsap.fromTo(".photo-anim",
      { scale: 0.85, opacity: 0, rotateY: 8 },
      {
        scale: 1, opacity: 1, rotateY: 0, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: ".photo-anim", start: "top 85%" },
      }
    );

    // Skill bars animate width on scroll
    ScrollTrigger.create({
      trigger: "#skills",
      start: "top 80%",
      onEnter: () => {
        document.querySelectorAll(".bf").forEach((b) => {
          gsap.to(b, { width: b.dataset.w, duration: 1.6, ease: "power3.out" });
        });
      },
    });

    // Scroll tracker for nav highlight
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const secObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting && e.target.id) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((el) => secObs.observe(el));

    // Fallback reveal
    const fb = setTimeout(() => {
      document.querySelectorAll(".reveal-top,.reveal-left,.reveal-right,.reveal-up")
        .forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
    }, 4000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      secObs.disconnect();
      clearTimeout(fb);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            if (e.target.id) setActiveSection(e.target.id);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );
    const allRv = document.querySelectorAll(".rv, section[id]");
    allRv.forEach((el) => obs.observe(el));

    // Fallback: force all rv elements visible after 3s in case observer misses any
    const fallback = setTimeout(() => {
      document.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
    }, 3000);

    const barObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.querySelectorAll(".bf").forEach((b) => {
              b.style.width = b.dataset.w;
            });
        });
      },
      { threshold: 0.2 }
    );
    const sk = document.getElementById("skills");
    if (sk) barObs.observe(sk);

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
      barObs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  const skills = [
    { name: "HTML & CSS",   level: 90, icon: "🌐" },
    { name: "JavaScript",   level: 50, icon: "⚡" },
    { name: "React.js",     level: 30, icon: "⚛️" },
    { name: "Node.js",      level: 30, icon: "🟢" },
    { name: "Django",       level: 40, icon: "🐍" },
    { name: "MySQL",        level: 40, icon: "🗃️" },
    { name: "MongoDB",      level: 60, icon: "🍃" },
    { name: "Git & Tools",  level: 70, icon: "🔧" },
  ];

  const projects = [
    {
      title: "Furniture eCommerce",
      subtitle: "Shopping Platform",
      stack: ["React", "CSS", "Vercel"],
      desc: "Fully responsive furniture shopping platform with product listings, cart, and live checkout experience.",
      liveLink: "https://furniture-pied-sigma.vercel.app/",
      githubLink: "https://github.com/naveen-sam-raj/furniture",
      emoji: "🛋️",
      hasLive: true,
    },
    {
      title: "Simple Calculator",
      subtitle: "Smart UI App",
      stack: ["HTML", "CSS", "JavaScript"],
      desc: "Clean, functional calculator with keyboard input support and smooth UI transitions.",
      liveLink: "https://calculator-ten-liard-16.vercel.app/",
      githubLink: "https://github.com/naveen-sam-raj/Calculator",
      emoji: "🧮",
      hasLive: true,
    },
    {
      title: "NoteFlow",
      subtitle: "MERN Stack Notes App",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      desc: "Full-stack MERN notes app with user authentication, real-time sync, and secure user-specific data storage.",
      liveLink: "https://notes-app-naveen.vercel.app",
      githubLink: "https://github.com/naveen-sam-raj/notes-app",
      emoji: "📝",
      hasLive: true,
    },
    {
      title: "DRC Website",
      subtitle: "Church Community",
      stack: ["React", "Vite", "Vercel"],
      desc: "Church community website with gallery, events, services sections and life at DRC photo gallery.",
      liveLink: "https://drc-nine.vercel.app",
      githubLink: "https://github.com/naveen-sam-raj/DRC",
      emoji: "⛪",
      hasLive: true,
    },
    {
      title: "Online Management System",
      subtitle: "Figma UI/UX Design",
      stack: ["Figma", "UI Design", "Prototyping"],
      desc: "Detailed UI/UX design for an e-learning platform — includes course modules, student dashboard, and quiz screens in Figma.",
      liveLink: null,
      githubLink: "https://github.com/naveen-sam-raj/Online-Management-system",
      emoji: "🎨",
      hasLive: false,
      isFigma: true,
    },
  ];

  const tools = [
    "Git", "GitHub", "Vercel", "Render", "Figma",
    "VS Code", "Postman", "REST API", "Tailwind CSS",
    "Bootstrap", "Linux",
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap');

        *,*::before,*::after { box-sizing:border-box; margin:0; padding:0 }

        :root {
          --bg:      #fdfaf4;
          --bg2:     #fff8e7;
          --bg3:     #ffffff;
          --surf:    #ffffff;
          --surf2:   #f0f4ff;
          --acc:     #1a237e;
          --acc2:    #283593;
          --gold:    #b8860b;
          --gold2:   #d4a017;
          --gold3:   #e8c547;
          --acc-dim: rgba(26,35,126,0.06);
          --acc-bord:rgba(26,35,126,0.14);
          --gold-dim: rgba(184,134,11,0.12);
          --gold-bord:rgba(184,134,11,0.25);
          --white:   #1a237e;
          --text:    #455a64;
          --muted:   #78909c;
          --bord:    rgba(26,35,126,0.1);
          --bord2:   rgba(184,134,11,0.2);
          --r:       10px;
          --r2:      16px;
          --font:    'Inter', sans-serif;
          --mono:    'Fira Code', monospace;
        }

        html { scroll-behavior: smooth }
        body {
          background: var(--bg);
          font-family: var(--font);
          color: var(--text);
          overflow-x: hidden;
        }
        .gold-gradient {
          background: linear-gradient(130deg, #b8860b, #d4a017, #e8c547, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        a { text-decoration: none; color: inherit }

        ::-webkit-scrollbar { width: 4px }
        ::-webkit-scrollbar-track { background: #e8eaf6 }
        ::-webkit-scrollbar-thumb { background: #3949ab; border-radius: 4px }

        /* ── REVEAL ── */
        .rv {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(.22,1,.36,1),
                      transform 0.65s cubic-bezier(.22,1,.36,1);
        }
        .rv.d1 { transition-delay: .1s }
        .rv.d2 { transition-delay: .2s }
        .rv.d3 { transition-delay: .3s }
        .rv.d4 { transition-delay: .4s }
        .rv.d5 { transition-delay: .5s }
        .rv.in  { opacity: 1; transform: none }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 64px; padding: 0 72px;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.3s;
        }
        .nav.on {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(184,134,11,0.15);
          box-shadow: 0 2px 24px rgba(26,35,126,0.08);
        }

        .logo {
          font-size: 18px; font-weight: 800;
          color: var(--acc); letter-spacing: -0.5px;
          display: flex; align-items: baseline; gap: 1px;
        }
        .logo em { font-style: normal; color: var(--gold) }

        .nav-links { display: flex; gap: 2px }
        .nl {
          padding: 7px 16px; font-size: 13px; font-weight: 500;
          color: var(--muted); cursor: pointer;
          border-radius: 6px; transition: all 0.2s;
          text-transform: capitalize; letter-spacing: 0.2px;
        }
        .nl:hover  { color: var(--acc); background: var(--acc-dim) }
        .nl.active { color: var(--acc); background: var(--acc-dim); font-weight: 700 }

        .hire-btn {
          padding: 9px 22px;
          background: linear-gradient(135deg, #1a237e, #3949ab);
          color: #fff; font-size: 13px; font-weight: 700;
          border-radius: 99px; cursor: pointer; border: none;
          font-family: var(--font); transition: all 0.25s; letter-spacing: 0.3px;
          box-shadow: 0 4px 16px rgba(26,35,126,0.25);
        }
        .hire-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(26,35,126,0.35); }

        .hbg { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:6px }
        .hbg span { width:22px; height:1.5px; background:var(--muted); border-radius:2px }

        .mob-nav {
          position: fixed; top: 64px; left: 0; right: 0;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(184,134,11,0.18);
          box-shadow: 0 8px 32px rgba(26,35,126,0.1);
          z-index: 99; padding: 14px 24px;
          display: flex; flex-direction: column; gap: 4px;
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        .mob-nl {
          padding: 12px 16px; font-size: 14px; font-weight: 500;
          color: var(--muted); cursor: pointer;
          border-radius: var(--r); transition: all 0.2s;
          text-transform: capitalize;
        }
        .mob-nl:hover { background: var(--acc-dim); color: var(--acc) }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; text-align: center;
          position: relative; overflow: hidden;
          padding: 100px 24px 80px;
        }

        /* DRC-style subtle diagonal pattern */
        .hero::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(135deg, rgba(26,35,126,0.03) 25%, transparent 25%),
            linear-gradient(225deg, rgba(26,35,126,0.03) 25%, transparent 25%),
            linear-gradient(315deg, rgba(26,35,126,0.03) 25%, transparent 25%),
            linear-gradient(45deg, rgba(26,35,126,0.03) 25%, transparent 25%);
          background-size: 40px 40px;
        }

        /* soft navy radial behind */
        .hero-glow {
          position: absolute; pointer-events: none;
          width: 700px; height: 700px; border-radius: 50%;
          background: radial-gradient(circle, rgba(26,35,126,0.06) 0%, transparent 65%);
          top: 50%; left: 50%; transform: translate(-50%, -60%);
          animation: glow-pulse 8s ease-in-out infinite alternate;
        }
        @keyframes glow-pulse {
          from { opacity: 0.5; transform: translate(-50%,-60%) scale(0.9) }
          to   { opacity: 1;   transform: translate(-50%,-60%) scale(1.1) }
        }

        .hero-inner { position: relative; z-index: 1; max-width: 820px }

        /* Code tag */
        .hero-code {
          font-family: var(--mono); font-size: 13px;
          color: var(--gold); margin-bottom: 28px;
          display: flex; align-items: center; gap: 8px; justify-content: center;
        }
        .code-bracket { color: var(--acc); font-size: 16px; opacity: 0.5 }

        /* Big greeting */
        .hero-hi {
          font-size: clamp(1rem, 2vw, 1.1rem); font-weight: 500;
          color: var(--muted); margin-bottom: 10px;
          letter-spacing: 0.3px;
        }

        /* Name */
        .hero-name {
          font-size: clamp(3.4rem, 9vw, 8rem);
          font-weight: 900; color: var(--acc);
          line-height: 0.92; letter-spacing: -4px; margin-bottom: 20px;
        }
        .hero-name .line2 {
          background: linear-gradient(130deg, #b8860b, #d4a017, #e8c547, #b8860b);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; display: block;
        }

        /* Role */
        .hero-role {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          font-weight: 400; color: var(--muted);
          margin-bottom: 44px; line-height: 1.7;
        }
        .hero-role strong { color: var(--acc); font-weight: 700 }

        /* Buttons — GSAP animates individually */
        .hero-btns {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .btn-p {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 36px;
          background: linear-gradient(135deg, #1a237e, #3949ab); color: #fff;
          font-size: 14px; font-weight: 700; border-radius: 99px;
          cursor: pointer; border: none; font-family: var(--font);
          transition: all 0.25s; letter-spacing: 0.3px;
          box-shadow: 0 6px 24px rgba(26,35,126,0.25);
        }
        .btn-p:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(26,35,126,0.35) }

        .btn-o {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 36px;
          background: transparent; color: var(--acc);
          font-size: 14px; font-weight: 600; border-radius: 99px;
          cursor: pointer; border: 2px solid var(--acc);
          font-family: var(--font); transition: all 0.25s;
        }
        .btn-o:hover { background: var(--acc); color: #fff; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(26,35,126,0.2) }

        /* Socials — GSAP animates .soc individually */
        .hero-soc {
          display: flex; gap: 8px; justify-content: center; margin-bottom: 56px;
        }
        .soc {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; border: 1px solid rgba(26,35,126,0.18);
          border-radius: 99px; font-size: 12px; font-weight: 600;
          color: var(--acc); cursor: pointer; background: #fff;
          transition: all 0.22s; letter-spacing: 0.4px;
          box-shadow: 0 2px 8px rgba(26,35,126,0.08);
        }
        .soc:hover { border-color: var(--acc); background: var(--acc-dim); transform: translateY(-2px); box-shadow: 0 6px 16px rgba(26,35,126,0.15) }

        /* Stats — GSAP animates */
        .hero-stats {
          display: flex; align-items: stretch; justify-content: center;
          border: 1px solid rgba(184,134,11,0.2); border-radius: var(--r2);
          background: #fff; overflow: hidden;
          width: fit-content; margin: 0 auto;
          box-shadow: 0 4px 24px rgba(26,35,126,0.08);
        }
        .hs {
          padding: 20px 34px; text-align: center;
          border-right: 1px solid rgba(184,134,11,0.15); position: relative;
        }
        .hs:last-child { border-right: none }
        .hs-n {
          font-size: 1.65rem; font-weight: 800;
          color: var(--acc); line-height: 1;
        }
        .hs-n em { font-style: normal; color: var(--gold) }
        .hs-l { font-size: 11px; color: var(--muted); margin-top: 5px; letter-spacing: 0.8px; text-transform: uppercase }

        /* Scroll hint — GSAP animates */
        .scroll-hint {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
        }
        .scroll-hint span { font-size: 10px; color: var(--muted); letter-spacing: 3px; text-transform: uppercase }
        .scroll-arrow { width: 1px; height: 44px; background: linear-gradient(180deg, var(--gold), transparent); animation: drop 2s ease-in-out infinite }
        @keyframes drop {
          0%   { transform: scaleY(0); transform-origin: top }
          50%  { transform: scaleY(1); transform-origin: top }
          51%  { transform: scaleY(1); transform-origin: bottom }
          100% { transform: scaleY(0); transform-origin: bottom }
        }

        /* ── WRAP ── */
        .wrap { max-width: 1160px; margin: 0 auto; padding: 0 72px }

        /* ── SECTION HEADER ── */
        .sec-label {
          font-family: var(--mono); font-size: 11px; font-weight: 700;
          color: var(--gold); letter-spacing: 3px; text-transform: uppercase;
          margin-bottom: 14px; display: flex; align-items: center; gap: 10px;
        }
        .sec-label::before {
          content: ''; width: 28px; height: 2px;
          background: linear-gradient(90deg, #b8860b, #e8c547); border-radius: 1px; flex-shrink: 0;
        }
        .sec-h {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          color: var(--acc); letter-spacing: -1.5px; line-height: 1.05;
        }
        .sec-h em {
          font-style: normal;
          background: linear-gradient(130deg, #b8860b, #d4a017, #e8c547);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sec-sub { font-size: 15px; color: var(--muted); line-height: 1.8; margin-top: 14px; max-width: 500px }
        .sec-head { margin-bottom: 60px }

        /* ── ABOUT ── */
        .about-grid { display: grid; grid-template-columns: 380px 1fr; gap: 80px; align-items: center }

        .photo-wrap {
          position: relative; border-radius: 18px; overflow: hidden;
          border: 1px solid rgba(184,134,11,0.2);
          aspect-ratio: 4/5;
          box-shadow: 0 12px 60px rgba(26,35,126,0.12);
        }
        .photo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block }
        .photo-wrap::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(to top, rgba(26,35,126,0.15), transparent 50%);
        }
        .photo-badge {
          position: absolute; bottom: -16px; left: 50%; transform: translateX(-50%);
          background: #fff; border: 1px solid rgba(184,134,11,0.3);
          border-radius: 99px; padding: 9px 20px;
          font-size: 12px; font-weight: 600; color: var(--acc); white-space: nowrap;
          display: flex; align-items: center; gap: 8px; z-index: 2;
          box-shadow: 0 8px 24px rgba(26,35,126,0.12);
        }
        .online { width: 7px; height: 7px; background: #22c55e; border-radius: 50%; animation: blink 1.5s infinite; box-shadow: 0 0 6px #22c55e }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .ap {
          font-size: 15px; line-height: 1.85; color: var(--text); margin-bottom: 16px;
        }
        .ap strong { color: var(--white); font-weight: 600 }

        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 32px;
        }
        .astat {
          background: #fff; border: 1px solid rgba(26,35,126,0.1);
          border-radius: var(--r2); padding: 20px 18px; transition: all 0.25s;
          box-shadow: 0 2px 12px rgba(26,35,126,0.05);
        }
        .astat:hover { border-color: rgba(184,134,11,0.3); transform: translateY(-3px); box-shadow: 0 8px 28px rgba(26,35,126,0.1) }
        .astat-n { font-size: 1.9rem; font-weight: 800; color: var(--acc); line-height: 1 }
        .astat-n em { font-style: normal; color: var(--gold) }
        .astat-l { font-size: 11.5px; color: var(--muted); margin-top: 4px }

        .edu-card {
          grid-column: 1/-1;
          background: linear-gradient(135deg, #e8eaf6, #fdfaf4); border: 1px solid rgba(26,35,126,0.12);
          border-radius: var(--r2); padding: 18px 22px;
          display: flex; align-items: center; gap: 14px; transition: border-color 0.25s;
        }
        .edu-card:hover { border-color: rgba(184,134,11,0.3) }
        .edu-icon { font-size: 26px }
        .edu-t { font-size: 14px; font-weight: 700; color: var(--acc) }
        .edu-s { font-size: 12px; color: var(--muted); margin-top: 3px }

        /* ── SKILLS ── */
        .sk-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 26px 80px }
        .sk-row { }
        .sk-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 9px }
        .sk-name { display: flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 600; color: var(--white) }
        .sk-ic { font-size: 15px }
        .sk-pc { font-family: var(--mono); font-size: 12px; color: var(--gold); font-weight: 600 }
        .sk-bar { height: 4px; background: rgba(26,35,126,0.08); border-radius: 99px; overflow: hidden }
        .bf {
          height: 100%; width: 0;
          background: linear-gradient(90deg, #1a237e, #3949ab, #b8860b);
          border-radius: 99px;
          transition: width 1.6s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 0 8px rgba(26,35,126,0.3);
        }
        .tools-wrap { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 50px }
        .chip {
          padding: 7px 16px; border: 1px solid rgba(26,35,126,0.12); border-radius: 99px;
          font-size: 12.5px; font-weight: 500; color: var(--acc); background: #fff;
          transition: all 0.22s; cursor: default;
          box-shadow: 0 1px 4px rgba(26,35,126,0.06);
        }
        .chip:hover { border-color: var(--gold); color: var(--gold); background: var(--gold-dim); transform: translateY(-2px) }

        /* ── PROJECTS ── */
        .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px }

        .proj-card {
          background: #fff; border: 1px solid rgba(26,35,126,0.1);
          border-radius: var(--r2); padding: 26px 22px;
          transition: all 0.3s; display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          box-shadow: 0 2px 12px rgba(26,35,126,0.05);
        }
        .proj-card::after {
          content: ''; position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #1a237e, #3949ab, #b8860b);
          opacity: 0; transition: opacity 0.3s;
        }
        .proj-card:hover {
          transform: translateY(-6px);
          border-color: rgba(184,134,11,0.25);
          box-shadow: 0 20px 56px rgba(26,35,126,0.12);
        }
        .proj-card:hover::after { opacity: 1 }

        .proj-emoji { font-size: 32px; margin-bottom: 14px; display: block; line-height: 1 }
        .proj-stack { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 12px }
        .proj-tag {
          font-size: 10px; font-weight: 700; padding: 3px 10px;
          border: 1px solid rgba(26,35,126,0.15); border-radius: 99px;
          color: var(--acc); background: var(--acc-dim); letter-spacing: 0.5px;
        }
        .proj-title { font-size: 1.1rem; font-weight: 700; color: var(--acc); margin-bottom: 3px; letter-spacing: -0.3px }
        .proj-sub { font-family: var(--mono); font-size: 10.5px; color: var(--gold); margin-bottom: 10px; letter-spacing: 0.5px; font-weight: 600 }
        .proj-desc { font-size: 13px; color: var(--muted); line-height: 1.7; flex: 1; margin-bottom: 20px }

        .proj-links { display: flex; gap: 8px; align-items: center; flex-wrap: wrap }

        .proj-live {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 18px; background: linear-gradient(135deg, #1a237e, #3949ab); color: #fff;
          font-size: 12px; font-weight: 700; border-radius: 99px;
          transition: all 0.22s; cursor: pointer; border: none; font-family: var(--font);
          box-shadow: 0 3px 12px rgba(26,35,126,0.25);
        }
        .proj-live:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,35,126,0.35) }

        .proj-gh {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border: 1px solid rgba(26,35,126,0.15);
          background: transparent; color: var(--acc);
          font-size: 12px; font-weight: 600; border-radius: 99px;
          transition: all 0.22s; cursor: pointer; font-family: var(--font);
        }
        .proj-gh:hover { border-color: var(--gold); color: var(--gold); background: var(--gold-dim) }

        .wip-tag {
          font-family: var(--mono); font-size: 11px; color: #b45309;
          background: rgba(180,83,9,0.08); border: 1px solid rgba(180,83,9,0.2);
          border-radius: 99px; padding: 5px 12px; letter-spacing: 0.3px;
        }
        .figma-tag {
          font-family: var(--mono); font-size: 11px; color: #6d28d9;
          background: rgba(109,40,217,0.08); border: 1px solid rgba(109,40,217,0.2);
          border-radius: 99px; padding: 5px 12px; letter-spacing: 0.3px;
        }

        .view-all-row { display: flex; justify-content: center; margin-top: 40px }
        .view-all {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 32px; border: 2px solid var(--acc);
          border-radius: 99px; color: var(--acc);
          font-size: 13px; font-weight: 700; transition: all 0.25s;
          background: transparent; font-family: var(--font);
        }
        .view-all:hover { background: var(--acc); color: #fff; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,35,126,0.2) }

        /* ── CONTACT ── */
        .ct-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 80px; align-items: start }

        .ct-item {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 18px; border: 1px solid rgba(26,35,126,0.1);
          border-radius: var(--r2); background: #fff;
          margin-bottom: 10px; transition: all 0.25s;
          box-shadow: 0 2px 10px rgba(26,35,126,0.05);
        }
        .ct-item:hover { border-color: rgba(184,134,11,0.3); transform: translateX(4px) }
        .ct-icon {
          width: 42px; height: 42px;
          background: var(--acc-dim); border: 1px solid rgba(26,35,126,0.12);
          border-radius: var(--r); display: flex; align-items: center;
          justify-content: center; font-size: 18px; flex-shrink: 0;
        }
        .ct-label { font-size: 10px; color: var(--gold); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 700; margin-bottom: 3px }
        .ct-val { font-size: 14px; color: var(--acc); font-weight: 600 }

        .ct-soc-row { display: flex; gap: 8px; margin-top: 26px }

        .form-box {
          background: #fff; border: 1px solid rgba(184,134,11,0.18);
          border-radius: var(--r2); padding: 30px;
          box-shadow: 0 8px 40px rgba(26,35,126,0.08);
        }
        .fw { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px }
        .fl { font-size: 10.5px; color: var(--muted); font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase }
        .fi {
          background: #fafafa; border: 1.5px solid #e0e0e0;
          border-radius: var(--r); padding: 13px 16px;
          font-family: var(--font); font-size: 14px;
          color: var(--acc); outline: none; width: 100%; resize: none; transition: all 0.25s;
        }
        .fi:focus { border-color: #3949ab; box-shadow: 0 0 0 3px rgba(57,73,171,0.1); background: #fff }
        .fi::placeholder { color: #aaa }
        .fr2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px }
        .sb {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #1a237e, #3949ab);
          color: #fff; font-family: var(--font); font-size: 14px; font-weight: 700;
          border: none; border-radius: 99px;
          cursor: pointer; transition: all 0.3s; margin-top: 4px;
          box-shadow: 0 4px 20px rgba(26,35,126,0.25);
        }
        .sb:hover { transform: translateY(-2px); box-shadow: 0 12px 36px rgba(26,35,126,0.35) }
        .sb:disabled { opacity: 0.45; transform: none; cursor: not-allowed }

        /* ── FOOTER ── */
        .footer {
          background: var(--acc); border-top: 3px solid var(--gold);
          padding: 32px 72px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 14px;
        }
        .foot-logo { font-size: 16px; font-weight: 800; color: var(--gold) }
        .foot-logo em { font-style: normal; color: rgba(255,255,255,0.7) }
        .foot-copy { font-size: 12.5px; color: rgba(255,255,255,0.6) }
        .foot-soc { display: flex; gap: 8px }

        /* ── MOBILE ── */
        @media(max-width:1024px) {
          .proj-grid { grid-template-columns: 1fr 1fr }
        }
        @media(max-width:900px) {
          .nav { padding: 0 24px }
          .nav-links, .hire-btn { display: none }
          .hbg { display: flex }
          .wrap { padding: 0 24px }
          .about-grid { grid-template-columns: 1fr; gap: 50px }
          .photo-wrap { aspect-ratio: auto; height: 300px }
          .sk-grid { grid-template-columns: 1fr; gap: 20px }
          .proj-grid { grid-template-columns: 1fr }
          .ct-grid { grid-template-columns: 1fr; gap: 48px }
          .fr2 { grid-template-columns: 1fr }
          .footer { padding: 24px; flex-direction: column; text-align: center }
          .hero-stats { flex-wrap: wrap }
          .hs { border-right: none; border-bottom: 1px solid var(--bord) }
          .hs:last-child { border-bottom: none }
        }
        @media(max-width:480px) {
          .hero-btns { flex-direction: column; align-items: center }
          .btn-p, .btn-o { width: 100%; justify-content: center }
          .hero-soc { flex-wrap: wrap }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? "on" : ""}`}>
        <div className="logo">Naveen<em>.</em></div>
        <div className="nav-links">
          {navLinks.map((l) => (
            <div
              key={l}
              className={`nl ${activeSection === l ? "active" : ""}`}
              onClick={() => scrollTo(l)}
            >
              {l}
            </div>
          ))}
        </div>
        <button className="hire-btn" onClick={() => scrollTo("contact")}>
          Hire Me
        </button>
        <div className="hbg" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      {menuOpen && (
        <div className="mob-nav">
          {navLinks.map((l) => (
            <div key={l} className="mob-nl" onClick={() => scrollTo(l)}>{l}</div>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-glow" />

        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="hero-particle" style={{
            position: "absolute", width: 7, height: 7, borderRadius: "50%",
            background: i % 2 === 0 ? "#1a237e" : "#d4a017", opacity: 0.5,
            left: `${8 + i * 9}%`, bottom: `${20 + (i % 4) * 14}%`,
            pointerEvents: "none",
          }} />
        ))}

        <div className="hero-inner">
          {/* Code label */}
          <div className="hero-badge hero-code">
            <span className="code-bracket">&lt;</span>
            developer role="fullstack"
            <span className="code-bracket">/&gt;</span>
          </div>

          <div className="hero-hi">Hey there — I'm</div>

          <h1 className="hero-name">
            Naveen
            <span className="line2">Sam Raj H</span>
          </h1>

          <p className="hero-role">
            <strong>Full Stack Web Developer</strong> based in Tamil Nadu, India.
            <br />I build fast, responsive, and modern web applications.
          </p>

          {/* Socials */}
          <div className="hero-soc">
            <a href="https://www.linkedin.com/in/naveensamraj" className="soc" target="_blank" rel="noreferrer">
              in&nbsp; LinkedIn
            </a>
            <a href="https://github.com/naveen-sam-raj" className="soc" target="_blank" rel="noreferrer">
              ⌥&nbsp; GitHub
            </a>
            <div className="soc" onClick={() => scrollTo("contact")}>
              ✉&nbsp; Email Me
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-btns">
            <button className="btn-p" onClick={() => scrollTo("projects")}>View My Projects →</button>
            <a href="/Naveen Sam Raj Resume.pdf" download="Naveen Sam Raj Resume.pdf" className="btn-o">⬇ Download Resume</a>
          </div>

          {/* Stats — GSAP counter */}
          <div className="hero-stats">
            {[
              ["6", "Projects"],
              ["8", "Tech Stacks"],
              ["5", "Papers"],
              ["2", "Years"],
            ].map(([n, l]) => (
              <div key={l} className="hs">
                <div className="hs-n">
                  <span className="hs-num" data-target={n}>{n}</span>
                  <em>+</em>
                </div>
                <div className="hs-l">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 0", background: "var(--bg2)" }}>
        <div className="wrap">
          <div className="about-grid">
            {/* Photo */}
            <div className="photo-anim" style={{ position: "relative" }}>
              <div className="photo-wrap">
                <img src="/images/Naveen.jpg" alt="Naveen Sam Raj H" />
              </div>
              <div className="photo-badge">
                <span className="online" />
                Available for work
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="sec-label reveal-top">About Me</div>
              <h2 className="sec-h reveal-top">
                Passionate developer,<br /><em>lifelong learner</em>
              </h2>

              <p className="ap reveal-left" style={{ marginTop: "24px" }}>
                I'm <strong>H. Naveen Sam Raj</strong>, a Full Stack Web Developer pursuing{" "}
                <strong>Computer Science Engineering</strong>. I specialise in building
                responsive, performant web applications using React, Django, Node.js, and MongoDB.
              </p>
              <p className="ap reveal-right">
                From live-deployed projects to technical paper presentations, I constantly push my
                limits and explore new technologies to solve real-world problems.
              </p>
              <p className="ap reveal-left">
                Long-term goal: build my own <strong>tech-driven startup</strong> that makes a real impact.
              </p>

              <div className="about-stats reveal-up">
                {[
                  ["6+", "Projects Shipped"],
                  ["8+", "Tech Stacks"],
                  ["5+", "Papers Presented"],
                  ["2+", "Years Coding"],
                ].map(([n, l]) => (
                  <div key={l} className="astat">
                    <div className="astat-n">{n.replace("+", "")}<em>+</em></div>
                    <div className="astat-l">{l}</div>
                  </div>
                ))}
                <div className="edu-card">
                  <span className="edu-icon">🎓</span>
                  <div>
                    <div className="edu-t">B.E. Computer Science Engineering</div>
                    <div className="edu-s">Expected 2026 · Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "120px 0" }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label reveal-top">Skills</div>
            <h2 className="sec-h reveal-top">My <em>Tech Stack</em></h2>
            <p className="sec-sub reveal-top">Technologies I use to build modern full-stack web applications.</p>
          </div>

          <div className="sk-grid">
            {skills.map((s, i) => (
              <div key={s.name} className={`sk-row ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
                <div className="sk-top">
                  <span className="sk-name">
                    <span className="sk-ic">{s.icon}</span>
                    {s.name}
                  </span>
                  <span className="sk-pc">{s.level}%</span>
                </div>
                <div className="sk-bar">
                  <div className="bf" data-w={`${s.level}%`} />
                </div>
              </div>
            ))}
          </div>

          <div className="tools-wrap reveal-up">
            {tools.map((t, i) => (
              <span key={t} className="chip reveal-up">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "120px 0", background: "var(--bg2)" }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-label reveal-top">Projects</div>
            <h2 className="sec-h reveal-top">Things I've <em>Built</em></h2>
            <p className="sec-sub reveal-top">
              Real-world projects — designed, developed & shipped.
            </p>
          </div>

          <div className="proj-grid">
            {projects.map((p, i) => (
              <div key={p.title} className={`proj-card ${i % 3 === 0 ? "reveal-left" : i % 3 === 2 ? "reveal-right" : "reveal-up"}`}>
                <span className="proj-emoji">{p.emoji}</span>
                <div className="proj-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="proj-tag">{s}</span>
                  ))}
                </div>
                <div className="proj-title">{p.title}</div>
                <div className="proj-sub">{p.subtitle}</div>
                <p className="proj-desc">{p.desc}</p>

                <div className="proj-links">
                  {p.hasLive ? (
                    /* Goes DIRECTLY to the live deployed project */
                    <a
                      href={p.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-live"
                    >
                      Live Demo ↗
                    </a>
                  ) : p.isFigma ? (
                    <span className="figma-tag">🎨 Figma Design</span>
                  ) : (
                    <span className="wip-tag">🚧 In Progress</span>
                  )}
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-gh"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-row rv">
            <a
              href="https://github.com/naveen-sam-raj"
              target="_blank"
              rel="noreferrer"
              className="view-all"
            >
              View All Repos on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "120px 0" }}>
        <div className="wrap">
          <div className="ct-grid">
            <div>
              <div className="sec-label reveal-top">Contact</div>
              <h2 className="sec-h reveal-top">Let's work<br /><em>together</em></h2>
              <p className="reveal-top" style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", margin: "16px 0 32px" }}>
                Open to full-time roles, freelance work, and exciting collaborations.
                Reach out — I reply fast!
              </p>

              {[
                { icon: "✉️", l: "Email",    v: "hnaveensamraj@gmail.com" },
                { icon: "📱", l: "Phone",    v: "+91 9943269660" },
                { icon: "📍", l: "Location", v: "Tamil Nadu, India" },
              ].map((c) => (
                <div key={c.l} className="ct-item reveal-left">
                  <div className="ct-icon">{c.icon}</div>
                  <div>
                    <div className="ct-label">{c.l}</div>
                    <div className="ct-val">{c.v}</div>
                  </div>
                </div>
              ))}

              <div className="ct-soc-row reveal-up">
                <a href="https://www.linkedin.com/in/naveensamraj" className="soc" target="_blank" rel="noreferrer">
                  in&nbsp; LinkedIn
                </a>
                <a href="https://github.com/naveen-sam-raj" className="soc" target="_blank" rel="noreferrer">
                  ⌥&nbsp; GitHub
                </a>
              </div>
            </div>

            <div className="form-box reveal-right">
              <form ref={form} onSubmit={sendEmail}>
                <div className="fr2">
                  <div className="fw">
                    <label className="fl">Name</label>
                    <input name="name" type="text" placeholder="Your name" required className="fi" />
                  </div>
                  <div className="fw">
                    <label className="fl">Email</label>
                    <input name="email" type="email" placeholder="your@email.com" required className="fi" />
                  </div>
                </div>
                <div className="fw">
                  <label className="fl">Subject</label>
                  <input name="subject" type="text" placeholder="What's this about?" className="fi" />
                </div>
                <div className="fw">
                  <label className="fl">Message</label>
                  <textarea name="message" rows="5" placeholder="Tell me about your project..." required className="fi" />
                </div>
                <button type="submit" className="sb" disabled={sending}>
                  {sending ? "Sending..." : sent ? "✓ Sent!" : "Send Message →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="foot-logo">Naveen<em>.</em></div>
        <div className="foot-copy">© 2025 Naveen Sam Raj H · Built with ♥</div>
        <div className="foot-soc">
          <a href="https://www.linkedin.com/in/naveensamraj" className="soc" target="_blank" rel="noreferrer">in</a>
          <a href="https://github.com/naveen-sam-raj" className="soc" target="_blank" rel="noreferrer">⌥</a>
        </div>
      </footer>
    </>
  );
};

export default Home;
