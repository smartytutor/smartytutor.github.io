import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{A as r}from"./Answer-CRltBUUP.js";import{r as y}from"./index-DJO9vBfz.js";import{c as w}from"./clsx-B-dksMZM.js";import{M as A}from"./Message-DnkNuTKn.js";const f=({variant:i="default",messages:g})=>e.jsx("div",{className:"relative flex flex-col-reverse items-start gap-y-3 px-2",children:g.map(({children:u,...j},t)=>y.createElement(A,{...j,variant:t===0?"default":"inactive",callout:i==="default",className:w(i==="default"&&t>0&&"opacity-40"),key:t},u))});f.__docgenInfo={description:"",methods:[],displayName:"Chat",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'history'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'history'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},messages:{required:!0,tsType:{name:"Array",elements:[{name:"ComponentProps",elements:[{name:"Message"}],raw:"ComponentProps<typeof Message>"}],raw:"ComponentProps<typeof Message>[]"},description:""}}};const b={title:"UI/Components/Chat",component:f,decorators:i=>e.jsx("div",{className:"max-w-[336px]",children:e.jsx(i,{})})},s={args:{messages:[{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Привет!"}),e.jsx("div",{children:"Рад видеть. Давай покажу как тут всё устроено"})]})}].reverse()}},n={args:{messages:[{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Привет!"}),e.jsx("div",{children:"Рад видеть. Давай покажу как тут всё устроено"})]})},{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Привет!"}),e.jsx("div",{children:"Рад видеть. Давай покажу как тут всё устроено"})]})},{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!"}),e.jsx("div",{children:"У нас есть 7 красных кругов и 8 синих. Точно так, как изображено на рисунке справа"})]})}].reverse()}},a={args:{variant:"history",messages:[{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Привет!"}),e.jsx("div",{children:"Рад видеть. Давай покажу как тут всё устроено"})]})},{repeatable:!1,children:e.jsx(r,{children:"Нет, движущиеся круги тоже можно пересчитать"})},{correct:!0,repeatable:!1,children:e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(r,{variant:"correct",children:"Нет, движущиеся круги тоже можно пересчитать"}),e.jsx(r,{children:"Да, я тоже так думаю"})]})},{correct:!1,repeatable:!1,children:e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(r,{variant:"incorrect",children:"Нет, движущиеся круги тоже можно пересчитать"}),e.jsx(r,{children:"Да, я тоже так думаю"})]})},{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!"}),e.jsx("div",{children:"У нас есть 7 красных кругов и 8 синих. Точно так, как изображено на рисунке справа"})]})}].reverse()}};var d,l,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    messages: [{
      children: <>
            <div>Привет!</div>
            <div>Рад видеть. Давай покажу как тут всё устроено</div>
          </>
    }].reverse()
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var o,m,v;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    messages: [{
      children: <>
            <div>Привет!</div>
            <div>Рад видеть. Давай покажу как тут всё устроено</div>
          </>
    }, {
      children: <>
            <div>Привет!</div>
            <div>Рад видеть. Давай покажу как тут всё устроено</div>
          </>
    }, {
      children: <>
            <div>
              Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!
            </div>
            <div>У нас есть 7 красных кругов и 8 синих. Точно так, как изображено на рисунке справа</div>
          </>
    }].reverse()
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,h,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'history',
    messages: [{
      children: <>
            <div>Привет!</div>
            <div>Рад видеть. Давай покажу как тут всё устроено</div>
          </>
    }, {
      repeatable: false,
      children: <Answer>Нет, движущиеся круги тоже можно пересчитать</Answer>
    }, {
      correct: true,
      repeatable: false,
      children: <div className='flex flex-col gap-y-2'>
            <Answer variant='correct'>Нет, движущиеся круги тоже можно пересчитать</Answer>
            <Answer>Да, я тоже так думаю</Answer>
          </div>
    }, {
      correct: false,
      repeatable: false,
      children: <div className='flex flex-col gap-y-2'>
            <Answer variant='incorrect'>Нет, движущиеся круги тоже можно пересчитать</Answer>
            <Answer>Да, я тоже так думаю</Answer>
          </div>
    }, {
      children: <>
            <div>
              Чему равно 7 + 8? Давай разберем это на конкретных предметах с помощью моей новой Суммирующей машины!
            </div>
            <div>У нас есть 7 красных кругов и 8 синих. Точно так, как изображено на рисунке справа</div>
          </>
    }].reverse()
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const C=["Greeting","WithMessages","History"],E=Object.freeze(Object.defineProperty({__proto__:null,Greeting:s,History:a,WithMessages:n,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{f as C,a as H,E as a};
