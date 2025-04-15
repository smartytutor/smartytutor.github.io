import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{M as d,P as l,p as g}from"./UI-CCDgg16s.js";import{T as u}from"./Tutor-oO1NMXXM.js";import{m as x}from"./mapValues-CYm3v0Bi.js";import"./index-DJO9vBfz.js";import"./clsx-B-dksMZM.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CtZSz9VC.js";import"./Action-DcFBsC7h.js";import"./Button-BFim8KLb.js";import"./Icon-CA65L85m.js";import"./proxy-Bu-Muats.js";import"./Chat-DbB_edh2.js";import"./Answer-BBzPdijR.js";import"./Message-B84R2Yj4.js";import"./Menu-C_SWLeMl.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-rCPOZ_vc.js";import"./Input-CtlMo02g.js";import"./index-tP14o_tB.js";import"./MemoCards-Dk9QAYYD.js";import"./_baseForOwn-CjMoZcZF.js";import"./AnimatedCard-BOzM-9Fa.js";import"./NumeralFace-CjiQeN-M.js";import"./Deck-0jAS4CtB.js";const f={"intro-greetUser":{type:"message",text:["Привет!","Меня зовут Смартик, и я очень люблю математику."],next:"intro-showAnimatedMeme"},"intro-showAnimatedMeme":{type:"showMeme",url:"/meme-kitty.png",delay:2e3,next:"intro-final"},"intro-final":{type:"message",text:["Вот это крутой был мэм!"]}},y=x(Object.assign({},f),(p,c)=>({id:c,...p})),H={title:"Meme/Meme",component:d},e={args:{imageUrl:"/meme-kitty.png"}},r={args:{imageUrl:"/meme-kitty.png"},parameters:{layout:"fullscreen"},tags:["!autodocs"],decorators:[()=>t.jsx(l,{store:g({progress:{activeSection:0,sections:[{prefix:"mockPrefix"}]},tutor:{context:{},watchers:{},events:[],styles:{container:{}}}}),children:t.jsx(u,{scenario:y})})]};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    imageUrl: '/meme-kitty.png'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,a,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    imageUrl: '/meme-kitty.png'
  },
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['!autodocs'],
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
      </Provider>]
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const I=["Meme","AnimatedMeme"];export{r as AnimatedMeme,e as Meme,I as __namedExportsOrder,H as default};
