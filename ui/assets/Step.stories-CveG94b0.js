import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{S as b}from"./Sign-CpHND5FW.js";import{b as k}from"./Solution-CQmZ_R7r.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./defaults-DdJ9H2pA.js";import"./_arrayLikeKeys-BBTc_PJo.js";import"./Tutor-ZE2nN1vZ.js";import"./Action-Cm2zov8B.js";import"./Button-CLJECKvJ.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Czmml-zG.js";import"./Message-BCL7gD5M.js";import"./Input-0sRJfh9S.js";import"./Menu-B0Zgu9NV.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-BXu8TEtc.js";import"./Deck-Cfo_HGbJ.js";import"./AnimatedCard-CrZRt16x.js";import"./NumeralFace-DCMMdmAv.js";import"./DraggableToken-iNCrjNM5.js";import"./Token-fuhD0any.js";import"./Highlighted-6-cdO6i-.js";import"./PopoverInput-Gum_8_cW.js";const U={title:"TextProblem/Step",component:k,decorators:s=>t.jsx("div",{className:"w-[476px]",children:t.jsx(s,{})})},n={args:{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]}},o={args:{label:"Ответ",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]}},r={decorators:s=>t.jsx(b.Provider,{value:"small",children:t.jsx(s,{})}),args:{...n.args,onRedo:()=>{}}},a={decorators:r.decorators,args:{...n.args,redoLabel:"Переделать"}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: Previous.decorators,
  args: {
    ...Default.args,
    redoLabel: 'Переделать'
  }
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const V=["Default","Answer","Previous","PreviousWithLabel"];export{o as Answer,n as Default,r as Previous,a as PreviousWithLabel,V as __namedExportsOrder,U as default};
