/* 世界视觉日 · 海伦·凯勒「她看不见世界，却让世界看见了光」
   Source: uploads/Helen Keller & World Sight Day (1).docx
   Bilingual master. lang: 'both' (master) | 'cn' (主推文) | 'en' (次条); exports read window.WX_LANG.
   Format is deliberately unlike issue 01 / About Us: full-width bands instead of an inset sheet,
   centred chapter heads, a calendar-leaf masthead, an inverted title bar, a finger-spelled W·A·T·E·R row,
   a timeline, three dawn-to-day bands, an inverted question band, a sight/vision table, a credits list.
   WeChat-native by construction: no position, writing-mode, transform, gradient, opacity, webfont-only
   decoration or negative margin. Only block flow, solid fills, borders, radii, padding and flex/grid rows
   (wx-flatten turns those into <table>). Nothing is rasterised; every word is a real text node. */
function HelenKeller(props){
  const lang=(props&&props.lang)||window.WX_LANG||'both';
  const DS=window.DuchampJournalDesignSystem_a8bf23||{};
  const {Label,ConversationBox,SourcesNote,JournalFooter,Figure}=DS;
  const E=DS.Emphasis;
  const gold='#8C7F5E', lil='#6F6A80', ink='#2E3A45', paper='#FDFDFD';
  const PAD='34px';
  const nums=['一','二','三','四','五'], ords=['One','Two','Three','Four','Five'];

  const CN={
    font:'var(--font-serif-sc)', kicker:'笃象 Duchamp Journal · 世界视觉日特刊', month:'十月', dayLabel:'世界视觉日', date:'2026 年 10 月 8 日',
    t1:'她看不见世界，', t2:'却让世界看见了光', sub:'The Woman Who Taught the World to See', subFont:'var(--font-serif)', subItalic:true,
    takeLabel:'如果你只记住一句话', take:'她的双眼没有复明，真正改变的，是连接。',
    intro:[<>10 月 8 日是世界视觉日。这个日子不只呼吁我们珍惜自身的视觉，也提醒着我们：全球有二十多亿视力受损的群体，值得被看见、被听见。提起视障议题，绕不开海伦·凯勒这个名字。两岁之后，她再没见过一次日出；可以说，她却比那个世纪几乎任何人都看得更清楚。</>,
      <>国内绝大多数人认识她，都源于《假如给我三天光明》。年少阅读，大多只被故事的励志所打动；当我们再回望，才读懂文字背后抛出的沉重叩问。<E>这个问题，时至今日依旧具备现实重量</E>，也和笃象关注无障碍、视障群体的内核深深契合。</>],
    chap:n=>`第${nums[n-1]}章`,
    h:['黑暗里，找到连接世界的密钥','目不能视，却拥有最远的远见','“三天光明”，抛给健全者的拷问','世界视觉日：不止守护眼睛，更要修炼远见','她留下的馈赠，是我们共同的命题'],
    c1a:[<>1880 年，海伦·凯勒出生在美国阿拉巴马州。十九个月大时，一场重病彻底夺走了她的视力与听力。漫长的数年，她被困在寂静又漆黑的混沌之中，没有语言可以用来理解周遭。她焦躁、孤独，被旁人贴上“顽劣野孩子”的标签。可她本身聪慧敏锐，<E>只是缺少一扇通往外部世界的通道</E>。</>,
      <>1887 年，同样视力受损的莎莉文老师来到她身边。</>],
    fig0:{alt:'莎莉文与海伦·凯勒的黑白合影',label:'图像描述',desc:'一张黑白合影：左边的女子身穿浅色上衣坐着，双手放在膝上一本摊开的大书上；右边的女子身穿深色外套、戴珍珠项链，站在她身后，一手扶着书页。',cap:'安妮·莎莉文（右）与海伦·凯勒，约 1920 年代'},
    c1p:[<>命运的转折点发生在水井旁：清凉的水流淌过海伦的手掌，莎莉文老师在她另一只手心，一遍遍拼写单词：</>],
    spellNote:'就在这一瞬间，海伦顿悟：世间万物，皆拥有属于自己的名字。语言随之涌入，一个完整的世界也随之打开。',
    c1b:[<>值得在这里停一停，想想那一刻真正发生了什么。她的双眼没有复明，真正发生改变的，是连接。有人搭建起另一条通路，走进了她封闭的内心。无障碍的本质也正是如此：<E>不是修复缺损的感官，而是搭建桥梁</E>，让被隔绝的人，得以对接这个世界。</>],
    fig:{alt:'海伦·凯勒的黑白肖像照',label:'图像描述',desc:'一张黑白肖像照：海伦·凯勒侧身坐在椅子上，头发向后挽起，身穿深色印花连衣裙，双手交叠放在膝上。',cap:'海伦·凯勒（1880–1968）'},
    c2a:[<>往后余生，她执笔写作、公开演讲，奔走世界各地，为残障群体、劳工、女性权益发声抗争。</>],
    tl:[['1880','出生于美国阿拉巴马州'],['1882','十九个月大，一场重病夺走她的视力与听力'],['1887','莎莉文老师来到她身边'],['1904','毕业于拉德克利夫学院，成为全世界第一位取得学士学位的聋盲人'],['1915','参与创办海伦·凯勒国际组织，至今仍在全球开展防盲科普、改善营养健康的公益工作']],
    c2b:[<>想一想：一位身处黑暗的人，穷尽一生守护他人的光明。她没有被苦难裹挟滋生怨怼，反而将亲身经历，转化成对整个群体的担当。这也正是我们做笃象公众号的初心：<E>视障群体不只是等待救助的受助对象，本身也可以是思考者、创作者、行动者</E>。</>],
    c3a:[<>在那篇家喻户晓的散文中，她畅想如若可以拥有三天视力，她会这样度过：</>],
    days:[['第一天','凝望所爱之人的脸庞'],['第二天','品读人类沉淀的艺术与历史'],['第三天','感受城市清晨的人间烟火']],
    qLead:'而后，她把尖锐的问题抛向拥有视力的我们', q1:'拥有双眼的普通人，', q2:'我们真的在“看见”吗？', qBy:'海伦·凯勒《假如给我三天光明》· 1933',
    fig2:{alt:'眼睛特写，瞳孔里映出一个划皮划艇的人',label:'图像描述',desc:'一只眼睛的特写，睫毛清晰可见；瞳孔里映出一片水面，一个人坐在白色皮划艇上划桨。',cap:'看见，从真正去看开始。'},
    c3b:[<>放到当下，这个问题更值得反思。我们整日沉浸电子屏幕，消耗大量视觉，却鲜少抬头仰望天空，也很少认真端详身边亲人的面容。</>],
    stat:'10 亿', statCap:'世卫组织数据：全球至少十亿人的视力损伤，本可以预防，却依旧得不到妥善解决。',
    c3c:[<>很多时候，改变现状仅仅只需要一副眼镜、一场白内障手术。<E>很多失明，不全是命运，而是资源、机会与无障碍环境带来的鸿沟</E>。</>],
    c4a:[<>世界视觉日向我们提出两件事，而海伦·凯勒两者兼备。她一生都在区分两个概念：视力，和远见。借世界视觉日，我们可以从这两层付诸行动：</>],
    cmp:[['视力','远见'],['眼睛的生理机能','来自心灵与认知'],['守护视力：坚持定期眼科检查，重视青少年用眼健康，支持将眼科医疗资源送往偏远地区的公益项目。未被发现的视力问题，会悄悄影响孩子的学习。','修炼远见：不止用眼睛看，更要用心去看清。看见视障等障碍群体真实的处境，跳出单纯施舍救助的视角，看见平等、包容的世界该有的模样，并为之付诸微小的行动。']],
    cmpRow:['','是什么','我们能做的'],
    c5a:[<>我们常常简化海伦·凯勒的故事，把它包装成“对抗命运、战胜苦难”的励志鸡汤。但她从不是孤身完成这一切。</>],
    credLabel:'共同成就这段传奇的', cred:['莎莉文长久的陪伴引导','盲文与手语的发明创造','无数愿意平等倾听的人'],
    c5b:[<>这个故事真正的内核：当社会不愿放弃任何一个个体，愿意搭建平等连接的桥梁，奇迹才会诞生。这也正是笃象想要传递的：<E>无障碍不是单方面给予帮助，而是搭建双向的沟通</E>，听见视障群体真实的思考与声音。</>],
    gazeLead:'在这个世界视觉日，请慢下来，认真凝望', gaze:['一张挚爱之人的脸庞','窗外摇曳的树木','傍晚温柔的霞光'], gazeEnd:'再问问自己，海伦留下的那个问题。',
    convLabel:'读者来信', conv:['还有哪些人，无缘看见这些美好？','我们又可以做些什么，让他们也被世界看见？'], convNote:'在留言区写下你的答案，我们逐条阅读，并在下一期刊印其中几则。',
    src:'参考来源：世界卫生组织《世界视力报告》（2019）；海伦·凯勒《我的生活》（1903）、《假如给我三天光明》（1933）；海伦·凯勒国际组织；美国盲人基金会海伦·凯勒档案。完整引文可按需提供。'
  };
  const EN={
    font:'var(--font-serif)', kicker:'Duchamp Journal 笃象 · World Sight Day', month:'Oct', dayLabel:'World Sight Day', date:'October 8, 2026',
    t1:'The Woman Who', t2:'Taught the World to See', sub:'她看不见世界，却让世界看见了光', subFont:'var(--font-serif-sc)', subItalic:false,
    takeLabel:'If you remember one thing', take:'Her eyes were not healed. What changed was the connection.',
    intro:[<>On Thursday, October 8, the world marks World Sight Day. It's a day to think about the gift of vision and about the more than two billion people living with some form of vision impairment. It's also a good day to remember Helen Keller. She never saw a single sunrise after the age of two, yet <E>she arguably saw more clearly than almost anyone of her century</E>.</>,
      <>Most readers in China first met her through <i>Three Days to See</i>. Read young, it moves us mostly as a story of perseverance; read again, it reveals the heavy question beneath the words. <E>That question still carries real weight today</E>, and it sits close to the heart of Duchamp Journal's work on accessibility and blind and low-vision communities.</>],
    chap:n=>`Chapter ${ords[n-1]}`,
    h:['Darkness, and then a word','Seeing without sight','Three days to see','What World Sight Day asks of us','Her legacy, our responsibility'],
    c1a:[<>Keller was born in 1880 in Tuscumbia, Alabama. At nineteen months old, an illness took both her sight and her hearing. For the next five years she lived in a world without words. She was furious, isolated, and often called &ldquo;wild.&rdquo; The problem wasn't that she lacked intelligence. <E>It was that she had no way in.</E></>,
      <>Then in 1887, a young teacher named Anne Sullivan entered Keller\u2019s life. She was partially blind herself.</>],
    fig0:{alt:'Black-and-white photograph of Anne Sullivan and Helen Keller',label:'Image description',desc:'A black-and-white photograph of two women: on the left, a woman in a light blouse sits with both hands resting on a large open book in her lap; on the right, a woman in a dark coat and a pearl necklace stands behind her, one hand on the page.',cap:'Anne Sullivan (right) and Helen Keller, c. 1920s'},
    c1p:[<>The breakthrough came at a water pump. While cool water ran over one of Keller's hands, Sullivan spelled into the other:</>],
    spellNote:'In that moment, Keller later wrote, she understood that everything had a name. Language rushed in, and with it was the whole world.',
    c1b:[<>It's worth pausing on what really happened there. Keller's eyes were not healed. What changed was the connection. <E>Someone found another path to her mind.</E> That is what accessibility really means: not repairing a missing sense, but building a bridge so that someone who has been shut out can reach the world.</>],
    fig:{alt:'Black-and-white portrait of Helen Keller',label:'Image description',desc:'A black-and-white portrait: Helen Keller sits angled in a chair, her hair pinned back, wearing a patterned dress, her hands folded in her lap.',cap:'Helen Keller (1880\u20131968)'},
    c2a:[<>She wrote books and lectured on every continent she could reach. She campaigned for disability rights, workers' rights, and women's suffrage.</>],
    tl:[['1880','Born in Tuscumbia, Alabama'],['1882','At nineteen months, an illness takes her sight and hearing'],['1887','Anne Sullivan arrives'],['1904','Graduates from Radcliffe College, the first deafblind person to earn a bachelor\u2019s degree'],['1915','Co-founds what is now Helen Keller International, which still works to prevent blindness and malnutrition']],
    c2b:[<>Think about that for a moment. A woman who could not see spent her life making sure others wouldn't lose their sight needlessly. She didn't turn her loss into bitterness. <E>She turned it into an obligation to other people.</E> This is also why we started Duchamp Journal: <E>blind and low-vision people are not only people waiting to be helped; they are thinkers, creators, and people who act</E>.</>],
    c3a:[<>In her 1933 essay <i>Three Days to See</i>, she imagined what she'd look at if given sight for just three days:</>],
    days:[['Day one','The faces of the people she loved'],['Day two','The art and history of human civilization'],['Day three','The ordinary rush of a city morning']],
    qLead:'Then she turned the question back on her readers:', q1:'You have sight,', q2:'but do you have the vision to see what truly matters?', qBy:'After Helen Keller, Three Days to See, 1933',
    fig2:{alt:'Close-up of an eye with a person kayaking reflected in the pupil',label:'Image description',desc:'A close-up of an eye with its lashes in sharp focus; reflected in the pupil is a stretch of water where a person paddles a white kayak.',cap:'Seeing begins with really looking.'},
    c3b:[<>Keller's question is still uncomfortable, because the honest answer for many of us is &ldquo;not really.&rdquo; We scroll past faces. We glance at skies without looking up.</>],
    stat:'1 billion', statCap:'According to the World Health Organization, at least one billion people have vision impairment that could have been prevented or simply hasn\u2019t been addressed.',
    c3c:[<>Often the fix is just a pair of glasses or cataract surgery. <E>In many of these cases, blindness is not a matter of fate. It's a matter of access.</E></>],
    c4a:[<>So World Sight Day asks two things of us, and Keller embodied both. She often contrasted sight with vision:</>],
    cmp:[['Sight','Vision'],['What the eyes do','What a person does with what they perceive'],['Protect sight. Get your own eyes checked. Support organizations that bring eye care to places that lack it. Pay attention to children\u2019s vision: unaddressed problems quietly shape how a child learns.','Practice vision. Don\u2019t only look with your eyes; look with your mind. See the real lives of blind and disabled people, step beyond the view of charity, picture what an equal and inclusive world should look like, and take small steps toward it.']],
    cmpRow:['','What it is','What we can do'],
    c5a:[<>Helen Keller's life is often told as a story of overcoming, but that framing misses something. She didn't overcome alone.</>],
    credLabel:'Those who helped her across', cred:['Anne Sullivan','The people who built tactile alphabets and braille','The readers who listened'],
    c5b:[<><E>Her story is really about what becomes possible when people refuse to let someone stay locked out.</E> This is what Duchamp Journal hopes to carry forward: accessibility is not one-way help, but two-way conversation, listening to what visually impaired people actually think and say.</>],
    gazeLead:'This World Sight Day, take a moment to really look at something', gaze:['A face you love','A tree outside your window','The light at the end of the day'], gazeEnd:'Then ask the question Keller would ask.',
    convLabel:'Join the conversation', conv:['Who can\u2019t see this yet?','What could I do about it?'], convNote:'Leave your answer in the comments. We read every one, and print a few in the next issue.',
    src:'Sources: World Health Organization, World Report on Vision (2019); Helen Keller, The Story of My Life (1903) and \u201cThree Days to See\u201d (1933); Helen Keller International; American Foundation for the Blind, Helen Keller Archive. Full citations available on request.'
  };

  const Article=({L})=>{
    const t=L==='cn'?CN:EN, cn=L==='cn', f=t.font;
    const p={margin:'0 0 22px',fontFamily:f,fontSize:cn?'16px':'17px',lineHeight:cn?2.05:1.9,color:'#44525E'};
    const lab={fontFamily:'var(--font-label)',fontSize:'11px',letterSpacing:'.18em',textTransform:'uppercase'};
    const Col=({children,top})=>(<div style={{padding:`${top||0}px ${PAD} 0`,background:paper}}>{children}</div>);
    const Ps=({list})=>list.map((x,i)=>(<p key={i} style={p}>{x}</p>));
    const Chap=({n})=>(<div style={{margin:'64px 0 30px',textAlign:'center'}}>
      <p style={{...lab,margin:'0 0 14px',color:gold}}>{t.chap(n)}</p>
      <h2 style={{margin:0,fontFamily:f,fontWeight:700,fontStyle:cn?'normal':'italic',fontSize:cn?'24px':'26px',lineHeight:1.45,letterSpacing:cn?'.06em':'0',color:ink}}>{t.h[n-1]}</h2>
      <div aria-hidden="true" style={{width:'40px',height:'2px',margin:'18px auto 0',background:'#D0C6A9'}}></div>
    </div>);
    return (<div lang={cn?'zh-CN':'en'} style={{background:paper}}>
      {/* masthead: calendar leaf + kicker, title with inverted second line */}
      <div style={{background:'#F5F2E9',padding:`40px ${PAD} 34px`,borderTop:'6px solid #D0C6A9'}}>
        <div><div style={{display:'flex',alignItems:'center'}}>
          <div data-stamp={L} data-wx-raster="1" aria-hidden="true" style={{flex:'0 0 auto',whiteSpace:'nowrap',padding:'6px',background:'#F5F2E9'}}>
          <div style={{width:'82px',height:'82px',padding:'4px',border:'1px solid #D0C6A9',borderRadius:'50%',background:'#F5F2E9'}}>
            <div style={{width:'82px',height:'82px',borderRadius:'50%',background:'#EFEEF3',textAlign:'center'}}>
              <div style={{paddingTop:'17px',fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'26px',lineHeight:'30px',letterSpacing:'.02em',color:ink}}>10·08</div>
              <div style={{marginTop:'3px',...lab,fontSize:'9px',letterSpacing:'.16em',lineHeight:'14px',color:lil}}>{cn?'视觉日':'Sight Day'}</div>
            </div>
          </div>
          </div>
          <div style={{flex:1,minWidth:0,paddingLeft:'18px'}}>
            <p style={{...lab,margin:'0 0 8px',color:gold,lineHeight:1.6}}>{t.kicker}</p>
            <p style={{margin:0,fontFamily:f,fontStyle:cn?'normal':'italic',fontSize:'14px',lineHeight:1.6,color:'#5C6975'}}>{t.date}</p>
          </div>
        </div></div>
        <h1 style={{margin:'34px 0 0',fontFamily:f,fontWeight:cn?400:700,fontSize:cn?'30px':'32px',lineHeight:1.55,letterSpacing:cn?'.06em':'0',color:ink}}>
          <span style={{display:'block'}}>{t.t1}</span>
          <span style={{display:'inline-block',marginTop:'6px',padding:'2px 10px',background:'#DCDAE4',color:ink}}>{t.t2}</span>
        </h1>
        <p style={{margin:'18px 0 0',fontFamily:t.subFont,fontStyle:t.subItalic?'italic':'normal',fontSize:t.subItalic?'19px':'16px',lineHeight:1.5,color:'#5C6975'}}>{t.sub}</p>
      </div>

      {/* one-line takeaway */}
      <Col top={34}>
        <div style={{borderTop:'4px solid #D0C6A9',borderBottom:'1px solid #E9E3D2',padding:'18px 0 20px',margin:'0 0 30px'}}>
          <p style={{...lab,margin:'0 0 10px',color:gold}}>{t.takeLabel}</p>
          <p style={{margin:0,fontFamily:f,fontWeight:700,fontSize:cn?'20px':'21px',lineHeight:1.7,color:ink}}>{t.take}</p>
        </div>
        <Ps list={t.intro}/>
        <Chap n={1}/>
        <Ps list={t.c1a}/>
        <Figure src="../assets/helen-keller/keller-sullivan-1920s.webp" alt={t.fig0.alt} descriptionLabel={t.fig0.label} description={t.fig0.desc} caption={t.fig0.cap} tone="full" style={{maxWidth:'300px',margin:'0 auto 30px'}}/>
        <Ps list={t.c1p}/>
      </Col>

      {/* finger-spelled W A T E R */}
      <div style={{background:'#EFEEF3',padding:`30px ${PAD} 26px`,margin:'4px 0 30px',textAlign:'center'}}>
        <div style={{textAlign:'center'}}>
          {['w','a','t','e','r'].map(c=>(<span key={c} style={{display:'inline-block',margin:'0 4px',verticalAlign:'top',width:'48px',height:'48px',lineHeight:'48px',textAlign:'center',border:'1px solid #B7B3C4',background:paper,fontFamily:'var(--font-serif)',fontStyle:'italic',fontSize:'26px',color:ink}}>{c}</span>))}
        </div>
        <p style={{margin:'20px auto 0',maxWidth:'480px',fontFamily:f,fontSize:cn?'16px':'17px',lineHeight:1.9,color:ink}}>{t.spellNote}</p>
      </div>

      <Col>
        <Ps list={t.c1b}/>
        <Chap n={2}/>
        <Figure src="../assets/helen-keller/helen-keller-portrait.webp" alt={t.fig.alt} descriptionLabel={t.fig.label} description={t.fig.desc} caption={t.fig.cap} tone="full" style={{maxWidth:'300px',margin:'0 auto 30px'}}/>
        <Ps list={t.c2a}/>
        {/* timeline */}
        <div style={{margin:'6px 0 30px',borderTop:'1px solid #D0C6A9'}}>
          {t.tl.map(([y,x])=>(<div key={y} style={{display:'flex',alignItems:'baseline',padding:'14px 0',borderBottom:'1px solid #E9E3D2'}}>
            <span style={{flex:'0 0 auto',width:'72px',fontFamily:'var(--font-serif)',fontSize:'20px',lineHeight:1.4,color:gold}}>{y}</span>
            <span style={{flex:1,minWidth:0,fontFamily:f,fontSize:'15px',lineHeight:1.8,color:'#44525E'}}>{x}</span>
          </div>))}
        </div>
        <Ps list={t.c2b}/>
        <Chap n={3}/>
        <Ps list={t.c3a}/>
      </Col>

      {/* three days: dawn to full day */}
      <div style={{margin:'6px 0 0'}}>
        {t.days.map(([d,x],i)=>(<div key={d} style={{background:['#F5F2E9','#E9E3D2','#DCDAE4'][i],padding:`22px ${PAD}`}}><div style={{display:'flex',alignItems:'baseline'}}>
          <span style={{flex:'0 0 auto',width:cn?'78px':'100px',...lab,fontSize:'12px',color:i===2?lil:gold}}>{d}</span>
          <span style={{flex:1,minWidth:0,fontFamily:f,fontStyle:cn?'normal':'italic',fontSize:'18px',lineHeight:1.6,color:ink}}>{x}</span>
        </div></div>))}
      </div>

      {/* the question, on a soft lilac band */}
      <div style={{background:'#EFEEF3',padding:`48px ${PAD} 44px`,textAlign:'center'}}>
        <p style={{...lab,margin:'0 0 22px',color:lil,lineHeight:1.7}}>{t.qLead}</p>
        <p style={{margin:0,fontFamily:f,fontSize:cn?'24px':'27px',lineHeight:1.6,color:ink}}>{t.q1}</p>
        <p style={{margin:0,fontFamily:f,fontWeight:700,fontStyle:cn?'normal':'italic',fontSize:cn?'24px':'27px',lineHeight:1.6,color:ink}}>{t.q2}</p>
        <p style={{margin:'24px 0 0',fontFamily:f,fontStyle:'italic',fontSize:'13px',lineHeight:1.6,color:lil}}>{t.qBy}</p>
      </div>

      <Col top={34}>
        <Figure src="../assets/helen-keller/eye-reflection.jpg" alt={t.fig2.alt} descriptionLabel={t.fig2.label} description={t.fig2.desc} caption={t.fig2.cap} tone="full" style={{maxWidth:'420px',margin:'0 auto 30px'}}/>
        <Ps list={t.c3b}/>
        {/* the number */}
        <div style={{margin:'8px 0 30px',padding:'26px 0',borderTop:'1px solid #D0C6A9',borderBottom:'1px solid #D0C6A9',textAlign:'center'}}>
          <p style={{margin:0,fontFamily:'var(--font-serif)',fontSize:'52px',lineHeight:1.15,color:ink}}>{t.stat}</p>
          <p style={{margin:'12px auto 0',maxWidth:'460px',fontFamily:f,fontSize:'14px',lineHeight:1.85,color:'#5C6975'}}>{t.statCap}</p>
        </div>
        <Ps list={t.c3c}/>
        <Chap n={4}/>
        <Ps list={t.c4a}/>
        {/* sight / vision table */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'#B7B3C4',margin:'6px 0 34px',border:'1px solid #B7B3C4'}}>
          {t.cmp.flatMap((row,r)=>row.map((c,k)=>(<div key={r+'-'+k} style={{background:r===0?(k?'#DCDAE4':'#E9E3D2'):paper,padding:r===0?'14px 16px':'16px'}}>
            {r>0&&<p style={{...lab,margin:'0 0 8px',fontSize:'10px',color:k?lil:gold}}>{t.cmpRow[r]}</p>}
            <p style={{margin:0,fontFamily:f,fontWeight:r===0||r===1?700:400,fontStyle:!cn&&r===1?'italic':'normal',fontSize:r===0?'19px':r===1?'16px':'14px',lineHeight:r===2?1.85:1.6,color:ink}}>{c}</p>
          </div>)))}
        </div>
        <Chap n={5}/>
        <Ps list={t.c5a}/>
        {/* credits */}
        <div style={{margin:'10px 0 34px',textAlign:'center'}}>
          <p style={{...lab,margin:'0 0 18px',color:gold}}>{t.credLabel}</p>
          {t.cred.map((c,i)=>(<React.Fragment key={c}>
            {i>0&&<div aria-hidden="true" style={{width:'6px',height:'6px',margin:'12px auto',borderRadius:'50%',background:'#D0C6A9'}}></div>}
            <p style={{margin:0,fontFamily:f,fontStyle:cn?'normal':'italic',fontSize:'19px',lineHeight:1.6,color:ink}}>{c}</p>
          </React.Fragment>))}
        </div>
        <Ps list={t.c5b}/>
      </Col>

      {/* closing gaze */}
      <div style={{background:'#EFEEF3',padding:`40px ${PAD}`,margin:'8px 0 0',textAlign:'center'}}>
        <p style={{margin:'0 0 22px',fontFamily:f,fontSize:'15px',lineHeight:1.8,color:'#5C6975'}}>{t.gazeLead}</p>
        {t.gaze.map(g=>(<p key={g} style={{margin:'0 0 10px',fontFamily:f,fontStyle:cn?'normal':'italic',fontSize:'21px',lineHeight:1.6,color:ink}}>{g}</p>))}
        <p style={{margin:'22px 0 0',fontFamily:f,fontSize:'15px',lineHeight:1.8,color:'#5C6975'}}>{t.gazeEnd}</p>
      </div>

      <Col top={10}>
        <ConversationBox label={t.convLabel} font={f} questions={t.conv} note={t.convNote}/>
        <SourcesNote>{t.src}</SourcesNote>
      </Col>
    </div>);
  };

  return (<section style={{background:paper,color:ink}}>
    {lang!=='en'&&<Article L="cn"/>}
    {lang==='both'&&<div style={{background:'#E9E3D2',padding:`22px ${PAD}`,textAlign:'center'}}>
      <p style={{margin:0,fontFamily:'var(--font-label)',fontSize:'12px',letterSpacing:'.18em',textTransform:'uppercase',color:ink}}>English edition</p>
    </div>}
    {lang!=='cn'&&<Article L="en"/>}
    <JournalFooter style={lang==='en'?{background:'#EFEEF3','--font-serif-sc':'var(--font-serif)'}:{background:'#EFEEF3'}} qrSrc={window.WX_QR||'../assets/wechat-qr.png'} closing={lang==='en'?['One article to share,','one invitation to a real conversation']:['一篇文章分享，','一场真诚探讨的邀请']}
      lines={lang==='en'?['Chinese and English · text and audio together','A non-profit journal founded by high-school students','Guangzhou · New York']:['中英双语 · 文字与音频同步','由高中生发起的公益科普刊物','广州 · 纽约']}
      qrHint={lang==='en'?'Press and hold to follow':'长按关注'}/>
  </section>);
}
Object.assign(window,{HelenKeller});
