import React, { useState } from 'react';

const mainProjects = [
  {title:'Furniture eCommerce',cat:'React',stack:['React','CSS','Vercel'],
    desc:'Fully responsive eCommerce platform with product listings, cart management, and smooth checkout flow.',
    live:'https://furniture-pied-sigma.vercel.app/',gh:'https://github.com/naveen-sam-raj/furniture',img:'/images/proj-furniture.png',hasLive:true},
  {title:'NoteFlow',cat:'MERN',stack:['MongoDB','Express','React','Node.js'],
    desc:'Full MERN stack notes app with JWT authentication, protected routes, and real-time sync.',
    live:'https://notes-app-naveen.vercel.app',gh:'https://github.com/naveen-sam-raj/notes-app',img:'/images/proj-noteflow.png',hasLive:true},
  {title:'DRC Website',cat:'React',stack:['React','Vite','Vercel'],
    desc:'Clean React website for a church community with gallery, events, and services sections.',
    live:'https://drc-nine.vercel.app',gh:'https://github.com/naveen-sam-raj/DRC',img:'/images/proj-drc.png',hasLive:true},
  {title:'Giftz',cat:'MERN',stack:['React','Node.js','MongoDB','Firebase'],
    desc:'Full-featured gift eCommerce platform with Firebase auth, product catalog, and admin panel.',
    live:'https://giftz-shop.vercel.app',gh:'https://github.com/naveen-sam-raj',img:'/images/proj-giftz.png',hasLive:true},
  {title:'WoodCraft',cat:'React',stack:['React','CSS','Vercel'],
    desc:'Modern timber business website driving product enquiries via integrated WhatsApp CTA.',
    live:'https://wood-website-gold.vercel.app',gh:'https://github.com/naveen-sam-raj',img:'/images/proj-woodcraft.png',hasLive:true},
  {title:'Sweet Crumbs Bakery',cat:'React',stack:['React','CSS','Vercel'],
    desc:'Delightful bakery landing page with menu, reviews, and WhatsApp ordering button.',
    live:'https://bakery-website-qc2h.vercel.app/',gh:'https://github.com/naveen-sam-raj',img:'/images/proj-bakery.png',hasLive:true},
];

const automationProjects = [
  {title:'Google Maps Business Scraper',icon:'🗺️',color:'#7c5cfc',
    stack:['Python','Playwright','Pandas','Google Maps API'],
    desc:'Scrapes business names, addresses, phone numbers, ratings, and reviews from Google Maps for any city and category. Exports to clean CSV/JSON.',
    features:['Anti-bot bypass','Bulk city/category input','Email & phone extraction','Scheduled exports'],
  },
  {title:'E-Commerce Price Tracker',icon:'📊',color:'#06b6d4',
    stack:['Python','BeautifulSoup','MongoDB','Node.js'],
    desc:'Monitors product prices across multiple e-commerce sites and sends alerts when prices drop below a set threshold.',
    features:['Multi-site tracking','Email/SMS alerts','Price history charts','REST API endpoint'],
  },
  {title:'Job Data Extractor',icon:'💼',color:'#f59e0b',
    stack:['Python','Selenium','PostgreSQL','Express.js'],
    desc:'Extracts job listings from LinkedIn, Indeed, and Naukri — filtering by role, location, salary, and recency. Delivers a structured dataset daily.',
    features:['Multi-platform scraping','Keyword & salary filters','Daily scheduled runs','CSV & API delivery'],
  },
];

