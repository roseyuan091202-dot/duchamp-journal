/* @ds-bundle: {"format":4,"namespace":"DuchampJournalDesignSystem_a8bf23","components":[{"name":"BrailleDots","sourcePath":"components/brand/BrailleDots.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Panel","sourcePath":"components/core/Panel.jsx"},{"name":"ArticleTitle","sourcePath":"components/editorial/ArticleTitle.jsx"},{"name":"ConversationBox","sourcePath":"components/editorial/ConversationBox.jsx"},{"name":"Emphasis","sourcePath":"components/editorial/Emphasis.jsx"},{"name":"Figure","sourcePath":"components/editorial/Figure.jsx"},{"name":"JournalFooter","sourcePath":"components/editorial/JournalFooter.jsx"},{"name":"Pullquote","sourcePath":"components/editorial/Pullquote.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"SourcesNote","sourcePath":"components/editorial/SourcesNote.jsx"},{"name":"Verse","sourcePath":"components/editorial/Verse.jsx"},{"name":"ArticleCard","sourcePath":"components/reader/ArticleCard.jsx"},{"name":"AudioPlayer","sourcePath":"components/reader/AudioPlayer.jsx"},{"name":"ModeSwitch","sourcePath":"components/reader/ModeSwitch.jsx"},{"name":"TactileCard","sourcePath":"components/reader/TactileCard.jsx"}],"sourceHashes":{"components/brand/BrailleDots.jsx":"2a16be92cf6e","components/brand/Logo.jsx":"5182caf1ce1a","components/core/Button.jsx":"2c91238afc53","components/core/Label.jsx":"7a5ef4dda19a","components/core/Panel.jsx":"daaa7ac580a5","components/editorial/ArticleTitle.jsx":"45ead143485a","components/editorial/ConversationBox.jsx":"5ff488cf6161","components/editorial/Emphasis.jsx":"451111097edc","components/editorial/Figure.jsx":"7101b24c853c","components/editorial/JournalFooter.jsx":"dce81a96a811","components/editorial/Pullquote.jsx":"a0cad5c8e6de","components/editorial/SectionHeading.jsx":"43db902efe6c","components/editorial/SourcesNote.jsx":"987654b623d5","components/editorial/Verse.jsx":"c3695e1844c7","components/reader/ArticleCard.jsx":"b6b6f701a75e","components/reader/AudioPlayer.jsx":"fc3529031ec1","components/reader/ModeSwitch.jsx":"aff163953471","components/reader/TactileCard.jsx":"a7ffe3680e7b","ui_kits/website/AboutScreen.jsx":"c52733bc82d5","ui_kits/website/ArticleScreen.jsx":"351ca62c6944","ui_kits/website/HomeScreen.jsx":"ed707032be51","ui_kits/website/SiteHeader.jsx":"29db85cba95f","ui_kits/wechat/AboutUs.jsx":"a19693df220d","ui_kits/wechat/AboutUsV2.jsx":"dd80d9f4485b","ui_kits/wechat/Article001.jsx":"13520affe746","ui_kits/wechat/ArticleBody.jsx":"dc40d7051f9b","ui_kits/wechat/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DuchampJournalDesignSystem_a8bf23 = window.DuchampJournalDesignSystem_a8bf23 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/BrailleDots.jsx
try { (() => {
// Grade-1 braille cell patterns, dots numbered 1-6 (col-major: 1,2,3 | 4,5,6)
const CELLS = {
  a: [1],
  b: [1, 2],
  c: [1, 4],
  d: [1, 4, 5],
  e: [1, 5],
  f: [1, 2, 4],
  g: [1, 2, 4, 5],
  h: [1, 2, 5],
  i: [2, 4],
  j: [2, 4, 5],
  k: [1, 3],
  l: [1, 2, 3],
  m: [1, 3, 4],
  n: [1, 3, 4, 5],
  o: [1, 3, 5],
  p: [1, 2, 3, 4],
  q: [1, 2, 3, 4, 5],
  r: [1, 2, 3, 5],
  s: [2, 3, 4],
  t: [2, 3, 4, 5],
  u: [1, 3, 6],
  v: [1, 2, 3, 6],
  w: [2, 4, 5, 6],
  x: [1, 3, 4, 6],
  y: [1, 3, 4, 5, 6],
  z: [1, 3, 5, 6],
  ' ': []
};
function BrailleDots({
  text = 'duchamp',
  size = 8,
  gap = 6,
  color = 'var(--blue-700)',
  mutedColor = 'var(--blue-100)',
  showEmpty = true,
  style
}) {
  const cells = String(text).toLowerCase().split('').map(ch => CELLS[ch] !== undefined ? CELLS[ch] : []);
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": 'Braille: ' + text,
    style: {
      display: 'inline-flex',
      gap: gap * 2.2,
      alignItems: 'flex-start',
      ...style
    }
  }, cells.map((dots, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateRows: `repeat(3,${size}px)`,
      gridAutoColumns: `${size}px`,
      gap,
      gridAutoFlow: 'column'
    }
  }, [1, 2, 3, 4, 5, 6].map(n => {
    const on = dots.includes(n);
    return on || showEmpty ? /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        width: size,
        height: size,
        borderRadius: '50%',
        background: on ? color : mutedColor
      }
    }) : /*#__PURE__*/React.createElement("span", {
      key: n
    });
  }))));
}
Object.assign(__ds_scope, { BrailleDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/BrailleDots.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  variant = 'lockup',
  height = 64,
  src,
  style
}) {
  const file = src || (variant === 'mark' ? 'assets/logo-mark.png' : 'assets/logo-lockup.png');
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 400,
        fontSize: height * 0.4,
        lineHeight: 1.15,
        letterSpacing: '0.06em',
        color: 'var(--ink-900)',
        display: 'inline-block',
        ...style
      }
    }, "Duchamp Journal", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif-sc)',
        marginLeft: '0.5em',
        letterSpacing: '0.2em',
        color: 'var(--ink-800)'
      }
    }, "\u7B03\u8C61"));
  }
  return /*#__PURE__*/React.createElement("img", {
    src: file,
    alt: "Duchamp Journal \u7B03\u8C61",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-label)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-1)',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--transition-ui)',
  minHeight: 'var(--tap-min)',
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase'
};
const sizes = {
  sm: {
    fontSize: 'var(--step--2)',
    padding: '8px 16px',
    minHeight: '36px'
  },
  md: {
    fontSize: 'var(--step--1)',
    padding: '12px 24px'
  },
  lg: {
    fontSize: 'var(--step-0)',
    padding: '15px 32px',
    letterSpacing: '0.12em'
  }
};
const tones = {
  primary: {
    background: 'var(--blue-600)',
    color: 'var(--white)',
    borderColor: 'var(--blue-600)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--blue-600)',
    borderColor: 'var(--border-panel)'
  },
  quiet: {
    background: 'var(--wash-1)',
    color: 'var(--ink-700)',
    borderColor: 'transparent'
  },
  text: {
    background: 'transparent',
    color: 'var(--blue-600)',
    borderColor: 'transparent',
    padding: '10px 4px',
    textTransform: 'none',
    letterSpacing: '0.02em',
    fontSize: 'var(--step-0)'
  }
};
const hovers = {
  primary: {
    background: 'var(--blue-700)',
    borderColor: 'var(--blue-700)'
  },
  outline: {
    background: 'var(--wash-1)',
    borderColor: 'var(--blue-400)'
  },
  quiet: {
    background: 'var(--wash-2)'
  },
  text: {
    color: 'var(--ink-800)'
  }
};
function Button({
  variant = 'outline',
  size = 'md',
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      ...sizes[size],
      ...tones[variant],
      ...(h && !disabled ? hovers[variant] : null),
      width: fullWidth ? '100%' : undefined,
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function Label({
  tone = 'blue',
  as = 'div',
  rule = false,
  children,
  style
}) {
  const color = {
    blue: 'var(--text-label)',
    muted: 'var(--ink-500)',
    faint: 'var(--ink-400)'
  }[tone];
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color,
      display: rule ? 'flex' : 'block',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-hairline)'
    }
  }));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Panel.jsx
try { (() => {
function Panel({
  variant = 'hairline',
  children,
  style
}) {
  const v = {
    hairline: {
      background: 'transparent',
      border: 'var(--border-panel-1)'
    },
    wash: {
      background: 'var(--wash-1)',
      border: '1px solid transparent'
    },
    mist: {
      background: 'var(--mist-quote)',
      border: 'none'
    },
    sheet: {
      background: 'var(--paper)',
      border: 'none',
      boxShadow: 'var(--shadow-sheet)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-1)',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Panel.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ArticleTitle.jsx
try { (() => {
function ArticleTitle({
  ghost = 'Seeing',
  lineOne = '文学与艺术',
  lineTwo = '不以目相见',
  subtitle = 'Literature & Art — Seeing Without the Eye',
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      paddingTop: ghost ? '52px' : 0,
      ...style
    }
  }, ghost && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: '-4px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 'var(--step-5)',
      lineHeight: 1,
      color: 'var(--blue-100)',
      letterSpacing: '-0.01em',
      userSelect: 'none'
    }
  }, ghost), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-4)',
      lineHeight: 1.35,
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-900)',
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, lineOne), lineTwo && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.6em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      background: 'linear-gradient(180deg,transparent 62%,var(--mark-highlight) 62%,var(--mark-highlight) 96%,transparent 96%)',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone'
    }
  }, lineTwo))), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      color: 'var(--ink-500)',
      letterSpacing: '0.01em'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { ArticleTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ArticleTitle.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ConversationBox.jsx
try { (() => {
function ConversationBox({
  label = 'Join the conversation',
  questions = ['If one of your senses closed tomorrow, which would you most want to keep?', 'And which door have you never walked through?'],
  note = 'Write to us in the comments — we read every one and print the best in the next issue!',
  font = 'var(--font-serif)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      border: 'var(--border-panel-1)',
      padding: 'var(--space-6) var(--space-6) var(--space-5)',
      margin: 'var(--space-8) 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    rule: true,
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, label), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, questions.map((q, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--blue-300)'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: font,
      fontSize: 'var(--step-1)',
      lineHeight: 1.75,
      color: 'var(--ink-800)'
    }
  }, q)))), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      fontFamily: font,
      fontSize: 'var(--step--1)',
      color: 'var(--ink-400)'
    }
  }, note));
}
Object.assign(__ds_scope, { ConversationBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ConversationBox.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Emphasis.jsx
try { (() => {
function Emphasis({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'underline',
      textDecorationThickness: 'var(--underline-emphasis)',
      textUnderlineOffset: 'var(--underline-offset)',
      textDecorationColor: 'var(--ink-300)',
      color: 'inherit',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Emphasis });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Emphasis.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Figure.jsx
try { (() => {
function Figure({
  src,
  alt = '',
  description,
  descriptionLabel,
  caption = '约翰·赫尔（John Hull），曾在伯明翰大学任教的神学家',
  ratio = '4 / 3',
  tone = 'mono',
  style
}) {
  const cn = /[\u4e00-\u9fff]/.test(String(description || caption || ''));
  const label = descriptionLabel || (cn ? '图像描述' : 'Image description');
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-7) 0',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      display: 'block',
      filter: tone === 'mono' ? 'grayscale(1) contrast(.96)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt || caption,
    style: {
      width: '100%',
      aspectRatio: ratio,
      background: 'var(--wash-2)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-400)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, "Image"), (description || caption) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '12px',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.7,
      color: 'var(--ink-500)'
    }
  }, description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontFamily: cn ? 'var(--font-serif-sc)' : 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, label), description), caption));
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Figure.jsx", error: String((e && e.message) || e) }); }

// components/editorial/JournalFooter.jsx
try { (() => {
function JournalFooter({
  closing = ['不是同情，', '而是邀请。'],
  lines = ['中英双语 · 文字与音频同步', '由高中生发起的公益科普刊物', '广州 · 纽约'],
  email = 'duchampjournal@gmail.com',
  qrSrc,
  qrHint = '长按关注',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--mist-footer)',
      padding: 'var(--space-8) var(--sheet-pad) var(--space-9)',
      ...style
    }
  }, closing && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      lineHeight: 2,
      color: 'var(--ink-600)',
      marginBottom: 'var(--space-6)'
    }
  }, closing.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hair)',
      paddingTop: 'var(--space-6)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      letterSpacing: '0.25em',
      color: 'var(--ink-800)'
    }
  }, "\u7B03\u8C61"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      margin: '8px 0 20px'
    }
  }, "Duchamp Journal"), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 2,
      color: 'var(--ink-600)'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      display: 'inline-block',
      marginTop: 'var(--space-5)',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)'
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, qrSrc ? /*#__PURE__*/React.createElement("img", {
    src: qrSrc,
    alt: "\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801",
    style: {
      width: 106,
      height: 106,
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 106,
      height: 106,
      background: 'var(--wash-1)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-400)'
    }
  }, "\u4E8C\u7EF4\u7801"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)'
    }
  }, qrHint))));
}
Object.assign(__ds_scope, { JournalFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/JournalFooter.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Pullquote.jsx
try { (() => {
function Pullquote({
  children = '我是否该开始这样看自己：不是一个被缺陷所‘致残’的人，而是一个被某种能力所‘赋能’的人？',
  attribution = '——《触摸磐石》，1986 年 4 月 21 日',
  variant = 'mark',
  style
}) {
  if (variant === 'rules') {
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: 'var(--space-8) 0',
        borderTop: 'var(--border-hair)',
        borderBottom: 'var(--border-hair)',
        padding: 'var(--space-6) var(--space-2)',
        textAlign: 'center',
        ...style
      }
    }, /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-serif-sc)',
        fontSize: 'var(--step-1)',
        lineHeight: 'var(--lh-normal)',
        color: 'var(--ink-800)'
      }
    }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        marginTop: 'var(--space-4)',
        fontFamily: 'var(--font-serif)',
        fontSize: 'var(--step--1)',
        color: 'var(--ink-400)'
      }
    }, attribution));
  }
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-7) 0',
      display: 'flex',
      gap: '18px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '4rem',
      lineHeight: .9,
      color: 'var(--blue-300)',
      flex: '0 0 auto'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.9,
      color: 'var(--ink-800)',
      letterSpacing: '0.01em'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-400)'
    }
  }, attribution)));
}
Object.assign(__ds_scope, { Pullquote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Pullquote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
function SectionHeading({
  number = '1',
  children = '约翰·赫尔：雨水递来的天地',
  style
}) {
  return /*#__PURE__*/React.createElement("h2", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '18px',
      margin: 'var(--space-9) 0 var(--space-6)',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-3)',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.03em',
      color: 'var(--ink-900)',
      ...style
    }
  }, number && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--blue-300)',
      fontSize: 'var(--step-3)'
    }
  }, number), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SourcesNote.jsx
try { (() => {
function SourcesNote({
  label = 'Sources / 参考来源',
  children = 'John M. Hull, Touching the Rock: An Experience of Blindness（引文原文照录，按日记日期标注）。沈冰山生平：光明日报《盲人画家沈冰山传奇》。赫尔中译为本刊自译。',
  footnotes = ['[1] Prof Hull was a respected theologian who taught at the University of Birmingham — BBC News'],
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: 'var(--border-hair)',
      paddingTop: 'var(--space-6)',
      marginTop: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Label, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.9,
      color: 'var(--ink-600)'
    }
  }, children), footnotes.map((f, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.8,
      color: 'var(--ink-500)'
    }
  }, f)));
}
Object.assign(__ds_scope, { SourcesNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SourcesNote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Verse.jsx
try { (() => {
function Verse({
  lines = ['雨拥有勾勒万物轮廓的魔力，', '仿佛为隐匿无形的万物覆上一层朦胧的薄毯。', '那层长久蒙住我的世界的面纱，', '在触碰降临之前，终于向我徐徐敞开。'],
  attribution = '——《触摸磐石》，1983 年 9 月 9 日',
  lang = 'zh',
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-9) 0',
      padding: 'var(--space-8) var(--space-5)',
      background: 'var(--mist-quote)',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: lang === 'zh' ? 'var(--font-serif-sc)' : 'var(--font-serif)',
      fontSize: 'var(--step-2)',
      lineHeight: 'var(--lh-verse)',
      color: 'var(--ink-800)',
      letterSpacing: '0.02em'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l))), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-5)',
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-400)'
    }
  }, attribution));
}
Object.assign(__ds_scope, { Verse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Verse.jsx", error: String((e && e.message) || e) }); }

// components/reader/ArticleCard.jsx
try { (() => {
function ArticleCard({
  issue = '第一期',
  topic = '文学与艺术',
  ghost = 'Seeing',
  titleZh = '不以目相见',
  titleEn = 'Seeing Without the Eye',
  dek = '视觉并不是认识世界的唯一方式——失去视力，并不等于失去一切。',
  size = 'md',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const big = size === 'lg';
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      padding: 'var(--space-6)',
      background: h ? 'var(--paper-tint)' : 'var(--paper)',
      border: 'var(--border-panel-1)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-ui)',
      overflow: 'hidden',
      ...style
    }
  }, ghost && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: big ? 10 : 6,
      right: 16,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: big ? 'var(--step-5)' : 'var(--step-3)',
      color: 'var(--blue-100)',
      lineHeight: 1
    }
  }, ghost), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-label)',
      marginBottom: 'var(--space-4)'
    }
  }, issue, " \xB7 ", topic), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: 'relative',
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 400,
      fontSize: big ? 'var(--step-4)' : 'var(--step-2)',
      lineHeight: 1.4,
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-900)'
    }
  }, titleZh), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '10px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: big ? 'var(--step-1)' : 'var(--step-0)',
      color: 'var(--ink-500)'
    }
  }, titleEn), dek && /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--ink-600)',
      maxWidth: 'var(--measure)'
    }
  }, dek));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/reader/AudioPlayer.jsx
try { (() => {
function AudioPlayer({
  title = '音频版 Audio edition',
  subtitle = '朗读 + 访谈 · 18:24',
  progress = 0.34,
  playing = false,
  onToggle,
  style
}) {
  const [p, setP] = React.useState(playing);
  const on = onToggle ? playing : p;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      background: 'var(--wash-1)',
      border: 'var(--border-panel-1)',
      padding: 'var(--space-5)',
      boxShadow: '0 6px 18px rgba(74,88,96,0.16)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": on ? 'Pause' : 'Play',
    onClick: () => onToggle ? onToggle(!on) : setP(!on),
    style: {
      width: 46,
      height: 46,
      flex: '0 0 46px',
      borderRadius: '50%',
      border: '1px solid var(--blue-400)',
      background: 'var(--paper)',
      color: 'var(--blue-700)',
      fontSize: 15,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, on ? '❚❚' : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    "aria-hidden": "true",
    style: {
      marginLeft: 2
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.4 2.6c0-1.1 1.1-1.8 2-1.2l8 5.4c.9.6.9 1.8 0 2.4l-8 5.4c-.9.6-2-.1-2-1.2V2.6z",
    fill: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: "1",
    stroke: "currentColor"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      color: 'var(--ink-800)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)',
      marginBottom: 10
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--ink-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: progress * 100 + '%',
      background: 'var(--blue-400)'
    }
  }))));
}
Object.assign(__ds_scope, { AudioPlayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/AudioPlayer.jsx", error: String((e && e.message) || e) }); }

// components/reader/ModeSwitch.jsx
try { (() => {
const DEFAULT = [{
  id: 'text',
  label: '文字 Text'
}, {
  id: 'audio',
  label: '音频 Audio'
}, {
  id: 'braille',
  label: '盲文 Braille'
}];
function ModeSwitch({
  modes = DEFAULT,
  value = 'text',
  onChange,
  size = 'md',
  style
}) {
  const pad = size === 'sm' ? '8px 14px' : '11px 20px';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": "Reading mode",
    style: {
      display: 'inline-flex',
      border: 'var(--border-panel-1)',
      background: 'var(--paper)',
      ...style
    }
  }, modes.map((m, i) => {
    const on = m.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(m.id),
      style: {
        fontFamily: 'var(--font-serif-sc)',
        fontSize: size === 'sm' ? 'var(--step--1)' : 'var(--step-0)',
        padding: pad,
        minHeight: size === 'sm' ? 36 : 'var(--tap-min)',
        border: 'none',
        borderLeft: i ? 'var(--border-hair)' : 'none',
        background: on ? 'var(--wash-2)' : 'transparent',
        color: on ? 'var(--ink-900)' : 'var(--ink-500)',
        letterSpacing: '0.04em',
        cursor: 'pointer',
        transition: 'var(--transition-ui)'
      }
    }, m.label);
  }));
}
Object.assign(__ds_scope, { ModeSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/ModeSwitch.jsx", error: String((e && e.message) || e) }); }

// components/reader/TactileCard.jsx
try { (() => {
function TactileCard({
  index = '01',
  label = '雨 / Rain',
  caption = '雨拥有勾勒万物轮廓的魔力。',
  braille = 'rain',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wash-1)',
      border: 'var(--border-panel-1)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      minHeight: 170,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-label)'
    }
  }, "\u89E6\u89C9\u5361 ", index), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, "Tactile card")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement(__ds_scope.BrailleDots, {
    text: braille,
    size: 7,
    gap: 5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--step--1)',
      lineHeight: 1.9,
      color: 'var(--ink-600)'
    }
  }, caption));
}
Object.assign(__ds_scope, { TactileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reader/TactileCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
function AboutScreen() {
  const {
    Label,
    Panel,
    Pullquote,
    Emphasis,
    BrailleDots
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      backgroundImage: 'var(--mist-top)',
      backgroundRepeat: 'no-repeat'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-6) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "About / \u5173\u4E8E\u672C\u520A"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 52,
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: -2,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 'var(--step-5)',
      lineHeight: 1,
      color: 'var(--blue-100)'
    }
  }, "Invitation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 400,
      fontSize: 'var(--step-4)',
      lineHeight: 1.35,
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u4E0D\u662F\u540C\u60C5\uFF0C"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.6em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      background: 'linear-gradient(180deg,transparent 62%,var(--mark-highlight) 62%,var(--mark-highlight) 96%,transparent 96%)',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone'
    }
  }, "\u800C\u662F\u9080\u8BF7\u3002")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      maxWidth: 'var(--measure)',
      margin: 0
    }
  }, "\u7B03\u8C61\u662F\u4E00\u4E2A\u7531\u9AD8\u4E2D\u751F\u53D1\u8D77\u7684\u516C\u76CA\u79D1\u666E\u520A\u7269\u3002\u6211\u4EEC\u7528\u901A\u4FD7\u6613\u61C2\u7684\u65B9\u5F0F\u8BB2\u89E3\u751F\u7269\u4E0E\u751F\u7269\u533B\u5B66\u79D1\u5B66\u4E0E\u5DE5\u7A0B\uFF0C\u4EE5\u53CA\u5176\u4ED6\u8DE8\u5B66\u79D1\u524D\u6CBF\u521B\u65B0\u3002\u6211\u4EEC\u56DE\u7B54\u7684\u4E0D\u662F\u201C\u8FD9\u9879\u6280\u672F\u7684\u96F6\u4EF6\u600E\u4E48\u8FD0\u4F5C\u201D\uFF0C\u800C\u662F", /*#__PURE__*/React.createElement(Emphasis, null, "\u201C\u5B83\u4E3A\u4EC0\u4E48\u91CD\u8981\uFF0C\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8981\u5728\u610F\u201D"), "\u3002"), /*#__PURE__*/React.createElement(Pullquote, {
    attribution: "\u2014\u2014\u6653\u6653\uFF0C\u5E7F\u5DDE\u624B\u5FC3\u5496\u5561\u521B\u59CB\u4EBA\u3001\u89C6\u969C\u5496\u5561\u5E08"
  }, "\u89C6\u969C\u670B\u53CB\u9700\u8981\u7684\u4E0D\u662F\u540C\u60C5\uFF0C\u800C\u662F\u88AB\u771F\u6B63\u9080\u8BF7\u8FDB\u5165\u793E\u4F1A\u7684\u5BF9\u8BDD\u4E2D\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      maxWidth: 'var(--measure)'
    }
  }, "\u520A\u540D\u81F4\u656C\u9A6C\u585E\u5C14\xB7\u675C\u5C1A\u3002\u4ED6\u53CD\u5BF9\u53EA\u670D\u52A1\u4E8E\u773C\u775B\u7684\u201C\u89C6\u7F51\u819C\u827A\u672F\u201D\uFF0C\u575A\u6301\u521B\u9020\u5E94\u5F53\u6FC0\u53D1\u601D\u8003\u3002\u6211\u4EEC\u501F\u7528\u4ED6\u7684\u903B\u8F91\u2014\u2014\u4E0D\u53D1\u660E\u65B0\u4E1C\u897F\uFF0C\u800C\u662F\u628A\u5DF2\u6709\u7684\u79D1\u7814\u6210\u679C\u7528\u4EBA\u7684\u89C6\u89D2\u91CD\u65B0\u5448\u73B0\u3002\u5C31\u50CF\u4ED6\u628A\u65E5\u5E38\u7269\u54C1\u653E\u8FDB\u5C55\u5385\u8BA9\u5B83\u4EEC\u6210\u4E3A\u8BDD\u9898\uFF0C\u6211\u4EEC\u628A\u524D\u6CBF\u79D1\u6280\u4ECE\u5B9E\u9A8C\u5BA4\u62C9\u8FDB\u65E5\u5E38\u5BF9\u8BDD\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    variant: "hairline"
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "Nodes / \u8282\u70B9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      lineHeight: 2,
      color: 'var(--ink-800)',
      letterSpacing: '.06em'
    }
  }, "\u5E7F\u5DDE Guangzhou", /*#__PURE__*/React.createElement("br", null), "\u7EBD\u7EA6 New York")), /*#__PURE__*/React.createElement(Panel, {
    variant: "wash"
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "Topics / \u4E3B\u9898"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 2.1,
      color: 'var(--ink-700)'
    }
  }, "\u751F\u7269\u4FE1\u606F\u5B66 \xB7 \u57FA\u56E0\u7EC4\u5B66 \xB7 AI \u533B\u5B66")), /*#__PURE__*/React.createElement(Panel, {
    variant: "hairline"
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, "Formats / \u5F62\u5F0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 2.1,
      color: 'var(--ink-700)',
      marginBottom: 'var(--space-4)'
    }
  }, "\u6587\u5B57 \xB7 \u97F3\u9891 \xB7 \u76F2\u6587 \xB7 \u89E6\u89C9\u5361\u7247 \xB7 \u63D0\u95EE\u7BB1"), /*#__PURE__*/React.createElement(BrailleDots, {
    text: "duchamp",
    size: 7,
    gap: 5
  }))))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleScreen.jsx
