import React from 'react';

const Hero = ({ scrollTo }) => {
  const stats = [
    {n:7,s:'+',l:'Projects Shipped'},
    {n:8,s:'+',l:'Tech Stacks'},
    {n:5,s:'+',l:'Research Papers'},
    {n:2,s:'+',l:'Years Coding'},
  ];

  return (
    <section id="home" style={{
      minHeight:'100vh',display:'flex',alignItems:'center',
      position:'relative',overflow:'hidden',
      background:'linear-gradient(135deg,#08080f 0%,#0d0d1e 50%,#08080f 100%)',
    }}>
      {/* Glow orbs */}
      <div style={{position:'absolute',top:'-5%',right:'8%',width:700,height:700,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(124,92,252,0.18) 0%,transparent 65%)',
        pointerEvents:'none',animation:'float 8s ease-in-out infinite'}}/>
      <div style={{position:'absolute',bottom:'-10%',left:'5%',width:550,height:550,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(6,182,212,0.12) 0%,transparent 65%)',
        pointerEvents:'none',animation:'float 10s ease-in-out infinite reverse'}}/>
      {/* Grid dots */}
      <div style={{position:'absolute',inset:0,
        backgroundImage:'radial-gradient(rgba(124,92,252,0.07) 1px,transparent 1px)',
        backgroundSize:'44px 44px',pointerEvents:'none'}}/>

      <div style={{maxWidth:1200,margin:'0 auto',padding:'120px 48px 80px',width:'100%',position:'relative',zIndex:1}}>
        <div className="hero-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'center'}}>

          {/* Left */}
          <div>
            {/* Availability badge */}
            <div style={{
              display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',
              borderRadius:99,background:'rgba(34,197,94,0.08)',border:'1px solid rgba(34,197,94,0.25)',
              marginBottom:28,animation:'fadeInUp .8s ease both',
            }}>
              <span style={{width:8,height:8,background:'#22c55e',borderRadius:'50%',
                animation:'pulse-dot 1.8s infinite',display:'block',flexShrink:0}}/>
              <span style={{fontSize:12,fontWeight:600,color:'#22c55e'}}>Available for Freelance Projects</span>
            </div>

            <p style={{fontSize:14,color:'rgba(148,163,184,0.7)',marginBottom:10,fontWeight:500,animation:'fadeInUp .8s .1s ease both'}}>
              Hello, I'm
            </p>
            <h1 className="hero-name" style={{
              fontFamily:"'Space Grotesk','Cabinet Grotesk',sans-serif",
              fontSize:'clamp(2.6rem,5vw,4rem)',fontWeight:700,
              color:'#f1f5f9',lineHeight:1.08,letterSpacing:'-1.5px',marginBottom:14,
              animation:'fadeInUp .8s .15s ease both',
              textRendering:'optimizeLegibility',WebkitFontSmoothing:'antialiased',
            }}>Naveen Sam Raj H</h1>

            <div style={{
              fontFamily:"'Space Grotesk','Cabinet Grotesk',sans-serif",
              fontSize:'clamp(1rem,2.2vw,1.3rem)',fontWeight:600,marginBottom:20,
              background:'linear-gradient(135deg,#7c5cfc,#06b6d4)',
              WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
              animation:'fadeInUp .8s .2s ease both',letterSpacing:'-0.3px',
            }}>Full Stack Developer & Automation Specialist</div>

            <p style={{fontSize:15,color:'#94a3b8',lineHeight:1.82,marginBottom:40,maxWidth:480,animation:'fadeInUp .8s .25s ease both'}}>
              I build scalable web applications, automation systems, web scrapers, and business solutions using modern technologies.
            </p>

            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:56,animation:'fadeInUp .8s .3s ease both'}} className="hero-btns">
              <button className="btn-primary" onClick={()=>scrollTo('contact')}>💼 Hire Me</button>
              <button className="btn-outline" onClick={()=>scrollTo('projects')}>View Projects →</button>
              <button className="btn-outline" onClick={()=>scrollTo('contact')}>Contact Me</button>
            </div>

            {/* Stats */}
            <div style={{display:'flex',gap:36,flexWrap:'wrap',animation:'fadeInUp .8s .35s ease both'}} className="hero-stats">
              {stats.map(({n,s,l})=>(
                <div key={l}>
                  <div className="hstat-n" data-val={n} data-suffix={s}
                    style={{fontSize:'1.9rem',fontWeight:900,color:'#f1f5f9',lineHeight:1,letterSpacing:'-1px'}}>
                    {n}<em style={{fontStyle:'normal',color:'#7c5cfc'}}>{s}</em>
                  </div>
                  <div style={{fontSize:11,color:'#64748b',marginTop:4,fontWeight:500}}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Photo */}
          <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}} className="hero-right">
            <div className="hero-photo-card" style={{
              position:'relative',width:'100%',maxWidth:420,
              borderRadius:28,overflow:'hidden',
              background:'linear-gradient(135deg,rgba(124,92,252,0.12),rgba(6,182,212,0.08))',
              aspectRatio:'3/4',
              border:'1px solid rgba(124,92,252,0.22)',
              boxShadow:'0 32px 80px rgba(124,92,252,0.22)',
              animation:'fadeInUp .9s .1s ease both',
            }}>
              <img src="/images/Naveen-nobg.png" alt="Naveen Sam Raj H"
                style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 10%',display:'block'}}/>
              {/* Badge */}
              <div style={{
                position:'absolute',bottom:24,left:24,
                background:'rgba(8,8,15,0.85)',backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',
                borderRadius:14,padding:'14px 18px',
                border:'1px solid rgba(255,255,255,0.1)',
                display:'flex',alignItems:'center',gap:10,
              }}>
                <span style={{width:9,height:9,background:'#22c55e',borderRadius:'50%',
                  animation:'pulse-dot 1.8s infinite',display:'block',flexShrink:0}}/>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:'#f1f5f9'}}>Available for work</div>
                  <div style={{fontSize:11,color:'#64748b',marginTop:2}}>Open to opportunities</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr!important;padding:88px 20px 56px!important;gap:32px!important}
          .hero-right{justify-content:center!important}
          .hero-photo-card{max-width:260px!important}
          .hero-stats{gap:24px!important}
          .hero-btns{margin-bottom:36px!important}
        }
        @media(max-width:480px){
          .hero-photo-card{max-width:220px!important}
          .hero-name{font-size:2.3rem!important;letter-spacing:-1.5px!important}
        }
      `}</style>
    </section>
  );
};

export default Hero;
