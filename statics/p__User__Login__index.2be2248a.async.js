"use strict";(self.webpackChunkpity=self.webpackChunkpity||[]).push([[9366],{5966:function($,S,t){var C=t(97685),v=t(1413),w=t(45987),H=t(21770),Q=t(8232),D=t(55241),X=t(97435),Y=t(67294),I=t(3607),n=t(85893),f=["fieldProps","proFieldProps"],J=["fieldProps","proFieldProps"],T="text",L=function(l){var a=l.fieldProps,j=l.proFieldProps,y=(0,w.Z)(l,f);return(0,n.jsx)(I.Z,(0,v.Z)({valueType:T,fieldProps:a,filedConfig:{valueType:T},proFieldProps:j},y))},q=function(l){var a=(0,H.Z)(l.open||!1,{value:l.open,onChange:l.onOpenChange}),j=(0,C.Z)(a,2),y=j[0],U=j[1];return(0,n.jsx)(Q.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(N){var Z,G=N.getFieldValue(l.name||[]);return(0,n.jsx)(D.Z,(0,v.Z)((0,v.Z)({getPopupContainer:function(c){return c&&c.parentNode?c.parentNode:c},onOpenChange:function(c){return U(c)},content:(0,n.jsxs)("div",{style:{padding:"4px 0"},children:[(Z=l.statusRender)===null||Z===void 0?void 0:Z.call(l,G),l.strengthText?(0,n.jsx)("div",{style:{marginTop:10},children:(0,n.jsx)("span",{children:l.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},l.popoverProps),{},{open:y,children:l.children}))}})},_=function(l){var a=l.fieldProps,j=l.proFieldProps,y=(0,w.Z)(l,J),U=(0,Y.useState)(!1),z=(0,C.Z)(U,2),N=z[0],Z=z[1];return a!=null&&a.statusRender&&y.name?(0,n.jsx)(q,{name:y.name,statusRender:a==null?void 0:a.statusRender,popoverProps:a==null?void 0:a.popoverProps,strengthText:a==null?void 0:a.strengthText,open:N,onOpenChange:Z,children:(0,n.jsx)("div",{children:(0,n.jsx)(I.Z,(0,v.Z)({valueType:"password",fieldProps:(0,v.Z)((0,v.Z)({},(0,X.Z)(a,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(E){var c;a==null||(c=a.onBlur)===null||c===void 0||c.call(a,E),Z(!1)},onClick:function(E){var c;a==null||(c=a.onClick)===null||c===void 0||c.call(a,E),Z(!0)}}),proFieldProps:j,filedConfig:{valueType:T}},y))})}):(0,n.jsx)(I.Z,(0,v.Z)({valueType:"password",fieldProps:a,proFieldProps:j,filedConfig:{valueType:T}},y))},R=L;R.Password=_,R.displayName="ProFormComponent",S.Z=R},41631:function($,S,t){t.r(S),t.d(S,{default:function(){return Ne}});var C=t(15009),v=t.n(C),w=t(97857),H=t.n(w),Q=t(99289),D=t.n(Q),X=t(5574),Y=t.n(X),I=t(99702),n=t(1413),f=t(67294),J={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"},T=J,L=t(84089),q=function(i,o){return f.createElement(L.Z,(0,n.Z)((0,n.Z)({},i),{},{ref:o,icon:T}))},_=f.forwardRef(q),R=_,W=t(87547),l=t(94149),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},j=a,y=function(i,o){return f.createElement(L.Z,(0,n.Z)((0,n.Z)({},i),{},{ref:o,icon:j}))},U=f.forwardRef(y),z=U,N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},Z=N,G=function(i,o){return f.createElement(L.Z,(0,n.Z)((0,n.Z)({},i),{},{ref:o,icon:Z}))},E=f.forwardRef(G),c=E,ue=t(45987),me=t(10915),he=t(28459),pe=t(93967),xe=t.n(pe),Pe=t(34994),ee=t(4942),ye=t(98082),Me=function(i){return(0,ee.Z)((0,ee.Z)({},i.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:i.colorTextSecondary,fontSize:i.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),"@media (min-width: @screen-md-min)",(0,ee.Z)({},"".concat(i.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}))};function je(r){return(0,ye.Xj)("LoginForm",function(i){var o=(0,n.Z)((0,n.Z)({},i),{},{componentCls:".".concat(r)});return[Me(o)]})}var e=t(85893),Ze=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function Fe(r){var i,o=r.logo,u=r.message,A=r.contentStyle,F=r.title,x=r.subTitle,K=r.actions,V=r.children,ne=r.containerStyle,re=r.otherStyle,p=(0,ue.Z)(r,Ze),B=(0,me.YB)(),ae=p.submitter===!1?!1:(0,n.Z)((0,n.Z)({searchConfig:{submitText:B.getMessage("loginForm.submitText","\u767B\u5F55")}},p.submitter),{},{submitButtonProps:(0,n.Z)({size:"large",style:{width:"100%"}},(i=p.submitter)===null||i===void 0?void 0:i.submitButtonProps),render:function(oe,fe){var le,Ge=fe.pop();if(typeof(p==null||(le=p.submitter)===null||le===void 0?void 0:le.render)=="function"){var k,se;return p==null||(k=p.submitter)===null||k===void 0||(se=k.render)===null||se===void 0?void 0:se.call(k,oe,fe)}return Ge}}),ie=(0,f.useContext)(he.ZP.ConfigContext),O=ie.getPrefixCls("pro-form-login"),P=je(O),s=P.wrapSSR,m=P.hashId,d=function(oe){return"".concat(O,"-").concat(oe," ").concat(m)},M=(0,f.useMemo)(function(){return o?typeof o=="string"?(0,e.jsx)("img",{src:o}):o:null},[o]);return s((0,e.jsxs)("div",{className:xe()(d("container"),m),style:ne,children:[(0,e.jsxs)("div",{className:"".concat(d("top")," ").concat(m).trim(),children:[F||M?(0,e.jsxs)("div",{className:"".concat(d("header")),children:[M?(0,e.jsx)("span",{className:d("logo"),children:M}):null,F?(0,e.jsx)("span",{className:d("title"),children:F}):null]}):null,x?(0,e.jsx)("div",{className:d("desc"),children:x}):null]}),(0,e.jsxs)("div",{className:d("main"),style:(0,n.Z)({width:328},A),children:[(0,e.jsxs)(Pe.A,(0,n.Z)((0,n.Z)({isKeyPressSubmit:!0},p),{},{submitter:ae,children:[u,V]})),K?(0,e.jsx)("div",{className:d("main-other"),style:re,children:K}):null]})]}))}var b=t(5966),de=t(22270),Se=t(84567),Ce=t(28614),ce=t(3607),Oe=["options","fieldProps","proFieldProps","valueEnum"],Ee=f.forwardRef(function(r,i){var o=r.options,u=r.fieldProps,A=r.proFieldProps,F=r.valueEnum,x=(0,ue.Z)(r,Oe);return(0,e.jsx)(ce.Z,(0,n.Z)({ref:i,valueType:"checkbox",valueEnum:(0,de.h)(F,void 0),fieldProps:(0,n.Z)({options:o},u),lightProps:(0,n.Z)({labelFormatter:function(){return(0,e.jsx)(ce.Z,(0,n.Z)({ref:i,valueType:"checkbox",mode:"read",valueEnum:(0,de.h)(F,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,n.Z)({options:o},u),proFieldProps:A},x))}},x.lightProps),proFieldProps:A},x))}),Be=f.forwardRef(function(r,i){var o=r.fieldProps,u=r.children;return(0,e.jsx)(Se.Z,(0,n.Z)((0,n.Z)({ref:i},o),{},{children:u}))}),Te=(0,Ce.G)(Be,{valuePropName:"checked"}),ge=Te;ge.Group=Ee;var be=ge,te=t(28906),h=t(90596),ve=t(2453),Ae=t(11941),De=t(67610),Ie=t(73935),Le="0f4fc0a875de30614a6a",Re=function(){window.location.href="https://github.com/login/oauth/authorize?client_id=".concat(Le)},We=function(){var i=(0,te.l)(function(o){var u=o.token;return{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:u.colorPrimaryActive}}});return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(R,{className:i,onClick:Re},"GithubOutlined")})},Ue=function(){var i=(0,te.l)(function(o){var u=o.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:u.borderRadius,":hover":{backgroundColor:u.colorBgTextHover}}});return(0,e.jsx)("div",{className:i,"data-lang":!0,children:h.SelectLang&&(0,e.jsx)(h.SelectLang,{})})},ze=function(){var i=(0,f.useState)("account"),o=Y()(i,2),u=o[0],A=o[1],F=(0,h.useModel)("@@initialState"),x=F.initialState,K=F.setInitialState,V=(0,h.useModel)("auth"),ne=V.loginPity,re=V.registerPity,p=(0,te.l)(function(){return{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}),B=(0,h.useIntl)(),ae=function(){var O=D()(v()().mark(function P(){var s,m;return v()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,x==null||(s=x.fetchUserInfo)===null||s===void 0?void 0:s.call(x);case 2:m=M.sent,m&&(0,Ie.flushSync)(function(){K(function(g){return H()(H()({},g),{},{currentUser:m})})});case 4:case"end":return M.stop()}},P)}));return function(){return O.apply(this,arguments)}}(),ie=function(){var O=D()(v()().mark(function P(s){var m,d;return v()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(u!=="register"){g.next=6;break}return g.next=3,re({name:s==null?void 0:s.name,password:s.password,email:s==null?void 0:s.email,username:s.username});case 3:m=g.sent,g.next=9;break;case 6:return g.next=8,ne({username:s.username,password:s.password});case 8:m=g.sent;case 9:if(m.code!==0){g.next=16;break}return ve.ZP.success("\u{1F389} \u{1F389} \u{1F389} \u767B\u5F55\u6210\u529F"),g.next=13,ae();case 13:return d=new URL(window.location.href).searchParams,h.history.push(d.get("redirect")||"/"),g.abrupt("return");case 16:ve.ZP.error(m.msg);case 17:case"end":return g.stop()}},P)}));return function(s){return O.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:p,children:[(0,e.jsx)(h.Helmet,{children:(0,e.jsx)("title",{children:De.Z.title})}),(0,e.jsx)(Ue,{}),(0,e.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,e.jsxs)(Fe,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,e.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"pity",subTitle:B.formatMessage({id:"pages.layouts.userLayout.title"}),initialValues:{autoLogin:!0},actions:[(0,e.jsx)(h.FormattedMessage,{id:"pages.login.loginWith",defaultMessage:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"},"loginWith"),(0,e.jsx)(We,{},"icons")],onFinish:function(){var O=D()(v()().mark(function P(s){return v()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,ie(s);case 2:case"end":return d.stop()}},P)}));return function(P){return O.apply(this,arguments)}}(),children:[(0,e.jsx)(Ae.Z,{activeKey:u,onChange:A,centered:!0,items:[{key:"account",label:B.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},{key:"register",label:B.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u6CE8\u518C"})}]}),u==="account"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.Z,{name:"username",fieldProps:{size:"large",prefix:(0,e.jsx)(W.Z,{})},placeholder:B.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: UserName"}),rules:[{required:!0,message:(0,e.jsx)(h.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,e.jsx)(b.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,e.jsx)(l.Z,{})},placeholder:B.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: tester"}),rules:[{required:!0,message:(0,e.jsx)(h.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),u==="register"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(b.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(W.Z,{})},name:"username",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}]}),(0,e.jsx)(b.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(z,{})},name:"name",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]}),(0,e.jsx)(b.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(c,{})},name:"email",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",rules:[{type:"email",required:!0,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u7684\u90AE\u7BB1"}]}),(0,e.jsx)(b.Z.Password,{fieldProps:{size:"large",prefix:(0,e.jsx)(l.Z,{}),type:"password"},name:"password",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801"}]})]}),(0,e.jsxs)("div",{style:{marginBottom:24},children:[u==="register"?null:(0,e.jsx)(be,{noStyle:!0,name:"autoLogin",children:(0,e.jsx)(h.FormattedMessage,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,e.jsx)("a",{style:{float:"right"},children:u==="register"?null:(0,e.jsx)(h.FormattedMessage,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})})]})]})}),(0,e.jsx)(I.Z,{})]})},Ne=ze},15746:function($,S,t){var C=t(21584);S.Z=C.Z},71230:function($,S,t){var C=t(92820);S.Z=C.Z}}]);