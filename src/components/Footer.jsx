import React from 'react';

const Footer = ({ scrollTo }) => {
  const links = ['home','about','services','skills','projects','experience','contact'];

  return (
    <footer style={{
      background:'#030308',
      borderTop:'1px solid rgba(255,255,255,0.06)',
      padding:'60px 48px 36px',
    }}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        {/* Top */}
        <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr',gap:40,marginBottom:56}} className="foot-grid">
          {/* Brand */}
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
              <div style={{
                width:36,height:36,borderRadius:10,
                background:'linear-gradient(135deg,#7c5cfc,#06b6d4)',
                display:'flex',alignItems:'center',justifyContent:'center',
                color:'#fff',fontSize:16,fontWeight:900,flexShrink:0,
              }}>N</div>
              <span style={{fontSize:17,fontWeight:800,color:'#f1f5f9',letterSpacing:'-0.5px'}}>Naveen Sam Raj</span>
            </div>
            <p style={{fontSize:13.5,color:'#64748b',lineHeight:1.8,maxWidth:260}}>
              Full Stack Developer & Automation Specialist building scalable web apps, scrapers, and automation systems for global clients.
            </p>
            <div style={{display:'flex',gap:10,marginTop:20}}>
              {[
                {url:'https://www.linkedin.com/in/naveensamraj',label:'in',type:'linkedin'},
                {url:'https://github.com/naveen-sam-raj',label:'⌥',type:'github'},
                {url:'https://wa.me/919943269660?text=Hi%20Naveen!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',label:'WA',type:'whatsapp'},
              ].map(s=>(
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" style={{
                  width:36,height:36,
                  border: s.type==='whatsapp' ? '1px solid rgba(37,211,102,0.35)' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius:'50%',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  color: s.type==='whatsapp' ? '#25d366' : 'rgba(255,255,255,0.4)',
                  fontSize: s.type==='whatsapp' ? 11 : 13,
                  fontWeight:700,transition:'all .22s',
                  background: s.type==='whatsapp' ? 'rgba(37,211,102,0.08)' : 'transparent',
                }} className={`foot-soc-link ${s.type==='whatsapp'?'foot-wa-link':''}`}>{s.label}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{fontSize:12,fontWeight:700,color:'#f1f5f9',letterSpacing:2,textTransform:'uppercase',marginBottom:20}}>
              Navigation
            </div>
            {links.map(l=>(
              <div key={l} onClick={()=>scrollTo(l)} style={{
                fontSize:14,color:'#64748b',cursor:'pointer',marginBottom:10,
                textTransform:'capitalize',transition:'color .2s',
              }} className="foot-link">{l}</div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{fontSize:12,fontWeight:700,color:'#f1f5f9',letterSpacing:2,textTransform:'uppercase',marginBottom:20}}>
              Services
            </div>
            {['Web Scraping','Lead Generation','Automation Tools','API Integration','Full Stack Dev','MERN Stack'].map(s=>(
              <div key={s} style={{fontSize:14,color:'#64748b',marginBottom:10}}>{s}</div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,0.05)',paddingTop:28,
          display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12,
        }}>
          <div style={{fontSize:13,color:'#4b5563'}}>
            © 2025 Naveen Sam Raj H · Built with ♥ using React
          </div>
          <div style={{fontSize:13,color:'#4b5563'}}>
            Available for freelance · Tamil Nadu, India
          </div>
        </div>
      </div>

      <style>{`
        .foot-link:hover{color:#a78bfa!important}
        .foot-soc-link:hover{border-color:rgba(124,92,252,0.4)!important;color:#a78bfa!important;background:rgba(124,92,252,0.08)!important}
        .foot-wa-link:hover{border-color:rgba(37,211,102,0.6)!important;color:#25d366!important;background:rgba(37,211,102,0.15)!important;transform:scale(1.1)}
        @media(max-width:900px){
          .foot-grid{grid-template-columns:1fr!important}
          footer{padding:48px 20px 28px!important}
        }
      `}</style>
    </footer>
  );
};

export default Footer;
