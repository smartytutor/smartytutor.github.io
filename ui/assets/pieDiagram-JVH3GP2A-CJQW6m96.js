import{p as U}from"./chunk-44GW5IO5-DhxFuejK.js";import{$ as y,Q as F,aF as j,E as K,o as Q,p as Z,s as q,g as H,c as J,b as X,_ as u,l as z,v as Y,d as tt,F as et,K as rt,a8 as at,k as it}from"./ScenarioGraphModal-DU8ZiS7_.js";import{p as nt}from"./radar-VG2SY3DT-DjR0bKhM.js";import{d as P}from"./arc-Co019JUL.js";import{o as ot}from"./ordinal-Cboi1Yqb.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Dty5hFjB.js";import"./useImagePreloader-DoLrgOXj.js";import"./UnsupportedResolution-BewuEFEY.js";import"./index-B_WByVEu.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./Deck-DfwvEkP6.js";import"./AnimatedCard-B5OiutWw.js";import"./NumeralFace-4quTT4Vb.js";import"./DraggableToken-b_ObY-35.js";import"./Sign-CY00udov.js";import"./defaults-DIlqC9Zn.js";import"./Token-CYgrhBmq.js";import"./Highlighted-6-cdO6i-.js";import"./iframe-DVvG3hRl.js";import"./index-DrFu-skq.js";import"./_basePickBy-DNriTyBa.js";import"./_baseUniq-DoJOeMHc.js";import"./clone-DjbeY4s0.js";import"./init-Gi6I4Gst.js";function st(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,r=st,f=null,s=y(0),m=y(F),x=y(0);function n(e){var a,l=(e=j(e)).length,c,A,h=0,p=new Array(l),i=new Array(l),v=+s.apply(this,arguments),w=Math.min(F,Math.max(-F,m.apply(this,arguments)-v)),d,$=Math.min(Math.abs(w)/l,x.apply(this,arguments)),T=$*(w<0?-1:1),g;for(a=0;a<l;++a)(g=i[p[a]=a]=+t(e[a],a,e))>0&&(h+=g);for(r!=null?p.sort(function(S,C){return r(i[S],i[C])}):f!=null&&p.sort(function(S,C){return f(e[S],e[C])}),a=0,A=h?(w-l*T)/h:0;a<l;++a,v=d)c=p[a],g=i[c],d=v+(g>0?g*A:0)+T,i[c]={data:e[c],index:a,value:g,startAngle:v,endAngle:d,padAngle:$};return i}return n.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),n):t},n.sortValues=function(e){return arguments.length?(r=e,f=null,n):r},n.sort=function(e){return arguments.length?(f=e,r=null,n):f},n.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),n):s},n.endAngle=function(e){return arguments.length?(m=typeof e=="function"?e:y(+e),n):m},n.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),n):x},n}var R=K.pie,G={sections:new Map,showData:!1,config:R},b=G.sections,W=G.showData,pt=structuredClone(R),ut=u(()=>structuredClone(pt),"getConfig"),mt=u(()=>{b=new Map,W=G.showData,Y()},"clear"),gt=u(({label:t,value:r})=>{b.has(t)||(b.set(t,r),z.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),dt=u(()=>b,"getSections"),ft=u(t=>{W=t},"setShowData"),ht=u(()=>W,"getShowData"),I={getConfig:ut,clear:mt,setDiagramTitle:Q,getDiagramTitle:Z,setAccTitle:q,getAccTitle:H,setAccDescription:J,getAccDescription:X,addSection:gt,getSections:dt,setShowData:ft,getShowData:ht},vt=u((t,r)=>{U(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),St={parse:u(async t=>{const r=await nt("pie",t);z.debug(r),vt(r,I)},"parse")},yt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),xt=yt,At=u(t=>{const r=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,m)=>m.value-s.value);return ct().value(s=>s.value)(r)},"createPieArcs"),wt=u((t,r,f,s)=>{z.debug(`rendering pie chart
`+t);const m=s.db,x=tt(),n=et(m.getConfig(),x.pie),e=40,a=18,l=4,c=450,A=c,h=rt(r),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:i}=x;let[v]=at(i.pieOuterStrokeWidth);v??(v=2);const w=n.textPosition,d=Math.min(A,c)/2-e,$=P().innerRadius(0).outerRadius(d),T=P().innerRadius(d*w).outerRadius(d*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",d+v/2).attr("class","pieOuterCircle");const g=m.getSections(),S=At(g),C=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],D=ot(C);p.selectAll("mySlices").data(S).enter().append("path").attr("d",$).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let N=0;g.forEach(o=>{N+=o}),p.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/N*100).toFixed(0)+"%").attr("transform",o=>"translate("+T.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(m.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=a+l,_=E*D.domain().length/2,B=12*a,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",a).attr("height",a).style("fill",D).style("stroke",D),M.data(S).append("text").attr("x",a+l).attr("y",a-l).text(o=>{const{label:k,value:E}=o.data;return m.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),O=A+e+a+l+L;h.attr("viewBox",`0 0 ${O} ${c}`),it(h,c,O,n.useMaxWidth)},"draw"),Ct={draw:wt},ce={parser:St,db:I,renderer:Ct,styles:xt};export{ce as diagram};
