import{j as a}from"./jsx-runtime-DiklIkkE.js";import{n as r}from"./redux-toolkit.modern-CeOX0_sF.js";import{S as k}from"./Sign-DADmf3_9.js";import{d as b}from"./UnsupportedResolution-1xJkcTeC.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./defaults-mPm_OiqA.js";import"./_arrayLikeKeys-BQo_jNKa.js";import"./Action-DUkQC_DA.js";import"./Button-BGi-_Oof.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-C05We5iG.js";import"./useSfx-BACfETso.js";import"./Icon-C_N4S_ZJ.js";import"./proxy-BjE8Ig1W.js";import"./Answer-PL8H0T0r.js";import"./Chat-CqJaFEeq.js";import"./VoiceoverProvider-CSBJPItj.js";import"./Message-BVAFNPDt.js";import"./Input-DcyMQBIt.js";import"./Menu-BCBPHnai.js";import"./ProgressBar-DX19bTZY.js";import"./Smartik-DnMQQPug.js";import"./index-CTjQK37j.js";import"./index-0xIPAiCx.js";import"./NumeralFace-Ds693XiA.js";import"./Slot-CT1AWMYi.js";import"./Lot-DQsF8ln-.js";import"./constants-K3C4fZDC.js";import"./Module-BbZk3Jp-.js";import"./DraggableLot-BAYEXKcw.js";import"./LotPicker-B4IeDM1u.js";import"./Stack-RW0OyjXV.js";import"./LotPalette-CMrf6JxE.js";import"./DraggableToken-B8Igi4VB.js";import"./Token-DuPhmN9g.js";import"./AnimatedCard-CCJgi9RF.js";import"./Deck-ngmnPlfX.js";import"./Highlighted-Z1bvx3uf.js";const ir={title:"Тренажёры/TextProblem/Step",component:b,decorators:i=>a.jsx("div",{className:"w-[476px]",children:a.jsx(i,{})})},e={args:{label:"Шаг 1",expression:[{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:5}}},{type:"slot",item:{id:r(4),variant:"sign",token:{id:r(4),value:"add"},accepts:["drop"]}},{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:5}}},{type:"sign",item:{variant:"equals"}},{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:10}}}]}},n={args:{label:"Ответ",expression:[{type:"slot",item:{id:r(4),variant:"operand",accepts:["drop"],token:{id:r(4),value:10}}}]}},o={decorators:i=>a.jsx(k.Provider,{value:"small",children:a.jsx(i,{})}),args:{...e.args,onRedo:()=>{}}},t={decorators:o.decorators,args:{...e.args,redoLabel:"Переделать"}};var s,p,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const sr=["Default","Answer","Previous","PreviousWithLabel"];export{n as Answer,e as Default,o as Previous,t as PreviousWithLabel,sr as __namedExportsOrder,ir as default};
