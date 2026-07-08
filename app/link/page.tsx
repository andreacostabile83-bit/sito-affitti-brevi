export default function LinkPage() {
  const benefits = [
    {ico:"✅", title:"Zero morosità", sub:"Niente inquilini morosi"},
    {ico:"🛡️", title:"Assicurazione", sub:"Tutela da eventuali danni"},
    {ico:"🧹", title:"Pulizie professionali", sub:"Appartamento sempre curato"},
    {ico:"🔑", title:"Rientro libero", sub:"Casa tua quando vuoi"},
  ];
  const months = [
    {m:"Gennaio", w:72},{m:"Febbraio", w:68},{m:"Marzo", w:80},
    {m:"Aprile", w:83},{m:"Maggio", w:85},
  ];
  const reviews = [
    {i:"AB", c:"#C9A84C", tc:"#000", n:"Andrea B.", t:"Avevo un appartamento affittato a 1.000 euro al mese. Andrea si e occupato di tutto: strategia, annuncio, pricing e gestione. Nel primo mese ho guadagnato 2.200 euro netti."},
    {i:"SB", c:"#2E7D52", tc:"#fff", n:"Sonia B.", t:"Prima affittavo a 700 euro al mese. Andrea mi ha seguita dalla burocrazia alla pubblicazione. I risultati mi hanno dato ragione. Lo consiglio a chiunque."},
    {i:"NT", c:"#1565C0", tc:"#fff", n:"Nadia T.", t:"Andrea mi ha insegnato tutto: annuncio, foto, prezzi, ospiti. Oggi gestisco in autonomia completa. Ha cambiato il mio modo di vedere il mio immobile."},
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        :root{--gold:#C9A84C;--gold-l:#E8C96A;--bg:#0a0a0a;--card:#161616;--card2:#1e1e1e;--border:#2a2a2a;--muted:#777;--white:#fff}
        body{background:var(--bg);color:var(--white);font-family:'Inter',sans-serif}
        .page{max-width:430px;margin:0 auto;padding-bottom:48px}
        .hero{background:var(--card);padding:32px 24px 24px;text-align:center;border-bottom:1px solid var(--border)}
        .avatar{width:100px;height:100px;border-radius:50%;border:3px solid var(--gold);margin:0 auto 14px;overflow:hidden;background:#1e1e1e}
        .avatar img{width:100%;height:100%;object-fit:cover;object-position:top center}
        .badge{display:inline-flex;align-items:center;gap:6px;background:rgba(201,168,76,.12);border:1px solid rgba(201,168,76,.28);color:var(--gold);font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:10px}
        .name{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;margin-bottom:3px}
        .handle{color:var(--gold);font-size:13px;font-weight:500;margin-bottom:8px}
        .bio{color:var(--muted);font-size:12.5px;line-height:1.65;margin-bottom:14px}
        .bio-gold{color:var(--gold);font-weight:500}
        .benefits{display:grid;grid-template-columns:1fr 1fr;gap:7px;text-align:left}
        .bcard{background:#1e1e1e;border:1px solid #2a2a2a;border-radius:10px;padding:10px 12px;display:flex;align-items:flex-start;gap:8px}
        .bico{font-size:18px;flex-shrink:0}
        .btitle{font-size:11px;font-weight:600;color:#fff}
        .bsub{font-size:10px;color:#777;margin-top:1px}
        .stats{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--border)}
        .stat{padding:14px 6px;text-align:center;border-right:1px solid var(--border)}
        .stat:last-child{border-right:none}
        .stat-val{font-family:'Playfair Display',serif;font-size:19px;color:var(--gold);display:block;line-height:1.2}
        .stat-lbl{font-size:9.5px;color:var(--muted);margin-top:3px;line-height:1.3}
        .btns{padding:18px 16px 8px;display:flex;flex-direction:column;gap:10px}
        .btn{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:13px;text-decoration:none;font-size:13px;font-weight:600}
        .btn-gold{background:var(--gold);color:#000}
        .btn-dark{background:var(--card2);color:var(--white);border:1px solid var(--border)}
        .bicon{width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
        .btn-gold .bicon{background:rgba(0,0,0,.15)}
        .btn-dark .bicon{background:rgba(255,255,255,.06)}
        .btext{flex:1}
        .btext small{display:block;font-size:10px;font-weight:400;opacity:.6;margin-top:1px}
        .arr{opacity:.35;font-size:14px}
        .sec{padding:18px 16px 4px}
        .sec-ttl{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:2.5px;color:var(--gold);margin-bottom:12px}
        .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
        .gitem{aspect-ratio:1;border-radius:10px;overflow:hidden;border:1px solid var(--border);background:var(--card2)}
        .gitem img{width:100%;height:100%;object-fit:cover;display:block}
        .divider{height:1px;background:var(--border);margin:16px 16px 0}
        .chart{background:var(--card2);border:1px solid var(--border);border-radius:14px;padding:16px;margin:16px 16px 0}
        .chart-title{font-size:11px;font-weight:600;color:var(--white);margin-bottom:4px}
        .chart-sub{font-size:10px;color:var(--muted);margin-bottom:14px}
        .bar-row{display:flex;align-items:center;gap:8px;margin-bottom:10px}
        .bar-lbl{font-size:10px;color:var(--muted);width:90px;flex-shrink:0;text-align:right}
        .bar-bg{flex:1;height:8px;background:#2a2a2a;border-radius:4px;overflow:hidden}
        .bar-fill{height:100%;border-radius:4px;background:var(--gold)}
        .bar-val{font-size:10px;font-weight:600;color:var(--gold);width:40px;flex-shrink:0}
        .chart-foot{margin-top:10px;display:flex;justify-content:space-between}
        .chart-note{font-size:10px;color:var(--muted)}
        .chart-highlight{font-size:10px;font-weight:600;color:var(--gold)}
        .comp{background:var(--card2);border:1px solid var(--border);border-radius:14px;padding:16px;margin:10px 16px 0}
        .legend{display:flex;gap:14px;margin-bottom:12px}
        .leg{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--muted)}
        .leg-dot{width:8px;height:8px;border-radius:2px;flex-shrink:0}
        .comp-month{font-size:10px;color:#fff;margin-bottom:4px}
        .comp-row{display:flex;align-items:center;gap:6px;margin-bottom:3px}
        .comp-bar{height:7px;border-radius:3px}
        .comp-label{font-size:9px}
        .comp-foot{text-align:right;margin-top:8px;font-size:10.5px;font-weight:600;color:var(--gold)}
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
        <div className="hero">
          <div className="avatar">
            <img src="/foto-andrea.jpg" alt="Andrea Costabile" />
          </div>
          <div className="badge">Property Manager Roma</div>
          <div className="name">Andrea Costabile</div>
          <div className="handle">@acdomusaffitti</div>
          <div className="bio">
            Il tuo immobile puo rendere fino al doppio rispetto all affitto tradizionale.<br />
            <span className="bio-gold">Zero morosita. Massima cura. In mani sicure.</span>
          </div>
          <div className="benefits">
            {benefits.map(({ico,title,sub}) => (
              <div key={title} className="bcard">
                <span className="bico">{ico}</span>
                <div><div className="btitle">{title}</div><div className="bsub">{sub}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="stats">
          <div className="stat"><span className="stat-val">4.94</span><div className="stat-lbl">Valutazione media</div></div>
          <div className="stat"><span className="stat-val">83.5%</span><div className="stat-lbl">Tasso occupazione</div></div>
          <div className="stat"><span className="stat-val">93.5%</span><div className="stat-lbl">Recensioni 5 stelle</div></div>
        </div>

        <div className="btns">
          <a href="https://acdomusaffitti.it" className="btn btn-gold">
            <div className="bicon">🏠</div>
            <div className="btext">Visita il sito ufficiale<small>acdomusaffitti.it</small></div>
            <span className="arr">›</span>
          </a>
          <a href="https://drive.google.com/file/d/1-_B7BPrqGXFa08ZEfWZnSg_8ljZf0VFR/view?usp=drive_link" target="_blank" className="btn btn-dark">
            <div className="bicon">📘</div>
            <div className="btext">Scarica l&#39;ebook GRATIS<small>Come Guadagnare di Piu con gli Affitti Brevi</small></div>
            <span className="arr">›</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61590013411319" target="_blank" className="btn btn-dark">
            <div className="bicon">👥</div>
            <div className="btext">Seguimi su Facebook<small>AC Domus Affitti</small></div>
            <span className="arr">›</span>
          </a>
          <a href="mailto:info@acdomusaffitti.it" className="btn btn-dark">
            <div className="bicon">✉️</div>
            <div className="btext">Contattami<small>info@acdomusaffitti.it</small></div>
            <span className="arr">›</span>
          </a>
        </div>

        <div className="sec">
          <div className="sec-ttl">I miei appartamenti</div>
          <div className="gallery">
            <div className="gitem"><img src="/appartamento1.png" alt="Appartamento 1" /></div>
            <div className="gitem"><img src="/appartamento2.png" alt="Appartamento 2" /></div>
            <div className="gitem"><img src="/appartamento3.png" alt="Appartamento 3" /></div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="sec" style={{paddingBottom:0}}><div className="sec-ttl">I numeri parlano</div></div>

        <div className="chart">
          <div className="chart-title">Tasso di occupazione mensile</div>
          <div className="chart-sub">AC Domus vs media annunci simili Airbnb</div>
          {months.map(({m,w}) => (
            <div className="bar-row" key={m}>
              <div className="bar-lbl">{m}</div>
              <div className="bar-bg"><div className="bar-fill" style={{width:`${w}%`}}></div></div>
              <div className="bar-val">{w}%</div>
            </div>
          ))}
          <div className="chart-foot">
            <span className="chart-note">Media simili: circa 52%</span>
            <span className="chart-highlight">+30.6% vs competitor</span>
          </div>
        </div>

        <div className="comp">
          <div className="chart-title">Risultato property management</div>
          <div className="chart-sub">Reddito mensile prima e dopo</div>
          <div className="legend">
            <div className="leg"><div className="leg-dot" style={{background:"#444"}}></div>Prima</div>
            <div className="leg"><div className="leg-dot" style={{background:"#C9A84C"}}></div>Con AC Domus</div>
          </div>
          {[{mese:"Aprile",dopo:"2.200 euro"},{mese:"Maggio",dopo:"2.300 euro netti"}].map(({mese,dopo}) => (
            <div key={mese} style={{marginBottom:12}}>
              <div className="comp-month">{mese}</div>
              <div className="comp-row">
                <div className="comp-bar" style={{width:"43%",background:"#444"}}></div>
                <span className="comp-label" style={{color:"#666"}}>1.000 euro</span>
              </div>
              <div className="comp-row">
                <div className="comp-bar" style={{width:"99%",background:"#C9A84C"}}></div>
                <span className="comp-label" style={{color:"#C9A84C",fontWeight:600}}>{dopo}</span>
              </div>
            </div>
          ))}
          <div className="comp-foot">+130% di rendimento</div>
        </div>

        <div className="divider"></div>
        <div className="sec" style={{paddingBottom:0}}><div className="sec-ttl">Cosa dicono i proprietari</div></div>
        <div className="reviews">
          {reviews.map(({i,c,tc,n,t}) => (
            <div className="rcard" key={n}>
              <div className="rstars">★★★★★</div>
              <div className="rtext">{t}</div>
              <div className="rauth">
                <div className="rav" style={{background:c,color:tc}}>{i}</div>
                <div><div className="rname">{n}</div><div className="rloc">Roma</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <div className="flogo">AC Domus Affitti</div>
          <div className="fsub">Gestione professionale affitti brevi - Roma - acdomusaffitti.it</div>
        </div>
      </div>
    </>
  );
}
