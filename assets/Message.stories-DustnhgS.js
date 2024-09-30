import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{A as r}from"./Answer-CRltBUUP.js";import{M as k}from"./Message-DnkNuTKn.js";import"./index-DJO9vBfz.js";import"./clsx-B-dksMZM.js";import"./Icon-CA65L85m.js";const W={title:"UI/Components/Message",component:k,tags:["autodocs"],decorators:I=>e.jsx("div",{className:"w-[320px]",children:e.jsx(I,{})})},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!"}),e.jsxs("div",{children:["У нас есть 7 красных кругов"," ",e.jsx("span",{className:"opacity-40",children:"и 8 синих. Точно так, как изображено на рисунке справа"})]})]})}},s={args:{variant:"inactive",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!"}),e.jsxs("div",{children:["У нас есть 7 красных кругов"," ",e.jsx("span",{className:"opacity-40",children:"и 8 синих. Точно так, как изображено на рисунке справа"})]})]})}},n={args:{variant:"thinking"}},c={args:{variant:"inactive",repeatable:!1,children:e.jsx(r,{children:"Нет, движущиеся круги тоже можно пересчитать"})}},i={args:{variant:"inactive",correct:!0,repeatable:!1,children:e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(r,{variant:"correct",children:"Нет, движущиеся круги тоже можно пересчитать"}),e.jsx(r,{children:"Да, я тоже так думаю"})]})}},t={args:{variant:"inactive",correct:!1,repeatable:!1,children:e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(r,{variant:"incorrect",children:"Нет, движущиеся круги тоже можно пересчитать"}),e.jsx(r,{children:"Да, я тоже так думаю"})]})}};var o,l,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <>
        <div>Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!</div>
        <div>
          У нас есть 7 красных кругов{' '}
          <span className='opacity-40'>и 8 синих. Точно так, как изображено на рисунке справа</span>
        </div>
      </>
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'inactive',
    children: <>
        <div>Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!</div>
        <div>
          У нас есть 7 красных кругов{' '}
          <span className='opacity-40'>и 8 синих. Точно так, как изображено на рисунке справа</span>
        </div>
      </>
  }
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var h,g,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'thinking'
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var u,f,j;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'inactive',
    repeatable: false,
    children: <Answer>Нет, движущиеся круги тоже можно пересчитать</Answer>
  }
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,A,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'inactive',
    correct: true,
    repeatable: false,
    children: <div className='flex flex-col gap-y-2'>
        <Answer variant='correct'>Нет, движущиеся круги тоже можно пересчитать</Answer>
        <Answer>Да, я тоже так думаю</Answer>
      </div>
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var y,b,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'inactive',
    correct: false,
    repeatable: false,
    children: <div className='flex flex-col gap-y-2'>
        <Answer variant='incorrect'>Нет, движущиеся круги тоже можно пересчитать</Answer>
        <Answer>Да, я тоже так думаю</Answer>
      </div>
  }
}`,...(S=(b=t.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const _=["Default","Inactive","Thinking","WithAnswer","AnswerCorrect","AnswerIncorrect"];export{i as AnswerCorrect,t as AnswerIncorrect,a as Default,s as Inactive,n as Thinking,c as WithAnswer,_ as __namedExportsOrder,W as default};
