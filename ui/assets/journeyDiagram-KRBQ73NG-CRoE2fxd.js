import{d as gt,f as mt,g as ot,b as xt}from"./chunk-WZLT4MVT-BOqh5VCW.js";import{g as kt}from"./chunk-UIWBPB2F-vAPyS9Mm.js";import{_ as n,d as R,o as _t,p as vt,s as bt,g as wt,c as Tt,b as St,v as $t,j as G,k as Mt}from"./ScenarioGraphModal-C_1VBn4n.js";import{d as et}from"./arc-CpgHC1e7.js";import"./jsx-runtime-DR9Q75dM.js";import"./index-DRjF_FHU.js";import"./Action-DQ72ZiUY.js";import"./clsx-B-dksMZM.js";import"./Button-CGecWSMn.js";import"./Icon-DNOHRIBS.js";import"./proxy-C00yw4cG.js";import"./Answer-CpHO1qYv.js";import"./Chat-CUlhg49f.js";import"./VoiceoverProvider-i68q2e-2.js";import"./Message-ByLECGpj.js";import"./Input-0sRJfh9S.js";import"./Menu-DuHofHgY.js";import"./ProgressBar-Dhx3fOxm.js";import"./Smartik-Dty5hFjB.js";import"./useImagePreloader-DoLrgOXj.js";import"./UnsupportedResolution-BH7zN-Bc.js";import"./index-TcLXE8f6.js";import"./redux-toolkit.modern-DEr0YuQG.js";import"./_arrayLikeKeys-CNLEhIRO.js";import"./index-D8bzLNKF.js";import"./Slot-DWk7hR4w.js";import"./Lot-BdQIuWxX.js";import"./constants-K3C4fZDC.js";import"./Module-DnAXLbcZ.js";import"./DraggableLot-ByRJV8sO.js";import"./defaults-DIlqC9Zn.js";import"./LotPicker-CDravAKg.js";import"./Stack-obeTg5PL.js";import"./LotPalette-CnW9wLxe.js";import"./DraggableToken-DySDDj_J.js";import"./Sign-CY00udov.js";import"./Token-CYgrhBmq.js";import"./AnimatedCard-B5OiutWw.js";import"./NumeralFace-4quTT4Vb.js";import"./Deck-LbvDBcxz.js";import"./Highlighted-6-cdO6i-.js";import"./iframe-BplEBOLz.js";import"./index-DrFu-skq.js";var U=function(){var t=n(function(h,i,a,o){for(a=a||{},o=h.length;o--;a[h[o]]=i);return a},"o"),e=[6,8,10,11,12,14,16,17,18],s=[1,9],c=[1,10],r=[1,11],p=[1,12],u=[1,13],y=[1,14],g={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,taskName:18,taskData:19,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",18:"taskName",19:"taskData"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,2]],performAction:n(function(i,a,o,d,f,l,b){var k=l.length-1;switch(f){case 1:return l[k-1];case 2:this.$=[];break;case 3:l[k-1].push(l[k]),this.$=l[k-1];break;case 4:case 5:this.$=l[k];break;case 6:case 7:this.$=[];break;case 8:d.setDiagramTitle(l[k].substr(6)),this.$=l[k].substr(6);break;case 9:this.$=l[k].trim(),d.setAccTitle(this.$);break;case 10:case 11:this.$=l[k].trim(),d.setAccDescription(this.$);break;case 12:d.addSection(l[k].substr(8)),this.$=l[k].substr(8);break;case 13:d.addTask(l[k-1],l[k]),this.$="task";break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:s,12:c,14:r,16:p,17:u,18:y},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:15,11:s,12:c,14:r,16:p,17:u,18:y},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,16]},{15:[1,17]},t(e,[2,11]),t(e,[2,12]),{19:[1,18]},t(e,[2,4]),t(e,[2,9]),t(e,[2,10]),t(e,[2,13])],defaultActions:{},parseError:n(function(i,a){if(a.recoverable)this.trace(i);else{var o=new Error(i);throw o.hash=a,o}},"parseError"),parse:n(function(i){var a=this,o=[0],d=[],f=[null],l=[],b=this.table,k="",C=0,K=0,dt=2,Q=1,yt=l.slice.call(arguments,1),_=Object.create(this.lexer),I={yy:{}};for(var O in this.yy)Object.prototype.hasOwnProperty.call(this.yy,O)&&(I.yy[O]=this.yy[O]);_.setInput(i,I.yy),I.yy.lexer=_,I.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var Y=_.yylloc;l.push(Y);var pt=_.options&&_.options.ranges;typeof I.yy.parseError=="function"?this.parseError=I.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ft(w){o.length=o.length-2*w,f.length=f.length-w,l.length=l.length-w}n(ft,"popStack");function D(){var w;return w=d.pop()||_.lex()||Q,typeof w!="number"&&(w instanceof Array&&(d=w,w=d.pop()),w=a.symbols_[w]||w),w}n(D,"lex");for(var v,A,T,q,F={},N,M,tt,z;;){if(A=o[o.length-1],this.defaultActions[A]?T=this.defaultActions[A]:((v===null||typeof v>"u")&&(v=D()),T=b[A]&&b[A][v]),typeof T>"u"||!T.length||!T[0]){var X="";z=[];for(N in b[A])this.terminals_[N]&&N>dt&&z.push("'"+this.terminals_[N]+"'");_.showPosition?X="Parse error on line "+(C+1)+`:
`+_.showPosition()+`
Expecting `+z.join(", ")+", got '"+(this.terminals_[v]||v)+"'":X="Parse error on line "+(C+1)+": Unexpected "+(v==Q?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(X,{text:_.match,token:this.terminals_[v]||v,line:_.yylineno,loc:Y,expected:z})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+A+", token: "+v);switch(T[0]){case 1:o.push(v),f.push(_.yytext),l.push(_.yylloc),o.push(T[1]),v=null,K=_.yyleng,k=_.yytext,C=_.yylineno,Y=_.yylloc;break;case 2:if(M=this.productions_[T[1]][1],F.$=f[f.length-M],F._$={first_line:l[l.length-(M||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(M||1)].first_column,last_column:l[l.length-1].last_column},pt&&(F._$.range=[l[l.length-(M||1)].range[0],l[l.length-1].range[1]]),q=this.performAction.apply(F,[k,K,C,I.yy,T[1],f,l].concat(yt)),typeof q<"u")return q;M&&(o=o.slice(0,-1*M*2),f=f.slice(0,-1*M),l=l.slice(0,-1*M)),o.push(this.productions_[T[1]][0]),f.push(F.$),l.push(F._$),tt=b[o[o.length-2]][o[o.length-1]],o.push(tt);break;case 3:return!0}}return!0},"parse")},m=function(){var h={EOF:1,parseError:n(function(a,o){if(this.yy.parser)this.yy.parser.parseError(a,o);else throw new Error(a)},"parseError"),setInput:n(function(i,a){return this.yy=a||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var a=i.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:n(function(i){var a=i.length,o=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===d.length?this.yylloc.first_column:0)+d[d.length-o.length].length-o[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(i){this.unput(this.match.slice(i))},"less"),pastInput:n(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var i=this.pastInput(),a=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+a+"^"},"showPosition"),test_match:n(function(i,a){var o,d,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),d=i[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],o=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),o)return o;if(this._backtrack){for(var l in f)this[l]=f[l];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,a,o,d;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),l=0;l<f.length;l++)if(o=this._input.match(this.rules[f[l]]),o&&(!a||o[0].length>a[0].length)){if(a=o,d=l,this.options.backtrack_lexer){if(i=this.test_match(o,f[l]),i!==!1)return i;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(i=this.test_match(a,f[d]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var a=this.next();return a||this.lex()},"lex"),begin:n(function(a){this.conditionStack.push(a)},"begin"),popState:n(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:n(function(a){this.begin(a)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(a,o,d,f){switch(d){case 0:break;case 1:break;case 2:return 10;case 3:break;case 4:break;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 18;case 16:return 19;case 17:return":";case 18:return 6;case 19:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18,19],inclusive:!0}}};return h}();g.lexer=m;function x(){this.yy={}}return n(x,"Parser"),x.prototype=g,g.Parser=x,new x}();U.parser=U;var Et=U,V="",Z=[],L=[],B=[],Ct=n(function(){Z.length=0,L.length=0,V="",B.length=0,$t()},"clear"),Pt=n(function(t){V=t,Z.push(t)},"addSection"),It=n(function(){return Z},"getSections"),At=n(function(){let t=it();const e=100;let s=0;for(;!t&&s<e;)t=it(),s++;return L.push(...B),L},"getTasks"),Ft=n(function(){const t=[];return L.forEach(s=>{s.people&&t.push(...s.people)}),[...new Set(t)].sort()},"updateActors"),Vt=n(function(t,e){const s=e.substr(1).split(":");let c=0,r=[];s.length===1?(c=Number(s[0]),r=[]):(c=Number(s[0]),r=s[1].split(","));const p=r.map(y=>y.trim()),u={section:V,type:V,people:p,task:t,score:c};B.push(u)},"addTask"),Rt=n(function(t){const e={section:V,type:V,description:t,task:t,classes:[]};L.push(e)},"addTaskOrg"),it=n(function(){const t=n(function(s){return B[s].processed},"compileTask");let e=!0;for(const[s,c]of B.entries())t(s),e=e&&c.processed;return e},"compileTasks"),Lt=n(function(){return Ft()},"getActors"),rt={getConfig:n(()=>R().journey,"getConfig"),clear:Ct,setDiagramTitle:_t,getDiagramTitle:vt,setAccTitle:bt,getAccTitle:wt,setAccDescription:Tt,getAccDescription:St,addSection:Pt,getSections:It,getTasks:At,addTask:Vt,addTaskOrg:Rt,getActors:Lt},Bt=n(t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
    font-family: ${t.fontFamily};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
  ${kt()}
`,"getStyles"),jt=Bt,J=n(function(t,e){return gt(t,e)},"drawRect"),Nt=n(function(t,e){const c=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),r=t.append("g");r.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),r.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function p(g){const m=et().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}n(p,"smile");function u(g){const m=et().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",m).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}n(u,"sad");function y(g){g.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return n(y,"ambivalent"),e.score>3?p(r):e.score<3?u(r):y(r),c},"drawFace"),lt=n(function(t,e){const s=t.append("circle");return s.attr("cx",e.cx),s.attr("cy",e.cy),s.attr("class","actor-"+e.pos),s.attr("fill",e.fill),s.attr("stroke",e.stroke),s.attr("r",e.r),s.class!==void 0&&s.attr("class",s.class),e.title!==void 0&&s.append("title").text(e.title),s},"drawCircle"),ct=n(function(t,e){return mt(t,e)},"drawText"),zt=n(function(t,e){function s(r,p,u,y,g){return r+","+p+" "+(r+u)+","+p+" "+(r+u)+","+(p+y-g)+" "+(r+u-g*1.2)+","+(p+y)+" "+r+","+(p+y)}n(s,"genPoints");const c=t.append("polygon");c.attr("points",s(e.x,e.y,50,20,7)),c.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,ct(t,e)},"drawLabel"),Wt=n(function(t,e,s){const c=t.append("g"),r=ot();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=s.width*e.taskCount+s.diagramMarginX*(e.taskCount-1),r.height=s.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,J(c,r),ht(s)(e.text,c,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},s,e.colour)},"drawSection"),nt=-1,Ot=n(function(t,e,s){const c=e.x+s.width/2,r=t.append("g");nt++;const p=300+5*30;r.append("line").attr("id","task"+nt).attr("x1",c).attr("y1",e.y).attr("x2",c).attr("y2",p).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Nt(r,{cx:c,cy:300+(5-e.score)*30,score:e.score});const u=ot();u.x=e.x,u.y=e.y,u.fill=e.fill,u.width=s.width,u.height=s.height,u.class="task task-type-"+e.num,u.rx=3,u.ry=3,J(r,u);let y=e.x+14;e.people.forEach(g=>{const m=e.actors[g].color,x={cx:y,cy:e.y,r:7,fill:m,stroke:"#000",title:g,pos:e.actors[g].position};lt(r,x),y+=10}),ht(s)(e.task,r,u.x,u.y,u.width,u.height,{class:"task"},s,e.colour)},"drawTask"),Yt=n(function(t,e){xt(t,e)},"drawBackgroundRect"),ht=function(){function t(r,p,u,y,g,m,x,h){const i=p.append("text").attr("x",u+g/2).attr("y",y+m/2+5).style("font-color",h).style("text-anchor","middle").text(r);c(i,x)}n(t,"byText");function e(r,p,u,y,g,m,x,h,i){const{taskFontSize:a,taskFontFamily:o}=h,d=r.split(/<br\s*\/?>/gi);for(let f=0;f<d.length;f++){const l=f*a-a*(d.length-1)/2,b=p.append("text").attr("x",u+g/2).attr("y",y).attr("fill",i).style("text-anchor","middle").style("font-size",a).style("font-family",o);b.append("tspan").attr("x",u+g/2).attr("dy",l).text(d[f]),b.attr("y",y+m/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),c(b,x)}}n(e,"byTspan");function s(r,p,u,y,g,m,x,h){const i=p.append("switch"),o=i.append("foreignObject").attr("x",u).attr("y",y).attr("width",g).attr("height",m).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");o.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(r),e(r,i,u,y,g,m,x,h),c(o,x)}n(s,"byFo");function c(r,p){for(const u in p)u in p&&r.attr(u,p[u])}return n(c,"_setTextAttrs"),function(r){return r.textPlacement==="fo"?s:r.textPlacement==="old"?t:e}}(),qt=n(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics"),j={drawRect:J,drawCircle:lt,drawSection:Wt,drawText:ct,drawLabel:zt,drawTask:Ot,drawBackgroundRect:Yt,initGraphics:qt},Xt=n(function(t){Object.keys(t).forEach(function(s){$[s]=t[s]})},"setConf"),E={},W=0;function ut(t){const e=R().journey,s=e.maxLabelWidth;W=0;let c=60;Object.keys(E).forEach(r=>{const p=E[r].color,u={cx:20,cy:c,r:7,fill:p,stroke:"#000",pos:E[r].position};j.drawCircle(t,u);let y=t.append("text").attr("visibility","hidden").text(r);const g=y.node().getBoundingClientRect().width;y.remove();let m=[];if(g<=s)m=[r];else{const x=r.split(" ");let h="";y=t.append("text").attr("visibility","hidden"),x.forEach(i=>{const a=h?`${h} ${i}`:i;if(y.text(a),y.node().getBoundingClientRect().width>s){if(h&&m.push(h),h=i,y.text(i),y.node().getBoundingClientRect().width>s){let d="";for(const f of i)d+=f,y.text(d+"-"),y.node().getBoundingClientRect().width>s&&(m.push(d.slice(0,-1)+"-"),d=f);h=d}}else h=a}),h&&m.push(h),y.remove()}m.forEach((x,h)=>{const i={x:40,y:c+7+h*20,fill:"#666",text:x,textMargin:e.boxTextMargin??5},o=j.drawText(t,i).node().getBoundingClientRect().width;o>W&&o>e.leftMargin-o&&(W=o)}),c+=Math.max(20,m.length*20)})}n(ut,"drawActorLegend");var $=R().journey,P=0,Gt=n(function(t,e,s,c){const r=R(),p=r.journey.titleColor,u=r.journey.titleFontSize,y=r.journey.titleFontFamily,g=r.securityLevel;let m;g==="sandbox"&&(m=G("#i"+e));const x=g==="sandbox"?G(m.nodes()[0].contentDocument.body):G("body");S.init();const h=x.select("#"+e);j.initGraphics(h);const i=c.db.getTasks(),a=c.db.getDiagramTitle(),o=c.db.getActors();for(const C in E)delete E[C];let d=0;o.forEach(C=>{E[C]={color:$.actorColours[d%$.actorColours.length],position:d},d++}),ut(h),P=$.leftMargin+W,S.insert(0,0,P,Object.keys(E).length*50),Ht(h,i,0);const f=S.getBounds();a&&h.append("text").text(a).attr("x",P).attr("font-size",u).attr("font-weight","bold").attr("y",25).attr("fill",p).attr("font-family",y);const l=f.stopy-f.starty+2*$.diagramMarginY,b=P+f.stopx+2*$.diagramMarginX;Mt(h,l,b,$.useMaxWidth),h.append("line").attr("x1",P).attr("y1",$.height*4).attr("x2",b-P-4).attr("y2",$.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const k=a?70:0;h.attr("viewBox",`${f.startx} -25 ${b} ${l+k}`),h.attr("preserveAspectRatio","xMinYMin meet"),h.attr("height",l+k+25)},"draw"),S={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:n(function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},"init"),updateVal:n(function(t,e,s,c){t[e]===void 0?t[e]=s:t[e]=c(s,t[e])},"updateVal"),updateBounds:n(function(t,e,s,c){const r=R().journey,p=this;let u=0;function y(g){return n(function(x){u++;const h=p.sequenceItems.length-u+1;p.updateVal(x,"starty",e-h*r.boxMargin,Math.min),p.updateVal(x,"stopy",c+h*r.boxMargin,Math.max),p.updateVal(S.data,"startx",t-h*r.boxMargin,Math.min),p.updateVal(S.data,"stopx",s+h*r.boxMargin,Math.max),g!=="activation"&&(p.updateVal(x,"startx",t-h*r.boxMargin,Math.min),p.updateVal(x,"stopx",s+h*r.boxMargin,Math.max),p.updateVal(S.data,"starty",e-h*r.boxMargin,Math.min),p.updateVal(S.data,"stopy",c+h*r.boxMargin,Math.max))},"updateItemBounds")}n(y,"updateFn"),this.sequenceItems.forEach(y())},"updateBounds"),insert:n(function(t,e,s,c){const r=Math.min(t,s),p=Math.max(t,s),u=Math.min(e,c),y=Math.max(e,c);this.updateVal(S.data,"startx",r,Math.min),this.updateVal(S.data,"starty",u,Math.min),this.updateVal(S.data,"stopx",p,Math.max),this.updateVal(S.data,"stopy",y,Math.max),this.updateBounds(r,u,p,y)},"insert"),bumpVerticalPos:n(function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},"bumpVerticalPos"),getVerticalPos:n(function(){return this.verticalPos},"getVerticalPos"),getBounds:n(function(){return this.data},"getBounds")},H=$.sectionFills,st=$.sectionColours,Ht=n(function(t,e,s){const c=R().journey;let r="";const p=c.height*2+c.diagramMarginY,u=s+p;let y=0,g="#CCC",m="black",x=0;for(const[h,i]of e.entries()){if(r!==i.section){g=H[y%H.length],x=y%H.length,m=st[y%st.length];let o=0;const d=i.section;for(let l=h;l<e.length&&e[l].section==d;l++)o=o+1;const f={x:h*c.taskMargin+h*c.width+P,y:50,text:i.section,fill:g,num:x,colour:m,taskCount:o};j.drawSection(t,f,c),r=i.section,y++}const a=i.people.reduce((o,d)=>(E[d]&&(o[d]=E[d]),o),{});i.x=h*c.taskMargin+h*c.width+P,i.y=u,i.width=c.diagramMarginX,i.height=c.diagramMarginY,i.colour=m,i.fill=g,i.num=x,i.actors=a,j.drawTask(t,i,c),S.insert(i.x,i.y,i.x+i.width+c.taskMargin,300+5*30)}},"drawTasks"),at={setConf:Xt,draw:Gt},Be={parser:Et,db:rt,renderer:at,styles:jt,init:n(t=>{at.setConf(t.journey),rt.clear()},"init")};export{Be as diagram};
