(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[5],{160:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(17),i=n.n(r),a=i.a.oneOf(["start","end"]),c=i.a.oneOfType([a,i.a.shape({sm:a}),i.a.shape({md:a}),i.a.shape({lg:a}),i.a.shape({xl:a}),i.a.shape({xxl:a})])},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(109);function i(e){return"boolean"===typeof e?e?r.a:void 0:e}},220:function(e,t,n){"use strict";var r=n(6),i=n(0),a=n(32),c=n(213),o=n(106),s=n(16),l=n(221),u=n(1),d=function(e){var t=e.id,n=e.generateChildId,l=e.onSelect,d=e.activeKey,b=e.defaultActiveKey,j=e.transition,O=e.mountOnEnter,x=e.unmountOnExit,f=e.children,v=Object(a.b)(d,b,l),h=Object(r.a)(v,2),m=h[0],p=h[1],E=Object(c.a)(t),y=Object(i.useMemo)((function(){return n||function(e,t){return E?"".concat(E,"-").concat(t,"-").concat(e):null}}),[E,n]),g=Object(i.useMemo)((function(){return{onSelect:p,activeKey:m,transition:j,mountOnEnter:O||!1,unmountOnExit:x||!1,getControlledId:function(e){return y(e,"tabpane")},getControllerId:function(e){return y(e,"tab")}}}),[p,m,j,O,x,y]);return Object(u.jsx)(o.a.Provider,{value:g,children:Object(u.jsx)(s.a.Provider,{value:p||null,children:f})})};d.Panel=l.a,t.a=d},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return j}));var r=n(6),i=n(0),a=n(106),c=n(16),o=n(222),s=n(1),l=["active","eventKey","mountOnEnter","transition","unmountOnExit"],u=["activeKey","getControlledId","getControllerId"],d=["as"];function b(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function j(e){var t=e.active,n=e.eventKey,r=e.mountOnEnter,o=e.transition,s=e.unmountOnExit,d=b(e,l),j=Object(i.useContext)(a.a);if(!j)return[d,{eventKey:n,isActive:t,mountOnEnter:r,transition:o,unmountOnExit:s}];var O=j.activeKey,x=j.getControlledId,f=j.getControllerId,v=b(j,u),h=Object(c.b)(n);return[Object.assign({},d,{id:x(n),"aria-labelledby":f(n)}),{eventKey:n,isActive:null==t&&null!=h?Object(c.b)(O)===h:t,transition:o||v.transition,mountOnEnter:null!=r?r:v.mountOnEnter,unmountOnExit:null!=s?s:v.unmountOnExit}]}var O=i.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,l=j(b(e,d)),u=Object(r.a)(l,2),O=u[0],x=u[1],f=x.isActive,v=x.onEnter,h=x.onEntering,m=x.onEntered,p=x.onExit,E=x.onExiting,y=x.onExited,g=x.mountOnEnter,R=x.unmountOnExit,C=x.transition,T=void 0===C?o.a:C;return Object(s.jsx)(a.a.Provider,{value:null,children:Object(s.jsx)(c.a.Provider,{value:null,children:Object(s.jsx)(T,{in:f,onEnter:v,onEntering:h,onEntered:m,onExit:p,onExiting:E,onExited:y,mountOnEnter:g,unmountOnExit:R,children:Object(s.jsx)(i,Object.assign({},O,{ref:t,role:"tabpanel",hidden:!f,"aria-hidden":!f}))})})})}));O.displayName="TabPanel",t.a=O},222:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.children,n=e.in,i=e.mountOnEnter,a=e.unmountOnExit,c=Object(r.useRef)(n);return Object(r.useEffect)((function(){n&&(c.current=!0)}),[n]),n?t:a||!c.current&&i?null:t}},223:function(e,t,n){"use strict";var r=n(14);t.a=Object(r.a)("tab-content")},224:function(e,t,n){"use strict";var r=n(2),i=n(6),a=n(3),c=n(4),o=n.n(c),s=n(0),l=n(222),u=n(16),d=n(106),b=n(221),j=n(5),O=n(219),x=n(1),f=["bsPrefix","transition"],v=["className","as"],h=s.forwardRef((function(e,t){var n=e.bsPrefix,c=e.transition,s=Object(a.a)(e,f),h=Object(b.b)(Object(r.a)(Object(r.a)({},s),{},{transition:Object(O.a)(c)})),m=Object(i.a)(h,2),p=m[0],E=p.className,y=p.as,g=void 0===y?"div":y,R=Object(a.a)(p,v),C=m[1],T=C.isActive,I=C.onEnter,N=C.onEntering,P=C.onEntered,K=C.onExit,k=C.onExiting,w=C.onExited,_=C.mountOnEnter,B=C.unmountOnExit,S=C.transition,z=void 0===S?l.a:S,V=Object(j.a)(n,"tab-pane");return Object(x.jsx)(d.a.Provider,{value:null,children:Object(x.jsx)(u.a.Provider,{value:null,children:Object(x.jsx)(z,{in:T,onEnter:I,onEntering:N,onEntered:P,onExit:K,onExiting:k,onExited:w,mountOnEnter:_,unmountOnExit:B,children:Object(x.jsx)(g,Object(r.a)(Object(r.a)({},R),{},{ref:t,className:o()(E,V,T&&"active")}))})})})}));h.displayName="TabPane",t.a=h},225:function(e,t,n){"use strict";var r=n(2),i=n(3),a=n(4),c=n.n(a),o=n(0),s=n(5),l=n(1),u=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],d=o.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.striped,d=e.bordered,b=e.borderless,j=e.hover,O=e.size,x=e.variant,f=e.responsive,v=Object(i.a)(e,u),h=Object(s.a)(n,"table"),m=c()(a,h,x&&"".concat(h,"-").concat(x),O&&"".concat(h,"-").concat(O),o&&"".concat(h,"-striped"),d&&"".concat(h,"-bordered"),b&&"".concat(h,"-borderless"),j&&"".concat(h,"-hover")),p=Object(l.jsx)("table",Object(r.a)(Object(r.a)({},v),{},{className:m,ref:t}));if(f){var E="".concat(h,"-responsive");return"string"===typeof f&&(E="".concat(E,"-").concat(f)),Object(l.jsx)("div",{className:E,children:p})}return p}));t.a=d},226:function(e,t,n){"use strict";var r=n(2),i=n(3),a=(n(0),n(32)),c=n(220),o=n(71),s=n(70),l=n(111),u=n(223),d=n(224),b=n(112),j=n(219),O=n(1),x=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function f(e){var t=e.props,n=t.title,r=t.eventKey,i=t.disabled,a=t.tabClassName,c=t.id;return null==n?null:Object(O.jsx)(l.a,{as:"li",role:"presentation",children:Object(O.jsx)(s.a,{as:"button",type:"button",eventKey:r,disabled:i,id:c,className:a,children:n})})}var v=function(e){var t=Object(a.a)(e,{activeKey:"onSelect"}),n=t.id,s=t.onSelect,l=t.transition,v=t.mountOnEnter,h=t.unmountOnExit,m=t.children,p=t.activeKey,E=void 0===p?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(m):p,y=Object(i.a)(t,x);return Object(O.jsxs)(c.a,{id:n,activeKey:E,onSelect:s,transition:Object(j.a)(l),mountOnEnter:v,unmountOnExit:h,children:[Object(O.jsx)(o.a,Object(r.a)(Object(r.a)({},y),{},{role:"tablist",as:"ul",children:Object(b.b)(m,f)})),Object(O.jsx)(u.a,{children:Object(b.b)(m,(function(e){var t=Object(r.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,Object(O.jsx)(d.a,Object(r.a)({},t))}))})]})};v.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},v.displayName="Tabs",t.a=v},227:function(e,t,n){"use strict";var r=n(17),i=n.n(r),a=(n(0),n(2)),c=n(3),o=n(220),s=n(219),l=n(1),u=["transition"],d=function(e){var t=e.transition,n=Object(c.a)(e,u);return Object(l.jsx)(o.a,Object(a.a)(Object(a.a)({},n),{},{transition:Object(s.a)(t)}))};d.displayName="TabContainer";var b=d,j=n(223),O=n(224),x={eventKey:i.a.oneOfType([i.a.string,i.a.number]),title:i.a.node.isRequired,disabled:i.a.bool,tabClassName:i.a.string},f=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=x;t.a=Object.assign(f,{Container:b,Content:j.a,Pane:O.a})},247:function(e,t,n){e.exports={container:"ResistorInput_container__1XmFX",input:"ResistorInput_input__8A7Qz",display:"ResistorInput_display__2EvgL",output:"ResistorInput_output__1i0R-"}},248:function(e,t,n){e.exports={container:"ResistorTable_container__YRDnv"}},259:function(e,t,n){"use strict";n.r(t);var r=n(227),i=n(108),a=n(226),c=n(107),o=n(46),s=n(68),l=n(69),u=n(110),d=n(44),b=n(77),j=n(42),O=n(2),x=n(3),f=n(0),v=n(17),h=n.n(v),m=n(122),p=n(101),E=n(160),y=n(1),g=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"],R={id:h.a.string,href:h.a.string,onClick:h.a.func,title:h.a.node.isRequired,disabled:h.a.bool,align:E.a,menuRole:h.a.string,renderMenuOnMount:h.a.bool,rootCloseEvent:h.a.string,menuVariant:h.a.oneOf(["dark"]),bsPrefix:h.a.string,variant:h.a.string,size:h.a.string},C=f.forwardRef((function(e,t){var n=e.title,r=e.children,i=e.bsPrefix,a=e.rootCloseEvent,c=e.variant,o=e.size,s=e.menuRole,l=e.renderMenuOnMount,u=e.disabled,d=e.href,b=e.id,f=e.menuVariant,v=Object(x.a)(e,g);return Object(y.jsxs)(j.a,Object(O.a)(Object(O.a)({ref:t},v),{},{children:[Object(y.jsx)(m.a,{id:b,href:d,size:o,variant:c,disabled:u,childBsPrefix:i,children:n}),Object(y.jsx)(p.a,{role:s,renderOnMount:l,rootCloseEvent:a,variant:f,children:r})]}))}));C.displayName="DropdownButton",C.propTypes=R;var T=C;var I=function(e){return Object(y.jsx)(T,{title:e.title,id:"color-select-".concat(e.index),onSelect:function(t){var n=e.onChange;n&&n(e.index,function(e){var t,n=Object(b.a)(s.Resistor.colorTable);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e===r.name)return r}}catch(i){n.e(i)}finally{n.f()}}(t))},children:e.colors.map((function(t,n){return Object(y.jsx)(j.a.Item,{eventKey:t.name,children:t.name},"".concat(e.index,"-").concat(n))}))},e.index)},N=n(118);var P=function(e){function t(t){return t===e.bands.length-1?104:18*t+20}function n(n){var r=e.bands[n];if(r)return Object(y.jsx)("use",{xlinkHref:"#Band",x:t(n),fill:r.colorCode})}return Object(y.jsx)("div",{children:Object(y.jsxs)("svg",{width:"240",viewBox:"0 0 136 40",children:[Object(y.jsxs)("defs",{children:[Object(y.jsx)("g",{id:"Wire",children:Object(y.jsx)("rect",{y:"20",height:"1",width:"8",fill:"black"})}),Object(y.jsxs)("g",{id:"Resistor",children:[Object(y.jsx)("rect",{y:"8",x:"8",width:"120",height:"24",rx:"4",ry:"4",stroke:"black",strokeWidth:"0.5",fill:"burlywood"}),Object(y.jsx)("use",{xlinkHref:"#Wire",x:"0"}),Object(y.jsx)("use",{xlinkHref:"#Wire",x:"128"})]}),Object(y.jsx)("g",{id:"Band",children:Object(y.jsx)("rect",{y:"8",height:"24",width:"12",stroke:"black",strokeWidth:"0.5"})})]}),Object(y.jsx)("use",{xlinkHref:"#Resistor",x:"0",y:"0"}),n(0),n(1),n(2),n(3),n(4),"Sorry, your browser does not support inline SVG."]})})},K=n(247),k=n.n(K),w={setBand:N.c};function _(e){var t=e.slice(0,-1).filter((function(e){return!!e})),n=s.Resistor.getValue(t);return n===s.Resistor.INVALID_RESISTOR?"Invalid Resistor Colors":"".concat(s.Resistor.getDisplayValue(n)," \u2126 \xb1 ").concat(e[e.length-1].toleranceInPercent,"%")}var B=Object(i.b)((function(e){return{bands:e.resistor.bands}}),w)((function(e){function t(t,n){var r=n?s.Resistor.colorTable.indexOf(n):-1;e.setBand({bandIndex:t,colorIndex:r})}var n=e.bands.map((function(e){return s.Resistor.colorTable[e]})),r=s.Resistor.colorTable.filter((function(e){return e.hasValue()})),i=s.Resistor.colorTable.filter((function(e){return e.hasTolerance()}));return Object(y.jsxs)("div",{className:k.a.container,children:[Object(y.jsxs)(d.a,{className:k.a.input,children:[Object(y.jsx)(d.a.Header,{children:"Input"}),Object(y.jsxs)(d.a.Body,{children:[Object(y.jsx)("div",{className:k.a.display,children:Object(y.jsx)(P,{bands:n})}),Object(y.jsx)("div",{children:Object(y.jsxs)(u.a,{children:[Object(y.jsx)(l.a,{children:Object(y.jsx)(I,{index:0,title:"First Band",colors:r,onChange:t})}),Object(y.jsx)(l.a,{children:Object(y.jsx)(I,{index:1,title:"Second Band",colors:r,onChange:t})}),Object(y.jsx)(l.a,{children:Object(y.jsx)(I,{index:2,title:"Third Band",colors:s.Resistor.colorTable,onChange:t})}),Object(y.jsx)(l.a,{children:Object(y.jsx)(I,{index:3,title:"Fourth Band",colors:[new s.ResistorColorEntry("None","",0)].concat(Object(o.a)(s.Resistor.colorTable)),onChange:t})}),Object(y.jsx)(l.a,{children:Object(y.jsx)(I,{index:4,title:"Tolerance Band",colors:i,onChange:t})})]})})]})]}),Object(y.jsxs)(d.a,{className:k.a.output,children:[Object(y.jsx)(d.a.Header,{children:"Output"}),Object(y.jsx)(d.a.Body,{children:_(n)})]})]})})),S=n(225);function z(e){var t=e.substring(1),n=parseInt(t,16);return.2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(255&n)<40?"#ffffff":"#000000"}var V=n(248),M=n.n(V);function A(e){return{backgroundColor:e.colorCode,color:z(e.colorCode)}}var H=function(){return Object(y.jsx)("div",{className:M.a.container,children:Object(y.jsxs)(S.a,{striped:!0,responsive:!0,children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"Color"}),Object(y.jsx)("th",{children:"Value"}),Object(y.jsx)("th",{children:"Multiplier"}),Object(y.jsx)("th",{children:"Tolerance (%)"})]})}),Object(y.jsx)("tbody",{children:s.Resistor.colorTable.map((function(e){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{style:A(e),children:e.name}),Object(y.jsx)("td",{children:e.getDisplayValue()}),Object(y.jsx)("td",{children:e.multiplier}),Object(y.jsx)("td",{children:e.toleranceInPercent})]},e.name)}))})]})})},D={selectTab:N.b},W=Object(i.b)((function(e){return{selectedTab:e.resistor.selectedTab}}),D);t.default=W((function(e){return Object(y.jsx)(c.a,{title:"Resistors",children:Object(y.jsxs)(a.a,{activeKey:e.selectedTab,id:"Resistors-tabs",onSelect:e.selectTab,children:[Object(y.jsx)(r.a,{eventKey:"1",title:"Value",children:Object(y.jsx)(B,{})}),Object(y.jsx)(r.a,{eventKey:"2",title:"Reference",children:Object(y.jsx)(H,{})})]})})}))}}]);
//# sourceMappingURL=5.b091b1cc.chunk.js.map