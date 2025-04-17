import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{a as s,P as a,p as m,T as n}from"./Tutor-5Xhssuz7.js";import"./index-DRjF_FHU.js";import"./Action-Cm2zov8B.js";import"./clsx-B-dksMZM.js";import"./Button-CLJECKvJ.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Czmml-zG.js";import"./Message-BCL7gD5M.js";import"./Input-0sRJfh9S.js";import"./Menu-B0Zgu9NV.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-BXu8TEtc.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-BBTc_PJo.js";import"./Deck-Cfo_HGbJ.js";import"./AnimatedCard-CrZRt16x.js";import"./NumeralFace-DCMMdmAv.js";const p=""+new URL("meme-CrUpSaNg.png",import.meta.url).href,c={"intro-greetUser":{type:"message",text:["Привет!","Меня зовут Смартик, и я очень люблю математику."],next:"intro-showAnimatedMeme",id:"intro-greetUser"},"intro-showAnimatedMeme":{type:"showMeme",url:"/meme-kitty.png",delay:2e3,next:"intro-final",id:"intro-showAnimatedMeme"},"intro-final":{type:"message",text:["Вот это крутой был мэм!"],id:"intro-final"}},R={title:"Features/Meme",component:s,args:{imageUrl:p}},e={parameters:{layout:"fullscreen"},tags:["!autodocs"],decorators:()=>r.jsx(a,{store:m({progress:{activeSection:0,sections:[{prefix:"mockPrefix",title:"SmartyTutor"}]}}),children:r.jsx(n,{scenario:c})})};var t,o,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!autodocs'],
  decorators: () => <Provider store={preloadStore({
    progress: {
      activeSection: 0,
      sections: [{
        prefix: 'mockPrefix',
        title: 'SmartyTutor'
      }]
    }
  })}>
      <Tutor scenario={scenario as Scenario} />
    </Provider>
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const C=["Meme"];export{e as Meme,C as __namedExportsOrder,R as default};
