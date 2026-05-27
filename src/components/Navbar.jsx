import React from 'react';

const Navbar = ({ scrolled, menuOpen, setMenuOpen, activeSection, scrollTo }) => {
  const links = ['home','about','services','skills','projects','experience','contact'];

  const S = {
    nav:{
      position:'fixed',top:0,left:0,right:0,zIndex:1000,height:68,
      padding:'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between',
      transition:'all .4s',
      background: scrolled ? 'rgba(8,8,15,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    },
    logo:{display:'flex',alignItems:'center',gap:10,cursor:'pointer'},
    logoIcon:{
      width:36,height:36,borderRadius:10,
      background:'linear-gradient(135deg,#7c5cfc,#06b6d4)',
      display:'flex',alignItems:'center',justifyContent:'center',
      color:'#fff',fontSize:16,fontWeight:900,flexShrink:0,
    },
    logoText:{fontSize:17,fontWeight:800,color:'#f1f5f9',letterSpacing:'-0.5px'},
    links:{display:'flex',gap:2},
    link:(active)=>({
      padding:'7px 15px',fontSize:13,fontWeight:500,
      color: active ? '#7c5cfc' : 'rgba(241,245,249,0.55)',
      cursor:'pointer',borderRadius:8,transition:'all .2s',textTransform:'capitalize',
      background: active ? 'rgba(124,92,252,0.1)' : 'transparent',
    }),
    hireBtn:{
      padding:'9px 22px',
      background:'linear-gradient(135deg,#7c5cfc,#5b3fd4)',
      color:'#fff',fontSize:13,fontWeight:600,borderRadius:10,border:'none',
      cursor:'pointer',transition:'all .25s',fontFamily:'inherit',
      boxShadow:'0 4px 16px rgba(124,92,252,0.35)',
    },
    burger:{display:'none',flexDirection:'column',gap:5,cursor:'pointer',padding:6,marginLeft:8},
    burgerSpan:{width:22,height:2,background:'#94a3b8',borderRadius:2,display:'block'},
    mobMenu:{
      position:'fixed',top:68,left:0,right:0,
      background:'rgba(8,8,15,0.97)',backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',
      borderBottom:'1px solid rgba(255,255,255,0.06)',
      zIndex:999,padding:'12px 20px 20px',
    },
    mobLink:{
      padding:'13px 16px',fontSize:15,fontWeight:500,
      color:'rgba(241,245,249,0.7)',cursor:'pointer',
      borderRadius:10,textTransform:'capitalize',display:'block',
    },
  };

  return (
    <>
      <nav style={S.nav}>
        <div style={S.logo} onClick={()=>scrollTo('home')}>
          <div style={S.logoIcon}>N</div>
          <span style={S.logoText}>Naveen</span>
        </div>

        <div style={S.links} className="nav-desk-links">
          {links.map(l=>(
            <div key={l} style={S.link(activeSection===l)} onClick={()=>scrollTo(l)}>{l}</div>
          ))}
        </div>

        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <button style={S.hireBtn} className="nav-hire-btn" onClick={()=>scrollTo('contact')}>Hire Me</button>
          <div style={S.burger} className="nav-burger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span style={S.burgerSpan}/>
            <span style={S.burgerSpan}/>
            <span style={S.burgerSpan}/>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div style={S.mobMenu}>
          {links.map(l=>(
            <div key={l} style={S.mobLink} onClick={()=>scrollTo(l)}>{l}</div>
          ))}
          <button style={{...S.hireBtn,width:'100%',marginTop:8,justifyContent:'center'}} onClick={()=>scrollTo('contact')}>Hire Me</button>
        </div>
      )}

      <style>{`
        @media(max-width:900px){
          .nav-desk-links{display:none!important}
          .nav-hire-btn{display:none!important}
          .nav-burger{display:flex!important}
          nav{padding:0 20px!important}
        }
      `}</style>
    </>
  );
};

export default Navbar;
