(self.webpackChunkpity=self.webpackChunkpity||[]).push([[3807],{41612:function(T,k,e){T=e.nmd(T);var r=e(52677).default;ace.define("ace/theme/material-one-dark",["require","exports","module","ace/lib/dom"],function(v,E,j){E.isDark=!1,E.cssClass="ace-material-one-dark",E.cssText=`
.ace-material-one-dark .ace_gutter {
  background: #272B33;
  color: rgb(103,111,122)
}

.ace-material-one-dark .ace_print-margin {
  // width: 1px;
  background: #e8e8e8
}

.ace-material-one-dark {
  background-color: #272B33;
  color: #A6B2C0
}

.ace-material-one-dark .ace_cursor {
  color: #528BFF
}

.ace-material-one-dark .ace_marker-layer .ace_selection {
  background: #3D4350
}

.ace-material-one-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272B33;
  border-radius: 2px
}

.ace-material-one-dark .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174)
}

.ace-material-one-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #747369
}

.ace-material-one-dark .ace_marker-layer .ace_active-line {
  background: #2B313A
}

.ace-material-one-dark .ace_gutter-active-line {
  background-color: #2B313A
}

.ace-material-one-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #3D4350
}

.ace-material-one-dark .ace_fold {
  background-color: #61AEEF;
  border-color: #A6B2C0
}

.ace-material-one-dark .ace_keyword {
  color: #C679DD
}

.ace-material-one-dark .ace_keyword.ace_operator {
  color: #A6B2C0
}

.ace-material-one-dark .ace_keyword.ace_other.ace_unit {
  color: #D2945D
}

.ace-material-one-dark .ace_constant {
  color: #D2945D
}

.ace-material-one-dark .ace_constant.ace_numeric {
  color: #D2945D
}

.ace-material-one-dark .ace_constant.ace_character.ace_escape {
  color: #57B6C2
}

.ace-material-one-dark .ace_support.ace_function {
  color: #57B6C2
}

.ace-material-one-dark .ace_support.ace_class {
  color: #E5C17C
}

.ace-material-one-dark .ace_storage {
  color: #C679DD
}

.ace-material-one-dark .ace_invalid.ace_illegal {
  color: #272B33;
  background-color: #f2777a
}

.ace-material-one-dark .ace_invalid.ace_deprecated {
  color: #272B33;
  background-color: #d27b53
}

.ace-material-one-dark .ace_string {
  color: #90C378
}

.ace-material-one-dark .ace_string.ace_regexp {
  color: #57B6C2
}

.ace-material-one-dark .ace_comment {
  font-style: italic;
  color: #59626F
}

.ace-material-one-dark .ace_variable {
  color: #DF6A73
}

.ace-material-one-dark .ace_meta.ace_selector {
  color: #C679DD
}

.ace-material-one-dark .ace_entity.ace_other.ace_attribute-name {
  color: #D2945D
}

.ace-material-one-dark .ace_entity.ace_name.ace_function {
  color: #61AEEF
}

.ace-material-one-dark .ace_entity.ace_name.ace_tag {
  color: #DF6A73
}

.ace-material-one-dark .ace_markup.ace_list {
  color: #DF6A73
}
`;var _=v("ace/lib/dom");_.importCssString(E.cssText,E.cssClass)}),function(){ace.require(["ace/theme/ace-material-one-dark"],function(v){r(T)=="object"&&r(k)=="object"&&T&&(T.exports=v)})}()},26194:function(T,k,e){"use strict";e.d(k,{Z:function(){return le}});var r=e(12444),v=e.n(r),E=e(72004),j=e.n(E),_=e(31996),b=e.n(_),h=e(26037),D=e.n(h),s=e(67294),I=e(53239),P=e.n(I),Z=e(74981),c=e(82679),O=e.n(c),o=e(5619),R=e.n(o),se=e(41612),w=e.n(se),L=e(90252),pe=e.n(L),Y=e(85893),le=function(ie){b()(F,ie);var ce=D()(F);function F(){return v()(this,F),ce.apply(this,arguments)}return j()(F,[{key:"componentDidMount",value:function(){var t=this;this.props.setEditor(this.refs),(0,c.addCompleter)({getCompletions:function(G,ee,V,ne,n){n(null,(t.props.tables||[]).map(function(z){return{name:z,value:z}}))}})}},{key:"render",value:function(){var t=this.props,q=t.value,G=t.onChange,ee=t.height,V=t.readOnly,ne=t.theme;return(0,Y.jsx)(Z.ZP,{ref:"aceEditor",mode:"json",theme:ne||"material-one-dark",fontSize:14,showGutter:!0,showPrintMargin:!1,onChange:G,value:q,wrapEnabled:!0,highlightActiveLine:!0,enableSnippets:!0,style:{width:"100%",height:ee||300},setOptions:{readOnly:V||!1,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4,useWorker:!0}})}}]),F}(s.Component)},37594:function(T,k,e){"use strict";e.d(k,{B:function(){return E}});var r=e(91321),v="//at.alicdn.com/t/font_915840_2b8lahxt5xv.js",E=(0,r.Z)({scriptUrl:v})},56262:function(T,k,e){"use strict";e.d(k,{Z:function(){return z}});var r=e(67294),v=e(34041),E=e(55102),j=e(71230),_=e(15746),b=e(15009),h=e.n(b),D=e(19632),s=e.n(D),I=e(99289),P=e.n(I),Z=e(5574),c=e.n(Z),O=e(97857),o=e.n(O),R=e(13769),se=e.n(R),w=e(8232),L=e(2453),pe=e(86738),Y=e(96746),le=e(96074),ie=e(14726),ce=e(72051),F=e(51042),ue=e(19478),t=e(85893),q=["editing","dataIndex","title","type","setType","record","index","key","children"],G=v.Z.Option,ee=function(u){var U=u.editing,K=u.dataIndex,$=u.title,te=u.type,B=u.setType,m=u.record,de=u.index,ve=u.key,H=u.children,X=se()(u,q);return(0,t.jsx)("td",o()(o()({},X),{},{children:U?(0,t.jsx)(w.Z.Item,{name:K,style:{margin:0},initialValue:m.dataIndex,rules:[{required:!0,message:"Please Input ".concat($,"!")}],children:(0,t.jsx)(E.Z,{placeholder:"please input ".concat($)})}):H}))},V=function(u){var U=u.data,K=u.setData,$=u.ossFileList,te=w.Z.useForm(),B=c()(te,1),m=B[0],de=(0,r.useState)(""),ve=c()(de,2),H=ve[0],X=ve[1],xe=(0,r.useState)("FILE"),N=c()(xe,2),J=N[0],he=N[1],Ee=(0,r.useState)(null),je=c()(Ee,2),Q=je[0],Ce=je[1],me=function(f){return f.key===H},De=function(f){m.setFieldsValue(o()({},f)),X(f.key)},Se=function(){X("")},be=function(){var C=P()(h()().mark(function f(l){var p,g,re,oe,Pe;return h()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,x.next=3,m.validateFields();case 3:if(p=x.sent,!(J==="FILE"&&!Q)){x.next=7;break}return L.ZP.info("\u8BF7\u9009\u62E9\u6587\u4EF6"),x.abrupt("return");case 7:if(g=s()(U),re=g.findIndex(function(ge){return l===ge.key}),!(re>-1)){x.next=20;break}if(oe=g[re],Pe=g.findIndex(function(ge){return p.key===ge.key}),!(Pe>-1)){x.next=15;break}return L.ZP.info("\u8BE5key\u5DF2\u5B58\u5728"),x.abrupt("return");case 15:g.splice(re,1,o()(o()(o()({},oe),p),{},{type:J,value:Q})),K(g),X(""),x.next=23;break;case 20:g.push(o()(o()({},p),{},{type:J,value:Q})),K(g),X("");case 23:x.next=28;break;case 25:x.prev=25,x.t0=x.catch(0),console.log("Validate Failed:",x.t0);case 28:case"end":return x.stop()}},f,null,[[0,25]])}));return function(l){return C.apply(this,arguments)}}(),Te=function(f){var l=s()(U);l.splice(l.findIndex(function(p){return f===p.key}),1),K(l)},fe=[{title:"KEY",dataIndex:"key",width:"30%",editable:!0},{title:"TYPE",dataIndex:"type",type:"select",width:"10%",render:function(f,l){return l.key===H?(0,t.jsxs)(v.Z,{style:{width:"100%"},value:J,onChange:function(g){he(g)},children:[(0,t.jsx)(G,{value:"FILE",children:"FILE"}),(0,t.jsx)(G,{value:"TEXT",children:"TEXT"})]}):l.type}},{title:"VALUE",dataIndex:"value",width:"40%",render:function(f,l){return l.key===H?J==="FILE"?(0,t.jsx)(v.Z,{style:{width:"100%"},placeholder:"please select oss file",showSearch:!0,value:Q,onChange:function(g){return Ce(g)},children:$.map(function(p){return(0,t.jsx)(G,{value:p.file_path,children:p.file_path},p.file_path)})}):(0,t.jsx)(E.Z,{placeholder:"please input VALUE",value:Q,onChange:function(g){Ce(g.target.value)}}):J==="FILE"?(0,t.jsx)("a",{href:"".concat(ue.Z.URL,"/oss/download?filepath=").concat(l.value),children:l.value}):l.value}},{title:"OPERATION",dataIndex:"operation",render:function(f,l){var p=me(l);return p?(0,t.jsxs)("span",{children:[(0,t.jsx)("a",{onClick:function(){return be(l.key)},style:{marginRight:8},children:"Save"}),(0,t.jsx)(pe.Z,{title:"Sure to cancel?",onConfirm:Se,children:(0,t.jsx)("a",{children:"Cancel"})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y.Z.Link,{disabled:H!=="",onClick:function(){return De(l)},children:"Edit"}),(0,t.jsx)(le.Z,{type:"vertical"}),(0,t.jsx)(Y.Z.Link,{disabled:H!=="",onClick:function(){return Te(l.key)},children:"Remove"})]})}}],ae=function(){var f=[].concat(s()(U),[{key:"",type:"TEXT",value:null}]);K(f),he("FILE")},ke=fe.map(function(C){return C.editable?o()(o()({},C),{},{onCell:function(l,p){return{record:l,index:p,type:J,setType:he,dataIndex:C.dataIndex,title:C.title,editing:me(l)}}}):C});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.Z,{style:{marginBottom:12},children:(0,t.jsx)(_.Z,{span:6,children:(0,t.jsx)(ie.ZP,{type:"primary",onClick:ae,icon:(0,t.jsx)(F.Z,{}),children:"Add"})})}),(0,t.jsx)(w.Z,{form:m,component:!1,children:(0,t.jsx)(ce.Z,{components:{body:{cell:ee}},dataSource:U,columns:ke,rowClassName:"editable-row",pagination:{onChange:Se}})})]})},ne=V,n=v.Z.Option,z=function(M){var u=M.ossFileList,U=M.dataSource,K=M.setDataSource,$=[{title:"KEY",dataIndex:"key",render:function(){return(0,t.jsx)(E.Z,{})}},{title:"VALUE",dataIndex:"value",render:function(){return(0,t.jsx)(v.Z,{children:u.map(function(B){return(0,t.jsx)(n,{value:B.key,children:B.key},B.key)})})}}];return(0,t.jsx)(j.Z,{gutter:8,style:{marginTop:16},children:(0,t.jsx)(_.Z,{span:24,children:(0,t.jsx)(ne,{bordered:!0,columns:$,data:U,setData:K,ossFileList:u})})})}},53677:function(T,k,e){"use strict";var r=e(67294),v=e(69935),E=e(85893);k.Z=function(j){var _=j.columns,b=j.dataSource,h=j.title,D=j.setDataSource,s=j.editableKeys,I=j.setEditableRowKeys,P=j.extra;return(0,r.useEffect)(function(){I(b.map(function(Z){return Z.id}))},[b]),(0,E.jsx)(v.Z,{headerTitle:h,columns:_,rowKey:"id",value:b,onChange:D,recordCreatorProps:{newRecordType:"dataSource",record:function(){return{id:Date.now()}}},editable:{type:"multiple",editableKeys:s,actionRender:function(c,O,o){return[o.delete]},onValuesChange:function(c,O){P&&P(O),D(O)},onChange:I}})}},26969:function(T,k,e){"use strict";e.r(k),e.d(k,{default:function(){return te}});var r=e(67294),v=e(52677),E=e.n(v),j=e(15009),_=e.n(j),b=e(99289),h=e.n(b),D=e(5574),s=e.n(D),I=e(34041),P=e(11941),Z=e(16568),c=e(50136),O=e(71230),o=e(15746),R=e(4393),se=e(55102),w=e(14726),L=e(78045),pe=e(85418),Y=e(72051),le=e(65987),ie=e(31484),ce=e(34804),F=e(53677),ue=e(12414),t=e(90596),q=e(10981),G=e(56262),ee=e(37594),V=e(26194),ne=e(58841),n=e(85893),z=I.Z.Option,M=P.Z.TabPane,u={200:{color:"#67C23A",text:"OK"},401:{color:"#F56C6C",text:"unauthorized"},400:{color:"#F56C6C",text:"Bad Request"}},U=function(m){return m&&m.response?(0,n.jsx)("div",{style:{marginRight:16},children:(0,n.jsxs)("span",{children:["Status:",(0,n.jsxs)("span",{style:{color:u[m.status_code]?u[m.status_code].color:"#F56C6C",marginLeft:8,marginRight:8},children:[m.status_code," ",u[m.status_code]?u[m.status_code].text:""]}),(0,n.jsxs)("span",{style:{marginLeft:8,marginRight:8},children:["Time: ",(0,n.jsx)("span",{style:{color:"#67C23A"},children:m.cost})]})]})}):null},K=function(m){var de=m.loading,ve=m.gconfig,H=m.dispatch,X=(0,r.useState)(0),xe=s()(X,2),N=xe[0],J=xe[1],he=(0,r.useState)("JSON"),Ee=s()(he,2),je=Ee[0],Q=Ee[1],Ce=(0,r.useState)("GET"),me=s()(Ce,2),De=me[0],Se=me[1],be=(0,r.useState)([]),Te=s()(be,2),fe=Te[0],ae=Te[1],ke=(0,r.useState)([]),C=s()(ke,2),f=C[0],l=C[1],p=(0,r.useState)(function(){return fe.map(function(d){return d.id})}),g=s()(p,2),re=g[0],oe=g[1],Pe=(0,r.useState)(function(){return f.map(function(d){return d.id})}),_e=s()(Pe,2),x=_e[0],ge=_e[1],Ye=(0,r.useState)(null),Ze=s()(Ye,2),Ie=Ze[0],Ve=Ze[1],Qe=(0,r.useState)(!1),Le=s()(Qe,2),we=Le[0],Me=Le[1],qe=(0,r.useState)({}),Ae=s()(qe,2),A=Ae[0],en=Ae[1],nn=(0,r.useState)([]),Re=s()(nn,2),Be=Re[0],tn=Re[1],an=(0,r.useState)(null),Fe=s()(an,2),pn=Fe[0],Ue=Fe[1],rn=ve.ossFileList,on=(0,r.useState)(""),Ke=s()(on,2),Oe=Ke[0],We=Ke[1],sn=(0,n.jsxs)(I.Z,{value:De,onChange:function(a){return Se(a)},style:{width:120,fontSize:16,textAlign:"left"},children:[(0,n.jsx)(z,{value:"GET",children:"GET"},"GET"),(0,n.jsx)(z,{value:"POST",children:"POST"},"POST"),(0,n.jsx)(z,{value:"PUT",children:"PUT"},"PUT"),(0,n.jsx)(z,{value:"DELETE",children:"DELETE"},"DELETE")]}),ze=[{title:"KEY",dataIndex:"key",key:"key"},{title:"VALUE",dataIndex:"value",key:"value"}],He=function(a){if(A[a]===null||A[a]===void 0||A[a]==="{}")return[];var i=JSON.parse(A[a]);return Object.keys(i).map(function(y){return{key:y,value:i[y]}})},Ne=function(a){var i=Oe.split("?")[0];a.forEach(function(y,W){y.key&&(W===0?i="".concat(i,"?").concat(y.key,"=").concat(y.value||""):i="".concat(i,"&").concat(y.key,"=").concat(y.value||""))}),We(i)},ln=function(a){var i=a.split("?");if(i.length<2)ae([]);else{var y=i[1].split("&"),W=[],S=[];y.forEach(function(mn,Ge){var fn=mn.split("="),$e=s()(fn,2),gn=$e[0],yn=$e[1],Xe=Date.now();S.push(Xe+Ge+10),W.push({key:gn,value:yn,id:Xe+Ge+10,description:""})}),ae(W),oe(S)}},ye=function(a){Q(a)},cn=function(){var a={};return f.forEach(function(i){i.key!==""&&(a[i.key]=i.value)}),a},un=function(){var d=h()(_()().mark(function a(){var i,y;return _()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(Oe!==""){S.next=3;break}return Z.ZP.error({message:"\u8BF7\u6C42Url\u4E0D\u80FD\u4E3A\u7A7A"}),S.abrupt("return");case 3:return Me(!0),i={method:De,url:Oe,body:N===2?JSON.stringify(Be):Ie,body_type:N,headers:cn()},N===0&&(i.body=null),S.next=8,(0,ue.c3)(i);case 8:y=S.sent,Me(!1),q.Z.response(y,!0)&&en(y.data);case 11:case"end":return S.stop()}},a)}));return function(){return d.apply(this,arguments)}}(),dn=function(a,i){if(a==="params"){var y=fe.filter(function(S){return S.id!==i});ae(y),Ne(y)}else{var W=f.filter(function(S){return S.id!==i});l(W)}},vn=(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("Text")},children:"Text"})},"Text"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("JavaScript")},children:"JavaScript"})},"JavaScript"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("JSON")},children:"JSON"})},"JSON"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("HTML")},children:"HTML"})},"HTML"),(0,n.jsx)(c.Z.Item,{children:(0,n.jsx)("a",{onClick:function(){ye("XML")},children:"XML"})},"XML")]}),Je=function(a){return[{title:"KEY",key:"key",dataIndex:"key"},{title:"VALUE",key:"value",dataIndex:"value"},{title:"DESCRIPTION",key:"description",dataIndex:"description"},{title:"\u64CD\u4F5C",valueType:"option",render:function(y,W){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(le.Z,{style:{cursor:"pointer"},onClick:function(){oe([W.id])}}),(0,n.jsx)(ie.Z,{style:{cursor:"pointer",marginLeft:8},onClick:function(){dn(a,W.id)},twoToneColor:"#eb2f96"})]})}}]},hn=function(a){return a===0?(0,n.jsx)("div",{style:{height:"20vh",lineHeight:"20vh",textAlign:"center"},children:"This request does not have a body"}):a===2?(0,n.jsx)(G.Z,{ossFileList:rn,dataSource:Be,setDataSource:tn}):(0,n.jsx)(O.Z,{style:{marginTop:12},children:(0,n.jsx)(o.Z,{span:24,children:(0,n.jsx)(R.Z,{bodyStyle:{padding:0},children:(0,n.jsx)(V.Z,{value:Ie,onChange:function(y){return Ve(y)},height:"20vh",setEditor:Ue})})})})};return(0,n.jsx)(ne._z,{title:"\u5728\u7EBFHTTP\u6D4B\u8BD5\u5DE5\u5177",breadcrumb:null,children:(0,n.jsxs)(R.Z,{children:[(0,n.jsxs)(O.Z,{gutter:[8,8],children:[(0,n.jsx)(o.Z,{span:18,children:(0,n.jsx)(se.Z,{size:"large",value:Oe,addonBefore:sn,placeholder:"\u8BF7\u8F93\u5165\u8981\u8BF7\u6C42\u7684url",onChange:function(a){We(a.target.value),ln(a.target.value)}})}),(0,n.jsx)(o.Z,{span:6,children:(0,n.jsxs)(w.ZP,{onClick:un,loading:we,type:"primary",size:"large",style:{marginRight:16,float:"right"},children:[(0,n.jsx)(ee.B,{type:"icon-fasong1"}),"Send"," "]})})]}),(0,n.jsx)(O.Z,{style:{marginTop:8},children:(0,n.jsxs)(P.Z,{defaultActiveKey:"1",style:{width:"100%"},children:[(0,n.jsx)(M,{tab:"Params",children:(0,n.jsx)(F.Z,{columns:Je("params"),title:"Query Params",dataSource:fe,setDataSource:ae,extra:Ne,editableKeys:re,setEditableRowKeys:oe})},"1"),(0,n.jsx)(M,{tab:"Headers",children:(0,n.jsx)(F.Z,{columns:Je("headers"),title:"Headers",dataSource:f,setDataSource:l,editableKeys:x,setEditableRowKeys:ge})},"2"),(0,n.jsxs)(M,{tab:"Body",children:[(0,n.jsxs)(O.Z,{children:[(0,n.jsxs)(L.ZP.Group,{defaultValue:0,value:N,onChange:function(a){J(a.target.value),a.target.value===2&&H({type:"gconfig/listOssFile"})},children:[(0,n.jsx)(L.ZP,{value:0,children:"none"}),(0,n.jsx)(L.ZP,{value:2,children:"form-data"}),(0,n.jsx)(L.ZP,{value:3,children:"x-www-form-urlencoded"}),(0,n.jsx)(L.ZP,{value:1,children:"raw"}),(0,n.jsx)(L.ZP,{value:4,children:"binary"}),(0,n.jsx)(L.ZP,{value:5,children:"GraphQL"})]}),N===1?(0,n.jsx)(pe.Z,{style:{marginLeft:8},overlay:vn,trigger:["click"],children:(0,n.jsxs)("a",{onClick:function(a){return a.preventDefault()},children:[je," ",(0,n.jsx)(ce.Z,{})]})}):null]}),hn(N)]},"3")]})}),(0,n.jsx)(O.Z,{gutter:[8,8],children:Object.keys(A).length===0?null:(0,n.jsxs)(P.Z,{style:{width:"100%"},tabBarExtraContent:U(A),children:[(0,n.jsx)(M,{tab:"Body",children:(0,n.jsx)(V.Z,{readOnly:!0,setEditor:Ue,language:A.response&&A.response_headers.indexOf("json")>-1?"json":"text",value:A.response&&E()(A.response)==="object"?JSON.stringify(A.response,null,2):A.response||"",height:"30vh"})},"1"),(0,n.jsx)(M,{tab:"Cookie",children:(0,n.jsx)(Y.Z,{columns:ze,dataSource:He("cookies"),size:"small",pagination:!1})},"2"),(0,n.jsx)(M,{tab:"Headers",children:(0,n.jsx)(Y.Z,{columns:ze,dataSource:He("response_headers"),size:"small",pagination:!1})},"3")]})})]})})},$=(0,t.connect)(function(B){var m=B.loading,de=B.gconfig;return{loading:m,gconfig:de}})(K),te=function(){return(0,n.jsx)($,{})}},5619:function(T,k,e){T=e.nmd(T),ace.define("ace/ext/spellcheck",["require","exports","module","ace/lib/event","ace/editor","ace/config"],function(r,v,E){"use strict";var j=r("../lib/event");v.contextMenuHandler=function(b){var h=b.target,D=h.textInput.getElement();if(!!h.selection.isEmpty()){var s=h.getCursorPosition(),I=h.session.getWordRange(s.row,s.column),P=h.session.getTextRange(I);if(h.session.tokenRe.lastIndex=0,!!h.session.tokenRe.test(P)){var Z="",c=P+" "+Z;D.value=c,D.setSelectionRange(P.length,P.length+1),D.setSelectionRange(0,0),D.setSelectionRange(0,P.length);var O=!1;j.addListener(D,"keydown",function o(){j.removeListener(D,"keydown",o),O=!0}),h.textInput.setInputHandler(function(o){if(o==c)return"";if(o.lastIndexOf(c,0)===0)return o.slice(c.length);if(o.substr(D.selectionEnd)==c)return o.slice(0,-c.length);if(o.slice(-2)==Z){var R=o.slice(0,-2);if(R.slice(-1)==" ")return O?R.substring(0,D.selectionEnd):(R=R.slice(0,-1),h.session.replace(I,R),"")}return o})}}};var _=r("../editor").Editor;r("../config").defineOptions(_.prototype,"editor",{spellcheck:{set:function(b){var h=this.textInput.getElement();h.spellcheck=!!b,b?this.on("nativecontextmenu",v.contextMenuHandler):this.removeListener("nativecontextmenu",v.contextMenuHandler)},value:!0}})}),function(){ace.require(["ace/ext/spellcheck"],function(r){T&&(T.exports=r)})}()}}]);
