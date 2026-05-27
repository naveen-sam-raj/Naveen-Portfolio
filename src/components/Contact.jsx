import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm('service_zcx7jv5','template_fca8rm9',form.current,'wUsO6V4EJSmz7scT7')
      .then(()=>{setSending(false);setSent(true);setTimeout(()=>setSent(false),4000);e.target.reset();})
      .catch(()=>{setSending(false);alert('Failed. Try again.');});
  };

  const fi = {
    background:'rgba(255,255,255,0.04)',border:'1.5px solid rgba(255,255,255,0.08)',
    borderRadius:10,padding:'13px 16px',fontFamily:'inherit',fontSize:14,
    color:'#f1f5f9',outline:'none',width:'100%',resize:'none',transition:'all .25s',
  };
  const fl = {fontSize:11,color:'#64748b',fontWeight:700,letterSpacing:1.5,textTransform:'uppercase',marginBottom:7,display:'block'};

  const infos = [
    {icon:'✉️',label:'Email',val:'hnaveensamraj@gmail.com'},
    {icon:'📱',label:'Phone',val:'+91 9943269660'},
    {icon:'📍',label:'Location',val:'Tamil Nadu, India'},
    {icon:'🌐',label:'Timezone',val:'IST (UTC +5:30)'},
  ];

  return (
    <section id="contact" className="section" style={{background:'#08080f',position:'relative'}}>
      <div style={{position:'absolute',top:'20%',right:'-5%',width:400,height:400,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(124,92,252,0.07) 0%,transparent 70%)',pointerEvents:'none'}}/>

      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:72,alignItems:'start'}} className="ct-grid">
          {/* Info */}
          <div>
            <div className="sec-tag">Contact</div>
            <h2 className="sec-h">Let's Build <span className="grad">Something Great</span></h2>
            <p style={{fontSize:15,color:'#94a3b8',lineHeight:1.8,margin:'16px 0 32px'}}>
              Available for freelance projects, contract work, and long-term collaborations.
              I reply within 24 hours — usually much faster.
            </p>

            <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:32}}>
              {infos.map(c=>(
                <div key={c.label} className="glass ct-item" style={{
                  display:'flex',alignItems:'center',gap:14,
                  padding:'16px 20px',transition:'all .25s',
                }}>
                  <div style={{
                    width:44,height:44,borderRadius:12,
                    background:'linear-gradient(135deg,rgba(124,92,252,0.2),rgba(6,182,212,0.1))',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontSize:18,flexShrink:0,border:'1px solid rgba(124,92,252,0.2)',
                  }}>{c.icon}</div>
                  <div>
                    <div style={{fontSize:10,color:'#64748b',letterSpacing:1.5,textTransform:'uppercase',fontWeight:700,marginBottom:3}}>{c.label}</div>
                    <div style={{fontSize:14,color:'#f1f5f9',fontWeight:600}}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
              {[
                {l:'LinkedIn',url:'https://www.linkedin.com/in/naveensamraj',icon:'in'},
                {l:'GitHub',url:'https://github.com/naveen-sam-raj',icon:'⌥'},
              ].map(s=>(
                <a key={s.l} href={s.url} target="_blank" rel="noreferrer" style={{
                  display:'inline-flex',alignItems:'center',gap:6,padding:'9px 20px',
                  border:'1.5px solid rgba(255,255,255,0.1)',borderRadius:99,fontSize:13,fontWeight:600,
                  color:'#94a3b8',transition:'all .22s',
                }} className="soc-chip">{s.icon} {s.l}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass" style={{padding:36,borderRadius:24}}>
            <h3 style={{fontSize:20,fontWeight:800,color:'#f1f5f9',marginBottom:6,letterSpacing:'-0.5px'}}>Send a Message</h3>
            <p style={{fontSize:13.5,color:'#64748b',marginBottom:28}}>I'll get back to you within 24 hours.</p>

            <form ref={form} onSubmit={sendEmail}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}} className="form-row2">
                <div>
                  <label style={fl}>Name</label>
                  <input name="name" type="text" placeholder="Your name" required style={fi}
                    onFocus={e=>e.target.style.borderColor='#7c5cfc'}
                    onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
                </div>
                <div>
                  <label style={fl}>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" required style={fi}
                    onFocus={e=>e.target.style.borderColor='#7c5cfc'}
                    onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
                </div>
              </div>
              <div style={{marginBottom:14}}>
                <label style={fl}>Subject</label>
                <input name="subject" type="text" placeholder="Project type or service needed" style={fi}
                  onFocus={e=>e.target.style.borderColor='#7c5cfc'}
                  onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
              </div>
              <div style={{marginBottom:20}}>
                <label style={fl}>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project, budget, and timeline..." required style={fi}
                  onFocus={e=>e.target.style.borderColor='#7c5cfc'}
                  onBlur={e=>e.target.style.borderColor='rgba(255,255,255,0.08)'}/>
              </div>
              <button type="submit" disabled={sending} className="btn-primary" style={{
                width:'100%',justifyContent:'center',padding:'14px',fontSize:14,
                opacity: sending ? 0.6 : 1, cursor: sending ? 'not-allowed' : 'pointer',
              }}>
                {sending ? '⏳ Sending...' : sent ? '✅ Sent Successfully!' : '🚀 Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .ct-item:hover{border-color:rgba(124,92,252,0.3)!important;transform:translateX(4px)}
        .soc-chip:hover{border-color:rgba(124,92,252,0.4)!important;color:#a78bfa!important;background:rgba(124,92,252,0.08)!important}
        @media(max-width:900px){.ct-grid{grid-template-columns:1fr!important;gap:40px!important}.form-row2{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  );
};

export default Contact;
