"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[815],{3125:function(n,e,t){t.d(e,{Z:function(){return o}});var r="ReferenceList_list__rSo8R",i=t(184),o=function(n){return(0,i.jsx)("div",{className:r,children:n.children})}},815:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r=t(1734),i=t(9485),o=t(8687),a=t(3624),c=t(2315),s=t(1560),l=t(2791),d=t(3360),u=t(6144),x=t(7418),f=t(9140),v=t(2677),h=t(7022),m=t(9743),E=t(4942),Z=t(1694),p=t.n(Z),j="BrailleCell_container__zzATP",b="BrailleCell_selected__J7Jrk",g=t(184);var y=function(n){var e=p()(j,(0,E.Z)({},b,n.character.get(n.mask)));return(0,g.jsx)("button",{className:e,onClick:function(){var e=n.onClick;e&&e(n.mask)},children:(0,g.jsxs)("svg",{viewBox:"0 0 60 60",children:[(0,g.jsx)("circle",{cx:"30",cy:"30",r:"12"}),"Sorry, your browser does not support inline SVG."]})})},O="BrailleCharacter_container__rV9Tx";var C=function(n){function e(e){var t=n.onClick;t&&t(e)}function t(t){return(0,g.jsx)(y,{character:n.character,mask:t,onClick:e})}return(0,g.jsxs)("div",{className:O,children:[t(s.xG.UpperLeft),t(s.xG.UpperRight),t(s.xG.MiddleLeft),t(s.xG.MiddleRight),t(s.xG.LowerLeft),t(s.xG.LowerRight)]})},N="BrailleStream_container__Jq-5M",k="BrailleStream_input__IPH-f",w="BrailleStream_view__oWUl6",P="BrailleStream_output__O4l9Z",_={append:c.R3,backspace:c.as,clear:c.ZH,setEncoding:c.KJ,space:c.Dh};var K=(0,o.$j)((function(n){return{encoding:n.encoding.braille.encoding,stream:n.encoding.braille.stream}}),_)((function(n){function e(e){var t=new s.Ld(n.encoding);t.toggle(e),n.setEncoding(t.encoding)}function t(){var e=new s.Ld(n.encoding);e.valid()?n.append(e.valueOf()):n.space()}(0,l.useEffect)((function(){function r(e){if(!e.defaultPrevented){var t=!1;8===e.keyCode&&(n.backspace(),t=!0),t&&e.preventDefault()}}function i(n){if(!n.defaultPrevented){var r=!1;13===n.keyCode?(t(),r=!0):n.charCode>=49&&n.charCode<=54&&e(Math.pow(2,n.charCode-49)),r&&n.preventDefault()}}return document.addEventListener("keydown",r),document.addEventListener("keypress",i),function(){document.removeEventListener("keydown",r),document.removeEventListener("keypress",i)}}));var r=new s.Ld(n.encoding);return(0,g.jsxs)("div",{className:N,children:[(0,g.jsxs)(f.Z,{className:k,children:[(0,g.jsx)(f.Z.Header,{children:"Input"}),(0,g.jsx)(f.Z.Body,{children:(0,g.jsxs)(h.Z,{fluid:!0,children:[(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(v.Z,{xs:"auto",sm:"auto",md:"auto",children:(0,g.jsx)(C,{character:r,onClick:e})}),(0,g.jsx)(v.Z,{className:w,children:r.toString()||"?"})]}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(v.Z,{children:(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)(d.Z,{onClick:function(){n.backspace()},children:"\u232b"})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(d.Z,{onClick:t,children:"Next"})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(d.Z,{onClick:function(){n.clear()},variant:"danger",children:"Clear"})})]})})})]})})]}),(0,g.jsxs)(f.Z,{children:[(0,g.jsx)(f.Z.Header,{children:"Output"}),(0,g.jsx)(f.Z.Body,{children:(0,g.jsxs)("pre",{className:P,children:[new s.U2(n.stream).toString(),(0,g.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]})]})})),L=t(3125);var R=function(n){function e(e,t,r){return(0,g.jsx)("use",{transform:"translate(".concat(t,", ").concat(r,")"),xlinkHref:n.character.get(e)?"#FullDot":"#EmptyDot"})}return(0,g.jsxs)("svg",{width:n.width,viewBox:"0 0 34 52",children:[(0,g.jsxs)("defs",{children:[(0,g.jsx)("g",{id:"FullDot",children:(0,g.jsx)("circle",{r:"6",fill:"black",cx:"0",cy:"0"})}),(0,g.jsx)("g",{id:"EmptyDot",children:(0,g.jsx)("circle",{r:"6",fill:"transparent",strokeWidth:"1",stroke:"black",cx:"0",cy:"0"})})]}),e(s.xG.UpperLeft,8,8),e(s.xG.UpperRight,26,8),e(s.xG.MiddleLeft,8,26),e(s.xG.MiddleRight,26,26),e(s.xG.LowerLeft,8,44),e(s.xG.LowerRight,26,44),"Sorry, your browser does not support inline SVG."]})};var S=function(){var n=(new s.Ld).getPotentialMatches();return(0,g.jsx)(L.Z,{children:n.map((function(n){return(0,g.jsxs)("div",{children:[(0,g.jsx)(R,{width:40,character:new s.Ld(n.encoding,n.category)}),(0,g.jsx)("br",{}),n.display]},"".concat(n.encoding,"_").concat(n.display))}))})},T={selectTab:c.x2};var G=(0,o.$j)((function(n){return{selectedTab:n.encoding.braille.selectedTab}}),T)((function(n){return(0,g.jsx)(a.Z,{title:"Braille",children:(0,g.jsxs)(i.Z,{activeKey:n.selectedTab,id:"Braille-tabs",onSelect:n.selectTab,children:[(0,g.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,g.jsx)(K,{})}),(0,g.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,g.jsx)(S,{})})]})})}))},551:function(n,e,t){t.d(e,{W:function(){return f}});var r=t(9439),i=t(2791),o=t(165),a=t(4944),c=t(5666),s=t(184),l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],d=["activeKey","getControlledId","getControllerId"],u=["as"];function x(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function f(n){var e=n.active,t=n.eventKey,r=n.mountOnEnter,c=n.transition,s=n.unmountOnExit,u=n.role,f=void 0===u?"tabpanel":u,v=n.onEnter,h=n.onEntering,m=n.onEntered,E=n.onExit,Z=n.onExiting,p=n.onExited,j=x(n,l),b=(0,i.useContext)(o.Z);if(!b)return[Object.assign({},j,{role:f}),{eventKey:t,isActive:e,mountOnEnter:r,transition:c,unmountOnExit:s,onEnter:v,onEntering:h,onEntered:m,onExit:E,onExiting:Z,onExited:p}];var g=b.activeKey,y=b.getControlledId,O=b.getControllerId,C=x(b,d),N=(0,a.h)(t);return[Object.assign({},j,{role:f,id:y(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==e&&null!=N?(0,a.h)(g)===N:e,transition:c||C.transition,mountOnEnter:null!=r?r:C.mountOnEnter,unmountOnExit:null!=s?s:C.unmountOnExit,onEnter:v,onEntering:h,onEntered:m,onExit:E,onExiting:Z,onExited:p}]}var v=i.forwardRef((function(n,e){var t=n.as,i=void 0===t?"div":t,l=f(x(n,u)),d=(0,r.Z)(l,2),v=d[0],h=d[1],m=h.isActive,E=h.onEnter,Z=h.onEntering,p=h.onEntered,j=h.onExit,b=h.onExiting,g=h.onExited,y=h.mountOnEnter,O=h.unmountOnExit,C=h.transition,N=void 0===C?c.Z:C;return(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(a.Z.Provider,{value:null,children:(0,s.jsx)(N,{in:m,onEnter:E,onEntering:Z,onEntered:p,onExit:j,onExiting:b,onExited:g,mountOnEnter:y,unmountOnExit:O,children:(0,s.jsx)(i,Object.assign({},v,{ref:e,hidden:!m,"aria-hidden":!m}))})})})}));v.displayName="TabPanel",e.Z=v},5561:function(n,e,t){var r=t(9439),i=t(2791),o=t(239),a=t(2021),c=t(165),s=t(4944),l=t(551),d=t(184),u=function(n){var e=n.id,t=n.generateChildId,l=n.onSelect,u=n.activeKey,x=n.defaultActiveKey,f=n.transition,v=n.mountOnEnter,h=n.unmountOnExit,m=n.children,E=(0,o.$c)(u,x,l),Z=(0,r.Z)(E,2),p=Z[0],j=Z[1],b=(0,a.gP)(e),g=(0,i.useMemo)((function(){return t||function(n,e){return b?"".concat(b,"-").concat(e,"-").concat(n):null}}),[b,t]),y=(0,i.useMemo)((function(){return{onSelect:j,activeKey:p,transition:f,mountOnEnter:v||!1,unmountOnExit:h||!1,getControlledId:function(n){return g(n,"tabpane")},getControllerId:function(n){return g(n,"tab")}}}),[j,p,f,v,h,g]);return(0,d.jsx)(c.Z.Provider,{value:y,children:(0,d.jsx)(s.Z.Provider,{value:j||null,children:m})})};u.Panel=l.Z,e.Z=u},2677:function(n,e,t){var r=t(9439),i=t(1413),o=t(5987),a=t(1694),c=t.n(a),s=t(2791),l=t(162),d=t(184),u=["as","bsPrefix","className"],x=["className"];var f=s.forwardRef((function(n,e){var t=function(n){var e=n.as,t=n.bsPrefix,r=n.className,a=(0,o.Z)(n,u);t=(0,l.vE)(t,"col");var s=(0,l.pi)(),d=(0,l.zG)(),x=[],f=[];return s.forEach((function(n){var e,r,i,o=a[n];delete a[n],"object"===typeof o&&null!=o?(e=o.span,r=o.offset,i=o.order):e=o;var c=n!==d?"-".concat(n):"";e&&x.push(!0===e?"".concat(t).concat(c):"".concat(t).concat(c,"-").concat(e)),null!=i&&f.push("order".concat(c,"-").concat(i)),null!=r&&f.push("offset".concat(c,"-").concat(r))})),[(0,i.Z)((0,i.Z)({},a),{},{className:c().apply(void 0,[r].concat(x,f))}),{as:e,bsPrefix:t,spans:x}]}(n),a=(0,r.Z)(t,2),s=a[0],f=s.className,v=(0,o.Z)(s,x),h=a[1],m=h.as,E=void 0===m?"div":m,Z=h.bsPrefix,p=h.spans;return(0,d.jsx)(E,(0,i.Z)((0,i.Z)({},v),{},{ref:e,className:c()(f,!p.length&&Z)}))}));f.displayName="Col",e.Z=f},7022:function(n,e,t){var r=t(1413),i=t(5987),o=t(1694),a=t.n(o),c=t(2791),s=t(162),l=t(184),d=["bsPrefix","fluid","as","className"],u=c.forwardRef((function(n,e){var t=n.bsPrefix,o=n.fluid,c=n.as,u=void 0===c?"div":c,x=n.className,f=(0,i.Z)(n,d),v=(0,s.vE)(t,"container"),h="string"===typeof o?"-".concat(o):"-fluid";return(0,l.jsx)(u,(0,r.Z)((0,r.Z)({ref:e},f),{},{className:a()(x,o?"".concat(v).concat(h):v)}))}));u.displayName="Container",u.defaultProps={fluid:!1},e.Z=u},9743:function(n,e,t){var r=t(1413),i=t(5987),o=t(1694),a=t.n(o),c=t(2791),s=t(162),l=t(184),d=["bsPrefix","className","as"],u=c.forwardRef((function(n,e){var t=n.bsPrefix,o=n.className,c=n.as,u=void 0===c?"div":c,x=(0,i.Z)(n,d),f=(0,s.vE)(t,"row"),v=(0,s.pi)(),h=(0,s.zG)(),m="".concat(f,"-cols"),E=[];return v.forEach((function(n){var e,t=x[n];delete x[n],e=null!=t&&"object"===typeof t?t.cols:t;var r=n!==h?"-".concat(n):"";null!=e&&E.push("".concat(m).concat(r,"-").concat(e))})),(0,l.jsx)(u,(0,r.Z)((0,r.Z)({ref:e},x),{},{className:a().apply(void 0,[o,f].concat(E))}))}));u.displayName="Row",e.Z=u},1734:function(n,e,t){t.d(e,{Z:function(){return E}});var r=t(2007),i=t.n(r),o=(t(2791),t(1413)),a=t(5987),c=t(5561),s=t(3507),l=t(184),d=["transition"],u=function(n){var e=n.transition,t=(0,a.Z)(n,d);return(0,l.jsx)(c.Z,(0,o.Z)((0,o.Z)({},t),{},{transition:(0,s.Z)(e)}))};u.displayName="TabContainer";var x=u,f=t(4886),v=t(4504),h={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},m=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=h;var E=Object.assign(m,{Container:x,Content:f.Z,Pane:v.Z})},4886:function(n,e,t){var r=t(6543);e.Z=(0,r.Z)("tab-content")},4504:function(n,e,t){var r=t(1413),i=t(9439),o=t(5987),a=t(1694),c=t.n(a),s=t(2791),l=t(4944),d=t(165),u=t(551),x=t(162),f=t(2709),v=t(3507),h=t(184),m=["bsPrefix","transition"],E=["className","as"],Z=s.forwardRef((function(n,e){var t=n.bsPrefix,a=n.transition,s=(0,o.Z)(n,m),Z=(0,u.W)((0,r.Z)((0,r.Z)({},s),{},{transition:(0,v.Z)(a)})),p=(0,i.Z)(Z,2),j=p[0],b=j.className,g=j.as,y=void 0===g?"div":g,O=(0,o.Z)(j,E),C=p[1],N=C.isActive,k=C.onEnter,w=C.onEntering,P=C.onEntered,_=C.onExit,K=C.onExiting,L=C.onExited,R=C.mountOnEnter,S=C.unmountOnExit,T=C.transition,G=void 0===T?f.Z:T,B=(0,x.vE)(t,"tab-pane");return(0,h.jsx)(d.Z.Provider,{value:null,children:(0,h.jsx)(l.Z.Provider,{value:null,children:(0,h.jsx)(G,{in:N,onEnter:k,onEntering:w,onEntered:P,onExit:_,onExiting:K,onExited:L,mountOnEnter:R,unmountOnExit:S,children:(0,h.jsx)(y,(0,r.Z)((0,r.Z)({},O),{},{ref:e,className:c()(b,B,N&&"active")}))})})})}));Z.displayName="TabPane",e.Z=Z},9485:function(n,e,t){var r=t(5987),i=t(1413),o=(t(2791),t(239)),a=t(5561),c=t(6957),s=t(9102),l=t(881),d=t(4886),u=t(4504),x=t(1701),f=t(3507),v=t(184),h=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function m(n){var e=n.props,t=e.title,r=e.eventKey,o=e.disabled,a=e.tabClassName,c=e.tabAttrs,d=e.id;return null==t?null:(0,v.jsx)(l.Z,{as:"li",role:"presentation",children:(0,v.jsx)(s.Z,(0,i.Z)((0,i.Z)({as:"button",type:"button",eventKey:r,disabled:o,id:d,className:a},c),{},{children:t}))})}var E=function(n){var e=(0,o.Ch)(n,{activeKey:"onSelect"}),t=e.id,s=e.onSelect,l=e.transition,E=e.mountOnEnter,Z=e.unmountOnExit,p=e.children,j=e.activeKey,b=void 0===j?function(n){var e;return(0,x.Ed)(n,(function(n){null==e&&(e=n.props.eventKey)})),e}(p):j,g=(0,r.Z)(e,h);return(0,v.jsxs)(a.Z,{id:t,activeKey:b,onSelect:s,transition:(0,f.Z)(l),mountOnEnter:E,unmountOnExit:Z,children:[(0,v.jsx)(c.Z,(0,i.Z)((0,i.Z)({},g),{},{role:"tablist",as:"ul",children:(0,x.UI)(p,m)})),(0,v.jsx)(d.Z,{children:(0,x.UI)(p,(function(n){var e=(0,i.Z)({},n.props);return delete e.title,delete e.disabled,delete e.tabClassName,delete e.tabAttrs,(0,v.jsx)(u.Z,(0,i.Z)({},e))}))})]})};E.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},E.displayName="Tabs",e.Z=E},3507:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(5666),i=t(2709);function o(n){return"boolean"===typeof n?n?i.Z:r.Z:n}}}]);
//# sourceMappingURL=815.58106987.chunk.js.map