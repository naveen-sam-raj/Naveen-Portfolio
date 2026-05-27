import React from 'react';

const CTA = ({ scrollTo }) => (
  <section style={{
    padding:'100px 48px',
    background:'linear-gradient(135deg,#0d0d1e 0%,#130d28 50%,#0d0d1e 100%)',
    position:'relative',overflow:'hidden',textAlign:'center',
  }}>
    <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',
      width:600,height:600,borderRadius:'50%',
      background:'radial-gradient(circle,rgba(124,92,252,0.15) 0%,transparent 65%)',
      pointerEvents:'none'}}/>
    <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,
      backgroundImage:'radial-gradient(rgba(124,92,252,0.06) 1px,transparent 1px)',
      backgroundSize:'44px 44px',pointerEvents:'none'}}/>

    <div style={{maxWidth:720,margin:'0 auto',position:'relative',zIndex:1}}>
      <div className="sec-tag" style={{margin:'0 auto 20px'}}>Let's Work Together</div>
      <h2 style={{
        fontFamily:"'Space Grotesk','Cabinet Grotesk',sans-serif",
        fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,
        color:'#f1f5f9',letterSpacing:'-1px',lineHeight:1.1,marginBottom:18,
        textRendering:'optimizeLegibility',WebkitFontSmoothing:'antialiased',
      }}>Need Automation or <span style={{
        background:'linear-gradient(135deg,#7c5cfc,#06b6d4)',
        WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
      }}>Full Stack Solutions?</span></h2>
      <p style={{fontSize:16,color:'#94a3b8',lineHeight:1.8,marginBottom:40,maxWidth:560,margin:'0 auto 40px'}}>
        I help businesses automate workflows, collect data efficiently, and build scalable modern applications.
      </p>
      <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
        <button className="btn-primary" onClick={()=>scrollTo('contact')} style={{padding:'14px 36px',fontSize:15}}>
          💼 Hire Me
        </button>
        <button className="btn-outline" onClick={()=>scrollTo('contact')} style={{padding:'14px 36px',fontSize:15}}>
          💬 Let's Talk
        </button>
      </div>
    </div>
  </section>
);

export default CTA;
