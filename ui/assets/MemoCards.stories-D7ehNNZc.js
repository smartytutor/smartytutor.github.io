import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{b as ue,i as _,u as oe,a as g,s as v,P as le,p as pe,U as me}from"./UI-N3NDj1q2.js";import"./Action-CBTzAior.js";import"./Answer-BBzPdijR.js";import"./Button-_JJu6MQG.js";import"./Chat-Cyjf59KT.js";import"./Icon-CA65L85m.js";import"./Input-CtlMo02g.js";import"./Menu-CSx_B6r2.js";import"./Message-CfDfO-e0.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-wiuCiDYb.js";import fe from"./UI.stories-MN7R-trK.js";import{A as $,a as ve}from"./AnimatedCard-C5AOF1tq.js";import{r as b}from"./index-DJO9vBfz.js";import{a as ke,i as F,b as B,c as ge,d as be,e as je,g as Ue}from"./_baseIteratee-BtgBxFQK.js";import{S as P,a as re}from"./_overArg-G87nO9dZ.js";import{i as he,k as xe,a as ce,b as ye,c as we}from"./keys-BpNir0K6.js";import{m as D,D as O}from"./Deck-DSxpEDGv.js";import{m as G}from"./proxy-efew5eJf.js";import"./clsx-B-dksMZM.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./Chat.stories-DJ68QAO_.js";import"./NumeralFace-CjiQeN-M.js";import"./index-B8aIlgge.js";var L=P?P.isConcatSpreadable:void 0;function Ee(t){return re(t)||he(t)||!!(L&&t&&t[L])}function Ce(t,e,n,r,c){var a=-1,d=t.length;for(n||(n=Ee),c||(c=[]);++a<d;){var i=t[a];n(i)?ke(c,i):c[c.length]=i}return c}function Me(t){return function(e,n,r){for(var c=-1,a=Object(e),d=r(e),i=d.length;i--;){var u=d[++c];if(n(a[u],u,a)===!1)break}return e}}var Se=Me();function Be(t,e){return t&&Se(t,e,xe)}function Ae(t,e){return function(n,r){if(n==null)return n;if(!ce(n))return t(n,r);for(var c=n.length,a=-1,d=Object(n);++a<c&&r(d[a],a,d)!==!1;);return n}}var _e=Ae(Be);function $e(t,e){var n=-1,r=ce(t)?Array(t.length):[];return _e(t,function(c,a,d){r[++n]=e(c,a,d)}),r}function Fe(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}function Pe(t,e){if(t!==e){var n=t!==void 0,r=t===null,c=t===t,a=F(t),d=e!==void 0,i=e===null,u=e===e,l=F(e);if(!i&&!l&&!a&&t>e||a&&d&&u&&!i&&!l||r&&d&&u||!n&&u||!c)return 1;if(!r&&!a&&!l&&t<e||l&&n&&c&&!r&&!a||i&&n&&c||!d&&c||!u)return-1}return 0}function De(t,e,n){for(var r=-1,c=t.criteria,a=e.criteria,d=c.length,i=n.length;++r<d;){var u=Pe(c[r],a[r]);if(u){if(r>=i)return u;var l=n[r];return u*(l=="desc"?-1:1)}}return t.index-e.index}function Oe(t,e,n){e.length?e=B(e,function(a){return re(a)?function(d){return ge(d,a.length===1?a[0]:a)}:a}):e=[ye];var r=-1;e=B(e,we(be));var c=$e(t,function(a,d,i){var u=B(e,function(l){return l(a)});return{criteria:u,index:++r,value:a}});return Fe(c,function(a,d){return De(a,d,n)})}var Ge=ue(function(t,e){if(t==null)return[];var n=e.length;return n>1&&_(t,e[0],e[1])?e=[]:n>2&&_(e[0],e[1],e[2])&&(e=[e[0]]),Oe(t,Ce(e),[])});function Le(t,e){return je(t,e)}const Ne={isEqual:Le,gt:(t,e)=>t>e,gte:(t,e)=>t>=e,lt:(t,e)=>t<e,lte:(t,e)=>t<=e,"%":(t,e,n)=>t%e===n},N=(t,e)=>{var l;const{prop:n,value:r}=t,c=t.args||[];let{fn:a}=t,d=!1,i;a.startsWith("!")&&(a=a.slice(1),d=!0);const u=Ne[a];if(!u)throw new Error(`Predicate fn not found: ${a}`);if(n.startsWith("[")){if(!Array.isArray(e))throw new Error(`Array predicate is used on a non-array context: ${n}`);const p=(l=n.match(/^\[(\w+)\]/))==null?void 0:l[1];if(!p||!e[p])throw new Error(`Invalid predicate aggr: ${String(p)}`);const j=n.replace(`[${p}].`,"");i=e[p](U=>{const h=u(Ue(U,j),...c,r);return d?!h:h})}else i=u(e[n],r),d&&(i=!i);return i},de=(t,e,n="and")=>{if(n==="and")return t.every(r=>N(r,e));if(n==="or")return t.some(r=>N(r,e));throw new Error(`Invalid predicate join strategy: ${n}`)},A=(t,e)=>t.filter(n=>de(n.predicates,e,n.strategy)),V="data:image/svg+xml,%3csvg%20width='926'%20height='657'%20viewBox='0%200%20926%20657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_1_2862)'%3e%3cellipse%20cx='463'%20cy='327'%20rx='339'%20ry='209'%20fill='%2338302B'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_1_2862'%20x='0'%20y='-6'%20width='926'%20height='666'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='62'%20result='effect1_foregroundBlur_1_2862'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Ve=""+new URL("selected-star-CyV0-aIB.svg",import.meta.url).href,ze=t=>{const e=["served","faceUp"];return t.elevated&&e.push("elevated"),t.shaking&&e.push("shaking"),e},ie=({onTrigger:t})=>{const e=oe(),n=g(s=>s.MemoCards.cards),r=g(s=>s.MemoCards.validMatchers),c=g(s=>s.MemoCards.invalidMatchers),a=g(s=>s.MemoCards.completedMatchers),d=g(s=>s.MemoCards.validate),[i,u]=b.useState(!1),l=n.filter(s=>s.status==="decked"),p=n.filter(s=>s.status==="served"||s.status==="selected"),j=n.filter(s=>s.status==="selected"),U=n.filter(s=>s.status==="discarded"),h=s=>{s.elevated?e(v.actions.lower([s.id])):(e(v.actions.elevate([s.id])),t("elevate",s))};return b.useEffect(()=>{if(d){const s=p.filter(f=>f.status==="selected"),[m]=A(r,s),[k]=A(c,s),[S]=A(a,p.filter(f=>f.status!=="selected"));if(m&&k||!m&&!k)throw new Error("Validation error");m&&e(v.actions.validate(s.map(f=>({id:f.id,correct:!0})))),(k||!S)&&t((m||k).next),k&&e(v.actions.validate(s.map(f=>({id:f.id,correct:!de(k.predicates,[f])})))),setTimeout(()=>{m?(e(v.actions.discard(s.map(f=>f.id))),S&&t(S.next)):e(v.actions.deselect())},2e3),e(v.actions.setState({validate:void 0}))}},[a,e,c,t,p,r,d]),b.useEffect(()=>{u(!0)},[p]),o.jsxs("div",{className:"relative flex h-full w-full px-8 py-20",children:[o.jsxs("div",{className:"relative z-10 flex flex-1 items-center justify-center",children:[o.jsx(G.div,{className:"grid grid-cols-4 gap-6 p-10",children:p.reverse().map((s,m)=>s.status==="selected"?o.jsx("div",{},s.id):b.createElement($,{...s,variants:D,layoutId:s.id,animate:ze(s),transition:i?{layout:{delay:m*.2}}:void 0,custom:m,onClick:()=>h(s),onLayoutAnimationComplete:m===p.length?()=>u(!1):void 0,key:s.id,style:i?{zIndex:p.length-m}:void 0}))}),j.length>0&&o.jsxs("div",{className:"absolute inset-0 z-50 flex items-center justify-center gap-x-10",children:[o.jsx(G.div,{initial:{opacity:0,scale:.5,rotate:-15},animate:{opacity:1,scale:1,rotate:0,transition:{duration:.6}},className:"absolute -inset-10",style:{background:`url(${Ve}) no-repeat center center, url(${V}) no-repeat center center`,mask:`url(${V}) center center`}}),Ge(j,s=>s.numeral.count).map((s,m)=>b.createElement($,{variants:D,...s,animate:["faceUp","selected"],layoutId:s.id,transition:{layout:{duration:.2}},key:m}))]})]}),o.jsxs("div",{className:"flex flex-col justify-between",children:[o.jsx("div",{children:l.length>0&&o.jsx(O,{cards:l})}),o.jsx("div",{children:U.length>0&&o.jsx(O,{variant:"discard",cards:U})})]})]})};ie.__docgenInfo={description:"",methods:[],displayName:"MemoCards"};delete ve.faceUp.scale;const{chat:qe,progressBar:We}=fe.args,vt={title:"MemoCards/MemoCards",component:ie,tags:["!autodocs"],args:{onTrigger:()=>{}},decorators:(t,e)=>o.jsx(le,{store:pe({MemoCards:e.parameters.store}),children:o.jsx("div",{className:"h-[657px] w-[1280px] shadow-2xl",children:o.jsx(me,{chat:qe,progressBar:We,children:o.jsx(t,{})})})})},x={parameters:{store:{cards:[{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"}]}}},y={parameters:{store:{cards:[{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"served"},{status:"served"},{status:"served"},{status:"served"},{status:"served"},{status:"served"},{status:"served"},{status:"served"}]}}},w={parameters:{store:{cards:[{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"served",initial:"faceUp",numeral:{object:"apples",count:13}},{status:"served",initial:"faceUp",numeral:{object:"corn",count:2}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:44}},{status:"served",initial:"faceUp",numeral:{object:"corn",count:21}},{status:"served",initial:"faceUp",numeral:{object:"carrots",count:22}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:9}},{status:"served",initial:"faceUp",numeral:{object:"apples",count:154}},{status:"served",initial:"faceUp",numeral:{object:"carrots",count:3}}]}}},E={parameters:{store:{cards:[{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"served",initial:"faceUp",numeral:{object:"apples",count:13}},{status:"served",initial:["faceUp","elevated"],elevated:!0,numeral:{object:"corn",count:2}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:44}},{status:"served",initial:"faceUp",numeral:{object:"corn",count:21}},{status:"served",initial:"faceUp",numeral:{object:"carrots",count:22}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:9}},{status:"served",initial:["faceUp","elevated"],elevated:!0,numeral:{object:"apples",count:154}},{status:"served",initial:"faceUp",numeral:{object:"carrots",count:3}}]}}},C={parameters:{store:{cards:[{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"served",initial:"faceUp",numeral:{object:"apples",count:13}},{status:"selected",initial:["faceUp","selected"],correct:!0,numeral:{object:"corn",count:2}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:44}},{status:"served",initial:"faceUp",numeral:{object:"corn",count:21}},{status:"selected",initial:["faceUp","selected"],correct:!0,numeral:{object:"carrots",count:22}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:9}},{status:"served",initial:"faceUp",numeral:{object:"apples",count:154}},{status:"selected",initial:["faceUp","selected"],correct:!1,numeral:{object:"carrots",count:3}}]}}},M={parameters:{store:{cards:[{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"decked"},{status:"served",initial:"faceUp",numeral:{object:"apples",count:13}},{status:"discarded",numeral:{object:"corn",count:2}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:44}},{status:"served",initial:"faceUp",numeral:{object:"corn",count:21}},{status:"discarded",numeral:{object:"carrots",count:22}},{status:"served",initial:"faceUp",numeral:{object:"oranges",count:9}},{status:"served",initial:"faceUp",numeral:{object:"apples",count:154}},{status:"discarded",numeral:{object:"carrots",count:3}}]}}};var z,q,W;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    store: {
      cards: [{
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }]
    }
  }
}`,...(W=(q=x.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var H,J,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    store: {
      cards: [{
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }, {
        status: 'served'
      }]
    }
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    store: {
      cards: [{
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 13
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'corn',
          count: 2
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 44
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'corn',
          count: 21
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'carrots',
          count: 22
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 9
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 154
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'carrots',
          count: 3
        }
      }]
    }
  }
}`,...(X=(R=w.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,T;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    store: {
      cards: [{
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 13
        }
      }, {
        status: 'served',
        initial: ['faceUp', 'elevated'],
        elevated: true,
        numeral: {
          object: 'corn',
          count: 2
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 44
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'corn',
          count: 21
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'carrots',
          count: 22
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 9
        }
      }, {
        status: 'served',
        initial: ['faceUp', 'elevated'],
        elevated: true,
        numeral: {
          object: 'apples',
          count: 154
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'carrots',
          count: 3
        }
      }]
    }
  }
}`,...(T=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:T.source}}};var I,ee,te;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    store: {
      cards: [{
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 13
        }
      }, {
        status: 'selected',
        initial: ['faceUp', 'selected'],
        correct: true,
        numeral: {
          object: 'corn',
          count: 2
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 44
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'corn',
          count: 21
        }
      }, {
        status: 'selected',
        initial: ['faceUp', 'selected'],
        correct: true,
        numeral: {
          object: 'carrots',
          count: 22
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 9
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 154
        }
      }, {
        status: 'selected',
        initial: ['faceUp', 'selected'],
        correct: false,
        numeral: {
          object: 'carrots',
          count: 3
        }
      }]
    }
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,se,ae;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    store: {
      cards: [{
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'decked'
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 13
        }
      }, {
        status: 'discarded',
        numeral: {
          object: 'corn',
          count: 2
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 44
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'corn',
          count: 21
        }
      }, {
        status: 'discarded',
        numeral: {
          object: 'carrots',
          count: 22
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'oranges',
          count: 9
        }
      }, {
        status: 'served',
        initial: 'faceUp',
        numeral: {
          object: 'apples',
          count: 154
        }
      }, {
        status: 'discarded',
        numeral: {
          object: 'carrots',
          count: 3
        }
      }]
    }
  }
}`,...(ae=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const kt=["Empty","Dealing","Dealt","Elevated","Evaluated","Discarded"];export{y as Dealing,w as Dealt,M as Discarded,E as Elevated,x as Empty,C as Evaluated,kt as __namedExportsOrder,vt as default};