try { (() => {
function ArticleScreen({
  onBack
}) {
  const {
    ArticleTitle,
    SectionHeading,
    Figure,
    Pullquote,
    Verse,
    Emphasis,
    ConversationBox,
    SourcesNote,
    Label,
    ModeSwitch,
    AudioPlayer,
    BrailleDots,
    TactileCard,
    Button
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  const [mode, setMode] = React.useState('text');
  const p = {
    fontFamily: 'var(--font-serif-sc)',
    fontSize: 'var(--step-0)',
    lineHeight: 'var(--lh-reading)',
    color: 'var(--ink-700)',
    margin: '0 0 var(--space-5)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      padding: 'var(--space-7) 0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--sheet-max)',
      margin: '0 auto',
      background: 'var(--paper)',
      backgroundImage: 'var(--mist-top)',
      backgroundRepeat: 'no-repeat',
      boxShadow: 'var(--shadow-sheet)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rule-accent)',
      background: 'var(--wash-3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7) var(--sheet-pad) 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    onClick: onBack,
    style: {
      marginLeft: -4,
      marginBottom: 'var(--space-4)'
    }
  }, "\u2190 \u8FD4\u56DE\u672C\u671F"), /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "\u7B03\u8C61 Duchamp Journal \xB7 \u7B2C\u4E00\u671F"), /*#__PURE__*/React.createElement(ArticleTitle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hair)',
      margin: 'var(--space-7) 0 var(--space-6)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ModeSwitch, {
    value: mode,
    onChange: setMode
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)'
    }
  }, "\u4E09\u7248\u540C\u671F\u53D1\u5E03\u3002")), mode === 'audio' && /*#__PURE__*/React.createElement(AudioPlayer, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), mode === 'braille' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wash-1)',
      border: 'var(--border-panel-1)',
      padding: 'var(--space-5)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      color: 'var(--ink-800)',
      marginBottom: 'var(--space-4)'
    }
  }, "\u76F2\u6587\u7248 \xB7 BRF \u4E0B\u8F7D / \u5B9E\u4F53\u90AE\u5BC4"), /*#__PURE__*/React.createElement(BrailleDots, {
    text: "seeing",
    size: 7,
    gap: 5
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.9,
      color: 'var(--ink-600)',
      margin: 'var(--space-4) 0 0'
    }
  }, "\u767B\u8BB0\u5730\u5740\uFF0C\u63A5\u6536\u672C\u671F\u76F2\u6587\u518C\u4E0E\u89E6\u89C9\u5361\u7247\u3002")), /*#__PURE__*/React.createElement(Pullquote, null), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u672C\u520A\u7684\u540D\u5B57\u53D6\u81EA\u827A\u672F\u5BB6\u9A6C\u585E\u5C14\xB7\u675C\u5C1A\u3002\u4ED6\u4E00\u751F\u90FD\u5728\u53CD\u5BF9\u4ED6\u6240\u8BF4\u7684\u201C\u89C6\u7F51\u819C\u827A\u672F\u201D\u2014\u2014\u90A3\u7C7B\u4EC5\u4EC5\u53D6\u60A6\u53CC\u773C\u3001\u505C\u7559\u4E8E\u89C6\u89C9\u8868\u5C42\u7684\u521B\u4F5C\u3002\u5728\u4ED6\u770B\u6765\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u771F\u6B63\u7684\u521B\u9020\u5E94\u5F53\u89E6\u52A8\u5FC3\u7075\uFF0C\u800C\u4E0D\u53EA\u662F\u6EE1\u8DB3\u76EE\u5149"), "\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6211\u4EEC\u7684\u521B\u520A\u53F7\uFF0C\u8BB2\u7684\u662F\u4E00\u53F0\u201C\u770B\u8FDB\u201D\u773C\u775B\u3001\u63D0\u524D\u53D1\u73B0\u75BE\u75C5\u7684\u673A\u5668\u3002\u4F46\u89C6\u89C9\u5E76\u4E0D\u662F\u8BA4\u8BC6\u4E16\u754C\u7684\u552F\u4E00\u65B9\u5F0F\u2014\u2014", /*#__PURE__*/React.createElement(Emphasis, null, "\u5931\u53BB\u89C6\u529B\uFF0C\u5E76\u4E0D\u7B49\u4E8E\u5931\u53BB\u4E00\u5207"), "\u3002"), /*#__PURE__*/React.createElement(SectionHeading, {
    number: "1"
  }, "\u7EA6\u7FF0\xB7\u8D6B\u5C14\uFF1A\u96E8\u6C34\u9012\u6765\u7684\u5929\u5730"), /*#__PURE__*/React.createElement(Figure, {
    ratio: "3 / 4",
    caption: "\u7EA6\u7FF0\xB7\u8D6B\u5C14\uFF08John Hull\uFF09\uFF0C\u66FE\u5728\u4F2F\u660E\u7FF0\u5927\u5B66\u4EFB\u6559\u7684\u795E\u5B66\u5BB6",
    alt: "\u7EA6\u7FF0\xB7\u8D6B\u5C14\u7AD9\u5728\u53F0\u9636\u524D"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "1983 \u5E74\uFF0C\u5728\u89C6\u529B\u8870\u9000\u4E86\u51E0\u5341\u5E74\u4E4B\u540E\uFF0C\u82F1\u56FD\u795E\u5B66\u5BB6\u7EA6\u7FF0\xB7\u8D6B\u5C14\u5F7B\u5E95\u5931\u660E\u3002\u4ED6\u5F00\u59CB\u5F55\u5236\u4E00\u4EFD\u58F0\u97F3\u65E5\u8BB0\uFF0C\u540E\u6765\u7ED3\u96C6\u51FA\u7248\u4E3A\u300A\u89E6\u6478\u78D0\u77F3\u300B\u3002\u8FD9\u672C\u4E66\u4E4B\u6240\u4EE5\u52A8\u4EBA\uFF0C\u662F\u56E0\u4E3A\u4ED6\u65E2\u4E0D\u81EA\u601C\uFF0C\u4E5F\u4E0D\u5047\u88C5\u575A\u5F3A\u3002"), /*#__PURE__*/React.createElement(Verse, null), /*#__PURE__*/React.createElement(Pullquote, {
    variant: "rules",
    attribution: "\u2014\u2014\u300A\u89E6\u6478\u78D0\u77F3\u300B\uFF0C1984 \u5E74 7 \u6708 16 \u65E5"
  }, "\u201C\u52B3\u70E6\u8BF8\u4F4D\uFF0C\u4E0D\u5FC5\u5C06\u7EA6\u7FF0\u2018\u5B89\u7F6E\u2019\u4E8E\u4F55\u5904\u3002\u4E0D\u59A8\u95EE\u95EE\u7EA6\u7FF0\uFF0C\u4ED6\u81EA\u5DF1\u60F3\u8981\u5750\u5728\u54EA\u91CC\u3002\u201D"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u53E5\u8BDD\uFF0C\u51E0\u4E4E\u53EF\u4EE5\u505A\u6574\u672C\u520A\u7269\u7684\u7BB4\u8A00\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u4ED6\u4EEC\u60F3\u88AB\u5E73\u7B49\u5730\u95EE\u4E00\u53E5\u3001\u88AB\u9080\u8BF7\u8FDB\u5BF9\u8BDD\u91CC"), "\u3002"), /*#__PURE__*/React.createElement(SectionHeading, {
    number: "2"
  }, "\u6C88\u51B0\u5C71\uFF1A\u4EE5\u5FC3\u4E3A\u7B14\uFF0C\u843D\u58A8\u6210\u753B"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8D6B\u5C14\u7684\u601D\u7D22\uFF0C\u5728\u4E1C\u65B9\u571F\u5730\u4E0A\uFF0C\u4E5F\u6709\u7740\u9065\u9065\u76F8\u5E94\u7684\u56DE\u54CD\u3002\u6C88\u51B0\u5C71\u628A\u5BA3\u7EB8\u5F53\u4F5C\u8BB0\u5FC6\u4E2D\u7684\u68CB\u76D8\uFF1A\u4E00\u683C\u4E00\u683C\u8BB0\u4E0B\u7684\u5750\u6807\uFF0C\u5C31\u662F\u843D\u7B14\u7684\u4F4D\u7F6E\u3002\u4ED6\u79F0\u4E4B\u4E3A\u201C\u5FC3\u753B\u201D\u3002"), /*#__PURE__*/React.createElement(Figure, {
    ratio: "3 / 4",
    tone: "full",
    caption: "\u6C88\u51B0\u5C71\u300A\u8377\u9B42\u300B\uFF0C2008 \u5E74\u5199\uFF08110\xD7200cm\uFF09",
    alt: "\u6C34\u58A8\u8377\u82B1\u7ACB\u8F74"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      margin: 'var(--space-7) 0'
    }
  }, /*#__PURE__*/React.createElement(TactileCard, null), /*#__PURE__*/React.createElement(TactileCard, {
    index: "02",
    label: "\u8377 / Lotus",
    braille: "lotus",
    caption: "\u5148\u89E6\u6478\u771F\u5B9E\u7684\u8377\u53F6\uFF0C\u518D\u843D\u7B14\u3002"
  })), /*#__PURE__*/React.createElement(Verse, {
    lang: "en",
    lines: ['Sight is but one instrument', 'in the orchestra of perception.'],
    attribution: ""
  }), /*#__PURE__*/React.createElement(ConversationBox, null), /*#__PURE__*/React.createElement(SourcesNote, {
    style: {
      paddingBottom: 'var(--space-8)'
    }
  }))));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onOpen
}) {
  const {
    ArticleCard,
    Label,
    Button,
    Panel
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      backgroundImage: 'var(--mist-top)',
      backgroundRepeat: 'no-repeat',
      borderBottom: 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--space-6) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "\u7B03\u8C61 Duchamp Journal \xB7 \u7B2C\u4E00\u671F"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: -2,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 'var(--step-6)',
      lineHeight: 1,
      color: 'var(--blue-100)'
    }
  }, "Seeing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 400,
      fontSize: 'var(--step-5)',
      lineHeight: 1.35,
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u6587\u5B66\u4E0E\u827A\u672F"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.6em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      background: 'linear-gradient(180deg,transparent 62%,var(--mark-highlight) 62%,var(--mark-highlight) 96%,transparent 96%)',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone'
    }
  }, "\u4E0D\u4EE5\u76EE\u76F8\u89C1")))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-2)',
      color: 'var(--ink-500)',
      margin: 'var(--space-6) 0 var(--space-5)'
    }
  }, "Literature & Art \u2014 Seeing Without the Eye"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      maxWidth: 'var(--measure)',
      margin: '0 0 var(--space-6)'
    }
  }, "\u89C6\u89C9\u5E76\u4E0D\u662F\u8BA4\u8BC6\u4E16\u754C\u7684\u552F\u4E00\u65B9\u5F0F\u3002\u521B\u520A\u53F7\u8BB2\u4E00\u53F0\u201C\u770B\u8FDB\u201D\u773C\u775B\u7684\u673A\u5668\uFF0C\u4E5F\u8BB2\u4E09\u4E2A\u4E0D\u4EE5\u76EE\u76F8\u89C1\u7684\u4EBA\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onOpen
  }, "\u9605\u8BFB\u521B\u520A\u53F7"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "\u6536\u542C\u97F3\u9891\u7248"))), /*#__PURE__*/React.createElement(Panel, {
    variant: "hairline"
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, "\u6BCF\u671F\u4E09\u4E2A\u7248\u672C"), [['文字版', '中英双语同页对照'], ['音频版', '朗读 + 访谈'], ['盲文版', 'BRF 下载 / 实体邮寄']].map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      padding: 'var(--space-4) 0',
      borderTop: i ? 'var(--border-hair)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      color: 'var(--ink-900)',
      letterSpacing: '.05em'
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)',
      marginTop: 6
    }
  }, b))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.9,
      color: 'var(--ink-500)',
      margin: 'var(--space-5) 0 0'
    }
  }, "\u4E09\u7248\u540C\u671F\u53D1\u5E03\uFF0C\u4E0D\u662F\u4E8B\u540E\u8865\u7684\u7FFB\u8BD1\u3002\u6BCF\u671F\u53E6\u9644\u4E00\u5957\u89E6\u89C9\u5361\u7247\u3002")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--space-6) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    rule: true,
    style: {
      marginBottom: 'var(--space-7)'
    }
  }, "In this issue / \u672C\u671F\u76EE\u5F55"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(ArticleCard, {
    size: "lg",
    style: {
      gridColumn: '1 / -1'
    },
    onClick: onOpen
  }), /*#__PURE__*/React.createElement(ArticleCard, {
    issue: "\u7B2C\u4E00\u671F",
    topic: "\u4EBA\u7269",
    ghost: "Rain",
    titleZh: "\u7EA6\u7FF0\xB7\u8D6B\u5C14\uFF1A\u96E8\u6C34\u9012\u6765\u7684\u5929\u5730",
    titleEn: "John Hull: the world returned by rain",
    dek: "\u96E8\uFF0C\u5F25\u8865\u4E86\u5931\u660E\u4ECE\u4ED6\u8EAB\u4E0A\u593A\u8D70\u7684\u9988\u8D60\u3002",
    onClick: onOpen
  }), /*#__PURE__*/React.createElement(ArticleCard, {
    issue: "\u7B2C\u4E00\u671F",
    topic: "\u4EBA\u7269",
    ghost: "Ink",
    titleZh: "\u6C88\u51B0\u5C71\uFF1A\u4EE5\u5FC3\u4E3A\u7B14\uFF0C\u843D\u58A8\u6210\u753B",
    titleEn: "Shen Bingshan: painting with the heart",
    dek: "\u4ED6\u628A\u5BA3\u7EB8\u5F53\u4F5C\u8BB0\u5FC6\u4E2D\u7684\u68CB\u76D8\u3002",
    onClick: onOpen
  }), /*#__PURE__*/React.createElement(ArticleCard, {
    issue: "\u7B2C\u4E00\u671F",
    topic: "\u6280\u672F",
    ghost: "Eyes",
    titleZh: "\u4E00\u53F0\u201C\u770B\u8FDB\u201D\u773C\u775B\u7684\u673A\u5668",
    titleEn: "A machine that looks into the eye",
    dek: "\u63D0\u524D\u51E0\u5E74\u53D1\u73B0\u75BE\u75C5\uFF0C\u610F\u5473\u7740\u4EC0\u4E48\uFF1F",
    onClick: onOpen
  }), /*#__PURE__*/React.createElement(ArticleCard, {
    issue: "\u7B2C\u4E00\u671F",
    topic: "\u5BF9\u8BDD",
    ghost: "Ask",
    titleZh: "\u6653\u6653\uFF1A\u4E0D\u662F\u540C\u60C5\uFF0C\u800C\u662F\u9080\u8BF7",
    titleEn: "Xiaoxiao: not pity, an invitation",
    dek: "\u89C6\u969C\u670B\u53CB\u9700\u8981\u7684\u4E0D\u662F\u540C\u60C5\u3002",
    onClick: onOpen
  }))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
function SiteHeader({
  page,
  onNav,
  lang,
  onLang
}) {
  const {
    Logo
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  const items = [['home', '首页 Home'], ['issues', '往期 Issues'], ['about', '关于 About']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--paper)',
      borderBottom: 'var(--border-hair)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '18px var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      height: 34,
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      letterSpacing: '.22em',
      color: 'var(--ink-800)'
    }
  }, "\u7B03\u8C61"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)',
      marginTop: 4
    }
  }, "Duchamp Journal"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'auto'
    }
  }, items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(id);
    },
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      textDecoration: 'none',
      color: page === id ? 'var(--ink-900)' : 'var(--ink-500)',
      paddingBottom: 4,
      borderBottom: page === id ? '1px solid var(--blue-400)' : '1px solid transparent',
      letterSpacing: '.04em'
    }
  }, label))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onLang(lang === 'zh' ? 'en' : 'zh'),
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      padding: '8px 12px',
      border: 'var(--border-panel-1)',
      background: 'transparent',
      color: 'var(--ink-600)',
      cursor: 'pointer'
    }
  }, lang === 'zh' ? '中 / EN' : 'EN / 中')));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wechat/AboutUs.jsx
