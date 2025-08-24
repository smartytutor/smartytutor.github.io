import{e as o,g as i,N as A,O as x,Q as s,R as _,V as n}from"./UnsupportedResolution-B_jce17t.js";import{T as O}from"./TutorWithGraph-CpEEX4Ql.js";import"./ScenarioGraphModal-bjEriAKk.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DiklIkkE.js";import"./Action-DUkQC_DA.js";import"./clsx-B-dksMZM.js";import"./Button-BGi-_Oof.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-C05We5iG.js";import"./useSfx-BACfETso.js";import"./Icon-C_N4S_ZJ.js";import"./proxy-BjE8Ig1W.js";import"./Answer-PL8H0T0r.js";import"./Chat-RNtaA_Kh.js";import"./VoiceoverProvider-CSBJPItj.js";import"./Message-CGbUbVro.js";import"./Input-DcyMQBIt.js";import"./Menu-BCBPHnai.js";import"./ProgressBar-DX19bTZY.js";import"./Smartik-DnMQQPug.js";import"./index-QxjEJx5B.js";import"./redux-toolkit.modern-CeOX0_sF.js";import"./_arrayLikeKeys-BQo_jNKa.js";import"./index-0xIPAiCx.js";import"./NumeralFace-Ds693XiA.js";import"./Slot-CT1AWMYi.js";import"./Lot-DQsF8ln-.js";import"./constants-K3C4fZDC.js";import"./Module-BbZk3Jp-.js";import"./DraggableLot-BAYEXKcw.js";import"./defaults-mPm_OiqA.js";import"./LotPicker-B4IeDM1u.js";import"./Stack-RW0OyjXV.js";import"./LotPalette-CMrf6JxE.js";import"./DraggableToken-B8Igi4VB.js";import"./Sign-DADmf3_9.js";import"./Token-DuPhmN9g.js";import"./AnimatedCard-CCJgi9RF.js";import"./Deck-ngmnPlfX.js";import"./Highlighted-Z1bvx3uf.js";import"./iframe-DMqPaWSn.js";import"./index-DrFu-skq.js";const T=o(i(Object.assign({},A,x,s,_,n))),w={"area1-setup-interactive":{type:"attachInteractive",name:"AreaTiles",props:{mode:"demo"},next:"trainer3-area1"}},j={"area2-setup-styles":{type:"styles",styles:{background:{src:"/bg-area.jpg",className:"object-center 2xl:-left-[10vw] 2xl:w-[110vw]",style:{opacity:"1"}}},next:"area2-setup-interactive",delay:1e3},"area2-setup-interactive":{type:"attachInteractive",name:"AreaTiles",props:{mode:"place",allowDragging:!0,size:{row:2,col:3},lots:[{id:"lot1"},{id:"lot2"},{id:"lot3"},{id:"lot4"},{id:"lot5"},{id:"lot6"},{id:"lot7"},{id:"lot8"},{id:"lot9"},{id:"lot10"},{id:"lot11"},{id:"lot12"}]},next:"trainer3-area2"}},h=o(i(Object.assign({},w,x,j,s,n))),k=o(i(Object.assign({},j,s,n))),I=o(i(Object.assign({},_))),vr={title:"Вводный урок/Тренажёр 3",component:O,parameters:{layout:"fullscreen"},tags:["!autodocs"]},r={name:"Тренажёр 3",args:{scenario:T}},e={name:"1. Исследование первой площадки",args:{scenario:h}},a={name:"2. Исследование второй площадки",args:{scenario:k}},t={name:"3. Финал и выбор любимой части",args:{scenario:I}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Тренажёр 3',
  args: {
    scenario: trainer3Scenario
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '1. Исследование первой площадки',
  args: {
    scenario: area1Scenario
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,S,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '2. Исследование второй площадки',
  args: {
    scenario: area2Scenario
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,b,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '3. Финал и выбор любимой части',
  args: {
    scenario: finaleScenario
  }
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const xr=["Trainer3","Area1","Area2","Finale"];export{e as Area1,a as Area2,t as Finale,r as Trainer3,xr as __namedExportsOrder,vr as default};
