import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{A}from"./Action-z0lThcuV.js";import{B as K}from"./Button-DbOat5xA.js";import{M as V,u as D,P as W,a as Y,L as q,C as J,m as Q,H as M}from"./Chat.stories-BLLYpCYy.js";import{r}from"./index-DJO9vBfz.js";import{c as X}from"./clsx-B-dksMZM.js";import{I as Z}from"./Icon-CA65L85m.js";import{M as ee}from"./Menu-JHksP9q_.js";import{P as te}from"./ProgressBar-CG3DluMp.js";import{S as se}from"./Smartik-wiuCiDYb.js";import"./Answer-CRltBUUP.js";import"./Message-Cm9NWLDk.js";class re extends r.Component{getSnapshotBeforeUpdate(c){const o=this.props.childRef.current;if(o&&c.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=o.offsetHeight||0,n.width=o.offsetWidth||0,n.top=o.offsetTop,n.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function oe({children:t,isPresent:c}){const o=r.useId(),n=r.useRef(null),p=r.useRef({width:0,height:0,top:0,left:0}),{nonce:m}=r.useContext(V);return r.useInsertionEffect(()=>{const{width:i,height:s,top:f,left:h}=p.current;if(c||!n.current||!i||!s)return;n.current.dataset.motionPopId=o;const a=document.createElement("style");return m&&(a.nonce=m),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[c]),e.jsx(re,{isPresent:c,childRef:n,sizeRef:p,children:r.cloneElement(t,{ref:n})})}const ne=({children:t,initial:c,isPresent:o,onExitComplete:n,custom:p,presenceAffectsLayout:m,mode:i})=>{const s=D(ae),f=r.useId(),h=r.useCallback(d=>{s.set(d,!0);for(const u of s.values())if(!u)return;n&&n()},[s,n]),a=r.useMemo(()=>({id:f,initial:c,isPresent:o,custom:p,onExitComplete:h,register:d=>(s.set(d,!1),()=>s.delete(d))}),m?[Math.random(),h]:[o,h]);return r.useMemo(()=>{s.forEach((d,u)=>s.set(u,!1))},[o]),r.useEffect(()=>{!o&&!s.size&&n&&n()},[o]),i==="popLayout"&&(t=e.jsx(oe,{isPresent:o,children:t})),e.jsx(W.Provider,{value:a,children:t})};function ae(){return new Map}const y=t=>t.key||"";function z(t){const c=[];return r.Children.forEach(t,o=>{r.isValidElement(o)&&c.push(o)}),c}const ie=({children:t,exitBeforeEnter:c,custom:o,initial:n=!0,onExitComplete:p,presenceAffectsLayout:m=!0,mode:i="sync"})=>{const s=r.useMemo(()=>z(t),[t]),f=s.map(y),h=r.useRef(!0),a=r.useRef(s),d=D(()=>new Map),[u,O]=r.useState(s),[v,b]=r.useState(s);Y(()=>{h.current=!1,a.current=s;for(let x=0;x<v.length;x++){const l=y(v[x]);f.includes(l)?d.delete(l):d.get(l)!==!0&&d.set(l,!1)}},[v,f.length,f.join("-")]);const w=[];if(s!==u){let x=[...s];for(let l=0;l<v.length;l++){const g=v[l],N=y(g);f.includes(N)||(x.splice(l,0,g),w.push(g))}i==="wait"&&w.length&&(x=w),b(z(x)),O(s);return}const{forceRender:R}=r.useContext(q);return e.jsx(e.Fragment,{children:v.map(x=>{const l=y(x),g=s===v||f.includes(l),N=()=>{if(d.has(l))d.set(l,!0);else return;let I=!0;d.forEach(F=>{F||(I=!1)}),I&&(R==null||R(),b(a.current),p&&p())};return e.jsx(ne,{isPresent:g,initial:!h.current||n?void 0:!1,custom:g?void 0:o,presenceAffectsLayout:m,mode:i,onExitComplete:g?void 0:N,children:x},l)})})},E=280,G=({chatProps:t,progressBarProps:c,action:o,children:n})=>{const p=r.useRef(null),m=r.useRef(null),[i,s]=r.useState(),f=a=>{const u=-a.target.scrollTop;i!=="history"&&u>0&&s("history"),i==="history"&&u<=0&&s("default"),m.current&&u<E/1.5&&(m.current.style.transform=`translateY(${u/(E*3)*100}%)`,m.current.style.opacity=String(1-u/(E/1.5)))},h=()=>{var a;return(a=p.current)==null?void 0:a.scrollTo({top:0,behavior:"smooth"})};return r.useEffect(()=>{p.current&&i==="default"&&(p.current.scrollTop=0)},[t.messages.length,i]),e.jsxs("div",{className:"flex h-full overflow-hidden",children:[e.jsxs("div",{className:"relative flex w-[352px] flex-col pl-4",children:[e.jsx("div",{className:"-ml-4",children:e.jsx(ee,{})}),e.jsx("div",{className:"no-scrollbar mask-scroll relative z-10 flex flex-1 flex-col-reverse overflow-scroll pb-[280px] pt-[1vh]",onScroll:f,ref:p,children:e.jsx(J,{variant:i,messages:t.messages||[]})}),e.jsx(se,{ref:m,className:"absolute bottom-0 left-0 ml-20 h-[280px] self-start"}),e.jsx("div",{className:X("absolute left-1/2 top-full z-20 ml-4 -translate-x-1/2 opacity-0 transition duration-200",i==="history"&&"-translate-y-full opacity-100"),children:e.jsx(A,{children:e.jsxs(K,{variant:"cta",onClick:h,className:"whitespace-nowrap",children:[e.jsx(Z,{name:"play",size:24}),"Продолжить урок"]})})})]}),e.jsxs("div",{className:"pointer-events-none relative flex flex-1 flex-col items-center",children:[e.jsx("div",{className:"pointer-events-auto absolute top-1 z-10",children:e.jsx(te,{...c})}),e.jsx("div",{className:"pointer-events-auto flex h-full w-full items-center justify-center",children:n}),e.jsx(ie,{children:!!o&&e.jsx(Q.div,{initial:{opacity:0,scale:.75},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.75},className:"pointer-events-auto absolute bottom-0 z-10",children:o})})]})]})};G.__docgenInfo={description:"",methods:[],displayName:"UI"};const je={title:"UI/Screen",component:G,args:{chatProps:{messages:[...M.args.messages,...M.args.messages]},action:e.jsx(A,{position:"bottom",onSubmit:()=>{},children:["Первая","Вторая","Третья"].map(t=>e.jsx(K,{variant:"answer",children:t},t))}),progressBarProps:{title:"Вводный урок: Вступление",progress:[{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1}]},children:e.jsx("img",{src:"/lines.png",alt:""})}},j={decorators:[t=>e.jsx("div",{className:"h-[657px] w-[1280px] shadow-2xl",children:e.jsx(t,{})})]},C={decorators:[t=>e.jsx("div",{className:"h-[969px] min-h-[657px] w-[1920px] min-w-[1280px] shadow-2xl",children:e.jsx(t,{})})]},S={parameters:{layout:"fullscreen"},decorators:[t=>e.jsx("div",{className:"h-screen min-h-[657px] w-screen min-w-[1280px]",children:e.jsx(t,{})})]};var P,k,B;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  decorators: [Story => <div className='h-[657px] w-[1280px] shadow-2xl'>
        <Story />
      </div>]
}`,...(B=(k=j.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var L,T,_;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  decorators: [Story => <div className='h-[969px] min-h-[657px] w-[1920px] min-w-[1280px] shadow-2xl'>
        <Story />
      </div>]
}`,...(_=(T=C.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var $,H,U;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [Story => <div className='h-screen min-h-[657px] w-screen min-w-[1280px]'>
        <Story />
      </div>]
}`,...(U=(H=S.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Ce=["SmallScreen","LargeScreen","Responsive"];export{C as LargeScreen,S as Responsive,j as SmallScreen,Ce as __namedExportsOrder,je as default};