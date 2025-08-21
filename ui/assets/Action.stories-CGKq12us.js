import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as r}from"./Button-BGi-_Oof.js";import{I as p}from"./Icon-C_N4S_ZJ.js";import{I as z}from"./Input-DcyMQBIt.js";import{A as V}from"./Action-DUkQC_DA.js";import"./index-DRjF_FHU.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-C05We5iG.js";import"./useSfx-BACfETso.js";import"./clsx-B-dksMZM.js";import"./proxy-BjE8Ig1W.js";const G={title:"UI/Action",component:V,decorators:a=>e.jsx("div",{className:"max-w-[1280px] py-12",children:e.jsx(a,{})}),args:{onSubmit:()=>{}}},t={args:{children:["Первая","Вторая","Третья"].map(a=>e.jsx(r,{variant:"answer",children:a},a))}},n={args:{position:"bottom",children:["Первая","Вторая","Третья"].map(a=>e.jsx(r,{variant:"answer",children:a},a))}},s={args:{children:["Venus","Mercury","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto","Venus","Mercury","Earth"].map(a=>e.jsx(r,{variant:"answer",children:a},a))}},o={args:{children:[25,33,36,49,50,620,640,810,990].map(a=>e.jsx(r,{variant:"answer-icon",children:e.jsx("span",{className:"text-xl",children:a})},a))}},c={args:{className:"max-w-[800px]",children:["Нет, движущиеся круги тоже можно пересчитать.","Нет, движущиеся круги тоже можно пересчитать. "].map(a=>e.jsx(r,{variant:"answer",className:"flex-1",children:a},a))}},i={args:{onSubmit:void 0,children:e.jsxs(e.Fragment,{children:[e.jsxs(r,{variant:"cta",className:"min-w-[400px]",children:[e.jsx(p,{name:"check",size:24}),"Я готов",e.jsx("span",{className:"absolute right-4 text-sm opacity-40",children:"Space"})]}),e.jsxs(r,{variant:"cta",children:[e.jsx(p,{name:"help",size:24}),"Нужна помощь"]})]})}},m={args:{children:e.jsx(z,{value:"15",label:"Введи ответ"})}};var u,l,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: ['Первая', 'Вторая', 'Третья'].map(text => <Button variant='answer' key={text}>
        {text}
      </Button>)
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var x,h,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    children: ['Первая', 'Вторая', 'Третья'].map(text => <Button variant='answer' key={text}>
        {text}
      </Button>)
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,B,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: ['Venus', 'Mercury', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Venus', 'Mercury', 'Earth'].map(text => <Button variant='answer' key={text}>
        {text}
      </Button>)
  }
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var w,N,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [25, 33, 36, 49, 50, 620, 640, 810, 990].map(text => <Button variant='answer-icon' key={text}>
        <span className='text-xl'>{text}</span>
      </Button>)
  }
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var S,b,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    className: 'max-w-[800px]',
    children: ['Нет, движущиеся круги тоже можно пересчитать.', 'Нет, движущиеся круги тоже можно пересчитать. '].map(text => <Button variant='answer' className='flex-1' key={text}>
          {text}
        </Button>)
  }
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var I,M,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    onSubmit: undefined,
    children: <>
        <Button variant='cta' className='min-w-[400px]'>
          <Icon name='check' size={24} />Я готов
          <span className='absolute right-4 text-sm opacity-40'>Space</span>
        </Button>
        <Button variant='cta'>
          <Icon name='help' size={24} />
          Нужна помощь
        </Button>
      </>
  }
}`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,E,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <Input value='15' label='Введи ответ' />
  }
}`,...(A=(E=m.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const H=["Default","ToBottom","ManyOptions","Numbers","LargeText","CallToAction","InputText"];export{i as CallToAction,t as Default,m as InputText,c as LargeText,s as ManyOptions,o as Numbers,n as ToBottom,H as __namedExportsOrder,G as default};
