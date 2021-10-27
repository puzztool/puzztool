(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[7],{219:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(109);function a(t){return"boolean"===typeof t?t?r.a:void 0:t}},220:function(t,e,n){"use strict";var r=n(6),a=n(0),i=n(32),c=n(213),o=n(106),s=n(16),l=n(221),u=n(1),b=function(t){var e=t.id,n=t.generateChildId,l=t.onSelect,b=t.activeKey,d=t.defaultActiveKey,j=t.transition,O=t.mountOnEnter,v=t.unmountOnExit,x=t.children,h=Object(i.b)(b,d,l),f=Object(r.a)(h,2),m=f[0],E=f[1],p=Object(c.a)(e),y=Object(a.useMemo)((function(){return n||function(t,e){return p?"".concat(p,"-").concat(e,"-").concat(t):null}}),[p,n]),g=Object(a.useMemo)((function(){return{onSelect:E,activeKey:m,transition:j,mountOnEnter:O||!1,unmountOnExit:v||!1,getControlledId:function(t){return y(t,"tabpane")},getControllerId:function(t){return y(t,"tab")}}}),[E,m,j,O,v,y]);return Object(u.jsx)(o.a.Provider,{value:g,children:Object(u.jsx)(s.a.Provider,{value:E||null,children:x})})};b.Panel=l.a,e.a=b},221:function(t,e,n){"use strict";n.d(e,"b",(function(){return j}));var r=n(6),a=n(0),i=n(106),c=n(16),o=n(222),s=n(1),l=["active","eventKey","mountOnEnter","transition","unmountOnExit"],u=["activeKey","getControlledId","getControllerId"],b=["as"];function d(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}function j(t){var e=t.active,n=t.eventKey,r=t.mountOnEnter,o=t.transition,s=t.unmountOnExit,b=d(t,l),j=Object(a.useContext)(i.a);if(!j)return[b,{eventKey:n,isActive:e,mountOnEnter:r,transition:o,unmountOnExit:s}];var O=j.activeKey,v=j.getControlledId,x=j.getControllerId,h=d(j,u),f=Object(c.b)(n);return[Object.assign({},b,{id:v(n),"aria-labelledby":x(n)}),{eventKey:n,isActive:null==e&&null!=f?Object(c.b)(O)===f:e,transition:o||h.transition,mountOnEnter:null!=r?r:h.mountOnEnter,unmountOnExit:null!=s?s:h.unmountOnExit}]}var O=a.forwardRef((function(t,e){var n=t.as,a=void 0===n?"div":n,l=j(d(t,b)),u=Object(r.a)(l,2),O=u[0],v=u[1],x=v.isActive,h=v.onEnter,f=v.onEntering,m=v.onEntered,E=v.onExit,p=v.onExiting,y=v.onExited,g=v.mountOnEnter,C=v.unmountOnExit,K=v.transition,T=void 0===K?o.a:K;return Object(s.jsx)(i.a.Provider,{value:null,children:Object(s.jsx)(c.a.Provider,{value:null,children:Object(s.jsx)(T,{in:x,onEnter:h,onEntering:f,onEntered:m,onExit:E,onExiting:p,onExited:y,mountOnEnter:g,unmountOnExit:C,children:Object(s.jsx)(a,Object.assign({},O,{ref:e,role:"tabpanel",hidden:!x,"aria-hidden":!x}))})})})}));O.displayName="TabPanel",e.a=O},222:function(t,e,n){"use strict";var r=n(0);e.a=function(t){var e=t.children,n=t.in,a=t.mountOnEnter,i=t.unmountOnExit,c=Object(r.useRef)(n);return Object(r.useEffect)((function(){n&&(c.current=!0)}),[n]),n?e:i||!c.current&&a?null:e}},223:function(t,e,n){"use strict";var r=n(14);e.a=Object(r.a)("tab-content")},224:function(t,e,n){"use strict";var r=n(2),a=n(6),i=n(3),c=n(4),o=n.n(c),s=n(0),l=n(222),u=n(16),b=n(106),d=n(221),j=n(5),O=n(219),v=n(1),x=["bsPrefix","transition"],h=["className","as"],f=s.forwardRef((function(t,e){var n=t.bsPrefix,c=t.transition,s=Object(i.a)(t,x),f=Object(d.b)(Object(r.a)(Object(r.a)({},s),{},{transition:Object(O.a)(c)})),m=Object(a.a)(f,2),E=m[0],p=E.className,y=E.as,g=void 0===y?"div":y,C=Object(i.a)(E,h),K=m[1],T=K.isActive,N=K.onEnter,P=K.onEntering,I=K.onEntered,S=K.onExit,w=K.onExiting,z=K.onExited,A=K.mountOnEnter,R=K.unmountOnExit,k=K.transition,_=void 0===k?l.a:k,q=Object(j.a)(n,"tab-pane");return Object(v.jsx)(b.a.Provider,{value:null,children:Object(v.jsx)(u.a.Provider,{value:null,children:Object(v.jsx)(_,{in:T,onEnter:N,onEntering:P,onEntered:I,onExit:S,onExiting:w,onExited:z,mountOnEnter:A,unmountOnExit:R,children:Object(v.jsx)(g,Object(r.a)(Object(r.a)({},C),{},{ref:e,className:o()(p,q,T&&"active")}))})})})}));f.displayName="TabPane",e.a=f},225:function(t,e,n){"use strict";var r=n(2),a=n(3),i=n(4),c=n.n(i),o=n(0),s=n(5),l=n(1),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],b=o.forwardRef((function(t,e){var n=t.bsPrefix,i=t.className,o=t.striped,b=t.bordered,d=t.borderless,j=t.hover,O=t.size,v=t.variant,x=t.responsive,h=Object(a.a)(t,u),f=Object(s.a)(n,"table"),m=c()(i,f,v&&"".concat(f,"-").concat(v),O&&"".concat(f,"-").concat(O),o&&"".concat(f,"-striped"),b&&"".concat(f,"-bordered"),d&&"".concat(f,"-borderless"),j&&"".concat(f,"-hover")),E=Object(l.jsx)("table",Object(r.a)(Object(r.a)({},h),{},{className:m,ref:e}));if(x){var p="".concat(f,"-responsive");return"string"===typeof x&&(p="".concat(p,"-").concat(x)),Object(l.jsx)("div",{className:p,children:E})}return E}));e.a=b},226:function(t,e,n){"use strict";var r=n(2),a=n(3),i=(n(0),n(32)),c=n(220),o=n(71),s=n(70),l=n(111),u=n(223),b=n(224),d=n(112),j=n(219),O=n(1),v=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function x(t){var e=t.props,n=e.title,r=e.eventKey,a=e.disabled,i=e.tabClassName,c=e.id;return null==n?null:Object(O.jsx)(l.a,{as:"li",role:"presentation",children:Object(O.jsx)(s.a,{as:"button",type:"button",eventKey:r,disabled:a,id:c,className:i,children:n})})}var h=function(t){var e=Object(i.a)(t,{activeKey:"onSelect"}),n=e.id,s=e.onSelect,l=e.transition,h=e.mountOnEnter,f=e.unmountOnExit,m=e.children,E=e.activeKey,p=void 0===E?function(t){var e;return Object(d.a)(t,(function(t){null==e&&(e=t.props.eventKey)})),e}(m):E,y=Object(a.a)(e,v);return Object(O.jsxs)(c.a,{id:n,activeKey:p,onSelect:s,transition:Object(j.a)(l),mountOnEnter:h,unmountOnExit:f,children:[Object(O.jsx)(o.a,Object(r.a)(Object(r.a)({},y),{},{role:"tablist",as:"ul",children:Object(d.b)(m,x)})),Object(O.jsx)(u.a,{children:Object(d.b)(m,(function(t){var e=Object(r.a)({},t.props);return delete e.title,delete e.disabled,delete e.tabClassName,Object(O.jsx)(b.a,Object(r.a)({},e))}))})]})};h.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},h.displayName="Tabs",e.a=h},227:function(t,e,n){"use strict";var r=n(17),a=n.n(r),i=(n(0),n(2)),c=n(3),o=n(220),s=n(219),l=n(1),u=["transition"],b=function(t){var e=t.transition,n=Object(c.a)(t,u);return Object(l.jsx)(o.a,Object(i.a)(Object(i.a)({},n),{},{transition:Object(s.a)(e)}))};b.displayName="TabContainer";var d=b,j=n(223),O=n(224),v={eventKey:a.a.oneOfType([a.a.string,a.a.number]),title:a.a.node.isRequired,disabled:a.a.bool,tabClassName:a.a.string},x=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};x.propTypes=v;e.a=Object.assign(x,{Container:d,Content:j.a,Pane:O.a})},240:function(t,e,n){t.exports={container:"CharacterTable_container__24qzt"}},262:function(t,e,n){"use strict";n.r(e);var r=n(227),a=n(226),i=n(108),c=n(107),o=n(68),s=n(225),l=n(240),u=n.n(l),b=n(1);var d=function(t){return Object(b.jsx)("div",{className:u.a.container,children:Object(b.jsxs)(s.a,{striped:!0,responsive:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Character"}),Object(b.jsx)("th",{children:"Binary"}),Object(b.jsx)("th",{children:"Ternary"}),Object(b.jsx)("th",{children:"Octal"}),Object(b.jsx)("th",{children:"Decimal"}),Object(b.jsx)("th",{children:"Hexadecimal"})]})}),Object(b.jsx)("tbody",{children:t.data.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.character}),Object(b.jsx)("td",{children:t.binary}),Object(b.jsx)("td",{children:t.ternary}),Object(b.jsx)("td",{children:t.octal}),Object(b.jsx)("td",{children:t.decimal}),Object(b.jsx)("td",{children:t.hexadecimal.toUpperCase()})]},t.character)}))})]})})};var j=function(){return Object(b.jsx)(d,{data:o.CharacterConversion.getAsciiTable()})},O=n(150);var v=function(){return Object(b.jsx)(d,{data:o.CharacterConversion.getOrdinalTable()})},x={selectTab:O.b},h=Object(i.b)((function(t){return{selectedTab:t.encoding.character.selectedTab}}),x);e.default=h((function(t){return Object(b.jsx)(c.a,{title:"Character Encodings",children:Object(b.jsxs)(a.a,{activeKey:t.selectedTab,id:"CharacterEncodings-tabs",onSelect:t.selectTab,children:[Object(b.jsx)(r.a,{eventKey:"1",title:"ASCII",children:Object(b.jsx)(j,{})}),Object(b.jsx)(r.a,{eventKey:"2",title:"Ordinal",children:Object(b.jsx)(v,{})})]})})}))}}]);
//# sourceMappingURL=7.b8892e98.chunk.js.map