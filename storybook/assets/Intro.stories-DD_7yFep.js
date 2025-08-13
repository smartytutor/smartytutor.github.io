import{e as n,g as i,i as k,h as j,j as O,k as b,l as G,t as C,m as h,n as I,o as T}from"./UnsupportedResolution-DT9jsU0D.js";import{T as v}from"./TutorWithGraph-CdMHoYFd.js";import"./ScenarioGraphModal-VnrVq1OW.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DR9Q75dM.js";import"./Action-zfHEPYCV.js";import"./clsx-B-dksMZM.js";import"./Button-BG7PtQJn.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-CEKzBDsh.js";import"./useSfx-CWAGEEaH.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Do3hn2Pg.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-DYfE1iEf.js";import"./Menu-E-ahJJly.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-99n2EEIi.js";import"./useModuleAssetPreloader-BiPJ55Vk.js";import"./index-TcLXE8f6.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./index-D8bzLNKF.js";import"./Slot-BGBKrO_L.js";import"./Lot-CjPFm4My.js";import"./constants-K3C4fZDC.js";import"./Module-CLvlOgNa.js";import"./DraggableLot-Bb0piega.js";import"./defaults-DIlqC9Zn.js";import"./LotPicker-Cc4kpqJD.js";import"./Stack-Bels9Eqf.js";import"./LotPalette-CnW9wLxe.js";import"./DraggableToken-CtfOR1bx.js";import"./Sign-CY00udov.js";import"./Token-CYgrhBmq.js";import"./AnimatedCard-C8IDo-E2.js";import"./NumeralFace-CADQ2laL.js";import"./Deck-_trTM_z2.js";import"./Highlighted-6-cdO6i-.js";import"./iframe-DTqeiGza.js";import"./index-DrFu-skq.js";const x=n(i(Object.assign({},k,j,O,b,G,C,h))),w=n(i(Object.assign({},G,C,h))),y=n(i(Object.assign({},I))),B=n(i(Object.assign({},T))),jr={title:"Вводный урок/Вступление",component:v,parameters:{layout:"fullscreen"},tags:["!autodocs"]},r={name:"Вступление",args:{scenario:x}},e={name:"1. Выбор игры",args:{scenario:w}},a={name:"2. Выбор игры 2",args:{scenario:y},parameters:{store:{CardSelect:{flippedCards:[{id:"card3",image:"/dragon-sticker.png"}]}}}},o={name:"3. Выбор игры 3",args:{scenario:B},parameters:{store:{CardSelect:{flippedCards:[{id:"card2",image:"/dragon-sticker.png"},{id:"card3",image:"/magnifier.png"}]}}}};var t,s,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Вступление',
  args: {
    scenario: introScenario
  }
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var c,p,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '1. Выбор игры',
  args: {
    scenario: gameSelectionScenario
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,l,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const Or=["Intro","GameSelection","GameSelection2","GameSelection3"];export{e as GameSelection,a as GameSelection2,o as GameSelection3,r as Intro,Or as __namedExportsOrder,jr as default};
