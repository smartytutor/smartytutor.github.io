import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{c as t}from"./clsx-B-dksMZM.js";import{I as u}from"./Icon-CA65L85m.js";const d=s=>a.createElement("svg",{width:34,height:33,viewBox:"0 0 34 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},a.createElement("path",{d:"M34 0C25.8877 21.3231 7.95322 30.8846 0 33C10.4982 16.2462 11.5322 4.01923 10.7368 0H34Z",fill:"white"})),c=({variant:s="default",correct:l,repeatable:i=!1,callout:n=!0,children:o,className:r})=>e.jsx("div",{className:t("shadow-message relative flex flex-col gap-y-1 rounded-3xl px-5 py-4 transition",s==="default"&&"group mb-[33px] bg-white outline outline-1 outline-transparent transition-[outline-color] hover:outline-[hsl(248,100%,62%)]",s==="thinking"&&"bg-white",s==="inactive"&&"bg-[hsla(32,24%,92%)]",l===!0&&"border-2 border-[hsl(119,38%,55%)]",l===!1&&"border-2 border-[hsla(0,38%,55%)]",r),children:s==="thinking"?e.jsxs("div",{className:"opacity-50",children:["Думаю",e.jsx("span",{className:"inline-block animate-[blink_3s_ease-in-out_infinite]",children:"."}),e.jsx("span",{className:"inline-block animate-[blink_3s_0.5s_ease-in-out_infinite]",children:"."}),e.jsx("span",{className:"inline-block animate-[blink_3s_1s_ease-in-out_infinite]",children:"."})]}):e.jsxs(e.Fragment,{children:[o,i&&e.jsx(u,{name:"repeat",size:24,className:t("absolute bottom-2 right-3 text-[hsl(22,8%,61%)] transition-[color]",s==="default"&&"group-hover:text-[hsl(248,100%,62%)]",s==="inactive"&&"text-[hsl(22,8%,61%)]")}),s==="default"&&e.jsx("div",{className:t("pointer-events-none absolute right-[30%] top-full transition",!n&&"-translate-y-[120%] -rotate-[30deg] opacity-0"),children:e.jsx(d,{})})]})});c.__docgenInfo={description:"",methods:[],displayName:"Message",props:{variant:{defaultValue:{value:"'default'",computed:!1},required:!1},repeatable:{defaultValue:{value:"false",computed:!1},required:!1},callout:{defaultValue:{value:"true",computed:!1},required:!1}}};export{c as M};