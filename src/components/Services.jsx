import React from 'react';

const services = [
  {
    icon:'🕷️',title:'Web Scraping',color:'#7c5cfc',
    desc:'Custom scrapers extracting structured data from any website — bypassing CAPTCHAs, pagination, and dynamic content.',
    tags:['Python','Playwright','BeautifulSoup','Selenium'],
  },
  {
    icon:'🎯',title:'Lead Generation',color:'#06b6d4',
    desc:'Automated pipelines to collect, clean, and deliver qualified business leads from Google Maps, LinkedIn, and directories.',
    tags:['Google Maps','LinkedIn','Data Cleaning','CSV/JSON'],
  },
  {
    icon:'⚙️',title:'Automation Tools',color:'#f59e0b',
    desc:'End-to-end workflow automation that saves your team hours every week — bots, schedulers, and data pipelines.',
    tags:['Python','Node.js','Cron Jobs','REST APIs'],
  },
  {
    icon:'🔗',title:'API Integration',color:'#22c55e',
    desc:'Connecting third-party services, building REST/GraphQL APIs, and creating seamless data flows between platforms.',
    tags:['REST API','GraphQL','Webhooks','Express.js'],
  },
];

const Services = () => (
  <section id="services" className="section" style={{background:'#0d0d1e',position:'relative',overflow:'hidden'}}>
    {/* BG glow */}
    <div style={{position:'absolute',top:'20%',right:'-5%',width:400,height:400,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(6,182,212,0.08) 0%,transparent 70%)',pointerEvents:'none'}}/>

    <div className="wrap">
      <div className="sec-head center">
        <div className="sec-tag" style={{margin:'0 auto 16px'}}>Services</div>
        <h2 className="sec-h">Automation & <span className="grad">Web Scraping</span> Services</h2>
        <p className="sec-sub" style={{margin:'14px auto 0'}}>
          I help businesses collect data, automate workflows, and integrate systems — saving time and unlocking growth.
        </p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20}} className="srv-grid">
        {services.map((s,i)=>(
          <div key={s.title} className="glass srv-card" style={{padding:'32px 26px',position:'relative',overflow:'hidden',cursor:'default'}}>
            {/* Top accent bar */}
            <div style={{position:'absolute',top:0,left:0,right:0,height:3,
              background:`linear-gradient(90deg,${s.color},transparent)`}}/>
            <div style={{
              width:52,height:52,borderRadius:14,
              background:`rgba(${s.color==='#7c5cfc'?'124,92,252':s.color==='#06b6d4'?'6,182,212':s.color==='#f59e0b'?'245,158,11':'34,197,94'},0.12)`,
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:24,marginBottom:20,
              border:`1px solid rgba(${s.color==='#7c5cfc'?'124,92,252':s.color==='#06b6d4'?'6,182,212':s.color==='#f59e0b'?'245,158,11':'34,197,94'},0.2)`,
            }}>{s.icon}</div>
            <h3 style={{fontSize:16,fontWeight:700,color:'#f1f5f9',marginBottom:10,letterSpacing:'-0.3px'}}>{s.title}</h3>
            <p style={{fontSize:13.5,color:'#94a3b8',lineHeight:1.75,marginBottom:20}}>{s.desc}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {s.tags.map(t=>(
                <span key={t} style={{
                  fontSize:11,fontWeight:600,padding:'4px 10px',borderRadius:99,
                  background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',
                  color:'#94a3b8',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      .srv-card:hover{transform:translateY(-6px);border-color:rgba(124,92,252,0.35)!important;box-shadow:0 20px 60px rgba(124,92,252,0.15)!important}
      @media(max-width:1024px){.srv-grid{grid-template-columns:1fr 1fr!important}}
      @media(max-width:600px){.srv-grid{grid-template-columns:1fr!important}}
    `}</style>
  </section>
);

export default Services;
