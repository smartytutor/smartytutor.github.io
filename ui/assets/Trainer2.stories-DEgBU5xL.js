import{c as t,a,v as S,w as y,x,y as s,z as n}from"./SideSlide-Bl0Pr9q0.js";import{T as _}from"./TutorWithGraph-DD5q3MKE.js";import"./ScenarioGraphModal-BPNCim0k.js";import"./index-DRjF_FHU.js";import"./jsx-runtime-DR9Q75dM.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Bonj4xt4.js";import"./index-BK1i6FtS.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-BOaknIRz.js";import"./Deck-Btm96sEx.js";import"./AnimatedCard-CnrVEWk-.js";import"./NumeralFace-BB1rHCDk.js";import"./iframe-BIIwuVhg.js";import"./keysIn-Bb7DVGF9.js";import"./index-DrFu-skq.js";const P=t(a(Object.assign({},S,y,x,s,n))),T={"problem2-setup-interactive":{type:"attachInteractive",name:"TextProblem",props:{numbers:[25,2],operations:["+","-","*","/"],targetResult:50},next:"problem2-setup-context"},"problem2-setup-context":{type:"context",payload:{problem1Result:10,walkingDistance:10},next:"trainer2-problem2"}},v=t(a(Object.assign({},T,x,s,n))),R={"problem3-setup-interactive":{type:"attachInteractive",name:"TextProblem",props:{numbers:[10,50],operations:["+","-","*","/"],targetResult:60},next:"problem3-setup-context"},"problem3-setup-context":{type:"context",payload:{problem1Result:10,problem2Result:50,walkingDistance:10,scooterDistance:50},next:"trainer2-problem3"}},f=t(a(Object.assign({},R,s,n))),Z={title:"Вводный урок/Тренажёр 2",component:_,parameters:{layout:"fullscreen"},tags:["!autodocs"]},e={name:"Тренажёр 2",args:{scenario:P}},r={name:"1. Вторая задача",args:{scenario:v}},o={name:"2. Финальная задача",args:{scenario:f}};var p,m,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Тренажёр 2',
  args: {
    scenario: trainer2Scenario
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,l,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '1. Вторая задача',
  args: {
    scenario: problem2Scenario
  }
}`,...(b=(l=r.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var u,g,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '2. Финальная задача',
  args: {
    scenario: problem3Scenario
  }
}`,...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const $=["Trainer2","Problem2","Problem3"];export{r as Problem2,o as Problem3,e as Trainer2,$ as __namedExportsOrder,Z as default};
