(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[8],{200:function(e,t,n){"use strict";var a=n(0),r=n(24),c=n(88),i=n(17),o=n(1);t.a=function(e){var t=Object(r.a)(e,{activeKey:"onSelect"}),n=t.id,s=t.generateChildId,l=t.onSelect,d=t.activeKey,u=t.transition,b=t.mountOnEnter,j=t.unmountOnExit,O=t.children,v=Object(a.useMemo)((function(){return s||function(e,t){return n?"".concat(n,"-").concat(t,"-").concat(e):null}}),[n,s]),h=Object(a.useMemo)((function(){return{onSelect:l,activeKey:d,transition:u,mountOnEnter:b||!1,unmountOnExit:j||!1,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[l,d,u,b,j,v]);return Object(o.jsx)(c.a.Provider,{value:h,children:Object(o.jsx)(i.a.Provider,{value:l||null,children:O})})}},201:function(e,t,n){"use strict";var a=n(18);t.a=Object(a.a)("tab-content")},202:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(5),i=n.n(c),o=n(0),s=n(6),l=n(88),d=n(17),u=n(203),b=n(1),j=["activeKey","getControlledId","getControllerId"],O=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var v=o.forwardRef((function(e,t){var n=function(e){var t=Object(o.useContext)(l.a);if(!t)return e;var n=t.activeKey,c=t.getControlledId,i=t.getControllerId,s=Object(r.a)(t,j),b=!1!==e.transition&&!1!==s.transition,O=Object(d.b)(e.eventKey);return Object(a.a)(Object(a.a)({},e),{},{active:null==e.active&&null!=O?Object(d.b)(n)===O:e.active,id:c(e.eventKey),"aria-labelledby":i(e.eventKey),transition:b&&(e.transition||s.transition||u.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:s.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:s.unmountOnExit})}(e),c=n.bsPrefix,v=n.className,h=n.active,x=n.onEnter,m=n.onEntering,f=n.onEntered,E=n.onExit,p=n.onExiting,y=n.onExited,C=n.mountOnEnter,g=n.unmountOnExit,K=n.transition,N=n.as,T=void 0===N?"div":N,P=(n.eventKey,Object(r.a)(n,O)),I=Object(s.a)(c,"tab-pane");if(!h&&!K&&g)return null;var w=Object(b.jsx)(T,Object(a.a)(Object(a.a)({},P),{},{ref:t,role:"tabpanel","aria-hidden":!h,className:i()(v,I,{active:h})}));return K&&(w=Object(b.jsx)(K,{in:h,onEnter:x,onEntering:m,onEntered:f,onExit:E,onExiting:p,onExited:y,mountOnEnter:C,unmountOnExit:g,children:w})),Object(b.jsx)(l.a.Provider,{value:null,children:Object(b.jsx)(d.a.Provider,{value:null,children:w})})}));v.displayName="TabPane",t.a=v},203:function(e,t,n){"use strict";var a,r=n(2),c=n(3),i=n(14),o=n(5),s=n.n(o),l=n(0),d=n(36),u=n(92),b=n(89),j=n(90),O=n(1),v=["className","children"],h=(a={},Object(i.a)(a,d.b,"show"),Object(i.a)(a,d.a,"show"),a),x=l.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(c.a)(e,v),o=Object(l.useCallback)((function(e){Object(b.a)(e),null==i.onEnter||i.onEnter(e)}),[i]);return Object(O.jsx)(j.a,Object(r.a)(Object(r.a)({ref:t,addEndListener:u.a},i),{},{onEnter:o,childRef:a.ref,children:function(e,t){return l.cloneElement(a,Object(r.a)(Object(r.a)({},t),{},{className:s()("fade",n,a.props.className,h[e])}))}}))}));x.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},x.displayName="Fade",t.a=x},204:function(e,t,n){"use strict";var a=n(2),r=n(3),c=n(5),i=n.n(c),o=n(0),s=n(6),l=n(1),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,o=e.striped,u=e.bordered,b=e.borderless,j=e.hover,O=e.size,v=e.variant,h=e.responsive,x=Object(r.a)(e,d),m=Object(s.a)(n,"table"),f=i()(c,m,v&&"".concat(m,"-").concat(v),O&&"".concat(m,"-").concat(O),o&&"".concat(m,"-striped"),u&&"".concat(m,"-bordered"),b&&"".concat(m,"-borderless"),j&&"".concat(m,"-hover")),E=Object(l.jsx)("table",Object(a.a)(Object(a.a)({},x),{},{className:f,ref:t}));if(h){var p="".concat(m,"-responsive");return"string"===typeof h&&(p="".concat(p,"-").concat(h)),Object(l.jsx)("div",{className:p,children:E})}return E}));t.a=u},205:function(e,t,n){"use strict";var a=n(2),r=n(3),c=(n(0),n(136),n(24)),i=n(57),o=n(56),s=n(93),l=n(200),d=n(201),u=n(202),b=n(94),j=n(1),O=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function v(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,c=t.tabClassName,i=t.id;return null==n?null:Object(j.jsx)(s.a,{as:"li",role:"presentation",children:Object(j.jsx)(o.a,{as:"button",type:"button",eventKey:a,disabled:r,id:i,className:c,children:n})})}var h=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,o=t.onSelect,s=t.transition,h=t.mountOnEnter,x=t.unmountOnExit,m=t.children,f=t.activeKey,E=void 0===f?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(m):f,p=Object(r.a)(t,O);return Object(j.jsxs)(l.a,{id:n,activeKey:E,onSelect:o,transition:s,mountOnEnter:h,unmountOnExit:x,children:[Object(j.jsx)(i.a,Object(a.a)(Object(a.a)({},p),{},{role:"tablist",as:"ul",children:Object(b.b)(m,v)})),Object(j.jsx)(d.a,{children:Object(b.b)(m,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,Object(j.jsx)(u.a,Object(a.a)({},t))}))})]})};h.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},h.displayName="Tabs",t.a=h},206:function(e,t,n){"use strict";var a=n(8),r=n.n(a),c=(n(0),n(200)),i=n(201),o=n(202),s=(n(1),{eventKey:r.a.oneOfType([r.a.string,r.a.number]),title:r.a.node.isRequired,disabled:r.a.bool,tabClassName:r.a.string}),l=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};l.propTypes=s,t.a=Object.assign(l,{Container:c.a,Content:i.a,Pane:o.a})},221:function(e,t,n){},244:function(e,t,n){"use strict";n.r(t);var a=n(206),r=n(205),c=n(87),i=n(86),o=n(54),s=n(204),l=(n(221),n(1));var d=function(e){return Object(l.jsx)("div",{className:"CharacterTable",children:Object(l.jsxs)(s.a,{striped:!0,responsive:!0,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Character"}),Object(l.jsx)("th",{children:"Binary"}),Object(l.jsx)("th",{children:"Ternary"}),Object(l.jsx)("th",{children:"Octal"}),Object(l.jsx)("th",{children:"Decimal"}),Object(l.jsx)("th",{children:"Hexadecimal"})]})}),Object(l.jsx)("tbody",{children:e.data.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.character}),Object(l.jsx)("td",{children:e.binary}),Object(l.jsx)("td",{children:e.ternary}),Object(l.jsx)("td",{children:e.octal}),Object(l.jsx)("td",{children:e.decimal}),Object(l.jsx)("td",{children:e.hexadecimal.toUpperCase()})]},e.character)}))})]})})};var u=function(){return Object(l.jsx)(d,{data:o.CharacterConversion.getAsciiTable()})},b=n(131);var j=function(){return Object(l.jsx)(d,{data:o.CharacterConversion.getOrdinalTable()})},O={selectTab:b.b},v=Object(c.b)((function(e){return{selectedTab:e.encoding.character.selectedTab}}),O);t.default=v((function(e){return Object(l.jsx)(i.a,{title:"Character Encodings",children:Object(l.jsxs)(r.a,{activeKey:e.selectedTab,id:"CharacterEncodings-tabs",onSelect:e.selectTab,children:[Object(l.jsx)(a.a,{eventKey:"1",title:"ASCII",children:Object(l.jsx)(u,{})}),Object(l.jsx)(a.a,{eventKey:"2",title:"Ordinal",children:Object(l.jsx)(j,{})})]})})}))}}]);
//# sourceMappingURL=8.d0e42da8.chunk.js.map