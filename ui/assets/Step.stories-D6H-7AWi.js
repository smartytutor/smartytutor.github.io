import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{n as e}from"./redux-toolkit.modern-DEr0YuQG.js";import{S as b}from"./Sign-D0SSdnMi.js";import{b as k}from"./Solution-DmfhgVAZ.js";import"./index-DJO9vBfz.js";import"./clsx-B-dksMZM.js";import"./_isIterateeCall-ghNbYjRD.js";import"./_arrayLikeKeys-BP-wO3FV.js";import"./isArray-CqxlJJN4.js";import"./keysIn-aHi1SaSt.js";import"./UI-DZ-SIrdS.js";import"./keys-V90hh7H8.js";import"./_overArg-BLH_OBOE.js";import"./Action-DcFBsC7h.js";import"./Button-BFim8KLb.js";import"./Icon-CA65L85m.js";import"./proxy-Bu-Muats.js";import"./Chat-DbB_edh2.js";import"./Answer-BBzPdijR.js";import"./Message-B84R2Yj4.js";import"./Menu-C_SWLeMl.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-B_fkXt3u.js";import"./DraggableToken-CZkTebGg.js";import"./Token-SMuRVrz4.js";import"./Highlighted-C9zu9qsC.js";import"./PopoverInput-BZC73PRO.js";import"./Input-CtlMo02g.js";import"./index-tP14o_tB.js";const X={title:"TextProblem/Step",component:k,decorators:i=>a.jsx("div",{className:"w-[476px]",children:a.jsx(i,{})})},n={args:{label:"Шаг 1",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"slot",item:{id:e(4),variant:"sign",token:{id:e(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:5}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]}},o={args:{label:"Ответ",expression:[{type:"slot",item:{id:e(4),variant:"operand",accepts:["drop"],token:{id:e(4),value:10}}}]}},r={decorators:i=>a.jsx(b.Provider,{value:"small",children:a.jsx(i,{})}),args:{...n.args,onRedo:()=>{}}},t={decorators:r.decorators,args:{...n.args,redoLabel:"Переделать"}};var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Y=["Default","Answer","Previous","PreviousWithLabel"];export{o as Answer,n as Default,r as Previous,t as PreviousWithLabel,Y as __namedExportsOrder,X as default};
