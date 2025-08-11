import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{n as r}from"./redux-toolkit.modern-DEr0YuQG.js";import{S as k}from"./Sign-CY00udov.js";import{d as b}from"./UnsupportedResolution-CU4dsQAX.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./defaults-DIlqC9Zn.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./Action-csIhf2uk.js";import"./Button-BxIpU3Z5.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-CEKzBDsh.js";import"./useSfx-CWAGEEaH.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Do3hn2Pg.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-DYfE1iEf.js";import"./Menu-Dj-6EP60.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-CKzJSXjA.js";import"./useModuleAssetPreloader-BiPJ55Vk.js";import"./index-TcLXE8f6.js";import"./index-D8bzLNKF.js";import"./Slot-DWk7hR4w.js";import"./Lot-BdQIuWxX.js";import"./constants-K3C4fZDC.js";import"./Module-DnAXLbcZ.js";import"./DraggableLot-ByRJV8sO.js";import"./LotPicker-CDravAKg.js";import"./Stack-obeTg5PL.js";import"./LotPalette-CnW9wLxe.js";import"./DraggableToken-CtfOR1bx.js";import"./Token-CYgrhBmq.js";import"./AnimatedCard-BBdIZklt.js";import"./NumeralFace-Cbw6Io6W.js";import"./Deck-DK0g6_yI.js";import"./Highlighted-6-cdO6i-.js";const sr={title:"Тренажёры/TextProblem/Step",component:b,decorators:i=>a.jsx("div",{className:"w-[476px]",children:a.jsx(i,{})})},e={args:{label:"Шаг 1",expression:[{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:5}}},{type:"slot",item:{id:r(4),variant:"sign",token:{id:r(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:5}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:10}}}]}},n={args:{label:"Ответ",expression:[{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:10}}}]}},o={decorators:i=>a.jsx(k.Provider,{value:"small",children:a.jsx(i,{})}),args:{...e.args,onRedo:()=>{}}},t={decorators:o.decorators,args:{...e.args,redoLabel:"Переделать"}};var s,p,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,v,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: Story => <SizeContext.Provider value='small'>
      <Story />
    </SizeContext.Provider>,
  args: {
    ...Default.args,
    onRedo: () => {}
  }
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: Previous.decorators,
  args: {
    ...Default.args,
    redoLabel: 'Переделать'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const pr=["Default","Answer","Previous","PreviousWithLabel"];export{n as Answer,e as Default,o as Previous,t as PreviousWithLabel,pr as __namedExportsOrder,sr as default};
