import{j as p}from"./jsx-runtime-CkxqCPlQ.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{a as q}from"./Solution-OcLfVOAb.js";import"./index-DJO9vBfz.js";import"./Sign-CChoa_vN.js";import"./clsx-B-dksMZM.js";import"./_arrayLikeKeys-CtZSz9VC.js";import"./UI-zfq67HMr.js";import"./Action-DcFBsC7h.js";import"./Button-BFim8KLb.js";import"./Icon-CA65L85m.js";import"./proxy-Bu-Muats.js";import"./Chat-DbB_edh2.js";import"./Answer-BBzPdijR.js";import"./Message-B84R2Yj4.js";import"./Menu-C_SWLeMl.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-rCPOZ_vc.js";import"./DraggableToken-DhepkeK7.js";import"./Token-ClA6c5Dr.js";import"./use-animate-fs2rhT79.js";import"./Highlighted-C9zu9qsC.js";import"./PopoverInput-B9AJ0tnG.js";import"./Input-CtlMo02g.js";import"./index-tP14o_tB.js";const t={title:"TextProblem/Solution",component:q,decorators:j=>p.jsx("div",{className:"w-[476px]",children:p.jsx(j,{})}),args:{steps:[{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]},{label:"Шаг 2",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:25}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:2}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}}]},{label:"Шаг 3",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:50}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:60}}}]}],onRedo(){}}},a={args:{activeStepIndex:0}},s={args:{activeStepIndex:1}};var i,n,d,m;const r={args:{activeStepIndex:2,steps:[...t.args.steps.slice(0,-1),{...t.args.steps.at(-1),expression:[...(((i=t.args.steps.at(-1))==null?void 0:i.expression)||[]).slice(0,-1),{...(n=t.args.steps.at(-1))==null?void 0:n.expression.at(-1),item:{...(m=(((d=t.args.steps.at(-1))==null?void 0:d.expression)||[]).at(-1))==null?void 0:m.item,token:void 0}}]}]}},o={args:{activeStepIndex:2}};var c,l,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const X=["Step1","Step2","Step3","Answer"];export{o as Answer,a as Step1,s as Step2,r as Step3,X as __namedExportsOrder,t as default};
