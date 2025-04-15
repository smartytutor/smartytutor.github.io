import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{m as d}from"./mapValues-CYm3v0Bi.js";import{C as l,P as f,p as x}from"./UI-CCDgg16s.js";import{T as u}from"./Tutor-oO1NMXXM.js";import"./index-DJO9vBfz.js";import"./_baseForOwn-CjMoZcZF.js";import"./_arrayLikeKeys-CtZSz9VC.js";import"./clsx-B-dksMZM.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./Action-DcFBsC7h.js";import"./Button-BFim8KLb.js";import"./Icon-CA65L85m.js";import"./proxy-Bu-Muats.js";import"./Chat-DbB_edh2.js";import"./Answer-BBzPdijR.js";import"./Message-B84R2Yj4.js";import"./Menu-C_SWLeMl.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-rCPOZ_vc.js";import"./Input-CtlMo02g.js";import"./index-tP14o_tB.js";import"./MemoCards-Dk9QAYYD.js";import"./AnimatedCard-BOzM-9Fa.js";import"./NumeralFace-CjiQeN-M.js";import"./Deck-0jAS4CtB.js";const S={"intro-greetUser":{type:"message",text:["Привет!","Давай запустим хлопушку!"],next:"intro-showAnimatedMeme"},"intro-showAnimatedMeme":{type:"showConfetti",delay:2e3,next:"intro-final"},"intro-final":{type:"message",text:["Вау, как красиво!"]}},g=d(Object.assign({},S),(o,c)=>({id:c,...o})),G={title:"Confetti/Confetti",component:l},t={args:{loop:!0},decorators:[o=>e.jsx("div",{className:"h-[400px] w-[400px]",children:e.jsx(o,{})})]},r={decorators:[()=>e.jsx(f,{store:x({progress:{activeSection:0,sections:[{prefix:"mockPrefix"}]},tutor:{context:{},watchers:{},events:[],styles:{container:{}}}}),children:e.jsx(u,{scenario:g})})],parameters:{layout:"fullscreen"}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    loop: true
  },
  decorators: [Story => <div className='h-[400px] w-[400px]'>
        <Story />
      </div>]
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var a,p,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  decorators: [() => <Provider store={preloadStore({
    progress: {
      activeSection: 0,
      sections: [{
        prefix: 'mockPrefix'
      }]
    },
    tutor: {
      context: {},
      watchers: {},
      events: [],
      styles: {
        container: {}
      }
    }
  })}>
        <Tutor scenario={scenario} />
      </Provider>],
  parameters: {
    layout: 'fullscreen'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const H=["Confetti","ConfettiScenario"];export{t as Confetti,r as ConfettiScenario,H as __namedExportsOrder,G as default};
