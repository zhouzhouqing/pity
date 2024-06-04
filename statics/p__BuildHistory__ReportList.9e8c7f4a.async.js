"use strict";(self.webpackChunkpity=self.webpackChunkpity||[]).push([[6482],{63100:function(w,D,n){var i=n(67294),O=n(61607);D.Z=(0,O.a1)("send",!0,function(f){return i.createElement("svg",{width:f.size,height:f.size,viewBox:"0 0 48 48",fill:"none"},i.createElement("path",{d:"M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",stroke:f.colors[0],strokeWidth:f.strokeWidth,strokeLinejoin:f.strokeLinejoin}),i.createElement("path",{d:"M43.0001 5L22.1001 25.9",stroke:f.colors[0],strokeWidth:f.strokeWidth,strokeLinecap:f.strokeLinecap,strokeLinejoin:f.strokeLinejoin}))})},99612:function(w,D,n){n.d(D,{e5:function(){return $},mi:function(){return F},dh:function(){return P},XN:function(){return B}});var i=n(63100),O=n(97857),f=n.n(O),U=n(37594),c=n(85893),g=function(h){var S=h.icon,b=h.text,I=h.font,L=I===void 0?13:I,z=h.style,N=h.onClick,H=h.back,Y=H===void 0?!0:H;return Y?(0,c.jsxs)("span",{onClick:N,style:f()({},z),children:[(0,c.jsx)(U.B,{type:S,style:{fontSize:L}})," ",b]}):(0,c.jsxs)("span",{onClick:N,style:f()({},z),children:[b," ",(0,c.jsx)(U.B,{style:{fontSize:L},type:S})]})},V=n(67294),E=n(66309),B={1:(0,c.jsxs)("span",{children:[(0,c.jsx)(i.Z,{theme:"outline",size:"14",fill:"#7ed321"})," HTTP"]}),2:(0,c.jsx)(g,{font:14,icon:"icon-GRPC",text:"GRPC"}),3:(0,c.jsx)(g,{font:14,icon:"icon-a-dubbo1",text:"Dubbo"})},M={1:(0,c.jsx)(E.Z,{color:"success",children:"HTTP"}),2:(0,c.jsx)(E.Z,{color:"orange",children:"GRPC"}),3:(0,c.jsx)(E.Z,{color:"blue",children:"DUBBO"})},P={GET:(0,c.jsx)(E.Z,{color:"success",children:"GET"}),POST:(0,c.jsx)(E.Z,{color:"blue",children:"POST"}),PUT:(0,c.jsx)(E.Z,{color:"cyan",children:"PUT"}),DELETE:(0,c.jsx)(E.Z,{color:"error",children:"DELETE"})},F={0:(0,c.jsx)(E.Z,{children:"\u666E\u901A"}),1:(0,c.jsx)(E.Z,{color:"blue",children:"\u6D4B\u8BD5\u8BA1\u5212"}),2:(0,c.jsx)(E.Z,{color:"success",children:"CI"}),3:(0,c.jsx)(E.Z,{children:"\u5176\u4ED6"})},$={0:(0,c.jsx)(E.Z,{color:"success",style:{marginLeft:8},children:"\u666E\u901A"}),1:(0,c.jsx)(E.Z,{color:"blue",style:{marginLeft:8},children:"\u524D\u7F6E"}),2:(0,c.jsx)(E.Z,{color:"warning",style:{marginLeft:8},children:"\u6570\u636E\u5DE5\u5382"})}},91899:function(w,D,n){n.r(D);var i=n(97857),O=n.n(i),f=n(5574),U=n.n(f),c=n(30381),g=n.n(c),V=n(58841),E=n(47676),B=n(34041),M=n(8232),P=n(66309),F=n(4393),$=n(71230),h=n(15746),S=n(14726),b=n(72051),I=n(48483),L=n(30881),z=n(40110),N=n(43471),H=n(22763),Y=n(90596),q=n(67294),ee=n(75574),re=n(19478),R=n(12554),G=n(37594),ne=n(99612),o=n(85893),Q=E.Z.RangePicker,X=B.Z.Option,e=function(a){var t=a.user,r=a.report,v=a.loading,u=a.dispatch,T=M.Z.useForm(),y=U()(T,1),j=y[0],_=t.userMap,A=r.reportData,C=r.pagination;(0,q.useEffect)(function(){u({type:"user/fetchUserList"}),Z()},[C.current]);var k=[{title:"\u6784\u5EFAid",dataIndex:"id",key:"id",fixed:"left",render:function(l,m){return m.failed_count===0&&m.error_count===0&&m.success_count>0?(0,o.jsxs)("span",{children:[(0,o.jsx)(I.Z,{twoToneColor:"#52c41a",style:{fontSize:13}})," #",(0,o.jsx)("a",{href:"/#/record/report/".concat(m.id),children:l})]}):(0,o.jsxs)("span",{children:[(0,o.jsx)(L.Z,{twoToneColor:"#eb2f96",style:{fontSize:13}})," #",(0,o.jsx)("a",{href:"/#/record/report/".concat(m.id),children:l})]})}},{title:"\u7C7B\u578B",dataIndex:"mode",key:"mode",fixed:"left",render:function(l){return ne.mi[l]}},{title:"\u6267\u884C\u4EBA",dataIndex:"executor",key:"executor",fixed:"left",render:function(l){return l===0?(0,o.jsxs)("span",{children:[(0,o.jsx)(G.B,{style:{fontSize:20},type:"icon-a-jiqirenrengongzhineng"})," pity\u673A\u5668\u4EBA"]}):(0,o.jsx)(R.Z,{user:_[l]})}},{title:"\u603B\u6570",key:"total",render:function(l,m){return(0,o.jsxs)(P.Z,{children:[" ",m.success_count+m.failed_count+m.skipped_count+m.error_count," "]})}},{title:"\u6210\u529F \u2714",dataIndex:"success_count",key:"success_count",render:function(l){return(0,o.jsxs)(P.Z,{color:"success",children:[" ",l," "]})}},{title:"\u5931\u8D25 \u274C",dataIndex:"failed_count",key:"failed_count",render:function(l){return(0,o.jsxs)(P.Z,{color:"error",children:[" ",l," "]})}},{title:"\u51FA\u9519 \u26A0",dataIndex:"error_count",key:"error_count",render:function(l){return(0,o.jsxs)(P.Z,{color:"warning",children:[" ",l," "]})}},{title:"\u8DF3\u8FC7 \u{1F389}",dataIndex:"skipped_count",key:"skipped_count",render:function(l){return(0,o.jsxs)(P.Z,{color:"blue",children:[" ",l," "]})}},{title:"\u5F00\u59CB\u65F6\u95F4",key:"start_at",dataIndex:"start_at"},{title:"\u4EFB\u52A1\u72B6\u6001",dataIndex:"status",key:"status",fixed:"right",render:function(l){return ee.Z.STATUS[l]}},{title:"\u64CD\u4F5C",key:"operation",render:function(l,m){return(0,o.jsx)("a",{href:"/#/record/report/".concat(m.id),children:"\u67E5\u770B"})}}],Z=function(){var l=j.getFieldsValue(),m=l.date[0].format("YYYY-MM-DD HH:mm:ss"),J=l.date[1].format("YYYY-MM-DD HH:mm:ss");u({type:"report/fetchReportList",payload:O()(O()({start_time:m,end_time:J},l),{},{page:C.current,size:C.pageSize,date:null})})},x=function(){j.resetFields(),j.setFieldsValue({date:[g()().startOf("week"),g()().endOf("week")]}),Z()};return(0,o.jsx)(V._z,{title:"\u6784\u5EFA\u5386\u53F2",breadcrumb:null,children:(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(M.Z,{form:j,children:(0,o.jsxs)($.Z,{gutter:[8,8],children:[(0,o.jsx)(h.Z,{span:8,children:(0,o.jsx)(M.Z.Item,{label:"\u6267\u884C\u4EBA",name:"executor",children:(0,o.jsxs)(B.Z,{placeholder:"\u9009\u62E9\u6267\u884C\u4EBA",style:{width:"90%"},allowClear:!0,children:[(0,o.jsxs)(X,{value:"pity\u673A\u5668\u4EBA",children:[(0,o.jsx)(G.B,{style:{fontSize:20},type:"icon-a-jiqirenrengongzhineng"})," pity\u673A\u5668\u4EBA"]},"CPU"),Object.keys(_).map(function(d){return(0,o.jsx)(X,{value:d,children:(0,o.jsx)(R.Z,{user:_[d]})},d)})]})})}),(0,o.jsx)(h.Z,{span:10,children:(0,o.jsx)(M.Z.Item,{label:"\u6267\u884C\u65F6\u95F4",name:"date",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5F00\u59CB/\u7ED3\u675F\u65F6\u95F4"}],initialValue:[g()().startOf("week"),g()().endOf("week")],children:(0,o.jsx)(Q,{ranges:{\u4ECA\u5929:[g()(),g()()],\u672C\u5468:[g()().startOf("week"),g()().endOf("week")],\u672C\u6708:[g()().startOf("month"),g()().endOf("month")]},showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})})}),(0,o.jsx)(h.Z,{span:6,children:(0,o.jsxs)("div",{style:{float:"right"},children:[(0,o.jsxs)(S.ZP,{type:"primary",onClick:Z,children:[(0,o.jsx)(z.Z,{})," \u67E5\u8BE2"]}),(0,o.jsxs)(S.ZP,{style:{marginLeft:8},onClick:x,children:[(0,o.jsx)(N.Z,{})," \u91CD\u7F6E"]})]})})]})}),(0,o.jsx)($.Z,{gutter:[8,8],children:(0,o.jsx)(h.Z,{span:24,children:(0,o.jsx)(b.Z,{columns:k,dataSource:A,pagination:C,loading:v.effects["report/fetchReportList"],onChange:function(l){u({type:"report/save",payload:{pagination:O()(O()({},C),{},{current:l.current})}})}})})})]})})};D.default=(0,Y.connect)(function(s){var a=s.report,t=s.user,r=s.loading;return{report:a,loading:r,user:t}})(e)},66309:function(w,D,n){n.d(D,{Z:function(){return X}});var i=n(67294),O=n(93967),f=n.n(O),U=n(98423),c=n(98787),g=n(69760),V=n(96159),E=n(45353),B=n(53124),M=n(54548),P=n(10274),F=n(14747),$=n(45503),h=n(91945);const S=e=>{const{paddingXXS:s,lineWidth:a,tagPaddingHorizontal:t,componentCls:r,calc:v}=e,u=v(t).sub(a).equal(),T=v(s).sub(a).equal();return{[r]:Object.assign(Object.assign({},(0,F.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:u,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,M.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:T,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:u}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},b=e=>{const{lineWidth:s,fontSizeIcon:a,calc:t}=e,r=e.fontSizeSM;return(0,$.TS)(e,{tagFontSize:r,tagLineHeight:(0,M.bf)(t(e.lineHeightSM).mul(r).equal()),tagIconSize:t(a).sub(t(s).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},I=e=>({defaultBg:new P.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var L=(0,h.I$)("Tag",e=>{const s=b(e);return S(s)},I),z=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)s.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a},H=i.forwardRef((e,s)=>{const{prefixCls:a,style:t,className:r,checked:v,onChange:u,onClick:T}=e,y=z(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:j,tag:_}=i.useContext(B.E_),A=l=>{u==null||u(!v),T==null||T(l)},C=j("tag",a),[k,Z,x]=L(C),d=f()(C,`${C}-checkable`,{[`${C}-checkable-checked`]:v},_==null?void 0:_.className,r,Z,x);return k(i.createElement("span",Object.assign({},y,{ref:s,style:Object.assign(Object.assign({},t),_==null?void 0:_.style),className:d,onClick:A})))}),Y=n(98719);const q=e=>(0,Y.Z)(e,(s,a)=>{let{textColor:t,lightBorderColor:r,lightColor:v,darkColor:u}=a;return{[`${e.componentCls}${e.componentCls}-${s}`]:{color:t,background:v,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:u,borderColor:u},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var ee=(0,h.bk)(["Tag","preset"],e=>{const s=b(e);return q(s)},I);function re(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const R=(e,s,a)=>{const t=re(a);return{[`${e.componentCls}${e.componentCls}-${s}`]:{color:e[`color${a}`],background:e[`color${t}Bg`],borderColor:e[`color${t}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var G=(0,h.bk)(["Tag","status"],e=>{const s=b(e);return[R(s,"success","Success"),R(s,"processing","Info"),R(s,"error","Error"),R(s,"warning","Warning")]},I),ne=function(e,s){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)s.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]]);return a};const Q=i.forwardRef((e,s)=>{const{prefixCls:a,className:t,rootClassName:r,style:v,children:u,icon:T,color:y,onClose:j,bordered:_=!0,visible:A}=e,C=ne(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:k,direction:Z,tag:x}=i.useContext(B.E_),[d,l]=i.useState(!0),m=(0,U.Z)(C,["closeIcon","closable"]);i.useEffect(()=>{A!==void 0&&l(A)},[A]);const J=(0,c.o2)(y),se=(0,c.yT)(y),te=J||se,de=Object.assign(Object.assign({backgroundColor:y&&!te?y:void 0},x==null?void 0:x.style),v),p=k("tag",a),[ue,fe,Ee]=L(p),ge=f()(p,x==null?void 0:x.className,{[`${p}-${y}`]:te,[`${p}-has-color`]:y&&!te,[`${p}-hidden`]:!d,[`${p}-rtl`]:Z==="rtl",[`${p}-borderless`]:!_},t,r,fe,Ee),le=K=>{K.stopPropagation(),j==null||j(K),!K.defaultPrevented&&l(!1)},[,me]=(0,g.Z)((0,g.w)(e),(0,g.w)(x),{closable:!1,closeIconRender:K=>{const ve=i.createElement("span",{className:`${p}-close-icon`,onClick:le},K);return(0,V.wm)(K,ve,W=>({onClick:ie=>{var oe;(oe=W==null?void 0:W.onClick)===null||oe===void 0||oe.call(W,ie),le(ie)},className:f()(W==null?void 0:W.className,`${p}-close-icon`)}))}}),he=typeof C.onClick=="function"||u&&u.type==="a",ae=T||null,Ce=ae?i.createElement(i.Fragment,null,ae,u&&i.createElement("span",null,u)):u,ce=i.createElement("span",Object.assign({},m,{ref:s,className:ge,style:de}),Ce,me,J&&i.createElement(ee,{key:"preset",prefixCls:p}),se&&i.createElement(G,{key:"status",prefixCls:p}));return ue(he?i.createElement(E.Z,{component:"Tag"},ce):ce)});Q.CheckableTag=H;var X=Q}}]);