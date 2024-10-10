import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{B as r}from"./Button-BX7boJ1n.js";import{I as p}from"./Icon-CA65L85m.js";import{I as z}from"./Input-BH_k2DoX.js";import{A as V}from"./Action-DHS3K6Ew.js";import"./index-DJO9vBfz.js";import"./clsx-B-dksMZM.js";const _={title:"UI/Components/Action",component:V,decorators:a=>e.jsx("div",{className:"max-w-[1280px]",children:e.jsx(a,{})})},n={args:{children:["Первая","Вторая","Третья"].map(a=>e.jsx(r,{variant:"answer",children:a},a))}},s={args:{position:"bottom",children:["Первая","Вторая","Третья"].map(a=>e.jsx(r,{variant:"answer",children:a},a))}},t={args:{children:["Venus","Mercury","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto","Venus","Mercury","Earth"].map(a=>e.jsx(r,{variant:"answer",children:a},a))}},o={args:{children:[25,33,36,49,50,620,640,810,990].map(a=>e.jsx(r,{variant:"answer-icon",children:e.jsx("span",{className:"text-xl",children:a})},a))}},c={args:{className:"max-w-[800px]",children:["Нет, движущиеся круги тоже можно пересчитать.","Нет, движущиеся круги тоже можно пересчитать. "].map(a=>e.jsx(r,{variant:"answer",className:"flex-1",children:a},a))}},i={args:{showSend:!1,children:e.jsxs(e.Fragment,{children:[e.jsxs(r,{variant:"cta",className:"min-w-[400px]",children:[e.jsx(p,{name:"check",size:24}),"Я готов",e.jsx("span",{className:"absolute right-4 text-sm opacity-40",children:"Space"})]}),e.jsxs(r,{variant:"cta",children:[e.jsx(p,{name:"help",size:24}),"Нужна помощь"]})]})}},m={args:{children:e.jsx(z,{value:"15",label:"Введи ответ"})}};var l,u,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: ['Первая', 'Вторая', 'Третья'].map(text => <Button variant='answer' key={text}>
        {text}
      </Button>)
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    position: 'bottom',
    children: ['Первая', 'Вторая', 'Третья'].map(text => <Button variant='answer' key={text}>
        {text}
      </Button>)
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var B,j,v;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: ['Venus', 'Mercury', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Venus', 'Mercury', 'Earth'].map(text => <Button variant='answer' key={text}>
        {text}
      </Button>)
  }
}`,...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,N,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [25, 33, 36, 49, 50, 620, 640, 810, 990].map(text => <Button variant='answer-icon' key={text}>
        <span className='text-xl'>{text}</span>
      </Button>)
  }
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var S,f,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    className: 'max-w-[800px]',
    children: ['Нет, движущиеся круги тоже можно пересчитать.', 'Нет, движущиеся круги тоже можно пересчитать. '].map(text => <Button variant='answer' className='flex-1' key={text}>
          {text}
        </Button>)
  }
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var b,M,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showSend: false,
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
}`,...(A=(E=m.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const F=["Default","ToBottom","ManyOptions","Numbers","LargeText","CallToAction","InputText"];export{i as CallToAction,n as Default,m as InputText,c as LargeText,t as ManyOptions,o as Numbers,s as ToBottom,F as __namedExportsOrder,_ as default};
