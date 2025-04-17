import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{C as s,P as n,p as a,T as m}from"./Tutor-5Xhssuz7.js";import"./index-DRjF_FHU.js";import"./Action-Cm2zov8B.js";import"./clsx-B-dksMZM.js";import"./Button-CLJECKvJ.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Czmml-zG.js";import"./Message-BCL7gD5M.js";import"./Input-0sRJfh9S.js";import"./Menu-B0Zgu9NV.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-BXu8TEtc.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-BBTc_PJo.js";import"./Deck-Cfo_HGbJ.js";import"./AnimatedCard-CrZRt16x.js";import"./NumeralFace-DCMMdmAv.js";const p={"intro-greetUser":{type:"message",text:["Привет!","Давай запустим хлопушку!"],next:"intro-showAnimatedMeme",id:"intro-greetUser"},"intro-showAnimatedMeme":{type:"showConfetti",delay:2e3,next:"intro-final",id:"intro-showAnimatedMeme"},"intro-final":{type:"message",text:["Вау, как красиво!"],id:"intro-final"}},E={title:"Features/Confetti",component:s},t={parameters:{layout:"fullscreen"},tags:["!autodocs"],decorators:[()=>r.jsx(n,{store:a({progress:{activeSection:0,sections:[{prefix:"mockPrefix",title:"SmartyTutor"}]}}),children:r.jsx(m,{scenario:p})})]};var e,o,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!autodocs'],
  decorators: [() => <Provider store={preloadStore({
    progress: {
      activeSection: 0,
      sections: [{
        prefix: 'mockPrefix',
        title: 'SmartyTutor'
      }]
    }
  })}>
        <Tutor scenario={scenario as Scenario} />
      </Provider>]
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const U=["Confetti"];export{t as Confetti,U as __namedExportsOrder,E as default};
