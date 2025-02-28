import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{E as l}from"./Expression-DVuwZ0ge.js";import{S as e}from"./Sign-BmLaRZoP.js";import{S as r}from"./Slot-DbCeJrEx.js";import{T as a}from"./Token-CqBJNtCq.js";import{S as A}from"./Solution-BOF1Dd7U.js";import"./index-DJO9vBfz.js";import"./clsx-B-dksMZM.js";import"./context-BMSX6GvA.js";import"./UI-DeTupLRk.js";import"./keys-BpNir0K6.js";import"./_overArg-G87nO9dZ.js";import"./Action-CBTzAior.js";import"./Button-_JJu6MQG.js";import"./Icon-CA65L85m.js";import"./proxy-efew5eJf.js";import"./Chat-Cyjf59KT.js";import"./Answer-BBzPdijR.js";import"./Message-CfDfO-e0.js";import"./Menu-CSx_B6r2.js";import"./ProgressBar-DvhAnra0.js";import"./Smartik-wiuCiDYb.js";import"./PopoverInput-BgqZGW1f.js";import"./Input-CtlMo02g.js";import"./index-B8aIlgge.js";const $={title:"TextProblem/Solution",component:A,decorators:d=>n.jsx("div",{className:"w-[476px]",children:n.jsx(d,{})})},o={args:{children:[n.jsxs(l,{children:[n.jsx(r,{variant:"operand"}),n.jsx(r,{variant:"sign"}),n.jsx(r,{variant:"operand"}),n.jsx(e,{variant:"equals"}),n.jsx(r,{variant:"operand"})]})]}};var p;const i={args:{children:[n.jsxs(l,{children:[n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"5"})}),n.jsx(r,{variant:"sign",children:n.jsx(a,{children:n.jsx(e,{variant:"multiply"})})}),n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"2"})}),n.jsx(e,{variant:"equals"}),n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"10"})})]}),(((p=o.args)==null?void 0:p.children)||[])[0]]}};var c,m;const s={args:{children:[(((c=i.args)==null?void 0:c.children)||[])[0],n.jsxs(l,{children:[n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"25"})}),n.jsx(r,{variant:"sign",children:n.jsx(a,{children:n.jsx(e,{variant:"multiply"})})}),n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"2"})}),n.jsx(e,{variant:"equals"}),n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"50"})})]}),(((m=o.args)==null?void 0:m.children)||[])[0]]}};var S,x;const t={decorators:d=>n.jsx("div",{className:"mb-40",children:n.jsx(d,{})}),args:{showAnswer:!0,children:[(((S=i.args)==null?void 0:S.children)||[])[0],(((x=s.args)==null?void 0:x.children)||[])[1],n.jsxs(l,{children:[n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"10"})}),n.jsx(r,{variant:"sign",children:n.jsx(a,{children:n.jsx(e,{variant:"add"})})}),n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"50"})}),n.jsx(e,{variant:"equals"}),n.jsx(r,{variant:"operand",children:n.jsx(a,{children:"60"})})]})]}};var h,v,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: [<Expression>
        <Slot variant='operand' />
        <Slot variant='sign' />
        <Slot variant='operand' />
        <Sign variant='equals' />
        <Slot variant='operand' />
      </Expression>]
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var g,u,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<Expression>
        <Slot variant='operand'>
          <Token>5</Token>
        </Slot>
        <Slot variant='sign'>
          <Token>
            <Sign variant='multiply' />
          </Token>
        </Slot>
        <Slot variant='operand'>
          <Token>2</Token>
        </Slot>
        <Sign variant='equals' />
        <Slot variant='operand'>
          <Token>10</Token>
        </Slot>
      </Expression>, (Step1.args?.children || [])[0]]
  }
}`,...(T=(u=i.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var k,E,q;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [(Step2.args?.children || [])[0], <Expression>
        <Slot variant='operand'>
          <Token>25</Token>
        </Slot>
        <Slot variant='sign'>
          <Token>
            <Sign variant='multiply' />
          </Token>
        </Slot>
        <Slot variant='operand'>
          <Token>2</Token>
        </Slot>
        <Sign variant='equals' />
        <Slot variant='operand'>
          <Token>50</Token>
        </Slot>
      </Expression>, (Step1.args?.children || [])[0]]
  }
}`,...(q=(E=s.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var f,w,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: Story => <div className='mb-40'>
      <Story />
    </div>,
  args: {
    showAnswer: true,
    children: [(Step2.args?.children || [])[0], (Step3.args?.children || [])[1], <Expression>
        <Slot variant='operand'>
          <Token>10</Token>
        </Slot>
        <Slot variant='sign'>
          <Token>
            <Sign variant='add' />
          </Token>
        </Slot>
        <Slot variant='operand'>
          <Token>50</Token>
        </Slot>
        <Sign variant='equals' />
        <Slot variant='operand'>
          <Token>60</Token>
        </Slot>
      </Expression>]
  }
}`,...(y=(w=t.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const nn=["Step1","Step2","Step3","WithAnswer"];export{o as Step1,i as Step2,s as Step3,t as WithAnswer,nn as __namedExportsOrder,$ as default};
