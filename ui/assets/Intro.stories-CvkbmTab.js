import{d as t,l as n,i as y,g as _,f as b,h as C,j as f,t as k,k as v,O as x}from"./UnsupportedResolution-BewuEFEY.js";import{T as A}from"./TutorWithGraph-B5hLXqGy.js";import"./ScenarioGraphModal-DU8ZiS7_.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DR9Q75dM.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Dty5hFjB.js";import"./useImagePreloader-DoLrgOXj.js";import"./index-B_WByVEu.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./Deck-DfwvEkP6.js";import"./AnimatedCard-B5OiutWw.js";import"./NumeralFace-4quTT4Vb.js";import"./DraggableToken-b_ObY-35.js";import"./Sign-CY00udov.js";import"./defaults-DIlqC9Zn.js";import"./Token-CYgrhBmq.js";import"./Highlighted-6-cdO6i-.js";import"./iframe-DVvG3hRl.js";import"./index-DrFu-skq.js";const O={"intro-chooseGame3":{type:"attachInteractive",name:"CardSelect",props:{blockFlipping:!0,blockActivating:!0,cards:[{id:"card1",image:"/dragon-sticker.png"},{id:"card2",image:"/magnifier.png"},{id:"card3",image:"/space.png"}]},triggers:{init:{next:"intro-chooseGame3-1"},flip:{next:"intro-chooseGame3-2"},activate:{next:"intro-chooseGame3-3"}},id:"intro-chooseGame3"},"intro-chooseGame3-1":{type:"interactiveAction",name:"setState",payload:{blockFlipping:!1},id:"intro-chooseGame3-1"},"intro-chooseGame3-2":{type:"interactiveAction",name:"setState",payload:{blockFlipping:!0},next:"intro-chooseGame3-2-1",id:"intro-chooseGame3-2"},"intro-chooseGame3-2-1":{type:"interactiveAction",name:"setState",payload:{blockActivating:!1},id:"intro-chooseGame3-2-1"},"intro-chooseGame3-3":{type:"interactiveAction",name:"setState",payload:{blockActivating:!0},next:"intro-chooseGame3-4",id:"intro-chooseGame3-3"},"intro-chooseGame3-4":{type:"detachInteractive",next:"trainer3-init",id:"intro-chooseGame3-4"}},j=t(n(Object.assign({},y,_,b,C,f,k,v))),I=t(n(Object.assign({},f,k,v))),F=t(n(Object.assign({},x))),T=t(n(Object.assign({},O))),pe={title:"Вводный урок/Вступление",component:A,parameters:{layout:"fullscreen"},tags:["!autodocs"]},e={name:"Вступление",args:{scenario:j}},a={name:"1. Выбор игры",args:{scenario:I}},r={name:"2. Выбор игры 2",args:{scenario:F},parameters:{store:{CardSelect:{flippedCards:[{id:"card3",image:"/dragon-sticker.png"}]}}}},o={name:"3. Выбор игры 3",args:{scenario:T},parameters:{store:{CardSelect:{flippedCards:[{id:"card2",image:"/dragon-sticker.png"},{id:"card3",image:"/magnifier.png"}]}}}};var i,c,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Вступление',
  args: {
    scenario: introScenario
  }
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var m,p,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '1. Выбор игры',
  args: {
    scenario: gameSelectionScenario
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,l,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(l=r.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};var G,h,u;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const de=["Intro","GameSelection","GameSelection2","GameSelection3"];export{a as GameSelection,r as GameSelection2,o as GameSelection3,e as Intro,de as __namedExportsOrder,pe as default};
