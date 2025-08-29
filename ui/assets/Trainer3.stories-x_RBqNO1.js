import{e as o,g as i,N as j,O as f,Q as s,R as _,V as n}from"./UnsupportedResolution-5nlM8Aqk.js";import{T as k}from"./TutorWithGraph-Xuz5KRRv.js";import"./ScenarioGraphModal-WYNYqjqx.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DiklIkkE.js";import"./Action-DUkQC_DA.js";import"./clsx-B-dksMZM.js";import"./Button-BGi-_Oof.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-C05We5iG.js";import"./useSfx-BACfETso.js";import"./Icon-C_N4S_ZJ.js";import"./proxy-BjE8Ig1W.js";import"./Answer-PL8H0T0r.js";import"./Chat--PJB7fTa.js";import"./VoiceoverProvider-CSBJPItj.js";import"./Message-BVAFNPDt.js";import"./Input-DcyMQBIt.js";import"./Menu-DjtdNAg8.js";import"./ProgressBar-DX19bTZY.js";import"./Smartik-DnMQQPug.js";import"./index-DUZq2kSe.js";import"./redux-toolkit.modern-CeOX0_sF.js";import"./_arrayLikeKeys-BQo_jNKa.js";import"./index-0xIPAiCx.js";import"./NumeralFace-Ds693XiA.js";import"./Slot-CT1AWMYi.js";import"./Lot-DQsF8ln-.js";import"./constants-K3C4fZDC.js";import"./Module-BbZk3Jp-.js";import"./DraggableLot-BAYEXKcw.js";import"./defaults-mPm_OiqA.js";import"./LotPicker-BH7KDlAi.js";import"./Stack-RW0OyjXV.js";import"./LotPalette-CMrf6JxE.js";import"./DraggableToken-B8Igi4VB.js";import"./Sign-DADmf3_9.js";import"./Token-DuPhmN9g.js";import"./AnimatedCard-CCJgi9RF.js";import"./Deck-ngmnPlfX.js";import"./Highlighted-Z1bvx3uf.js";import"./iframe-bOFTy-8R.js";import"./index-DrFu-skq.js";const v=o(i(Object.assign({},j,f,s,_,n))),O={"area1-setup-interactive":{type:"attachInteractive",name:"AreaTiles",props:{mode:"place"},next:"area1-setup-bg"},"area1-setup-bg":{type:"interactiveAction",name:"setState",payload:{backgroundSrc:"/bg-area-small.jpg",backgroundFocus:{x:63,y:50}},next:"trainer3-area1"}},T={"area2-setup-interactive":{type:"attachInteractive",name:"AreaTiles",props:{mode:"place",allowDragging:!0,size:{row:2,col:3},lots:[{id:"lot1"},{id:"lot2"},{id:"lot3"},{id:"lot4"},{id:"lot5"},{id:"lot6"},{id:"lot7"},{id:"lot8"},{id:"lot9"},{id:"lot10"},{id:"lot11"},{id:"lot12"}]},next:"area2-setup-bg"},"area2-setup-bg":{type:"interactiveAction",name:"setState",payload:{backgroundSrc:"/bg-area.jpg",backgroundFocus:{x:63,y:50}},next:"trainer3-area2"}},h=o(i(Object.assign({},O,f,s,n))),F=o(i(Object.assign({},T,s,n))),I=o(i(Object.assign({},_))),Ar={title:"Вводный урок/Тренажёр 3",component:k,parameters:{layout:"fullscreen"},tags:["!autodocs"]},r={name:"Тренажёр 3",args:{scenario:v}},a={name:"1. Исследование первой площадки",args:{scenario:h}},e={name:"2. Исследование второй площадки",args:{scenario:F}},t={name:"3. Финал и выбор любимой части",args:{scenario:I}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Тренажёр 3',
  args: {
    scenario: trainer3Scenario
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '1. Исследование первой площадки',
  args: {
    scenario: area1Scenario
  }
}`,...(g=(d=a.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,S,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '2. Исследование второй площадки',
  args: {
    scenario: area2Scenario
  }
}`,...(b=(S=e.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,x,A;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '3. Финал и выбор любимой части',
  args: {
    scenario: finaleScenario
  }
}`,...(A=(x=t.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const fr=["Trainer3","Area1","Area2","Finale"];export{a as Area1,e as Area2,t as Finale,r as Trainer3,fr as __namedExportsOrder,Ar as default};
