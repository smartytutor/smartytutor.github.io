import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{C as R,H as r}from"./Chat.stories-DbQVwUZF.js";import{r as i}from"./index-DJO9vBfz.js";import{c as C}from"./clsx-B-dksMZM.js";import{A as g}from"./Action-DHS3K6Ew.js";import{B as x}from"./Button-BX7boJ1n.js";import{I as T}from"./Icon-CA65L85m.js";import{M as _}from"./Menu-BxNCKwnx.js";import{P as k}from"./ProgressBar-BjNtQnVH.js";import{S as E}from"./Smartik-wiuCiDYb.js";import"./Answer-CRltBUUP.js";import"./Message-DnkNuTKn.js";const p=280,b=({messages:e})=>{const H=i.useRef(null),t=i.useRef(null),[o,d]=i.useState(),I=l=>{const a=-l.target.scrollTop;o!=="history"&&a>0&&d("history"),o==="history"&&a<=0&&d("default"),t.current&&a<p/1.5&&(t.current.style.transform=`translateY(${a/(p*3)*100}%)`,t.current.style.opacity=String(1-a/(p/1.5)))};return s.jsxs("div",{className:"flex h-full overflow-hidden",children:[s.jsxs("div",{className:"relative flex w-[352px] flex-col pl-4",children:[s.jsx("div",{className:"-ml-4",children:s.jsx(_,{})}),s.jsx("div",{className:"no-scrollbar mask-scroll relative z-10 flex flex-col-reverse overflow-scroll pb-[280px] pt-[1vh]",onScroll:I,ref:H,children:s.jsx(R,{variant:o,messages:e})}),s.jsx(E,{ref:t,className:"absolute bottom-0 left-0 ml-20 h-[280px] self-start"}),s.jsx("div",{className:C("absolute left-1/2 top-full z-20 ml-4 -translate-x-1/2 opacity-0 transition duration-200",o==="history"&&"-translate-y-full opacity-100"),children:s.jsx(g,{showSend:!1,children:s.jsxs(x,{variant:"cta",className:"whitespace-nowrap",children:[s.jsx(T,{name:"play",size:24}),"Продолжить урок"]})})})]}),s.jsxs("div",{className:"pointer-events-none relative flex flex-1 flex-col items-center justify-between bg-center bg-no-repeat pt-1",style:{backgroundImage:"url(/lines.png)"},children:[s.jsx("div",{className:"pointer-events-auto",children:s.jsx(k,{title:"Урок 1: Умножение и деление",progress:[{rate:100,completed:!0},{rate:50,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1}]})}),s.jsx("div",{className:"pointer-events-auto",children:s.jsx(g,{position:"bottom",children:["Первая","Вторая","Третья"].map(l=>s.jsx(x,{variant:"answer",children:l},l))})})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"UI",props:{messages:{required:!0,tsType:{name:"ComponentProps['messages']",raw:"ComponentProps<typeof Chat>['messages']"},description:""}}};const D={title:"UI/Screen",component:b},n={decorators:[e=>s.jsx("div",{className:"h-[657px] w-[1280px] shadow-2xl",children:s.jsx(e,{})})],args:{messages:[...r.args.messages,...r.args.messages]}},c={decorators:[e=>s.jsx("div",{className:"h-[969px] w-[1920px] shadow-2xl",children:s.jsx(e,{})})],args:{messages:[...r.args.messages,...r.args.messages]}},m={parameters:{layout:"fullscreen"},decorators:[e=>s.jsx("div",{className:"h-screen w-screen",children:s.jsx(e,{})})],args:{messages:[...r.args.messages,...r.args.messages]}};var f,h,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <div className='h-[657px] w-[1280px] shadow-2xl'>
        <Story />
      </div>],
  args: {
    messages: [...History.args.messages, ...History.args.messages]
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var v,y,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <div className='h-[969px] w-[1920px] shadow-2xl'>
        <Story />
      </div>],
  args: {
    messages: [...History.args.messages, ...History.args.messages]
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,w,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [Story => <div className='h-screen w-screen'>
        <Story />
      </div>],
  args: {
    messages: [...History.args.messages, ...History.args.messages]
  }
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};const F=["SmallScreen","LargeScreen","Responsive"];export{c as LargeScreen,m as Responsive,n as SmallScreen,F as __namedExportsOrder,D as default};
