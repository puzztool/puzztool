"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[208],{3125:function(e,n,t){t.d(n,{Z:function(){return i}});var r="ReferenceList_list__rSo8R",a=t(184),i=function(e){return(0,a.jsx)("div",{className:r,children:e.children})}},2208:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(1734),a=t(9485),i=t(364),o=t(3624),c=t(2947),s=t(1560),l=t(2791),d=t(3360),u=t(6144),h=t(7418),f=t(9140),x=t(2677),v=t(7022),m=t(9743),p=t(1694),j=t.n(p),Z="SemaphoreCheckbox_container__Q1MG0",b=t(184);var g=function(e){return(0,b.jsxs)("div",{className:j()(Z,e.className),children:[(0,b.jsx)("input",{type:"checkbox",checked:e.character.hasDirection(e.direction),onChange:function(n){var t=e.onChange;t&&t(n.currentTarget.checked?"add":"remove",e.direction)}}),(0,b.jsx)("label",{children:function(){var n=e.character.getPotentialMatch(e.direction);return n?n.toString():""}()})]})},E=t(885);var y=function(e){var n=function(e){var n={left:-1,right:-1},t=e.getDegrees(),r=(0,E.Z)(t,2),a=r[0],i=r[1];return void 0!==a&&(void 0===i?a<=180?n.right=a:n.left=a:0===a&&i<=180||a<=45&&i<180||i<=90||a>=270?(n.left=a,n.right=i):(n.right=a,n.left=i)),n}(e.character),t=n.left,r=n.right;return(0,b.jsxs)("svg",{width:e.width,viewBox:"0 0 76 64",children:[(0,b.jsxs)("defs",{children:[(0,b.jsxs)("g",{id:"Person",fill:"black",children:[(0,b.jsx)("circle",{r:"3.5",cx:"4",cy:"4"}),(0,b.jsx)("rect",{y:"8",width:"8",height:"16",rx:"2",ry:"2"})]}),(0,b.jsxs)("g",{id:"Flag",children:[(0,b.jsx)("polyline",{strokeWidth:"1",stroke:"black",points:"0 0, 0 20"}),(0,b.jsx)("polyline",{strokeWidth:"2",strokeLinecap:"round",stroke:"black",points:"0 20, 0 28"}),(0,b.jsx)("rect",{stroke:"black",height:"10",width:"10"}),(0,b.jsx)("polygon",{fill:"red",points:"0 0, 10 0, 0 10"}),(0,b.jsx)("polygon",{fill:"yellow",points:"10 0, 10 10, 0 10"})]}),(0,b.jsx)("g",{id:"LeftFlag",children:(0,b.jsx)("use",{xlinkHref:"#Flag",transform:"scale(-1, 1)"})})]}),(0,b.jsx)("use",{xlinkHref:"#Person",x:"34",y:"23"}),t>=0?(0,b.jsx)("use",{transform:"rotate(".concat(t,", 33, 32)"),x:"33",xlinkHref:0===t||t>=180?"#LeftFlag":"#Flag",y:"4"}):null,r>=0?(0,b.jsx)("use",{transform:"rotate(".concat(r,", 43, 32)"),x:"43",xlinkHref:r<=180?"#Flag":"#LeftFlag",y:"4"}):null,"Sorry, your browser does not support inline SVG."]})},C="SemaphoreCharacter_container__NbR5w",N="SemaphoreCharacter_north__pA69m",_="SemaphoreCharacter_northEast__++LlC",O="SemaphoreCharacter_east__bkAmX",k="SemaphoreCharacter_southEast__7Okqx",S="SemaphoreCharacter_south__MRloU",w="SemaphoreCharacter_southWest__jpdJ2",P="SemaphoreCharacter_west__O+rzL",K="SemaphoreCharacter_northWest__URFC5";var T=function(e){function n(n,t){var r=e.onChange;r&&r(n,t)}return(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)(g,{character:e.character,className:N,direction:s.Xe.North,onChange:n}),(0,b.jsx)(g,{character:e.character,className:_,direction:s.Xe.NorthEast,onChange:n}),(0,b.jsx)(g,{character:e.character,className:O,direction:s.Xe.East,onChange:n}),(0,b.jsx)(g,{character:e.character,className:k,direction:s.Xe.SouthEast,onChange:n}),(0,b.jsx)(g,{character:e.character,className:S,direction:s.Xe.South,onChange:n}),(0,b.jsx)(g,{character:e.character,className:w,direction:s.Xe.SouthWest,onChange:n}),(0,b.jsx)(g,{character:e.character,className:P,direction:s.Xe.West,onChange:n}),(0,b.jsx)(g,{character:e.character,className:K,direction:s.Xe.NorthWest,onChange:n}),(0,b.jsx)(y,{width:240,character:e.character})]})},R="SemaphoreStream_container__SM3cu",I="SemaphoreStream_input__BvN89",D="SemaphoreStream_view__8eBCt",L="SemaphoreStream_output__8ueZS",F={append:c.R3,backspace:c.as,clear:c.ZH,setDirections:c.s5,space:c.Dh};var W=(0,i.$j)((function(e){return{directions:e.encoding.semaphore.directions,stream:e.encoding.semaphore.stream}}),F)((function(e){function n(n,t){var r=new s.Nb;switch(r.directions=e.directions,n){case"add":r.addDirection(t);break;case"remove":r.removeDirection(t);break;default:throw new Error("Invalid change type")}e.setDirections(r.directions)}function t(){var n=new s.Nb;n.directions=e.directions;var t=n.getExactMatches();t.length>0?e.append(t[0].toString()):e.space()}(0,l.useEffect)((function(){function r(n){if(!n.defaultPrevented){var t=!1;8===n.keyCode&&(e.backspace(),t=!0),t&&n.preventDefault()}}function a(r){if(!r.defaultPrevented){var a=!1;if(13===r.keyCode)t(),a=!0;else if(r.charCode>=49&&r.charCode<=56){var i=new s.Nb;i.directions=e.directions;var o=s.hq.FromDegrees(45*(r.charCode-49));n(i.hasDirection(o)?"remove":"add",o)}a&&r.preventDefault()}}return document.addEventListener("keydown",r),document.addEventListener("keypress",a),function(){document.removeEventListener("keydown",r),document.removeEventListener("keypress",a)}}));var r=new s.Nb;return r.directions=e.directions,(0,b.jsxs)("div",{className:R,children:[(0,b.jsxs)(f.Z,{className:I,children:[(0,b.jsx)(f.Z.Header,{children:"Input"}),(0,b.jsx)(f.Z.Body,{children:(0,b.jsxs)(v.Z,{fluid:!0,children:[(0,b.jsxs)(m.Z,{children:[(0,b.jsx)(x.Z,{xs:"auto",sm:"auto",md:"auto",children:(0,b.jsx)(T,{character:r,onChange:n})}),(0,b.jsx)(x.Z,{children:(0,b.jsx)("div",{className:D,children:r.toString()||"?"})})]}),(0,b.jsx)(m.Z,{children:(0,b.jsx)(x.Z,{children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(u.Z,{children:(0,b.jsx)(d.Z,{onClick:function(){e.backspace()},children:"\u232b"})}),(0,b.jsx)(u.Z,{children:(0,b.jsx)(d.Z,{onClick:t,children:"Next"})}),(0,b.jsx)(u.Z,{children:(0,b.jsx)(d.Z,{onClick:function(){e.clear()},variant:"danger",children:"Clear"})})]})})})]})})]}),(0,b.jsxs)(f.Z,{children:[(0,b.jsx)(f.Z.Header,{children:"Output"}),(0,b.jsx)(f.Z.Body,{children:(0,b.jsxs)("pre",{className:L,children:[e.stream,(0,b.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]})]})})),X=t(3125);var M=function(){var e=(new s.Nb).getPotentialMatches();return(0,b.jsx)(X.Z,{children:e.map((function(e){return(0,b.jsxs)("div",{children:[(0,b.jsx)(y,{width:96,character:new s.Nb(e.encoding,e.category)}),(0,b.jsx)("br",{}),e.display]},e.display)}))})},A={selectTab:c.x2};var H=(0,i.$j)((function(e){return{selectedTab:e.encoding.semaphore.selectedTab}}),A)((function(e){return(0,b.jsx)(o.Z,{title:"Semaphore",children:(0,b.jsxs)(a.Z,{activeKey:e.selectedTab,id:"Semaphore-tabs",onSelect:e.selectTab,children:[(0,b.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,b.jsx)(W,{})}),(0,b.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,b.jsx)(M,{})})]})})}))},5666:function(e,n,t){var r=t(2791);n.Z=function(e){var n=e.children,t=e.in,a=e.mountOnEnter,i=e.unmountOnExit,o=(0,r.useRef)(t);return(0,r.useEffect)((function(){t&&(o.current=!0)}),[t]),t?n:i||!o.current&&a?null:n}},551:function(e,n,t){t.d(n,{W:function(){return f}});var r=t(885),a=t(2791),i=t(165),o=t(4944),c=t(5666),s=t(184),l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role"],d=["activeKey","getControlledId","getControllerId"],u=["as"];function h(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function f(e){var n=e.active,t=e.eventKey,r=e.mountOnEnter,c=e.transition,s=e.unmountOnExit,u=e.role,f=void 0===u?"tabpanel":u,x=h(e,l),v=(0,a.useContext)(i.Z);if(!v)return[Object.assign({},x,{role:f}),{eventKey:t,isActive:n,mountOnEnter:r,transition:c,unmountOnExit:s}];var m=v.activeKey,p=v.getControlledId,j=v.getControllerId,Z=h(v,d),b=(0,o.h)(t);return[Object.assign({},x,{role:f,id:p(t),"aria-labelledby":j(t)}),{eventKey:t,isActive:null==n&&null!=b?(0,o.h)(m)===b:n,transition:c||Z.transition,mountOnEnter:null!=r?r:Z.mountOnEnter,unmountOnExit:null!=s?s:Z.unmountOnExit}]}var x=a.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,l=f(h(e,u)),d=(0,r.Z)(l,2),x=d[0],v=d[1],m=v.isActive,p=v.onEnter,j=v.onEntering,Z=v.onEntered,b=v.onExit,g=v.onExiting,E=v.onExited,y=v.mountOnEnter,C=v.unmountOnExit,N=v.transition,_=void 0===N?c.Z:N;return(0,s.jsx)(i.Z.Provider,{value:null,children:(0,s.jsx)(o.Z.Provider,{value:null,children:(0,s.jsx)(_,{in:m,onEnter:p,onEntering:j,onEntered:Z,onExit:b,onExiting:g,onExited:E,mountOnEnter:y,unmountOnExit:C,children:(0,s.jsx)(a,Object.assign({},x,{ref:n,hidden:!m,"aria-hidden":!m}))})})})}));x.displayName="TabPanel",n.Z=x},5561:function(e,n,t){var r=t(885),a=t(2791),i=t(239),o=t(2021),c=t(165),s=t(4944),l=t(551),d=t(184),u=function(e){var n=e.id,t=e.generateChildId,l=e.onSelect,u=e.activeKey,h=e.defaultActiveKey,f=e.transition,x=e.mountOnEnter,v=e.unmountOnExit,m=e.children,p=(0,i.$c)(u,h,l),j=(0,r.Z)(p,2),Z=j[0],b=j[1],g=(0,o.gP)(n),E=(0,a.useMemo)((function(){return t||function(e,n){return g?"".concat(g,"-").concat(n,"-").concat(e):null}}),[g,t]),y=(0,a.useMemo)((function(){return{onSelect:b,activeKey:Z,transition:f,mountOnEnter:x||!1,unmountOnExit:v||!1,getControlledId:function(e){return E(e,"tabpane")},getControllerId:function(e){return E(e,"tab")}}}),[b,Z,f,x,v,E]);return(0,d.jsx)(c.Z.Provider,{value:y,children:(0,d.jsx)(s.Z.Provider,{value:b||null,children:m})})};u.Panel=l.Z,n.Z=u},2677:function(e,n,t){var r=t(885),a=t(1413),i=t(5987),o=t(1694),c=t.n(o),s=t(2791),l=t(162),d=t(184),u=["as","bsPrefix","className"],h=["className"],f=["xxl","xl","lg","md","sm","xs"];var x=s.forwardRef((function(e,n){var t=function(e){var n=e.as,t=e.bsPrefix,r=e.className,o=(0,i.Z)(e,u);t=(0,l.vE)(t,"col");var s=[],d=[];return f.forEach((function(e){var n,r,a,i=o[e];delete o[e],"object"===typeof i&&null!=i?(n=i.span,r=i.offset,a=i.order):n=i;var c="xs"!==e?"-".concat(e):"";n&&s.push(!0===n?"".concat(t).concat(c):"".concat(t).concat(c,"-").concat(n)),null!=a&&d.push("order".concat(c,"-").concat(a)),null!=r&&d.push("offset".concat(c,"-").concat(r))})),[(0,a.Z)((0,a.Z)({},o),{},{className:c().apply(void 0,[r].concat(s,d))}),{as:n,bsPrefix:t,spans:s}]}(e),o=(0,r.Z)(t,2),s=o[0],x=s.className,v=(0,i.Z)(s,h),m=o[1],p=m.as,j=void 0===p?"div":p,Z=m.bsPrefix,b=m.spans;return(0,d.jsx)(j,(0,a.Z)((0,a.Z)({},v),{},{ref:n,className:c()(x,!b.length&&Z)}))}));x.displayName="Col",n.Z=x},7022:function(e,n,t){var r=t(1413),a=t(5987),i=t(1694),o=t.n(i),c=t(2791),s=t(162),l=t(184),d=["bsPrefix","fluid","as","className"],u=c.forwardRef((function(e,n){var t=e.bsPrefix,i=e.fluid,c=e.as,u=void 0===c?"div":c,h=e.className,f=(0,a.Z)(e,d),x=(0,s.vE)(t,"container"),v="string"===typeof i?"-".concat(i):"-fluid";return(0,l.jsx)(u,(0,r.Z)((0,r.Z)({ref:n},f),{},{className:o()(h,i?"".concat(x).concat(v):x)}))}));u.displayName="Container",u.defaultProps={fluid:!1},n.Z=u},9743:function(e,n,t){var r=t(1413),a=t(5987),i=t(1694),o=t.n(i),c=t(2791),s=t(162),l=t(184),d=["bsPrefix","className","as"],u=["xxl","xl","lg","md","sm","xs"],h=c.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,c=e.as,h=void 0===c?"div":c,f=(0,a.Z)(e,d),x=(0,s.vE)(t,"row"),v="".concat(x,"-cols"),m=[];return u.forEach((function(e){var n,t=f[e];delete f[e],n=null!=t&&"object"===typeof t?t.cols:t;var r="xs"!==e?"-".concat(e):"";null!=n&&m.push("".concat(v).concat(r,"-").concat(n))})),(0,l.jsx)(h,(0,r.Z)((0,r.Z)({ref:n},f),{},{className:o().apply(void 0,[i,x].concat(m))}))}));h.displayName="Row",n.Z=h},1734:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(2007),a=t.n(r),i=(t(2791),t(1413)),o=t(5987),c=t(5561),s=t(3507),l=t(184),d=["transition"],u=function(e){var n=e.transition,t=(0,o.Z)(e,d);return(0,l.jsx)(c.Z,(0,i.Z)((0,i.Z)({},t),{},{transition:(0,s.Z)(n)}))};u.displayName="TabContainer";var h=u,f=t(4886),x=t(4504),v={eventKey:a().oneOfType([a().string,a().number]),title:a().node.isRequired,disabled:a().bool,tabClassName:a().string},m=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};m.propTypes=v;var p=Object.assign(m,{Container:h,Content:f.Z,Pane:x.Z})},4886:function(e,n,t){var r=t(6543);n.Z=(0,r.Z)("tab-content")},4504:function(e,n,t){var r=t(1413),a=t(885),i=t(5987),o=t(1694),c=t.n(o),s=t(2791),l=t(5666),d=t(4944),u=t(165),h=t(551),f=t(162),x=t(3507),v=t(184),m=["bsPrefix","transition"],p=["className","as"],j=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.transition,s=(0,i.Z)(e,m),j=(0,h.W)((0,r.Z)((0,r.Z)({},s),{},{transition:(0,x.Z)(o)})),Z=(0,a.Z)(j,2),b=Z[0],g=b.className,E=b.as,y=void 0===E?"div":E,C=(0,i.Z)(b,p),N=Z[1],_=N.isActive,O=N.onEnter,k=N.onEntering,S=N.onEntered,w=N.onExit,P=N.onExiting,K=N.onExited,T=N.mountOnEnter,R=N.unmountOnExit,I=N.transition,D=void 0===I?l.Z:I,L=(0,f.vE)(t,"tab-pane");return(0,v.jsx)(u.Z.Provider,{value:null,children:(0,v.jsx)(d.Z.Provider,{value:null,children:(0,v.jsx)(D,{in:_,onEnter:O,onEntering:k,onEntered:S,onExit:w,onExiting:P,onExited:K,mountOnEnter:T,unmountOnExit:R,children:(0,v.jsx)(y,(0,r.Z)((0,r.Z)({},C),{},{ref:n,className:c()(g,L,_&&"active")}))})})})}));j.displayName="TabPane",n.Z=j},9485:function(e,n,t){var r=t(1413),a=t(5987),i=(t(2791),t(239)),o=t(5561),c=t(6957),s=t(9102),l=t(881),d=t(4886),u=t(4504),h=t(1701),f=t(3507),x=t(184),v=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function m(e){var n=e.props,t=n.title,r=n.eventKey,a=n.disabled,i=n.tabClassName,o=n.id;return null==t?null:(0,x.jsx)(l.Z,{as:"li",role:"presentation",children:(0,x.jsx)(s.Z,{as:"button",type:"button",eventKey:r,disabled:a,id:o,className:i,children:t})})}var p=function(e){var n=(0,i.Ch)(e,{activeKey:"onSelect"}),t=n.id,s=n.onSelect,l=n.transition,p=n.mountOnEnter,j=n.unmountOnExit,Z=n.children,b=n.activeKey,g=void 0===b?function(e){var n;return(0,h.Ed)(e,(function(e){null==n&&(n=e.props.eventKey)})),n}(Z):b,E=(0,a.Z)(n,v);return(0,x.jsxs)(o.Z,{id:t,activeKey:g,onSelect:s,transition:(0,f.Z)(l),mountOnEnter:p,unmountOnExit:j,children:[(0,x.jsx)(c.Z,(0,r.Z)((0,r.Z)({},E),{},{role:"tablist",as:"ul",children:(0,h.UI)(Z,m)})),(0,x.jsx)(d.Z,{children:(0,h.UI)(Z,(function(e){var n=(0,r.Z)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,(0,x.jsx)(u.Z,(0,r.Z)({},n))}))})]})};p.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},p.displayName="Tabs",n.Z=p},3507:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(2709);function a(e){return"boolean"===typeof e?e?r.Z:void 0:e}}}]);
//# sourceMappingURL=208.9fd7c5fd.chunk.js.map