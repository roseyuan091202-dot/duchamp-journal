/* 关于我们 · About Us — WEBSITE / pitch edition.
   Text synced from AboutUsWeChat.jsx (matches the published 公众号 posts);
   full web design kept (floats, shape-outside, masks, keycaps, vertical type). */
function AboutUsWeb(props){
  /* lang: 'both' (bilingual master working copy) | 'cn' | 'en' */
  const lang=(props&&props.lang)||'both';
  const [fmt,setFmt]=React.useState(0);
  const [hot,setHot]=React.useState(-1);
  const {Label,Emphasis:DSEmphasis,ConversationBox,JournalFooter}=window.DuchampJournalDesignSystem_a8bf23||{};
  /* house underline, one step lighter than the system default (--ink-300) so the
     rule reads as a soft grey mark rather than a hard black one */
  const Emphasis=({children,style})=>(<DSEmphasis style={{textDecorationColor:'#B9C2C8',textDecorationThickness:'1px',...style}}>{children}</DSEmphasis>);
  const issue={
    '--blue-900':'var(--m-sage-600)','--blue-700':'var(--m-sage-600)','--blue-600':'#8D9680',
    '--blue-400':'var(--m-sage-400)','--blue-300':'var(--m-sage-400)','--blue-200':'var(--m-sage-200)',
    '--blue-100':'var(--m-sage-100)','--mark-highlight':'var(--m-rose-200)',
    '--wash-1':'var(--m-sage-100)','--wash-2':'var(--m-sage-200)','--wash-3':'var(--m-sage-400)',
    '--surface-footer':'var(--m-sage-200)','--mist-footer':'linear-gradient(180deg,#F4F6F1 0%, #DDE1D6 100%)'};
  const p={fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-0)',lineHeight:'var(--lh-reading)',color:'var(--ink-700)',margin:'0 0 var(--space-5)'};
  const pEn={fontFamily:'var(--font-serif)',fontSize:'calc(var(--step--1) + 4px)',lineHeight:1.95,color:'var(--ink-600)',margin:'0 0 var(--space-4)'};
  const pad='var(--sheet-pad-mobile)';
  /* 微信公众号 export mode: the WeChat editor strips float/shape-outside, so figures stack full-width */
  const wx=false;
  const noFloat=(st)=>wx?{...st,float:'none',clear:'both',width:'100%',maxWidth:'100%',margin:'var(--space-6) 0',textAlign:'center'}:st;
  const cap=(px)=>wx?{maxWidth:px+'px',margin:'0 auto'}:{};
  const rose='#A88187',sage='#8D9680';
  /* CN section head — sage script kicker, rose numeral, each numeral treated differently */
  const Head=({n,en,children})=>{
    const marks={
      '1':<span aria-hidden="true" style={{width:'30px',height:'30px',flex:'0 0 auto',display:'grid',placeItems:'center',background:'var(--m-rose-200)',fontFamily:'var(--font-serif)',fontSize:'var(--step--1)',color:rose}}>1</span>,
      '2':<span aria-hidden="true" style={{width:'30px',height:'30px',flex:'0 0 auto',display:'grid',placeItems:'center',borderRadius:'50%',border:'1px solid var(--m-rose-400)',fontFamily:'var(--font-serif)',fontSize:'var(--step--1)',color:rose}}>2</span>,
      '3':<span aria-hidden="true" style={{flex:'0 0 auto',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step-2)',lineHeight:1,color:rose,borderBottom:'2px solid var(--m-rose-400)',paddingBottom:'2px'}}>03</span>,
      '4':<span aria-hidden="true" style={{flex:'0 0 auto',display:'flex',gap:'3px',alignItems:'flex-end'}}><span style={{width:'6px',height:'22px',background:'var(--m-rose-400)'}}/><span style={{width:'6px',height:'14px',background:'var(--m-rose-200)'}}/><span style={{width:'6px',height:'28px',background:'var(--m-rose-400)'}}/></span>,
      '5':<span aria-hidden="true" style={{width:'30px',height:'30px',flex:'0 0 auto',display:'grid',placeItems:'center',border:'1px solid var(--m-rose-400)',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step--1)',color:rose}}>05</span>,
      '6':<span aria-hidden="true" style={{flex:'0 0 auto',display:'flex',gap:'3px',alignItems:'center'}}><span style={{width:'10px',height:'10px',borderRadius:'50%',background:'var(--m-rose-400)'}}/><span style={{width:'10px',height:'10px',borderRadius:'50%',border:'1px solid var(--m-rose-400)'}}/><span style={{width:'10px',height:'10px',borderRadius:'50%',border:'1px solid var(--m-rose-200)'}}/></span>
    };
    return (<div style={{margin:'var(--space-9) 0 var(--space-6)'}}>
      <div data-wx-raster="1" style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'14px'}}>
        {marks[n]}
        <span style={{flex:'0 0 auto',whiteSpace:'nowrap',fontFamily:"'Italianno', cursive",fontSize:'30px',lineHeight:1,color:'var(--m-sage-600)'}}>{en}</span>
        <span style={{flex:1,height:'1px',background:'var(--m-sage-200)'}}/>
      </div>
      <h2 style={{margin:0,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-3)',lineHeight:1.4,letterSpacing:'var(--tracking-title)',color:'var(--ink-900)',fontWeight:700}}>{children}</h2>
    </div>);};
  /* EN head — mirrors structure, sage numerals, no script kicker */
  const HeadEn=({n,children})=>{
    const marks={
      '1':<span aria-hidden="true" style={{width:'30px',height:'30px',flex:'0 0 auto',display:'grid',placeItems:'center',border:'1px solid var(--m-sage-600)',fontFamily:'var(--font-serif)',fontSize:'var(--step--1)',color:sage}}>I</span>,
      '2':<span aria-hidden="true" style={{flex:'0 0 auto',fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'var(--step-3)',lineHeight:1,color:'var(--m-sage-400)'}}>II</span>,
      '3':<span aria-hidden="true" style={{width:'30px',height:'30px',flex:'0 0 auto',display:'grid',placeItems:'center',borderRadius:'50%',background:'var(--m-sage-400)',fontFamily:'var(--font-serif)',fontSize:'var(--step--2)',color:'var(--white)'}}>III</span>,
      '4':<span aria-hidden="true" style={{flex:'0 0 auto',fontFamily:'var(--font-serif)',fontVariantCaps:'small-caps',letterSpacing:'.1em',fontSize:'var(--step-1)',color:sage,borderBottom:'1px solid var(--m-sage-400)'}}>iv</span>,
      '5':<span aria-hidden="true" style={{flex:'0 0 auto',display:'grid',gridTemplateColumns:'repeat(5,6px)',gap:'2px'}}>{Array.from({length:5}).map((_,i)=>(<span key={i} style={{aspectRatio:'1',background:i<2?'var(--m-sage-600)':'var(--m-sage-200)'}}/>))}</span>,
      '6':<span aria-hidden="true" style={{flex:'0 0 auto',fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'var(--step-2)',lineHeight:1,color:'var(--m-sage-400)',letterSpacing:'.04em'}}>VI</span>
    };
    return (<div style={{margin:'var(--space-7) 0 var(--space-5)'}}>
      <div data-wx-raster="1" style={{display:'flex',alignItems:'center',gap:'14px',marginBottom:'12px'}}>
        {marks[n]}
        <span style={{flex:1,height:'1px',background:'var(--m-sage-400)'}}/>
      </div>
      <span style={{display:'block',marginBottom:'6px',fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.28em',textTransform:'uppercase',color:'var(--m-sage-600)'}}>{['','one','two','three','four','five','six'][+n]} of six</span>
      <h3 style={{margin:0,fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-2) + 2px)',lineHeight:1.35,color:'var(--ink-900)'}}>{children}</h3>
      <span aria-hidden="true" style={{display:'block',marginTop:'10px',width:'54px',height:'2px',background:rose}}/>
    </div>);};
  /* EN lede — drop cap opening paragraph */
  const LedeEn=({children})=>(<p className="dj-lede" style={{...pEn,margin:'0 0 var(--space-4)'}}>
      <style>{`.dj-lede::first-letter{float:left;font-family:'Playfair Display',var(--font-serif);font-style:italic;font-weight:700;font-size:62px;line-height:.72;margin:6px 10px 0 0;color:#A88187}.dj-lede>span.__om-t:first-of-type::first-letter{float:left;font-family:'Playfair Display',var(--font-serif);font-style:italic;font-weight:700;font-size:62px;line-height:.72;margin:6px 10px 0 0;color:#A88187}`}</style>
      {children}
    </p>);
  /* 编辑部名片 — reserved founder pages */
  const Founder=({name,cn,role,place,note,img,desc})=>(
    <div style={{background:'var(--paper)',padding:'var(--space-5) var(--space-4)',display:'flex',flexDirection:'column',gap:'12px'}}>
      <figure style={{margin:0}}><img src={img} alt={`${name} 的肖像照`} style={{display:'block',width:'100%',aspectRatio:'3/4',objectFit:'cover',objectPosition:'50% 12%',border:'1px solid var(--m-rose-200)'}}/><figcaption style={{marginTop:'8px',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>{desc}</figcaption></figure>
      <div>
        <div style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step-1)',color:'var(--ink-900)',lineHeight:1.2}}>{name}</div>
        <div style={{marginTop:'4px',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--1)',color:'var(--ink-600)'}}>{cn} · {role}</div>
        <div style={{marginTop:'2px',fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--ink-400)'}}>{place}</div>
      </div>
      <p style={{margin:0,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--1)',lineHeight:1.8,color:'var(--ink-500)'}}>{note}</p>
      <span style={{marginTop:'auto',paddingTop:'10px',borderTop:'1px solid var(--m-rose-200)',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step--1)',color:rose}}>个人页 · coming soon →</span>
    </div>);
  /* section sub-heads inside 刊标的故事 */
  const SubCn=({t,en})=>(<div style={{clear:'both',display:'flex',alignItems:'center',gap:'12px',margin:'var(--space-7) 0 var(--space-5)'}}><span style={{fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-1)',letterSpacing:'.08em',color:'var(--ink-900)'}}>{t}</span><span aria-hidden="true" style={{flex:1,height:'1px',background:'var(--m-rose-400)'}}/>{en?<span style={{fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'15px',color:'var(--ink-400)'}}>{en}</span>:null}</div>);
  const SubEn=({children})=>(<div style={{clear:'both',display:'flex',alignItems:'center',gap:'12px',margin:'var(--space-7) 0 var(--space-4)'}}><span style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-1) + 2px)',lineHeight:1.3,color:'var(--ink-900)'}}>{children}</span><span aria-hidden="true" style={{flex:1,height:'1px',background:'var(--m-sage-400)'}}/></div>);
  /* 三象索引 / three-elephant index — one card per reading */
  const Triad=({items,cn})=>(<div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--m-rose-200)',margin:'var(--space-5) 0 var(--space-6)'}}>
    {items.map(([n,k,v],i)=>(<div key={n} style={{background:'var(--paper)',padding:'var(--space-4) 8px'}}>
      <span aria-hidden="true" style={{display:'block',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step-1)',lineHeight:1,color:rose}}>{n}</span>
      <span style={{display:'block',marginTop:'8px',fontFamily:cn?'var(--font-serif-sc)':'var(--font-serif)',fontWeight:700,fontSize:cn?'var(--step-0)':'calc(var(--step--1) + 3px)',color:'var(--ink-900)'}}>{k}</span>
      <span style={{display:'block',marginTop:'6px',fontFamily:cn?'var(--font-serif-sc)':'var(--font-serif)',fontStyle:cn?'normal':'italic',fontSize:cn?'var(--step--2)':'13px',lineHeight:1.75,color:'var(--ink-500)'}}>{v}</span>
    </div>))}
  </div>);
  return (<section style={{background:'var(--paper)',...issue}}>
    {/* masthead — three pastel bands, sage-led */}
    <div style={{display:'flex',height:'var(--rule-accent)'}}><span style={{flex:2,background:'var(--m-sage-400)'}}/><span style={{flex:1,background:'var(--m-rose-200)'}}/><span style={{flex:1,background:'var(--m-sage-200)'}}/></div>

    <header style={{position:'relative',overflow:'hidden',background:'linear-gradient(165deg,var(--m-sage-100) 0%,#FDFDFD 78%)',padding:`var(--space-8) ${pad} 0`}}>
      {/* wordmark stack — the four elements interlock: hollow "About Us" rides over
         the top of Duchamp, Journal tucks up beneath it, 笃象 overlaps at the right */}
      <div style={{position:'relative'}}>
        {/* wordmark — full header width, heavy, tightly tracked */}
        <h1 style={{position:'relative',zIndex:1,margin:0,fontFamily:'var(--font-serif)',fontWeight:700,fontSize:'clamp(56px, 15.4vw, 104px)',lineHeight:0.86,letterSpacing:'-0.045em',color:'var(--ink-900)'}}>
          <span aria-hidden="true" style={{position:'static',zIndex:0,display:'block',marginBottom:'-4px',marginLeft:'4px',fontFamily:'Inter',fontStyle:'italic',fontWeight:900,fontSize:'90px',lineHeight:0.95,letterSpacing:'0.035em',color:'#FFFFFF00',WebkitTextStroke:'1.4px var(--m-sage-600)',opacity:0.62,overflow:'visible'}}>About <span style={{fontStyle:'normal',fontVariantCaps:'small-caps',letterSpacing:'.04em'}}>Us</span></span>
          <span style={{position:'relative',zIndex:2,display:'block',fontStyle:'italic',fontFamily:"'Playfair Display', var(--font-serif)",fontSize:'140px',lineHeight:0.82,color:'#8C9295',textShadow:'0 4px 14px rgba(168,129,135,.38)',opacity:1}}><span style={{color:'#5D686D'}}>Duchamp</span></span>
          <span style={{display:'block',marginTop:'-18px',marginLeft:'.28em',fontVariantCaps:'small-caps',letterSpacing:'-0.01em',color:'var(--m-sage-600)'}}><span style={{color:'#ACBA98'}}>Journal</span></span>
          <span aria-hidden="true" style={{display:'block',marginTop:'-56px',textAlign:'right',fontFamily:'var(--font-serif)',fontWeight:800,fontSize:'88px',lineHeight:1,letterSpacing:'.14em',paddingRight:'.14em',color:'#C399A0',textShadow:'0 3px 8px rgba(69,88,106,.28)'}}>笃象</span>
        </h1>
        <div style={{marginTop:'var(--space-6)',display:'flex',flexDirection:wx?'column':'row',gap:'16px',alignItems:'flex-start'}}>
          <span aria-hidden="true" data-wx-raster="1" style={{marginTop:'4px',writingMode:wx?'horizontal-tb':'vertical-rl',whiteSpace:'nowrap',flex:'0 0 auto',fontFamily:"'Italianno', cursive",fontSize:'24px',letterSpacing:'.02em',color:'var(--m-sage-600)'}}>Guangzhou<span style={{fontSize:'0.5em',verticalAlign:'middle',padding:'0 .15em'}}>·</span>New York</span>
          {lang!=='en'?(<div>
            <p style={{margin:0,fontFamily:'var(--font-serif-sc)',fontWeight:400,fontSize:'var(--step-2)',lineHeight:1.7,letterSpacing:'var(--tracking-title)',color:'var(--ink-700)'}}>不以目相见，<span style={{display:'inline',WebkitBoxDecorationBreak:'clone',boxDecorationBreak:'clone',background:'linear-gradient(180deg,transparent 60%,var(--m-rose-200) 60%,var(--m-rose-200) 96%,transparent 96%)'}}>以心相知</span></p>
            <p style={{margin:'var(--space-5) 0 0',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-1)',lineHeight:1.9,color:'var(--ink-800)'}}>一份由高中生发起的公益科普刊物。中英双语，文字与音频同步出刊。</p>
          </div>):(<div>
            <p style={{margin:0,fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:400,fontSize:'var(--step-2)',lineHeight:1.7,color:'var(--ink-700)'}}>Not just seen with the eyes, but <span style={{WebkitBoxDecorationBreak:'clone',boxDecorationBreak:'clone',background:'linear-gradient(180deg,#FDFDFD 60%,var(--m-rose-200) 60%,var(--m-rose-200) 96%,#FDFDFD 96%)'}}>known with the heart</span></p>
            <p style={{margin:'var(--space-5) 0 0',fontFamily:'var(--font-serif)',fontSize:'var(--step-1)',lineHeight:1.9,color:'var(--ink-800)'}}>A non-profit science journal founded by high-school students. Every piece ships in Chinese and English, as text and audio.</p>
          </div>)}
        </div>
      </div>
      {/* keyword keycaps — chunky game buttons that depress on hover */}
      <div style={{marginTop:'var(--space-7)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px'}}>
        {(lang==='en'?['non-profit','bilingual','audio','biomedical']:['公益科普','中英双语','音频同步','生物医学']).map((t,i)=>{const on=hot===i;return (
          <span key={t} onMouseEnter={()=>setHot(i)} onMouseLeave={()=>setHot(-1)} style={{height:'86px',borderRadius:'16px',display:'grid',placeItems:'center',cursor:'pointer',userSelect:'none',background:'transparent',border:`0.5px solid ${on?'var(--ink-700)':'rgba(69,88,106,.28)'}`,boxShadow:on?'0 2px 0 rgba(69,88,106,.28)':'0 5px 0 rgba(69,88,106,.14)',transform:on?'translateY(3px)':'translateY(0)',transition:'transform .12s ease-out, box-shadow .12s ease-out, border-color .2s, color .2s',fontFamily:'var(--font-serif-sc)',fontWeight:400,fontSize:'var(--step-0)',letterSpacing:'.14em',textAlign:'center',color:on?'var(--ink-900)':'var(--ink-500)'}}>{t}</span>);})}
      </div>
      {/* the thesis line, hung on rose hairlines */}
      {lang!=='en'&&(<figure style={{margin:'var(--space-7) 0 0',borderTop:'2px solid var(--m-rose-200)',borderBottom:'1px solid var(--m-rose-200)',padding:'var(--space-6) 0'}}>
        <blockquote style={{margin:0,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-2)',lineHeight:1.9,color:'var(--ink-800)'}}>我们回答的不是“它<span style={{color:rose,fontWeight:700}}>怎么运作</span>”，而是“它<span style={{color:rose,fontWeight:700}}>为什么重要</span>”。</blockquote>
      </figure>)}
    </header>

    <div style={{padding:`var(--space-7) ${pad} 0`}}>
      {lang!=='en'&&(<React.Fragment>
      <Head n="1" en="Who we are">我们是谁</Head>
      <p style={p}>笃象（Duchamp Journal）是一个由高中生发起的公益科普刊物。我们用通俗易懂的方式讲解生物与生物医学科学与工程，以及其他跨学科前沿创新。<Emphasis>所有内容均以中英双语制作，并同步推出文字版、音频版</Emphasis>，让视障群体能够直接参与科技话题的讨论，而不仅仅是事后收到一份翻译版本。</p>
      {/* two nodes — the globe, then a map-pin diagram: two landmarks joined by a dashed arc */}
      <figure style={{margin:'var(--space-6) 0 var(--space-4)',textAlign:'center'}}>
        <img src="../assets/globe-glow-v8.png" alt="淡绿色玻璃地球上，发光的广州塔与自由女神像以虚线相连" style={{display:'block',width:'377px',height:'372px',maxWidth:'100%',margin:'0 auto',opacity:0.8}}/>
        <figcaption style={{marginTop:'6px',textAlign:'left',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'14px',lineHeight:1.6,color:'var(--ink-600)'}}><span style={{display:'block',marginBottom:'3px',fontFamily:'var(--font-label)',fontStyle:'normal',fontSize:'10px',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--m-sage-600)'}}>图像描述</span><span style={{display:'block',marginBottom:'4px',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',color:'var(--ink-600)'}}>一颗淡绿色的玻璃质感地球，转向美洲与大西洋一侧。美洲上方立着泛粉光的广州塔轮廓，大西洋上方立着泛绿光的自由女神像，两者之间以虚线相连，球面上布满光点连成的网络。</span>两个节点，一本刊物：广州与纽约</figcaption>
      </figure>
      <div style={{margin:'0 0 var(--space-4)',display:'flex',alignItems:'flex-start',gap:'12px'}}>
        {[['广州','Guangzhou','项目起点','#D9A3AC'],['纽约','New York','第二节点','#9DC29C']].map(([cn,en,role,c],i)=>(<React.Fragment key={cn}>
          {i===1&&<span aria-hidden="true" data-wx-raster="1" style={{flex:1,position:'relative',height:'22px',marginTop:'2px'}}>
            <span style={{position:'absolute',left:0,right:0,top:'50%',borderTop:`1px dashed var(--m-sage-400)`}}/>
            <span style={{position:'absolute',left:'50%',top:0,transform:'translateX(-50%)',background:'var(--paper)',padding:'0 6px',fontFamily:'var(--font-label)',fontSize:'9px',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--ink-400)'}}>12,000 km</span>
          </span>}
          <div style={{textAlign:'center',flex:'0 0 auto'}}>
            {/* pin */}
            {/* pin — rasterised through a padded wrapper so the rotated
               teardrop and its glow are captured whole, not clipped at 26px */}
            <span aria-hidden="true" data-wx-raster="1" style={{display:'block',width:'84px',height:'84px',margin:'0 auto',overflow:'visible'}}><span style={{display:'block',width:'26px',height:'26px',margin:'29px auto',borderRadius:'50% 50% 50% 0',transform:'rotate(-45deg)',border:`2px solid ${c}`,position:'relative',boxShadow:`0 0 10px ${c}, 0 0 22px ${c}66`}}><span style={{position:'absolute',inset:'7px',borderRadius:'50%',background:c,boxShadow:`0 0 8px ${c}`}}/></span></span>
            <div style={{marginTop:'12px',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-2)',color:'var(--ink-900)',lineHeight:1.2}}>{cn}</div>
            <div style={{marginTop:'4px',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'0.9rem',color:'var(--ink-500)'}}>{en}</div>
            <div style={{marginTop:'2px',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--2)',color:'var(--ink-400)'}}>{role}</div>
          </div>
        </React.Fragment>))}
      </div>

      <Head n="2" en="Why we do this">我们为什么做这件事</Head>
      <p style={p}>想法源于一场公开分享。分享嘉宾是广州手心咖啡的负责人、视障咖啡师<b>晓晓</b>。她说了一句话——</p>
      {/* origin quote — the page's emotional center: rose tick, weighted lines */}
      <figure style={{margin:'var(--space-6) 0 var(--space-7)'}}>
        <span aria-hidden="true" style={{display:'block',width:'46px',height:'3px',background:'var(--m-rose-400)',marginBottom:'var(--space-5)'}}/>
        <blockquote style={{margin:0,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-2)',lineHeight:1.75,color:'var(--ink-900)'}}>
          <span style={{display:'block',fontWeight:700}}>视障朋友需要的不是同情，</span>
          <span style={{display:'block',marginLeft:'1.5em',color:'var(--ink-500)'}}>而是被真正邀请进入社会的对话中。</span>
        </blockquote>
        <figcaption style={{marginTop:'var(--space-4)',textAlign:'right',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step--1)',color:rose}}>晓晓 · 广州手心咖啡负责人</figcaption>
      </figure>
      <p style={p}>这句话打动了很多同学，也推动了这个项目的诞生。我们不是居高临下地在“帮助”视障群体，<Emphasis>而是搭建一个平台，让大家能够一起讨论科技和未来</Emphasis>。</p>

      <Head n="3" en="The name">刊名从何而来</Head>
      {/* logo plate, then the thesis set large with a lifted key phrase */}
      <div style={{margin:`0 calc(-1 * ${pad})`,padding:`var(--space-7) ${pad}`,background:'var(--m-sage-100)'}}>
        <span style={{position:'relative',display:'grid',placeItems:'center',width:'100%',maxWidth:'260px',margin:'0 auto',padding:'20px 0'}}>
          <span aria-hidden="true" style={{position:'absolute',left:0,top:0,width:'150px',height:'150px',background:'var(--m-rose-200)',opacity:.28}}/>
          <span aria-hidden="true" style={{position:'absolute',right:0,bottom:0,width:'150px',height:'150px',border:`1px solid ${rose}`,opacity:.3}}/>
          <img src="../assets/logo-lockup.png" alt="笃象 Duchamp Journal 标志" style={{position:'relative',width:'100%',height:'auto',display:'block'}}/>
        </span>
        <p style={{margin:'10px auto 0',maxWidth:'420px',textAlign:'center',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>刊头标志：一个粗黑线条的大象头像，两只圆耳，面部是一枚放大镜，镜中一点是眼睛，另一只眼是“&lt;”，正在眨眼；象鼻向下弯成字母 J，旁边是一个蓝色圆点。下方是英文刊名 Duchamp Journal，右侧竖排「笃象」二字。</p>
        <p style={{margin:'var(--space-6) 0 0',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-2)',lineHeight:1.8,letterSpacing:'.02em',color:'var(--ink-900)'}}>“笃象”致敬艺术家<span style={{color:rose}}>马塞尔·杜尚</span>。</p>
        <p style={{margin:'var(--space-5) 0 0',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-0)',lineHeight:2,color:'var(--ink-700)'}}>他一生挑战“艺术该是什么”的固有观念，反对只服务于眼睛的“视网膜艺术”，即那些只求好看、不求思考的作品。他坚持：真正的创造应当<Emphasis>激发思考</Emphasis>，而非仅仅取悦视觉。</p>
        <p style={{margin:'var(--space-5) 0 0',paddingTop:'var(--space-4)',borderTop:`1px solid ${rose}`,fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'var(--step-1)',lineHeight:1.6,color:rose}}>“笃”是笃定与深思，“象”是被看见的表象。</p>
        {/* 杜尚肖像 — cutout standing on a sage field, rose square behind, logo tucked at the foot */}
        <div style={{position:'relative',margin:'var(--space-7) 0 0',padding:'18px 0 0',background:'linear-gradient(180deg, var(--m-sage-100) 0%, var(--m-sage-200) 100%)',overflow:'hidden'}}>
          <span aria-hidden="true" style={{position:'absolute',right:'14px',top:0,width:'118px',height:'118px',background:'var(--m-rose-200)',opacity:.42}}/>
          <span aria-hidden="true" style={{position:'absolute',left:'12px',top:'96px',width:'86px',height:'86px',border:`1px solid ${rose}`,opacity:.25}}/>
          <img src="../assets/duchamp-portrait-v2.png" alt="Marcel Duchamp seated in profile in front of his Bicycle Wheel" style={wx?{display:'block',width:'100%',maxWidth:'342px',height:'auto',margin:'0 auto 12px'}:{float:'right',width:'342px',height:'467px',marginLeft:'8px',shapeOutside:'url(../assets/duchamp-shape.png)',shapeImageThreshold:0.5,shapeMargin:'10px'}}/>
          <p style={{position:'relative',margin:'0 0 0 14px',fontFamily:"'Italianno', 'Cormorant Garamond', var(--font-serif)",fontSize:'50px',lineHeight:1.05,color:'var(--ink-900)'}}>Marcel Duchamp</p>
          <p style={{position:'relative',margin:'2px 0 0 14px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'16px',letterSpacing:'.06em',color:rose}}>1887.7.28 &ndash; 1968.10.2</p>
          <p style={{position:'relative',margin:'10px 14px 0',fontFamily:'var(--font-serif-sc)',fontSize:'14px',lineHeight:1.95,textWrap:'pretty',color:'var(--ink-700)'}}>法国裔美国艺术家，生于法国布兰维尔-克雷翁，达达主义与概念艺术的关键人物。他以“现成品”（readymade）<br/>重新定义了艺术的边界：作品的意义不在于手艺，<br/>而在于选择与观念。</p>
          <p style={{margin:'0',padding:'10px 14px 14px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'17px',lineHeight:1.65,color:'var(--ink-600)'}}>&ldquo;I have forced myself to contradict myself<br/>in order to avoid conforming to my own taste.&rdquo;</p>
          <p style={{margin:'0',padding:'0 14px 14px',fontFamily:'var(--font-serif-sc)',fontSize:'14px',lineHeight:1.9,letterSpacing:'.02em',color:'var(--ink-500)'}}>&ldquo;我常迫使自己悖逆本心，<br/>只为免于困守一己之好。&rdquo;</p>
          <p style={{position:'relative',margin:'0',padding:'0 14px 14px',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>一张黑白照片：年长的马塞尔·杜尚身穿深色西装与条纹衬衫，侧身坐着，手持雪茄，望向画面右侧。他身后，一只自行车轮连同前叉倒插在一张白色木凳上。</p>
        </div>
        <p style={{margin:'12px 0 0',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--2)',lineHeight:1.8,color:'var(--ink-400)'}}>他把小便池搬进展厅，问的不是“美不美”，而是“为什么这算艺术”。</p>
      </div>
      {/* verse panel — rose wash, staircase indent (CN idiom) */}
      <div style={{margin:`0 calc(-1 * ${pad}) var(--space-6)`,padding:`var(--space-7) ${pad} var(--space-7)`,background:'linear-gradient(180deg, var(--m-sage-100) 0%, var(--m-rose-100) 46%, var(--m-rose-100) 100%)'}}>
        {['我们不发明新东西，','而是把已有的科研成果','用人的视角重新呈现——','像杜尚把日常物品放进展厅，','我们把前沿科技拉进日常对话。'].map((l,i)=>(
          <p key={i} style={{margin:'0 0 10px',marginLeft:`${i*10}px`,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-1)',lineHeight:1.9,color:'var(--ink-800)'}}>{l}</p>))}
      </div>


      <Head n="4" en="The elephant in the room">刊标的故事</Head>
      <p style={p}>大多数刊物从不解释自己的标识。它待在角落，无须向谁交代来由。我们反其道而行，把放大镜对准自己的标志，因为这枚符号里藏着一则微缩叙事，道尽这本刊物诞生的初衷。</p>
      <p style={p}>刊标之中，共栖着<Emphasis>三头大象</Emphasis>：其一指代一个群体，其二代表一种认知方式，其三象征一道鸿沟。我们依此次序铺陈，因为论述的力量，正是由此层层拓展开阔。</p>
      <Triad cn items={[['壹','一个群体','被看见，却不被对话。'],['贰','一种认知','人人手握真实的碎片。'],['叁','一道鸿沟','人与人之间的距离。']]}/>
      <figure style={{clear:'both',margin:`var(--space-6) calc(-1 * ${pad}) var(--space-6)`,position:'relative'}}>
        <img src="../assets/elephant-room-color.png" alt="老照片：一头大象站在室内的小桌后，周围站坐着一群人" style={{display:'block',width:'533px',height:'411px',maxWidth:'100%',margin:'0 auto',WebkitMaskImage:wx?'none':'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',maskImage:wx?'none':'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',...cap(487)}}/>
        <figcaption style={{margin:`0 ${pad}`,fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'14px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>一张老式黑白照片：一头大象站在室内一张小桌后面，桌上放着一只大碗。两位穿西装的男子分坐桌旁，几位穿印花连衣裙的女子靠墙站着，面带微笑。</span>&ldquo;the elephant in the room&rdquo; &mdash; 房间里的大象<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>庞大、昭然若揭，却无人开口谈及。</span></figcaption>
      </figure>
      <p style={{...p,margin:'0 0 var(--space-5)'}}>中文刊名“笃象”里的<Emphasis>“象”</Emphasis>，既指现象、形象，本义亦为大象。所以大象出现在刊标里，本就源于名字本身。但我们画的这头大象不只是汉字的图解，它背上驮着一句英文俗语：<Emphasis>the elephant in the room，房间里的大象</Emphasis>。</p>
      <p style={p}>这句俗语指向一种普遍的人性困境：一件庞大、昭然若揭的事物，所有人都看得见，却无人愿意开口谈及。它说的是回避：<Emphasis>事物明明在场，却得不到正视与回应</Emphasis>。</p>
      <p style={p}>值得停下来细品：多数俗语指向某样实物，唯独它指向一片<Emphasis>集体的缄默</Emphasis>。这是修辞学中名为“欲言又止”（praeteritio）的笔法：恰恰借“此事不便言说”，完成对事物的提及。当有人说出“房间里有一头大象”的刹那，便已经打破了这句俗语所描述的潜规则。换言之，唯有决意挣脱缄默的人，才会道出这句话。它本是形容回避，却化作破除回避的武器。而这，正是本刊希望承担的使命。</p>
      <p style={p}>视障群体，长久以来便是这样一头“房间里的大象”。他们真实存在，触目可见，可人们总在谈论他们，却很少同他们对话。他们并未躲藏，只是在社会语境里，成了那个人人看见、却少有人直接与之交谈的存在。</p>
      <figure style={{clear:'both',margin:'var(--space-6) 0',display:'flex',gap:'16px',alignItems:'stretch'}}>
        <figcaption aria-hidden="true" style={{flex:'0 0 auto',writingMode:wx?'horizontal-tb':'vertical-rl',fontFamily:'var(--font-label)',fontSize:'11px',letterSpacing:'.16em',textTransform:'uppercase',color:rose,borderRight:`1px solid ${rose}`,paddingRight:'10px'}}>John Hull</figcaption>
        <blockquote style={{margin:0,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-0)',lineHeight:1.95,color:'var(--ink-700)'}}>
          <span style={{display:'block'}}>约翰·赫尔失明后，朋友们把他抬进车里，用第三人称商量：<span style={{display:'inline',WebkitBoxDecorationBreak:'clone',boxDecorationBreak:'clone',background:'linear-gradient(180deg,transparent 62%,var(--m-rose-200) 62%,var(--m-rose-200) 96%,transparent 96%)'}}>“该把约翰放哪儿？”</span>——却没有人问他本人。</span>
          <span style={{display:'block',marginTop:'12px',fontSize:'var(--step--1)',color:'var(--ink-500)'}}>被看见，却不被对话。这就是“房间里的大象”落到一个人身上的模样。</span>
        </blockquote>
      </figure>
      <div style={{clear:'both',margin:`0 calc(-1 * ${pad}) var(--space-6)`,padding:`var(--space-7) ${pad}`,background:'linear-gradient(180deg, var(--m-rose-100) 0%, var(--m-sage-100) 100%)'}}>
        {['我们把大象放在房间正中央，','转过身面向它，','请它开口说话。'].map((l,i)=>(
          <p key={i} style={{margin:'0 0 10px',marginLeft:`${i*14}px`,fontFamily:'var(--font-serif-sc)',fontWeight:i===2?700:400,fontSize:'var(--step-2)',lineHeight:1.8,letterSpacing:'.02em',color:'var(--ink-900)'}}>{l}</p>))}
      </div>
      <div style={{clear:'both',display:'flex',alignItems:'center',gap:'12px',margin:'0 0 var(--space-5)'}}>
        <span style={{fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-1)',letterSpacing:'.08em',color:'var(--ink-900)'}}>盲人摸象</span>
        <span aria-hidden="true" style={{flex:1,height:'1px',background:'var(--m-rose-400)'}}/>
        <span style={{fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'15px',color:'var(--ink-400)'}}>a second elephant</span>
      </div>
      <p style={p}>刊标里还藏着另一头更古老的大象。在中国与南亚共同流传的寓言里，几位盲人各自触摸大象的一处，便各自断言大象的全貌。</p>
      <div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--m-rose-200)',margin:'0 0 var(--space-5)'}}>
        {[['象腿','柱子'],['耳朵','蒲扇'],['尾巴','绳索']].map(([a,b])=>(
          <div key={a} style={{background:'var(--paper)',padding:'var(--space-4) 6px',textAlign:'center'}}>
            <span style={{display:'block',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--1)',color:'var(--ink-500)'}}>{a}</span>
            <span aria-hidden="true" style={{display:'block',margin:'8px auto',width:'1px',height:'14px',background:rose}}/>
            <span style={{display:'block',fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-0)',color:'var(--ink-900)'}}>{b}</span>
          </div>))}
      </div>
      <p style={p}>这个故事历来被用来嘲讽盲人：拿局部当整体，明眼人一眼便能看清全貌。<Emphasis>而我们读出全然不同的深意。</Emphasis></p>
      <figure style={noFloat({float:'left',width:'56%',margin:'6px 16px 10px 0',position:'relative'})}>
        <span aria-hidden="true" style={{position:'absolute',left:'-8px',top:'-8px',width:'70px',height:'70px',background:'var(--m-rose-200)',opacity:.34,zIndex:0}}/>
        <img src="../assets/blind-men-elephant.png" alt="几位男子各自伸手触摸一头大象的不同部位" style={{position:'relative',display:'block',width:'100%',height:'auto',...cap(500)}}/>
        <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>一幅黑白插画：一头大象立在画面中央，几位头缠布巾、身穿长袍的男子围着它。一人握住象鼻和象牙，一人跪在前腿旁，一人举起双手按在它的身侧。</span>盲人摸象 &mdash; 众盲摸象<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>每一双手都触到真实，只是没人肯把碎片拼起来。</span></figcaption>
      </figure>
      <p style={p}>他们碎片化的感知并不等同于认知上的薄弱。他们恰恰在完成一件了不起的事：全然依靠触摸去认知一头大象，而每一个人触到的碎片都真实确凿：象腿确实如柱。寓言真正的缺憾不在失明，而在于<Emphasis>人们不愿把碎片拼成完整的真相</Emphasis>，在于那份傲慢：以为仅凭双眼，就足以窥见全部。</p>
      <p style={p}>正如沈冰山双目失明，依靠触摸在空白画布上构建构图；正如约翰·赫尔借一场雨水，重新捕捉世界的轮廓。对一本面向视障群体的双语刊物而言，把一则嘲弄盲人的典故，重新读成<Emphasis>“知识如何被建立”的意象</Emphasis>，是刊标想说的最重要的一句话。</p>
      <SubCn t="第三头大象：横亘的结构性鸿沟" en="the divide itself"/>
      <p style={p}>刊标尚有第三重深意，也正是这层解读，让刊标不再只是刊物的自我独白，而成为对我们所处时代的叩问。</p>
      <p style={p}>第一头大象，是被看见却不被对话的群体；第二头大象，是多元的认知方式，每一个人手中都握着一份真实；<Emphasis>第三头大象，是一种结构性现实</Emphasis>：它不属于房间里的某一个人，而是人与人之间那道遥隔的距离。</p>
      <p style={{...p,margin:'0 0 var(--space-6)',padding:'var(--space-5)',background:'var(--m-sage-100)',fontSize:'var(--step-1)',lineHeight:1.9}}>我们的核心论点如此：当下时代，房间里那头最庞大、无人直面的现实，正是第四次工业革命催生的<Emphasis>技术鸿沟</Emphasis>。更具体地说，几乎没有一个角色，专门去向即将承受这场变革的普通人，阐释这一切究竟意味着什么。</p>
      <figure style={noFloat({float:'left',width:'72%',margin:'6px 14px 10px 0',position:'relative'})}>
        <img src="../assets/elephant-press-color.png" alt="记者团队背对着挤满房间的大象做采访" style={{position:'relative',display:'block',width:'100%',height:'auto'}}/>
        <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>一幅彩色漫画：一头巨大的大象挤在狭小的房间里，身体抵住墙壁和天花板。画面左侧，摄影师把镜头对准一面空无一物的墙，一位手持话筒、身穿西装的男子和一位拿着笔记本的女子站在他身旁；三人都背对着大象。</span>Tiedemann &mdash; 记者与大象<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>镜头对着人，从不转向那头填满房间的大象。</span></figcaption>
      </figure>
      <p style={p}>看一看行业注意力的流向：无数实验室钻研面向人工智能本身、面向物理领域的 AI；大量论文探究思维链与隐式推理，拆解模型在提问与作答之间发生的一切；工作流程、评测基准、模型架构被反复打磨迭代。这些都是扎实可贵的研究，不乏光彩斐然的成果。</p>
      <p style={p}>可还有一个非技术的问题，几乎无人深耕：一项技术突破，对于人的价值究竟何在？除了提升效率产出，它将如何重塑一个人对自我能动性的感知？还有，该如何把这一切交付给并非工程师、科学家的普通大众，而不是居高临下地向下灌输？</p>
      <p style={p}>其中的荒诞感恰如其分：这些问题并不隐晦，本就是行业最显而易见的追问。只是无人愿意接手：它难以产出论文，没有评测指标，也无法带来实际收益。<Emphasis>一个问题哪怕清清楚楚摆在眼前，依旧可以成为“房间里的大象”</Emphasis>。这句俗语的本意，从来无关“是否看得见”。</p>

      <SubCn t="沦为装饰的口号" en="a dead metaphor"/>
      <p style={p}>“AI for All（普惠人工智能）”，是行业普遍挂在嘴边的口号。可现实是，它近乎沦为一个心照不宣的伪命题。并非有人反对普惠的理想，而是它更多服务于营销宣传，而非技术设计的底层准则。</p>
      <figure style={noFloat({clear:'both',float:'right',width:'54%',margin:'6px 14px 10px 0',position:'relative'})}>
        <img src="../assets/elephant-blindfold-color.png" alt="客厅里一头被吊起的大象，旁边女子的双眼被灯罩遮住" style={{position:'relative',display:'block',width:'100%',height:'auto'}}/>
        <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>一幅客厅油画：一头大象被绳网吊在天花板下，悬在沙发上方，头顶是一盏吊灯。画面左侧，一位女子坐在白色椅子上，一只落地灯的灯罩遮住了她的双眼，她正整理着头发。</span>Frank Harris &mdash; The Elephant in the Room<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>自己蒙上眼睛，并不能让大象消失。</span></figcaption>
      </figure>
      <p style={p}>文学中有一个概念叫作<Emphasis>死喻</Emphasis>：比喻被反复滥用，彻底失去原本的画面感。“AI for All”便是伦理层面的死喻：这句话不再用来描摹现实，而是替言说者卸下推动现实改变的责任。它从一种理想主张，褪色成华丽的装饰。用本刊反复探讨的说法，它彻底“视网膜化”了，徒留悦目的表层，供人赞叹，拒绝深度思索。</p>

      <SubCn t="象牙塔之内，本无大象" en="no room, no elephant"/>
      <p style={p}>“房间里的大象”，离不开“房间”这个载体。不是厅堂，不是高台，而是一处封闭共处的空间，里面的人彼此能够相望。正因为拥有这片共同的场域，大象的隐喻才得以成立；倘若抽掉共处的空间，整个意象便轰然消解。</p>
      <div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--m-rose-200)',margin:'0 0 var(--space-5)'}}>
        {[['房间','人人相望，共处一室，于是大象成为“大象”。'],['象牙塔','高耸孤立，拾级而上，塔内没有“我们”，只有俯瞰与距离。']].map(([k,v])=>(
          <div key={k} style={{background:'var(--paper)',padding:'var(--space-4)'}}>
            <span style={{display:'block',fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-0)',color:'var(--ink-900)'}}>{k}</span>
            <span style={{display:'block',marginTop:'6px',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--1)',lineHeight:1.85,color:'var(--ink-600)'}}>{v}</span>
          </div>))}
      </div>
      <figure style={noFloat({clear:'both',float:'right',width:'44%',margin:'6px 0 10px 16px',position:'relative'})}>
        <img src="../assets/ivory-tower-books.png" alt="一座书本堆成的高塔，学者从书缝间探头，塔下一人仰望" style={{position:'relative',display:'block',width:'457px',height:'597px',maxWidth:'100%',margin:'0 auto'}}/>
        <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>图像描述</span>一幅水彩漫画：一座由书本堆成、略微倾斜的高塔，几位学者从书缝间探出头来，书堆里还藏着一只猫头鹰。塔顶一位戴眼镜的男子喊出对话框里的话：“We study nature… YOU go save it!”（我们研究自然……你们去拯救它！）塔下站着一个仰头张望的小人。</span>Frits Ahlefeldt &mdash; &ldquo;We study nature&hellip; YOU go save it!&rdquo;<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif-sc)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>一座由书堆成的塔：塔内有人，塔下有人，却没有一间在同一水平线上共处的房间。</span></figcaption>
      </figure>
      <p style={p}>所以“身处象牙塔发言”与“回避房间里的大象”，并非两种独立的过失，而是同一问题的两面。<Emphasis>人一旦离开那间共同的房间，便再也无从辨认房间之内的事物。</Emphasis></p>
      <p style={p}>由此可见，阐释科普绝非次于科研的次要工作。“科普”这个词，甚至矮化了这份事业。把科研成果转译为大众能够理解的语言，不是稀释消解知识，而是<Emphasis>重新回到那间共同的房间</Emphasis>。</p>

      <SubCn t="极具讽刺的现实" en="chain-of-thought"/>
      <p style={p}>过去数年，我们不断训练机器“展示思考过程”。褪去技术外壳，思维链本质上是一种叙事手段：指令模型不要直接抛出答案，而是还原推导的全过程。我们之所以需要它，是因为一份没有解释的答案，无论多么正确，都几乎毫无价值。</p>
      <figure style={{clear:'both',margin:'0 0 var(--space-6)',padding:'var(--space-5) 0',borderTop:`2px solid ${rose}`,borderBottom:`1px solid ${rose}`}}>
        <blockquote style={{margin:0,fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-2)',lineHeight:1.85,color:'var(--ink-900)'}}>我们强求模型具备可解释性，<span style={{display:'block',marginLeft:'1.2em',color:'var(--ink-500)'}}>却把研究者的通俗表达视作可有可无。</span></blockquote>
      </figure>
      <p style={p}>年复一年，我们愈发读懂 AI 黑箱(Black Box，其概念指只知道其输入（Input）和输出（Output）关系，而对其内部结构、运作机制和具体逻辑完全未知)；可站在黑箱之前的普通人——他们的渴求、恐惧，以及真正拿到这项技术之后的处境——却越来越少被看见。这份错位倒置，便是<Emphasis>第三头大象</Emphasis>，也是整间房间里最为庞大的存在。</p>

      <SubCn t="重写寓言的角色" en="the parable, recast"/>
      <p style={p}>把第三头大象放回“盲人摸象”，故事的角色全然改写。盲人不再是被排挤的弱者。<Emphasis>盲人正是我们</Emphasis>：实验室、论文、研发流程。有人掌握可解释性，有人钻研规模化，有人专注对齐、部署、政策。每一份报告都客观准确，象腿确实如同梁柱。但依旧没有人完整描绘出大象，因为描摹全貌本不属于技术难题，也从未分配给任何人去完成。</p>
      <div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--m-sage-200)',margin:'0 0 var(--space-5)'}}>
        {[['可解释性','象腿'],['规模化','耳朵'],['对齐与部署','尾巴']].map(([a,b])=>(
          <div key={a} style={{background:'var(--paper)',padding:'var(--space-4) 6px',textAlign:'center'}}>
            <span style={{display:'block',fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step--1)',color:'var(--ink-900)'}}>{a}</span>
            <span aria-hidden="true" style={{display:'block',margin:'8px auto',width:'1px',height:'14px',background:rose}}/>
            <span style={{display:'block',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--2)',color:'var(--ink-500)'}}>{b}</span>
          </div>))}
      </div>
      <p style={p}>寓言的警示也随之更新。它告诫的傲慢，不再是“以为视觉足以窥见全部”，而是<Emphasis>迷信技术能力</Emphasis>：懂得系统如何运转，便自以为懂得它全部的人文意义。这则古老寓言，一直在讲述关于我们的笑话，只是需要换一个时代语境才听得懂。</p>
      <p style={p}>还有一层温柔的提醒：在寓言的所有版本里，大象始终无法开口。它被触摸、被争辩、被描述，却从未有机会诉说自我。前两头大象，与第三头共享这份失语。而创办这本刊物，全部的用意，就是<Emphasis>给予大象发言的机会</Emphasis>。</p>

      <SubCn t="对本刊自身的期许" en="what this asks of us"/>
      <p style={p}>这套思考同样抬高了本刊内容的标尺，我们不愿让它只留作漂亮的空话，在此坦诚申明：一篇文章，仅仅准确复述技术机理，不算完成使命；唯有当一位从未参与系统开发的读者，能够说出“拥有这项技术意味着什么、被它拒之门外又意味着什么”，文章才算真正完成。</p>
      

      <div style={{clear:'both',display:'flex',alignItems:'center',gap:'12px',margin:'var(--space-7) 0 var(--space-5)'}}>
        <span style={{fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-1)',letterSpacing:'.08em',color:'var(--ink-900)'}}>拆解每一处符号</span>
        <span aria-hidden="true" style={{flex:1,height:'1px',background:'var(--m-sage-200)'}}/>
      </div>
      <div style={{display:'grid',gap:'1px',background:'var(--m-sage-200)',margin:'0 0 var(--space-6)'}}>
        {[['glass','放大镜','表层含义是凑近细看。但请注意这份刻意保留的反讽：放大镜本是为目视而生的明眼人工具，却叠加在一头象征“不靠眼睛去认知”的大象之上。它发问：所谓“看得更近”，是否只能靠双眼？同时它也是杜尚的审视：不赞美表象，而向表象提问。结合第三头大象，它又生出第四重含义：放大镜令细小晦涩之物被普通人读懂，而这，正是行业长久缺位的那份工作，被具象成一枚图形。'],['rings','同心圆','它是荡漾的涟漪：声音向外扩散，对一本以听觉为先的刊物再贴切不过，知识如水波漫开，而非光线直射。它也是靶心：专注、留心，对应“笃”那份恳切体察。它更本就是眼睛的模样，虹膜与瞳孔，对应创刊号的主题，也映照读者各不相同的生命经验。涟漪涌向四方，抵达每一个身处水中的人；光束却需要瞄准定向。知识应当如何传播，两种意象之间的取舍，几乎就是本文全部的立场。'],['dot','蓝色圆点','黑白之中唯一一抹色彩。它是句末的句号，毕竟我们是一本文字刊物；也是视线不自觉落上去的焦点。'],['face','眨眼的面庞','仔细看，大象的脸全由标点构成：一点是一只眼睛，小于号是另一只，正轻轻眨眼。一张由符号搭建的面孔无声地说：意义不止诞生于图像，也可以由符号与语言构筑。杜尚的核心思想，藏进了标点里。眨眼，也是最微小的一种对话姿态：它需要有被注视的对象，也需要彼此心领神会——恰恰是疏离第三人称的反面。']].map(([m,k,v])=>(
          <div key={k} style={{background:'var(--paper)',padding:'var(--space-4)',display:'flex',gap:'14px',alignItems:'flex-start'}}>
            <span aria-hidden="true" data-wx-raster="1" style={{flex:'0 0 44px',width:'44px',height:'44px',display:'grid',placeItems:'center',overflow:'visible'}}>
              {m==='glass'&&<span style={{position:'relative',width:'22px',height:'22px',borderRadius:'50%',border:`1.5px solid ${rose}`}}><span style={{position:'absolute',right:'-7px',bottom:'-6px',width:'11px',height:'1.5px',background:rose,transform:'rotate(45deg)'}}/></span>}
              {m==='rings'&&<span style={{width:'26px',height:'26px',borderRadius:'50%',border:'1px solid var(--m-sage-400)',display:'grid',placeItems:'center'}}><span style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid var(--m-sage-600)',display:'grid',placeItems:'center'}}><span style={{width:'5px',height:'5px',borderRadius:'50%',background:'var(--ink-700)'}}/></span></span>}
              {m==='dot'&&<span style={{width:'16px',height:'16px',borderRadius:'50%',background:'#1F4E86'}}/>}
              {m==='face'&&<span style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--ink-700)'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--ink-900)'}}/>&lt;</span>}
            </span>
            <span>
              <span style={{display:'block',fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-0)',color:'var(--ink-900)'}}>{k}</span>
              <span style={{display:'block',marginTop:'6px',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--1)',lineHeight:1.9,color:'var(--ink-600)'}}>{v}</span>
            </span>
          </div>))}
      </div>
      <p style={{margin:'0 0 var(--space-6)',paddingTop:'var(--space-5)',borderTop:`2px solid ${rose}`,fontFamily:'var(--font-serif-sc)',fontWeight:700,fontSize:'var(--step-2)',lineHeight:1.85,letterSpacing:'.02em',color:'var(--ink-900)'}}>这本刊物邀请人们转过身面向它们，请它们发声。</p>

      <Head n="5" en="What we do">我们做什么</Head>
      <p style={p}>每期内容围绕一个主题，比如：</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--m-sage-200)',margin:'0 0 var(--space-6)'}}>
        {['生物信息学','基因组学','AI医学','生物医疗工程','医疗政策','科技创新'].map((k)=>(
          <div key={k} style={{background:'var(--paper)',padding:'var(--space-4) 6px',textAlign:'center',minWidth:0,wordBreak:'break-word'}}>
            <span style={{fontFamily:'var(--font-serif-sc)',fontSize:'var(--step-0)',color:'var(--ink-900)',fontWeight:700}}>{k}</span>
          </div>))}
      </div>
      <p style={p}>呈现形式不限于文字，而是一套完整的<Emphasis>多感官体验</Emphasis>：</p>
      {/* format constellation — a staggered row of glowing orbs on a lit field */}
      <div style={{margin:'0 0 var(--space-5)'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'6px'}}>
          {['文字版','音频版','对话','互动卡片','提问箱'].map((k,i)=>{const on=fmt===i;const a=.20-i*.04;return (
            <button key={k} type="button" onClick={()=>setFmt(i)} onMouseEnter={()=>setFmt(i)} aria-pressed={on} style={{cursor:'pointer',padding:'16px 2px',background:`rgba(168,129,135,${a})`,border:`0.5px solid ${on?rose:'rgba(168,129,135,.42)'}`,transition:'border-color .2s, color .2s',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--2)',lineHeight:1.4,letterSpacing:'.04em',color:on?'var(--ink-900)':'var(--ink-600)'}}>{k}</button>);})}
        </div>
        
      </div>
      <p style={p}>我们相信，科学的魅力不只在于“知道”，更在于<Emphasis>“参与”和“对话”</Emphasis>。</p>

      <Head n="6" en="Meet Our Founders">创始人</Head>
      <p style={p}>笃象由两位高中生创办，分别驻广州与纽约。个人主页正在筹备中，将陆续上线。</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--m-rose-200)',margin:'0 0 var(--space-5)'}}>
        <Founder name="Cathy" cn="创始人" role="主编" place="Guangzhou 广州" note="负责选题、中英文写作、网页设计、与视障社群合作。" img="../assets/founder-cathy.jpg" desc="Cathy 的肖像照。"/>
        <Founder name="Rose" cn="创始人" role="主编" place="New York 纽约" note="负责选题、中英文写作编译、音频、博客等制作。" img="../assets/founder-rose.jpg" desc="Rose 的肖像照。"/>
      </div>

      <ConversationBox label="加入我们" font="var(--font-serif-sc)" questions={['希望从日常的视角，探索科学的前行？','有意合作？']} note="留言或联系我们 ——"/>
      </React.Fragment>)}

      {/* ── English edition — a rose-sheet mirror ───────────────────────────── */}
      {lang!=='cn'&&(<React.Fragment>
      <div style={{margin:`var(--space-8) calc(-1 * ${pad}) 0`,padding:`var(--space-7) ${pad} var(--space-8)`,background:'var(--m-rose-100)'}}>
        <div style={{display:'flex',height:'var(--rule-accent)',margin:`0 calc(-1 * ${pad}) var(--space-6)`}}><span style={{flex:1,background:'var(--m-rose-400)'}}/><span style={{flex:2,background:'var(--m-sage-200)'}}/><span style={{flex:1,background:'var(--m-rose-200)'}}/></div>
        <div style={{marginBottom:'var(--space-6)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'var(--space-5)'}}>
            <Label style={{margin:0}}>English edition</Label>
            <span style={{flex:1,height:'1px',background:'var(--m-rose-400)'}}/>
            <span style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'calc(var(--step--1) + 2px)',color:'var(--ink-400)'}}>About Us</span>
          </div>
          <h2 style={{margin:0,fontFamily:'var(--font-serif)',fontWeight:400,fontSize:'calc(var(--step-3) + 2px)',color:'var(--ink-900)',lineHeight:1.25}}>
            <span style={{display:'block',fontStyle:'italic',fontWeight:700,fontSize:'38px'}}>Duchamp Journal</span>
            <span style={{display:'block',marginLeft:'1.4em',fontVariantCaps:'small-caps',letterSpacing:'.06em',fontWeight:700,fontSize:'38px'}}>Project Introduction</span>
          </h2>
        </div>
        <p style={{...pEn,fontStyle:'italic',fontSize:'calc(var(--step-1) + 2px)',lineHeight:1.7,color:'var(--ink-800)',borderTop:'2px solid var(--m-rose-400)',borderBottom:'1px solid var(--m-rose-400)',padding:'var(--space-5) 0',margin:'0 0 var(--space-6)'}}>We don't ask how the technology works. We ask <span style={{color:rose,fontWeight:700}}>why it matters</span>.</p>

        <HeadEn n="1">Who we are</HeadEn>
        <LedeEn>Duchamp Journal (笃象) is a student-led publication that explains biological and biomedical science and engineering, as well as other interdisciplinary innovations, through a human lens. <Emphasis>Content is produced in English and Chinese and delivered in written and audio formats</Emphasis>, so that individuals with visual disabilities can participate directly, not just receive a translated version afterward.</LedeEn>
        {/* EN nodes — a lit 3D globe, centered, two desks joined by a dashed arc */}
        <div style={{margin:'var(--space-6) 0 var(--space-7)',textAlign:'center'}}>
          <figure style={{margin:0}}>
            <img src="../assets/globe-glow-v8.png" alt="A pale green glass globe with a glowing Canton Tower and Statue of Liberty joined by dotted lines" style={{display:'block',width:'377px',height:'372px',maxWidth:'100%',margin:'0 auto',opacity:0.8}}/>
            <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-600)'}}><span style={{display:'block',marginBottom:'3px',fontFamily:'var(--font-label)',fontStyle:'normal',fontSize:'10px',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--m-sage-600)'}}>Image description</span><span style={{display:'block',marginBottom:'4px',fontStyle:'normal',color:'var(--ink-600)'}}>A pale green glass globe turned to show the Americas and the Atlantic. A glowing pink outline of Guangzhou’s Canton Tower rises over the Americas and a glowing green Statue of Liberty stands over the Atlantic, joined by dotted lines across a web of points of light.</span>two nodes, one publication: Guangzhou and New York</figcaption>
          </figure>
          <div style={{marginTop:'var(--space-4)',display:'flex',alignItems:'flex-start',gap:'14px',padding:'0 6px'}}>
            {[['Guangzhou','广州','first node · UTC+8','#D9A3AC'],['New York','纽约','second node · UTC−4','#9DC29C']].map(([en,cn,meta,c],i)=>(<React.Fragment key={en}>
              {i===1&&<span aria-hidden="true" data-wx-raster="1" style={{flex:1,marginTop:'22px',height:'1px',background:'linear-gradient(90deg, rgba(141,150,128,.45), rgba(194,169,140,.85), rgba(141,150,128,.45))'}}/>}
              <div style={{textAlign:i===0?'left':'right',display:'grid',gap:'2px'}}>
                <span data-wx-raster="1" style={{display:'flex',alignItems:'center',justifyContent:i===0?'flex-start':'flex-end',gap:'7px'}}>
                  <span aria-hidden="true" style={{width:'6px',height:'6px',borderRadius:'50%',background:c,order:i===0?0:1}}/>
                  <span style={{fontFamily:"'Italianno', cursive",fontSize:'40px',lineHeight:.95,color:'var(--m-sage-600)'}}>{en}</span>
                </span>
                <span style={{fontFamily:'var(--font-serif-sc)',fontSize:'13px',letterSpacing:'.22em',color:'var(--ink-700)'}}>{cn}</span>
                <span style={{fontFamily:"'Cormorant Garamond', var(--font-serif)",fontVariantCaps:'small-caps',fontSize:'14px',letterSpacing:'.14em',color:'var(--ink-400)'}}>{meta}</span>
              </div>
            </React.Fragment>))}
          </div>
          <p style={{margin:'var(--space-4) 0 0',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'16px',letterSpacing:'.04em',color:'#7B8892'}}>Two desks, twelve hours apart, one issue</p>
        </div>

        <HeadEn n="2">Why we do this</HeadEn>
        <LedeEn>The idea came from a public talk by Xiao Xiao, a visually impaired barista and leader of Brew Heart Coffee in Guangzhou.</LedeEn>
        {/* EN quote — vertical attribution, open aside (mirrors 001's EN pull-quote idiom) */}
        <figure style={{clear:'both',margin:'var(--space-6) 0',display:'flex',gap:'18px',alignItems:'stretch'}}>
          <figcaption style={{flex:'0 0 auto',display:'flex',alignItems:'flex-start',writingMode:wx?'horizontal-tb':'vertical-rl',transform:wx?'none':'rotate(180deg)',fontFamily:'var(--font-label)',fontSize:'12px',letterSpacing:'.12em',textTransform:'uppercase',color:rose,borderRight:'1px solid var(--m-rose-400)',paddingRight:'10px'}}>Xiao Xiao · Brew Heart Coffee</figcaption>
          <blockquote style={{margin:0,fontFamily:'var(--font-serif)',fontSize:'calc(var(--step-2) + 2px)',lineHeight:1.5,color:'var(--ink-900)'}}>
            <span style={{display:'block',fontStyle:'italic'}}>Not sympathy,</span>
            <span style={{display:'block'}}><span style={{display:'inline',WebkitBoxDecorationBreak:'clone',boxDecorationBreak:'clone',background:'linear-gradient(180deg,transparent 62%,var(--m-rose-200) 62%,var(--m-rose-200) 96%,transparent 96%)'}}>but a genuine invitation</span></span>
            <span style={{display:'block'}}>is what people with visual disabilities need.</span>
            <span style={{display:'block',marginTop:'14px',fontSize:'calc(var(--step--1) + 2px)',lineHeight:1.7,color:'var(--ink-500)'}}>into society's conversations.</span>
          </blockquote>
        </figure>
        
        <p style={{...pEn,textIndent:'1.6em'}}>Duchamp was not born out of charity or pity. It was born out of a belief that knowledge should be a shared public resource, not an exclusive privilege. We don't see ourselves as helping the visually impaired from above; <Emphasis>we see ourselves as building a table where everyone is welcome to sit down and talk about the future</Emphasis>.</p>

        <HeadEn n="3">The name</HeadEn>
        {/* logo plate — mirrors the CN 刊名从何而来 opening */}
        <div style={{margin:`0 calc(-1 * ${pad}) var(--space-6)`,padding:`var(--space-7) ${pad}`,background:'var(--m-sage-100)'}}>
          <span style={{position:'relative',display:'grid',placeItems:'center',width:'100%',maxWidth:'260px',margin:'0 auto',padding:'20px 0'}}>
            <span aria-hidden="true" style={{position:'absolute',left:0,top:0,width:'150px',height:'150px',background:'var(--m-rose-200)',opacity:.28}}/>
            <span aria-hidden="true" style={{position:'absolute',right:0,bottom:0,width:'150px',height:'150px',border:`1px solid ${rose}`,opacity:.3}}/>
            <img src="../assets/logo-lockup.png" alt="Duchamp Journal 笃象 wordmark and elephant mark" style={{position:'relative',width:'100%',height:'auto',display:'block'}}/>
          </span>
          <p style={{margin:'10px auto 0',maxWidth:'420px',textAlign:'center',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>The masthead mark: a bold black elephant head with two round ears and a magnifying glass for a face, a dot for one eye and a “&lt;” for the other, mid-wink. Its trunk curls down into a J beside a blue dot. Below is the name Duchamp Journal, with 笃象 stacked vertically on the right.</p>
          <p style={{margin:'var(--space-5) 0 0',paddingTop:'var(--space-4)',borderTop:`1px solid ${rose}`,fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'calc(var(--step-0) + 2px)',lineHeight:1.7,color:rose}}>笃 is earnest, deep, sincere; 象 is the surface that is seen.</p>
        </div>
        <LedeEn>The name pays tribute to Marcel Duchamp, who rejected "retinal art," art that serves only the eye, and insisted that true creation should engage the mind, not merely please the gaze. He introduced the readymade: ordinary objects presented as art simply because he chose to place them in a gallery.</LedeEn>
        {/* readymade, in one line */}
        <p style={{...pEn,margin:'var(--space-5) 0',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'calc(var(--step-0) + 2px)',color:rose}}>Object → gallery → question.</p>
        {/* portrait card — mirrors the CN 名字由来 block */}
        <div style={{position:'relative',margin:'var(--space-6) 0 0',padding:'18px 0 0',background:'linear-gradient(180deg, var(--m-sage-100) 0%, var(--m-sage-200) 100%)',overflow:'hidden'}}>
          <span aria-hidden="true" style={{position:'absolute',right:'14px',top:0,width:'118px',height:'118px',background:'var(--m-rose-200)',opacity:.42}}/>
          <span aria-hidden="true" style={{position:'absolute',left:'12px',top:'96px',width:'86px',height:'86px',border:`1px solid ${rose}`,opacity:.15}}/>
          <img src="../assets/duchamp-portrait-v2.png" alt="Marcel Duchamp seated in profile in front of his Bicycle Wheel" style={wx?{display:'block',width:'100%',maxWidth:'342px',height:'auto',margin:'0 auto 12px'}:{float:'right',width:'342px',height:'467px',marginLeft:'8px',shapeOutside:'url(../assets/duchamp-shape.png)',shapeImageThreshold:0.5,shapeMargin:'10px'}}/>
          <p style={{position:'relative',margin:'0 0 0 14px',fontFamily:"'Italianno', 'Cormorant Garamond', var(--font-serif)",fontSize:'50px',lineHeight:1.05,color:'var(--ink-900)'}}>Marcel Duchamp</p>
          <p style={{position:'relative',margin:'2px 0 0 14px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'18px',letterSpacing:'.06em',color:rose}}>1887.7.28 &ndash; 1968.10.2</p>
          <p style={{position:'relative',margin:'10px 14px 0',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontSize:'15px',lineHeight:1.85,textWrap:'pretty',color:'var(--ink-700)'}}>French-American artist, born in Blainville-Crevon;<br/>a central figure of Dada and conceptual art.<br/>With the readymade he redrew the border of art:<br/>meaning lies not in craft, but in choice and idea.</p>
          <p style={{margin:'0',padding:'10px 14px 14px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'17px',lineHeight:1.65,color:'var(--ink-600)'}}>&ldquo;I have forced myself to contradict myself<br/>in order to avoid conforming to my own taste.&rdquo;</p>
          <p style={{position:'relative',margin:'0',padding:'0 14px 14px',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>A black-and-white photograph: an older Marcel Duchamp in a dark suit and striped shirt sits in profile, holding a cigar and looking off to the right. Behind him, a bicycle wheel stands on its fork, fixed upside down into a white wooden stool.</p>
        </div>
        <p style={{margin:'12px 0 0',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontSize:'14px',lineHeight:1.8,color:'var(--ink-400)'}}>He put a urinal in a gallery and asked not whether it was beautiful, but why it counted as art.</p>
        {/* EN verse — hanging rule, alternating italic (mirror of the CN staircase) */}
        <div style={{margin:'var(--space-6) 0',paddingLeft:'var(--space-5)',borderLeft:'1px solid var(--m-sage-400)'}}>
          {['We apply the same logic to science communication.','We don\u2019t invent new things;','we take existing research and re-present it through a human lens,',<>asking not only how it works, but also <b>why it matters.</b></>].map((l,i)=>(
            <p key={i} style={{margin:'0 0 8px',fontFamily:'var(--font-serif)',fontStyle:i%2?'italic':'normal',fontSize:'calc(var(--step-0) + 2px)',lineHeight:1.75,color:'var(--ink-700)'}}>{l}</p>))}
        </div>


        <HeadEn n="4">The Elephant in the Room</HeadEn>
        <LedeEn>A logo is usually the one part of a publication nobody explains. It sits in the corner and is never asked to account for itself. We want to do the opposite and turn our own magnifier on our own mark, because the story inside it is, in miniature, the story of why this journal exists.</LedeEn>
        <p style={{...pEn,textIndent:'1.6em'}}>There are <Emphasis>three elephants</Emphasis> in our logo. One is a person, one is a way of knowing, and one is a gap. This introduction navigates them in that order.</p>
        <Triad items={[['i','A person','seen, but not spoken to'],['ii','An epistemology','each hand holds something true'],['iii','A structure','the distance between us']]}/>
        <figure style={{clear:'both',margin:`var(--space-6) calc(-1 * ${pad}) var(--space-6)`,position:'relative'}}>
          <img src="../assets/elephant-room-color.png" alt="A vintage photograph of an elephant standing behind a table in a room full of people" style={{display:'block',width:'533px',height:'411px',maxWidth:'100%',margin:'0 auto',WebkitMaskImage:wx?'none':'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',maskImage:wx?'none':'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',...cap(487)}}/>
          <figcaption style={{margin:`0 ${pad}`,fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>A vintage black-and-white photograph: an elephant stands indoors behind a small table set with a large bowl. Two men in suits sit at either side of the table, and women in patterned dresses stand along the walls, smiling.</span>&ldquo;the elephant in the room&rdquo; · 房间里的大象<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>Enormous, unmissable, and never spoken about.</span></figcaption>
        </figure>
        <p style={{...pEn,textIndent:'1.6em'}}>Our name in Chinese, 笃象, contains the character 象, which means both <Emphasis>phenomenon / image</Emphasis> and, on its own, <Emphasis>elephant</Emphasis>. So an elephant belongs in our logo by right of the name itself. But the elephant we chose to draw is doing more than illustrating a character: it is carrying an English idiom on its back: the elephant in the room.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>The idiom names a very specific human failure: the enormous, obvious thing that everyone in the room can see and nobody is willing to talk about. It is worth pausing on how strange a phrase it is. Most idioms name a thing; <Emphasis>this one names a silence</Emphasis>. Its grammar is a kind of rhetorical sleight of hand, the figure classical rhetoric calls <em>praeteritio</em>: mentioning something precisely by announcing that it is not being mentioned.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>To say &ldquo;there is an elephant in the room&rdquo; is already to break the rule the phrase describes, which means the idiom can only ever be used by someone who has decided to stop obeying it. It is a phrase about avoidance that functions as an instrument against avoidance. That is exactly the tool this journal was built to be.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>Because there is a community that has long been an elephant in the room: present, visible, unmissable, and yet spoken about rather than spoken to. People with visual disabilities are not hidden. They are, socially, the thing in the room that everyone can see and few address directly.</p>
        <figure style={{clear:'both',margin:'var(--space-6) 0',display:'flex',gap:'18px',alignItems:'stretch'}}>
          <figcaption style={{flex:'0 0 auto',writingMode:wx?'horizontal-tb':'vertical-rl',transform:wx?'none':'rotate(180deg)',fontFamily:'var(--font-label)',fontSize:'11px',letterSpacing:'.14em',textTransform:'uppercase',color:rose,borderRight:`1px solid ${rose}`,paddingRight:'10px'}}>John Hull</figcaption>
          <blockquote style={{margin:0,fontFamily:'var(--font-serif)',fontSize:'calc(var(--step-0) + 2px)',lineHeight:1.7,color:'var(--ink-700)'}}>
            <span style={{display:'block'}}>Blind, being loaded into a car while his friends discussed him in the third person, asking <span style={{display:'inline',WebkitBoxDecorationBreak:'clone',boxDecorationBreak:'clone',background:'linear-gradient(180deg,transparent 62%,var(--m-rose-200) 62%,var(--m-rose-200) 96%,transparent 96%)'}}>&ldquo;where do we put John?&rdquo;</span>, until he objected that John might simply be asked.</span>
            <span style={{display:'block',marginTop:'12px',fontSize:'calc(var(--step--1) + 2px)',fontStyle:'italic',color:'var(--ink-500)'}}>Seen, but not spoken to.</span>
          </blockquote>
        </figure>
        <div style={{clear:'both',margin:`0 calc(-1 * ${pad}) var(--space-6)`,padding:`var(--space-7) ${pad}`,background:'linear-gradient(180deg, var(--m-rose-100) 0%, var(--m-sage-100) 100%)'}}>
          {['We put the elephant at the center of the room,','we turn to face it,','and we ask it to speak.'].map((l,i)=>(
            <p key={i} style={{margin:'0 0 8px',marginLeft:`${i*14}px`,fontFamily:'var(--font-serif)',fontStyle:i===1?'italic':'normal',fontWeight:i===2?700:400,fontSize:'calc(var(--step-1) + 2px)',lineHeight:1.6,color:'var(--ink-900)'}}>{l}</p>))}
        </div>
        <div style={{clear:'both',display:'flex',alignItems:'center',gap:'12px',margin:'0 0 var(--space-4)'}}>
          <span style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-1) + 2px)',color:'var(--ink-900)'}}>The blind men and the elephant</span>
          <span aria-hidden="true" style={{flex:1,height:'1px',background:'var(--m-sage-400)'}}/>
        </div>
        <p style={pEn}>There is a second elephant hiding in ours, and it is older and deeper. In an ancient parable told across both Chinese and South Asian traditions (in Chinese, 盲人摸象, &ldquo;blind men feeling the elephant&rdquo;), several blind men each touch one part of an elephant, and each declares the whole to be something different.</p>
        <div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--m-sage-200)',margin:'0 0 var(--space-4)'}}>
          {[['the leg','a pillar'],['the ear','a fan'],['the tail','a rope']].map(([a,b])=>(
            <div key={a} style={{background:'var(--paper)',padding:'var(--space-4) 6px',textAlign:'center'}}>
              <span style={{display:'block',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'14px',color:'var(--ink-400)'}}>{a}</span>
              <span aria-hidden="true" style={{display:'block',margin:'8px auto',width:'1px',height:'14px',background:rose}}/>
              <span style={{display:'block',fontFamily:'var(--font-serif)',fontWeight:700,fontSize:'calc(var(--step-0) + 2px)',color:'var(--ink-900)'}}>{b}</span>
            </div>))}
        </div>
        <p style={{...pEn,textIndent:'1.6em'}}>The story is almost always told against them: look at these fools, each mistaking a part for the whole, none able to see what any sighted person would grasp at a glance. <Emphasis>We read it the other way.</Emphasis></p>
        <figure style={noFloat({float:'left',width:'56%',margin:'6px 16px 10px 0',position:'relative'})}>
          <span aria-hidden="true" style={{position:'absolute',left:'-8px',top:'-8px',width:'70px',height:'70px',background:'var(--m-rose-200)',opacity:.34,zIndex:0}}/>
          <img src="../assets/blind-men-elephant.png" alt="Several men each touching a different part of an elephant" style={{position:'relative',display:'block',width:'100%',height:'auto',...cap(500)}}/>
          <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>A black-and-white illustration: a large elephant stands in the center, surrounded by men in turbans and robes. One holds its trunk and tusk, one kneels at its front leg, and one reaches up to press both hands against its side.</span>The blind men and the elephant<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>Every hand holds something true; nobody assembles the pieces.</span></figcaption>
        </figure>
        <p style={{...pEn,textIndent:'1.6em'}}>The blind men are not the failures of the story. They are doing something extraordinary: knowing an elephant entirely by touch, each holding a piece that is genuinely, exactly true. A leg <em>is</em> like a pillar. The failure in the parable is not blindness. The failure is <Emphasis>refusing to put the pieces together</Emphasis>, and the arrogance of assuming that sight alone would have delivered the whole.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>This is precisely what the painter Shen Bingshan did when he mapped a canvas he could not see by touch, and what John Hull did when he let rain give him back the shape of the world. For a bilingual journal serving a visually impaired community, reclaiming 盲人摸象, turning a punchline about blind people into an image of how knowledge is actually built, is the most important sentence our logo can say.</p>
        <SubEn>The third elephant: the divide itself</SubEn>
        <p style={pEn}>There is a third reading, and it is the one that turns the logo from a statement about us into a statement about the moment we are living in.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>The first elephant is a person: the community that is seen but not spoken to. The second is an epistemology: the blind men, each holding something true. <Emphasis>The third is a structure.</Emphasis> The third elephant is not anybody in the room. It is the distance between the people in it.</p>
        <p style={{...pEn,margin:'0 0 var(--space-5)',padding:'var(--space-5)',background:'var(--paper)',fontSize:'calc(var(--step-0) + 1px)',lineHeight:1.85}}>The claim is this: the largest unspoken thing in the room right now is the <Emphasis>technological divide</Emphasis> of the fourth industrial revolution and, more specifically, the near-total absence of anyone whose job it is to explain what any of it means to the people it is going to happen to.</p>
        <figure style={noFloat({float:'left',width:'72%',margin:'6px 14px 10px 0',position:'relative'})}>
          <img src="../assets/elephant-press-color.png" alt="A news crew films an interview with their backs to an elephant filling the room" style={{position:'relative',display:'block',width:'100%',height:'auto'}}/>
          <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>A color cartoon: a huge elephant is squeezed into a small room, pressed against the walls and ceiling. At the left, a cameraman points his camera at the bare, empty wall, while a man in a suit holding a microphone and a woman with a notepad stand beside him; all three have their backs to the elephant.</span>Tiedemann · the press and the elephant<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>The camera faces the wall, never the animal filling the room.</span></figcaption>
        </figure>
        <p style={{...pEn,textIndent:'1.6em'}}>Consider where the attention goes. There are labs devoted to AI for AI and AI for physics. There are papers on chain-of-thought reasoning and latent reasoning, on what happens inside a model between the question and the answer. There are endless refinements of workflow, benchmark, and architecture. This is real work, and some of it is beautiful.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>What barely exists is the other question, the non-technical one. What is the human value of a breakthrough? What does it change about a person&rsquo;s sense of their own agency, rather than their throughput? And how does any of it reach someone who is not an engineer or a scientist without being explained down to them from a great height?</p>
        <p style={{...pEn,textIndent:'1.6em'}}>The absurdity (and absurdity is the right word) is that none of this is hidden. It is the most obvious question in the field. It is simply the one nobody wants to hold, because it publishes nowhere, benchmarks against nothing, and pays badly. <Emphasis>A problem can be perfectly visible and still be an elephant.</Emphasis> Visibility was never what the idiom was about.</p>

        <SubEn>When a phrase stops describing anything</SubEn>
        <p style={pEn}>&ldquo;AI for All&rdquo; is the slogan the field has agreed to say. The harder point is that it has become something close to an acknowledged fallacy, not because anyone opposes it, but because the thing it actually aligns with is not a design principle. It aligns with a marketing campaign.</p>
        <figure style={noFloat({clear:'both',float:'right',width:'54%',margin:'6px 14px 10px 0',position:'relative'})}>
          <img src="../assets/elephant-blindfold-color.png" alt="A painting of an elephant hanging in a sling in a living room beside a woman whose eyes are covered by a lampshade" style={{position:'relative',display:'block',width:'100%',height:'auto'}}/>
          <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>A painting of a living room: beneath a chandelier, an elephant hangs from the ceiling in a rope sling above the sofa. At the left, a woman sits in a white chair with a lampshade covering her eyes, fixing her hair.</span>Frank Harris · The Elephant in the Room<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>Blindfolding yourself does not make the elephant leave.</span></figcaption>
        </figure>
        <p style={{...pEn,textIndent:'1.6em'}}>There is a literary term for what has happened to it. A <Emphasis>dead metaphor</Emphasis> is a figure of speech used so often that it stops producing an image at all; nobody sees a foot when they read &ldquo;the foot of the mountain.&rdquo; &ldquo;AI for All&rdquo; is a dead metaphor of the ethical kind: a phrase whose function is no longer to describe the world but to relieve the speaker of the obligation to change it. It has drifted from claim to decoration. It has become, in a word this journal has already spent some time on, <em>retinal</em>: a beautiful surface that asks to be admired and not thought about. Duchamp would have recognized it instantly.</p>

        <SubEn>Why a tower cannot have an elephant in it</SubEn>
        <p style={pEn}>Notice that the idiom requires a room. Not a hall, not a stage, but a room, an enclosure with a small number of people in it who can all see each other. The elephant is only an elephant because of that shared enclosure. Take away the shared space and the figure collapses.</p>
        <div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--m-sage-200)',margin:'var(--space-5) 0'}}>
          {[['The room','Everyone can see each other; that is what makes the elephant an elephant.'],['The ivory tower','Vertical, single-occupancy, reached by a stair. No elephant, because there is no we.']].map(([k,v])=>(
            <div key={k} style={{background:'var(--paper)',padding:'var(--space-4)'}}>
              <span style={{display:'block',fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-0) + 1px)',color:'var(--ink-900)'}}>{k}</span>
              <span style={{display:'block',marginTop:'6px',fontFamily:'var(--font-serif)',fontSize:'calc(var(--step--1) + 2px)',lineHeight:1.8,color:'var(--ink-600)'}}>{v}</span>
            </div>))}
        </div>
        <figure style={noFloat({clear:'both',float:'right',width:'44%',margin:'6px 0 10px 16px',position:'relative'})}>
          <img src="../assets/ivory-tower-books.png" alt="A tower of stacked books with scholars peering out, a lone figure below looking up" style={{position:'relative',display:'block',width:'457px',height:'597px',maxWidth:'100%',margin:'0 auto'}}/>
          <figcaption style={{marginTop:'6px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:'var(--ink-500)'}}><span style={{display:'block',marginBottom:'5px',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>A watercolor cartoon: a tall, leaning tower of stacked books, with scholars peering out from gaps between the volumes and an owl tucked among them. At the top, a man in glasses calls out in a speech bubble, “We study nature… YOU go save it!” At the foot, a small figure looks up.</span>Frits Ahlefeldt · &ldquo;We study nature&hellip; YOU go save it!&rdquo;<span style={{display:'block',fontStyle:'normal',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.7,color:'var(--ink-400)'}}>A tower built of books: people inside, a person below, and no shared space on the same level between them.</span></figcaption>
        </figure>
        <p style={{...pEn,textIndent:'1.6em'}}>So &ldquo;speaking from the ivory tower&rdquo; and &ldquo;failing to name the elephant in the room&rdquo; are not two separate failures. They are the same failure described from two positions. <Emphasis>You cannot name what is in a room you have already left.</Emphasis></p>
        <p style={{...pEn,textIndent:'1.6em'}}>This is why explanation is not a lesser activity than research, and why &ldquo;popularization&rdquo; is such an unfortunate word for it. Translating a finding is not diluting it. It is the act of re-entering the room.</p>

        <SubEn>The irony that sharpens all of this</SubEn>
        <p style={pEn}>We have spent the last several years teaching machines to show their work. Chain-of-thought is, stripped of its technical clothing, a narrative device: an instruction to a system to stop producing conclusions and start producing an account of how it got there. We built it because an unexplained answer turned out to be nearly useless to us, however correct.</p>
        <figure style={{clear:'both',margin:'var(--space-5) 0',padding:'var(--space-5) 0',borderTop:`2px solid ${rose}`,borderBottom:`1px solid ${rose}`}}>
          <blockquote style={{margin:0,fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'calc(var(--step-1) + 3px)',lineHeight:1.6,color:'var(--ink-900)'}}>We demand legibility from the model<span style={{display:'block',marginLeft:'1.2em',fontStyle:'normal',color:'var(--ink-500)'}}>and consider it optional in the researcher.</span></blockquote>
        </figure>
        <p style={{...pEn,textIndent:'1.6em'}}>Every year we understand the black box a little better. Every year, the person standing in front of it (what they need, what they fear, what they would actually do with this if anyone told them) is understood a little less. <Emphasis>That inversion is the third elephant</Emphasis>, and it is the largest thing in the room by a considerable margin.</p>

        <SubEn>The parable, recast</SubEn>
        <p style={pEn}>Read the third elephant back into 盲人摸象 and the cast changes completely. The blind men are no longer the excluded. <Emphasis>They are us</Emphasis>, the labs, the papers, and the workflows. One holds interpretability. One holds scaling. One holds alignment, one deployment, and one policy. Every report is accurate. The leg really is a pillar. And still nobody has described the elephant, because describing it was never a technical problem and no one was assigned to it.</p>
        <div style={{clear:'both',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--m-sage-200)',margin:'0 0 var(--space-5)'}}>
          {[['interpretability','the leg'],['scaling','the ear'],['alignment, policy','the tail']].map(([a,b])=>(
            <div key={a} style={{background:'var(--paper)',padding:'var(--space-4) 6px',textAlign:'center'}}>
              <span style={{display:'block',fontFamily:'var(--font-serif)',fontWeight:700,fontSize:'13px',color:'var(--ink-900)'}}>{a}</span>
              <span aria-hidden="true" style={{display:'block',margin:'8px auto',width:'1px',height:'14px',background:rose}}/>
              <span style={{display:'block',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'13px',color:'var(--ink-500)'}}>{b}</span>
            </div>))}
        </div>
        <p style={{...pEn,textIndent:'1.6em'}}>Then the parable&rsquo;s real warning arrives, transposed. The arrogance it cautions against is the assumption that one faculty, sight, would have been sufficient to know the whole. In the third elephant&rsquo;s version, that faculty is not sight. It is <Emphasis>technical fluency</Emphasis>: the assumption that understanding how a system works is the same as understanding what it means. The parable has been telling this joke about us the entire time. It just needed a different room to land in.</p>
        <p style={{...pEn,textIndent:'1.6em'}}>And there is one more turn, which we point out gently. In every version of the story, the elephant does not speak. It is felt, argued over, and described, and it never once gets to say what it is. Both of our first two elephants have that in common with the third. <Emphasis>The whole design of this journal is an attempt to give the elephant a turn.</Emphasis></p>

        <SubEn>What this asks of us</SubEn>
        <p style={pEn}>This reading raises the standard for our own pages, so we should state it plainly rather than let it stay flattering. It means an article in this journal has not done its job when it has explained a mechanism accurately. It has done its job when a reader who will never build the system can say what it would mean to have it or to be denied it.</p>
        

        <div style={{clear:'both',display:'flex',alignItems:'center',gap:'12px',margin:'var(--space-7) 0 var(--space-4)'}}>
          <span style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-1) + 2px)',color:'var(--ink-900)'}}>Reading the parts</span>
          <span aria-hidden="true" style={{flex:1,height:'1px',background:'var(--m-sage-400)'}}/>
        </div>
        <div style={{display:'grid',gap:'1px',background:'var(--m-sage-200)',margin:'0 0 var(--space-6)'}}>
          {[['glass','The magnifier','The obvious reading is “look closer.” But notice the quiet irony we are happy to leave in: a magnifier is a sighted instrument, an aid built for the eye, laid over an elephant that stands for knowing without the eye. The tension is the point. It asks whether looking closer must always mean looking with the eyes. It is also Duchamp’s scrutiny: interrogating the image rather than admiring it. And in light of the third elephant it acquires a fourth reading: a magnifier makes a small thing legible to an ordinary viewer. That is the missing job, drawn as an object.'],['rings','The concentric circles','As ripples, sound radiating outward, which for an audio-first journal serving people who read by ear is almost too apt: knowledge spreading in waves, not beams of light. As a target: focus, attention, the earnest looking of 笃. And as an eye itself, iris and pupil: the organ this whole issue is about, drawn as the very thing our readers experience differently. Ripples travel outward from a source and reach whoever is standing in the water; a beam has to be aimed. The choice between those two pictures of how knowledge moves is more or less the argument of this entire essay.'],['dot','The blue dot','The single spot of color in an otherwise black-and-white mark. It is the period at the end of a sentence; we are, after all, a journal. It is the one point of focus the eye is drawn to.'],['face','The winking face','Look closely, and the elephant’s face is made of punctuation: a dot for one eye, a caret for the other, mid-wink. A face built from typographic marks quietly insists that meaning can be made from symbols and language, not only from images: the whole Duchamp thesis, hidden in the punctuation. A wink is also the smallest possible gesture of address: it only works if someone is being looked at and only if they are in on it. It is the opposite of the third person.']].map(([m,k,v])=>(
            <div key={k} style={{background:'var(--paper)',padding:'var(--space-4)',display:'flex',gap:'14px',alignItems:'flex-start'}}>
              <span aria-hidden="true" data-wx-raster="1" style={{flex:'0 0 44px',width:'44px',height:'44px',display:'grid',placeItems:'center',overflow:'visible'}}>
                {m==='glass'&&<span style={{position:'relative',width:'22px',height:'22px',borderRadius:'50%',border:`1.5px solid ${rose}`}}><span style={{position:'absolute',right:'-7px',bottom:'-6px',width:'11px',height:'1.5px',background:rose,transform:'rotate(45deg)'}}/></span>}
                {m==='rings'&&<span style={{width:'26px',height:'26px',borderRadius:'50%',border:'1px solid var(--m-sage-400)',display:'grid',placeItems:'center'}}><span style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid var(--m-sage-600)',display:'grid',placeItems:'center'}}><span style={{width:'5px',height:'5px',borderRadius:'50%',background:'var(--ink-700)'}}/></span></span>}
                {m==='dot'&&<span style={{width:'16px',height:'16px',borderRadius:'50%',background:'#1F4E86'}}/>}
                {m==='face'&&<span style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--ink-700)'}}><span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--ink-900)'}}/>&lt;</span>}
              </span>
              <span>
                <span style={{display:'block',fontFamily:'var(--font-serif)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-0) + 2px)',color:'var(--ink-900)'}}>{k}</span>
                <span style={{display:'block',marginTop:'6px',fontFamily:'var(--font-serif)',fontSize:'calc(var(--step--1) + 3px)',lineHeight:1.85,color:'var(--ink-600)'}}>{v}</span>
              </span>
            </div>))}
        </div>
        <p style={{margin:'0 0 var(--space-5)',paddingTop:'var(--space-5)',borderTop:`2px solid ${rose}`,fontFamily:'var(--font-label)',fontStyle:'italic',fontWeight:700,fontSize:'calc(var(--step-1) + 4px)',lineHeight:1.55,color:'#8E5C5C'}}>The elephant in the room is the thing that is seen but not spoken to, and the distance between what this century can build and what it is willing to explain. This journal turns to face both and asks them to speak.</p>

        <HeadEn n="5">What we do</HeadEn>
        <LedeEn>Each issue centers on one theme:</LedeEn>
        {/* three fields as overlapping sets — the journal lives where they meet */}
        <div style={{margin:'var(--space-5) 0',display:'grid',gap:'0'}}>
          {[['Bioinformatics',''],['Genomics',''],['Biomedical Engineering',''],['Healthcare',''],['AI in Medicine',''],['Technological Innovation','']].map(([k,v])=>(
            <div key={k} style={{padding:'10px 0',borderTop:'1px solid var(--m-rose-200)'}}>
              <span style={{fontFamily:'var(--font-serif)',fontSize:'calc(var(--step--1) + 2px)',color:'var(--ink-900)'}}>{k}</span>
              {v?<span style={{fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'14px',color:'var(--ink-400)',marginLeft:'10px'}}>{v}</span>:null}
            </div>))}
        </div>
        <p style={{...pEn,textIndent:'1.6em'}}>But we don't just publish articles. Each issue is a multi-sensory, interactive experience:</p>
        {/* five formats — sense marks with mono captions, not a numbered list */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:'6px',margin:'0 0 var(--space-5)'}}>
          {[['Read','bar'],['Listen','wave'],['Feel','dots'],['Hold','card'],['Ask','ring']].map(([k,mode])=>(
            <div key={k} style={{background:'var(--paper)',padding:'var(--space-4) 4px',textAlign:'center'}}>
              <span aria-hidden="true" data-wx-raster="1" style={{display:'grid',placeItems:'center',height:'34px'}}>
                {mode==='bar'&&<span style={{display:'grid',gap:'3px',width:'22px'}}>{[1,.8,1,.6].map((w,i)=>(<span key={i} style={{height:'2px',width:`${w*100}%`,background:'var(--ink-500)'}}/>))}</span>}
                {mode==='wave'&&<span style={{display:'flex',alignItems:'center',gap:'2px',height:'22px'}}>{[8,16,22,14,20,10].map((h,i)=>(<span key={i} style={{width:'2px',height:`${h}px`,background:rose}}/>))}</span>}
                {mode==='dots'&&<span style={{display:'grid',gridTemplateColumns:'repeat(2,5px)',gap:'4px'}}>{[1,1,0,1,1,0].map((f,i)=>(<span key={i} style={{width:'5px',height:'5px',borderRadius:'50%',background:f?'var(--ink-500)':'transparent',border:f?'none':'1px solid var(--m-sage-400)'}}/>))}</span>}
                {mode==='card'&&<span style={{width:'26px',height:'18px',border:`1px solid ${rose}`,background:'var(--m-rose-100)'}}/>}
                {mode==='ring'&&<span style={{width:'20px',height:'20px',borderRadius:'50%',border:'1px solid var(--ink-500)',display:'grid',placeItems:'center',fontFamily:'var(--font-serif)',fontSize:'13px',color:'var(--ink-500)'}}>?</span>}
              </span>
              <span style={{display:'block',marginTop:'8px',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'16px',letterSpacing:'.02em',color:'var(--ink-600)'}}>{k}</span>
            </div>))}
        </div>
        <p style={{...pEn,fontStyle:'italic',color:'var(--ink-500)'}}>Written &amp; audio editions, a conversation, a tactile card set, and a question box that makes the conversation two-way.</p>

        <HeadEn n="6">Meet Our Founders</HeadEn>
        <p style={{...pEn,margin:'0 0 var(--space-5)'}}>Duchamp Journal was founded by two high school editors, one in each node. Individual pages are in preparation.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--m-sage-200)'}}>
          {[['Cathy','Editor-in-chief · Guangzhou','Commissioning, English/Chinese edition, web design, communication','../assets/founder-cathy.jpg','Cathy’s portrait.'],['Rose','Editor-in-chief · New York','English/Chinese edition, audio production, communication','../assets/founder-rose.jpg','Rose’s portrait.']].map(([n,r,d,img,desc])=>(
            <div key={n} style={{background:'var(--m-rose-100)',padding:'var(--space-5) var(--space-4)'}}>
              <figure style={{margin:0}}><img src={img} alt={`Portrait of ${n}`} style={{display:'block',width:'100%',aspectRatio:'3/4',objectFit:'cover',objectPosition:'50% 12%',border:'1px solid var(--m-sage-200)'}}/><figcaption style={{marginTop:'8px',fontFamily:'var(--font-serif)',fontSize:'12px',lineHeight:1.75,color:'var(--ink-400)'}}><span style={{fontFamily:'var(--font-label)',fontSize:'10px',letterSpacing:'.16em',textTransform:'uppercase',color:'var(--m-sage-600)',marginRight:'6px'}}>Image description</span>{desc}</figcaption></figure>
              <div style={{marginTop:'12px',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'calc(var(--step-1) + 2px)',color:'var(--ink-900)'}}>{n}</div>
              <div style={{marginTop:'4px',fontFamily:'var(--font-label)',fontSize:'12px',letterSpacing:'var(--tracking-label)',textTransform:'uppercase',color:'var(--ink-400)'}}>{r}</div>
              <p style={{margin:'10px 0 0',fontFamily:'var(--font-serif)',fontSize:'calc(var(--step--1) + 2px)',lineHeight:1.75,color:'var(--ink-500)'}}>{d}</p>
              <span style={{display:'block',marginTop:'12px',paddingTop:'10px',borderTop:'1px solid var(--m-sage-200)',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'calc(var(--step--1) + 2px)',color:sage}}>Profile page · coming soon →</span>
            </div>))}
        </div>
      </div>

      <ConversationBox label="Work with us" questions={['Want to discuss scientific inquiry from an everyday perspective?','Would you like to collaborate with us?']} note="Leave a note or write to us. We read every one, and we welcome company in any form."/>
      </React.Fragment>)}
    </div>
    <div style={{padding:`var(--space-8) ${pad} var(--space-7)`,background:'var(--paper)'}}>
        {lang!=='en'&&(<div style={{margin:'0 0 var(--space-6)',paddingTop:'var(--space-5)',borderTop:'1px solid var(--m-sage-200)'}}>
          <span style={{display:'block',marginBottom:'10px',fontFamily:'var(--font-label)',fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--m-sage-600)'}}>资料来源</span>
          {['图片：“Elephant in the room”条目配图，维基百科（公有领域）。','插画：Tiedemann，报刊漫画。','插画：“Blind men and an elephant”条目配图，维基百科（公有领域）。','绘画：Frank Harris，《The Elephant in the Room》（frank-harris.pixels.com）。','漫画：Frits Ahlefeldt（HikingArtist），《Book tower experts》（hikingartist.com）。','“盲人摸象”同时见于汉传佛教典籍与古老南亚文献，本文将其视作跨地域共通的寓言，不归属单一源头。','约翰·赫尔（John Hull）《触摸岩石》(Touching the Rock, 1990)。','杜尚相关史实（视网膜艺术、现成品、1917 年《泉》）均为艺术史公认记载。'].map((t,i)=>(
            <p key={i} style={{margin:'0 0 8px',paddingLeft:'16px',position:'relative',fontFamily:'var(--font-serif-sc)',fontSize:'var(--step--2)',lineHeight:1.85,color:'var(--ink-400)'}}><span aria-hidden="true" style={{position:'absolute',left:0,top:'.75em',width:'6px',height:'1px',background:rose}}/>{t}</p>))}
        </div>)}
      {lang!=='cn'&&(<div style={{margin:'0 0 var(--space-6)',paddingTop:'var(--space-5)',borderTop:'1px solid var(--m-sage-200)'}}>
        <span style={{display:'block',marginBottom:'10px',fontFamily:'var(--font-label)',fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--m-sage-600)'}}>Sources</span>
        {['Photograph: illustration from the “Elephant in the room” entry, Wikipedia (public domain).','Illustration: Tiedemann, editorial cartoon.','Illustration: from the “Blind men and an elephant” entry, Wikipedia (public domain).','Painting: Frank Harris, The Elephant in the Room (frank-harris.pixels.com).','Cartoon: Frits Ahlefeldt (HikingArtist), “Book tower experts” (hikingartist.com).','盲人摸象 appears in both Chinese Buddhist tradition and older South Asian sources; we treat it as a shared parable rather than attributing it to a single origin.','John Hull, Touching the Rock (1990).','Duchamp’s biographical points (retinal art, the readymade, Fountain, 1917) are standard in the art-historical record.'].map((t,i)=>(
          <p key={i} style={{margin:'0 0 8px',paddingLeft:'16px',position:'relative',fontFamily:'var(--font-serif)',fontSize:'13px',lineHeight:1.85,color:'var(--ink-400)'}}><span aria-hidden="true" style={{position:'absolute',left:0,top:'.75em',width:'6px',height:'1px',background:rose}}/>{t}</p>))}
        <p style={{margin:'6px 0 0',fontFamily:"'Cormorant Garamond', var(--font-serif)",fontStyle:'italic',fontSize:'13px',color:'var(--ink-400)'}}>en.wikipedia.org/wiki/Elephant_in_the_room</p>
      </div>)}
    </div>
    {/* footer stays in sync across both exports: same structure, same closing
       treatment, each edition in its own language and its own serif */}
    <JournalFooter
      closing={lang==='en'?['One article, one invitation:','not how it works, but why it matters.']:['一篇文章分享，','一场真诚探讨的邀请']}
      lines={lang==='en'?['Chinese and English · text and audio together','A non-profit journal founded by high-school students','Guangzhou · New York']:['中英双语 · 文字与音频同步','由高中生发起的公益科普刊物','广州 · 纽约']}
      qrSrc={(typeof window!=='undefined'&&window.WX_QR)||'../assets/wechat-qr.png'}
      qrHint={lang==='en'?'Press and hold to follow':'长按关注'}
      style={lang==='en'?{'--font-serif-sc':'var(--font-serif)'}:undefined}/>
  </section>);
}
Object.assign(window,{AboutUsWeb});
