import React from 'react';

const About = ({ scrollTo }) => (
  <section id="about" className="section" style={{background:'#0d0d1e',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',top:'10%',right:'-5%',width:400,height:400,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(124,92,252,0.08) 0%,transparent 70%)',pointerEvents:'none'}}/>

    <div className="wrap">
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center'}} className="about-grid">
        {/* Photo */}
        <div style={{position:'relative'}} className="about-photo-col">
          <div style={{
            borderRadius:28,overflow:'hidden',
            aspectRatio:'3/4',maxWidth:400,
            background:'linear-gradient(135deg,rgba(124,92,252,0.12),rgba(6,182,212,0.08))',
            border:'1px solid rgba(124,92,252,0.2)',
            boxShadow:'0 32px 80px rgba(124,92,252,0.18)',
          }}>
            <img src="/images/Naveen-nobg.png" alt="Naveen Sam Raj H"
              style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 15%',display:'block'}}/>
          </div>
          {/* Float card */}
          <div style={{
            position:'absolute',bottom:-20,right:-20,
            background:'rgba(13,13,30,0.92)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',
            borderRadius:18,padding:'20px 24px',
            border:'1px solid rgba(124,92,252,0.2)',
            boxShadow:'0 16px 48px rgba(0,0,0,0.4)',
          }}>
            <div style={{display:'flex',gap:24}}>
              {[['7+','Projects'],['8+','Stacks'],['5+','Papers']].map(([n,l])=>(
                <div key={l} style={{textAlign:'center'}}>
                  <div style={{fontSize:'1.5rem',fontWeight:900,color:'#f1f5f9',letterSpacing:'-1px',lineHeight:1}}>
                    {n.replace('+','')}<em style={{fontStyle:'normal',color:'#7c5cfc'}}>+</em>
                  </div>
                  <div style={{fontSize:10,color:'#64748b',textTransform:'uppercase',letterSpacing:1,marginTop:4}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="sec-tag">About Me</div>
          <h2 className="sec-h">I Build Web Apps <span className="grad">That Solve Problems</span></h2>
          <p style={{fontSize:15,color:'#94a3b8',lineHeight:1.85,marginTop:20,marginBottom:14}}>
            I'm <strong style={{color:'#f1f5f9',fontWeight:700}}>H. Naveen Sam Raj</strong>, a{' '}
            <strong style={{color:'#a78bfa',fontWeight:700}}>Full Stack Developer & Automation Specialist</strong>{' '}
            pursuing Computer Science Engineering (Expected 2026) from Tamil Nadu, India.
          </p>
          <p style={{fontSize:15,color:'#94a3b8',lineHeight:1.85,marginBottom:14}}>
            I specialise in building responsive, performant web applications using React, Node.js, Express, MongoDB —
            and automation pipelines using Python, Playwright, and BeautifulSoup.
          </p>
          <p style={{fontSize:15,color:'#94a3b8',lineHeight:1.85,marginBottom:24}}>
            From eCommerce stores to data scrapers and full-stack dashboards, I've shipped 7+ live projects.
            Long-term goal: build a <strong style={{color:'#f1f5f9'}}>tech-driven product startup</strong> that makes a real impact.
          </p>

          {/* Tags */}
          <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:28}}>
            {['React.js','Node.js','Python','MongoDB','Web Scraping','REST API','Full Stack','Automation'].map(t=>(
              <span key={t} style={{
                padding:'6px 14px',borderRadius:99,fontSize:12.5,fontWeight:500,
                background:'rgba(124,92,252,0.08)',border:'1px solid rgba(124,92,252,0.2)',color:'#a78bfa',
              }}>{t}</span>
            ))}
          </div>

          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:24}}>
            <button className="btn-primary" onClick={()=>scrollTo('projects')}>My Projects →</button>
            <a href="/Naveen Sam Raj Resume.pdf" download className="btn-outline">⬇ Download CV</a>
          </div>

          <div style={{display:'flex',gap:10,flexWrap:'wrap',paddingTop:24,borderTop:'1px solid rgba(255,255,255,0.07)'}}>
            {[
              {l:'LinkedIn',url:'https://www.linkedin.com/in/naveensamraj',icon:'in'},
              {l:'GitHub',url:'https://github.com/naveen-sam-raj',icon:'⌥'},
            ].map(s=>(
              <a key={s.l} href={s.url} target="_blank" rel="noreferrer" style={{
                display:'inline-flex',alignItems:'center',gap:6,padding:'8px 18px',
                border:'1.5px solid rgba(255,255,255,0.1)',borderRadius:99,fontSize:13,fontWeight:600,
                color:'#94a3b8',transition:'all .22s',background:'transparent',
              }} className="soc-chip">{s.icon} {s.l}</a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .soc-chip:hover{border-color:rgba(124,92,252,0.4)!important;color:#a78bfa!important;background:rgba(124,92,252,0.08)!important}
      @media(max-width:900px){
        .about-grid{grid-template-columns:1fr!important;gap:48px!important}
        .about-photo-col{max-width:300px;margin:0 auto}
      }
    `}</style>
  </section>
);

export default About;
