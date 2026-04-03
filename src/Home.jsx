import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("All");

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm("service_zcx7jv5","template_fca8rm9",form.current,"wUsO6V4EJSmz7scT7")
      .then(() => { setSending(false); setSent(true); setTimeout(() => setSent(false), 4000); e.target.reset(); })
      .catch(() => { setSending(false); alert("Failed. Try again."); });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting && e.target.id) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((el) => obs.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    const fb = setTimeout(() => document.querySelectorAll(".rv").forEach((el) => el.classList.add("in")), 3000);
    return () => { obs.disconnect(); clearTimeout(fb); };
  }, []);

  const navLinks = ["home","about","skills","projects","experience","contact"];

  const skills = [
    { name: "HTML & CSS", icon: "🌐" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js",   icon: "⚛️" },
    { name: "Node.js",    icon: "🟢" },
    { name: "Django",     icon: "🐍" },
    { name: "MySQL",      icon: "🗃️" },
    { name: "MongoDB",    icon: "🍃" },
    { name: "Git & Tools",icon: "🔧" },
  ];

  const tools = ["Git","GitHub","Vercel","Render","Figma","VS Code","Postman","REST API","Tailwind CSS","Bootstrap","Linux"];

  const projects = [
    { title:"Furniture eCommerce", cat:"React",      stack:["React","CSS","Vercel"],               desc:"Fully responsive furniture shopping platform with product listings, cart, and live checkout.", live:"https://furniture-pied-sigma.vercel.app/",     gh:"https://github.com/naveen-sam-raj/furniture",    img:"/images/proj-furniture.png",  hasLive:true },
    { title:"Simple Calculator",   cat:"JavaScript", stack:["HTML","CSS","JS"],                    desc:"Clean calculator with keyboard support and smooth UI transitions.",                          live:"https://calculator-ten-liard-16.vercel.app/", gh:"https://github.com/naveen-sam-raj/Calculator",   img:"/images/proj-calculator.png", hasLive:true },
    { title:"NoteFlow",            cat:"MERN",       stack:["MongoDB","Express","React","Node.js"], desc:"Full-stack MERN notes app with authentication and real-time sync.",                          live:"https://notes-app-naveen.vercel.app",         gh:"https://github.com/naveen-sam-raj/notes-app",    img:"/images/proj-noteflow.png",   hasLive:true },
    { title:"DRC Website",         cat:"React",      stack:["React","Vite","Vercel"],               desc:"Church community website with gallery, events and services sections.",                        live:"https://drc-nine.vercel.app",                gh:"https://github.com/naveen-sam-raj/DRC",           img:"/images/proj-drc.png",        hasLive:true },
    { title:"Giftz",               cat:"MERN",       stack:["React","Node.js","MongoDB"],           desc:"Premium gift shop with cart, Firebase auth, product listings and admin panel.",               live:"https://giftz-shop.vercel.app",               gh:"https://github.com/naveen-sam-raj",               img:"/images/proj-giftz.png",      hasLive:true },
    { title:"WoodCraft",           cat:"React",      stack:["React","CSS","Vercel"],                desc:"Premium timber & wood business website with product listings, WhatsApp enquiry and modern design.", live:"https://wood-website-gold.vercel.app",         gh:"https://github.com/naveen-sam-raj",               img:"/images/proj-woodcraft.png",  hasLive:true },
    { title:"Sweet Crumbs Bakery", cat:"React",      stack:["React","CSS","Vercel"],                desc:"Artisan bakery landing page with menu, reviews, WhatsApp ordering and freshly baked daily showcase.", live:"https://backery-website-qc2h.vercel.app",      gh:"https://github.com/naveen-sam-raj",               img:"/images/proj-bakery.png",     hasLive:true },
  ];

  const experience = [
    { year:"2026", title:"B.E. Computer Science Engineering", org:"Tamil Nadu, India", desc:"Expected graduation. Specializing in Full Stack Web Development, DBMS, and Software Engineering.", type:"edu" },
    { year:"2025", title:"Technical Paper Presentations", org:"Various Colleges, Tamil Nadu", desc:"Presented 5+ research papers on emerging technologies at inter-collegiate symposiums.", type:"work" },
    { year:"2024", title:"Full Stack Developer (Freelance)", org:"Remote", desc:"Built and deployed multiple client projects using React, Node.js, MongoDB and Django.", type:"work" },
    { year:"2022", title:"Started Coding Journey", org:"Self-Taught", desc:"Began learning HTML, CSS and JavaScript. Built first projects and fell in love with web development.", type:"edu" },
  ];

  const process = [
    { num:"01", icon:"🎯", title:"Understand", desc:"I start by deeply understanding the problem, user needs, and project goals before writing a single line of code." },
    { num:"02", icon:"🎨", title:"Design", desc:"I create clean wireframes and UI prototypes that are intuitive, accessible, and visually stunning." },
    { num:"03", icon:"💻", title:"Develop", desc:"I build robust, scalable solutions using modern tech stacks — React, Node.js, Django, and MongoDB." },
    { num:"04", icon:"🚀", title:"Deploy", desc:"I ship to production with CI/CD pipelines, ensuring speed, reliability, and zero downtime." },
  ];

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };
  const cats = ["All","React","MERN","JavaScript"];
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.cat === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{
          --p:#7c3aed;--pd:#5b21b6;--p2:#a855f7;--plight:rgba(124,58,237,0.1);
          --bg:#f4f4f8;--white:#ffffff;
          --dark:#0f0f1a;--text:#374151;--muted:#6b7280;
          --r:16px;--r2:24px;--r3:32px;
          --font:'Inter',sans-serif;
          --shadow:0 4px 24px rgba(124,58,237,0.12);
          --shadow-lg:0 16px 60px rgba(124,58,237,0.18);
        }
        html{scroll-behavior:smooth}
        body{background:var(--bg);font-family:var(--font);color:var(--text);overflow-x:hidden}
        a{text-decoration:none;color:inherit}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:var(--bg)}
        ::-webkit-scrollbar-thumb{background:var(--p);border-radius:99px}

        .rv{opacity:0;transform:translateY(28px);transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)}
        .rv.d1{transition-delay:.12s}.rv.d2{transition-delay:.24s}.rv.d3{transition-delay:.36s}.rv.d4{transition-delay:.48s}.rv.d5{transition-delay:.6s}
        .rv.in{opacity:1;transform:none}

        /* ── NAV ── */
        .nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:72px;padding:0 48px;display:flex;align-items:center;justify-content:space-between;transition:all .35s}
        .nav.on{background:rgba(255,255,255,.95);backdrop-filter:blur(24px);box-shadow:0 1px 0 rgba(0,0,0,.06),0 4px 24px rgba(0,0,0,.04)}
        .logo{display:flex;align-items:center;gap:10px;font-size:18px;font-weight:800;color:var(--dark);letter-spacing:-0.5px}
        .logo-avatar{width:40px;height:40px;background:var(--p);border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:17px;font-weight:900;letter-spacing:0;flex-shrink:0}
        .nav-links{display:flex;gap:2px}
        .nl{padding:8px 18px;font-size:14px;font-weight:500;color:var(--muted);cursor:pointer;border-radius:var(--r);transition:all .2s}
        .nl:hover,.nl.active{color:var(--dark);background:rgba(0,0,0,.05)}
        .nl.active{font-weight:600}
        .contact-btn{padding:11px 26px;background:var(--p);color:#fff;font-size:14px;font-weight:600;border-radius:var(--r);cursor:pointer;border:none;font-family:var(--font);transition:all .25s;letter-spacing:-.1px}
        .contact-btn:hover{background:var(--pd);transform:translateY(-1px);box-shadow:0 8px 24px rgba(124,58,237,.35)}
        .hbg{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px}
        .hbg span{width:22px;height:2px;background:var(--muted);border-radius:2px;transition:all .3s}
        .mob-nav{position:fixed;top:72px;left:0;right:0;background:rgba(255,255,255,.98);backdrop-filter:blur(24px);border-bottom:1px solid rgba(0,0,0,.06);z-index:999;padding:12px 24px 20px;display:flex;flex-direction:column;gap:4px;box-shadow:0 8px 32px rgba(0,0,0,.08)}
        .mob-nl{padding:12px 16px;font-size:15px;font-weight:500;color:var(--muted);cursor:pointer;border-radius:var(--r);transition:all .2s;text-transform:capitalize}
        .mob-nl:hover{background:rgba(0,0,0,.04);color:var(--dark)}

        /* ── HERO ── */
        .hero{min-height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;background:var(--bg)}
        .hero-blob1{position:absolute;top:-200px;right:-100px;width:600px;height:600px;background:radial-gradient(circle,rgba(168,85,247,.25) 0%,transparent 70%);pointer-events:none;z-index:0}
        .hero-blob2{position:absolute;bottom:-150px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(134,239,172,.2) 0%,transparent 70%);pointer-events:none;z-index:0}
        .hero-inner{max-width:1260px;margin:0 auto;padding:120px 48px 80px;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;position:relative;z-index:1;width:100%}
        .hero-left{}
        .hero-greeting{font-size:15px;font-weight:500;color:var(--muted);margin-bottom:20px}
        .hero-name{font-size:clamp(2.8rem,5vw,4.2rem);font-weight:900;color:var(--dark);line-height:1.08;letter-spacing:-2.5px;margin-bottom:18px}
        .hero-role{font-size:16px;color:var(--muted);line-height:1.85;margin-bottom:36px;max-width:460px;font-weight:400}
        .hero-role u{text-decoration:underline;text-decoration-color:var(--p);text-underline-offset:3px;color:var(--text);font-weight:500}
        .hero-btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:64px}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;padding:14px 32px;background:var(--p);color:#fff;font-size:14px;font-weight:600;border-radius:var(--r);border:none;font-family:var(--font);cursor:pointer;transition:all .25s;box-shadow:0 4px 20px rgba(124,58,237,.3)}
        .btn-primary:hover{background:var(--pd);transform:translateY(-2px);box-shadow:0 10px 32px rgba(124,58,237,.42)}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;padding:13px 32px;background:transparent;color:var(--dark);font-size:14px;font-weight:600;border-radius:var(--r);border:1.5px solid rgba(15,15,26,.18);font-family:var(--font);cursor:pointer;transition:all .25s}
        .btn-outline:hover{border-color:var(--p);color:var(--p);background:var(--plight)}
        .hero-stats{display:flex;gap:40px}
        .hstat-n{font-size:2rem;font-weight:900;color:var(--dark);line-height:1;letter-spacing:-1px}
        .hstat-n em{font-style:normal;color:var(--p)}
        .hstat-l{font-size:12px;color:var(--muted);margin-top:4px;font-weight:500}

        .hero-right{display:flex;justify-content:flex-end;align-items:center}
        .hero-photo-card{position:relative;width:100%;max-width:480px;border-radius:var(--r3);overflow:hidden;background:linear-gradient(135deg,#ede9fe 0%,#e0d4fc 40%,#c4f5e9 100%);aspect-ratio:3/4;box-shadow:var(--shadow-lg)}
        .hero-photo-card img{width:100%;height:100%;object-fit:cover;object-position:center 10%;display:block}
        .hero-badge{position:absolute;bottom:28px;left:28px;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-radius:var(--r);padding:14px 18px;box-shadow:0 8px 32px rgba(0,0,0,.12);display:flex;align-items:center;gap:10px}
        .badge-dot{width:9px;height:9px;background:#22c55e;border-radius:50%;animation:pulse 1.8s infinite;flex-shrink:0}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(0.85)}}
        .badge-text{font-size:13px;font-weight:600;color:var(--dark)}
        .badge-sub{font-size:11px;color:var(--muted);margin-top:2px}

        /* ── SECTION BASE ── */
        .section{padding:110px 48px}
        .wrap{max-width:1260px;margin:0 auto}
        .sec-tag{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:var(--p);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;background:var(--plight);padding:6px 14px;border-radius:99px}
        .sec-h{font-size:clamp(2rem,4vw,3rem);font-weight:800;color:var(--dark);letter-spacing:-1.5px;line-height:1.1}
        .sec-sub{font-size:15.5px;color:var(--muted);line-height:1.8;margin-top:14px;max-width:520px}
        .sec-head{margin-bottom:64px}

        /* ── ABOUT ── */
        .about-bg{background:#fff}
        .about-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}
        .about-photo-wrap{position:relative}
        .about-img-box{border-radius:var(--r3);overflow:hidden;aspect-ratio:3/4;background:linear-gradient(135deg,#ede9fe,#e0d4fc,#c4f5e9);box-shadow:var(--shadow-lg)}
        .about-img-box img{width:100%;height:100%;object-fit:cover;object-position:center 15%;display:block}
        .about-float-card{position:absolute;bottom:-24px;right:-24px;background:#fff;border-radius:var(--r2);padding:20px 24px;box-shadow:var(--shadow-lg);border:1px solid rgba(0,0,0,.06)}
        .afc-row{display:flex;gap:24px}
        .afc-item{text-align:center}
        .afc-n{font-size:1.6rem;font-weight:900;color:var(--dark);letter-spacing:-1px}
        .afc-n em{font-style:normal;color:var(--p)}
        .afc-l{font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:.8px;margin-top:2px}
        .about-text{}
        .about-name{font-size:1.5rem;font-weight:800;color:var(--dark);margin-bottom:16px;letter-spacing:-.5px}
        .ap{font-size:15px;line-height:1.85;color:var(--text);margin-bottom:14px}
        .ap strong{color:var(--dark);font-weight:600}
        .about-tags{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0}
        .atag{padding:7px 16px;background:var(--plight);border:1px solid rgba(124,58,237,.18);border-radius:99px;font-size:12.5px;font-weight:500;color:var(--p)}
        .about-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
        .about-soc{display:flex;gap:10px;margin-top:24px;padding-top:24px;border-top:1px solid rgba(0,0,0,.07)}
        .soc-chip{display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border:1.5px solid rgba(0,0,0,.1);border-radius:99px;font-size:13px;font-weight:600;color:var(--dark);background:#fff;cursor:pointer;transition:all .22s}
        .soc-chip:hover{border-color:var(--p);color:var(--p);background:var(--plight)}

        /* ── PROCESS ── */
        .process-bg{background:var(--bg)}
        .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        .proc-card{background:#fff;border-radius:var(--r2);padding:32px 28px;transition:all .3s;border:1px solid rgba(0,0,0,.06);box-shadow:0 2px 12px rgba(0,0,0,.04)}
        .proc-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:rgba(124,58,237,.15)}
        .proc-num{font-size:11px;font-weight:800;color:var(--p);letter-spacing:2px;margin-bottom:18px;opacity:.6}
        .proc-icon{font-size:32px;margin-bottom:14px;display:block}
        .proc-title{font-size:17px;font-weight:700;color:var(--dark);margin-bottom:10px;letter-spacing:-.3px}
        .proc-desc{font-size:13.5px;color:var(--muted);line-height:1.75}

        /* ── SKILLS ── */
        .skills-bg{background:#fff}
        .sk-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .sk-card{background:var(--bg);border:1.5px solid rgba(0,0,0,.07);border-radius:var(--r2);padding:28px 20px;text-align:center;transition:all .28s;cursor:default}
        .sk-card:hover{border-color:rgba(124,58,237,.25);background:var(--plight);transform:translateY(-4px);box-shadow:0 8px 28px rgba(124,58,237,.1)}
        .sk-icon{font-size:36px;margin-bottom:12px;display:block}
        .sk-name{font-size:14px;font-weight:600;color:var(--dark)}
        .tools-section{margin-top:56px}
        .tools-title{font-size:14px;font-weight:700;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:18px}
        .tools-grid{display:flex;flex-wrap:wrap;gap:10px}
        .tool-pill{padding:8px 18px;background:var(--bg);border:1.5px solid rgba(0,0,0,.08);border-radius:99px;font-size:13px;font-weight:500;color:var(--text);transition:all .22s;cursor:default}
        .tool-pill:hover{border-color:var(--p);color:var(--p);background:var(--plight)}

        /* ── PROJECTS ── */
        .projects-bg{background:var(--bg)}
        .filter-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:36px}
        .filt{padding:8px 22px;border:1.5px solid rgba(0,0,0,.1);border-radius:99px;font-size:13.5px;font-weight:500;color:var(--muted);cursor:pointer;transition:all .22s;background:#fff}
        .filt:hover{border-color:var(--p);color:var(--p)}
        .filt.active{background:var(--p);color:#fff;border-color:var(--p);box-shadow:0 4px 16px rgba(124,58,237,.3)}
        .proj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .proj-card{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:var(--r2);overflow:hidden;transition:all .3s;display:flex;flex-direction:column;box-shadow:0 2px 12px rgba(0,0,0,.04);padding:0}
        .proj-card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);border-color:rgba(124,58,237,.15)}
        .proj-thumb{width:100%;height:180px;overflow:hidden;background:var(--bg);flex-shrink:0}
        .proj-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
        .proj-card:hover .proj-thumb img{transform:scale(1.05)}
        .proj-body{padding:20px 20px 20px;display:flex;flex-direction:column;flex:1}
        .proj-stack{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:10px}
        .proj-tag{font-size:10.5px;font-weight:700;padding:3px 10px;border:1px solid rgba(124,58,237,.18);border-radius:99px;color:var(--p);background:var(--plight);letter-spacing:.3px}
        .proj-title{font-size:16px;font-weight:700;color:var(--dark);margin-bottom:8px;letter-spacing:-.3px}
        .proj-desc{font-size:13.5px;color:var(--muted);line-height:1.72;flex:1;margin-bottom:20px}
        .proj-links{display:flex;gap:8px;flex-wrap:wrap}
        .btn-live{display:inline-flex;align-items:center;gap:6px;padding:9px 20px;background:var(--p);color:#fff;font-size:12.5px;font-weight:600;border-radius:99px;border:none;font-family:var(--font);cursor:pointer;transition:all .22s;box-shadow:0 3px 12px rgba(124,58,237,.25)}
        .btn-live:hover{background:var(--pd);transform:translateY(-2px)}
        .btn-gh{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border:1.5px solid rgba(0,0,0,.12);background:transparent;color:var(--text);font-size:12.5px;font-weight:600;border-radius:99px;cursor:pointer;font-family:var(--font);transition:all .22s}
        .btn-gh:hover{border-color:var(--p);color:var(--p)}
        .tag-figma{font-size:12px;color:#7c3aed;background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.2);border-radius:99px;padding:6px 14px;font-weight:600}
        .view-all-row{display:flex;justify-content:center;margin-top:48px}
        .view-all{display:inline-flex;align-items:center;gap:8px;padding:13px 36px;border:2px solid rgba(124,58,237,.25);border-radius:99px;color:var(--p);font-size:14px;font-weight:600;transition:all .25s;background:transparent;font-family:var(--font)}
        .view-all:hover{background:var(--p);color:#fff;border-color:var(--p);transform:translateY(-2px);box-shadow:0 8px 24px rgba(124,58,237,.25)}

        /* ── CTA BANNER ── */
        .cta-section{background:var(--dark);padding:100px 48px}
        .cta-inner{max-width:800px;margin:0 auto;text-align:center}
        .cta-h{font-size:clamp(2rem,4vw,3.2rem);font-weight:900;color:#fff;letter-spacing:-2px;line-height:1.1;margin-bottom:18px}
        .cta-h em{font-style:normal;color:var(--p2)}
        .cta-sub{font-size:16px;color:rgba(255,255,255,.55);line-height:1.8;margin-bottom:40px}
        .cta-btn{display:inline-flex;align-items:center;gap:8px;padding:16px 40px;background:var(--p);color:#fff;font-size:15px;font-weight:700;border-radius:var(--r);transition:all .25s;box-shadow:0 4px 24px rgba(124,58,237,.4);border:none;font-family:var(--font);cursor:pointer}
        .cta-btn:hover{background:var(--p2);transform:translateY(-2px);box-shadow:0 12px 40px rgba(124,58,237,.5)}

        /* ── EXPERIENCE ── */
        .exp-bg{background:var(--bg)}
        .exp-layout{display:grid;grid-template-columns:300px 1fr;gap:80px;align-items:start}
        .exp-sidebar{}
        .exp-sidebar .sec-sub{font-size:14.5px}
        .exp-sidebar .about-actions{margin-top:0}
        .timeline{position:relative}
        .timeline::before{content:'';position:absolute;left:18px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--p),var(--p2),rgba(124,58,237,.1))}
        .tl-item{position:relative;padding-left:52px;margin-bottom:32px}
        .tl-dot{position:absolute;left:9px;top:8px;width:20px;height:20px;border-radius:50%;background:var(--p);border:3px solid var(--bg);box-shadow:0 0 0 3px rgba(124,58,237,.2)}
        .tl-card{background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:var(--r2);padding:22px 24px;transition:all .28s;box-shadow:0 2px 12px rgba(0,0,0,.04)}
        .tl-card:hover{border-color:rgba(124,58,237,.2);transform:translateX(4px);box-shadow:0 8px 32px rgba(124,58,237,.1)}
        .tl-year{font-size:11px;font-weight:700;color:var(--p);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}
        .tl-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:99px;font-size:10px;font-weight:700;margin-bottom:10px}
        .tl-badge.edu{background:rgba(34,197,94,.1);color:#16a34a;border:1px solid rgba(34,197,94,.2)}
        .tl-badge.work{background:rgba(124,58,237,.1);color:var(--p);border:1px solid rgba(124,58,237,.2)}
        .tl-title{font-size:15px;font-weight:700;color:var(--dark);margin-bottom:4px}
        .tl-org{font-size:12px;color:var(--p);font-weight:600;margin-bottom:10px}
        .tl-desc{font-size:13.5px;color:var(--muted);line-height:1.7}

        /* ── CONTACT ── */
        .contact-bg{background:#fff}
        .ct-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:80px;align-items:start}
        .ct-info-list{margin-top:32px}
        .ct-item{display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--bg);border-radius:var(--r2);margin-bottom:12px;transition:all .25s;border:1px solid rgba(0,0,0,.06)}
        .ct-item:hover{border-color:rgba(124,58,237,.2);background:var(--plight);transform:translateX(4px)}
        .ct-icon{width:44px;height:44px;background:var(--p);border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;color:#fff}
        .ct-label{font-size:10px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;font-weight:700;margin-bottom:3px}
        .ct-val{font-size:14px;color:var(--dark);font-weight:600}
        .ct-socials{display:flex;gap:10px;margin-top:28px}
        .form-box{background:var(--bg);border:1px solid rgba(0,0,0,.06);border-radius:var(--r3);padding:36px;box-shadow:0 4px 24px rgba(0,0,0,.05)}
        .form-title{font-size:22px;font-weight:800;color:var(--dark);margin-bottom:8px;letter-spacing:-.5px}
        .form-sub{font-size:14px;color:var(--muted);margin-bottom:28px}
        .fw{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}
        .fl{font-size:11px;color:var(--muted);font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
        .fi{background:#fff;border:1.5px solid rgba(0,0,0,.1);border-radius:var(--r);padding:13px 16px;font-family:var(--font);font-size:14px;color:var(--dark);outline:none;width:100%;resize:none;transition:all .25s}
        .fi:focus{border-color:var(--p);box-shadow:0 0 0 3px rgba(124,58,237,.1)}
        .fi::placeholder{color:#aaa}
        .fr2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
        .sb{width:100%;padding:14px;background:var(--p);color:#fff;font-family:var(--font);font-size:14px;font-weight:700;border:none;border-radius:var(--r);cursor:pointer;transition:all .3s;margin-top:4px;box-shadow:0 4px 20px rgba(124,58,237,.28)}
        .sb:hover{background:var(--pd);transform:translateY(-2px);box-shadow:0 12px 36px rgba(124,58,237,.42)}
        .sb:disabled{opacity:.45;transform:none;cursor:not-allowed}

        /* ── FOOTER ── */
        .footer{background:var(--dark);padding:40px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
        .foot-logo{font-size:18px;font-weight:800;color:#fff;display:flex;align-items:center;gap:10px}
        .foot-logo-dot{width:32px;height:32px;background:var(--p);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#fff}
        .foot-copy{font-size:13px;color:rgba(255,255,255,.4);font-weight:400}
        .foot-soc{display:flex;gap:10px}
        .foot-soc a{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border:1px solid rgba(255,255,255,.12);border-radius:50%;color:rgba(255,255,255,.55);font-size:13px;transition:all .22s;font-weight:700}
        .foot-soc a:hover{border-color:var(--p);color:var(--p);background:rgba(124,58,237,.1)}

        /* ── SCROLL TOP ── */
        .scroll-top{position:fixed;bottom:32px;right:32px;width:48px;height:48px;background:var(--p);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:18px;z-index:500;box-shadow:0 4px 20px rgba(124,58,237,.4);transition:all .3s;opacity:0;pointer-events:none}
        .scroll-top.show{opacity:1;pointer-events:all}
        .scroll-top:hover{background:var(--pd);transform:translateY(-3px)}

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){
          .proj-grid{grid-template-columns:1fr 1fr}
          .process-grid{grid-template-columns:1fr 1fr;gap:16px}
          .exp-layout{grid-template-columns:1fr;gap:48px}
          .sk-grid{grid-template-columns:repeat(4,1fr)}
        }
        @media(max-width:900px){
          .nav{padding:0 20px}.section{padding:72px 20px}.cta-section{padding:72px 20px}
          .nav-links,.contact-btn{display:none}.hbg{display:flex}
          /* Hero: photo on top, text below */
          .hero-inner{grid-template-columns:1fr;padding:88px 20px 56px;gap:32px;justify-items:center}
          .hero-left{order:2;width:100%;text-align:left}
          .hero-right{order:1;justify-content:center;width:100%}
          .hero-photo-card{max-width:280px;aspect-ratio:4/5}
          .hero-badge{bottom:16px;left:16px;padding:10px 14px}
          .hero-stats{gap:24px}
          .hero-btns{margin-bottom:36px}
          /* About */
          .about-inner{grid-template-columns:1fr;gap:60px}
          .about-photo-wrap{max-width:320px;margin:0 auto}
          .about-float-card{right:-8px;bottom:-20px}
          /* Skills 2-col on mobile */
          .sk-grid{grid-template-columns:repeat(2,1fr);gap:12px}
          .sk-card{padding:20px 16px}
          /* Process single col */
          .process-grid{grid-template-columns:1fr;gap:12px}
          /* Projects single col */
          .proj-grid{grid-template-columns:1fr}
          /* Experience */
          .exp-layout{grid-template-columns:1fr;gap:40px}
          /* Contact */
          .ct-grid{grid-template-columns:1fr;gap:40px}
          .fr2{grid-template-columns:1fr}
          .form-box{padding:24px 20px}
          /* Footer */
          .footer{padding:28px 20px;flex-direction:column;text-align:center}
          .sec-head{margin-bottom:40px}
        }
        @media(max-width:480px){
          .hero-name{font-size:2.4rem;letter-spacing:-1.5px}
          .hero-photo-card{max-width:240px}
          .hero-btns{flex-wrap:wrap}
          .hero-stats{gap:20px}
          .about-actions{flex-direction:column;align-items:stretch}
          .about-actions .btn-primary,.about-actions .btn-outline{justify-content:center}
          .cta-h{font-size:1.8rem}
          .sk-grid{grid-template-columns:repeat(2,1fr)}
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "on" : ""}`}>
        <div className="logo">
          <div className="logo-avatar">N</div>
          Naveen
        </div>
        <div className="nav-links">
          {navLinks.map((l) => (
            <div key={l} className={`nl ${activeSection === l ? "active" : ""}`} onClick={() => scrollTo(l)} style={{textTransform:"capitalize"}}>{l}</div>
          ))}
        </div>
        <button className="contact-btn" onClick={() => scrollTo("contact")}>Contact</button>
        <div className="hbg" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      {menuOpen && (
        <div className="mob-nav">
          {navLinks.map((l) => (
            <div key={l} className="mob-nl" onClick={() => scrollTo(l)} style={{textTransform:"capitalize"}}>{l}</div>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-blob1" />
        <div className="hero-blob2" />
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-greeting rv">Hello, I'm</p>
            <h1 className="hero-name rv d1">Naveen<br />Sam Raj H</h1>
            <p className="hero-role rv d2">
              I'm a <u>Full Stack Web Developer</u> and <u>UI Enthusiast</u> based in Tamil Nadu, India.
              I build fast, responsive, and modern web applications using React, Node.js, Django and MongoDB.
            </p>
            <div className="hero-btns rv d3">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Say Hello! 👋</button>
              <a href="/Naveen Sam Raj Resume.pdf" download className="btn-outline">⬇ Download CV</a>
            </div>
            <div className="hero-stats rv d4">
              {[["6","Projects"],["8","Tech Stacks"],["5","Papers"],["2","Years"]].map(([n,l]) => (
                <div key={l}>
                  <div className="hstat-n">{n}<em>+</em></div>
                  <div className="hstat-l">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right rv d2">
            <div className="hero-photo-card">
              <img src="/images/Naveen-nobg.png" alt="Naveen Sam Raj H" />
              <div className="hero-badge">
                <div className="badge-dot" />
                <div>
                  <div className="badge-text">Available for work</div>
                  <div className="badge-sub">Open to opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-bg">
        <div className="wrap">
          <div className="about-inner">
            <div className="about-photo-wrap rv">
              <div className="about-img-box">
                <img src="/images/Naveen-nobg.png" alt="Naveen Sam Raj H" />
              </div>
              <div className="about-float-card">
                <div className="afc-row">
                  {[["6+","Projects"],["8+","Stacks"],["5+","Papers"]].map(([n,l]) => (
                    <div key={l} className="afc-item">
                      <div className="afc-n">{n.replace("+","")}<em>+</em></div>
                      <div className="afc-l">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-text">
              <div className="sec-tag rv">About Me</div>
              <h2 className="sec-h rv d1">I am Professional<br />Full Stack Developer</h2>
              <div className="ap rv d2" style={{marginTop:"20px"}}>
                I'm <strong>H. Naveen Sam Raj</strong>, a <strong>Full Stack Web Developer</strong> pursuing <strong>Computer Science Engineering</strong> (Expected 2026).
                I specialise in building responsive, performant web applications using React, Django, Node.js, and MongoDB.
              </div>
              <p className="ap rv d3">
                From live-deployed projects to technical paper presentations at inter-collegiate symposiums, I constantly push my limits and explore new technologies to solve real-world problems.
              </p>
              <p className="ap rv d3">Long-term goal: build my own <strong>tech-driven startup</strong> that makes a real impact.</p>
              <div className="about-tags rv d3">
                {tools.slice(0,8).map((t) => <span key={t} className="atag">{t}</span>)}
              </div>
              <div className="about-actions rv d4">
                <button className="btn-primary" onClick={() => scrollTo("projects")}>My Projects →</button>
                <a href="/Naveen Sam Raj Resume.pdf" download className="btn-outline">⬇ Download CV</a>
              </div>
              <div className="about-soc rv d4">
                <a href="https://www.linkedin.com/in/naveensamraj" className="soc-chip" target="_blank" rel="noreferrer">in&nbsp;LinkedIn</a>
                <a href="https://github.com/naveen-sam-raj" className="soc-chip" target="_blank" rel="noreferrer">⌥&nbsp;GitHub</a>
                <div className="soc-chip" onClick={() => scrollTo("contact")}>✉&nbsp;Email</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-bg">
        <div className="wrap">
          <div className="sec-head" style={{textAlign:"center"}}>
            <div className="sec-tag rv" style={{margin:"0 auto 14px"}}>My Process</div>
            <h2 className="sec-h rv d1">How I Work</h2>
            <p className="sec-sub rv d2" style={{margin:"14px auto 0"}}>A structured approach to delivering high-quality, meaningful digital products.</p>
          </div>
          <div className="process-grid">
            {process.map((p,i) => (
              <div key={p.num} className="proc-card rv" style={{transitionDelay:`${i*0.1}s`}}>
                <div className="proc-num">{p.num}</div>
                <span className="proc-icon">{p.icon}</span>
                <div className="proc-title">{p.title}</div>
                <p className="proc-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-bg">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-tag rv">Skills</div>
            <h2 className="sec-h rv d1">My Tech Stack</h2>
            <p className="sec-sub rv d2">Technologies I use to build modern full-stack web applications.</p>
          </div>
          <div className="sk-grid">
            {skills.map((s,i) => (
              <div key={s.name} className="sk-card rv" style={{transitionDelay:`${i*0.07}s`}}>
                <span className="sk-icon">{s.icon}</span>
                <div className="sk-name">{s.name}</div>
              </div>
            ))}
          </div>
          <div className="tools-section rv">
            <div className="tools-title">Tools & Technologies</div>
            <div className="tools-grid">
              {tools.map((t) => <span key={t} className="tool-pill">{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-bg">
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-tag rv">Portfolio</div>
            <h2 className="sec-h rv d1">Things I've Built</h2>
            <p className="sec-sub rv d2">Real-world projects — designed, developed &amp; shipped.</p>
          </div>
          <div className="filter-row rv">
            {cats.map((c) => (
              <button key={c} className={`filt ${activeFilter===c?"active":""}`} onClick={() => setActiveFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="proj-grid">
            {filteredProjects.map((p,i) => (
              <div key={p.title} className="proj-card rv" style={{transitionDelay:`${i*0.08}s`}}>
                {p.img && (
                  <div className="proj-thumb">
                    <img src={p.img} alt={p.title} />
                  </div>
                )}
                <div className="proj-body">
                  <div className="proj-stack">
                    {p.stack.map((s) => <span key={s} className="proj-tag">{s}</span>)}
                  </div>
                  <div className="proj-title">{p.title}</div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-links">
                    {p.hasLive ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn-live">Live Demo ↗</a>
                    ) : (
                      <span className="tag-figma">🚧 In Progress</span>
                    )}
                    <a href={p.gh} target="_blank" rel="noreferrer" className="btn-gh">GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-row rv">
            <a href="https://github.com/naveen-sam-raj" target="_blank" rel="noreferrer" className="view-all">
              View All Repos on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-section">
        <div className="cta-inner rv">
          <h2 className="cta-h">Have a <em>project idea?</em><br />Let's build it together.</h2>
          <p className="cta-sub">Open to full-time roles, freelance work, and exciting collaborations. I reply fast!</p>
          <button className="cta-btn" onClick={() => scrollTo("contact")}>Start a Conversation →</button>
        </div>
      </div>

      {/* EXPERIENCE */}
      <section id="experience" className="section exp-bg">
        <div className="wrap">
          <div className="exp-layout">
            <div>
              <div className="sec-tag rv">Experience</div>
              <h2 className="sec-h rv d1">My Journey</h2>
              <p className="sec-sub rv d2">Education and professional milestones along the way.</p>
              <div className="about-actions rv d3" style={{marginTop:"28px"}}>
                <a href="/Naveen Sam Raj Resume.pdf" download className="btn-primary">⬇ Full Resume</a>
              </div>
            </div>
            <div className="timeline">
              {experience.map((e,i) => (
                <div key={i} className="tl-item rv" style={{transitionDelay:`${i*0.1}s`}}>
                  <div className="tl-dot" />
                  <div className="tl-card">
                    <div className="tl-year">{e.year}</div>
                    <div className={`tl-badge ${e.type}`}>{e.type === "edu" ? "🎓 Education" : "💼 Experience"}</div>
                    <div className="tl-title">{e.title}</div>
                    <div className="tl-org">{e.org}</div>
                    <div className="tl-desc">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-bg">
        <div className="wrap">
          <div className="ct-grid">
            <div>
              <div className="sec-tag rv">Contact</div>
              <h2 className="sec-h rv d1">Let's work<br />together</h2>
              <p className="rv d2" style={{fontSize:"15px",color:"var(--muted)",lineHeight:"1.8",margin:"16px 0 8px"}}>
                Open to full-time roles, freelance work, and exciting collaborations. Reach out — I reply fast!
              </p>
              <div className="ct-info-list rv d2">
                {[
                  {icon:"✉️",l:"Email",v:"hnaveensamraj@gmail.com"},
                  {icon:"📱",l:"Phone",v:"+91 9943269660"},
                  {icon:"📍",l:"Location",v:"Tamil Nadu, India"},
                ].map((c) => (
                  <div key={c.l} className="ct-item">
                    <div className="ct-icon">{c.icon}</div>
                    <div>
                      <div className="ct-label">{c.l}</div>
                      <div className="ct-val">{c.v}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ct-socials rv d3">
                <a href="https://www.linkedin.com/in/naveensamraj" className="soc-chip" target="_blank" rel="noreferrer">in&nbsp;LinkedIn</a>
                <a href="https://github.com/naveen-sam-raj" className="soc-chip" target="_blank" rel="noreferrer">⌥&nbsp;GitHub</a>
              </div>
            </div>
            <div className="form-box rv d2">
              <div className="form-title">Send a Message</div>
              <div className="form-sub">I'll get back to you within 24 hours.</div>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="foot-logo">
          <div className="foot-logo-dot">N</div>
          Naveen
        </div>
        <div className="foot-copy">© 2025 Naveen Sam Raj H · Built with ♥ using React</div>
        <div className="foot-soc">
          <a href="https://www.linkedin.com/in/naveensamraj" target="_blank" rel="noreferrer">in</a>
          <a href="https://github.com/naveen-sam-raj" target="_blank" rel="noreferrer">⌥</a>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      <div className={`scroll-top ${scrolled ? "show" : ""}`} onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>↑</div>
    </>
  );
};

export default Home;
