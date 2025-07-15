import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{S as b}from"./Sign-C0BDR2GM.js";import{b as k}from"./Solution-wkr2WZzY.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./defaults-BleV3Q12.js";import"./_arrayLikeKeys-BOaknIRz.js";import"./keysIn-Bb7DVGF9.js";import"./index-BM9kYpov.js";import"./DraggableToken-VOVcS7y6.js";import"./Token-WdqJ7wEV.js";import"./proxy-C00yw4cG.js";import"./Highlighted-6-cdO6i-.js";import"./PopoverInput-CjNRUc2A.js";import"./Action-DQ72ZiUY.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Dfzh54ZR.js";import"./useImagePreloader-C1UmUM2_.js";import"./SideSlide-Dn38-Xws.js";import"./Deck-CiBVLBkl.js";import"./AnimatedCard-2cVL3gan.js";import"./NumeralFace-BKM8_hJa.js";const Z={title:"Тренажёры/TextProblem/Step",component:k,decorators:i=>a.jsx("div",{className:"w-[476px]",children:a.jsx(i,{})})},n={args:{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]}},o={args:{label:"Ответ",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]}},r={decorators:i=>a.jsx(b.Provider,{value:"small",children:a.jsx(i,{})}),args:{...n.args,onRedo:()=>{}}},t={decorators:r.decorators,args:{...n.args,redoLabel:"Переделать"}};var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Шаг 1',
    expression: [{
      type: 'slot',
      item: {
        id: nanoid(4),
        variant: 'operand',
        accepts: ['drop'],
        token: {
          id: nanoid(4),
          value: 5
        }
      }
    }, {
      type: 'slot',
      item: {
        id: nanoid(4),
        variant: 'sign',
        token: {
          id: nanoid(4),
          value: 'add'
        },
        accepts: ['drop']
      }
    }, {
      type: 'slot',
      item: {
        id: nanoid(4),
        variant: 'operand',
        accepts: ['drop'],
        token: {
          id: nanoid(4),
          value: 5
        }
      }
    }, {
      type: 'sign',
      item: {
        variant: 'equals'
      }
    }, {
      type: 'slot',
      item: {
        id: nanoid(4),
        variant: 'operand',
        accepts: ['drop'],
        token: {
          id: nanoid(4),
          value: 10
        }
      }
    }]
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Ответ',
    expression: [{
      type: 'slot',
      item: {
        id: nanoid(4),
        variant: 'operand',
        accepts: ['drop'],
        token: {
          id: nanoid(4),
          value: 10
        }
      }
    }]
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,v,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: Story => <SizeContext.Provider value='small'>
      <Story />
    </SizeContext.Provider>,
  args: {
    ...Default.args,
    onRedo: () => {}
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: Previous.decorators,
  args: {
    ...Default.args,
    redoLabel: 'Переделать'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const $=["Default","Answer","Previous","PreviousWithLabel"];export{o as Answer,n as Default,r as Previous,t as PreviousWithLabel,$ as __namedExportsOrder,Z as default};
