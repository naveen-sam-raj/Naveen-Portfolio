import React from 'react';

const items = [
  {year:'2026',title:'B.E. Computer Science Engineering',org:'Tamil Nadu, India',
    desc:'Expected graduation. Specializing in Full Stack Web Development, DBMS, and Software Engineering.',type:'edu'},
  {year:'2025',title:'Technical Paper Presentations',org:'Various Colleges, Tamil Nadu',
    desc:'Presented 5+ research papers on emerging technologies at inter-collegiate symposiums.',type:'work'},
  {year:'2024',title:'Full Stack Developer — Freelance',org:'Remote / International',
    desc:'Built and deployed multiple client projects using React, Node.js, MongoDB, Django, and automation tools.',type:'work'},
  {year:'2022',title:'Started Coding Journey',org:'Self-Taught',
    desc:'Began learning HTML, CSS and JavaScript. Built first projects and fell in love with web development.',type:'edu'},
];

const Experience = () => (
  <section id="experience" className="section" style={{background:'#0d0d1e',position:'relative'}}>
    <div style={{position:'absolute',top:'20%',left:'-5%',width:400,height:400,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 70%)',pointerEvents:'none'}}/>

    <div className="wrap">
      <div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:80,alignItems:'start'}} className="exp-layout">
        <div>
          <div className="sec-tag">Experience</div>
          <h2 className="sec-h">My <span className="grad">Journey</span></h2>
          <p className="sec-sub" style={{marginTop:14}}>Education and professional milestones along the way.</p>
          <div style={{marginTop:32}}>
            <a href="/Naveen Sam Raj Resume.pdf" download className="btn-primary">⬇ Download Resume</a>
          </div>
        </div>

        {/* Timeline */}
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:18,top:0,bottom:0,width:2,
            background:'linear-gradient(180deg,#7c5cfc,#06b6d4,rgba(124,92,252,0.05))'}}/>
          {items.map((e,i)=>(
            <div key={i} style={{position:'relative',paddingLeft:52,marginBottom:28}}>
              <div className="tl-dot" style={{
                position:'absolute',left:9,top:10,width:20,height:20,borderRadius:'50%',
                background: e.type==='edu' ? '#06b6d4' : '#7c5cfc',
                border:'3px solid #0d0d1e',
                boxShadow:`0 0 0 3px ${e.type==='edu'?'rgba(6,182,212,0.2)':'rgba(124,92,252,0.2)'}`,
              }}/>
              <div className="glass tl-card" style={{padding:'22px 24px',transition:'all .28s'}}>
                <div style={{fontSize:11,fontWeight:700,
                  color: e.type==='edu' ? '#06b6d4' : '#7c5cfc',
                  letterSpacing:2,textTransform:'uppercase',marginBottom:8}}>{e.year}</div>
                <span style={{
                  display:'inline-flex',alignItems:'center',gap:4,padding:'3px 10px',
                  borderRadius:99,fontSize:10,fontWeight:700,marginBottom:10,
                  background: e.type==='edu' ? 'rgba(6,182,212,0.1)' : 'rgba(124,92,252,0.1)',
                  color: e.type==='edu' ? '#06b6d4' : '#a78bfa',
                  border:`1px solid ${e.type==='edu'?'rgba(6,182,212,0.2)':'rgba(124,92,252,0.2)'}`,
                }}>{e.type==='edu'?'🎓 Education':'💼 Experience'}</span>
                <div style={{fontSize:15,fontWeight:700,color:'#f1f5f9',marginBottom:4}}>{e.title}</div>
                <div style={{fontSize:12,color:'#7c5cfc',fontWeight:600,marginBottom:10}}>{e.org}</div>
                <div style={{fontSize:13.5,color:'#94a3b8',lineHeight:1.7}}>{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      .tl-card:hover{border-color:rgba(124,92,252,0.3)!important;transform:translateX(4px)}
      @media(max-width:900px){.exp-layout{grid-template-columns:1fr!important;gap:40px!important}}
    `}</style>
  </section>
);

export default Experience;
