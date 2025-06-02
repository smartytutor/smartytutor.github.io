import{j as t}from"./jsx-runtime-DR9Q75dM.js";import{U as n,P as m,s as i}from"./SideSlide-XflnVffE.js";import{A as p}from"./Action-DQ72ZiUY.js";import{B as c}from"./Button-CGecWSMn.js";import l from"./Chat.stories-Ck-yjM5M.js";import"./index-DRjF_FHU.js";import"./Answer-CpHO1qYv.js";import"./clsx-B-dksMZM.js";import"./Icon-DNOHRIBS.js";import"./Chat-PXHufrxt.js";import"./Message-ByLECGpj.js";import"./proxy-C00yw4cG.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-BPRx95dn.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-BBTc_PJo.js";import"./Deck-CajM8NqM.js";import"./AnimatedCard-CXPnNFtw.js";import"./NumeralFace-Dae8UCBG.js";const C={title:"UI/UI",component:n,parameters:{layout:"fullscreen"},decorators:r=>t.jsx(m,{store:i,children:t.jsx(r,{})}),tags:["!autodocs"]},e={args:{chat:{messages:l.args.messages},action:t.jsx(p,{position:"bottom",onSubmit:()=>{},children:["Первая","Вторая","Третья"].map(r=>t.jsx(c,{variant:"answer",children:r},r))}),progressBar:{title:"Вводный урок: Вступление",progress:[{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1}]},children:t.jsx("img",{src:"/dragon.png"})}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    chat: {
      messages: ChatMeta.args.messages
    },
    action: <Action position='bottom' onSubmit={() => {}}>
        {['Первая', 'Вторая', 'Третья'].map(text => <Button variant='answer' key={text}>
            {text}
          </Button>)}
      </Action>,
    progressBar: {
      title: 'Вводный урок: Вступление',
      progress: [{
        rate: 0,
        completed: false
      }, {
        rate: 0,
        completed: false
      }, {
        rate: 0,
        completed: false
      }, {
        rate: 0,
        completed: false
      }]
    },
    children: <img src='/dragon.png' />
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const M=["UI"];export{e as UI,M as __namedExportsOrder,C as default};
