import React from 'react';

const whyItems = [
  {icon:'⚡',title:'Fast Delivery',color:'#f59e0b',
    desc:'I deliver projects on time, every time. Clear milestones and daily updates keep your project on track.'},
  {icon:'✨',title:'Clean Code',color:'#7c5cfc',
    desc:'Modular, well-documented code that is easy to maintain, extend, and hand off to future developers.'},
  {icon:'💬',title:'Responsive Communication',color:'#06b6d4',
    desc:'Available across timezones. Quick replies, transparent updates, and no ghosting — ever.'},
  {icon:'📈',title:'Scalable Solutions',color:'#22c55e',
    desc:'Architectures built to grow with your business — from MVP to enterprise-level traffic.'},
  {icon:'🤖',title:'Automation Expertise',color:'#f43f5e',
    desc:'From simple scripts to complex pipelines — I automate the repetitive so your team focuses on what matters.'},
];

const WhyHireMe = () => (
  <section className="section" style={{background:'#0d0d1e',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',top:'30%',right:'-5%',width:400,height:400,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(124,92,252,0.07) 0%,transparent 70%)',pointerEvents:'none'}}/>

    <div className="wrap">
      <div className="sec-head center">
        <div className="sec-tag" style={{margin:'0 auto 16px'}}>Why Me</div>
        <h2 className="sec-h">Why Clients <span className="grad">Choose Me</span></h2>
        <p className="sec-sub" style={{margin:'14px auto 0'}}>
          What makes working with me different — and why international clients keep coming back.
        </p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:16}} className="why-grid">
        {whyItems.map((w,i)=>(
          <div key={w.title} className="glass why-card" style={{
            padding:'28px 22px',textAlign:'center',cursor:'default',
            position:'relative',overflow:'hidden',
          }}>
            <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',
              width:60,height:2,background:`linear-gradient(90deg,transparent,${w.color},transparent)`}}/>
            <div style={{
              width:52,height:52,borderRadius:'50%',margin:'0 auto 16px',
              background:`rgba(${
                w.color==='#f59e0b'?'245,158,11':
                w.color==='#7c5cfc'?'124,92,252':
                w.color==='#06b6d4'?'6,182,212':
                w.color==='#22c55e'?'34,197,94':'244,63,94'},0.1)`,
              display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,
              border:`1.5px solid ${w.color}30`,
            }}>{w.icon}</div>
            <h3 style={{fontSize:14,fontWeight:700,color:'#f1f5f9',marginBottom:10,letterSpacing:'-0.2px'}}>{w.title}</h3>
            <p style={{fontSize:12.5,color:'#94a3b8',lineHeight:1.75}}>{w.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <style>{`
      .why-card:hover{transform:translateY(-6px)!important;border-color:rgba(124,92,252,0.35)!important}
      @media(max-width:1100px){.why-grid{grid-template-columns:repeat(3,1fr)!important}}
      @media(max-width:700px){.why-grid{grid-template-columns:1fr 1fr!important}}
      @media(max-width:480px){.why-grid{grid-template-columns:1fr!important}}
    `}</style>
  </section>
);

export default WhyHireMe;
