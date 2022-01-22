"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[815],{3125:function(n,e,t){t.d(e,{Z:function(){return a}});var r="ReferenceList_list__rSo8R",i=t(184),a=function(n){return(0,i.jsx)("div",{className:r,children:n.children})}},815:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r=t(1734),i=t(9485),a=t(364),o=t(3624),c=t(2315),s=t(1560),l=t(2791),u=t(3360),d=t(6144),f=t(7418),x=t(9140),v=t(2677),m=t(7022),h=t(9743),Z=t(4942),p=t(1694),j=t.n(p),E="BrailleCell_container__zzATP",b="BrailleCell_selected__J7Jrk",y=t(184);var g=function(n){var e=j()(E,(0,Z.Z)({},b,n.character.get(n.mask)));return(0,y.jsx)("button",{className:e,onClick:function(){var e=n.onClick;e&&e(n.mask)},children:(0,y.jsxs)("svg",{viewBox:"0 0 60 60",children:[(0,y.jsx)("circle",{cx:"30",cy:"30",r:"12"}),"Sorry, your browser does not support inline SVG."]})})},O="BrailleCharacter_container__rV9Tx";var C=function(n){function e(e){var t=n.onClick;t&&t(e)}function t(t){return(0,y.jsx)(g,{character:n.character,mask:t,onClick:e})}return(0,y.jsxs)("div",{className:O,children:[t(s.xG.UpperLeft),t(s.xG.UpperRight),t(s.xG.MiddleLeft),t(s.xG.MiddleRight),t(s.xG.LowerLeft),t(s.xG.LowerRight)]})},N="BrailleStream_container__Jq-5M",k="BrailleStream_input__IPH-f",w="BrailleStream_view__oWUl6",P="BrailleStream_output__O4l9Z",_={append:c.R3,backspace:c.as,clear:c.ZH,setEncoding:c.KJ,space:c.Dh};var K=(0,a.$j)((function(n){return{encoding:n.encoding.braille.encoding,stream:n.encoding.braille.stream}}),_)((function(n){function e(e){var t=new s.Ld(n.encoding);t.toggle(e),n.setEncoding(t.encoding)}function t(){var e=new s.Ld(n.encoding);e.valid()?n.append(e.valueOf()):n.space()}(0,l.useEffect)((function(){function r(e){if(!e.defaultPrevented){var t=!1;8===e.keyCode&&(n.backspace(),t=!0),t&&e.preventDefault()}}function i(n){if(!n.defaultPrevented){var r=!1;13===n.keyCode?(t(),r=!0):n.charCode>=49&&n.charCode<=54&&e(Math.pow(2,n.charCode-49)),r&&n.preventDefault()}}return document.addEventListener("keydown",r),document.addEventListener("keypress",i),function(){document.removeEventListener("keydown",r),document.removeEventListener("keypress",i)}}));var r=new s.Ld(n.encoding);return(0,y.jsxs)("div",{className:N,children:[(0,y.jsxs)(x.Z,{className:k,children:[(0,y.jsx)(x.Z.Header,{children:"Input"}),(0,y.jsx)(x.Z.Body,{children:(0,y.jsxs)(m.Z,{fluid:!0,children:[(0,y.jsxs)(h.Z,{children:[(0,y.jsx)(v.Z,{xs:"auto",sm:"auto",md:"auto",children:(0,y.jsx)(C,{character:r,onClick:e})}),(0,y.jsx)(v.Z,{className:w,children:r.toString()||"?"})]}),(0,y.jsx)(h.Z,{children:(0,y.jsx)(v.Z,{children:(0,y.jsxs)(f.Z,{children:[(0,y.jsx)(d.Z,{children:(0,y.jsx)(u.Z,{onClick:function(){n.backspace()},children:"\u232b"})}),(0,y.jsx)(d.Z,{children:(0,y.jsx)(u.Z,{onClick:t,children:"Next"})}),(0,y.jsx)(d.Z,{children:(0,y.jsx)(u.Z,{onClick:function(){n.clear()},variant:"danger",children:"Clear"})})]})})})]})})]}),(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(x.Z.Header,{children:"Output"}),(0,y.jsx)(x.Z.Body,{children:(0,y.jsxs)("pre",{className:P,children:[new s.U2(n.stream).toString(),(0,y.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]})]})})),L=t(3125);var R=function(n){function e(e,t,r){return(0,y.jsx)("use",{transform:"translate(".concat(t,", ").concat(r,")"),xlinkHref:n.character.get(e)?"#FullDot":"#EmptyDot"})}return(0,y.jsxs)("svg",{width:n.width,viewBox:"0 0 34 52",children:[(0,y.jsxs)("defs",{children:[(0,y.jsx)("g",{id:"FullDot",children:(0,y.jsx)("circle",{r:"6",fill:"black",cx:"0",cy:"0"})}),(0,y.jsx)("g",{id:"EmptyDot",children:(0,y.jsx)("circle",{r:"6",fill:"transparent",strokeWidth:"1",stroke:"black",cx:"0",cy:"0"})})]}),e(s.xG.UpperLeft,8,8),e(s.xG.UpperRight,26,8),e(s.xG.MiddleLeft,8,26),e(s.xG.MiddleRight,26,26),e(s.xG.LowerLeft,8,44),e(s.xG.LowerRight,26,44),"Sorry, your browser does not support inline SVG."]})};var S=function(){var n=(new s.Ld).getPotentialMatches();return(0,y.jsx)(L.Z,{children:n.map((function(n){return(0,y.jsxs)("div",{children:[(0,y.jsx)(R,{width:40,character:new s.Ld(n.encoding,n.category)}),(0,y.jsx)("br",{}),n.display]},"".concat(n.encoding,"_").concat(n.display))}))})},T={selectTab:c.x2};var B=(0,a.$j)((function(n){return{selectedTab:n.encoding.braille.selectedTab}}),T)((function(n){return(0,y.jsx)(o.Z,{title:"Braille",children:(0,y.jsxs)(i.Z,{activeKey:n.selectedTab,id:"Braille-tabs",onSelect:n.selectTab,children:[(0,y.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,y.jsx)(K,{})}),(0,y.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,y.jsx)(S,{})})]})})}))},5666:function(n,e,t){var r=t(2791);e.Z=function(n){var e=n.children,t=n.in,i=n.mountOnEnter,a=n.unmountOnExit,o=(0,r.useRef)(t);return(0,r.useEffect)((function(){t&&(o.current=!0)}),[t]),t?e:a||!o.current&&i?null:e}},551:function(n,e,t){t.d(e,{W:function(){return x}});var r=t(885),i=t(2791),a=t(165),o=t(4944),c=t(5666),s=t(184),l=["active","eventKey","mountOnEnter","transition","unmountOnExit"],u=["activeKey","getControlledId","getControllerId"],d=["as"];function f(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function x(n){var e=n.active,t=n.eventKey,r=n.mountOnEnter,c=n.transition,s=n.unmountOnExit,d=f(n,l),x=(0,i.useContext)(a.Z);if(!x)return[d,{eventKey:t,isActive:e,mountOnEnter:r,transition:c,unmountOnExit:s}];var v=x.activeKey,m=x.getControlledId,h=x.getControllerId,Z=f(x,u),p=(0,o.h)(t);return[Object.assign({},d,{id:m(t),"aria-labelledby":h(t)}),{eventKey:t,isActive:null==e&&null!=p?(0,o.h)(v)===p:e,transition:c||Z.transition,mountOnEnter:null!=r?r:Z.mountOnEnter,unmountOnExit:null!=s?s:Z.unmountOnExit}]}var v=i.forwardRef((function(n,e){var t=n.as,i=void 0===t?"div":t,l=x(f(n,d)),u=(0,r.Z)(l,2),v=u[0],m=u[1],h=m.isActive,Z=m.onEnter,p=m.onEntering,j=m.onEntered,E=m.onExit,b=m.onExiting,y=m.onExited,g=m.mountOnEnter,O=m.unmountOnExit,C=m.transition,N=void 0===C?c.Z:C;return(0,s.jsx)(a.Z.Provider,{value:null,children:(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(N,{in:h,onEnter:Z,onEntering:p,onEntered:j,onExit:E,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:O,children:(0,s.jsx)(i,Object.assign({},v,{ref:e,role:"tabpanel",hidden:!h,"aria-hidden":!h}))})})})}));v.displayName="TabPanel",e.Z=v},5561:function(n,e,t){var r=t(885),i=t(2791),a=t(239),o=t(2021),c=t(165),s=t(4944),l=t(551),u=t(184),d=function(n){var e=n.id,t=n.generateChildId,l=n.onSelect,d=n.activeKey,f=n.defaultActiveKey,x=n.transition,v=n.mountOnEnter,m=n.unmountOnExit,h=n.children,Z=(0,a.$c)(d,f,l),p=(0,r.Z)(Z,2),j=p[0],E=p[1],b=(0,o.gP)(e),y=(0,i.useMemo)((function(){return t||function(n,e){return b?"".concat(b,"-").concat(e,"-").concat(n):null}}),[b,t]),g=(0,i.useMemo)((function(){return{onSelect:E,activeKey:j,transition:x,mountOnEnter:v||!1,unmountOnExit:m||!1,getControlledId:function(n){return y(n,"tabpane")},getControllerId:function(n){return y(n,"tab")}}}),[E,j,x,v,m,y]);return(0,u.jsx)(c.Z.Provider,{value:g,children:(0,u.jsx)(s.Z.Provider,{value:E||null,children:h})})};d.Panel=l.Z,e.Z=d},2677:function(n,e,t){var r=t(885),i=t(1413),a=t(5987),o=t(1694),c=t.n(o),s=t(2791),l=t(162),u=t(184),d=["as","bsPrefix","className"],f=["className"],x=["xxl","xl","lg","md","sm","xs"];var v=s.forwardRef((function(n,e){var t=function(n){var e=n.as,t=n.bsPrefix,r=n.className,o=(0,a.Z)(n,d);t=(0,l.vE)(t,"col");var s=[],u=[];return x.forEach((function(n){var e,r,i,a=o[n];delete o[n],"object"===typeof a&&null!=a?(e=a.span,r=a.offset,i=a.order):e=a;var c="xs"!==n?"-".concat(n):"";e&&s.push(!0===e?"".concat(t).concat(c):"".concat(t).concat(c,"-").concat(e)),null!=i&&u.push("order".concat(c,"-").concat(i)),null!=r&&u.push("offset".concat(c,"-").concat(r))})),[(0,i.Z)((0,i.Z)({},o),{},{className:c().apply(void 0,[r].concat(s,u))}),{as:e,bsPrefix:t,spans:s}]}(n),o=(0,r.Z)(t,2),s=o[0],v=s.className,m=(0,a.Z)(s,f),h=o[1],Z=h.as,p=void 0===Z?"div":Z,j=h.bsPrefix,E=h.spans;return(0,u.jsx)(p,(0,i.Z)((0,i.Z)({},m),{},{ref:e,className:c()(v,!E.length&&j)}))}));v.displayName="Col",e.Z=v},7022:function(n,e,t){var r=t(1413),i=t(5987),a=t(1694),o=t.n(a),c=t(2791),s=t(162),l=t(184),u=["bsPrefix","fluid","as","className"],d=c.forwardRef((function(n,e){var t=n.bsPrefix,a=n.fluid,c=n.as,d=void 0===c?"div":c,f=n.className,x=(0,i.Z)(n,u),v=(0,s.vE)(t,"container"),m="string"===typeof a?"-".concat(a):"-fluid";return(0,l.jsx)(d,(0,r.Z)((0,r.Z)({ref:e},x),{},{className:o()(f,a?"".concat(v).concat(m):v)}))}));d.displayName="Container",d.defaultProps={fluid:!1},e.Z=d},9743:function(n,e,t){var r=t(1413),i=t(5987),a=t(1694),o=t.n(a),c=t(2791),s=t(162),l=t(184),u=["bsPrefix","className","as"],d=["xxl","xl","lg","md","sm","xs"],f=c.forwardRef((function(n,e){var t=n.bsPrefix,a=n.className,c=n.as,f=void 0===c?"div":c,x=(0,i.Z)(n,u),v=(0,s.vE)(t,"row"),m="".concat(v,"-cols"),h=[];return d.forEach((function(n){var e,t=x[n];delete x[n],e=null!=t&&"object"===typeof t?t.cols:t;var r="xs"!==n?"-".concat(n):"";null!=e&&h.push("".concat(m).concat(r,"-").concat(e))})),(0,l.jsx)(f,(0,r.Z)((0,r.Z)({ref:e},x),{},{className:o().apply(void 0,[a,v].concat(h))}))}));f.displayName="Row",e.Z=f},1734:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(2007),i=t.n(r),a=(t(2791),t(1413)),o=t(5987),c=t(5561),s=t(3507),l=t(184),u=["transition"],d=function(n){var e=n.transition,t=(0,o.Z)(n,u);return(0,l.jsx)(c.Z,(0,a.Z)((0,a.Z)({},t),{},{transition:(0,s.Z)(e)}))};d.displayName="TabContainer";var f=d,x=t(4886),v=t(4504),m={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string},h=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};h.propTypes=m;var Z=Object.assign(h,{Container:f,Content:x.Z,Pane:v.Z})},4886:function(n,e,t){var r=t(6543);e.Z=(0,r.Z)("tab-content")},4504:function(n,e,t){var r=t(1413),i=t(885),a=t(5987),o=t(1694),c=t.n(o),s=t(2791),l=t(5666),u=t(4944),d=t(165),f=t(551),x=t(162),v=t(3507),m=t(184),h=["bsPrefix","transition"],Z=["className","as"],p=s.forwardRef((function(n,e){var t=n.bsPrefix,o=n.transition,s=(0,a.Z)(n,h),p=(0,f.W)((0,r.Z)((0,r.Z)({},s),{},{transition:(0,v.Z)(o)})),j=(0,i.Z)(p,2),E=j[0],b=E.className,y=E.as,g=void 0===y?"div":y,O=(0,a.Z)(E,Z),C=j[1],N=C.isActive,k=C.onEnter,w=C.onEntering,P=C.onEntered,_=C.onExit,K=C.onExiting,L=C.onExited,R=C.mountOnEnter,S=C.unmountOnExit,T=C.transition,B=void 0===T?l.Z:T,G=(0,x.vE)(t,"tab-pane");return(0,m.jsx)(d.Z.Provider,{value:null,children:(0,m.jsx)(u.Z.Provider,{value:null,children:(0,m.jsx)(B,{in:N,onEnter:k,onEntering:w,onEntered:P,onExit:_,onExiting:K,onExited:L,mountOnEnter:R,unmountOnExit:S,children:(0,m.jsx)(g,(0,r.Z)((0,r.Z)({},O),{},{ref:e,className:c()(b,G,N&&"active")}))})})})}));p.displayName="TabPane",e.Z=p},9485:function(n,e,t){var r=t(1413),i=t(5987),a=(t(2791),t(239)),o=t(5561),c=t(6957),s=t(9102),l=t(881),u=t(4886),d=t(4504),f=t(1701),x=t(3507),v=t(184),m=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function h(n){var e=n.props,t=e.title,r=e.eventKey,i=e.disabled,a=e.tabClassName,o=e.id;return null==t?null:(0,v.jsx)(l.Z,{as:"li",role:"presentation",children:(0,v.jsx)(s.Z,{as:"button",type:"button",eventKey:r,disabled:i,id:o,className:a,children:t})})}var Z=function(n){var e=(0,a.Ch)(n,{activeKey:"onSelect"}),t=e.id,s=e.onSelect,l=e.transition,Z=e.mountOnEnter,p=e.unmountOnExit,j=e.children,E=e.activeKey,b=void 0===E?function(n){var e;return(0,f.Ed)(n,(function(n){null==e&&(e=n.props.eventKey)})),e}(j):E,y=(0,i.Z)(e,m);return(0,v.jsxs)(o.Z,{id:t,activeKey:b,onSelect:s,transition:(0,x.Z)(l),mountOnEnter:Z,unmountOnExit:p,children:[(0,v.jsx)(c.Z,(0,r.Z)((0,r.Z)({},y),{},{role:"tablist",as:"ul",children:(0,f.UI)(j,h)})),(0,v.jsx)(u.Z,{children:(0,f.UI)(j,(function(n){var e=(0,r.Z)({},n.props);return delete e.title,delete e.disabled,delete e.tabClassName,(0,v.jsx)(d.Z,(0,r.Z)({},e))}))})]})};Z.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},Z.displayName="Tabs",e.Z=Z},3507:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(2709);function i(n){return"boolean"===typeof n?n?r.Z:void 0:n}}}]);
//# sourceMappingURL=815.33e5affb.chunk.js.map