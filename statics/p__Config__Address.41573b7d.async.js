"use strict";(self.webpackChunkpity=self.webpackChunkpity||[]).push([[9722],{51042:function(T,E,e){var m=e(1413),o=e(67294),g=e(42110),u=e(84089),j=function(v,h){return o.createElement(u.Z,(0,m.Z)((0,m.Z)({},v),{},{ref:h,icon:g.Z}))},i=o.forwardRef(j);E.Z=i},646:function(T,E,e){var m=e(86738),o=e(85893);E.Z=function(g){var u=g.title,j=g.text,i=g.onConfirm;return(0,o.jsx)(m.Z,{title:u,onConfirm:i,children:(0,o.jsx)("a",{children:j})})}},84298:function(T,E,e){var m=e(97857),o=e.n(m),g=e(5574),u=e.n(g),j=e(67294),i=e(8232),y=e(17788),v=e(15746),h=e(76081),p=e(85893),R=i.Z.Item,M=function(s){var K=s.title,S=s.width,z=s.left,P=s.right,$=s.formName,D=s.record,I=s.onFinish,b=s.loading,V=s.fields,n=s.open,B=s.onCancel,L=s.offset,N=L===void 0?0:L,G=s.children,Z=s.Footer,Y=s.onTest,H=i.Z.useForm(),d=u()(H,1),c=d[0],f=function(){c.validateFields().then(function(x){I(x)})};(0,j.useEffect)(function(){c.resetFields(),c.setFieldsValue(D)},[D]);var F={labelCol:{span:z},wrapperCol:{span:P}};return(0,p.jsxs)(y.Z,{style:{marginTop:N},confirmLoading:b,footer:Z!==void 0?(0,p.jsx)(Z,{onOk:f,onCancel:B,onTest:function(){c.validateFields().then(function(x){Y(x)})}}):void 0,title:K,width:S,open:n,onOk:f,onCancel:B,children:[G||null,(0,p.jsx)(i.Z,o()(o()({form:c},F),{},{name:$,initialValues:D,onFinish:I,children:V.map(function(t,x){return(0,p.jsx)(v.Z,{span:t.span||24,children:(0,p.jsx)(R,{label:t.label,colon:t.colon||!0,initialValue:t.initialValue,rules:[{required:t.required,message:t.message}],name:t.name,valuePropName:t.valuePropName||"value",children:(0,h.Z)(t.type,t.placeholder,t.component)})},x)})}))]})};E.Z=M},76081:function(T,E,e){var m=e(55102),o=e(72269),g=e(67294),u=e(85893),j=m.Z.TextArea,i=function(v,h){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return p||(v==="input"?(0,u.jsx)(m.Z,{placeholder:h}):v==="textarea"?(0,u.jsx)(j,{placeholder:h}):v==="switch"?(0,u.jsx)(o.Z,{}):null)};E.Z=i},66815:function(T,E,e){e.r(E),e.d(E,{default:function(){return H}});var m=e(97857),o=e.n(m),g=e(15009),u=e.n(g),j=e(99289),i=e.n(j),y=e(5574),v=e.n(y),h=e(67294),p=e(58841),R=e(90596),M=e(34041),A=e(8232),s=e(66309),K=e(96074),S=e(4393),z=e(71230),P=e(15746),$=e(14726),D=e(55102),I=e(72051),b=e(19478),V=e(83062),n=e(85893),B=function(d){var c=d.icon,f=d.title,F=d.font,t=d.style,x=d.text,J=d.onClick;return(0,n.jsx)(V.Z,{title:f,children:(0,n.jsxs)("span",{onClick:J,style:o()({cursor:"pointer",fontSize:F},t),children:[c," ",x]})})},L=e(51042),N=e(84298),G=e(646),Z=M.Z.Option,Y=function(c){var f=c.loading,F=c.gconfig,t=c.dispatch,x=A.Z.useForm(),J=v()(x,1),Q=J[0],X=F.envList,ne=F.envMap,te=F.addressList,ae=(0,h.useState)(!1),k=v()(ae,2),re=k[0],W=k[1],se=(0,h.useState)({}),w=v()(se,2),_=w[0],q=w[1],oe=function(){t({type:"gconfig/fetchEnvList",payload:{page:1,size:1e3,exactly:!0}})},U=function(){var l=Q.getFieldsValue();t({type:"gconfig/fetchAddress",payload:l})},ue=f.effects["gconfig/fetchAddress"]||f.effects["gconfig/fetchEnvList"]||f.effects["gconfig/updateAddress"]||f.effects["gconfig/insertAddress"]||f.effects["gconfig/deleteAddress"];(0,h.useEffect)(function(){oe(),U()},[]);var le=[{title:"\u73AF\u5883",key:"env",dataIndex:"env",render:function(l){return(0,n.jsx)(s.Z,{children:ne[l]})}},{title:"\u540D\u79F0",key:"name",dataIndex:"name"},{title:(0,n.jsx)(B,{title:"\u5730\u5740\u4E00\u822C\u662F\u670D\u52A1\u7684\u57FA\u7840\u5730\u5740\uFF0C\u6BD4\u5982https://api.baidu.com, \u7528\u4F8B\u4E2D\u7684\u5730\u5740\u7B80\u5199\u5373\u53EF",text:"\u5730\u5740"}),key:"gateway",dataIndex:"gateway",render:function(l){return(0,n.jsx)("a",{href:l,children:l})},ellipsis:!0},{title:"\u64CD\u4F5C",key:"operation",render:function(l,C){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{onClick:function(){q(C),W(!0)},children:"\u7F16\u8F91"}),(0,n.jsx)(K.Z,{type:"vertical"}),(0,n.jsx)(G.Z,{text:"\u5220\u9664",title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5730\u5740\u5417?",onConfirm:i()(u()().mark(function O(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,de(C);case 2:case"end":return a.stop()}},O)}))})]})}}],ie=[{name:"env",label:"\u73AF\u5883",required:!0,message:"\u8BF7\u9009\u62E9\u5BF9\u5E94\u73AF\u5883",type:"select",component:(0,n.jsx)(M.Z,{placeholder:"\u8BF7\u9009\u62E9\u5BF9\u5E94\u73AF\u5883",children:X.map(function(r){return(0,n.jsx)(Z,{value:r.id,children:r.name},r.id)})})},{name:"name",label:"\u5730\u5740\u540D\u79F0",required:!0,message:"\u8BF7\u8F93\u5165\u5730\u5740\u540D\u79F0",type:"input",placeholder:"\u8BF7\u8F93\u5165\u5730\u5740\u540D\u79F0"},{name:"gateway",label:"\u670D\u52A1\u5730\u5740",required:!0,message:"\u8BF7\u8F93\u5165\u670D\u52A1\u5730\u5740",type:"input",placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u5730\u5740"}],de=function(){var r=i()(u()().mark(function l(C){var O;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t({type:"gconfig/deleteAddress",payload:{id:C.id}});case 2:O=a.sent,O&&U();case 4:case"end":return a.stop()}},l)}));return function(C){return r.apply(this,arguments)}}(),ce=function(){var r=i()(u()().mark(function l(C){var O;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!_.id){a.next=6;break}return a.next=3,t({type:"gconfig/updateAddress",payload:o()(o()({},C),{},{id:_.id})});case 3:O=a.sent,a.next=9;break;case 6:return a.next=8,t({type:"gconfig/insertAddress",payload:C});case 8:O=a.sent;case 9:O&&(W(!1),U());case 10:case"end":return a.stop()}},l)}));return function(C){return r.apply(this,arguments)}}();return(0,n.jsx)(p._z,{breadcrumb:null,title:"\u8BF7\u6C42\u5730\u5740\u7BA1\u7406",children:(0,n.jsxs)(S.Z,{children:[(0,n.jsx)(N.Z,{open:re,fields:ie,title:_.id?"\u4FEE\u6539\u5730\u5740":"\u6DFB\u52A0\u5730\u5740",left:6,right:18,record:_,onFinish:ce,onCancel:function(){return W(!1)}}),(0,n.jsx)(A.Z,o()(o()({form:Q},b.Z.LAYOUT),{},{onValuesChange:U,children:(0,n.jsxs)(z.Z,{gutter:12,children:[(0,n.jsx)(P.Z,{span:3,children:(0,n.jsx)(A.Z.Item,{children:(0,n.jsxs)($.ZP,{type:"primary",onClick:function(){W(!0),q({})},children:[(0,n.jsx)(L.Z,{}),"\u6DFB\u52A0\u5730\u5740"]})})}),(0,n.jsx)(P.Z,{span:7,children:(0,n.jsx)(A.Z.Item,{label:"\u73AF\u5883",name:"env",children:(0,n.jsx)(M.Z,{allowClear:!0,showSearch:!0,placeholder:"\u9009\u62E9\u5BF9\u5E94\u7684\u73AF\u5883",children:X.map(function(r){return(0,n.jsx)(Z,{value:r.id,children:r.name},r.id)})})})}),(0,n.jsx)(P.Z,{span:7,children:(0,n.jsx)(A.Z.Item,{label:"\u540D\u79F0",name:"name",children:(0,n.jsx)(D.Z,{placeholder:"\u8F93\u5165\u5BF9\u5E94\u7684\u5730\u5740\u540D\u79F0"})})}),(0,n.jsx)(P.Z,{span:7,children:(0,n.jsx)(A.Z.Item,{label:"\u5730\u5740",name:"gateway",children:(0,n.jsx)(D.Z,{placeholder:"\u8F93\u5165\u5BF9\u5E94\u7684\u5730\u5740"})})})]})})),(0,n.jsx)(I.Z,{columns:le,loading:ue,rowKey:function(l){return l.id},dataSource:te})]})})},H=(0,R.connect)(function(d){var c=d.gconfig,f=d.user,F=d.loading;return{gconfig:c,user:f,loading:F}})((0,h.memo)(Y))}}]);