try { (() => {
/* 关于我们 · About Us
   House DNA reused (ghost word, band masthead, hairline heads, verse panel, question box),
   but the accent family is NEW: 莫兰迪 鼠尾草 sage + 玫灰 rose — deliberately avoiding
   001's teal / clay / straw / lilac so the About page reads as its own room. */
function AboutUs() {
  const [fmt, setFmt] = React.useState(0);
  const [hot, setHot] = React.useState(-1);
  const {
    Label,
    Emphasis,
    ConversationBox,
    JournalFooter
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  const issue = {
    '--blue-900': 'var(--m-sage-600)',
    '--blue-700': 'var(--m-sage-600)',
    '--blue-600': '#8D9680',
    '--blue-400': 'var(--m-sage-400)',
    '--blue-300': 'var(--m-sage-400)',
    '--blue-200': 'var(--m-sage-200)',
    '--blue-100': 'var(--m-sage-100)',
    '--mark-highlight': 'var(--m-rose-200)',
    '--wash-1': 'var(--m-sage-100)',
    '--wash-2': 'var(--m-sage-200)',
    '--wash-3': 'var(--m-sage-400)',
    '--surface-footer': 'var(--m-sage-200)',
    '--mist-footer': 'linear-gradient(180deg,#F4F6F1 0%, #DDE1D6 100%)'
  };
  const p = {
    fontFamily: 'var(--font-serif-sc)',
    fontSize: 'var(--step-0)',
    lineHeight: 'var(--lh-reading)',
    color: 'var(--ink-700)',
    margin: '0 0 var(--space-5)'
  };
  const pEn = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'calc(var(--step--1) + 4px)',
    lineHeight: 1.95,
    color: 'var(--ink-600)',
    margin: '0 0 var(--space-4)'
  };
  const pad = 'var(--sheet-pad-mobile)';
  /* 微信公众号 export mode: the WeChat editor strips float/shape-outside, so figures stack full-width */
  const wx = typeof window !== 'undefined' && window.WECHAT_MODE;
  const noFloat = st => wx ? {
    ...st,
    float: 'none',
    clear: 'both',
    width: '100%',
    maxWidth: '100%',
    margin: 'var(--space-6) 0',
    textAlign: 'center'
  } : st;
  const cap = px => wx ? {
    maxWidth: px + 'px',
    margin: '0 auto'
  } : {};
  const rose = '#A88187',
    sage = '#8D9680';
  /* CN section head — sage script kicker, rose numeral, each numeral treated differently */
  const Head = ({
    n,
    en,
    children
  }) => {
    const marks = {
      '1': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--m-rose-200)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: rose
        }
      }, "1"),
      '2': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '50%',
          border: '1px solid var(--m-rose-400)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: rose
        }
      }, "2"),
      '3': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'var(--step-2)',
          lineHeight: 1,
          color: rose,
          borderBottom: '2px solid var(--m-rose-400)',
          paddingBottom: '2px'
        }
      }, "03"),
      '4': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          display: 'flex',
          gap: '3px',
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: '6px',
          height: '22px',
          background: 'var(--m-rose-400)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          width: '6px',
          height: '14px',
          background: 'var(--m-rose-200)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          width: '6px',
          height: '28px',
          background: 'var(--m-rose-400)'
        }
      })),
      '5': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid var(--m-rose-400)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'var(--step--1)',
          color: rose
        }
      }, "05"),
      '6': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          display: 'flex',
          gap: '3px',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'var(--m-rose-400)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          border: '1px solid var(--m-rose-400)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          border: '1px solid var(--m-rose-200)'
        }
      }))
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-9) 0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '14px'
      }
    }, marks[n], /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Italianno', cursive",
        fontSize: '30px',
        lineHeight: 1,
        color: 'var(--m-sage-600)'
      }
    }, en), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--m-sage-200)'
      }
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-serif-sc)',
        fontSize: 'var(--step-3)',
        lineHeight: 1.4,
        letterSpacing: 'var(--tracking-title)',
        color: 'var(--ink-900)',
        fontWeight: 700
      }
    }, children));
  };
  /* EN head — mirrors structure, sage numerals, no script kicker */
  const HeadEn = ({
    n,
    children
  }) => {
    const marks = {
      '1': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid var(--m-sage-600)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: sage
        }
      }, "I"),
      '2': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'var(--step-3)',
          lineHeight: 1,
          color: 'var(--m-sage-400)'
        }
      }, "II"),
      '3': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '50%',
          background: 'var(--m-sage-400)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--2)',
          color: 'var(--white)'
        }
      }, "III"),
      '4': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          fontFamily: 'var(--font-serif)',
          fontVariantCaps: 'small-caps',
          letterSpacing: '.1em',
          fontSize: 'var(--step-1)',
          color: sage,
          borderBottom: '1px solid var(--m-sage-400)'
        }
      }, "iv"),
      '5': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(5,6px)',
          gap: '2px'
        }
      }, Array.from({
        length: 5
      }).map((_, i) => /*#__PURE__*/React.createElement("span", {
        key: i,
        style: {
          aspectRatio: '1',
          background: i < 2 ? 'var(--m-sage-600)' : 'var(--m-sage-200)'
        }
      }))),
      '6': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'var(--step-2)',
          lineHeight: 1,
          color: 'var(--m-sage-400)',
          letterSpacing: '.04em'
        }
      }, "VI")
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-7) 0 var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '12px'
      }
    }, marks[n], /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--m-sage-400)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginBottom: '6px',
        fontFamily: 'var(--font-label)',
        fontSize: '10px',
        letterSpacing: '.28em',
        textTransform: 'uppercase',
        color: 'var(--m-sage-600)'
      }
    }, ['', 'one', 'two', 'three', 'four', 'five', 'six'][+n], " \u2014 of six"), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: 'calc(var(--step-2) + 2px)',
        lineHeight: 1.35,
        color: 'var(--ink-900)'
      }
    }, children), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'block',
        marginTop: '10px',
        width: '54px',
        height: '2px',
        background: rose
      }
    }));
  };
  /* EN lede — drop cap opening paragraph */
  const LedeEn = ({
    children
  }) => /*#__PURE__*/React.createElement("p", {
    className: "dj-lede",
    style: {
      ...pEn,
      margin: '0 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.dj-lede::first-letter{float:left;font-family:'Playfair Display',var(--font-serif);font-style:italic;font-weight:700;font-size:62px;line-height:.72;margin:6px 10px 0 0;color:#A88187}.dj-lede>span.__om-t:first-of-type::first-letter{float:left;font-family:'Playfair Display',var(--font-serif);font-style:italic;font-weight:700;font-size:62px;line-height:.72;margin:6px 10px 0 0;color:#A88187}`), children);
  /* 编辑部名片 — reserved founder pages */
  const Founder = ({
    name,
    cn,
    role,
    place,
    note
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-5) var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": `${name} 肖像位待补`,
    style: {
      aspectRatio: '1',
      background: 'var(--m-rose-100)',
      border: '1px solid var(--m-rose-200)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-label)',
      color: rose
    }
  }, "PORTRAIT"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      color: 'var(--ink-900)',
      lineHeight: 1.2
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-600)'
    }
  }, cn, " \xB7 ", role), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2px',
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, place)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.8,
      color: 'var(--ink-500)'
    }
  }, note), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: '10px',
      borderTop: '1px solid var(--m-rose-200)',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--1)',
      color: rose
    }
  }, "\u4E2A\u4EBA\u9875 \xB7 coming soon \u2192"));
  /* section sub-heads inside 刊标的故事 */
  const SubCn = ({
    t,
    en
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: 'var(--space-7) 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-1)',
      letterSpacing: '.08em',
      color: 'var(--ink-900)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-rose-400)'
    }
  }), en ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--ink-400)'
    }
  }, en) : null);
  const SubEn = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: 'var(--space-7) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'calc(var(--step-1) + 2px)',
      lineHeight: 1.3,
      color: 'var(--ink-900)'
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-sage-400)'
    }
  }));
  /* 三象索引 / three-elephant index — one card per reading */
  const Triad = ({
    items,
    cn
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1px',
      background: 'var(--m-rose-200)',
      margin: 'var(--space-5) 0 var(--space-6)'
    }
  }, items.map(([n, k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) 8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      lineHeight: 1,
      color: rose
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '8px',
      fontFamily: cn ? 'var(--font-serif-sc)' : 'var(--font-serif)',
      fontWeight: 700,
      fontSize: cn ? 'var(--step-0)' : 'calc(var(--step--1) + 3px)',
      color: 'var(--ink-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: cn ? 'var(--font-serif-sc)' : 'var(--font-serif)',
      fontStyle: cn ? 'normal' : 'italic',
      fontSize: cn ? 'var(--step--2)' : '13px',
      lineHeight: 1.75,
      color: 'var(--ink-500)'
    }
  }, v))));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      ...issue
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 'var(--rule-accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 2,
      background: 'var(--m-sage-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-rose-200)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-sage-200)'
    }
  })), /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(165deg,var(--m-sage-100) 0%,#FDFDFD 78%)',
      padding: `var(--space-8) ${pad} 0`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      zIndex: 1,
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'clamp(56px, 15.4vw, 104px)',
      lineHeight: 0.86,
      letterSpacing: '-0.045em',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'static',
      zIndex: 0,
      display: 'block',
      marginBottom: '-34px',
      marginLeft: '4px',
      fontFamily: 'Inter',
      fontStyle: 'italic',
      fontWeight: 900,
      fontSize: '90px',
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      color: '#FFFFFF00',
      WebkitTextStroke: '1.4px var(--m-sage-600)',
      opacity: 0.5,
      overflow: 'visible'
    }
  }, "About ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'normal',
      fontVariantCaps: 'small-caps',
      letterSpacing: '.04em'
    }
  }, "Us")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'block',
      fontStyle: 'italic',
      fontFamily: "'Playfair Display', var(--font-serif)",
      fontSize: '140px',
      lineHeight: 0.82,
      color: '#8C9295',
      textShadow: '0 4px 14px rgba(168,129,135,.38)',
      opacity: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5D686D'
    }
  }, "Duchamp")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '-18px',
      marginLeft: '.28em',
      fontVariantCaps: 'small-caps',
      letterSpacing: '-0.01em',
      color: 'var(--m-sage-600)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#ACBA98'
    }
  }, "Journal")), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      marginTop: '-56px',
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontWeight: 800,
      fontSize: '88px',
      lineHeight: 1,
      letterSpacing: '.14em',
      paddingRight: '.14em',
      color: '#C399A0',
      textShadow: '0 3px 8px rgba(69,88,106,.28)'
    }
  }, "\u7B03\u8C61")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: wx ? 'column' : 'row',
      gap: '16px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      marginTop: '4px',
      writingMode: wx ? 'horizontal-tb' : 'vertical-rl',
      whiteSpace: wx ? 'nowrap' : 'normal',
      flex: wx ? '0 0 auto' : undefined,
      fontFamily: "'Italianno', cursive",
      fontSize: '24px',
      letterSpacing: '.02em',
      color: 'var(--m-sage-600)'
    }
  }, "Guangzhou", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      verticalAlign: 'middle',
      padding: '0 .15em'
    }
  }, "\xB7"), "New York"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 400,
      fontSize: 'var(--step-2)',
      lineHeight: 1.7,
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-700)'
    }
  }, "\u4E0D\u4EE5\u76EE\u76F8\u89C1\uFF0C", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      background: 'linear-gradient(180deg,transparent 60%,var(--m-rose-200) 60%,var(--m-rose-200) 96%,transparent 96%)'
    }
  }, "\u4EE5\u5FC3\u76F8\u77E5")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      lineHeight: 1.9,
      color: 'var(--ink-800)'
    }
  }, "\u4E00\u4EFD\u7531\u9AD8\u4E2D\u751F\u53D1\u8D77\u7684\u516C\u76CA\u79D1\u666E\u520A\u7269\u3002\u4E2D\u82F1\u53CC\u8BED\uFF0C\u6587\u5B57\u3001\u97F3\u9891\u3001\u76F2\u6587\u540C\u6B65\u51FA\u520A\u3002")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, ['公益科普', '中英双语', '盲文同步', '生物医学'].map((t, i) => {
    const on = hot === i;
    return /*#__PURE__*/React.createElement("span", {
      key: t,
      onMouseEnter: () => setHot(i),
      onMouseLeave: () => setHot(-1),
      style: {
        height: '86px',
        borderRadius: '16px',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        background: 'transparent',
        border: `0.5px solid ${on ? 'var(--ink-700)' : 'rgba(69,88,106,.28)'}`,
        boxShadow: on ? '0 2px 0 rgba(69,88,106,.28)' : '0 5px 0 rgba(69,88,106,.14)',
        transform: on ? 'translateY(3px)' : 'translateY(0)',
        transition: 'transform .12s ease-out, box-shadow .12s ease-out, border-color .2s, color .2s',
        fontFamily: 'var(--font-serif-sc)',
        fontWeight: 400,
        fontSize: 'var(--step-0)',
        letterSpacing: '.14em',
        textAlign: 'center',
        color: on ? 'var(--ink-900)' : 'var(--ink-500)'
      }
    }, t);
  })), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-7) 0 0',
      borderTop: '2px solid var(--m-rose-200)',
      borderBottom: '1px solid var(--m-rose-200)',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.9,
      color: 'var(--ink-800)'
    }
  }, "\u6211\u4EEC\u56DE\u7B54\u7684\u4E0D\u662F\u201C\u5B83", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rose,
      fontWeight: 700
    }
  }, "\u600E\u4E48\u8FD0\u4F5C"), "\u201D\uFF0C\u800C\u662F\u201C\u5B83", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rose,
      fontWeight: 700
    }
  }, "\u4E3A\u4EC0\u4E48\u91CD\u8981"), "\u201D\u3002"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '14px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "\u7F16\u8F91\u90E8\u5BA3\u8A00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `var(--space-7) ${pad} 0`
    }
  }, /*#__PURE__*/React.createElement(Head, {
    n: "1",
    en: "Who we are"
  }, "\u6211\u4EEC\u662F\u8C01"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7B03\u8C61\uFF08Duchamp Journal\uFF09\u662F\u4E00\u4E2A\u7531\u9AD8\u4E2D\u751F\u53D1\u8D77\u7684\u516C\u76CA\u79D1\u666E\u520A\u7269\u3002\u6211\u4EEC\u7528\u901A\u4FD7\u6613\u61C2\u7684\u65B9\u5F0F\u8BB2\u89E3\u751F\u7269\u4E0E\u751F\u7269\u533B\u5B66\u79D1\u5B66\u4E0E\u5DE5\u7A0B\uFF0C\u4EE5\u53CA\u5176\u4ED6\u8DE8\u5B66\u79D1\u524D\u6CBF\u521B\u65B0\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u6240\u6709\u5185\u5BB9\u5747\u4EE5\u4E2D\u82F1\u53CC\u8BED\u5236\u4F5C\uFF0C\u5E76\u540C\u6B65\u63A8\u51FA\u6587\u5B57\u7248\u3001\u97F3\u9891\u7248\u548C\u76F2\u6587\u7248"), "\uFF0C\u8BA9\u89C6\u969C\u7FA4\u4F53\u80FD\u591F\u76F4\u63A5\u53C2\u4E0E\u79D1\u6280\u8BDD\u9898\u7684\u8BA8\u8BBA\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4E8B\u540E\u6536\u5230\u4E00\u4EFD\u7FFB\u8BD1\u7248\u672C\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0 var(--space-4)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px'
    }
  }, [['广州', 'Guangzhou', '项目起点', '#D9A3AC'], ['纽约', 'New York', '第二节点', '#9DC29C']].map(([cn, en, role, c], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: cn
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      position: 'relative',
      height: '22px',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      borderTop: `1px dashed var(--m-sage-400)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      background: 'var(--paper)',
      padding: '0 6px',
      fontFamily: 'var(--font-label)',
      fontSize: '9px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "12,000 km")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: '26px',
      height: '26px',
      margin: '0 auto',
      borderRadius: '50% 50% 50% 0',
      transform: 'rotate(-45deg)',
      border: `2px solid ${c}`,
      position: 'relative',
      boxShadow: `0 0 10px ${c}, 0 0 22px ${c}66`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '7px',
      borderRadius: '50%',
      background: c,
      boxShadow: `0 0 8px ${c}`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      color: 'var(--ink-900)',
      lineHeight: 1.2
    }
  }, cn), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '0.9rem',
      color: 'var(--ink-500)'
    }
  }, en), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      color: 'var(--ink-400)'
    }
  }, role))))), /*#__PURE__*/React.createElement(Head, {
    n: "2",
    en: "Why we do this"
  }, "\u6211\u4EEC\u4E3A\u4EC0\u4E48\u505A\u8FD9\u4EF6\u4E8B"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u60F3\u6CD5\u6E90\u4E8E\u4E00\u573A\u516C\u5F00\u5206\u4EAB\u3002\u5206\u4EAB\u5609\u5BBE\u662F\u5E7F\u5DDE\u624B\u5FC3\u5496\u5561\u7684\u521B\u59CB\u4EBA\u3001\u89C6\u969C\u5496\u5561\u5E08", /*#__PURE__*/React.createElement("b", null, "\u6653\u6653"), "\u3002\u5979\u8BF4\u4E86\u4E00\u53E5\u8BDD\u2014\u2014"), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-6) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: '46px',
      height: '3px',
      background: 'var(--m-rose-400)',
      marginBottom: 'var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.75,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 700
    }
  }, "\u89C6\u969C\u670B\u53CB\u9700\u8981\u7684\u4E0D\u662F\u540C\u60C5\uFF0C"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.5em',
      color: 'var(--ink-500)'
    }
  }, "\u800C\u662F\u88AB\u771F\u6B63\u9080\u8BF7\u8FDB\u5165\u793E\u4F1A\u7684\u5BF9\u8BDD\u4E2D\u3002")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--1)',
      color: rose
    }
  }, "\u6653\u6653 \xB7 \u5E7F\u5DDE\u624B\u5FC3\u5496\u5561\u521B\u59CB\u4EBA")), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u53E5\u8BDD\u6253\u52A8\u4E86\u5F88\u591A\u540C\u5B66\uFF0C\u4E5F\u63A8\u52A8\u4E86\u8FD9\u4E2A\u9879\u76EE\u7684\u8BDE\u751F\u3002\u6211\u4EEC\u4E0D\u662F\u5C45\u9AD8\u4E34\u4E0B\u5730\u5728\u201C\u5E2E\u52A9\u201D\u89C6\u969C\u7FA4\u4F53\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u800C\u662F\u642D\u5EFA\u4E00\u4E2A\u5E73\u53F0\uFF0C\u8BA9\u5927\u5BB6\u80FD\u591F\u4E00\u8D77\u8BA8\u8BBA\u79D1\u6280\u548C\u672A\u6765"), "\u3002"), /*#__PURE__*/React.createElement(Head, {
    n: "3",
    en: "The name"
  }, "\u520A\u540D\u4ECE\u4F55\u800C\u6765"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `0 calc(-1 * ${pad})`,
      padding: `var(--space-7) ${pad}`,
      background: 'var(--m-sage-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      maxWidth: '260px',
      margin: '0 auto',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '150px',
      height: '150px',
      background: 'var(--m-rose-200)',
      opacity: .28
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '150px',
      height: '150px',
      border: `1px solid ${rose}`,
      opacity: .3
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "\u7B03\u8C61 Duchamp Journal \u6807\u5FD7",
    style: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px auto 0',
      maxWidth: '420px',
      textAlign: 'center',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u520A\u5934\u6807\u5FD7\uFF1A\u4E00\u5934\u7B80\u7B14\u52FE\u52D2\u7684\u5C0F\u8C61\uFF0C\u8C61\u8EAB\u4E4B\u4E0A\u662F\u300C\u7B03\u8C61\u300D\u4E8C\u5B57\uFF0C\u4E0B\u65B9\u4E00\u884C\u82F1\u6587\u520A\u540D Duchamp Journal\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.8,
      letterSpacing: '.02em',
      color: 'var(--ink-900)'
    }
  }, "\u201C\u7B03\u8C61\u201D\u81F4\u656C\u827A\u672F\u5BB6", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rose
    }
  }, "\u9A6C\u585E\u5C14\xB7\u675C\u5C1A"), "\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 2,
      color: 'var(--ink-700)'
    }
  }, "\u4ED6\u4E00\u751F\u6311\u6218\u201C\u827A\u672F\u8BE5\u662F\u4EC0\u4E48\u201D\u7684\u56FA\u6709\u89C2\u5FF5\uFF0C\u53CD\u5BF9\u53EA\u670D\u52A1\u4E8E\u773C\u775B\u7684\u201C\u89C6\u7F51\u819C\u827A\u672F\u201D\u2014\u2014\u90A3\u4E9B\u53EA\u6C42\u597D\u770B\u3001\u4E0D\u6C42\u601D\u8003\u7684\u4F5C\u54C1\u3002\u4ED6\u575A\u6301\uFF1A\u771F\u6B63\u7684\u521B\u9020\u5E94\u5F53", /*#__PURE__*/React.createElement(Emphasis, null, "\u6FC0\u53D1\u601D\u8003"), "\uFF0C\u800C\u975E\u4EC5\u4EC5\u53D6\u60A6\u89C6\u89C9\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      paddingTop: 'var(--space-4)',
      borderTop: `1px solid ${rose}`,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      lineHeight: 1.6,
      color: rose
    }
  }, "\u201C\u7B03\u201D\u662F\u7B03\u5B9A\u4E0E\u6DF1\u601D\uFF0C\u201C\u8C61\u201D\u662F\u88AB\u770B\u89C1\u7684\u8868\u8C61\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: 'var(--space-7) 0 0',
      padding: '18px 0 0',
      background: 'linear-gradient(180deg, var(--m-sage-100) 0%, var(--m-sage-200) 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '14px',
      top: 0,
      width: '118px',
      height: '118px',
      background: 'var(--m-rose-200)',
      opacity: .42
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '12px',
      top: '96px',
      width: '86px',
      height: '86px',
      border: `1px solid ${rose}`,
      opacity: .25
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/duchamp-portrait-v2.png",
    alt: "Marcel Duchamp with Bicycle Wheel",
    style: wx ? {
      display: 'block',
      width: '100%',
      maxWidth: '342px',
      height: 'auto',
      margin: '0 auto 12px'
    } : {
      float: 'right',
      width: '342px',
      height: '467px',
      marginLeft: '8px',
      shapeOutside: 'url(../../assets/duchamp-shape.png)',
      shapeImageThreshold: 0.5,
      shapeMargin: '10px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '0 0 0 14px',
      fontFamily: "'Italianno', 'Cormorant Garamond', var(--font-serif)",
      fontSize: '50px',
      lineHeight: 1.05,
      color: 'var(--ink-900)'
    }
  }, "Marcel Duchamp"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '2px 0 0 14px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '16px',
      letterSpacing: '.06em',
      color: rose
    }
  }, "1887.7.28 \u2013 1968.10.2"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '10px 14px 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '14px',
      lineHeight: 1.95,
      textWrap: 'pretty',
      color: 'var(--ink-700)'
    }
  }, "\u6CD5\u56FD\u88D4\u7F8E\u56FD\u827A\u672F\u5BB6\uFF0C\u751F\u4E8E\u6CD5\u56FD\u5E03\u5170\u7EF4\u5C14-\u514B\u96F7\u7FC1\uFF0C\u8FBE\u8FBE\u4E3B\u4E49\u4E0E\u6982\u5FF5\u827A\u672F\u7684\u5173\u952E\u4EBA\u7269\u3002\u4ED6\u4EE5\u201C\u73B0\u6210\u54C1\u201D\uFF08readymade\uFF09", /*#__PURE__*/React.createElement("br", null), "\u91CD\u65B0\u5B9A\u4E49\u4E86\u827A\u672F\u7684\u8FB9\u754C\u2014\u2014\u4F5C\u54C1\u7684\u610F\u4E49\u4E0D\u5728\u4E8E\u624B\u827A\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u800C\u5728\u4E8E\u9009\u62E9\u4E0E\u89C2\u5FF5\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0',
      padding: '10px 14px 14px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '17px',
      lineHeight: 1.65,
      color: 'var(--ink-600)'
    }
  }, "\u201CI have forced myself to contradict myself", /*#__PURE__*/React.createElement("br", null), "in order to avoid conforming to my own taste.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0',
      padding: '0 14px 14px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '14px',
      lineHeight: 1.9,
      letterSpacing: '.02em',
      color: 'var(--ink-500)'
    }
  }, "\u201C\u6211\u5E38\u8FEB\u4F7F\u81EA\u5DF1\u6096\u9006\u672C\u5FC3\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u53EA\u4E3A\u514D\u4E8E\u56F0\u5B88\u4E00\u5DF1\u4E4B\u597D\u3002\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '0',
      padding: '0 14px 14px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u4E00\u5F20\u9ED1\u767D\u8096\u50CF\u7167\uFF1A\u9A6C\u585E\u5C14\xB7\u675C\u5C1A\u8EAB\u7740\u897F\u88C5\uFF0C\u4FA7\u8EAB\u7AD9\u7ACB\uFF0C\u4E00\u53EA\u81EA\u884C\u8F66\u8F6E\u5012\u88C5\u5728\u6728\u51F3\u4E0A\u7ACB\u4E8E\u4ED6\u8EAB\u65C1\uFF1B\u4ED6\u795E\u60C5\u5E73\u9759\uFF0C\u76F4\u89C6\u955C\u5934\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      lineHeight: 1.8,
      color: 'var(--ink-400)'
    }
  }, "\u4ED6\u628A\u5C0F\u4FBF\u6C60\u642C\u8FDB\u5C55\u5385\uFF0C\u95EE\u7684\u4E0D\u662F\u201C\u7F8E\u4E0D\u7F8E\u201D\uFF0C\u800C\u662F\u201C\u4E3A\u4EC0\u4E48\u8FD9\u7B97\u827A\u672F\u201D\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `0 calc(-1 * ${pad}) var(--space-6)`,
      padding: `var(--space-7) ${pad} var(--space-7)`,
      background: 'linear-gradient(180deg, var(--m-sage-100) 0%, var(--m-rose-100) 46%, var(--m-rose-100) 100%)'
    }
  }, ['我们不发明新东西，', '而是把已有的科研成果', '用人的视角重新呈现——', '像杜尚把日常物品放进展厅，', '我们把前沿科技拉进日常对话。'].map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 10px',
      marginLeft: `${i * 10}px`,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      lineHeight: 1.9,
      color: 'var(--ink-800)'
    }
  }, l))), /*#__PURE__*/React.createElement(Head, {
    n: "4",
    en: "The elephant in the room"
  }, "\u520A\u6807\u7684\u6545\u4E8B"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u5927\u591A\u6570\u520A\u7269\u4ECE\u4E0D\u89E3\u91CA\u81EA\u5DF1\u7684\u6807\u8BC6\u3002\u5B83\u5F85\u5728\u89D2\u843D\uFF0C\u65E0\u987B\u5411\u8C01\u4EA4\u4EE3\u6765\u7531\u3002\u6211\u4EEC\u53CD\u5176\u9053\u800C\u884C\u2014\u2014\u628A\u653E\u5927\u955C\u5BF9\u51C6\u81EA\u5DF1\u7684\u6807\u5FD7\uFF0C\u56E0\u4E3A\u8FD9\u679A\u7B26\u53F7\u91CC\u85CF\u7740\u4E00\u5219\u5FAE\u7F29\u53D9\u4E8B\uFF0C\u9053\u5C3D\u8FD9\u672C\u520A\u7269\u8BDE\u751F\u7684\u521D\u8877\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u520A\u6807\u4E4B\u4E2D\uFF0C\u5171\u6816\u7740", /*#__PURE__*/React.createElement(Emphasis, null, "\u4E09\u5934\u5927\u8C61"), "\uFF1A\u5176\u4E00\u6307\u4EE3\u4E00\u4E2A\u7FA4\u4F53\uFF0C\u5176\u4E8C\u4EE3\u8868\u4E00\u79CD\u8BA4\u77E5\u65B9\u5F0F\uFF0C\u5176\u4E09\u8C61\u5F81\u4E00\u9053\u9E3F\u6C9F\u3002\u6211\u4EEC\u4F9D\u6B64\u6B21\u5E8F\u94FA\u9648\uFF0C\u56E0\u4E3A\u8BBA\u8FF0\u7684\u529B\u91CF\uFF0C\u6B63\u662F\u7531\u6B64\u5C42\u5C42\u62D3\u5C55\u5F00\u9614\u3002"), /*#__PURE__*/React.createElement(Triad, {
    cn: true,
    items: [['壹', '一个群体', '被看见，却不被对话。'], ['贰', '一种认知', '人人手握真实的碎片。'], ['叁', '一道鸿沟', '人与人之间的距离。']]
  }), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: `var(--space-6) calc(-1 * ${pad}) var(--space-6)`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elephant-room-color.png",
    alt: "\u4E00\u5934\u5927\u8C61\u7AD9\u5728\u6EE1\u662F\u4EBA\u7684\u623F\u95F4\u91CC\uFF0C\u4F17\u4EBA\u56F4\u684C\u800C\u5750\uFF0C\u65E0\u4EBA\u770B\u5B83",
    style: {
      display: 'block',
      width: '533px',
      height: '411px',
      maxWidth: '100%',
      margin: '0 auto',
      WebkitMaskImage: wx ? 'none' : 'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',
      maskImage: wx ? 'none' : 'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',
      ...cap(487)
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      margin: `0 ${pad}`,
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u4E00\u95F4\u5BA2\u5385\u91CC\uFF0C\u4E00\u5934\u7070\u8272\u5927\u8C61\u51E0\u4E4E\u9876\u5230\u5929\u82B1\u677F\uFF1B\u51E0\u4F4D\u7A7F\u897F\u88C5\u7684\u7537\u5973\u56F4\u5750\u684C\u8FB9\u4EA4\u8C08\u3001\u770B\u62A5\uFF0C\u6CA1\u6709\u4E00\u4E2A\u4EBA\u62AC\u5934\u770B\u5B83\u3002"), "\u201Cthe elephant in the room\u201D \u2014 \u623F\u95F4\u91CC\u7684\u5927\u8C61", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "\u5E9E\u5927\u3001\u662D\u7136\u82E5\u63ED\uFF0C\u5374\u65E0\u4EBA\u5F00\u53E3\u8C08\u53CA\u3002"))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...p,
      margin: '0 0 var(--space-5)'
    }
  }, "\u4E2D\u6587\u520A\u540D\u201C\u7B03\u8C61\u201D\u91CC\u7684", /*#__PURE__*/React.createElement(Emphasis, null, "\u201C\u8C61\u201D"), "\uFF0C\u65E2\u6307\u73B0\u8C61\u3001\u5F62\u8C61\uFF0C\u672C\u4E49\u4EA6\u4E3A\u5927\u8C61\u3002\u6240\u4EE5\u5927\u8C61\u51FA\u73B0\u5728\u520A\u6807\u91CC\uFF0C\u672C\u5C31\u6E90\u4E8E\u540D\u5B57\u672C\u8EAB\u3002\u4F46\u6211\u4EEC\u753B\u7684\u8FD9\u5934\u5927\u8C61\u4E0D\u53EA\u662F\u6C49\u5B57\u7684\u56FE\u89E3\u2014\u2014\u5B83\u80CC\u4E0A\u9A6E\u7740\u4E00\u53E5\u82F1\u6587\u4FD7\u8BED\uFF1A", /*#__PURE__*/React.createElement(Emphasis, null, "the elephant in the room\uFF0C\u623F\u95F4\u91CC\u7684\u5927\u8C61"), "\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u53E5\u4FD7\u8BED\u6307\u5411\u4E00\u79CD\u666E\u904D\u7684\u4EBA\u6027\u56F0\u5883\uFF1A\u4E00\u4EF6\u5E9E\u5927\u3001\u662D\u7136\u82E5\u63ED\u7684\u4E8B\u7269\uFF0C\u6240\u6709\u4EBA\u90FD\u770B\u5F97\u89C1\uFF0C\u5374\u65E0\u4EBA\u613F\u610F\u5F00\u53E3\u8C08\u53CA\u3002\u5B83\u8BF4\u7684\u662F\u56DE\u907F\u2014\u2014", /*#__PURE__*/React.createElement(Emphasis, null, "\u4E8B\u7269\u660E\u660E\u5728\u573A\uFF0C\u5374\u5F97\u4E0D\u5230\u6B63\u89C6\u4E0E\u56DE\u5E94"), "\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u503C\u5F97\u505C\u4E0B\u6765\u7EC6\u54C1\uFF1A\u591A\u6570\u4FD7\u8BED\u6307\u5411\u67D0\u6837\u5B9E\u7269\uFF0C\u552F\u72EC\u5B83\u6307\u5411\u4E00\u7247", /*#__PURE__*/React.createElement(Emphasis, null, "\u96C6\u4F53\u7684\u7F04\u9ED8"), "\u3002\u8FD9\u662F\u4FEE\u8F9E\u5B66\u4E2D\u540D\u4E3A\u201C\u6B32\u8A00\u53C8\u6B62\u201D\uFF08praeteritio\uFF09\u7684\u7B14\u6CD5\u2014\u2014\u6070\u6070\u501F\u201C\u6B64\u4E8B\u4E0D\u4FBF\u8A00\u8BF4\u201D\uFF0C\u5B8C\u6210\u5BF9\u4E8B\u7269\u7684\u63D0\u53CA\u3002\u5F53\u6709\u4EBA\u8BF4\u51FA\u201C\u623F\u95F4\u91CC\u6709\u4E00\u5934\u5927\u8C61\u201D\u7684\u5239\u90A3\uFF0C\u4FBF\u5DF2\u7ECF\u6253\u7834\u4E86\u8FD9\u53E5\u4FD7\u8BED\u6240\u63CF\u8FF0\u7684\u6F5C\u89C4\u5219\u3002\u6362\u8A00\u4E4B\uFF0C\u552F\u6709\u51B3\u610F\u6323\u8131\u7F04\u9ED8\u7684\u4EBA\uFF0C\u624D\u4F1A\u9053\u51FA\u8FD9\u53E5\u8BDD\u3002\u5B83\u672C\u662F\u5F62\u5BB9\u56DE\u907F\uFF0C\u5374\u5316\u4F5C\u7834\u9664\u56DE\u907F\u7684\u6B66\u5668\u3002\u800C\u8FD9\uFF0C\u6B63\u662F\u672C\u520A\u5E0C\u671B\u627F\u62C5\u7684\u4F7F\u547D\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u89C6\u969C\u7FA4\u4F53\uFF0C\u957F\u4E45\u4EE5\u6765\u4FBF\u662F\u8FD9\u6837\u4E00\u5934\u201C\u623F\u95F4\u91CC\u7684\u5927\u8C61\u201D\u3002\u4ED6\u4EEC\u771F\u5B9E\u5B58\u5728\uFF0C\u89E6\u76EE\u53EF\u89C1\uFF0C\u53EF\u4EBA\u4EEC\u603B\u5728\u8C08\u8BBA\u4ED6\u4EEC\uFF0C\u5374\u5F88\u5C11\u540C\u4ED6\u4EEC\u5BF9\u8BDD\u3002\u4ED6\u4EEC\u5E76\u672A\u8EB2\u85CF\uFF0C\u53EA\u662F\u5728\u793E\u4F1A\u8BED\u5883\u91CC\uFF0C\u6210\u4E86\u90A3\u4E2A\u4EBA\u4EBA\u770B\u89C1\u3001\u5374\u5C11\u6709\u4EBA\u76F4\u63A5\u4E0E\u4E4B\u4EA4\u8C08\u7684\u5B58\u5728\u3002"), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: 'var(--space-6) 0',
      display: 'flex',
      gap: '16px',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      writingMode: wx ? 'horizontal-tb' : 'vertical-rl',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: rose,
      borderRight: `1px solid ${rose}`,
      paddingRight: '10px'
    }
  }, "John Hull"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 1.95,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u7EA6\u7FF0\xB7\u8D6B\u5C14\u5931\u660E\u540E\uFF0C\u670B\u53CB\u4EEC\u628A\u4ED6\u62AC\u8FDB\u8F66\u91CC\uFF0C\u7528\u7B2C\u4E09\u4EBA\u79F0\u5546\u91CF\uFF1A", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      background: 'linear-gradient(180deg,transparent 62%,var(--m-rose-200) 62%,var(--m-rose-200) 96%,transparent 96%)'
    }
  }, "\u201C\u8BE5\u628A\u7EA6\u7FF0\u653E\u54EA\u513F\uFF1F\u201D"), "\u2014\u2014\u5374\u6CA1\u6709\u4EBA\u95EE\u4ED6\u672C\u4EBA\u3002"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '12px',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)'
    }
  }, "\u88AB\u770B\u89C1\uFF0C\u5374\u4E0D\u88AB\u5BF9\u8BDD\u3002\u8FD9\u5C31\u662F\u201C\u623F\u95F4\u91CC\u7684\u5927\u8C61\u201D\u843D\u5230\u4E00\u4E2A\u4EBA\u8EAB\u4E0A\u7684\u6A21\u6837\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      margin: `0 calc(-1 * ${pad}) var(--space-6)`,
      padding: `var(--space-7) ${pad}`,
      background: 'linear-gradient(180deg, var(--m-rose-100) 0%, var(--m-sage-100) 100%)'
    }
  }, ['我们把大象放在房间正中央，', '转过身面向它，', '请它开口说话。'].map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 10px',
      marginLeft: `${i * 14}px`,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: i === 2 ? 700 : 400,
      fontSize: 'var(--step-2)',
      lineHeight: 1.8,
      letterSpacing: '.02em',
      color: 'var(--ink-900)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: '0 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-1)',
      letterSpacing: '.08em',
      color: 'var(--ink-900)'
    }
  }, "\u76F2\u4EBA\u6478\u8C61"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-rose-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '15px',
      color: 'var(--ink-400)'
    }
  }, "a second elephant")), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u520A\u6807\u91CC\u8FD8\u85CF\u7740\u53E6\u4E00\u5934\u66F4\u53E4\u8001\u7684\u5927\u8C61\u3002\u5728\u4E2D\u56FD\u4E0E\u5357\u4E9A\u5171\u540C\u6D41\u4F20\u7684\u5BD3\u8A00\u91CC\uFF0C\u51E0\u4F4D\u76F2\u4EBA\u5404\u81EA\u89E6\u6478\u5927\u8C61\u7684\u4E00\u5904\uFF0C\u4FBF\u5404\u81EA\u65AD\u8A00\u5927\u8C61\u7684\u5168\u8C8C\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1px',
      background: 'var(--m-rose-200)',
      margin: '0 0 var(--space-5)'
    }
  }, [['象腿', '柱子'], ['耳朵', '蒲扇'], ['尾巴', '绳索']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      margin: '8px auto',
      width: '1px',
      height: '14px',
      background: rose
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u4E2A\u6545\u4E8B\u5386\u6765\u88AB\u7528\u6765\u5632\u8BBD\u76F2\u4EBA\uFF1A\u62FF\u5C40\u90E8\u5F53\u6574\u4F53\uFF0C\u660E\u773C\u4EBA\u4E00\u773C\u4FBF\u80FD\u770B\u6E05\u5168\u8C8C\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u800C\u6211\u4EEC\u8BFB\u51FA\u5168\u7136\u4E0D\u540C\u7684\u6DF1\u610F\u3002")), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      float: 'left',
      width: '56%',
      margin: '6px 16px 10px 0',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-8px',
      top: '-8px',
      width: '70px',
      height: '70px',
      background: 'var(--m-rose-200)',
      opacity: .34,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/blind-men-elephant.png",
    alt: "\u51E0\u4F4D\u76F2\u4EBA\u5404\u81EA\u4F38\u624B\u89E6\u6478\u4E00\u5934\u5927\u8C61\u7684\u4E0D\u540C\u90E8\u4F4D",
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'auto',
      ...cap(500)
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u4E00\u5934\u5927\u8C61\u7AD9\u5728\u4E2D\u592E\uFF0C\u516D\u4F4D\u76F2\u4EBA\u5206\u522B\u4F38\u624B\u89E6\u6478\u5B83\u7684\u9F3B\u5B50\u3001\u8C61\u7259\u3001\u8033\u6735\u3001\u817F\u3001\u8EAB\u4FA7\u4E0E\u5C3E\u5DF4\uFF0C\u5404\u81EA\u6BD4\u5212\u7740\u81EA\u5DF1\u6478\u5230\u7684\u5F62\u72B6\u3002"), "\u76F2\u4EBA\u6478\u8C61 \u2014 \u4F17\u76F2\u6478\u8C61", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "\u6BCF\u4E00\u53CC\u624B\u90FD\u89E6\u5230\u771F\u5B9E\uFF0C\u53EA\u662F\u6CA1\u4EBA\u80AF\u628A\u788E\u7247\u62FC\u8D77\u6765\u3002"))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u9519\u7684\u4ECE\u6765\u4E0D\u662F\u76F2\u4EBA\u3002\u4ED6\u4EEC\u6070\u6070\u5728\u5B8C\u6210\u4E00\u4EF6\u4E86\u4E0D\u8D77\u7684\u4E8B\u2014\u2014\u5168\u7136\u4F9D\u9760\u89E6\u6478\u53BB\u8BA4\u77E5\u4E00\u5934\u5927\u8C61\uFF0C\u800C\u6BCF\u4E00\u4E2A\u4EBA\u89E6\u5230\u7684\u788E\u7247\u90FD\u771F\u5B9E\u786E\u51FF\uFF1A\u8C61\u817F\u786E\u5B9E\u5982\u67F1\u3002\u5BD3\u8A00\u771F\u6B63\u7684\u7F3A\u61BE\u4E0D\u5728\u5931\u660E\uFF0C\u800C\u5728\u4E8E", /*#__PURE__*/React.createElement(Emphasis, null, "\u4EBA\u4EEC\u4E0D\u613F\u628A\u788E\u7247\u62FC\u6210\u5B8C\u6574\u7684\u771F\u76F8"), "\uFF0C\u5728\u4E8E\u90A3\u4EFD\u50B2\u6162\uFF1A\u4EE5\u4E3A\u4EC5\u51ED\u53CC\u773C\uFF0C\u5C31\u8DB3\u4EE5\u7AA5\u89C1\u5168\u90E8\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6B63\u5982\u6C88\u51B0\u5C71\u53CC\u76EE\u5931\u660E\uFF0C\u4F9D\u9760\u89E6\u6478\u5728\u7A7A\u767D\u753B\u5E03\u4E0A\u6784\u5EFA\u6784\u56FE\uFF1B\u6B63\u5982\u7EA6\u7FF0\xB7\u8D6B\u5C14\u501F\u4E00\u573A\u96E8\u6C34\uFF0C\u91CD\u65B0\u6355\u6349\u4E16\u754C\u7684\u8F6E\u5ED3\u3002\u5BF9\u4E00\u672C\u9762\u5411\u89C6\u969C\u7FA4\u4F53\u7684\u53CC\u8BED\u520A\u7269\u800C\u8A00\uFF0C\u628A\u4E00\u5219\u5632\u5F04\u76F2\u4EBA\u7684\u5178\u6545\uFF0C\u91CD\u65B0\u8BFB\u6210", /*#__PURE__*/React.createElement(Emphasis, null, "\u201C\u77E5\u8BC6\u5982\u4F55\u88AB\u5EFA\u7ACB\u201D\u7684\u610F\u8C61"), "\uFF0C\u662F\u520A\u6807\u60F3\u8BF4\u7684\u6700\u91CD\u8981\u7684\u4E00\u53E5\u8BDD\u3002"), /*#__PURE__*/React.createElement(SubCn, {
    t: "\u7B2C\u4E09\u5934\u5927\u8C61\uFF1A\u6A2A\u4E98\u7684\u7ED3\u6784\u6027\u9E3F\u6C9F",
    en: "the divide itself"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u520A\u6807\u5C1A\u6709\u7B2C\u4E09\u91CD\u6DF1\u610F\uFF0C\u4E5F\u6B63\u662F\u8FD9\u5C42\u89E3\u8BFB\uFF0C\u8BA9\u520A\u6807\u4E0D\u518D\u53EA\u662F\u520A\u7269\u7684\u81EA\u6211\u72EC\u767D\uFF0C\u800C\u6210\u4E3A\u5BF9\u6211\u4EEC\u6240\u5904\u65F6\u4EE3\u7684\u53E9\u95EE\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7B2C\u4E00\u5934\u5927\u8C61\uFF0C\u662F\u88AB\u770B\u89C1\u5374\u4E0D\u88AB\u5BF9\u8BDD\u7684\u7FA4\u4F53\uFF1B\u7B2C\u4E8C\u5934\u5927\u8C61\uFF0C\u662F\u591A\u5143\u7684\u8BA4\u77E5\u65B9\u5F0F\u2014\u2014\u6BCF\u4E00\u4E2A\u4EBA\u624B\u4E2D\u90FD\u63E1\u7740\u4E00\u4EFD\u771F\u5B9E\uFF1B", /*#__PURE__*/React.createElement(Emphasis, null, "\u7B2C\u4E09\u5934\u5927\u8C61\uFF0C\u662F\u4E00\u79CD\u7ED3\u6784\u6027\u73B0\u5B9E"), "\uFF1A\u5B83\u4E0D\u5C5E\u4E8E\u623F\u95F4\u91CC\u7684\u67D0\u4E00\u4E2A\u4EBA\uFF0C\u800C\u662F\u4EBA\u4E0E\u4EBA\u4E4B\u95F4\u90A3\u9053\u9065\u9694\u7684\u8DDD\u79BB\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...p,
      margin: '0 0 var(--space-6)',
      padding: 'var(--space-5)',
      background: 'var(--m-sage-100)',
      fontSize: 'var(--step-1)',
      lineHeight: 1.9
    }
  }, "\u6211\u4EEC\u7684\u6838\u5FC3\u8BBA\u70B9\u5982\u6B64\uFF1A\u5F53\u4E0B\u65F6\u4EE3\uFF0C\u623F\u95F4\u91CC\u90A3\u5934\u6700\u5E9E\u5927\u3001\u65E0\u4EBA\u76F4\u9762\u7684\u73B0\u5B9E\uFF0C\u6B63\u662F\u7B2C\u56DB\u6B21\u5DE5\u4E1A\u9769\u547D\u50AC\u751F\u7684", /*#__PURE__*/React.createElement(Emphasis, null, "\u6280\u672F\u9E3F\u6C9F"), "\u2014\u2014\u66F4\u5177\u4F53\u5730\u8BF4\uFF0C\u51E0\u4E4E\u6CA1\u6709\u4E00\u4E2A\u89D2\u8272\uFF0C\u4E13\u95E8\u53BB\u5411\u5373\u5C06\u627F\u53D7\u8FD9\u573A\u53D8\u9769\u7684\u666E\u901A\u4EBA\uFF0C\u9610\u91CA\u8FD9\u4E00\u5207\u7A76\u7ADF\u610F\u5473\u7740\u4EC0\u4E48\u3002"), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      float: 'left',
      width: '72%',
      margin: '6px 14px 10px 0',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elephant-press-color.png",
    alt: "\u8BB0\u8005\u56F4\u7740\u4E00\u5934\u6324\u6EE1\u623F\u95F4\u7684\u5927\u8C61\u91C7\u8BBF\uFF0C\u5374\u65E0\u4EBA\u63D0\u53CA\u5927\u8C61\u672C\u8EAB",
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u4E00\u5934\u5927\u8C61\u628A\u6574\u95F4\u5C4B\u5B50\u585E\u6EE1\uFF0C\u6444\u5F71\u5E08\u4E0E\u4E3E\u7740\u8BDD\u7B52\u7684\u8BB0\u8005\u5374\u5168\u90FD\u56F4\u7740\u65C1\u8FB9\u7684\u53D7\u8BBF\u8005\uFF0C\u955C\u5934\u59CB\u7EC8\u80CC\u5BF9\u5927\u8C61\u3002"), "Tiedemann \u2014 \u8BB0\u8005\u4E0E\u5927\u8C61", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "\u955C\u5934\u5BF9\u7740\u4EBA\uFF0C\u4ECE\u4E0D\u8F6C\u5411\u90A3\u5934\u586B\u6EE1\u623F\u95F4\u7684\u5927\u8C61\u3002"))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u770B\u4E00\u770B\u884C\u4E1A\u6CE8\u610F\u529B\u7684\u6D41\u5411\uFF1A\u65E0\u6570\u5B9E\u9A8C\u5BA4\u94BB\u7814\u9762\u5411\u4EBA\u5DE5\u667A\u80FD\u672C\u8EAB\u3001\u9762\u5411\u7269\u7406\u9886\u57DF\u7684 AI\uFF1B\u5927\u91CF\u8BBA\u6587\u63A2\u7A76\u601D\u7EF4\u94FE\u4E0E\u9690\u5F0F\u63A8\u7406\uFF0C\u62C6\u89E3\u6A21\u578B\u5728\u63D0\u95EE\u4E0E\u4F5C\u7B54\u4E4B\u95F4\u53D1\u751F\u7684\u4E00\u5207\uFF1B\u5DE5\u4F5C\u6D41\u7A0B\u3001\u8BC4\u6D4B\u57FA\u51C6\u3001\u6A21\u578B\u67B6\u6784\u88AB\u53CD\u590D\u6253\u78E8\u8FED\u4EE3\u3002\u8FD9\u4E9B\u90FD\u662F\u624E\u5B9E\u53EF\u8D35\u7684\u7814\u7A76\uFF0C\u4E0D\u4E4F\u5149\u5F69\u6590\u7136\u7684\u6210\u679C\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u53EF\u8FD8\u6709\u4E00\u4E2A\u975E\u6280\u672F\u7684\u95EE\u9898\uFF0C\u51E0\u4E4E\u65E0\u4EBA\u6DF1\u8015\uFF1A\u4E00\u9879\u6280\u672F\u7A81\u7834\uFF0C\u5BF9\u4E8E\u4EBA\u7684\u4EF7\u503C\u7A76\u7ADF\u4F55\u5728\uFF1F\u9664\u4E86\u63D0\u5347\u6548\u7387\u4EA7\u51FA\uFF0C\u5B83\u5C06\u5982\u4F55\u91CD\u5851\u4E00\u4E2A\u4EBA\u5BF9\u81EA\u6211\u80FD\u52A8\u6027\u7684\u611F\u77E5\uFF1F\u8FD8\u6709\uFF0C\u8BE5\u5982\u4F55\u628A\u8FD9\u4E00\u5207\u4EA4\u4ED8\u7ED9\u5E76\u975E\u5DE5\u7A0B\u5E08\u3001\u79D1\u5B66\u5BB6\u7684\u666E\u901A\u5927\u4F17\u2014\u2014\u800C\u4E0D\u662F\u5C45\u9AD8\u4E34\u4E0B\u5730\u5411\u4E0B\u704C\u8F93\uFF1F"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u5176\u4E2D\u7684\u8352\u8BDE\u611F\u6070\u5982\u5176\u5206\uFF1A\u8FD9\u4E9B\u95EE\u9898\u5E76\u4E0D\u9690\u6666\uFF0C\u672C\u5C31\u662F\u884C\u4E1A\u6700\u663E\u800C\u6613\u89C1\u7684\u8FFD\u95EE\u3002\u53EA\u662F\u65E0\u4EBA\u613F\u610F\u63A5\u624B\u2014\u2014\u5B83\u96BE\u4EE5\u4EA7\u51FA\u8BBA\u6587\uFF0C\u6CA1\u6709\u8BC4\u6D4B\u6307\u6807\uFF0C\u4E5F\u65E0\u6CD5\u5E26\u6765\u5B9E\u9645\u6536\u76CA\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u4E00\u4E2A\u95EE\u9898\u54EA\u6015\u6E05\u6E05\u695A\u695A\u6446\u5728\u773C\u524D\uFF0C\u4F9D\u65E7\u53EF\u4EE5\u6210\u4E3A\u201C\u623F\u95F4\u91CC\u7684\u5927\u8C61\u201D"), "\u3002\u8FD9\u53E5\u4FD7\u8BED\u7684\u672C\u610F\uFF0C\u4ECE\u6765\u65E0\u5173\u201C\u662F\u5426\u770B\u5F97\u89C1\u201D\u3002"), /*#__PURE__*/React.createElement(SubCn, {
    t: "\u6CA6\u4E3A\u88C5\u9970\u7684\u53E3\u53F7",
    en: "a dead metaphor"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u201CAI for All\uFF08\u666E\u60E0\u4EBA\u5DE5\u667A\u80FD\uFF09\u201D\uFF0C\u662F\u884C\u4E1A\u666E\u904D\u6302\u5728\u5634\u8FB9\u7684\u53E3\u53F7\u3002\u53EF\u73B0\u5B9E\u662F\uFF0C\u5B83\u8FD1\u4E4E\u6CA6\u4E3A\u4E00\u4E2A\u5FC3\u7167\u4E0D\u5BA3\u7684\u4F2A\u547D\u9898\u3002\u5E76\u975E\u6709\u4EBA\u53CD\u5BF9\u666E\u60E0\u7684\u7406\u60F3\uFF0C\u800C\u662F\u5B83\u66F4\u591A\u670D\u52A1\u4E8E\u8425\u9500\u5BA3\u4F20\uFF0C\u800C\u975E\u6280\u672F\u8BBE\u8BA1\u7684\u5E95\u5C42\u51C6\u5219\u3002"), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      clear: 'both',
      float: 'right',
      width: '54%',
      margin: '6px 14px 10px 0',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elephant-blindfold-color.png",
    alt: "\u5BA2\u5385\u91CC\u4E00\u5934\u5DE8\u8C61\uFF0C\u8499\u7740\u773C\u7F69\u7684\u5973\u5B50\u5750\u5728\u4E00\u65C1\u5145\u8033\u4E0D\u95FB",
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u5BA2\u5385\u91CC\u4E00\u5934\u5E9E\u5927\u7684\u8C61\u7ACB\u5728\u6C99\u53D1\u65C1\uFF0C\u4E00\u4F4D\u5973\u5B50\u8499\u7740\u773C\u7F69\u7AEF\u5750\u4E00\u8FB9\uFF0C\u53CC\u624B\u4EA4\u53E0\uFF0C\u4EFF\u4F5B\u8EAB\u8FB9\u4EC0\u4E48\u4E5F\u6CA1\u6709\u3002"), "Frank Harris \u2014 The Elephant in the Room", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "\u81EA\u5DF1\u8499\u4E0A\u773C\u775B\uFF0C\u5E76\u4E0D\u80FD\u8BA9\u5927\u8C61\u6D88\u5931\u3002"))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6587\u5B66\u4E2D\u6709\u4E00\u4E2A\u6982\u5FF5\u53EB\u4F5C", /*#__PURE__*/React.createElement(Emphasis, null, "\u6B7B\u55BB"), "\uFF1A\u6BD4\u55BB\u88AB\u53CD\u590D\u6EE5\u7528\uFF0C\u5F7B\u5E95\u5931\u53BB\u539F\u672C\u7684\u753B\u9762\u611F\u2014\u2014\u8BFB\u5230\u201C\u5C71\u811A\u201D\u4E8C\u5B57\uFF0C\u6CA1\u6709\u4EBA\u518D\u4F1A\u8054\u60F3\u5230\u4EBA\u7684\u811A\u638C\u3002\u201CAI for All\u201D\u4FBF\u662F\u4F26\u7406\u5C42\u9762\u7684\u6B7B\u55BB\uFF1A\u8FD9\u53E5\u8BDD\u4E0D\u518D\u7528\u6765\u63CF\u6479\u73B0\u5B9E\uFF0C\u800C\u662F\u66FF\u8A00\u8BF4\u8005\u5378\u4E0B\u63A8\u52A8\u73B0\u5B9E\u6539\u53D8\u7684\u8D23\u4EFB\u3002\u5B83\u4ECE\u4E00\u79CD\u7406\u60F3\u4E3B\u5F20\uFF0C\u892A\u8272\u6210\u534E\u4E3D\u7684\u88C5\u9970\u3002\u7528\u672C\u520A\u53CD\u590D\u63A2\u8BA8\u7684\u8BF4\u6CD5\uFF0C\u5B83\u5F7B\u5E95\u201C\u89C6\u7F51\u819C\u5316\u201D\u4E86\u2014\u2014\u5F92\u7559\u60A6\u76EE\u7684\u8868\u5C42\uFF0C\u4F9B\u4EBA\u8D5E\u53F9\uFF0C\u62D2\u7EDD\u6DF1\u5EA6\u601D\u7D22\u3002\u675C\u5C1A\u82E5\u89C1\u5230\uFF0C\u5B9A\u7136\u4E00\u773C\u770B\u7A7F\u3002"), /*#__PURE__*/React.createElement(SubCn, {
    t: "\u8C61\u7259\u5854\u4E4B\u5185\uFF0C\u672C\u65E0\u5927\u8C61",
    en: "no room, no elephant"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u201C\u623F\u95F4\u91CC\u7684\u5927\u8C61\u201D\uFF0C\u79BB\u4E0D\u5F00\u201C\u623F\u95F4\u201D\u8FD9\u4E2A\u8F7D\u4F53\u3002\u4E0D\u662F\u5385\u5802\uFF0C\u4E0D\u662F\u9AD8\u53F0\uFF0C\u800C\u662F\u4E00\u5904\u5C01\u95ED\u5171\u5904\u7684\u7A7A\u95F4\uFF0C\u91CC\u9762\u7684\u4EBA\u5F7C\u6B64\u80FD\u591F\u76F8\u671B\u3002\u6B63\u56E0\u4E3A\u62E5\u6709\u8FD9\u7247\u5171\u540C\u7684\u573A\u57DF\uFF0C\u5927\u8C61\u7684\u9690\u55BB\u624D\u5F97\u4EE5\u6210\u7ACB\uFF1B\u5018\u82E5\u62BD\u6389\u5171\u5904\u7684\u7A7A\u95F4\uFF0C\u6574\u4E2A\u610F\u8C61\u4FBF\u8F70\u7136\u6D88\u89E3\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'var(--m-rose-200)',
      margin: '0 0 var(--space-5)'
    }
  }, [['房间', '人人相望，共处一室，于是大象成为大象。'], ['象牙塔', '高耸孤立，拾级而上，塔内没有“我们”，只有俯瞰与距离。']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.85,
      color: 'var(--ink-600)'
    }
  }, v)))), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      clear: 'both',
      float: 'right',
      width: '44%',
      margin: '6px 0 10px 16px',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ivory-tower-books.png",
    alt: "\u4E00\u5EA7\u7531\u4E66\u7C4D\u5806\u53E0\u800C\u6210\u7684\u9AD8\u5854\uFF0C\u5B66\u8005\u4EEC\u4ECE\u4E66\u7F1D\u95F4\u63A2\u51FA\u5934\uFF0C\u5854\u4E0B\u4E00\u4EBA\u4EF0\u5934\u5F20\u671B",
    style: {
      position: 'relative',
      display: 'block',
      width: '457px',
      height: '597px',
      maxWidth: '100%',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u4E00\u5EA7\u7531\u539A\u4E66\u5C42\u5C42\u5806\u53E0\u6210\u7684\u9AD8\u5854\uFF0C\u5B66\u8005\u4EEC\u4ECE\u4E66\u9875\u7684\u7F1D\u9699\u95F4\u63A2\u51FA\u5934\u5F80\u5916\u5F20\u671B\uFF1B\u5854\u5E95\u7AD9\u7740\u4E00\u4E2A\u4EF0\u5934\u770B\u5411\u4ED6\u4EEC\u7684\u4EBA\u3002"), "Frits Ahlefeldt \u2014 \u201CWe study nature\u2026 YOU go save it!\u201D", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "\u4E00\u5EA7\u7531\u4E66\u5806\u6210\u7684\u5854\uFF1A\u5854\u5185\u6709\u4EBA\uFF0C\u5854\u4E0B\u6709\u4EBA\uFF0C\u5374\u6CA1\u6709\u4E00\u95F4\u5171\u5904\u7684\u623F\u95F4\u3002"))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6240\u4EE5\u201C\u8EAB\u5904\u8C61\u7259\u5854\u53D1\u8A00\u201D\u4E0E\u201C\u56DE\u907F\u623F\u95F4\u91CC\u7684\u5927\u8C61\u201D\uFF0C\u5E76\u975E\u4E24\u79CD\u72EC\u7ACB\u7684\u8FC7\u5931\uFF0C\u800C\u662F\u540C\u4E00\u95EE\u9898\u7684\u4E24\u9762\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u4EBA\u4E00\u65E6\u79BB\u5F00\u90A3\u95F4\u5171\u540C\u7684\u623F\u95F4\uFF0C\u4FBF\u518D\u4E5F\u65E0\u4ECE\u8FA8\u8BA4\u623F\u95F4\u4E4B\u5185\u7684\u4E8B\u7269\u3002")), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7531\u6B64\u53EF\u89C1\uFF0C\u9610\u91CA\u79D1\u666E\u7EDD\u975E\u6B21\u4E8E\u79D1\u7814\u7684\u6B21\u8981\u5DE5\u4F5C\u2014\u2014\u201C\u79D1\u666E\u201D\u8FD9\u4E2A\u8BCD\uFF0C\u751A\u81F3\u77EE\u5316\u4E86\u8FD9\u4EFD\u4E8B\u4E1A\u3002\u628A\u79D1\u7814\u6210\u679C\u8F6C\u8BD1\u4E3A\u5927\u4F17\u80FD\u591F\u7406\u89E3\u7684\u8BED\u8A00\uFF0C\u4E0D\u662F\u7A00\u91CA\u6D88\u89E3\u77E5\u8BC6\uFF0C\u800C\u662F", /*#__PURE__*/React.createElement(Emphasis, null, "\u91CD\u65B0\u56DE\u5230\u90A3\u95F4\u5171\u540C\u7684\u623F\u95F4"), "\u3002"), /*#__PURE__*/React.createElement(SubCn, {
    t: "\u6781\u5177\u8BBD\u523A\u7684\u73B0\u5B9E",
    en: "chain-of-thought"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FC7\u53BB\u6570\u5E74\uFF0C\u6211\u4EEC\u4E0D\u65AD\u8BAD\u7EC3\u673A\u5668\u201C\u5C55\u793A\u601D\u8003\u8FC7\u7A0B\u201D\u3002\u892A\u53BB\u6280\u672F\u5916\u58F3\uFF0C\u601D\u7EF4\u94FE\u672C\u8D28\u4E0A\u662F\u4E00\u79CD\u53D9\u4E8B\u624B\u6BB5\uFF1A\u6307\u4EE4\u6A21\u578B\u4E0D\u8981\u76F4\u63A5\u629B\u51FA\u7B54\u6848\uFF0C\u800C\u662F\u8FD8\u539F\u63A8\u5BFC\u7684\u5168\u8FC7\u7A0B\u3002\u6211\u4EEC\u4E4B\u6240\u4EE5\u9700\u8981\u5B83\uFF0C\u662F\u56E0\u4E3A\u4E00\u4EFD\u6CA1\u6709\u89E3\u91CA\u7684\u7B54\u6848\uFF0C\u65E0\u8BBA\u591A\u4E48\u6B63\u786E\uFF0C\u90FD\u51E0\u4E4E\u6BEB\u65E0\u4EF7\u503C\u3002"), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: '0 0 var(--space-6)',
      padding: 'var(--space-5) 0',
      borderTop: `2px solid ${rose}`,
      borderBottom: `1px solid ${rose}`
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.85,
      color: 'var(--ink-900)'
    }
  }, "\u6211\u4EEC\u5F3A\u6C42\u6A21\u578B\u5177\u5907\u53EF\u89E3\u91CA\u6027\uFF0C", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.2em',
      color: 'var(--ink-500)'
    }
  }, "\u5374\u628A\u7814\u7A76\u8005\u7684\u901A\u4FD7\u8868\u8FBE\u89C6\u4F5C\u53EF\u6709\u53EF\u65E0\u3002"))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u5E74\u590D\u4E00\u5E74\uFF0C\u6211\u4EEC\u6108\u53D1\u8BFB\u61C2 AI \u9ED1\u7BB1\uFF1B\u53EF\u7AD9\u5728\u9ED1\u7BB1\u4E4B\u524D\u7684\u666E\u901A\u4EBA\u2014\u2014\u4ED6\u4EEC\u7684\u6E34\u6C42\u3001\u6050\u60E7\uFF0C\u4EE5\u53CA\u771F\u6B63\u62FF\u5230\u8FD9\u9879\u6280\u672F\u4E4B\u540E\u7684\u5904\u5883\u2014\u2014\u5374\u8D8A\u6765\u8D8A\u5C11\u88AB\u770B\u89C1\u3002\u8FD9\u4EFD\u9519\u4F4D\u5012\u7F6E\uFF0C\u4FBF\u662F", /*#__PURE__*/React.createElement(Emphasis, null, "\u7B2C\u4E09\u5934\u5927\u8C61"), "\uFF0C\u4E5F\u662F\u6574\u95F4\u623F\u95F4\u91CC\u6700\u4E3A\u5E9E\u5927\u7684\u5B58\u5728\u3002"), /*#__PURE__*/React.createElement(SubCn, {
    t: "\u91CD\u5199\u5BD3\u8A00\u7684\u89D2\u8272",
    en: "the parable, recast"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u628A\u7B2C\u4E09\u5934\u5927\u8C61\u653E\u56DE\u201C\u76F2\u4EBA\u6478\u8C61\u201D\uFF0C\u6545\u4E8B\u7684\u89D2\u8272\u5168\u7136\u6539\u5199\u3002\u76F2\u4EBA\u4E0D\u518D\u662F\u88AB\u6392\u6324\u7684\u5F31\u8005\u2014\u2014", /*#__PURE__*/React.createElement(Emphasis, null, "\u76F2\u4EBA\u6B63\u662F\u6211\u4EEC"), "\uFF1A\u5B9E\u9A8C\u5BA4\u3001\u8BBA\u6587\u3001\u7814\u53D1\u6D41\u7A0B\u3002\u6709\u4EBA\u638C\u63E1\u53EF\u89E3\u91CA\u6027\uFF0C\u6709\u4EBA\u94BB\u7814\u89C4\u6A21\u5316\uFF0C\u6709\u4EBA\u4E13\u6CE8\u5BF9\u9F50\u3001\u90E8\u7F72\u3001\u653F\u7B56\u3002\u6BCF\u4E00\u4EFD\u62A5\u544A\u90FD\u5BA2\u89C2\u51C6\u786E\uFF0C\u8C61\u817F\u786E\u5B9E\u5982\u540C\u6881\u67F1\u3002\u4F46\u4F9D\u65E7\u6CA1\u6709\u4EBA\u5B8C\u6574\u63CF\u7ED8\u51FA\u5927\u8C61\uFF0C\u56E0\u4E3A\u63CF\u6479\u5168\u8C8C\u672C\u4E0D\u5C5E\u4E8E\u6280\u672F\u96BE\u9898\uFF0C\u4E5F\u4ECE\u672A\u5206\u914D\u7ED9\u4EFB\u4F55\u4EBA\u53BB\u5B8C\u6210\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: '0 0 var(--space-5)'
    }
  }, [['可解释性', '象腿'], ['规模化', '耳朵'], ['对齐与部署', '尾巴']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step--1)',
      color: 'var(--ink-900)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      margin: '8px auto',
      width: '1px',
      height: '14px',
      background: rose
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      color: 'var(--ink-500)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u5BD3\u8A00\u7684\u8B66\u793A\u4E5F\u968F\u4E4B\u66F4\u65B0\u3002\u5B83\u544A\u8BEB\u7684\u50B2\u6162\uFF0C\u4E0D\u518D\u662F\u201C\u4EE5\u4E3A\u89C6\u89C9\u8DB3\u4EE5\u7AA5\u89C1\u5168\u90E8\u201D\uFF0C\u800C\u662F", /*#__PURE__*/React.createElement(Emphasis, null, "\u8FF7\u4FE1\u6280\u672F\u80FD\u529B"), "\uFF1A\u61C2\u5F97\u7CFB\u7EDF\u5982\u4F55\u8FD0\u8F6C\uFF0C\u4FBF\u81EA\u4EE5\u4E3A\u61C2\u5F97\u5B83\u5168\u90E8\u7684\u4EBA\u6587\u610F\u4E49\u3002\u8FD9\u5219\u53E4\u8001\u5BD3\u8A00\uFF0C\u4E00\u76F4\u5728\u8BB2\u8FF0\u5173\u4E8E\u6211\u4EEC\u7684\u7B11\u8BDD\uFF0C\u53EA\u662F\u9700\u8981\u6362\u4E00\u4E2A\u65F6\u4EE3\u8BED\u5883\u624D\u542C\u5F97\u61C2\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD8\u6709\u4E00\u5C42\u6E29\u67D4\u7684\u63D0\u9192\uFF1A\u5728\u5BD3\u8A00\u7684\u6240\u6709\u7248\u672C\u91CC\uFF0C\u5927\u8C61\u59CB\u7EC8\u65E0\u6CD5\u5F00\u53E3\u3002\u5B83\u88AB\u89E6\u6478\u3001\u88AB\u4E89\u8FA9\u3001\u88AB\u63CF\u8FF0\uFF0C\u5374\u4ECE\u672A\u6709\u673A\u4F1A\u8BC9\u8BF4\u81EA\u6211\u3002\u524D\u4E24\u5934\u5927\u8C61\uFF0C\u4E0E\u7B2C\u4E09\u5934\u5171\u4EAB\u8FD9\u4EFD\u5931\u8BED\u3002\u800C\u521B\u529E\u8FD9\u672C\u520A\u7269\uFF0C\u5168\u90E8\u7684\u7528\u610F\uFF0C\u5C31\u662F", /*#__PURE__*/React.createElement(Emphasis, null, "\u7ED9\u4E88\u5927\u8C61\u53D1\u8A00\u7684\u673A\u4F1A"), "\u3002"), /*#__PURE__*/React.createElement(SubCn, {
    t: "\u5BF9\u672C\u520A\u81EA\u8EAB\u7684\u671F\u8BB8",
    en: "what this asks of us"
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u5957\u601D\u8003\u540C\u6837\u62AC\u9AD8\u4E86\u672C\u520A\u5185\u5BB9\u7684\u6807\u5C3A\uFF0C\u6211\u4EEC\u4E0D\u613F\u8BA9\u5B83\u53EA\u7559\u4F5C\u6F02\u4EAE\u7684\u7A7A\u8BDD\uFF0C\u5728\u6B64\u5766\u8BDA\u7533\u660E\uFF1A\u4E00\u7BC7\u6587\u7AE0\uFF0C\u4EC5\u4EC5\u51C6\u786E\u590D\u8FF0\u6280\u672F\u673A\u7406\uFF0C\u4E0D\u7B97\u5B8C\u6210\u4F7F\u547D\uFF1B\u552F\u6709\u5F53\u4E00\u4F4D\u4ECE\u672A\u53C2\u4E0E\u7CFB\u7EDF\u5F00\u53D1\u7684\u8BFB\u8005\uFF0C\u80FD\u591F\u8BF4\u51FA\u201C\u62E5\u6709\u8FD9\u9879\u6280\u672F\u610F\u5473\u7740\u4EC0\u4E48\u3001\u88AB\u5B83\u62D2\u4E4B\u95E8\u5916\u53C8\u610F\u5473\u7740\u4EC0\u4E48\u201D\uFF0C\u6587\u7AE0\u624D\u7B97\u771F\u6B63\u5B8C\u6210\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...p,
      margin: '0 0 var(--space-6)'
    }
  }, "\u520A\u7269\u7684\u65E0\u969C\u788D\u8BBE\u8BA1\u2014\u2014\u53CC\u8BED\u6392\u7248\u3001\u97F3\u9891\u4F18\u5148\u3001\u652F\u6301\u76F2\u6587\u8F6C\u5199\u2014\u2014\u7EDD\u975E\u9644\u52A0\u7684\u6148\u5584\u70B9\u7F00\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u800C\u662F\u68C0\u9A8C\u5185\u5BB9\u7684\u8BD5\u91D1\u77F3"), "\u3002\u5018\u82E5\u6211\u4EEC\u80FD\u591F\u628A AI \u773C\u5E95\u7B5B\u67E5\u7684\u79D1\u7814\u7ED3\u679C\uFF0C\u7528\u4E24\u79CD\u8BED\u8A00\u8BB2\u7ED9\u770B\u4E0D\u89C1\u56FE\u8868\u7684\u8BFB\u8005\uFF0C\u5E76\u4E14\u653E\u4E0B\u5C45\u9AD8\u4E34\u4E0B\u7684\u59FF\u6001\uFF0C\u90A3\u4E48\u884C\u4E1A\u53E3\u4E2D\u90A3\u4E2A\u770B\u4F3C\u7B80\u5355\u7684\u96BE\u9898\uFF0C\u6211\u4EEC\u4FBF\u653B\u514B\u4E86\u5B83\u6700\u96BE\u7684\u7248\u672C\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: 'var(--space-7) 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-1)',
      letterSpacing: '.08em',
      color: 'var(--ink-900)'
    }
  }, "\u62C6\u89E3\u6BCF\u4E00\u5904\u7B26\u53F7"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-sage-200)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: '0 0 var(--space-6)'
    }
  }, [['glass', '放大镜', '表层含义是凑近细看。但请注意这份刻意保留的反讽：放大镜本是为目视而生的明眼人工具，却叠加在一头象征“不靠眼睛去认知”的大象之上。它发问：所谓“看得更近”，是否只能靠双眼？同时它也是杜尚的审视——不赞美表象，而向表象提问。结合第三头大象，它又生出第四重含义：放大镜令细小晦涩之物被普通人读懂，而这，正是行业长久缺位的那份工作，被具象成一枚图形。'], ['rings', '同心圆', '它是荡漾的涟漪：声音向外扩散——对一本以听觉为先的刊物再贴切不过，知识如水波漫开，而非光线直射。它也是靶心：专注、留心，对应“笃”那份恳切体察。它更本就是眼睛的模样，虹膜与瞳孔，对应创刊号的主题，也映照读者各不相同的生命经验。涟漪涌向四方，抵达每一个身处水中的人；光束却需要瞄准定向。知识应当如何传播，两种意象之间的取舍，几乎就是本文全部的立场。'], ['dot', '蓝色圆点', '黑白之中唯一一抹色彩。它是句末的句号——毕竟我们是一本文字刊物；也是视线不自觉落上去的焦点。还有一层更温柔的寓意：晓晓店里几位咖啡师能感知光亮，却分辨不出色彩。黑暗中那一点残存的光。'], ['face', '眨眼的面庞', '仔细看，大象的脸全由标点构成：一点是一只眼睛，小于号是另一只，正轻轻眨眼。一张由符号搭建的面孔无声地说：意义不止诞生于图像，也可以由符号与语言构筑——杜尚的核心思想，藏进了标点里。眨眼，也是最微小的一种对话姿态：它需要有被注视的对象，也需要彼此心领神会——恰恰是疏离第三人称的反面。']].map(([m, k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4)',
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 34px',
      height: '34px',
      display: 'grid',
      placeItems: 'center'
    }
  }, m === 'glass' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      border: `1.5px solid ${rose}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '-7px',
      bottom: '-6px',
      width: '11px',
      height: '1.5px',
      background: rose,
      transform: 'rotate(45deg)'
    }
  })), m === 'rings' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      border: '1px solid var(--m-sage-400)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      border: '1px solid var(--m-sage-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'var(--ink-700)'
    }
  }))), m === 'dot' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: '#1F4E86'
    }
  }), m === 'face' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--ink-900)'
    }
  }), "<")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.9,
      color: 'var(--ink-600)'
    }
  }, v))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: `2px solid ${rose}`,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 700,
      fontSize: 'var(--step-2)',
      lineHeight: 1.85,
      letterSpacing: '.02em',
      color: 'var(--ink-900)'
    }
  }, "\u6211\u4EEC\uFF0C\u4FBF\u662F\u90A3\u5934\u201C\u623F\u95F4\u91CC\u7684\u5927\u8C61\u201D\u2014\u2014\u88AB\u770B\u89C1\uFF0C\u5374\u4E0D\u88AB\u5BF9\u8BDD\u3002\u8FD9\u4E2A\u65F6\u4EE3\u80FD\u591F\u521B\u9020\u7684\u6280\u672F\uFF0C\u4E0E\u5B83\u613F\u610F\u5411\u5927\u4F17\u89E3\u91CA\u7684\u771F\u76F8\uFF0C\u4E8C\u8005\u4E4B\u95F4\u7684\u9E3F\u6C9F\uFF0C\u540C\u6837\u662F\u90A3\u5934\u5927\u8C61\u3002\u8FD9\u672C\u520A\u7269\u8F6C\u8FC7\u8EAB\u9762\u5411\u5B83\u4EEC\uFF0C\u8BF7\u5B83\u4EEC\u53D1\u58F0\u3002"), /*#__PURE__*/React.createElement(Head, {
    n: "5",
    en: "What we do"
  }, "\u6211\u4EEC\u505A\u4EC0\u4E48"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6BCF\u671F\u5185\u5BB9\u56F4\u7ED5\u4E00\u4E2A\u4E3B\u9898\u5C55\u5F00\uFF0C\u76EE\u524D\u805A\u7126\u4E09\u4E2A\u65B9\u5411\uFF1A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: '0 0 var(--space-6)'
    }
  }, [['生物信息学', 'AlphaFold 预测蛋白质结构、mRNA 疫苗的数字化设计'], ['基因组学', '消费级基因检测、药物个体差异、新生儿筛查'], ['AI 医学', 'AI 读片、语音疾病筛查、AI 问诊的边界']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) var(--space-4)',
      display: 'flex',
      gap: '14px',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 5.5em',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)',
      fontWeight: 700
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.8,
      color: 'var(--ink-600)'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u5448\u73B0\u5F62\u5F0F\u4E0D\u9650\u4E8E\u6587\u5B57\uFF0C\u800C\u662F\u4E00\u5957\u5B8C\u6574\u7684", /*#__PURE__*/React.createElement(Emphasis, null, "\u591A\u611F\u5B98\u4F53\u9A8C"), "\uFF1A"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: '6px'
    }
  }, ['文字版', '音频版', '盲文版', '互动卡片', '提问箱'].map((k, i) => {
    const on = fmt === i;
    const a = .20 - i * .04;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: () => setFmt(i),
      onMouseEnter: () => setFmt(i),
      "aria-pressed": on,
      style: {
        cursor: 'pointer',
        padding: '16px 2px',
        background: `rgba(168,129,135,${a})`,
        border: `0.5px solid ${on ? rose : 'rgba(168,129,135,.42)'}`,
        transition: 'border-color .2s, color .2s',
        fontFamily: 'var(--font-serif-sc)',
        fontSize: 'var(--step--2)',
        lineHeight: 1.4,
        letterSpacing: '.04em',
        color: on ? 'var(--ink-900)' : 'var(--ink-600)'
      }
    }, k);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      background: 'var(--paper)',
      borderBottom: `1px solid ${rose}`,
      display: 'flex',
      gap: '12px',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: rose,
      flex: '0 0 auto'
    }
  }, `0${fmt + 1}`), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.85,
      color: 'var(--ink-700)'
    }
  }, ['中英双语同期成稿，不是事后翻译。', '朗读 + 访谈，适合听读。', '与文字版同期，让读者亲手阅读。', '每期配一套触觉卡片。', '收集反馈，让对话是双向的。'][fmt]))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6211\u4EEC\u76F8\u4FE1\uFF0C\u79D1\u5B66\u7684\u9B45\u529B\u4E0D\u53EA\u5728\u4E8E\u201C\u77E5\u9053\u201D\uFF0C\u66F4\u5728\u4E8E", /*#__PURE__*/React.createElement(Emphasis, null, "\u201C\u53C2\u4E0E\u201D\u548C\u201C\u5BF9\u8BDD\u201D"), "\u3002"), /*#__PURE__*/React.createElement(Head, {
    n: "6",
    en: "Meet Our Founders"
  }, "\u521B\u59CB\u4EBA"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7B03\u8C61\u7531\u4E24\u4F4D\u9AD8\u4E2D\u751F\u521B\u529E\uFF0C\u5206\u522B\u9A7B\u5E7F\u5DDE\u4E0E\u7EBD\u7EA6\u3002\u4E2A\u4EBA\u4E3B\u9875\u6B63\u5728\u7B79\u5907\u4E2D\uFF0C\u5C06\u9646\u7EED\u4E0A\u7EBF\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'var(--m-rose-200)',
      margin: '0 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Founder, {
    name: "Cathy",
    cn: "\u521B\u59CB\u4EBA",
    role: "\u4E3B\u7F16",
    place: "Guangzhou \u5E7F\u5DDE",
    note: "\u8D1F\u8D23\u9009\u9898\u3001\u4E2D\u6587\u5199\u4F5C\u4E0E\u89C6\u969C\u793E\u7FA4\u5408\u4F5C\u3002"
  }), /*#__PURE__*/React.createElement(Founder, {
    name: "Rose",
    cn: "\u521B\u59CB\u4EBA",
    role: "\u4E3B\u7F16",
    place: "New York \u7EBD\u7EA6",
    note: "\u8D1F\u8D23\u82F1\u6587\u7F16\u8BD1\u3001\u97F3\u9891\u4E0E\u76F2\u6587\u7248\u5236\u4F5C\u3002"
  })), /*#__PURE__*/React.createElement(ConversationBox, {
    label: "\u52A0\u5165\u6211\u4EEC",
    font: "var(--font-serif-sc)",
    questions: ['想投稿、翻译、录音或校对盲文版？', '所在的学校或机构希望共办一场分享？'],
    note: "\u7559\u8A00\u6216\u6765\u4FE1 \u2014\u2014 \u6211\u4EEC\u9010\u6761\u9605\u8BFB\uFF0C\u6B22\u8FCE\u4EFB\u4F55\u5F62\u5F0F\u7684\u540C\u884C\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `var(--space-8) calc(-1 * ${pad}) 0`,
      padding: `var(--space-7) ${pad} var(--space-8)`,
      background: 'var(--m-rose-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 'var(--rule-accent)',
      margin: `0 calc(-1 * ${pad}) var(--space-6)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-rose-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 2,
      background: 'var(--m-sage-200)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-rose-200)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      margin: 0
    }
  }, "English edition"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-rose-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step--1) + 2px)',
      color: 'var(--ink-400)'
    }
  }, "About")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'calc(var(--step-3) + 2px)',
      color: 'var(--ink-900)',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: '38px'
    }
  }, "Duchamp Journal"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.4em',
      fontVariantCaps: 'small-caps',
      letterSpacing: '.06em',
      fontWeight: 700,
      fontSize: '38px'
    }
  }, "Project Introduction"))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      fontStyle: 'italic',
      fontSize: 'calc(var(--step-1) + 2px)',
      lineHeight: 1.7,
      color: 'var(--ink-800)',
      borderTop: '2px solid var(--m-rose-400)',
      borderBottom: '1px solid var(--m-rose-400)',
      padding: 'var(--space-5) 0',
      margin: '0 0 var(--space-6)'
    }
  }, "We don't ask how the technology works \u2014 we ask ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rose,
      fontWeight: 700
    }
  }, "why it matters"), "."), /*#__PURE__*/React.createElement(HeadEn, {
    n: "1"
  }, "Who we are"), /*#__PURE__*/React.createElement(LedeEn, null, "Duchamp Journal (\u7B03\u8C61) is a student-led publication that explains biological and biomedical science and engineering, as well as other interdisciplinary innovations, through a human lens. ", /*#__PURE__*/React.createElement(Emphasis, null, "Content is produced in English and Chinese and delivered in written, audio, and Braille formats"), " \u2014 so that individuals with visual disabilities can participate directly, not just receive a translated version afterward."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0 var(--space-7)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/globe-glow-v8.png",
    alt: "",
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: '377px',
      height: '372px',
      margin: '0 auto',
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '14px',
      padding: '0 6px'
    }
  }, [['Guangzhou', '广州', 'first node · UTC+8', '#D9A3AC'], ['New York', '纽约', 'second node · UTC−4', '#9DC29C']].map(([en, cn, meta, c], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: en
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      marginTop: '22px',
      height: '1px',
      background: 'linear-gradient(90deg, rgba(141,150,128,.45), rgba(194,169,140,.85), rgba(141,150,128,.45))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: i === 0 ? 'left' : 'right',
      display: 'grid',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: i === 0 ? 'flex-start' : 'flex-end',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: c,
      order: i === 0 ? 0 : 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Italianno', cursive",
      fontSize: '40px',
      lineHeight: .95,
      color: 'var(--m-sage-600)'
    }
  }, en)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '13px',
      letterSpacing: '.22em',
      color: 'var(--ink-700)'
    }
  }, cn), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontVariantCaps: 'small-caps',
      fontSize: '14px',
      letterSpacing: '.14em',
      color: 'var(--ink-400)'
    }
  }, meta))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '16px',
      letterSpacing: '.04em',
      color: '#7B8892'
    }
  }, "Two desks, twelve hours apart \u2014 one issue")), /*#__PURE__*/React.createElement(HeadEn, {
    n: "2"
  }, "Why we do this"), /*#__PURE__*/React.createElement(LedeEn, null, "The idea came from a public talk by Xiao Xiao, a visually impaired barista and founder of Heart Coffee in Guangzhou."), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: 'var(--space-6) 0',
      display: 'flex',
      gap: '18px',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'flex-start',
      writingMode: wx ? 'horizontal-tb' : 'vertical-rl',
      transform: wx ? 'none' : 'rotate(180deg)',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: rose,
      borderRight: '1px solid var(--m-rose-400)',
      paddingRight: '10px'
    }
  }, "Xiao Xiao \xB7 Heart Coffee"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'calc(var(--step-2) + 2px)',
      lineHeight: 1.5,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic'
    }
  }, "Not sympathy,"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      background: 'linear-gradient(180deg,transparent 62%,var(--m-rose-200) 62%,var(--m-rose-200) 96%,transparent 96%)'
    }
  }, "but a genuine invitation")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '14px',
      fontSize: 'calc(var(--step--1) + 2px)',
      lineHeight: 1.7,
      color: 'var(--ink-500)'
    }
  }, "into society's conversations."))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0',
      paddingLeft: 'var(--space-5)',
      borderLeft: `2px solid ${rose}`,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step-0) + 2px)',
      lineHeight: 1.7,
      color: 'var(--ink-800)'
    }
  }, "Every format ships on the same day \u2014 nobody waits for the translation."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "Duchamp was not born out of charity or pity \u2014 it was born out of a belief that knowledge should be a shared public resource, not an exclusive privilege. We don't see ourselves as helping the visually impaired from above; ", /*#__PURE__*/React.createElement(Emphasis, null, "we see ourselves as building a table where everyone is welcome to sit down and talk about the future"), "."), /*#__PURE__*/React.createElement(HeadEn, {
    n: "3"
  }, "The name"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `0 calc(-1 * ${pad}) var(--space-6)`,
      padding: `var(--space-7) ${pad}`,
      background: 'var(--m-sage-100)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      maxWidth: '260px',
      margin: '0 auto',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '150px',
      height: '150px',
      background: 'var(--m-rose-200)',
      opacity: .28
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '150px',
      height: '150px',
      border: `1px solid ${rose}`,
      opacity: .3
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-lockup.png",
    alt: "Duchamp Journal \u7B03\u8C61 wordmark and elephant mark",
    style: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px auto 0',
      maxWidth: '420px',
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "The masthead mark: a small elephant drawn in a single line, the two characters \u7B03\u8C61 set above it and the English name Duchamp Journal on the line below."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      paddingTop: 'var(--space-4)',
      borderTop: `1px solid ${rose}`,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step-0) + 2px)',
      lineHeight: 1.7,
      color: rose
    }
  }, "\u7B03 is earnest, deep, sincere; \u8C61 is the surface that is seen.")), /*#__PURE__*/React.createElement(LedeEn, null, "The name pays tribute to Marcel Duchamp, who rejected \"retinal art\" \u2014 art that serves only the eye \u2014 and insisted that true creation should engage the mind, not merely please the gaze. He introduced the readymade: ordinary objects presented as art simply because he chose to place them in a gallery."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 'var(--space-5) 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step-0) + 2px)',
      color: rose
    }
  }, "Object \u2192 gallery \u2192 question."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: 'var(--space-6) 0 0',
      padding: '18px 0 0',
      background: 'linear-gradient(180deg, var(--m-sage-100) 0%, var(--m-sage-200) 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '14px',
      top: 0,
      width: '118px',
      height: '118px',
      background: 'var(--m-rose-200)',
      opacity: .42
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '12px',
      top: '96px',
      width: '86px',
      height: '86px',
      border: `1px solid ${rose}`,
      opacity: .15
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/duchamp-portrait-v2.png",
    alt: "Marcel Duchamp with Bicycle Wheel",
    style: wx ? {
      display: 'block',
      width: '100%',
      maxWidth: '342px',
      height: 'auto',
      margin: '0 auto 12px'
    } : {
      float: 'right',
      width: '342px',
      height: '467px',
      marginLeft: '8px',
      shapeOutside: 'url(../../assets/duchamp-shape.png)',
      shapeImageThreshold: 0.5,
      shapeMargin: '10px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '0 0 0 14px',
      fontFamily: "'Italianno', 'Cormorant Garamond', var(--font-serif)",
      fontSize: '50px',
      lineHeight: 1.05,
      color: 'var(--ink-900)'
    }
  }, "Marcel Duchamp"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '2px 0 0 14px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '18px',
      letterSpacing: '.06em',
      color: rose
    }
  }, "1887.7.28 \u2013 1968.10.2"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '10px 14px 0',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontSize: '15px',
      lineHeight: 1.85,
      textWrap: 'pretty',
      color: 'var(--ink-700)'
    }
  }, "French-American artist, born in Blainville-Crevon;", /*#__PURE__*/React.createElement("br", null), "a central figure of Dada and conceptual art.", /*#__PURE__*/React.createElement("br", null), "With the readymade he redrew the border of art \u2014", /*#__PURE__*/React.createElement("br", null), "meaning lies not in craft, but in choice and idea."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0',
      padding: '10px 14px 14px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '17px',
      lineHeight: 1.65,
      color: 'var(--ink-600)'
    }
  }, "\u201CI have forced myself to contradict myself", /*#__PURE__*/React.createElement("br", null), "in order to avoid conforming to my own taste.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '0',
      padding: '0 14px 14px',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "A black-and-white portrait: Marcel Duchamp in a suit stands in profile beside a bicycle wheel mounted upside down on a wooden stool, looking calmly at the camera.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontSize: '14px',
      lineHeight: 1.8,
      color: 'var(--ink-400)'
    }
  }, "He put a urinal in a gallery and asked not whether it was beautiful, but why it counted as art."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0',
      paddingLeft: 'var(--space-5)',
      borderLeft: '1px solid var(--m-sage-400)'
    }
  }, ['We apply the same logic to science communication.', 'We don\u2019t invent new things;', 'we take existing research and re-present it through a human lens,', /*#__PURE__*/React.createElement(React.Fragment, null, "asking not how it works, but ", /*#__PURE__*/React.createElement("b", null, "why it matters."))].map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-serif)',
      fontStyle: i % 2 ? 'italic' : 'normal',
      fontSize: 'calc(var(--step-0) + 2px)',
      lineHeight: 1.75,
      color: 'var(--ink-700)'
    }
  }, l))), /*#__PURE__*/React.createElement(HeadEn, {
    n: "4"
  }, "The Elephant in the Room"), /*#__PURE__*/React.createElement(LedeEn, null, "A logo is usually the one part of a publication nobody explains. It sits in the corner and is never asked to account for itself. We want to do the opposite \u2014 to turn our own magnifier on our own mark, because the story inside it is, in miniature, the story of why this journal exists."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "There are ", /*#__PURE__*/React.createElement(Emphasis, null, "three elephants"), " in our logo. One is a person, one is a way of knowing, and one is a gap. This essay takes them in that order, because that is the order in which the argument gets larger."), /*#__PURE__*/React.createElement(Triad, {
    items: [['i', 'A person', 'seen, but not spoken to'], ['ii', 'An epistemology', 'each hand holds something true'], ['iii', 'A structure', 'the distance between us']]
  }), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: `var(--space-6) calc(-1 * ${pad}) var(--space-6)`,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elephant-room-color.png",
    alt: "An elephant standing in a crowded room while the people around the table pay it no attention",
    style: {
      display: 'block',
      width: '533px',
      height: '411px',
      maxWidth: '100%',
      margin: '0 auto',
      WebkitMaskImage: wx ? 'none' : 'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',
      maskImage: wx ? 'none' : 'radial-gradient(120% 105% at 50% 50%, #000 58%, transparent 96%)',
      ...cap(487)
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      margin: `0 ${pad}`,
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "A grey elephant fills a sitting room almost to the ceiling; several people in suits sit around a table talking and reading, and not one of them looks up at it."), "\u201Cthe elephant in the room\u201D \u2014 \u623F\u95F4\u91CC\u7684\u5927\u8C61", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "Enormous, unmissable, and never spoken about."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "Our name in Chinese, \u7B03\u8C61, contains the character \u8C61 \u2014 which means both ", /*#__PURE__*/React.createElement(Emphasis, null, "phenomenon / image"), " and, on its own, ", /*#__PURE__*/React.createElement(Emphasis, null, "elephant"), ". So an elephant belongs in our logo by right of the name itself. But the elephant we chose to draw is doing more than illustrating a character: it is carrying an English idiom on its back \u2014 the elephant in the room."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "The idiom names a very specific human failure \u2014 the enormous, obvious thing that everyone in the room can see and nobody is willing to talk about. It is worth pausing on how strange a phrase it is. Most idioms name a thing; ", /*#__PURE__*/React.createElement(Emphasis, null, "this one names a silence"), ". Its grammar is a kind of rhetorical sleight of hand, the figure classical rhetoric calls ", /*#__PURE__*/React.createElement("em", null, "praeteritio"), ": mentioning something precisely by announcing that it is not being mentioned."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "To say \u201Cthere is an elephant in the room\u201D is already to break the rule the phrase describes \u2014 which means the idiom can only ever be used by someone who has decided to stop obeying it. It is a phrase about avoidance that functions as an instrument against avoidance. That is exactly the tool this journal was built to be."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "Because there is a community that has long been an elephant in the room \u2014 present, visible, unmissable, and yet spoken about rather than spoken to. People with visual disabilities are not hidden. They are, socially, the thing in the room that everyone can see and few address directly."), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: 'var(--space-6) 0',
      display: 'flex',
      gap: '18px',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      flex: '0 0 auto',
      writingMode: wx ? 'horizontal-tb' : 'vertical-rl',
      transform: wx ? 'none' : 'rotate(180deg)',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: rose,
      borderRight: `1px solid ${rose}`,
      paddingRight: '10px'
    }
  }, "John Hull"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'calc(var(--step-0) + 2px)',
      lineHeight: 1.7,
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Blind, being loaded into a car while his friends discussed him in the third person \u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      background: 'linear-gradient(180deg,transparent 62%,var(--m-rose-200) 62%,var(--m-rose-200) 96%,transparent 96%)'
    }
  }, "\u201Cwhere do we put John?\u201D"), " \u2014 until he objected that John might simply be asked."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '12px',
      fontSize: 'calc(var(--step--1) + 2px)',
      fontStyle: 'italic',
      color: 'var(--ink-500)'
    }
  }, "Seen, but not spoken to."))), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      margin: `0 calc(-1 * ${pad}) var(--space-6)`,
      padding: `var(--space-7) ${pad}`,
      background: 'linear-gradient(180deg, var(--m-rose-100) 0%, var(--m-sage-100) 100%)'
    }
  }, ['We put the elephant at the center of the room,', 'we turn to face it,', 'and we ask it to speak.'].map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 8px',
      marginLeft: `${i * 14}px`,
      fontFamily: 'var(--font-serif)',
      fontStyle: i === 1 ? 'italic' : 'normal',
      fontWeight: i === 2 ? 700 : 400,
      fontSize: 'calc(var(--step-1) + 2px)',
      lineHeight: 1.6,
      color: 'var(--ink-900)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: '0 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'calc(var(--step-1) + 2px)',
      color: 'var(--ink-900)'
    }
  }, "The blind men and the elephant"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-sage-400)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "There is a second elephant hiding in ours, and it is older and deeper. In an ancient parable told across both Chinese and South Asian traditions \u2014 in Chinese, \u76F2\u4EBA\u6478\u8C61, \u201Cblind men feeling the elephant\u201D \u2014 several blind men each touch one part of an elephant, and each declares the whole to be something different."), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: '0 0 var(--space-4)'
    }
  }, [['the leg', 'a pillar'], ['the ear', 'a fan'], ['the tail', 'a rope']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '14px',
      color: 'var(--ink-400)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      margin: '8px auto',
      width: '1px',
      height: '14px',
      background: rose
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: 'calc(var(--step-0) + 2px)',
      color: 'var(--ink-900)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "The story is almost always told against them: look at these fools, each mistaking a part for the whole, none able to see what any sighted person would grasp at a glance. ", /*#__PURE__*/React.createElement(Emphasis, null, "We read it the other way.")), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      float: 'left',
      width: '56%',
      margin: '6px 16px 10px 0',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-8px',
      top: '-8px',
      width: '70px',
      height: '70px',
      background: 'var(--m-rose-200)',
      opacity: .34,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/blind-men-elephant.png",
    alt: "Blind men each reaching out to touch a different part of an elephant",
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'auto',
      ...cap(500)
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "An elephant stands at the centre while six blind men each reach out to a different part \u2014 trunk, tusk, ear, leg, flank, tail \u2014 describing the shape they feel."), "The blind men and the elephant", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "Every hand holds something true; nobody assembles the pieces."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "The blind men are not the failures of the story. They are doing something extraordinary: knowing an elephant entirely by touch, each holding a piece that is genuinely, exactly true. A leg ", /*#__PURE__*/React.createElement("em", null, "is"), " like a pillar. The failure in the parable is not blindness \u2014 the failure is ", /*#__PURE__*/React.createElement(Emphasis, null, "refusing to put the pieces together"), ", and the arrogance of assuming that sight alone would have delivered the whole."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "This is precisely what the painter Shen Bingshan did when he mapped a canvas he could not see by touch, and what John Hull did when he let rain give him back the shape of the world. For a bilingual journal serving a visually impaired community, reclaiming \u76F2\u4EBA\u6478\u8C61 \u2014 turning a punchline about blind people into an image of how knowledge is actually built \u2014 is the most important sentence our logo can say."), /*#__PURE__*/React.createElement(SubEn, null, "The third elephant: the divide itself"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "There is a third reading, and it is the one that turns the logo from a statement about us into a statement about the moment we are living in."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "The first elephant is a person \u2014 the community that is seen but not spoken to. The second is an epistemology \u2014 the blind men, each holding something true. ", /*#__PURE__*/React.createElement(Emphasis, null, "The third is a structure."), " The third elephant is not anybody in the room. It is the distance between the people in it."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: '0 0 var(--space-5)',
      padding: 'var(--space-5)',
      background: 'var(--paper)',
      fontSize: 'calc(var(--step-0) + 1px)',
      lineHeight: 1.85
    }
  }, "The claim is this: the largest unspoken thing in the room right now is the ", /*#__PURE__*/React.createElement(Emphasis, null, "technological divide"), " of the fourth industrial revolution \u2014 and, specifically, the near-total absence of anyone whose job it is to explain what any of it means to the people it is going to happen to."), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      float: 'left',
      width: '72%',
      margin: '6px 14px 10px 0',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elephant-press-color.png",
    alt: "A news crew interviews a man beside an elephant filling the room, never mentioning the elephant",
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "An elephant fills the whole room while a camera crew and reporters crowd around the man beside it, microphones and lens turned away from the animal."), "Tiedemann \u2014 the press and the elephant", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "The camera faces the people, never the animal filling the room."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "Consider where the attention goes. There are labs devoted to AI for AI and AI for physics. There are papers on chain-of-thought reasoning and latent reasoning, on what happens inside a model between the question and the answer. There are endless refinements of workflow, benchmark, and architecture. This is real work, and some of it is beautiful."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "What barely exists is the other question \u2014 the non-technical one. What is the human value of a breakthrough? What does it change about a person\u2019s sense of their own agency, rather than their throughput? And how does any of it reach someone who is not an engineer or a scientist \u2014 without being explained down to them from a great height?"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "The absurdity \u2014 and absurdity is the right word \u2014 is that none of this is hidden. It is the most obvious question in the field. It is simply the one nobody wants to hold, because it publishes nowhere, benchmarks against nothing, and pays badly. ", /*#__PURE__*/React.createElement(Emphasis, null, "A problem can be perfectly visible and still be an elephant."), " Visibility was never what the idiom was about."), /*#__PURE__*/React.createElement(SubEn, null, "When a phrase stops describing anything"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "\u201CAI for All\u201D is the slogan the field has agreed to say. The harder point is that it has become something close to an acknowledged fallacy \u2014 not because anyone opposes it, but because the thing it actually aligns with is not a design principle. It aligns with a marketing campaign."), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      clear: 'both',
      float: 'right',
      width: '54%',
      margin: '6px 14px 10px 0',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/elephant-blindfold-color.png",
    alt: "A painting of an elephant in a living room beside a blindfolded woman ignoring it",
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "In a living room a huge elephant stands beside the sofa; a woman sits nearby wearing a blindfold, hands folded, as if nothing were there."), "Frank Harris \u2014 The Elephant in the Room", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "Blindfolding yourself does not make the elephant leave."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "There is a literary term for what has happened to it. A ", /*#__PURE__*/React.createElement(Emphasis, null, "dead metaphor"), " is a figure of speech used so often that it stops producing an image at all \u2014 nobody sees a foot when they read \u201Cthe foot of the mountain.\u201D \u201CAI for All\u201D is a dead metaphor of the ethical kind: a phrase whose function is no longer to describe the world but to relieve the speaker of the obligation to change it. It has drifted from claim to decoration. It has become, in a word this journal has already spent some time on, ", /*#__PURE__*/React.createElement("em", null, "retinal"), " \u2014 a beautiful surface that asks to be admired and not thought about. Duchamp would have recognised it instantly."), /*#__PURE__*/React.createElement(SubEn, null, "Why a tower cannot have an elephant in it"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Notice that the idiom requires a room. Not a hall, not a stage \u2014 a room, an enclosure with a small number of people in it who can all see each other. The elephant is only an elephant because of that shared enclosure. Take away the shared space and the figure collapses."), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: 'var(--space-5) 0'
    }
  }, [['The room', 'Everyone can see each other; that is what makes the elephant an elephant.'], ['The ivory tower', 'Vertical, single-occupancy, reached by a stair. No elephant, because there is no we.']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'calc(var(--step-0) + 1px)',
      color: 'var(--ink-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-serif)',
      fontSize: 'calc(var(--step--1) + 2px)',
      lineHeight: 1.8,
      color: 'var(--ink-600)'
    }
  }, v)))), /*#__PURE__*/React.createElement("figure", {
    style: noFloat({
      clear: 'both',
      float: 'right',
      width: '44%',
      margin: '6px 0 10px 16px',
      position: 'relative'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ivory-tower-books.png",
    alt: "A tower of stacked books with scholars peering out, a lone figure below looking up",
    style: {
      position: 'relative',
      display: 'block',
      width: '457px',
      height: '597px',
      maxWidth: '100%',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '6px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      lineHeight: 1.6,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)',
      marginRight: '6px'
    }
  }, "Image description"), "A tall tower built from stacked books, scholars leaning out from the gaps between the volumes; at its foot a lone figure looks up at them."), "Frits Ahlefeldt \u2014 \u201CWe study nature\u2026 YOU go save it!\u201D", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'normal',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.7,
      color: 'var(--ink-400)'
    }
  }, "A tower built of books: people inside, a person below, and no shared room between them."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "So \u201Cspeaking from the ivory tower\u201D and \u201Cfailing to name the elephant in the room\u201D are not two separate failures. They are the same failure described from two positions. ", /*#__PURE__*/React.createElement(Emphasis, null, "You cannot name what is in a room you have already left.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "This is why explanation is not a lesser activity than research, and why \u201Cpopularization\u201D is such an unfortunate word for it. Translating a finding is not diluting it. It is the act of re-entering the room."), /*#__PURE__*/React.createElement(SubEn, null, "The irony that sharpens all of this"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "We have spent the last several years teaching machines to show their work. Chain-of-thought is, stripped of its technical clothing, a narrative device \u2014 an instruction to a system to stop producing conclusions and start producing an account of how it got there. We built it because an unexplained answer turned out to be nearly useless to us, however correct."), /*#__PURE__*/React.createElement("figure", {
    style: {
      clear: 'both',
      margin: 'var(--space-5) 0',
      padding: 'var(--space-5) 0',
      borderTop: `2px solid ${rose}`,
      borderBottom: `1px solid ${rose}`
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step-1) + 3px)',
      lineHeight: 1.6,
      color: 'var(--ink-900)'
    }
  }, "We demand legibility from the model", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.2em',
      fontStyle: 'normal',
      color: 'var(--ink-500)'
    }
  }, "and consider it optional in the researcher."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "Every year we understand the black box a little better. Every year, the person standing in front of it \u2014 what they need, what they fear, what they would actually do with this if anyone told them \u2014 is understood a little less. ", /*#__PURE__*/React.createElement(Emphasis, null, "That inversion is the third elephant"), ", and it is the largest thing in the room by a considerable margin."), /*#__PURE__*/React.createElement(SubEn, null, "The parable, recast"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Read the third elephant back into \u76F2\u4EBA\u6478\u8C61 and the cast changes completely. The blind men are no longer the excluded. ", /*#__PURE__*/React.createElement(Emphasis, null, "They are us"), " \u2014 the labs, the papers, the workflows. One holds interpretability. One holds scaling. One holds alignment, one deployment, one policy. Every report is accurate. The leg really is a pillar. And still nobody has described the elephant, because describing it was never a technical problem and no one was assigned to it."), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: '0 0 var(--space-5)'
    }
  }, [['interpretability', 'the leg'], ['scaling', 'the ear'], ['alignment, policy', 'the tail']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontWeight: 700,
      fontSize: '13px',
      color: 'var(--ink-900)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      margin: '8px auto',
      width: '1px',
      height: '14px',
      background: rose
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '13px',
      color: 'var(--ink-500)'
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "Then the parable\u2019s real warning arrives, transposed. The arrogance it cautions against is the assumption that one faculty \u2014 sight \u2014 would have been sufficient to know the whole. In the third elephant\u2019s version, that faculty is not sight. It is ", /*#__PURE__*/React.createElement(Emphasis, null, "technical fluency"), ": the assumption that understanding how a system works is the same as understanding what it means. The parable has been telling this joke about us the entire time. It just needed a different room to land in."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "And there is one more turn, which we point out gently. In every version of the story, the elephant does not speak. It is felt, argued over, and described, and it never once gets to say what it is. Both of our first two elephants have that in common with the third. ", /*#__PURE__*/React.createElement(Emphasis, null, "The whole design of this journal is an attempt to give the elephant a turn.")), /*#__PURE__*/React.createElement(SubEn, null, "What this asks of us"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "This reading raises the standard for our own pages, so we should state it plainly rather than let it stay flattering. It means an article in this journal has not done its job when it has explained a mechanism accurately. It has done its job when a reader who will never build the system can say what it would mean to have it, or to be denied it."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "It means the accessibility of our format \u2014 bilingual, audio-first, braille-ready \u2014 is not a charitable feature attached to the outside of the science. ", /*#__PURE__*/React.createElement(Emphasis, null, "It is the test."), " If we can explain an AI retinal-scanning result to a reader who cannot see the figure, in two languages, without standing above them while we do it, then we have solved the hardest version of the problem the field keeps calling easy."), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: 'var(--space-7) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'calc(var(--step-1) + 2px)',
      color: 'var(--ink-900)'
    }
  }, "Reading the parts"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-sage-400)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '1px',
      background: 'var(--m-sage-200)',
      margin: '0 0 var(--space-6)'
    }
  }, [['glass', 'The magnifier', 'The obvious reading is “look closer.” But notice the quiet irony we are happy to leave in: a magnifier is a sighted instrument, an aid built for the eye, laid over an elephant that stands for knowing without the eye. The tension is the point. It asks whether looking closer must always mean looking with the eyes — and it is, at once, Duchamp’s scrutiny: interrogating the image rather than admiring it. And in light of the third elephant it acquires a fourth reading: a magnifier makes a small thing legible to an ordinary viewer — that is the missing job, drawn as an object.'], ['rings', 'The concentric circles', 'As ripples — sound radiating outward, which for an audio-first journal serving people who read by ear is almost too apt: knowledge spreading in waves, not beams of light. As a target — focus, attention, the earnest looking of 笤. And as an eye itself, iris and pupil: the organ this whole issue is about, drawn as the very thing our readers experience differently. Ripples travel outward from a source and reach whoever is standing in the water; a beam has to be aimed. The choice between those two pictures of how knowledge moves is more or less the argument of this entire essay.'], ['dot', 'The blue dot', 'The single spot of colour in an otherwise black-and-white mark. It is the period at the end of a sentence — we are, after all, a journal. It is the one point of focus the eye is drawn to. And, if you like, it is something quieter: several of the baristas at Xiao Xiao’s shop perceive light but not colour. A single point of brightness in the dark — the light that remains.'], ['face', 'The winking face', 'Look closely, and the elephant’s face is made of punctuation — a dot for one eye, a caret for the other, mid-wink. A face built from typographic marks quietly insists that meaning can be made from symbols and language, not only from images: the whole Duchamp thesis, hidden in the punctuation. A wink is also the smallest possible gesture of address: it only works if someone is being looked at, and only if they are in on it. It is the opposite of the third person.']].map(([m, k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4)',
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 34px',
      height: '34px',
      display: 'grid',
      placeItems: 'center'
    }
  }, m === 'glass' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      border: `1.5px solid ${rose}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '-7px',
      bottom: '-6px',
      width: '11px',
      height: '1.5px',
      background: rose,
      transform: 'rotate(45deg)'
    }
  })), m === 'rings' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      border: '1px solid var(--m-sage-400)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      border: '1px solid var(--m-sage-600)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'var(--ink-700)'
    }
  }))), m === 'dot' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: '#1F4E86'
    }
  }), m === 'face' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-serif)',
      fontSize: '17px',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'var(--ink-900)'
    }
  }), "<")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'calc(var(--step-0) + 2px)',
      color: 'var(--ink-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '6px',
      fontFamily: 'var(--font-serif)',
      fontSize: 'calc(var(--step--1) + 3px)',
      lineHeight: 1.85,
      color: 'var(--ink-600)'
    }
  }, v))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-5)',
      paddingTop: 'var(--space-5)',
      borderTop: `2px solid ${rose}`,
      fontFamily: 'var(--font-label)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 'calc(var(--step-1) + 4px)',
      lineHeight: 1.55,
      color: '#8E5C5C'
    }
  }, "We are the elephant in the room, the thing that is seen but not spoken to. So is the distance between what this century can build and what it is willing to explain. This journal turns to face both, and asks them to speak."), /*#__PURE__*/React.createElement(HeadEn, {
    n: "5"
  }, "What we do"), /*#__PURE__*/React.createElement(LedeEn, null, "Each issue centers on one theme, currently drawn from bioinformatics (AlphaFold, mRNA vaccine design), genomics (consumer DNA tests, pharmacogenomics, newborn screening), and AI in medicine (radiology, voice-based detection, chatbots in healthcare)."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-5) 0',
      display: 'grid',
      gap: '0'
    }
  }, [['Bioinformatics', 'AlphaFold, mRNA vaccine design'], ['Genomics', 'consumer DNA tests, newborn screening'], ['AI in medicine', 'radiology, voice detection, chatbots']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '10px 0',
      borderTop: '1px solid var(--m-rose-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'calc(var(--step--1) + 2px)',
      color: 'var(--ink-900)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '14px',
      color: 'var(--ink-400)',
      marginLeft: '10px'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      textIndent: '1.6em'
    }
  }, "But we don't just publish articles. Each issue is a multi-sensory, interactive experience:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: '6px',
      margin: '0 0 var(--space-5)'
    }
  }, [['Read', 'bar'], ['Listen', 'wave'], ['Feel', 'dots'], ['Hold', 'card'], ['Ask', 'ring']].map(([k, mode]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-4) 4px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'grid',
      placeItems: 'center',
      height: '34px'
    }
  }, mode === 'bar' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: '3px',
      width: '22px'
    }
  }, [1, .8, 1, .6].map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: '2px',
      width: `${w * 100}%`,
      background: 'var(--ink-500)'
    }
  }))), mode === 'wave' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2px',
      height: '22px'
    }
  }, [8, 16, 22, 14, 20, 10].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: '2px',
      height: `${h}px`,
      background: rose
    }
  }))), mode === 'dots' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,5px)',
      gap: '4px'
    }
  }, [1, 1, 0, 1, 1, 0].map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: f ? 'var(--ink-500)' : 'transparent',
      border: f ? 'none' : '1px solid var(--m-sage-400)'
    }
  }))), mode === 'card' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '26px',
      height: '18px',
      border: `1px solid ${rose}`,
      background: 'var(--m-rose-100)'
    }
  }), mode === 'ring' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px solid var(--ink-500)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      color: 'var(--ink-500)'
    }
  }, "?")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '8px',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '16px',
      letterSpacing: '.02em',
      color: 'var(--ink-600)'
    }
  }, k)))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      fontStyle: 'italic',
      color: 'var(--ink-500)'
    }
  }, "Written & audio & Braille editions, a tactile card set, and a question box that makes the conversation two-way."), /*#__PURE__*/React.createElement(HeadEn, {
    n: "6"
  }, "Meet Our Founders"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: '0 0 var(--space-5)'
    }
  }, "Duchamp Journal was founded by two high-school editors, one in each node. Individual pages are in preparation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'var(--m-sage-200)'
    }
  }, [['Cathy', 'Editor-in-chief · Guangzhou', 'Commissioning, Chinese edition, community partnerships.'], ['Rose', 'Editor-in-chief · New York', 'English edition, audio production, Braille.']].map(([n, r, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      background: 'var(--m-rose-100)',
      padding: 'var(--space-5) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": `${n} portrait to come`,
    style: {
      aspectRatio: '1',
      background: 'var(--paper)',
      border: '1px solid var(--m-sage-200)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: 'var(--tracking-label)',
      color: sage
    }
  }, "PORTRAIT"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step-1) + 2px)',
      color: 'var(--ink-900)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px',
      fontFamily: 'var(--font-label)',
      fontSize: '12px',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, r), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 'calc(var(--step--1) + 2px)',
      lineHeight: 1.75,
      color: 'var(--ink-500)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '12px',
      paddingTop: '10px',
      borderTop: '1px solid var(--m-sage-200)',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'calc(var(--step--1) + 2px)',
      color: sage
    }
  }, "Profile page \xB7 coming soon \u2192"))))), /*#__PURE__*/React.createElement(ConversationBox, {
    label: "Work with us",
    questions: ['Want to write, translate, narrate, or proof the Braille edition?', 'Would your school or organisation host a talk with us?'],
    note: "Leave a note or write to us \u2014 we read every one, and we welcome company in any form."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `var(--space-8) ${pad} var(--space-7)`,
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--m-sage-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '10px',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)'
    }
  }, "\u8D44\u6599\u6765\u6E90"), ['图片：“Elephant in the room”条目配图，维基百科（公有领域）。', '插画：Tiedemann，报刊漫画。', '插画：“Blind men and an elephant”条目配图，维基百科（公有领域）。', '绘画：Frank Harris，《The Elephant in the Room》（frank-harris.pixels.com）。', '漫画：Frits Ahlefeldt（HikingArtist），《Book tower experts》（hikingartist.com）。', '“盲人摸象”同时见于汉传佛教典籍与古老南亚文献，本文将其视作跨地域共通的寓言，不归属单一源头。', '约翰·赫尔（John Hull）《触摸岩石》(Touching the Rock, 1990)。', '杜尚相关史实——视网膜艺术、现成品、1917 年《泉》——均为艺术史公认记载。'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 8px',
      paddingLeft: '16px',
      position: 'relative',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      lineHeight: 1.85,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '.75em',
      width: '6px',
      height: '1px',
      background: rose
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 0 var(--space-6)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--m-sage-200)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '10px',
      fontFamily: 'var(--font-label)',
      fontSize: '11px',
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--m-sage-600)'
    }
  }, "Sources"), ['Photograph: illustration from the “Elephant in the room” entry, Wikipedia (public domain).', 'Illustration: Tiedemann, editorial cartoon.', 'Illustration: from the “Blind men and an elephant” entry, Wikipedia (public domain).', 'Painting: Frank Harris, The Elephant in the Room (frank-harris.pixels.com).', 'Cartoon: Frits Ahlefeldt (HikingArtist), “Book tower experts” (hikingartist.com).', '盲人摸象 appears in both Chinese Buddhist tradition and older South Asian sources; we treat it as a shared parable rather than attributing it to a single origin.', 'John Hull, Touching the Rock (1990).', 'Duchamp’s biographical points — retinal art, the readymade, Fountain, 1917 — are standard in the art-historical record.'].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 8px',
      paddingLeft: '16px',
      position: 'relative',
      fontFamily: 'var(--font-serif)',
      fontSize: '13px',
      lineHeight: 1.85,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '.75em',
      width: '6px',
      height: '1px',
      background: rose
    }
  }), t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: "'Cormorant Garamond', var(--font-serif)",
      fontStyle: 'italic',
      fontSize: '13px',
      color: 'var(--ink-400)'
    }
  }, "en.wikipedia.org/wiki/Elephant_in_the_room"))), /*#__PURE__*/React.createElement(JournalFooter, null));
}
Object.assign(window, {
  AboutUs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wechat/AboutUs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wechat/AboutUsV2.jsx
try { (() => {
/* 关于我们 · About Us — 版本二「档案卷首」
   Same copy, a third distinct system. Nothing here repeats 001 or v1:
   · a reversed sage-600 cover plate with a hairline frame, a letterspaced
     vertical wordmark and a printed table of contents (001/v1 had none);
   · single-line rule heads (number · 中文 · English on one baseline) instead of
     numeral tiles or gutter figures;
   · colophon dotted-leader lists where the others used cards and grids;
   · one centred composition (the origin quote) in an otherwise left-ranged page;
   · circular portraits on a shared plinth;
   · the English edition set inside a rose hairline frame with centred heads.
   Accent family unchanged: 莫兰迪 鼠尾草 sage + 玫灰 rose. */
function AboutUsV2() {
  const {
    Emphasis,
    ConversationBox,
    JournalFooter
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  const issue = {
    '--blue-900': 'var(--m-sage-600)',
    '--blue-700': 'var(--m-sage-600)',
    '--blue-600': '#8D9680',
    '--blue-400': 'var(--m-sage-400)',
    '--blue-300': 'var(--m-sage-400)',
    '--blue-200': 'var(--m-sage-200)',
    '--blue-100': 'var(--m-sage-100)',
    '--mark-highlight': 'var(--m-rose-200)',
    '--wash-1': 'var(--m-sage-100)',
    '--wash-2': 'var(--m-sage-200)',
    '--wash-3': 'var(--m-sage-400)',
    '--surface-footer': 'var(--m-sage-200)',
    '--mist-footer': 'linear-gradient(180deg,#F4F6F1 0%, #DDE1D6 100%)'
  };
  const pad = 'var(--sheet-pad-mobile)';
  const rose = '#A88187',
    sage = '#8D9680',
    cream = '#F4F6F1';
  const p = {
    fontFamily: 'var(--font-serif-sc)',
    fontSize: 'var(--step-0)',
    lineHeight: 'var(--lh-reading)',
    color: 'var(--ink-700)',
    margin: '0 0 var(--space-5)'
  };
  const pEn = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'calc(var(--step--1) + 2px)',
    lineHeight: 1.95,
    color: 'var(--ink-600)',
    margin: '0 0 var(--space-4)'
  };
  const lbl = {
    fontFamily: 'var(--font-label)',
    fontSize: '10px',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase'
  };
  const toc = [['01', '我们是谁', 'Who we are'], ['02', '为什么做这件事', 'Why we do this'], ['03', '刊名从何而来', 'The name'], ['04', '我们做什么', 'What we do'], ['05', '编辑部', 'The founders']];
  /* one-line rule head: roman number, 中文 title, English on the same baseline */
  const Head = ({
    i
  }) => {
    const [n, cn, en] = toc[i];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-9) 0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '12px',
        borderBottom: `1px solid ${rose}`,
        paddingBottom: '10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        ...lbl,
        color: rose,
        letterSpacing: '.2em'
      }
    }, n), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-serif-sc)',
        fontWeight: 700,
        fontSize: 'var(--step-2)',
        letterSpacing: 'var(--tracking-title)',
        color: 'var(--ink-900)',
        lineHeight: 1.3
      }
    }, cn), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: 'var(--step--1)',
        color: sage,
        whiteSpace: 'nowrap'
      }
    }, en)));
  };
  /* colophon row with a dotted leader */
  const Leader = ({
    k,
    v,
    accent
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px',
      padding: '11px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      borderBottom: `1px dotted ${accent || 'var(--m-sage-400)'}`,
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-500)',
      textAlign: 'right'
    }
  }, v));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      ...issue
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      background: 'var(--m-sage-600)',
      padding: `var(--space-7) ${pad} var(--space-7)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '12px',
      border: `1px solid rgba(244,246,241,.28)`,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      writingMode: 'vertical-rl',
      ...lbl,
      letterSpacing: '.42em',
      color: 'rgba(244,246,241,.7)',
      paddingTop: '4px'
    }
  }, "ABOUT US"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      ...lbl,
      color: 'rgba(244,246,241,.6)'
    }
  }, "\u7B03\u8C61 Duchamp Journal \xB7 \u5377\u9996"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 400,
      fontSize: 'var(--step-4)',
      lineHeight: 1.5,
      letterSpacing: '.06em',
      color: cream
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u4E0D\u4EE5\u76EE\u76F8\u89C1"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '2.4em',
      fontStyle: 'normal'
    }
  }, "\u4EE5\u5FC3\u76F8\u77E5")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      lineHeight: 1.6,
      color: 'rgba(244,246,241,.82)'
    }
  }, "Not for the eye alone."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-6) 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.95,
      color: 'rgba(244,246,241,.72)',
      maxWidth: '28em'
    }
  }, "\u4E00\u4EFD\u7531\u9AD8\u4E2D\u751F\u53D1\u8D77\u7684\u516C\u76CA\u79D1\u666E\u520A\u7269\u3002\u4E2D\u82F1\u53CC\u8BED\uFF0C\u6587\u5B57\u3001\u97F3\u9891\u3001\u76F2\u6587\u540C\u6B65\u51FA\u520A\u3002\u6211\u4EEC\u56DE\u7B54\u7684\u4E0D\u662F\u201C\u5B83\u600E\u4E48\u8FD0\u4F5C\u201D\uFF0C\u800C\u662F\u201C\u5B83\u4E3A\u4EC0\u4E48\u91CD\u8981\uFF0C\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8981\u5728\u610F\u201D\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(244,246,241,.28)'
    }
  }, toc.map(([n, cn, en]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      ...lbl,
      color: 'var(--m-rose-200)',
      letterSpacing: '.2em'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      color: cream
    }
  }, cn), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      borderBottom: '1px dotted rgba(244,246,241,.3)',
      transform: 'translateY(-4px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--2)',
      color: 'rgba(244,246,241,.6)'
    }
  }, en))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `var(--space-7) ${pad} 0`
    }
  }, /*#__PURE__*/React.createElement(Head, {
    i: 0
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7B03\u8C61\uFF08Duchamp Journal\uFF09\u662F\u4E00\u4E2A\u7531\u9AD8\u4E2D\u751F\u53D1\u8D77\u7684\u516C\u76CA\u79D1\u666E\u520A\u7269\u3002\u6211\u4EEC\u7528\u901A\u4FD7\u6613\u61C2\u7684\u65B9\u5F0F\u8BB2\u89E3\u751F\u7269\u4E0E\u751F\u7269\u533B\u5B66\u79D1\u5B66\u4E0E\u5DE5\u7A0B\uFF0C\u4EE5\u53CA\u5176\u4ED6\u8DE8\u5B66\u79D1\u524D\u6CBF\u521B\u65B0\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u6240\u6709\u5185\u5BB9\u5747\u4EE5\u4E2D\u82F1\u53CC\u8BED\u5236\u4F5C\uFF0C\u5E76\u540C\u6B65\u63A8\u51FA\u6587\u5B57\u7248\u3001\u97F3\u9891\u7248\u548C\u76F2\u6587\u7248"), "\uFF0C\u8BA9\u89C6\u969C\u7FA4\u4F53\u80FD\u591F\u76F4\u63A5\u53C2\u4E0E\u79D1\u6280\u8BDD\u9898\u7684\u8BA8\u8BBA\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u662F\u4E8B\u540E\u6536\u5230\u4E00\u4EFD\u7FFB\u8BD1\u7248\u672C\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0 var(--space-4)',
      borderTop: `2px solid var(--m-sage-400)`,
      borderBottom: `1px solid var(--m-sage-400)`
    }
  }, /*#__PURE__*/React.createElement(Leader, {
    k: "\u8BED\u8A00",
    v: "\u4E2D\u6587 \xB7 English \u53CC\u8BED\u540C\u6B65"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u5F62\u6001",
    v: "\u6587\u5B57\u7248 \xB7 \u97F3\u9891\u7248 \xB7 \u76F2\u6587\u7248"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u8282\u70B9",
    v: "\u5E7F\u5DDE Guangzhou \xB7 \u7EBD\u7EA6 New York"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u5C5E\u6027",
    v: "\u5B66\u751F\u53D1\u8D77 \xB7 \u516C\u76CA \xB7 \u514D\u8D39\u9605\u8BFB"
  })), /*#__PURE__*/React.createElement(Head, {
    i: 1
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u60F3\u6CD5\u6E90\u4E8E\u4E00\u573A\u516C\u5F00\u5206\u4EAB\u3002\u5206\u4EAB\u5609\u5BBE\u662F\u5E7F\u5DDE\u624B\u5FC3\u5496\u5561\u7684\u521B\u59CB\u4EBA\u3001\u89C6\u969C\u5496\u5561\u5E08\u6653\u6653\u3002\u5979\u8BF4\u4E86\u4E00\u53E5\u8BDD\u2014\u2014"), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: `var(--space-7) calc(-1 * ${pad})`,
      padding: `var(--space-8) calc(${pad} + 8px)`,
      background: 'var(--m-sage-100)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontSize: '54px',
      lineHeight: 0.7,
      color: 'transparent',
      WebkitTextStroke: `1px ${rose}`
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 2,
      color: 'var(--ink-900)'
    }
  }, "\u89C6\u969C\u670B\u53CB\u9700\u8981\u7684\u4E0D\u662F\u540C\u60C5\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u800C\u662F", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "\u88AB\u771F\u6B63\u9080\u8BF7\u8FDB\u5165\u793E\u4F1A\u7684\u5BF9\u8BDD\u4E2D"), "\u3002"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '22px',
      height: '1px',
      background: rose
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      color: rose
    }
  }, "\u6653\u6653 \xB7 \u5E7F\u5DDE\u624B\u5FC3\u5496\u5561\u521B\u59CB\u4EBA\u3001\u89C6\u969C\u5496\u5561\u5E08"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '22px',
      height: '1px',
      background: rose
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u53E5\u8BDD\u6253\u52A8\u4E86\u5F88\u591A\u540C\u5B66\uFF0C\u4E5F\u63A8\u52A8\u4E86\u8FD9\u4E2A\u9879\u76EE\u7684\u8BDE\u751F\u3002\u6211\u4EEC\u4E0D\u662F\u5C45\u9AD8\u4E34\u4E0B\u5730\u5728\u201C\u5E2E\u52A9\u201D\u89C6\u969C\u7FA4\u4F53\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u800C\u662F\u642D\u5EFA\u4E00\u4E2A\u5E73\u53F0\uFF0C\u8BA9\u5927\u5BB6\u80FD\u591F\u4E00\u8D77\u8BA8\u8BBA\u79D1\u6280\u548C\u672A\u6765"), "\u3002"), /*#__PURE__*/React.createElement(Head, {
    i: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      margin: '0 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "\u7B03\u8C61 Duchamp Journal \u6807\u5FD7",
    style: {
      width: '54px',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 1.95,
      color: 'var(--ink-700)'
    }
  }, "\u201C\u7B03\u8C61\u201D\u81F4\u656C\u827A\u672F\u5BB6\u9A6C\u585E\u5C14\xB7\u675C\u5C1A\u3002\u4ED6\u4E00\u751F\u6311\u6218\u201C\u827A\u672F\u8BE5\u662F\u4EC0\u4E48\u201D\u7684\u56FA\u6709\u89C2\u5FF5\uFF0C\u53CD\u5BF9\u53EA\u670D\u52A1\u4E8E\u773C\u775B\u7684", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rose
    }
  }, "\u201C\u89C6\u7F51\u819C\u827A\u672F\u201D"), /*#__PURE__*/React.createElement("sup", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: '.7em',
      color: rose
    }
  }, "\u2020"), "\uFF0C\u575A\u6301\u771F\u6B63\u7684\u521B\u9020\u5E94\u6FC0\u53D1\u601D\u8003\uFF0C\u800C\u975E\u4EC5\u4EC5\u53D6\u60A6\u89C6\u89C9\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      paddingLeft: '70px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--2)',
      lineHeight: 1.8,
      color: 'var(--ink-400)'
    }
  }, "\u2020 retinal art \u2014 \u675C\u5C1A\u7528\u6765\u6279\u8BC4\u201C\u53EA\u53D6\u60A6\u89C6\u89C9\u201D\u7684\u4F5C\u54C1\u7684\u8BF4\u6CD5\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6211\u4EEC\u501F\u7528\u4ED6\u7684\u903B\u8F91\u2014\u2014", /*#__PURE__*/React.createElement(Emphasis, null, "\u4E0D\u53D1\u660E\u65B0\u4E1C\u897F\uFF0C\u800C\u662F\u628A\u5DF2\u6709\u7684\u79D1\u7814\u6210\u679C\u7528\u4EBA\u7684\u89C6\u89D2\u91CD\u65B0\u5448\u73B0"), "\u3002\u5C31\u50CF\u675C\u5C1A\u628A\u65E5\u5E38\u7269\u54C1\u653E\u8FDB\u5C55\u5385\u8BA9\u5B83\u4EEC\u6210\u4E3A\u8BDD\u9898\u4E00\u6837\uFF0C\u6211\u4EEC\u628A\u524D\u6CBF\u79D1\u6280\u4ECE\u5B9E\u9A8C\u5BA4\u62C9\u8FDB\u65E5\u5E38\u5BF9\u8BDD\u3002"), /*#__PURE__*/React.createElement(Head, {
    i: 3
  }), [['I', '生物信息学', 'Bioinformatics', 'AlphaFold 预测蛋白质结构、mRNA 疫苗的数字化设计'], ['II', '基因组学', 'Genomics', '消费级基因检测、药物个体差异、新生儿筛查'], ['III', 'AI 医学', 'AI in Medicine', 'AI 读片、语音疾病筛查、AI 问诊的边界']].map(([r, cn, en, v]) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      position: 'relative',
      borderTop: '1px solid var(--m-sage-200)',
      padding: 'var(--space-5) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 'var(--space-4)',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: 1,
      color: 'var(--m-sage-200)'
    }
  }, r), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      color: 'var(--ink-900)'
    }
  }, cn), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: '2px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--1)',
      color: sage
    }
  }, en), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      margin: '8px 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.8,
      color: 'var(--ink-500)',
      maxWidth: '22em'
    }
  }, v))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...p,
      margin: 'var(--space-6) 0 var(--space-4)'
    }
  }, "\u5448\u73B0\u5F62\u5F0F\u4E0D\u9650\u4E8E\u6587\u5B57\uFF0C\u800C\u662F\u4E00\u5957\u5B8C\u6574\u7684", /*#__PURE__*/React.createElement(Emphasis, null, "\u591A\u611F\u5B98\u4F53\u9A8C"), "\uFF1A"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `2px solid ${rose}`,
      borderBottom: `1px solid ${rose}`,
      margin: '0 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Leader, {
    k: "\u6587\u5B57\u7248",
    v: "\u4E2D\u82F1\u53CC\u8BED",
    accent: "var(--m-rose-400)"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u97F3\u9891\u7248",
    v: "\u6717\u8BFB + \u8BBF\u8C08\uFF0C\u9002\u5408\u542C\u8BFB",
    accent: "var(--m-rose-400)"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u76F2\u6587\u7248",
    v: "\u8BA9\u89C6\u969C\u8BFB\u8005\u771F\u6B63\u201C\u4EB2\u624B\u201D\u9605\u8BFB",
    accent: "var(--m-rose-400)"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u4E92\u52A8\u5361\u7247",
    v: "\u6BCF\u671F\u914D\u4E00\u5957\u89E6\u89C9\u5361\u7247",
    accent: "var(--m-rose-400)"
  }), /*#__PURE__*/React.createElement(Leader, {
    k: "\u63D0\u95EE\u7BB1",
    v: "\u6536\u96C6\u53CD\u9988\uFF0C\u8BA9\u5BF9\u8BDD\u662F\u53CC\u5411\u7684",
    accent: "var(--m-rose-400)"
  })), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u6211\u4EEC\u76F8\u4FE1\uFF0C\u79D1\u5B66\u7684\u9B45\u529B\u4E0D\u53EA\u5728\u4E8E\u201C\u77E5\u9053\u201D\uFF0C\u66F4\u5728\u4E8E", /*#__PURE__*/React.createElement(Emphasis, null, "\u201C\u53C2\u4E0E\u201D\u548C\u201C\u5BF9\u8BDD\u201D"), "\u3002"), /*#__PURE__*/React.createElement(Head, {
    i: 4
  }), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7B03\u8C61\u7531\u4E24\u4F4D\u9AD8\u4E2D\u751F\u521B\u529E\uFF0C\u5206\u522B\u9A7B\u5E7F\u5DDE\u4E0E\u7EBD\u7EA6\u3002\u4E2A\u4EBA\u4E3B\u9875\u6B63\u5728\u7B79\u5907\u4E2D\uFF0C\u5C06\u9646\u7EED\u4E0A\u7EBF\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-5) 0',
      background: 'var(--m-sage-100)',
      padding: 'var(--space-6) var(--space-4)',
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: 'var(--space-4)',
      alignItems: 'start'
    }
  }, [['Cathy', '主编 · 广州', '负责选题、中文写作与视障社群合作。'], ['Rose', '主编 · 纽约', '负责英文编译、音频与盲文版制作。']].map(([n, r, note], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, i === 1 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      background: 'var(--m-sage-400)',
      alignSelf: 'stretch'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": `${n} 肖像位待补`,
    style: {
      width: '104px',
      height: '104px',
      margin: '0 auto',
      borderRadius: '50%',
      background: 'var(--paper)',
      border: `1px solid var(--m-rose-400)`,
      display: 'grid',
      placeItems: 'center',
      ...lbl,
      color: rose
    }
  }, "PORTRAIT"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px',
      fontFamily: 'var(--font-serif)',
      fontVariantCaps: 'small-caps',
      letterSpacing: '.12em',
      fontSize: 'var(--step-1)',
      color: 'var(--ink-900)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      color: 'var(--ink-500)'
    }
  }, r), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px auto 0',
      maxWidth: '15em',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      lineHeight: 1.8,
      color: 'var(--ink-500)'
    }
  }, note), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: '12px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--2)',
      color: rose,
      borderBottom: `1px solid var(--m-rose-400)`,
      paddingBottom: '2px'
    }
  }, "\u4E2A\u4EBA\u9875 \xB7 coming soon"))))), /*#__PURE__*/React.createElement(ConversationBox, {
    label: "\u52A0\u5165\u6211\u4EEC",
    font: "var(--font-serif-sc)",
    questions: ['想投稿、翻译、录音或校对盲文版？', '所在的学校或机构希望共办一场分享？'],
    note: "\u7559\u8A00\u6216\u6765\u4FE1 \u2014\u2014 \u6211\u4EEC\u9010\u6761\u9605\u8BFB\uFF0C\u6B22\u8FCE\u4EFB\u4F55\u5F62\u5F0F\u7684\u540C\u884C\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-8) 0 0',
      border: `1px solid ${rose}`,
      padding: 'var(--space-6) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      ...lbl,
      color: rose
    }
  }, "English edition"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'var(--step-3)',
      lineHeight: 1.2,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic',
      fontWeight: 700
    }
  }, "Duchamp Journal"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontVariantCaps: 'small-caps',
      letterSpacing: '.1em',
      fontSize: '0.62em',
      color: sage
    }
  }, "project introduction")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) auto 0',
      maxWidth: '26em',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-0)',
      lineHeight: 1.75,
      color: 'var(--ink-700)'
    }
  }, "We don't ask how the technology works \u2014 we ask ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: rose,
      fontWeight: 700
    }
  }, "why it matters, and why we should care"), ".")), [['Who we are', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Duchamp Journal (\u7B03\u8C61) is a student-led publication that explains biological and biomedical science and engineering, as well as other interdisciplinary innovations, through a human lens. ", /*#__PURE__*/React.createElement(Emphasis, null, "Content is produced in English and Chinese and delivered in written, audio, and Braille formats"), " \u2014 so that individuals with visual disabilities can participate directly, not just receive a translated version afterward."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 0
    }
  }, "We currently have two nodes: one in Guangzhou, one in New York."))], ['Why we do this', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "The idea came from a public talk by Xiao Xiao, a visually impaired barista and founder of Heart Coffee in Guangzhou. She said: ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "\u201CWhat the visually impaired community needs is not sympathy, but a genuine invitation into society's conversations.\u201D")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 0
    }
  }, "Duchamp was not born out of charity or pity \u2014 it was born out of a belief that knowledge should be a shared public resource, not an exclusive privilege. We don't see ourselves as helping the visually impaired from above; ", /*#__PURE__*/React.createElement(Emphasis, null, "we see ourselves as building a table where everyone is welcome to sit down and talk about the future"), "."))], ['The name', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "The name pays tribute to Marcel Duchamp, who rejected \u201Cretinal art\u201D \u2014 art that serves only the eye \u2014 and insisted that true creation should engage the mind, not merely please the gaze. He introduced the readymade: ordinary objects presented as art simply because he chose to place them in a gallery."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 0
    }
  }, "We apply the same logic to science communication. We don't invent new things; we take existing research and re-present it through a human lens, asking not how it works, but why it matters."))], ['What we do', /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Each issue centers on one theme, currently drawn from bioinformatics (AlphaFold, mRNA vaccine design), genomics (consumer DNA tests, pharmacogenomics, newborn screening), and AI in medicine (radiology, voice-based detection, chatbots in healthcare)."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 0
    }
  }, "But we don't just publish articles. Each issue is a multi-sensory, interactive experience: a written edition in both languages, an audio edition of narration and interviews, a Braille edition readers can feel, a tactile card set, and a question box that makes the conversation two-way."))], ['The founders', /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 0
    }
  }, "Duchamp Journal was founded by two high-school editors \u2014 Cathy in Guangzhou and Rose in New York. Individual profile pages are in preparation.")]].map(([h, body], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      paddingTop: 'var(--space-5)',
      marginTop: i ? 'var(--space-5)' : 0,
      borderTop: '1px solid var(--m-rose-200)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-4)',
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontVariantCaps: 'small-caps',
      fontWeight: 400,
      letterSpacing: '.14em',
      fontSize: 'var(--step-0)',
      color: sage
    }
  }, h), body))), /*#__PURE__*/React.createElement(ConversationBox, {
    label: "Work with us",
    questions: ['Want to write, translate, narrate, or proof the Braille edition?', 'Would your school or organisation host a talk with us?'],
    note: "Leave a note or write to us \u2014 we read every one, and we welcome company in any form."
  })), /*#__PURE__*/React.createElement(JournalFooter, null));
}
Object.assign(window, {
  AboutUsV2
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wechat/AboutUsV2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wechat/Article001.jsx
try { (() => {
/* 第一期 · 001「当电脑“看进”你的眼睛」
   House DNA (ghost word, highlight band, hairline rules, verse underlay, question box)
   re-arranged rather than repeated. Accent family: 莫兰迪 teal + clay — set once on the
   section as a --blue-* override, so every DS component retints itself. */
function Article001() {
  const {
    Label,
    Emphasis,
    ConversationBox,
    SourcesNote,
    JournalFooter,
    AudioPlayer
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  const issue = {
    /* per-issue palette */
    '--blue-900': 'var(--m-teal-600)',
    '--blue-700': 'var(--m-teal-600)',
    '--blue-600': '#7B9490',
    '--blue-400': 'var(--m-teal-400)',
    '--blue-300': 'var(--m-teal-400)',
    '--blue-200': 'var(--m-teal-200)',
    '--blue-100': 'var(--m-teal-100)',
    '--mark-highlight': 'var(--m-clay-200)',
    '--wash-1': 'var(--m-teal-100)',
    '--wash-2': 'var(--m-teal-200)',
    '--wash-3': 'var(--m-teal-400)',
    '--surface-footer': 'var(--m-teal-200)',
    '--mist-footer': 'linear-gradient(180deg,#F3F6F5 0%, #D5E0DE 100%)'
  };
  const p = {
    fontFamily: 'var(--font-serif-sc)',
    fontSize: 'var(--step-0)',
    lineHeight: 'var(--lh-reading)',
    color: 'var(--ink-700)',
    margin: '0 0 var(--space-5)'
  };
  const pEn = {
    fontFamily: 'var(--font-serif)',
    fontSize: 'calc(var(--step--1) + 2px)',
    lineHeight: 1.95,
    color: 'var(--ink-600)',
    margin: '0 0 var(--space-4)'
  };
  const pad = 'var(--sheet-pad-mobile)';
  /* section head: pastel numeral tile + rule that runs to the edge */
  const Head = ({
    n,
    en,
    children
  }) => {
    /* numeral treatment varies per section so the three heads don't rhyme */
    const marks = {
      '1': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--m-clay-200)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: '#8A6A57'
        }
      }, "1"),
      '2': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '50%',
          border: '1px solid var(--m-clay-400)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: '#8A6A57'
        }
      }, "2"),
      '3': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'var(--step-2)',
          lineHeight: 1,
          color: '#8A6A57',
          borderBottom: '2px solid var(--m-clay-400)',
          paddingBottom: '2px'
        }
      }, "03")
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-9) 0 var(--space-6)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '14px'
      }
    }, marks[n], /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Italianno', cursive",
        fontSize: '30px',
        lineHeight: 1,
        color: 'var(--m-teal-600)'
      }
    }, en), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--m-teal-200)'
      }
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-serif-sc)',
        fontWeight: 400,
        fontSize: 'var(--step-3)',
        lineHeight: 1.4,
        letterSpacing: 'var(--tracking-title)',
        color: 'var(--ink-900)',
        fontWeight: 700
      }
    }, children));
  };
  /* English section head — mirrors Head, straw numeral */
  const HeadEn = ({
    n,
    children
  }) => {
    const marks = {
      '1': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid var(--m-straw-600)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: '#A79A78'
        }
      }, "I"),
      '2': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          flex: '0 0 auto',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'var(--step-3)',
          lineHeight: 1,
          color: 'var(--m-straw-400)'
        }
      }, "II"),
      '3': /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        style: {
          width: '30px',
          height: '30px',
          flex: '0 0 auto',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '50%',
          background: 'var(--m-straw-400)',
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--step--1)',
          color: 'var(--white)'
        }
      }, "III")
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: 'var(--space-7) 0 var(--space-5)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '12px'
      }
    }, marks[n], /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: '1px',
        background: 'var(--m-straw-400)'
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: 'var(--step-2)',
        lineHeight: 1.35,
        color: 'var(--ink-900)'
      }
    }, children));
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      ...issue
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 'var(--rule-accent)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 2,
      background: 'var(--m-teal-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-clay-200)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-straw-200)'
    }
  })), /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(165deg,var(--m-teal-100) 0%,#FDFDFD 78%)',
      padding: `var(--space-8) ${pad} 0`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-18px',
      top: '8px',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: '5.6rem',
      lineHeight: 1,
      color: 'var(--m-teal-200)',
      letterSpacing: '-0.02em',
      fontSize: '130px'
    }
  }, "Eyes"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      marginTop: '6px',
      writingMode: 'vertical-rl',
      fontFamily: "'Italianno', cursive",
      fontSize: '24px',
      letterSpacing: '.02em',
      color: 'var(--m-teal-600)'
    }
  }, "Issue 01", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.5em',
      verticalAlign: 'middle',
      padding: '0 .15em'
    }
  }, "\xB7"), "No. 001"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontWeight: 400,
      fontSize: 'var(--step-4)',
      lineHeight: 1.4,
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u5F53\u4EBA\u5DE5\u667A\u80FD"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.2em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      background: 'linear-gradient(180deg,transparent 60%,var(--m-clay-200) 60%,var(--m-clay-200) 96%,transparent 96%)'
    }
  }, "\u770B\u5411\u4F60\u7684\u773C\u5E95"))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '20px',
      lineHeight: 1.5,
      color: 'var(--ink-500)'
    }
  }, "When a Computer", /*#__PURE__*/React.createElement("br", null), "Looks Into Your Eye"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 'var(--space-7)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, ['人工智能', '医学影像', '基层医疗'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: '5px 12px',
      background: 'var(--white)',
      border: '1px solid var(--m-teal-200)',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--2)',
      color: 'var(--ink-600)'
    }
  }, t))), /*#__PURE__*/React.createElement(AudioPlayer, {
    title: "\u97F3\u9891\u7248\uFF5CAI \u773C\u5E95\u7B5B\u67E5\u5728\u6CF0\u56FD\u4E61\u6751",
    subtitle: "\u6717\u8BFB + \u6848\u4F8B\u590D\u76D8 \xB7 \u6536\u542C",
    progress: 0,
    style: {
      margin: 'var(--space-7) 0'
    }
  }), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderTop: '2px solid var(--m-straw-200)',
      borderBottom: '1px solid var(--m-straw-200)',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.9,
      color: 'var(--ink-800)'
    }
  }, "\u4E00\u5F20\u773C\u5E95\u7167\u7247\uFF0C\u4ECE\u7B49\u5F85", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#A98874',
      fontWeight: 700
    }
  }, "\u5341\u5468"), "\uFF0C\u53D8\u6210\u7B49\u5F85", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#A98874',
      fontWeight: 700
    }
  }, "\u5341\u5206\u949F"), "\u3002"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '14px',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "\u672C\u671F\u5F00\u7BC7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: `var(--space-7) ${pad} 0`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u60F3\u8C61\u4E00\u4E0B\uFF0C\u5982\u679C\u4F60\u5F97\u4E86\u7CD6\u5C3F\u75C5\uFF0C\u5C45\u4F4F\u5728\u4E00\u4E2A\u773C\u79D1\u533B\u751F\u5341\u5206\u7D27\u7F3A\u7684\u5730\u65B9 \u2014\u2014 \u51E0\u767E\u4E07\u4EBA\uFF0C\u5374\u53EA\u6709\u5C48\u6307\u53EF\u6570\u7684\u51E0\u4F4D\u773C\u79D1\u5927\u592B\u3002\u8FD9\u65F6\uFF0C\u4F60\u7684\u773C\u5E95\u6B63\u6084\u6084\u957F\u51FA\u4E00\u70B9\u5FAE\u5C0F\u7684\u75C5\u7076\u3002\u65E9\u53D1\u73B0\uFF0C\u6CBB\u7597\u8D77\u6765\u5E76\u4E0D\u56F0\u96BE\uFF1B\u53EF\u8981\u662F\u6CA1\u80FD\u53CA\u65F6\u5BDF\u89C9\uFF0C\u4F60\u7684\u89C6\u529B\u5C31\u4F1A\u4E00\u70B9\u70B9\u88AB\u8695\u98DF\u3002\u5728\u5F53\u5730\u6709\u4E9B\u8BCA\u6240\u91CC\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u4F60\u62CD\u597D\u7684\u773C\u5E95\u7167\u7247\uFF0C\u8981\u7B49\u4E0A\u6574\u6574\u5341\u5468\u624D\u80FD\u4EA4\u5230\u4E13\u79D1\u533B\u751F\u5BA1\u9605"), "\u3002\u7B49\u5230\u7ED3\u679C\u51FA\u6765\uFF0C\u5F88\u53EF\u80FD\u5DF2\u7ECF\u9519\u8FC7\u4E86\u6700\u4F73\u6CBB\u7597\u65F6\u673A\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u800C\u73B0\u5728\uFF0C\u540C\u4E00\u5F20\u773C\u5E95\u7167\u7247\uFF0C\u4E0D\u5230\u5341\u5206\u949F\u5C31\u80FD\u62FF\u5230\u7B5B\u67E5\u7ED3\u679C\u3002\u4EBA\u5DE5\u667A\u80FD\u6B63\u5728\u533B\u5B66\u5F71\u50CF\u9886\u57DF\u5B9E\u73B0\u8FD9\u6837\u7684\u7A81\u7834\u3002\u5728\u5927\u4F17\u70ED\u8BAE\u7684\u5404\u7C7B AI \u5E94\u7528\u5F53\u4E2D\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u8FD9\u9879\u6280\u672F\u4F4E\u8C03\u524D\u884C\uFF0C\u5374\u5145\u6EE1\u4EBA\u6587\u5173\u6000"), "\u3002"), /*#__PURE__*/React.createElement(Head, {
    n: "1",
    en: "How it works"
  }, "AI \u5230\u5E95\u662F\u600E\u4E48\u5DE5\u4F5C\u7684\uFF1F"), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '0 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--m-teal-100)',
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "\u773C\u5E95\u7167\u76F8\u673A\u4E0E\u4E00\u5F20\u89C6\u7F51\u819C\u7167\u7247",
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--m-teal-200)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--m-teal-600)'
    }
  }, "IMAGE \xB7 \u773C\u5E95\u7167\u76F8")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '12px',
      marginLeft: '25%',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.7,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-teal-600)',
      marginRight: '6px'
    }
  }, "\u56FE\u50CF\u63CF\u8FF0"), "\u4E00\u53F0\u773C\u5E95\u7167\u76F8\u673A\u5BF9\u51C6\u53D7\u68C0\u8005\u7684\u773C\u775B\uFF0C\u65C1\u8FB9\u5C4F\u5E55\u4E0A\u662F\u4E00\u5F20\u6A59\u7EA2\u8272\u7684\u89C6\u7F51\u819C\u7167\u7247\uFF0C\u753B\u9762\u4E2D\u592E\u53EF\u89C1\u653E\u5C04\u72B6\u5206\u5E03\u7684\u7EC6\u5C0F\u8840\u7BA1\u3002"), "\u89C6\u7F51\u819C\u662F\u773C\u7403\u540E\u65B9\u7684\u611F\u5149\u7EC4\u7EC7\uFF0C\u4E5F\u662F\u5168\u8EAB\u8840\u7BA1\u552F\u4E00\u53EF\u4EE5\u88AB\u76F4\u63A5\u770B\u89C1\u7684\u5730\u65B9\u3002")), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u957F\u671F\u4EE5\u6765\uFF0C\u533B\u751F\u90FD\u4F1A\u62CD\u6444\u89C6\u7F51\u819C\u7167\u7247\u6765\u6392\u67E5\u773C\u75C5\u3002\u89C6\u7F51\u819C\u957F\u5728\u773C\u7403\u540E\u58C1\uFF0C\u662F\u611F\u53D7\u5149\u7EBF\u7684\u4E00\u5C42\u8584\u819C\u3002\u7CD6\u5C3F\u75C5\u89C6\u7F51\u819C\u75C5\u53D8\u5C31\u662F\u6700\u5E38\u89C1\u7684\u773C\u90E8\u9690\u60A3\u4E4B\u4E00\uFF1A\u8840\u7CD6\u957F\u671F\u504F\u9AD8\uFF0C\u4F1A\u6162\u6162\u635F\u4F24\u773C\u5E95\u7EC6\u5C0F\u7684\u8840\u7BA1\uFF0C\u5F15\u53D1\u8840\u7BA1\u6E17\u6F0F\u6216\u662F\u5835\u585E\u3002\u653E\u4EFB\u4E0D\u7BA1\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u5B83\u5DF2\u7ECF\u6210\u4E3A\u9752\u58EE\u5E74\u4EBA\u7FA4\u5931\u660E\u6700\u4E3B\u8981\u7684\u8BF1\u56E0\u4E4B\u4E00"), "\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u8FD9\u65F6\u4EBA\u5DE5\u667A\u80FD\u5C31\u6D3E\u4E0A\u4E86\u7528\u573A\u3002\u7814\u7A76\u4EBA\u5458\u7ED9\u8BA1\u7B97\u673A\u7A0B\u5E8F\u6295\u5582\u4E86\u51E0\u5341\u4E07\u5F20\u773C\u5E95\u7167\u7247\uFF0C\u91CC\u9762\u65E2\u6709\u5065\u5EB7\u7684\u6837\u672C\uFF0C\u4E5F\u6709\u5DF2\u7ECF\u51FA\u73B0\u75C5\u53D8\u7684\u56FE\u50CF\u3002\u7ECF\u8FC7\u5927\u91CF\u5B66\u4E60\uFF0CAI \u5C31\u80FD\u72EC\u7ACB\u8BC6\u522B\u51FA\u5371\u9669\u4FE1\u53F7\uFF1A\u5FAE\u5F31\u7684\u6E17\u8840\u3001\u5835\u585E\u7684\u8840\u7BA1\uFF0C\u8FD8\u6709\u90A3\u4E9B\u75B2\u60EB\u7684\u533B\u751F\u5F88\u5BB9\u6613\u6F0F\u6389\u7684\u7EC6\u5FAE\u53D8\u5316\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `var(--space-7) calc(-1 * ${pad})`,
      padding: `var(--space-7) ${pad}`,
      background: 'var(--m-lilac-100)'
    }
  }, ['它并不是什么神奇魔法，', '也不能直接代替医生看病。', '你可以把 AI 理解成一名经验超群的“信号侦察员”——', '它训练期间看过的眼底图片数量，', '是任何一位眼科医生一辈子都不可能看完的。'].map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 10px',
      marginLeft: `${i * 10}px`,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-1)',
      lineHeight: 1.9,
      color: 'var(--ink-800)'
    }
  }, l))), /*#__PURE__*/React.createElement(Head, {
    n: "2",
    en: "Why it matters"
  }, "\u4E3A\u4EC0\u4E48\u8FD9\u4EF6\u4E8B\u548C\u6211\u4EEC\u606F\u606F\u76F8\u5173\uFF1F"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u7814\u53D1\u8FD9\u9879\u6280\u672F\uFF0C\u5E76\u4E0D\u662F\u4E3A\u4E86\u9020\u51FA\u6BD4\u533B\u751F\u66F4\u806A\u660E\u7684\u673A\u5668\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u800C\u662F\u4E3A\u4E86\u89E3\u51B3\u533B\u7597\u8986\u76D6\u4E0D\u8DB3\u7684\u96BE\u9898"), "\u3002\u4E16\u754C\u4E0A\u5F88\u591A\u5730\u533A\u773C\u79D1\u4E13\u79D1\u533B\u751F\u7F3A\u53E3\u5DE8\u5927\u3002\u4E00\u5BB6\u7CD6\u5C3F\u75C5\u95E8\u8BCA\u53EF\u80FD\u8981\u670D\u52A1\u6210\u5343\u4E0A\u4E07\u7684\u75C5\u4EBA\uFF0C\u5374\u8FDE\u4E00\u540D\u5E38\u9A7B\u773C\u79D1\u533B\u751F\u90FD\u6CA1\u6709\u3002"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u800C\u4EBA\u5DE5\u667A\u80FD\u7B5B\u67E5\u7CFB\u7EDF\uFF0C\u6709\u65F6\u53EA\u9700\u8981\u4E00\u90E8\u624B\u673A\u7684\u6444\u50CF\u5934\u5C31\u53EF\u4EE5\u8FD0\u884C\u3002\u60A3\u8005\u5728\u5F53\u5730\u8BCA\u6240\u5C31\u80FD\u5B8C\u6210\u521D\u6B65\u68C0\u67E5\uFF0CAI \u4F1A\u7B5B\u9009\u51FA\u75C5\u60C5\u7D27\u6025\u3001\u5FC5\u987B\u8F6C\u8BCA\u7ED9\u4E13\u79D1\u533B\u751F\u7684\u4EBA\u3002\u8FD9\u6837\u4E00\u6765\uFF0C\u66F4\u5C11\u7684\u75C5\u4EBA\u4F1A\u56E0\u4E3A\u65E0\u4EBA\u7B5B\u67E5\u800C\u88AB\u803D\u8BEF\uFF0C\u66F4\u591A\u4EBA\u4E0D\u4F1A\u56E0\u4E3A\u672C\u53EF\u4EE5\u65E9\u53D1\u73B0\u7684\u773C\u75C5\uFF0C\u767D\u767D\u5931\u53BB\u89C6\u529B\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1px',
      background: 'var(--m-teal-200)',
      margin: 'var(--space-6) 0 var(--space-4)'
    }
  }, [['10 周', '专家复核的等待上限'], ['10 分钟', 'AI 初筛给出结果']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: 'var(--paper)',
      padding: 'var(--space-5) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step-3)',
      color: 'var(--ink-900)',
      lineHeight: 1.2
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: '0.95rem',
      color: 'var(--ink-500)',
      lineHeight: 1.7
    }
  }, v)))), /*#__PURE__*/React.createElement(Head, {
    n: "3",
    en: "The honest part"
  }, "\u4E0D\u80FD\u56DE\u907F\u7684\u73B0\u5B9E\u95EE\u9898"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u53EF\u8FD9\u9879\u6280\u672F\u5E76\u4E0D\u662F\u4E00\u4E2A\u5B8C\u7F8E\u65E0\u7455\u7684\u7AE5\u8BDD\u3002\u5982\u679C\u4E00\u5473\u5938\u5927 AI \u7684\u6548\u679C\uFF0C\u53CD\u800C\u4F1A\u4F24\u5BB3\u5230\u90A3\u4E9B\u672C\u5E94\u53D7\u76CA\u7684\u60A3\u8005\u3002\u66FE\u7ECF\u6709\u4E00\u5957 AI \u7B5B\u67E5\u7CFB\u7EDF\uFF0C\u5728\u5B9E\u9A8C\u5BA4\u6D4B\u8BD5\u65F6\u6548\u679C\u5341\u5206\u51FA\u8272\u3002\u53EF\u5F53\u5B83\u88AB\u653E\u5230\u6CF0\u56FD\u7684\u771F\u5B9E\u8BCA\u6240\u91CC\u8BD5\u7528\uFF0C\u5374\u63A5\u8FDE\u201C\u6389\u94FE\u5B50\u201D\u3002\u8BCA\u5BA4\u5149\u7EBF\u5DEE\u3001\u7167\u7247\u62CD\u6444\u8D28\u91CF\u4E0D\u7406\u60F3\u3001\u7F51\u901F\u7F13\u6162\u7B49\u73B0\u5B9E\u95EE\u9898\uFF0C\u90FD\u4F1A\u8BA9 AI \u653E\u5F03\u8BC6\u522B\u8FD9\u5F20\u7247\u5B50\u3002\u6362\u505A\u4EBA\u7C7B\u533B\u751F\u5B8C\u5168\u53EF\u4EE5\u770B\u61C2\u7684\u7167\u7247\uFF0CAI \u5374\u65E0\u6CD5\u7ED9\u51FA\u7ED3\u679C\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u60A3\u8005\u53EA\u80FD\u7A7A\u624B\u800C\u5F52"), "\u3002"), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'block',
      width: '46px',
      height: '3px',
      background: 'var(--m-clay-400)',
      marginBottom: 'var(--space-5)'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.75,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 700
    }
  }, "\u4EBA\u5DE5\u667A\u80FD\u662F\u533B\u751F\u5F3A\u5927\u7684\u8F85\u52A9\u5DE5\u5177\uFF0C"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.5em',
      color: 'var(--ink-500)'
    }
  }, "\u6C38\u8FDC\u65E0\u6CD5\u53D6\u4EE3\u533B\u751F\u3002")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.9,
      color: 'var(--ink-600)',
      paddingLeft: '1.5em',
      borderLeft: '1px solid var(--m-clay-200)'
    }
  }, "\u9047\u5230\u590D\u6742\u75C5\u60C5\uFF0C\u6700\u7EC8\u51B3\u5B9A\u6743\u8FD8\u662F\u8981\u4EA4\u8FD8\u5230\u533B\u52A1\u4EBA\u5458\u624B\u4E0A\uFF0C\u4EBA\u673A\u914D\u5408\uFF0C\u624D\u80FD\u53D1\u6325\u6700\u597D\u7684\u6548\u679C\u3002"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-4)',
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--1)',
      color: '#A98874'
    }
  }, "\u6CF0\u56FD\u57FA\u5C42\u8BCA\u6240\u5B9E\u6D4B \xB7 2026")), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "\u79D1\u6280\u5BA3\u4F20\u63CF\u7ED8\u51FA\u7684\u7F8E\u597D\u524D\u666F\uFF0C\u548C\u5B83\u843D\u5230\u666E\u901A\u4EBA\u751F\u6D3B\u91CC\u7684\u771F\u5B9E\u8868\u73B0\uFF0C\u5F80\u5F80\u4F1A\u5B58\u5728\u5DEE\u8DDD\u3002\u800C\u63A2\u8BA8\u8FD9\u7C7B\u77DB\u76FE\uFF0C\u6B63\u662F\u521B\u529E\u672C\u520A\u7684\u521D\u8877\u3002\u5982\u4ECA\u8BA1\u7B97\u673A\u5DF2\u7ECF\u53EF\u4EE5\u770B\u61C2\u773C\u5E95\u7167\u7247\uFF0C\u63D0\u524D\u53D1\u73B0\u773C\u75C5\u98CE\u9669\u3002\u4F46\u66F4\u96BE\u3001\u4E5F\u66F4\u5173\u4E4E\u4EBA\u6027\u7684\u95EE\u9898\u6446\u5728\u773C\u524D\uFF1A", /*#__PURE__*/React.createElement(Emphasis, null, "\u6211\u4EEC\u8981\u600E\u4E48\u505A\uFF0C\u624D\u80FD\u8BA9\u8FD9\u9879\u73CD\u8D35\u7684\u533B\u7597\u6280\u672F\uFF0C\u771F\u6B63\u9001\u5230\u6700\u9700\u8981\u5B83\u7684\u4EBA\u7684\u624B\u4E2D\uFF1F")), /*#__PURE__*/React.createElement(ConversationBox, {
    label: "\u8BFB\u8005\u6765\u4FE1",
    font: "var(--font-serif-sc)",
    questions: ['如果一台机器先看了你的检查结果，你希望谁来告诉你结论？', '在你生活的地方，最难“等到”的那一次诊断是什么？'],
    note: "\u5728\u7559\u8A00\u533A\u5199\u4E0B\u4F60\u7684\u7B54\u6848 \u2014\u2014 \u6211\u4EEC\u9010\u6761\u9605\u8BFB\uFF0C\u5E76\u5728\u4E0B\u4E00\u671F\u520A\u5370\u5176\u4E2D\u51E0\u5219\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `var(--space-8) calc(-1 * ${pad}) 0`,
      padding: `var(--space-7) ${pad} var(--space-8)`,
      background: 'var(--m-straw-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 'var(--rule-accent)',
      margin: `0 calc(-1 * ${pad}) var(--space-6)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-straw-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 2,
      background: 'var(--m-teal-200)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--m-clay-200)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      margin: 0
    }
  }, "English edition"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: '1px',
      background: 'var(--m-straw-400)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step--1)',
      color: 'var(--ink-400)'
    }
  }, "No. 001")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 'var(--step-3)',
      color: 'var(--ink-900)',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: '36px'
    }
  }, "When a Computer"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginLeft: '1.4em',
      fontVariantCaps: 'small-caps',
      letterSpacing: '.06em',
      fontWeight: 700,
      fontSize: '36px'
    }
  }, "Looks Into Your Eye"))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      fontStyle: 'italic',
      fontSize: 'var(--step-1)',
      lineHeight: 1.7,
      color: 'var(--ink-800)',
      borderTop: '2px solid var(--m-straw-400)',
      borderBottom: '1px solid var(--m-straw-400)',
      padding: 'var(--space-5) 0',
      margin: '0 0 var(--space-6)'
    }
  }, "One retinal photograph: ten weeks of waiting, or ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#A98874',
      fontWeight: 700
    }
  }, "ten minutes"), "."), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Imagine you have diabetes, and you live somewhere with only a handful of eye doctors for millions of people. A tiny problem is quietly starting at the back of your eye \u2014 the kind that, if caught early, is easy to treat, but if missed, can slowly take your sight. In some clinics, ", /*#__PURE__*/React.createElement(Emphasis, null, "getting your eye photos reviewed by a specialist could take up to ten weeks"), ". By then, it may be too late."), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Now imagine the same photo gets an answer in under ten minutes. That is what artificial intelligence is starting to do with medical scans, and it is ", /*#__PURE__*/React.createElement(Emphasis, null, "one of the quietest, most human uses"), " of the technology we hear so much about."), /*#__PURE__*/React.createElement(HeadEn, {
    n: "1"
  }, "What is actually happening"), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '0 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--m-straw-200)',
      padding: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "A retinal photograph under review",
    style: {
      aspectRatio: '16 / 9',
      background: 'var(--m-straw-100)',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--m-straw-600)'
    }
  }, "IMAGE \xB7 RETINAL SCAN")), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: '12px',
      marginRight: '25%',
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--1)',
      lineHeight: 1.7,
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: '5px',
      fontFamily: 'var(--font-serif)',
      fontSize: '12px',
      lineHeight: 1.75,
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--m-straw-600)',
      marginRight: '6px'
    }
  }, "Image description"), "A retinal camera is aimed at a patient's eye; on the screen beside it sits an orange-red photograph of the retina, fine blood vessels radiating from its centre."), "The retina is the only place in the body where blood vessels can be seen directly.")), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "Doctors have long photographed the retina to look for disease. One of the most common threats is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "diabetic retinopathy"), ", where high blood sugar slowly damages the eye's tiny blood vessels. Researchers showed a program hundreds of thousands of retinal photos until it learned the warning signs on its own."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0',
      paddingLeft: 'var(--space-5)',
      borderLeft: '1px solid var(--m-lilac-400)'
    }
  }, ['It is not magic, and it is not a robot doctor.', 'Think of it as an extremely well-practised pattern-spotter —', 'it has seen more retinas in training', 'than any doctor sees in a lifetime.'].map((l, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-serif)',
      fontStyle: i % 2 ? 'italic' : 'normal',
      fontSize: 'var(--step-0)',
      lineHeight: 1.75,
      color: 'var(--ink-700)'
    }
  }, l))), /*#__PURE__*/React.createElement(HeadEn, {
    n: "2"
  }, "Why we should care"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "The point is not that machines are smarter than doctors. The point is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, "reach"), ". A diabetes clinic might serve thousands of patients with no ophthalmologist on site; an AI system \u2014 sometimes running on nothing more than a smartphone camera \u2014 can offer a first look right there. ", /*#__PURE__*/React.createElement(Emphasis, null, "Fewer people fall through the cracks.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-6) 0',
      border: '1px solid var(--m-straw-400)',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "Specialist review"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)'
    }
  }, "up to 10 weeks")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(35, 1fr)',
      gap: '3px',
      marginBottom: 'var(--space-5)'
    }
  }, Array.from({
    length: 70
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      aspectRatio: '1',
      background: 'var(--m-clay-400)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--step--2)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, "AI first look"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 'var(--step-0)',
      color: 'var(--ink-900)'
    }
  }, "under 10 minutes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(35, 1fr)',
      gap: '3px',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      aspectRatio: '1',
      background: 'var(--m-teal-600)'
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step--2)',
      color: 'var(--ink-400)',
      lineHeight: 1.6
    }
  }, "One square is one day of waiting.")), /*#__PURE__*/React.createElement(HeadEn, {
    n: "3"
  }, "The honest part"), /*#__PURE__*/React.createElement("p", {
    style: pEn
  }, "When one of these systems was tested in real clinics in Thailand, it worked beautifully in the lab and then ", /*#__PURE__*/React.createElement(Emphasis, null, "stumbled in the real world"), ". Poor lighting, imperfect photos and slow internet meant the AI sometimes rejected images a human would have accepted, sending patients home without an answer."), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 'var(--space-7) 0',
      display: 'flex',
      gap: '18px',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("figcaption", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'flex-start',
      writingMode: 'vertical-rl',
      transform: 'rotate(180deg)',
      fontFamily: 'var(--font-label)',
      fontSize: '10px',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#A98874',
      borderRight: '1px solid var(--m-clay-400)',
      paddingRight: '10px'
    }
  }, "Rural Thailand \xB7 2026"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--step-2)',
      lineHeight: 1.5,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontStyle: 'italic'
    }
  }, "A powerful assistant,"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline',
      WebkitBoxDecorationBreak: 'clone',
      boxDecorationBreak: 'clone',
      background: 'linear-gradient(180deg,transparent 62%,var(--m-clay-200) 62%,var(--m-clay-200) 96%,transparent 96%)'
    }
  }, "not a replacement.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '14px',
      fontSize: 'var(--step--1)',
      lineHeight: 1.7,
      color: 'var(--ink-500)'
    }
  }, "The difficult calls belong with the people who trained for them."))), /*#__PURE__*/React.createElement("p", {
    style: {
      ...pEn,
      margin: 0
    }
  }, "A computer can now look into an eye and see trouble coming; ", /*#__PURE__*/React.createElement(Emphasis, null, "the harder, more human question is how we make sure that gift reaches the people who need it most"), ".")), /*#__PURE__*/React.createElement(ConversationBox, {
    label: "Join the conversation",
    questions: ['If a machine reads your results first, who would you want to tell you what they mean?', 'Where you live, which diagnosis is the hardest one to wait for?'],
    note: "Leave your answer in the comments \u2014 we read every one, and print a few in the next issue."
  }), /*#__PURE__*/React.createElement(SourcesNote, {
    footnotes: ['[1] 泰国基层诊所落地实测：AI 影像系统在真实光照与网络条件下的表现下降 — clinical validation studies on smartphone-based DR screening']
  }, "\u53C2\u8003\u6765\u6E90\uFF1A\u300A\u9EBB\u7701\u7406\u5DE5\u79D1\u6280\u8BC4\u8BBA\u300B\uFF1B\u300A\u81EA\u7136\xB7\u79D1\u5B66\u62A5\u544A\u300B\uFF082026\uFF09\uFF1B\u7F8E\u56FD\u773C\u79D1\u5B66\u4F1A\uFF1B\u57FA\u4E8E\u624B\u673A\u7684\u7CD6\u5C3F\u75C5\u89C6\u7F51\u819C\u75C5\u53D8\u7B5B\u67E5\u4E34\u5E8A\u9A8C\u8BC1\u7814\u7A76\u3002\u5B8C\u6574\u5F15\u6587\u53EF\u6309\u9700\u63D0\u4F9B\u3002")), /*#__PURE__*/React.createElement(JournalFooter, null));
}
Object.assign(window, {
  Article001
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wechat/Article001.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wechat/ArticleBody.jsx
try { (() => {
/* 微信公众号 issue 01 — the published house layout.
   WeChat strips classes and external CSS, so everything here is an inline style on a
   <section>/<p>/<img>; no webfonts, no JS, no sticky, no hover. */
function ArticleBody() {
  const {
    ArticleTitle,
    SectionHeading,
    Figure,
    Pullquote,
    Verse,
    Emphasis,
    ConversationBox,
    SourcesNote,
    JournalFooter,
    Label
  } = window.DuchampJournalDesignSystem_a8bf23 || {};
  const pad = {
    padding: '0 var(--sheet-pad-mobile)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--paper)',
      backgroundImage: 'var(--mist-top)',
      backgroundRepeat: 'no-repeat',
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--rule-accent)',
      background: 'var(--wash-3)'
    }
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      ...pad,
      paddingTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "\u7B03\u8C61 Duchamp Journal \xB7 \u7B2C\u4E00\u671F"), /*#__PURE__*/React.createElement(ArticleTitle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hair)',
      margin: 'var(--space-7) 0 var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement(Pullquote, null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      margin: 'var(--space-7) 0 var(--space-5)'
    }
  }, "\u672C\u520A\u7684\u540D\u5B57\u53D6\u81EA\u827A\u672F\u5BB6\u9A6C\u585E\u5C14\xB7\u675C\u5C1A\u3002\u4ED6\u4E00\u751F\u90FD\u5728\u53CD\u5BF9\u4ED6\u6240\u8BF4\u7684\u201C\u89C6\u7F51\u819C\u827A\u672F\u201D\u2014\u2014\u90A3\u7C7B\u4EC5\u4EC5\u53D6\u60A6\u53CC\u773C\u3001\u505C\u7559\u4E8E\u89C6\u89C9\u8868\u5C42\u7684\u521B\u4F5C\u3002\u5728\u4ED6\u770B\u6765\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u771F\u6B63\u7684\u521B\u9020\u5E94\u5F53\u89E6\u52A8\u5FC3\u7075\uFF0C\u800C\u4E0D\u53EA\u662F\u6EE1\u8DB3\u76EE\u5149"), "\u3002\u7528\u8FD9\u4E2A\u60F3\u6CD5\u5F00\u7BC7\u518D\u5408\u9002\u4E0D\u8FC7\u3002\u4E0B\u6587\u6240\u8BB0\u8FF0\u7684\u4EBA\u4EEC\uFF0C\u5C06\u8FD9\u4EFD\u4FE1\u5FF5\u6D3B\u6210\u4E86\u751F\u547D\u672C\u8EAB\uFF1A\u5F53\u5149\u660E\u81EA\u773C\u7738\u4E2D\u6D88\u6563\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u4ED6\u4EEC\u4FBF\u4EE5\u8840\u8089\u4E4B\u8EAF\uFF0C\u4EE5\u6EDA\u70EB\u7684\u5FC3\u9B42\u53BB\u611F\u77E5\u3001\u53BB\u521B\u9020"), "\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      margin: 0
    }
  }, "\u6211\u4EEC\u7684\u521B\u520A\u53F7\uFF0C\u8BB2\u7684\u662F\u4E00\u53F0\u201C\u770B\u8FDB\u201D\u773C\u775B\u3001\u63D0\u524D\u53D1\u73B0\u75BE\u75C5\u7684\u673A\u5668\u3002\u4F46\u89C6\u89C9\u5E76\u4E0D\u662F\u8BA4\u8BC6\u4E16\u754C\u7684\u552F\u4E00\u65B9\u5F0F\u2014\u2014\u4E0B\u9762\u8FD9\u51E0\u4E2A\u4EBA\u5C31\u662F\u8BC1\u660E\uFF1A", /*#__PURE__*/React.createElement(Emphasis, null, "\u5931\u53BB\u89C6\u529B\uFF0C\u5E76\u4E0D\u7B49\u4E8E\u5931\u53BB\u4E00\u5207"), "\u3002"), /*#__PURE__*/React.createElement(SectionHeading, {
    number: "1"
  }, "\u7EA6\u7FF0\xB7\u8D6B\u5C14\uFF1A\u96E8\u6C34\u9012\u6765\u7684\u5929\u5730"), /*#__PURE__*/React.createElement(Figure, {
    ratio: "3 / 4",
    caption: "\u7EA6\u7FF0\xB7\u8D6B\u5C14\uFF08John Hull\uFF09\uFF0C\u66FE\u5728\u4F2F\u660E\u7FF0\u5927\u5B66\u4EFB\u6559\u7684\u795E\u5B66\u5BB6",
    alt: "\u7EA6\u7FF0\xB7\u8D6B\u5C14\u7AD9\u5728\u53F0\u9636\u524D\uFF0C\u624B\u6301\u5BFC\u76F2\u6756"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      margin: '0 0 var(--space-5)'
    }
  }, "1983 \u5E74\uFF0C\u5728\u89C6\u529B\u8870\u9000\u4E86\u51E0\u5341\u5E74\u4E4B\u540E\uFF0C\u82F1\u56FD\u795E\u5B66\u5BB6\u7EA6\u7FF0\xB7\u8D6B\u5C14\uFF08John Hull\uFF09\u5F7B\u5E95\u5931\u660E\u3002\u4ED6\u5F00\u59CB\u5F55\u5236\u4E00\u4EFD\u58F0\u97F3\u65E5\u8BB0\uFF0C\u540E\u6765\u7ED3\u96C6\u51FA\u7248\u4E3A\u300A\u89E6\u6478\u78D0\u77F3\u300B\u3002\u8FD9\u672C\u4E66\u4E4B\u6240\u4EE5\u52A8\u4EBA\uFF0C\u662F\u56E0\u4E3A\u8D6B\u5C14\u65E2\u4E0D\u81EA\u601C\uFF0C\u4E5F\u4E0D\u5047\u88C5\u575A\u5F3A\uFF0C\u4ED6\u53EA\u662F\u5982\u5B9E\u8BB0\u5F55\uFF1A\u8FD9\u4E2A\u4E16\u754C\uFF0C\u5728\u5931\u660E\u4E4B\u540E\uFF0C\u53D8\u6210\u4E86\u4EC0\u4E48\u6837\u5B50\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      margin: 0
    }
  }, "\u4E66\u4E2D\u6700\u4E3A\u4EBA\u52A8\u5BB9\u7684\uFF0C\u662F\u4E00\u573A\u5173\u4E8E\u96E8\u7684\u8BB0\u8FF0\u3002\u67D0\u4E2A\u8584\u66AE\uFF0C\u4ED6\u7AD9\u5728\u655E\u5F00\u7684\u5BB6\u95E8\u53E3\uFF0C\u604D\u7136\u53D1\u89C9\uFF0C", /*#__PURE__*/React.createElement(Emphasis, null, "\u96E8\uFF0C\u5F25\u8865\u4E86\u5931\u660E\u4ECE\u4ED6\u8EAB\u4E0A\u593A\u8D70\u7684\u9988\u8D60"), " \u2014\u2014 \u9877\u523B\u95F4\uFF0C\u96E8\u5C06\u6574\u4E2A\u4E16\u754C\uFF0C\u91CD\u65B0\u5F52\u8FD8\u4E8E\u4ED6\u3002"), /*#__PURE__*/React.createElement(Verse, null), /*#__PURE__*/React.createElement(Pullquote, {
    variant: "rules",
    attribution: "\u2014\u2014\u300A\u89E6\u6478\u78D0\u77F3\u300B\uFF0C1984 \u5E74 7 \u6708 16 \u65E5"
  }, "\u201C\u52B3\u70E6\u8BF8\u4F4D\uFF0C\u4E0D\u5FC5\u5C06\u7EA6\u7FF0\u2018\u5B89\u7F6E\u2019\u4E8E\u4F55\u5904\u3002\u4E0D\u59A8\u95EE\u95EE\u7EA6\u7FF0\uFF0C\u4ED6\u81EA\u5DF1\u60F3\u8981\u5750\u5728\u54EA\u91CC\u3002\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      margin: '0 0 var(--space-5)'
    }
  }, "\u8FD9\u53E5\u8BDD\uFF0C\u51E0\u4E4E\u53EF\u4EE5\u505A\u6574\u672C\u520A\u7269\u7684\u7BB4\u8A00\u3002\u5B83\u548C\u6653\u6653\u544A\u8BC9\u6211\u4EEC\u7684\u8BDD\u51E0\u4E4E\u4E00\u6A21\u4E00\u6837\uFF1A\u8FD9\u4E2A\u7FA4\u4F53\u4E0D\u60F3\u88AB\u201C\u5B89\u6392\u201D\u3001\u88AB\u540C\u60C5\u3002", /*#__PURE__*/React.createElement(Emphasis, null, "\u4ED6\u4EEC\u60F3\u88AB\u5E73\u7B49\u5730\u95EE\u4E00\u53E5\u3001\u88AB\u9080\u8BF7\u8FDB\u5BF9\u8BDD\u91CC"), "\u3002"), /*#__PURE__*/React.createElement(SectionHeading, {
    number: "2"
  }, "\u6C88\u51B0\u5C71\uFF1A\u4EE5\u5FC3\u4E3A\u7B14\uFF0C\u843D\u58A8\u6210\u753B"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif-sc)',
      fontSize: 'var(--step-0)',
      lineHeight: 'var(--lh-reading)',
      color: 'var(--ink-700)',
      margin: '0 0 var(--space-5)'
    }
  }, "\u8D6B\u5C14\u7684\u601D\u7D22\uFF0C\u5728\u4E1C\u65B9\u571F\u5730\u4E0A\uFF0C\u4E5F\u6709\u7740\u9065\u9065\u76F8\u5E94\u7684\u56DE\u54CD\u3002\u6C88\u51B0\u5C71\uFF081934\u20132014\uFF09\u751F\u4E8E\u798F\u5EFA\u8BCF\u5B89\uFF0C\u4E16\u4EE3\u4E66\u9999\uFF0C\u4E66\u753B\u4F20\u5BB6\u3002\u4ED6\u628A\u5BA3\u7EB8\u5F53\u4F5C\u8BB0\u5FC6\u4E2D\u7684\u68CB\u76D8\uFF1A", /*#__PURE__*/React.createElement(Emphasis, null, "\u4E00\u683C\u4E00\u683C\u8BB0\u4E0B\u7684\u5750\u6807\uFF0C\u5C31\u662F\u843D\u7B14\u7684\u4F4D\u7F6E"), "\u3002\u4ED6\u79F0\u4E4B\u4E3A\u201C\u5FC3\u753B\u201D\u3002"), /*#__PURE__*/React.createElement(Figure, {
    ratio: "3 / 4",
    tone: "full",
    caption: "\u6C88\u51B0\u5C71\u300A\u8377\u9B42\u300B\uFF0C2008 \u5E74\u5199\uFF08110\xD7200cm\uFF09",
    alt: "\u6C34\u58A8\u8377\u82B1\u7ACB\u8F74"
  }), /*#__PURE__*/React.createElement(Verse, {
    lang: "en",
    lines: ['Sight is but one instrument', 'in the orchestra of perception.'],
    attribution: ""
  }), /*#__PURE__*/React.createElement(ConversationBox, null), /*#__PURE__*/React.createElement(SourcesNote, null)), /*#__PURE__*/React.createElement(JournalFooter, null));
}
Object.assign(window, {
  ArticleBody
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wechat/ArticleBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wechat/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wechat/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.BrailleDots = __ds_scope.BrailleDots;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.ArticleTitle = __ds_scope.ArticleTitle;

__ds_ns.ConversationBox = __ds_scope.ConversationBox;

__ds_ns.Emphasis = __ds_scope.Emphasis;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.JournalFooter = __ds_scope.JournalFooter;

__ds_ns.Pullquote = __ds_scope.Pullquote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SourcesNote = __ds_scope.SourcesNote;

__ds_ns.Verse = __ds_scope.Verse;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.AudioPlayer = __ds_scope.AudioPlayer;

__ds_ns.ModeSwitch = __ds_scope.ModeSwitch;

__ds_ns.TactileCard = __ds_scope.TactileCard;

})();