const cats = ['All','React','MERN'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter==='All' ? mainProjects : mainProjects.filter(p=>p.cat===filter);

  return (
    <section id="projects" className="section" style={{background:'#08080f',position:'relative'}}>
      <div style={{position:'absolute',top:'20%',right:'5%',width:400,height:400,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(124,92,252,0.07) 0%,transparent 70%)',pointerEvents:'none'}}/>

      <div className="wrap">
        {/* Main Projects */}
        <div className="sec-head">
          <div className="sec-tag">Portfolio</div>
          <h2 className="sec-h">Things I've <span className="grad">Built</span></h2>
          <p className="sec-sub">Real-world client projects — designed, developed & shipped.</p>
        </div>

        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:32}}>
          {cats.map(c=>(
            <button key={c} onClick={()=>setFilter(c)} style={{
              padding:'8px 22px',fontSize:13,fontWeight:600,borderRadius:99,
              border:'1.5px solid',cursor:'pointer',fontFamily:'inherit',transition:'all .22s',
              borderColor: filter===c ? '#7c5cfc' : 'rgba(255,255,255,0.1)',
              background: filter===c ? 'rgba(124,92,252,0.15)' : 'transparent',
              color: filter===c ? '#7c5cfc' : '#94a3b8',
            }}>{c}</button>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}} className="proj-grid">
          {filtered.map(p=>(
            <div key={p.title} className="glass proj-card" style={{overflow:'hidden',display:'flex',flexDirection:'column'}}>
              {p.img && (
                <div style={{height:170,overflow:'hidden',background:'rgba(255,255,255,0.03)'}}>
                  <img src={p.img} alt={p.title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .4s ease'}}
                    className="proj-img"/>
                </div>
              )}
              <div style={{padding:'20px',flex:1,display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',gap:5,flexWrap:'wrap',marginBottom:10}}>
                  {p.stack.map(s=>(
                    <span key={s} style={{fontSize:10.5,fontWeight:700,padding:'3px 9px',borderRadius:99,
                      background:'rgba(124,92,252,0.1)',border:'1px solid rgba(124,92,252,0.2)',color:'#a78bfa'}}>{s}</span>
                  ))}
                </div>
                <h3 style={{fontSize:15,fontWeight:700,color:'#f1f5f9',marginBottom:8,letterSpacing:'-0.3px'}}>{p.title}</h3>
                <p style={{fontSize:13,color:'#94a3b8',lineHeight:1.72,flex:1,marginBottom:18}}>{p.desc}</p>
                <div style={{display:'flex',gap:8}}>
                  {p.hasLive && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary btn-sm">Live Demo ↗</a>
                  )}
                  <a href={p.gh} target="_blank" rel="noreferrer" className="btn-outline btn-sm">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Automation Projects */}
        <div style={{marginTop:80}}>
          <div className="sec-head">
            <div className="sec-tag">Automation</div>
            <h2 className="sec-h">Featured <span className="grad">Automation Projects</span></h2>
            <p className="sec-sub">Data extraction and automation tools built for real business needs.</p>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}} className="auto-proj-grid">
            {automationProjects.map(p=>(
              <div key={p.title} className="glass auto-card" style={{padding:'32px 26px',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:0,left:0,right:0,height:3,
                  background:`linear-gradient(90deg,${p.color},transparent)`}}/>
                <div style={{fontSize:32,marginBottom:16}}>{p.icon}</div>
                <h3 style={{fontSize:16,fontWeight:700,color:'#f1f5f9',marginBottom:10,letterSpacing:'-0.3px'}}>{p.title}</h3>
                <p style={{fontSize:13.5,color:'#94a3b8',lineHeight:1.75,marginBottom:18}}>{p.desc}</p>
                <div style={{marginBottom:20}}>
                  {p.features.map(f=>(
                    <div key={f} style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                      <span style={{width:5,height:5,borderRadius:'50%',background:p.color,flexShrink:0,display:'block'}}/>
                      <span style={{fontSize:12.5,color:'#94a3b8'}}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                  {p.stack.map(s=>(
                    <span key={s} style={{fontSize:11,fontWeight:600,padding:'4px 10px',borderRadius:99,
                      background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'#94a3b8'}}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{textAlign:'center',marginTop:48}}>
          <a href="https://github.com/naveen-sam-raj" target="_blank" rel="noreferrer" className="btn-outline">
            View All Repos on GitHub ↗
          </a>
        </div>
      </div>

      <style>{`
        .proj-card:hover{transform:translateY(-5px)!important;border-color:rgba(124,92,252,0.35)!important;box-shadow:0 20px 60px rgba(124,92,252,0.12)!important}
        .proj-card:hover .proj-img{transform:scale(1.06)}
        .auto-card:hover{transform:translateY(-5px)!important;border-color:rgba(124,92,252,0.35)!important}
        @media(max-width:1024px){.proj-grid{grid-template-columns:1fr 1fr!important}.auto-proj-grid{grid-template-columns:1fr!important}}
        @media(max-width:700px){.proj-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
};

export default Projects;
