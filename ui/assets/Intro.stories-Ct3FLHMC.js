import{e as n,g as i,i as k,h as j,j as O,k as b,l as G,t as C,m as h,n as I,o as T}from"./UnsupportedResolution-Be9TKb92.js";import{T as v}from"./TutorWithGraph-Dduhsaiu.js";import"./ScenarioGraphModal-CiIgecYQ.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DR9Q75dM.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Do3hn2Pg.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Bzq12SuL.js";import"./useModuleAssetPreloader-CvyT3WsR.js";import"./index-TcLXE8f6.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./index-D8bzLNKF.js";import"./Slot-DWk7hR4w.js";import"./Lot-BdQIuWxX.js";import"./constants-K3C4fZDC.js";import"./Module-DnAXLbcZ.js";import"./DraggableLot-ByRJV8sO.js";import"./defaults-DIlqC9Zn.js";import"./LotPicker-CDravAKg.js";import"./Stack-obeTg5PL.js";import"./LotPalette-CnW9wLxe.js";import"./DraggableToken-DySDDj_J.js";import"./Sign-CY00udov.js";import"./Token-CYgrhBmq.js";import"./AnimatedCard-C-7VSUqA.js";import"./NumeralFace-CHcbTEsP.js";import"./Deck-C1DXEKQa.js";import"./Highlighted-6-cdO6i-.js";import"./iframe-BS4nqxgh.js";import"./index-DrFu-skq.js";const x=n(i(Object.assign({},k,j,O,b,G,C,h))),w=n(i(Object.assign({},G,C,h))),y=n(i(Object.assign({},I))),B=n(i(Object.assign({},T))),Ce={title:"Вводный урок/Вступление",component:v,parameters:{layout:"fullscreen"},tags:["!autodocs"]},e={name:"Вступление",args:{scenario:x}},r={name:"1. Выбор игры",args:{scenario:w}},a={name:"2. Выбор игры 2",args:{scenario:y},parameters:{store:{CardSelect:{flippedCards:[{id:"card3",image:"/dragon-sticker.png"}]}}}},o={name:"3. Выбор игры 3",args:{scenario:B},parameters:{store:{CardSelect:{flippedCards:[{id:"card2",image:"/dragon-sticker.png"},{id:"card3",image:"/magnifier.png"}]}}}};var t,s,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Вступление',
  args: {
    scenario: introScenario
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '1. Выбор игры',
  args: {
    scenario: gameSelectionScenario
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,l,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '2. Выбор игры 2',
  args: {
    scenario: gameSelection2Scenario
  },
  parameters: {
    store: {
      CardSelect: {
        flippedCards: [{
          id: 'card3',
          image: '/dragon-sticker.png'
        }]
      }
    }
  }
}`,...(S=(l=a.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var u,_,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '3. Выбор игры 3',
  args: {
    scenario: gameSelection3Scenario
  },
  parameters: {
    store: {
      CardSelect: {
        flippedCards: [{
          id: 'card2',
          image: '/dragon-sticker.png'
        }, {
          id: 'card3',
          image: '/magnifier.png'
        }]
      }
    }
  }
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const he=["Intro","GameSelection","GameSelection2","GameSelection3"];export{r as GameSelection,a as GameSelection2,o as GameSelection3,e as Intro,he as __namedExportsOrder,Ce as default};
