import{e as o,g as i,N as A,O as x,Q as s,R as _,V as n}from"./UnsupportedResolution-B-JzYZ4u.js";import{T as O}from"./TutorWithGraph-B_6N_PLq.js";import"./ScenarioGraphModal-DVvmTTgd.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DR9Q75dM.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Do3hn2Pg.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Bzq12SuL.js";import"./useModuleAssetPreloader-CvyT3WsR.js";import"./index-TcLXE8f6.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./index-D8bzLNKF.js";import"./Slot-DWk7hR4w.js";import"./Lot-BdQIuWxX.js";import"./constants-K3C4fZDC.js";import"./Module-DnAXLbcZ.js";import"./DraggableLot-ByRJV8sO.js";import"./defaults-DIlqC9Zn.js";import"./LotPicker-CDravAKg.js";import"./Stack-obeTg5PL.js";import"./LotPalette-CnW9wLxe.js";import"./DraggableToken-DySDDj_J.js";import"./Sign-CY00udov.js";import"./Token-CYgrhBmq.js";import"./AnimatedCard-C-7VSUqA.js";import"./NumeralFace-CHcbTEsP.js";import"./Deck-C1DXEKQa.js";import"./Highlighted-6-cdO6i-.js";import"./iframe-D_OAKlTo.js";import"./index-DrFu-skq.js";const T=o(i(Object.assign({},A,x,s,_,n))),w={"area1-setup-interactive":{type:"attachInteractive",name:"AreaTiles",props:{mode:"demo"},next:"trainer3-area1"}},j={"area2-setup-styles":{type:"styles",styles:{background:{src:"/bg-area.jpg",className:"object-center 2xl:-left-[10vw] 2xl:w-[110vw]",style:{opacity:"1"}}},next:"area2-setup-interactive",delay:1e3},"area2-setup-interactive":{type:"attachInteractive",name:"AreaTiles",props:{mode:"place",allowDragging:!0,size:{row:2,col:3},lots:[{id:"lot1"},{id:"lot2"},{id:"lot3"},{id:"lot4"},{id:"lot5"},{id:"lot6"},{id:"lot7"},{id:"lot8"},{id:"lot9"},{id:"lot10"},{id:"lot11"},{id:"lot12"}]},next:"trainer3-area2"}},h=o(i(Object.assign({},w,x,j,s,n))),k=o(i(Object.assign({},j,s,n))),I=o(i(Object.assign({},_))),fr={title:"Вводный урок/Тренажёр 3",component:O,parameters:{layout:"fullscreen"},tags:["!autodocs"]},r={name:"Тренажёр 3",args:{scenario:T}},e={name:"1. Исследование первой площадки",args:{scenario:h}},a={name:"2. Исследование второй площадки",args:{scenario:k}},t={name:"3. Финал и выбор любимой части",args:{scenario:I}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const br=["Trainer3","Area1","Area2","Finale"];export{e as Area1,a as Area2,t as Finale,r as Trainer3,br as __namedExportsOrder,fr as default};
