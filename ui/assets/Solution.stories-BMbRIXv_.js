import{j as p}from"./jsx-runtime-DR9Q75dM.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{a as q}from"./Solution-wkr2WZzY.js";import"./index-DRjF_FHU.js";import"./Sign-C0BDR2GM.js";import"./clsx-B-dksMZM.js";import"./defaults-BleV3Q12.js";import"./_arrayLikeKeys-BOaknIRz.js";import"./keysIn-Bb7DVGF9.js";import"./index-BM9kYpov.js";import"./DraggableToken-VOVcS7y6.js";import"./Token-WdqJ7wEV.js";import"./proxy-C00yw4cG.js";import"./Highlighted-6-cdO6i-.js";import"./PopoverInput-CjNRUc2A.js";import"./Action-DQ72ZiUY.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Dfzh54ZR.js";import"./useImagePreloader-C1UmUM2_.js";import"./SideSlide-Dn38-Xws.js";import"./Deck-CiBVLBkl.js";import"./AnimatedCard-2cVL3gan.js";import"./NumeralFace-BKM8_hJa.js";const t={title:"Тренажёры/TextProblem/Solution",component:q,decorators:j=>p.jsx("div",{className:"w-[476px]",children:p.jsx(j,{})}),args:{steps:[{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]},{label:"Шаг 2",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:25}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}}]},{label:"Шаг 3",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:60}}}]}],onRedo(){}}},a={args:{activeStepIndex:0}},s={args:{activeStepIndex:1}};var i,n,d,m;const r={args:{activeStepIndex:2,steps:[...t.args.steps.slice(0,-1),{...t.args.steps.at(-1),expression:[...(((i=t.args.steps.at(-1))==null?void 0:i.expression)||[]).slice(0,-1),{...(n=t.args.steps.at(-1))==null?void 0:n.expression.at(-1),item:{...(m=(((d=t.args.steps.at(-1))==null?void 0:d.expression)||[]).at(-1))==null?void 0:m.item,token:void 0}}]}]}},o={args:{activeStepIndex:2}};var c,l,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 0
  }
}`,...(v=(l=a.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var u,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 1
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,y,k;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 2,
    steps: [...meta.args.steps.slice(0, -1), {
      ...meta.args.steps.at(-1),
      expression: [...(meta.args.steps.at(-1)?.expression || []).slice(0, -1), {
        ...meta.args.steps.at(-1)?.expression.at(-1),
        item: {
          ...(meta.args.steps.at(-1)?.expression || []).at(-1)?.item,
          token: undefined
        }
      }]
    }] as StepModel[]
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,f,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 2
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ae=["Step1","Step2","Step3","Answer"];export{o as Answer,a as Step1,s as Step2,r as Step3,ae as __namedExportsOrder,t as default};
