import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import"./Action-CBTzAior.js";import"./Answer-BBzPdijR.js";import"./Button-_JJu6MQG.js";import"./Chat-Cyjf59KT.js";import"./Icon-CA65L85m.js";import"./Input-CtlMo02g.js";import"./Menu-CSx_B6r2.js";import"./Message-CfDfO-e0.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-wiuCiDYb.js";import{b as un,i as _,u as dn,a as j,s as g,U as pn}from"./UI-DeTupLRk.js";import mn from"./UI.stories-Cf2NuhGg.js";import{A as $,a as fn}from"./AnimatedCard-C5AOF1tq.js";import{r as U}from"./index-DJO9vBfz.js";import{a as gn,i as F,b as B,c as bn,d as jn,e as Un,g as hn}from"./_baseIteratee-BtgBxFQK.js";import{S as D,a as cn}from"./_overArg-G87nO9dZ.js";import{i as vn,k as xn,a as on,b as yn,c as kn}from"./keys-BpNir0K6.js";import{m as O,D as P}from"./Deck-DSxpEDGv.js";import{m as G}from"./proxy-efew5eJf.js";import"./clsx-B-dksMZM.js";import"./Chat.stories-DJ68QAO_.js";import"./NumeralFace-CjiQeN-M.js";import"./index-B8aIlgge.js";var L=D?D.isConcatSpreadable:void 0;function wn(e){return cn(e)||vn(e)||!!(L&&e&&e[L])}function En(e,n,a,c,i){var r=-1,o=e.length;for(a||(a=wn),i||(i=[]);++r<o;){var s=e[r];a(s)?gn(i,s):i[i.length]=s}return i}function Cn(e){return function(n,a,c){for(var i=-1,r=Object(n),o=c(n),s=o.length;s--;){var l=o[++i];if(a(r[l],l,r)===!1)break}return n}}var Mn=Cn();function Sn(e,n){return e&&Mn(e,n,xn)}function Bn(e,n){return function(a,c){if(a==null)return a;if(!on(a))return e(a,c);for(var i=a.length,r=-1,o=Object(a);++r<i&&c(o[r],r,o)!==!1;);return a}}var An=Bn(Sn);function _n(e,n){var a=-1,c=on(e)?Array(e.length):[];return An(e,function(i,r,o){c[++a]=n(i,r,o)}),c}function $n(e,n){var a=e.length;for(e.sort(n);a--;)e[a]=e[a].value;return e}function Fn(e,n){if(e!==n){var a=e!==void 0,c=e===null,i=e===e,r=F(e),o=n!==void 0,s=n===null,l=n===n,u=F(n);if(!s&&!u&&!r&&e>n||r&&o&&l&&!s&&!u||c&&o&&l||!a&&l||!i)return 1;if(!c&&!r&&!u&&e<n||u&&a&&i&&!c&&!r||s&&a&&i||!o&&i||!l)return-1}return 0}function Dn(e,n,a){for(var c=-1,i=e.criteria,r=n.criteria,o=i.length,s=a.length;++c<o;){var l=Fn(i[c],r[c]);if(l){if(c>=s)return l;var u=a[c];return l*(u=="desc"?-1:1)}}return e.index-n.index}function On(e,n,a){n.length?n=B(n,function(r){return cn(r)?function(o){return bn(o,r.length===1?r[0]:r)}:r}):n=[yn];var c=-1;n=B(n,kn(jn));var i=_n(e,function(r,o,s){var l=B(n,function(u){return u(r)});return{criteria:l,index:++c,value:r}});return $n(i,function(r,o){return Dn(r,o,a)})}var Pn=un(function(e,n){if(e==null)return[];var a=n.length;return a>1&&_(e,n[0],n[1])?n=[]:a>2&&_(n[0],n[1],n[2])&&(n=[n[0]]),On(e,En(n),[])});function Gn(e,n){return Un(e,n)}const Ln={isEqual:Gn,gt:(e,n)=>e>n,gte:(e,n)=>e>=n,lt:(e,n)=>e<n,lte:(e,n)=>e<=n,"%":(e,n,a)=>e%n===a},N=(e,n)=>{var u;const{prop:a,value:c}=e,i=e.args||[];let{fn:r}=e,o=!1,s;r.startsWith("!")&&(r=r.slice(1),o=!0);const l=Ln[r];if(!l)throw new Error(`Predicate fn not found: ${r}`);if(a.startsWith("[")){if(!Array.isArray(n))throw new Error(`Array predicate is used on a non-array context: ${a}`);const p=(u=a.match(/^\[(\w+)\]/))==null?void 0:u[1];if(!p||!n[p])throw new Error(`Invalid predicate aggr: ${String(p)}`);const h=a.replace(`[${p}].`,"");s=n[p](v=>{const x=l(hn(v,h),...i,c);return o?!x:x})}else s=l(n[a],c),o&&(s=!s);return s},sn=(e,n,a="and")=>{if(a==="and")return e.every(c=>N(c,n));if(a==="or")return e.some(c=>N(c,n));throw new Error(`Invalid predicate join strategy: ${a}`)},A=(e,n)=>e.filter(a=>sn(a.predicates,n,a.strategy)),V="data:image/svg+xml,%3csvg%20width='926'%20height='657'%20viewBox='0%200%20926%20657'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_f_1_2862)'%3e%3cellipse%20cx='463'%20cy='327'%20rx='339'%20ry='209'%20fill='%2338302B'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_1_2862'%20x='0'%20y='-6'%20width='926'%20height='666'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='62'%20result='effect1_foregroundBlur_1_2862'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e",Nn=""+new URL("selected-star-CyV0-aIB.svg",import.meta.url).href,Vn=e=>{const n=["served","faceUp"];return e.elevated&&n.push("elevated"),e.shaking&&n.push("shaking"),n},ln=({onTrigger:e})=>{const n=dn(),a=j(t=>t.MemoCards.cards),c=j(t=>t.MemoCards.validMatchers),i=j(t=>t.MemoCards.invalidMatchers),r=j(t=>t.MemoCards.completedMatchers),o=j(t=>t.MemoCards.validate),[s,l]=U.useState(!1),u=a.filter(t=>t.status==="decked"),p=a.filter(t=>t.status==="served"||t.status==="selected"),h=a.filter(t=>t.status==="selected"),v=a.filter(t=>t.status==="discarded"),x=t=>{t.elevated?n(g.actions.lower([t.id])):(n(g.actions.elevate([t.id])),e("elevate",t))};return U.useEffect(()=>{if(o){const t=p.filter(f=>f.status==="selected"),[m]=A(c,t),[b]=A(i,t),[S]=A(r,p.filter(f=>f.status!=="selected"));if(m&&b||!m&&!b)throw new Error("Validation error");m&&n(g.actions.validate(t.map(f=>({id:f.id,correct:!0})))),(b||!S)&&e((m||b).next),b&&n(g.actions.validate(t.map(f=>({id:f.id,correct:!sn(b.predicates,[f])})))),setTimeout(()=>{m?(n(g.actions.discard(t.map(f=>f.id))),S&&e(S.next)):n(g.actions.deselect())},2e3),n(g.actions.setState({validate:void 0}))}},[r,n,i,e,p,c,o]),U.useEffect(()=>{l(!0)},[p]),d.jsxs("div",{className:"relative flex h-full w-full px-8 py-20",children:[d.jsxs("div",{className:"relative z-10 flex flex-1 items-center justify-center",children:[d.jsx(G.div,{className:"grid grid-cols-4 gap-6 p-10",children:p.reverse().map((t,m)=>t.status==="selected"?d.jsx("div",{},t.id):U.createElement($,{...t,variants:O,layoutId:t.id,animate:Vn(t),transition:s?{layout:{delay:m*.2}}:void 0,custom:m,onClick:()=>x(t),onLayoutAnimationComplete:m===p.length?()=>l(!1):void 0,key:t.id,style:s?{zIndex:p.length-m}:void 0}))}),h.length>0&&d.jsxs("div",{className:"absolute inset-0 z-50 flex items-center justify-center gap-x-10",children:[d.jsx(G.div,{initial:{opacity:0,scale:.5,rotate:-15},animate:{opacity:1,scale:1,rotate:0,transition:{duration:.6}},className:"absolute -inset-10",style:{background:`url(${Nn}) no-repeat center center, url(${V}) no-repeat center center`,mask:`url(${V}) center center`}}),Pn(h,t=>t.numeral.count).map((t,m)=>U.createElement($,{variants:O,...t,animate:["faceUp","selected"],layoutId:t.id,transition:{layout:{duration:.2}},key:m}))]})]}),d.jsxs("div",{className:"flex flex-col justify-between",children:[d.jsx("div",{children:u.length>0&&d.jsx(P,{cards:u})}),d.jsx("div",{children:v.length>0&&d.jsx(P,{variant:"discard",cards:v})})]})]})};ln.__docgenInfo={description:"",methods:[],displayName:"MemoCards"};delete fn.faceUp.scale;const{chat:zn,progressBar:qn}=mn.args,me={title:"MemoCards/MemoCards",component:ln,tags:["!autodocs"],args:{onTrigger:()=>{}},decorators:e=>d.jsx("div",{className:"h-[657px] w-[1280px] shadow-2xl",children:d.jsx(pn,{chat:zn,progressBar:qn,children:d.jsx(e,{})})})},y={args:{deck:[{},{},{},{},{},{}]}},k={args:{deck:[{},{},{},{},{},{}],cards:[{},{},{},{},{},{},{},{}]}},w={args:{deck:[{},{},{},{},{},{}],cards:[{initial:"faceUp",numeral:{object:"apples",count:13}},{initial:"faceUp",numeral:{object:"corn",count:2}},{initial:"faceUp",numeral:{object:"oranges",count:44}},{initial:"faceUp",numeral:{object:"corn",count:21}},{initial:"faceUp",numeral:{object:"carrots",count:22}},{initial:"faceUp",numeral:{object:"oranges",count:9}},{initial:"faceUp",numeral:{object:"apples",count:154}},{initial:"faceUp",numeral:{object:"carrots",count:3}}]}},E={args:{deck:[{},{},{},{},{},{}],cards:[{initial:"faceUp",numeral:{object:"apples",count:13}},{initial:"faceUp",numeral:{object:"corn",count:2}},{initial:["faceUp","elevated"],elevated:!0,numeral:{object:"oranges",count:44}},{initial:"faceUp",numeral:{object:"corn",count:21}},{initial:["faceUp","elevated"],elevated:!0,numeral:{object:"carrots",count:22}},{initial:"faceUp",numeral:{object:"oranges",count:9}},{initial:"faceUp",numeral:{object:"apples",count:154}},{initial:"faceUp",numeral:{object:"carrots",count:3}}]}},C={args:{deck:[{},{},{},{},{},{}],cards:[{initial:"faceUp",numeral:{object:"apples",count:13}},{initial:"faceUp",numeral:{object:"corn",count:2}},{initial:"faceUp",numeral:{object:"oranges",count:44}},{initial:"faceUp",numeral:{object:"corn",count:21}},{initial:"faceUp",numeral:{object:"carrots",count:22}},{initial:"faceUp",numeral:{object:"oranges",count:9}},{initial:"faceUp",numeral:{object:"apples",count:154}},{initial:"faceUp",numeral:{object:"carrots",count:3}}],selected:[{initial:["faceUp","selected"],correct:!0,numeral:{object:"oranges",count:44}},{initial:["faceUp","selected"],correct:!0,numeral:{object:"carrots",count:22}},{initial:["faceUp","selected"],correct:!1,numeral:{object:"carrots",count:3}}]}},M={args:{deck:[{},{},{},{},{},{}],cards:[{initial:"faceUp",numeral:{object:"apples",count:13}},{initial:"faceUp",numeral:{object:"corn",count:2}},{initial:"faceUp",numeral:{object:"oranges",count:44}},{initial:"faceUp",numeral:{object:"corn",count:21}},{initial:"faceUp",numeral:{object:"carrots",count:22}},{initial:"faceUp",numeral:{object:"oranges",count:9}},{initial:"faceUp",numeral:{object:"apples",count:154}},{initial:"faceUp",numeral:{object:"carrots",count:3}}],discard:[{},{},{},{},{},{}]}};var z,q,W;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    deck: [{}, {}, {}, {}, {}, {}]
  }
}`,...(W=(q=y.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var H,J,K;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    deck: [{}, {}, {}, {}, {}, {}],
    cards: [{}, {}, {}, {}, {}, {}, {}, {}]
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    deck: [{}, {}, {}, {}, {}, {}],
    cards: [{
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 13
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 2
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 44
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 21
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 22
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 9
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 154
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 3
      }
    }]
  }
}`,...(X=(R=w.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,T;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    deck: [{}, {}, {}, {}, {}, {}],
    cards: [{
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 13
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 2
      }
    }, {
      initial: ['faceUp', 'elevated'],
      elevated: true,
      numeral: {
        object: 'oranges',
        count: 44
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 21
      }
    }, {
      initial: ['faceUp', 'elevated'],
      elevated: true,
      numeral: {
        object: 'carrots',
        count: 22
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 9
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 154
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 3
      }
    }]
  }
}`,...(T=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:T.source}}};var I,nn,en;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    deck: [{}, {}, {}, {}, {}, {}],
    cards: [{
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 13
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 2
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 44
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 21
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 22
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 9
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 154
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 3
      }
    }],
    selected: [{
      initial: ['faceUp', 'selected'],
      correct: true,
      numeral: {
        object: 'oranges',
        count: 44
      }
    }, {
      initial: ['faceUp', 'selected'],
      correct: true,
      numeral: {
        object: 'carrots',
        count: 22
      }
    }, {
      initial: ['faceUp', 'selected'],
      correct: false,
      numeral: {
        object: 'carrots',
        count: 3
      }
    }]
  }
}`,...(en=(nn=C.parameters)==null?void 0:nn.docs)==null?void 0:en.source}}};var an,tn,rn;M.parameters={...M.parameters,docs:{...(an=M.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: {
    deck: [{}, {}, {}, {}, {}, {}],
    cards: [{
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 13
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 2
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 44
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'corn',
        count: 21
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 22
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'oranges',
        count: 9
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'apples',
        count: 154
      }
    }, {
      initial: 'faceUp',
      numeral: {
        object: 'carrots',
        count: 3
      }
    }],
    discard: [{}, {}, {}, {}, {}, {}]
  }
}`,...(rn=(tn=M.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const fe=["Empty","Dealing","Dealt","Elevated","Evaluated","Discarded"];export{k as Dealing,w as Dealt,M as Discarded,E as Elevated,y as Empty,C as Evaluated,fe as __namedExportsOrder,me as default};
