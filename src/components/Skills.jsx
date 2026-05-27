import React, { useState } from 'react';

const categories = [
  {
    label:'Frontend',icon:'🎨',
    skills:['React.js','JavaScript','HTML5','CSS3','Tailwind CSS','Vite'],
  },
  {
    label:'Backend',icon:'⚙️',
    skills:['Node.js','Express.js','Django','REST API','JWT Auth','Firebase'],
  },
  {
    label:'Database',icon:'🗄️',
    skills:['MongoDB','MySQL','PostgreSQL','Mongoose','Firebase Firestore'],
  },
  {
    label:'Automation',icon:'🤖',
    skills:['Python','Playwright','BeautifulSoup','Selenium','Puppeteer','Cron Jobs'],
  },
  {
    label:'Tools',icon:'🔧',
    skills:['Git','GitHub','Vercel','Render','Figma','VS Code','Postman','Linux'],
  },
];

const Skills = () => {
  const [active, setActive] = useState('Frontend');
  const cur = categories.find(c=>c.label===active);

  return (
    <section id="skills" className="section" style={{background:'#08080f',position:'relative'}}>
      <div style={{position:'absolute',bottom:'10%',left:'5%',width:350,height:350,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(124,92,252,0.08) 0%,transparent 70%)',pointerEvents:'none'}}/>

      <div className="wrap">
        <div className="sec-head">
          <div className="sec-tag">Tech Stack</div>
          <h2 className="sec-h">Skills & <span className="grad">Technologies</span></h2>
          <p className="sec-sub">Categorized tools and technologies I use to build modern, scalable solutions.</p>
        </div>

        {/* Category tabs */}
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:36}}>
          {categories.map(c=>(
            <button key={c.label} onClick={()=>setActive(c.label)} style={{
              padding:'9px 20px',fontSize:13,fontWeight:600,
              borderRadius:99,border:'1.5px solid',cursor:'pointer',fontFamily:'inherit',
              transition:'all .22s',
              borderColor: active===c.label ? '#7c5cfc' : 'rgba(255,255,255,0.1)',
              background: active===c.label ? 'rgba(124,92,252,0.15)' : 'transparent',
              color: active===c.label ? '#7c5cfc' : '#94a3b8',
            }}>{c.icon} {c.label}</button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="glass" style={{padding:36}}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28}}>
            <span style={{fontSize:28}}>{cur.icon}</span>
            <div>
              <div style={{fontSize:17,fontWeight:700,color:'#f1f5f9'}}>{cur.label} Skills</div>
              <div style={{fontSize:13,color:'#64748b',marginTop:2}}>{cur.skills.length} technologies</div>
            </div>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
            {cur.skills.map((s,i)=>(
              <div key={s} className="sk-pill" style={{
                padding:'10px 20px',borderRadius:10,
                background:'rgba(124,92,252,0.08)',
                border:'1px solid rgba(124,92,252,0.18)',
                fontSize:14,fontWeight:600,color:'#c4b5fd',
                transition:'all .22s',cursor:'default',
                animation:`fadeInUp .4s ${i*0.04}s ease both`,
              }}>{s}</div>
            ))}
          </div>
        </div>

        {/* All tools pills */}
        <div style={{marginTop:40}}>
          <div style={{fontSize:12,fontWeight:700,color:'#64748b',letterSpacing:2,textTransform:'uppercase',marginBottom:16}}>
            All Tools & Technologies
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
            {categories.flatMap(c=>c.skills).filter((v,i,a)=>a.indexOf(v)===i).map(t=>(
              <span key={t} className="tool-pill-dark" style={{
                padding:'7px 16px',borderRadius:99,fontSize:12.5,fontWeight:500,
                background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',
                color:'#94a3b8',transition:'all .22s',cursor:'default',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .sk-pill:hover{background:rgba(124,92,252,0.18)!important;border-color:rgba(124,92,252,0.4)!important;transform:translateY(-2px)}
        .tool-pill-dark:hover{border-color:rgba(124,92,252,0.3)!important;color:#7c5cfc!important;background:rgba(124,92,252,0.06)!important}
      `}</style>
    </section>
  );
};

export default Skills;
