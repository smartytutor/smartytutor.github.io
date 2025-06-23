import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{A as n}from"./Action-DQ72ZiUY.js";import{B as m}from"./Button-CGecWSMn.js";import p from"./Chat.stories-lQbS4D1C.js";import{U as i}from"./SideSlide-Bl0Pr9q0.js";import"./index-DRjF_FHU.js";import"./clsx-B-dksMZM.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Chat-CUlhg49f.js";import"./Answer-CpHO1qYv.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Bonj4xt4.js";import"./index-BK1i6FtS.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-BOaknIRz.js";import"./Deck-Btm96sEx.js";import"./AnimatedCard-CnrVEWk-.js";import"./NumeralFace-BB1rHCDk.js";const M={title:"UI/UI",component:i,parameters:{layout:"fullscreen"},tags:["!autodocs"]},t={args:{chat:{messages:p.args.messages},action:r.jsx(n,{position:"bottom",onSubmit:()=>{},children:["Первая","Вторая","Третья"].map(e=>r.jsx(m,{variant:"answer",children:e},e))}),progressBar:{title:"Вводный урок: Вступление",progress:[{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1},{rate:0,completed:!1}]},children:r.jsx("img",{src:"/dragon.png"})}};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const O=["UI"];export{t as UI,O as __namedExportsOrder,M as default};
