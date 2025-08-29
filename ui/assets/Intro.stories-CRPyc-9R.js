import{e as n,g as i,i as k,h as j,j as O,k as b,l as G,t as C,m as h,n as I,o as T}from"./UnsupportedResolution-BYvxTsT7.js";import{T as v}from"./TutorWithGraph-3YkrWZj_.js";import"./ScenarioGraphModal-DnwiY2vq.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DiklIkkE.js";import"./Action-DUkQC_DA.js";import"./clsx-B-dksMZM.js";import"./Button-BGi-_Oof.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-C05We5iG.js";import"./useSfx-BACfETso.js";import"./Icon-C_N4S_ZJ.js";import"./proxy-BjE8Ig1W.js";import"./Answer-PL8H0T0r.js";import"./Chat--PJB7fTa.js";import"./VoiceoverProvider-CSBJPItj.js";import"./Message-BVAFNPDt.js";import"./Input-DcyMQBIt.js";import"./Menu-DjtdNAg8.js";import"./ProgressBar-DX19bTZY.js";import"./Smartik-DnMQQPug.js";import"./index-DUZq2kSe.js";import"./redux-toolkit.modern-CeOX0_sF.js";import"./_arrayLikeKeys-BQo_jNKa.js";import"./index-0xIPAiCx.js";import"./NumeralFace-Ds693XiA.js";import"./Slot-CT1AWMYi.js";import"./Lot-DQsF8ln-.js";import"./constants-K3C4fZDC.js";import"./Module-BbZk3Jp-.js";import"./DraggableLot-BAYEXKcw.js";import"./defaults-mPm_OiqA.js";import"./LotPicker-BH7KDlAi.js";import"./Stack-RW0OyjXV.js";import"./LotPalette-CMrf6JxE.js";import"./DraggableToken-B8Igi4VB.js";import"./Sign-DADmf3_9.js";import"./Token-DuPhmN9g.js";import"./AnimatedCard-CCJgi9RF.js";import"./Deck-ngmnPlfX.js";import"./Highlighted-Z1bvx3uf.js";import"./iframe-D6tL_bvY.js";import"./index-DrFu-skq.js";const x=n(i(Object.assign({},k,j,O,b,G,C,h))),w=n(i(Object.assign({},G,C,h))),y=n(i(Object.assign({},I))),B=n(i(Object.assign({},T))),kr={title:"Вводный урок/Вступление",component:v,parameters:{layout:"fullscreen"},tags:["!autodocs"]},r={name:"Вступление",args:{scenario:x}},e={name:"1. Выбор игры",args:{scenario:w}},a={name:"2. Выбор игры 2",args:{scenario:y},parameters:{store:{CardSelect:{flippedCards:[{id:"card3",image:"/dragon-sticker.png"}]}}}},o={name:"3. Выбор игры 3",args:{scenario:B},parameters:{store:{CardSelect:{flippedCards:[{id:"card2",image:"/dragon-sticker.png"},{id:"card3",image:"/magnifier.png"}]}}}};var t,s,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(f=(_=o.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const jr=["Intro","GameSelection","GameSelection2","GameSelection3"];export{e as GameSelection,a as GameSelection2,o as GameSelection3,r as Intro,jr as __namedExportsOrder,kr as default};
