import{j as a}from"./jsx-runtime-DR9Q75dM.js";import{n as r}from"./redux-toolkit.modern-DEr0YuQG.js";import{S as k}from"./Sign-CY00udov.js";import{d as b}from"./UnsupportedResolution-BzcbSiJR.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./defaults-DIlqC9Zn.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./Action-DQ72ZiUY.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-Do3hn2Pg.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-BxCqXmM0.js";import"./useModuleAssetPreloader-CvyT3WsR.js";import"./index-TcLXE8f6.js";import"./index-D8bzLNKF.js";import"./SfxProvider-DGetFDxL.js";import"./DraggableToken-DJbrKrE1.js";import"./Token-CYgrhBmq.js";import"./Slot-BGBKrO_L.js";import"./Lot-CjPFm4My.js";import"./constants-K3C4fZDC.js";import"./Module-CLvlOgNa.js";import"./DraggableLot-Bb0piega.js";import"./LotPicker-Cc4kpqJD.js";import"./Stack-Bels9Eqf.js";import"./LotPalette-CnW9wLxe.js";import"./AnimatedCard-CrPPL0Y5.js";import"./NumeralFace-DmliQeyq.js";import"./Deck-Dk_boDna.js";import"./Highlighted-6-cdO6i-.js";const ar={title:"Тренажёры/TextProblem/Step",component:b,decorators:i=>a.jsx("div",{className:"w-[476px]",children:a.jsx(i,{})})},e={args:{label:"Шаг 1",expression:[{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:5}}},{type:"slot",item:{id:r(4),variant:"sign",token:{id:r(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:5}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:10}}}]}},o={args:{label:"Ответ",expression:[{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:10}}}]}},n={decorators:i=>a.jsx(k.Provider,{value:"small",children:a.jsx(i,{})}),args:{...e.args,onRedo:()=>{}}},t={decorators:n.decorators,args:{...e.args,redoLabel:"Переделать"}};var s,p,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,v,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: Story => <SizeContext.Provider value='small'>
      <Story />
    </SizeContext.Provider>,
  args: {
    ...Default.args,
    onRedo: () => {}
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,y,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: Previous.decorators,
  args: {
    ...Default.args,
    redoLabel: 'Переделать'
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const ir=["Default","Answer","Previous","PreviousWithLabel"];export{o as Answer,e as Default,n as Previous,t as PreviousWithLabel,ir as __namedExportsOrder,ar as default};
