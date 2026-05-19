export default function LinkPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        :root{
          --gold:#C9A84C;--gold-l:#E8C96A;
          --bg:#0a0a0a;--card:#161616;--card2:#1e1e1e;
          --border:#2a2a2a;--muted:#777;--white:#fff
        }
        body{background:var(--bg);color:var(--white);font-family:'Inter',sans-serif}
        .page{max-width:430px;margin:0 auto;padding-bottom:48px}
        .hero{background:var(--card);padding:32px 24px 24px;text-align:center;border-bottom:1px solid var(--border)}
        .avatar{width:100px;height:100px;border-radius:50%;border:3px solid var(--gold);margin:0 auto 14px;overflow:hidden;background:#1e1e1e}
        .avatar img{width:100%;height:100%;object-fit:cover;object-position:top center}
        .badge{display:inline-flex;align-items:center;gap:6px;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.28);color:var(--gold);font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:10px}
        .name{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:3px}
        .handle{color:var(--gold);font-size:13px;font-weight:500;margin-bottom:8px}
        .bio{color:var(--muted);font-size:12.5px;line-height:1.65}
        .stats{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--border)}
        .stat{padding:14px 6px;text-align:center;border-right:1px solid var(--border)}
        .stat:last-child{border-right:none}
        .stat-val{font-family:'Playfair Display',serif;font-size:19px;color:var(--gold);display:block;line-height:1.2}
        .stat-lbl{font-size:9.5px;color:var(--muted);margin-top:3px;line-height:1.3}
        .btns{padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px}
        .btn{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:13px;text-decoration:none;font-size:13px;font-weight:600}
        .btn-gold{background:var(--gold);color:#000}
        .btn-dark{background:var(--card2);color:var(--white);border:1px solid var(--border)}
        .bico{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .btn-gold .bico{background:rgba(0,0,0,.15)}
        .btn-dark .bico{background:rgba(255,255,255,.06)}
        .btxt{flex:1}
        .btxt small{display:block;font-size:10px;font-weight:400;opacity:.6;margin-top:1px}
        .arr{opacity:.35;font-size:14px}
        .sec{padding:18px 16px 4px}
        .sec-ttl{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:2.5px;color:var(--gold);margin-bottom:12px}
        .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
        .gitem{aspect-ratio:1;border-radius:10px;overflow:hidden;border:1px solid var(--border);background:var(--card2)}
        .gitem img{width:100%;height:100%;object-fit:cover;display:block}
        .divider{height:1px;background:var(--border);margin:16px 16px 0}
        .chart-wrap{background:var(--card2);border:1px solid var(--border);border-radius:14px;padding:16px;margin:16px 16px 0}
        .chart-title{font-size:11px;font-weight:600;color:var(--white);margin-bottom:4px}
        .chart-sub{font-size:10px;color:var(--muted);margin-bottom:14px}
        .bar-row{display:flex;align-items:center;gap:8px;margin-bottom:10px}
        .bar-lbl{font-size:10px;color:var(--muted);width:90px;flex-shrink:0;text-align:right}
        .bar-bg{flex:1;height:8px;background:#2a2a2a;border-radius:4px;overflow:hidden}
        .bar-fill{height:100%;border-radius:4px;background:var(--gold)}
        .bar-val{font-size:10px;font-weight:600;color:var(--gold);width:40px;flex-shrink:0}
        .comp-wrap{background:var(--card2);border:1px solid var(--border);border-radius:14px;padding:16px;margin:10px 16px 0}
        .legend{display:flex;gap:14px;margin-bottom:12px}
        .leg{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--muted)}
        .leg-dot{width:8px;height:8px;border-radius:2px;flex-shrink:0}
        .reviews{padding:16px 16px 0;display:flex;flex-direction:column;gap:10px}
        .rcard{background:var(--card2);border:1px solid var(--border);border-radius:12px;padding:14px 15px}
        .rstars{color:var(--gold);font-size:10px;margin-bottom:6px;letter-spacing:1px}
        .rtext{font-size:11.5px;line-height:1.55;color:#bbb;margin-bottom:10px}
        .rauth{display:flex;align-items:center;gap:9px}
        .rav{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
        .rname{font-size:12px;font-weight:600}
        .rloc{font-size:10px;color:var(--muted)}
        .footer{text-align:center;padding:28px 20px 8px;border-top:1px solid var(--border);margin-top:22px}
        .flogo{font-family:'Playfair Display',serif;color:var(--gold);font-size:15px;font-weight:700;margin-bottom:3px}
        .fsub{font-size:10.5px;color:var(--muted)}
      `}</style>

      <div className="page">
        {/* HERO */}
        <div className="hero">
          <div className="avatar">
            <img src="/Andrea.jpg" alt="Andrea Costabile" />
          </div>
          <div className="badge">🏠 Property Manager · Roma</div>
          <div className="name">Andrea Costabile</div>
          <div className="handle">@acdomusaffitti</div>
          <div className="bio">
            Il tuo immobile può rendere fino al doppio rispetto all&apos;affitto tradizionale.<br />
            <span style={{color:"#C9A84C",fontWeight:500}}>Zero morosità. Massima cura. In mani sicure.</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7,marginTop:14,textAlign:"left"}}>
            {[
              {ico:"✅", title:"Zero morosità", sub:"Niente inquilini morosi"},
              {ico:"🛡️", title:"Assicurazione", sub:"Tutela da eventuali danni"},
              {ico:"🧹", title:"Pulizie professionali", sub:"Appartamento sempre curato"},
              {ico:"🔑", title:"Rientro libero", sub:"Casa tua quando vuoi"},
            ].map(({ico,title,sub})=>(
              <div key={title} style={{background:"#1e1e1e",border:"1px solid #2a2a2a",borderRadius:10,padding:"10px 12px",display:"flex",alignItems:"flex-start",gap:8}}>
                <span style={{fontSize:18}}>{ico}</span>
                <div><div style={{fontSize:11,fontWeight:600,color:"#fff"}}>{title}</div><div style={{fontSize:10,color:"#777",marginTop:1}}>{sub}</div></div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat">
            <span className="stat-val">4.94 ★</span>
            <div className="stat-lbl">Valutazione media ospiti</div>
          </div>
          <div className="stat">
            <span className="stat-val">83.5%</span>
            <div className="stat-lbl">Tasso di occupazione</div>
          </div>
          <div className="stat">
            <span className="stat-val">93.5%</span>
            <div className="stat-lbl">Recensioni 5 stelle</div>
          </div>
        </div>

        {/* PULSANTI */}
        <div className="btns">
          <a href="https://acdomusaffitti.it" className="btn btn-gold">
            <div className="bico">🏠</div>
            <div className="btxt">Visita il sito ufficiale<small>acdomusaffitti.it</small></div>
            <span className="arr">›</span>
          </a>
          <a href="https://drive.google.com/file/d/1-_B7BPrqGXFa08ZEfWZnSg_8ljZf0VFR/view?usp=drive_link" target="_blank" className="btn btn-dark">
            <div className="bico">📘</div>
            <div className="btxt">Scarica l&apos;ebook GRATIS<small>Come Guadagnare di Più con gli Affitti Brevi</small></div>
            <span className="arr">›</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61590013411319" target="_blank" className="btn btn-dark">
            <div className="bico">👥</div>
            <div className="btxt">Seguimi su Facebook<small>AC Domus Affitti</small></div>
            <span className="arr">›</span>
          </a>
          <a href="mailto:info@acdomusaffitti.it" className="btn btn-dark">
            <div className="bico">✉️</div>
            <div className="btxt">Contattami<small>info@acdomusaffitti.it</small></div>
            <span className="arr">›</span>
          </a>
        </div>

        {/* GALLERY */}
        <div className="sec">
          <div className="sec-ttl">I miei appartamenti</div>
          <div className="gallery">
            <div className="gitem"><img src="/appartamento1.png" alt="Appartamento 1" /></div>
            <div className="gitem"><img src="/appartamento2.png" alt="Appartamento 2" /></div>
            <div className="gitem"><img src="/appartamento3.png" alt="Appartamento 3" /></div>
          </div>
        </div>

        <div className="divider"></div>

        {/* GRAFICO OCCUPAZIONE */}
        <div className="sec" style={{paddingBottom:0}}><div className="sec-ttl">I numeri parlano</div></div>
        <div className="chart-wrap">
          <div className="chart-title">Tasso di occupazione mensile</div>
          <div className="chart-sub">AC Domus vs media annunci simili Airbnb</div>
          {[
            {m:"Gennaio", v:72, w:"72%"},
            {m:"Febbraio", v:68, w:"68%"},
            {m:"Marzo", v:80, w:"80%"},
            {m:"Aprile", v:83, w:"83%"},
            {m:"Maggio", v:85, w:"85%"},
          ].map(({m,w}) => (
            <div className="bar-row" key={m}>
              <div className="bar-lbl">{m}</div>
              <div className="bar-bg"><div className="bar-fill" style={{width:w}}></div></div>
              <div className="bar-val">{w}</div>
            </div>
          ))}
          <div style={{marginTop:10,display:"flex",justifyContent:"space-between"}}>
            <span style={{fontSize:10,color:"var(--muted)"}}>Media simili: ~52%</span>
            <span style={{fontSize:10,fontWeight:600,color:"var(--gold)"}}>+30.6% vs competitor</span>
          </div>
        </div>

        {/* GRAFICO ENTRATE */}
        <div className="comp-wrap">
          <div className="chart-title">Risultato property management</div>
          <div className="chart-sub">Reddito mensile prima e dopo</div>
          <div className="legend">
            <div className="leg"><div className="leg-dot" style={{background:"#444"}}></div>Prima</div>
            <div className="leg"><div className="leg-dot" style={{background:"var(--gold)"}}></div>Con AC Domus</div>
          </div>
          {[
            {mese:"Aprile", dopo:"€2.200"},
            {mese:"Maggio", dopo:"€2.300 netti"},
          ].map(({mese, dopo}) => (
            <div key={mese} style={{marginBottom:12}}>
              <div style={{fontSize:10,color:"var(--white)",marginBottom:4}}>{mese}</div>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                <div style={{height:7,borderRadius:3,background:"#444",width:"43%"}}></div>
                <span style={{fontSize:9,color:"#666"}}>€1.000</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{height:7,borderRadius:3,background:"var(--gold)",width:"99%"}}></div>
                <span style={{fontSize:9,color:"var(--gold)",fontWeight:600}}>{dopo}</span>
              </div>
            </div>
          ))}
          <div style={{textAlign:"right",marginTop:8}}>
            <span style={{fontSize:10.5,fontWeight:600,color:"var(--gold)"}}>+130% di rendimento 🚀</span>
          </div>
        </div>

        <div className="divider"></div>

        {/* RECENSIONI */}
        <div className="sec" style={{paddingBottom:0}}><div className="sec-ttl">Cosa dicono i proprietari</div></div>
        <div className="reviews">
          {[
            {initials:"AB", color:"#C9A84C", textColor:"#000", name:"Andrea B.", text:"Avevo un appartamento affittato a €1.000 al mese. Andrea si è occupato di tutto: strategia, annuncio, pricing e gestione. Nel primo mese ho guadagnato €2.200 netti."},
            {initials:"SB", color:"#2E7D52", textColor:"#fff", name:"Sonia B.", text:"Prima affittavo a €700 al mese. Andrea mi ha seguita dalla burocrazia alla pubblicazione. I risultati mi hanno dato ragione. Lo consiglio a chiunque."},
            {initials:"NT", color:"#1565C0", textColor:"#fff", name:"Nadia T.", text:"Andrea mi ha insegnato tutto: annuncio, foto, prezzi, ospiti. Oggi gestisco in autonomia completa. Ha cambiato il mio modo di vedere il mio immobile."},
          ].map(({initials, color, textColor, name, text}) => (
            <div className="rcard" key={name}>
              <div className="rstars">★★★★★</div>
              <div className="rtext">{text}</div>
              <div className="rauth">
                <div className="rav" style={{background:color, color:textColor}}>{initials}</div>
                <div><div className="rname">{name}</div><div className="rloc">Roma</div></div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="flogo">AC Domus Affitti</div>
          <div className="fsub">Gestione professionale affitti brevi &middot; Roma &middot; acdomusaffitti.it</div>
        </div>
      </div>
    </>
  );
}
