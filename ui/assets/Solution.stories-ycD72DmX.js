import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{a as q}from"./Solution-DPUUyPmu.js";import"./index-DJO9vBfz.js";import"./Sign-M3dRSRBQ.js";import"./clsx-B-dksMZM.js";import"./_isIterateeCall-ghNbYjRD.js";import"./_arrayLikeKeys-BP-wO3FV.js";import"./isArray-CqxlJJN4.js";import"./keysIn-aHi1SaSt.js";import"./UI-CMiNKQAg.js";import"./keys-V90hh7H8.js";import"./_overArg-BLH_OBOE.js";import"./Action-D9epNDd7.js";import"./Button-_JJu6MQG.js";import"./Icon-CA65L85m.js";import"./proxy-Bu-Muats.js";import"./Chat-DEgLH8Wu.js";import"./Answer-BBzPdijR.js";import"./Message-CfDfO-e0.js";import"./Menu-CSx_B6r2.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-wiuCiDYb.js";import"./DraggableToken-XmdjouGl.js";import"./Token-BlVuBQLc.js";import"./Highlighted-C9zu9qsC.js";import"./PopoverInput-W6sUtHDB.js";import"./Input-CtlMo02g.js";import"./index-tP14o_tB.js";const t={title:"TextProblem/Solution",component:q,decorators:j=>p.jsx("div",{className:"w-[476px]",children:p.jsx(j,{})}),args:{steps:[{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]},{label:"Шаг 2",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:25}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}}]},{label:"Шаг 3",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:60}}}]}],onRedo(){}}},a={args:{activeStepIndex:0}},s={args:{activeStepIndex:1}};var i,n,d,m;const r={args:{activeStepIndex:2,steps:[...t.args.steps.slice(0,-1),{...t.args.steps.at(-1),expression:[...(((i=t.args.steps.at(-1))==null?void 0:i.expression)||[]).slice(0,-1),{...(n=t.args.steps.at(-1))==null?void 0:n.expression.at(-1),item:{...(m=(((d=t.args.steps.at(-1))==null?void 0:d.expression)||[]).at(-1))==null?void 0:m.item,token:void 0}}]}]}},o={args:{activeStepIndex:2}};var c,l,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    steps: ([...meta.args.steps.slice(0, -1), {
      ...meta.args.steps.at(-1),
      expression: [...(meta.args.steps.at(-1)?.expression || []).slice(0, -1), {
        ...meta.args.steps.at(-1)?.expression.at(-1),
        item: {
          ...(meta.args.steps.at(-1)?.expression || []).at(-1)?.item,
          token: undefined
        }
      }]
    }] as StepModel[])
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,f,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 2
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const ee=["Step1","Step2","Step3","Answer"];export{o as Answer,a as Step1,s as Step2,r as Step3,ee as __namedExportsOrder,t as default};
