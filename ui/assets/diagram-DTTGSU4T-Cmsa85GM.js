import{p as k}from"./chunk-44GW5IO5-C49i2zF3.js";import{E as R,_ as l,s as E,g as F,o as I,p as _,b as D,c as G,l as P,F as y,G as C,v as z,K as V,a3 as W}from"./ScenarioGraphModal-DZbZ8ykX.js";import{p as B}from"./radar-VG2SY3DT-Dre1hGDc.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Dfzh54ZR.js";import"./useImagePreloader-C1UmUM2_.js";import"./SideSlide-Dn38-Xws.js";import"./index-BM9kYpov.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-BOaknIRz.js";import"./Deck-CiBVLBkl.js";import"./AnimatedCard-2cVL3gan.js";import"./NumeralFace-BKM8_hJa.js";import"./iframe-DfL0SmyH.js";import"./keysIn-Bb7DVGF9.js";import"./index-DrFu-skq.js";import"./_basePickBy-BqME6Tx4.js";import"./_baseUniq-C1FS4ver.js";import"./defaults-BleV3Q12.js";import"./clone-rBMIU3Q9.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:h},g=structuredClone(w),H=R.radar,j=l(()=>y({...H,...C().radar}),"getConfig"),b=l(()=>g.axes,"getAxes"),K=l(()=>g.curves,"getCurves"),N=l(()=>g.options,"getOptions"),U=l(a=>{g.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),X=l(a=>{g.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:Y(t.entries)}))},"setCurves"),Y=l(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>{var n;return((n=s.axis)==null?void 0:n.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),Z=l(a=>{var e,r,s,n,i;const t=a.reduce((o,c)=>(o[c.name]=c,o),{});g.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??h.showLegend,ticks:((r=t.ticks)==null?void 0:r.value)??h.ticks,max:((s=t.max)==null?void 0:s.value)??h.max,min:((n=t.min)==null?void 0:n.value)??h.min,graticule:((i=t.graticule)==null?void 0:i.value)??h.graticule}},"setOptions"),q=l(()=>{z(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:K,getOptions:N,setAxes:U,setCurves:X,setOptions:Z,getConfig:j,clear:q,setAccTitle:E,getAccTitle:F,setDiagramTitle:I,getDiagramTitle:_,getAccDescription:D,setAccDescription:G},J=l(a=>{k(a,$);const{axes:t,curves:e,options:r}=a;$.setAxes(t),$.setCurves(e),$.setOptions(r)},"populate"),Q={parse:l(async a=>{const t=await B("radar",a);P.debug(t),J(t)},"parse")},tt=l((a,t,e,r)=>{const s=r.db,n=s.getAxes(),i=s.getCurves(),o=s.getOptions(),c=s.getConfig(),p=s.getDiagramTitle(),m=V(t),d=et(m,c),u=o.max??Math.max(...i.map(f=>Math.max(...f.entries))),x=o.min,v=Math.min(c.width,c.height)/2;at(d,n,v,o.ticks,o.graticule),rt(d,n,v,c),M(d,n,i,x,u,o.graticule,c),T(d,i,o.showLegend,c),d.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),et=l((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),at=l((a,t,e,r,s)=>{if(s==="circle")for(let n=0;n<r;n++){const i=e*(n+1)/r;a.append("circle").attr("r",i).attr("class","radarGraticule")}else if(s==="polygon"){const n=t.length;for(let i=0;i<r;i++){const o=e*(i+1)/r,c=t.map((p,m)=>{const d=2*m*Math.PI/n-Math.PI/2,u=o*Math.cos(d),x=o*Math.sin(d);return`${u},${x}`}).join(" ");a.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),rt=l((a,t,e,r)=>{const s=t.length;for(let n=0;n<s;n++){const i=t[n].label,o=2*n*Math.PI/s-Math.PI/2;a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(o)).attr("y2",e*r.axisScaleFactor*Math.sin(o)).attr("class","radarAxisLine"),a.append("text").text(i).attr("x",e*r.axisLabelFactor*Math.cos(o)).attr("y",e*r.axisLabelFactor*Math.sin(o)).attr("class","radarAxisLabel")}},"drawAxes");function M(a,t,e,r,s,n,i){const o=t.length,c=Math.min(i.width,i.height)/2;e.forEach((p,m)=>{if(p.entries.length!==o)return;const d=p.entries.map((u,x)=>{const v=2*Math.PI*x/o-Math.PI/2,f=A(u,r,s,c),O=f*Math.cos(v),S=f*Math.sin(v);return{x:O,y:S}});n==="circle"?a.append("path").attr("d",L(d,i.curveTension)).attr("class",`radarCurve-${m}`):n==="polygon"&&a.append("polygon").attr("points",d.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${m}`)})}l(M,"drawCurves");function A(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}l(A,"relativeRadius");function L(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const n=a[(s-1+e)%e],i=a[s],o=a[(s+1)%e],c=a[(s+2)%e],p={x:i.x+(o.x-n.x)*t,y:i.y+(o.y-n.y)*t},m={x:o.x-(c.x-i.x)*t,y:o.y-(c.y-i.y)*t};r+=` C${p.x},${p.y} ${m.x},${m.y} ${o.x},${o.y}`}return`${r} Z`}l(L,"closedRoundCurve");function T(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,i=20;t.forEach((o,c)=>{const p=a.append("g").attr("transform",`translate(${s}, ${n+c*i})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(o.label)})}l(T,"drawLegend");var st={draw:tt},ot=l((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),nt=l(a=>{const t=W(),e=C(),r=y(t,e.themeVariables),s=y(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),it=l(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=nt(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${ot(t,e)}
	`},"styles"),Wt={parser:Q,db:$,renderer:st,styles:it};export{Wt as diagram};
