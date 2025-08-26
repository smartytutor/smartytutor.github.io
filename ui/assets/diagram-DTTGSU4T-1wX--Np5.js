import{p as k}from"./chunk-44GW5IO5-CeOoBXVU.js";import{_ as l,s as R,g as F,t as I,q as _,a as E,b as D,K as G,z,F as y,G as C,H as P,l as H,a3 as V}from"./ScenarioGraphModal-C9PBXPAX.js";import{p as W}from"./radar-VG2SY3DT-BT7qcujc.js";import"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";import"./Action-DUkQC_DA.js";import"./clsx-B-dksMZM.js";import"./Button-BGi-_Oof.js";import"./useAssetPreloader-lqYNbhtK.js";import"./SfxProvider-C05We5iG.js";import"./useSfx-BACfETso.js";import"./Icon-C_N4S_ZJ.js";import"./proxy-BjE8Ig1W.js";import"./Answer-PL8H0T0r.js";import"./Chat-CqJaFEeq.js";import"./VoiceoverProvider-CSBJPItj.js";import"./Message-BVAFNPDt.js";import"./Input-DcyMQBIt.js";import"./Menu-BCBPHnai.js";import"./ProgressBar-DX19bTZY.js";import"./Smartik-DnMQQPug.js";import"./UnsupportedResolution-BATWXFnH.js";import"./index-DtnLUT1i.js";import"./redux-toolkit.modern-CeOX0_sF.js";import"./_arrayLikeKeys-BQo_jNKa.js";import"./index-0xIPAiCx.js";import"./NumeralFace-Ds693XiA.js";import"./Slot-CT1AWMYi.js";import"./Lot-DQsF8ln-.js";import"./constants-K3C4fZDC.js";import"./Module-BbZk3Jp-.js";import"./DraggableLot-BAYEXKcw.js";import"./defaults-mPm_OiqA.js";import"./LotPicker-B4IeDM1u.js";import"./Stack-RW0OyjXV.js";import"./LotPalette-CMrf6JxE.js";import"./DraggableToken-B8Igi4VB.js";import"./Sign-DADmf3_9.js";import"./Token-DuPhmN9g.js";import"./AnimatedCard-CCJgi9RF.js";import"./Deck-ngmnPlfX.js";import"./Highlighted-Z1bvx3uf.js";import"./iframe-CBwCUSlX.js";import"./index-DrFu-skq.js";import"./_basePickBy-B1Msjq0T.js";import"./_baseUniq-gNMxkkSY.js";import"./clone-DH2E9nvU.js";var h={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:h},g=structuredClone(w),B=P.radar,j=l(()=>y({...B,...C().radar}),"getConfig"),b=l(()=>g.axes,"getAxes"),q=l(()=>g.curves,"getCurves"),K=l(()=>g.options,"getOptions"),N=l(r=>{g.axes=r.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),U=l(r=>{g.curves=r.map(t=>({name:t.name,label:t.label??t.name,entries:X(t.entries)}))},"setCurves"),X=l(r=>{if(r[0].axis==null)return r.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const a=r.find(o=>{var i;return((i=o.axis)==null?void 0:i.$refText)===e.name});if(a===void 0)throw new Error("Missing entry for axis "+e.label);return a.value})},"computeCurveEntries"),Y=l(r=>{var e,a,o,i,n;const t=r.reduce((s,c)=>(s[c.name]=c,s),{});g.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??h.showLegend,ticks:((a=t.ticks)==null?void 0:a.value)??h.ticks,max:((o=t.max)==null?void 0:o.value)??h.max,min:((i=t.min)==null?void 0:i.value)??h.min,graticule:((n=t.graticule)==null?void 0:n.value)??h.graticule}},"setOptions"),Z=l(()=>{z(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:q,getOptions:K,setAxes:N,setCurves:U,setOptions:Y,getConfig:j,clear:Z,setAccTitle:D,getAccTitle:E,setDiagramTitle:_,getDiagramTitle:I,getAccDescription:F,setAccDescription:R},J=l(r=>{k(r,$);const{axes:t,curves:e,options:a}=r;$.setAxes(t),$.setCurves(e),$.setOptions(a)},"populate"),Q={parse:l(async r=>{const t=await W("radar",r);H.debug(t),J(t)},"parse")},tt=l((r,t,e,a)=>{const o=a.db,i=o.getAxes(),n=o.getCurves(),s=o.getOptions(),c=o.getConfig(),p=o.getDiagramTitle(),d=G(t),m=et(d,c),u=s.max??Math.max(...n.map(f=>Math.max(...f.entries))),x=s.min,v=Math.min(c.width,c.height)/2;rt(m,i,v,s.ticks,s.graticule),at(m,i,v,c),M(m,i,n,x,u,s.graticule,c),T(m,n,s.showLegend,c),m.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-c.height/2-c.marginTop)},"draw"),et=l((r,t)=>{const e=t.width+t.marginLeft+t.marginRight,a=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return r.attr("viewbox",`0 0 ${e} ${a}`).attr("width",e).attr("height",a),r.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),rt=l((r,t,e,a,o)=>{if(o==="circle")for(let i=0;i<a;i++){const n=e*(i+1)/a;r.append("circle").attr("r",n).attr("class","radarGraticule")}else if(o==="polygon"){const i=t.length;for(let n=0;n<a;n++){const s=e*(n+1)/a,c=t.map((p,d)=>{const m=2*d*Math.PI/i-Math.PI/2,u=s*Math.cos(m),x=s*Math.sin(m);return`${u},${x}`}).join(" ");r.append("polygon").attr("points",c).attr("class","radarGraticule")}}},"drawGraticule"),at=l((r,t,e,a)=>{const o=t.length;for(let i=0;i<o;i++){const n=t[i].label,s=2*i*Math.PI/o-Math.PI/2;r.append("line").attr("x1",0).attr("y1",0).attr("x2",e*a.axisScaleFactor*Math.cos(s)).attr("y2",e*a.axisScaleFactor*Math.sin(s)).attr("class","radarAxisLine"),r.append("text").text(n).attr("x",e*a.axisLabelFactor*Math.cos(s)).attr("y",e*a.axisLabelFactor*Math.sin(s)).attr("class","radarAxisLabel")}},"drawAxes");function M(r,t,e,a,o,i,n){const s=t.length,c=Math.min(n.width,n.height)/2;e.forEach((p,d)=>{if(p.entries.length!==s)return;const m=p.entries.map((u,x)=>{const v=2*Math.PI*x/s-Math.PI/2,f=A(u,a,o,c),O=f*Math.cos(v),S=f*Math.sin(v);return{x:O,y:S}});i==="circle"?r.append("path").attr("d",L(m,n.curveTension)).attr("class",`radarCurve-${d}`):i==="polygon"&&r.append("polygon").attr("points",m.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${d}`)})}l(M,"drawCurves");function A(r,t,e,a){const o=Math.min(Math.max(r,t),e);return a*(o-t)/(e-t)}l(A,"relativeRadius");function L(r,t){const e=r.length;let a=`M${r[0].x},${r[0].y}`;for(let o=0;o<e;o++){const i=r[(o-1+e)%e],n=r[o],s=r[(o+1)%e],c=r[(o+2)%e],p={x:n.x+(s.x-i.x)*t,y:n.y+(s.y-i.y)*t},d={x:s.x-(c.x-n.x)*t,y:s.y-(c.y-n.y)*t};a+=` C${p.x},${p.y} ${d.x},${d.y} ${s.x},${s.y}`}return`${a} Z`}l(L,"closedRoundCurve");function T(r,t,e,a){if(!e)return;const o=(a.width/2+a.marginRight)*3/4,i=-(a.height/2+a.marginTop)*3/4,n=20;t.forEach((s,c)=>{const p=r.append("g").attr("transform",`translate(${o}, ${i+c*n})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(s.label)})}l(T,"drawLegend");var ot={draw:tt},st=l((r,t)=>{let e="";for(let a=0;a<r.THEME_COLOR_LIMIT;a++){const o=r[`cScale${a}`];e+=`
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`}return e},"genIndexStyles"),it=l(r=>{const t=V(),e=C(),a=y(t,e.themeVariables),o=y(a.radar,r);return{themeVariables:a,radarOptions:o}},"buildRadarStyleOptions"),nt=l(({radar:r}={})=>{const{themeVariables:t,radarOptions:e}=it(r);return`
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
	${st(t,e)}
	`},"styles"),ee={parser:Q,db:$,renderer:ot,styles:nt};export{ee as diagram};
