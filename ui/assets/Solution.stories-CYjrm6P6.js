import{j as p}from"./jsx-runtime-DR9Q75dM.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{c as q}from"./UnsupportedResolution-DEeai1af.js";import"./index-DRjF_FHU.js";import"./Action-Dr7HXP1S.js";import"./clsx-B-dksMZM.js";import"./Button-COaEaaTn.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-CEKzBDsh.js";import"./useSfx-CWAGEEaH.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-DTiLBGtG.js";import"./VoiceoverProvider-K0B6OSPK.js";import"./Message-ByLECGpj.js";import"./Input-DYfE1iEf.js";import"./Menu-C2_1i_vX.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Bonj4xt4.js";import"./index-TcLXE8f6.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./index-D8bzLNKF.js";import"./NumeralFace-DbLSqY0u.js";import"./Slot-DWk7hR4w.js";import"./Lot-BdQIuWxX.js";import"./constants-K3C4fZDC.js";import"./Module-DnAXLbcZ.js";import"./DraggableLot-ByRJV8sO.js";import"./defaults-DIlqC9Zn.js";import"./LotPicker-CDravAKg.js";import"./Stack-obeTg5PL.js";import"./LotPalette-CnW9wLxe.js";import"./DraggableToken-CtfOR1bx.js";import"./Sign-CY00udov.js";import"./Token-CYgrhBmq.js";import"./AnimatedCard-WyXpz6Ql.js";import"./Deck-DdyW3vMR.js";import"./Highlighted-6-cdO6i-.js";const t={title:"Тренажёры/TextProblem/Solution",component:q,decorators:j=>p.jsx("div",{className:"w-[476px]",children:p.jsx(j,{})}),args:{steps:[{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]},{label:"Шаг 2",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:25}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}}]},{label:"Шаг 3",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:60}}}]}],onRedo(){}}},r={args:{activeStepIndex:0}},a={args:{activeStepIndex:1}};var i,n,m,d;const s={args:{activeStepIndex:2,steps:[...t.args.steps.slice(0,-1),{...t.args.steps.at(-1),expression:[...(((i=t.args.steps.at(-1))==null?void 0:i.expression)||[]).slice(0,-1),{...(n=t.args.steps.at(-1))==null?void 0:n.expression.at(-1),item:{...(d=(((m=t.args.steps.at(-1))==null?void 0:m.expression)||[]).at(-1))==null?void 0:d.item,token:void 0}}]}]}},o={args:{activeStepIndex:2}};var c,l,v;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 0
  }
}`,...(v=(l=r.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var u,g,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 1
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,y,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var I,f,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    activeStepIndex: 2
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const de=["Step1","Step2","Step3","Answer"];export{o as Answer,r as Step1,a as Step2,s as Step3,de as __namedExportsOrder,t as default};
