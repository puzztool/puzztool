"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[73],{6073:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(1734),i=t(9485),s=t(8687),a=t(3624),o=t(9993),c=t(1560),d=t(2791),l=t(3360),u=t(6144),x=t(7418),v=t(9140),m=t(184);function h(e){return(0,m.jsxs)("svg",{className:e.className,viewBox:"0 0 30 30",children:[(0,m.jsx)("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG."]})}function p(e){return(0,m.jsxs)("svg",{className:e.className,viewBox:"0 0 90 30",children:[(0,m.jsx)("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG."]})}var j=function(e){return(0,m.jsx)(m.Fragment,{children:Array.from(e.morseString).map((function(n,t){return(0,m.jsx)("span",{className:e.className,children:"."===n?(0,m.jsx)(h,{}):(0,m.jsx)(p,{})},t)}))})},f={container:"MorseStream_container__yFOJ4",inputCommands:"MorseStream_inputCommands__RozTG",dot_button:"MorseStream_dot_button__8QvSB",dash_button:"MorseStream_dash_button__M0FA0",output:"MorseStream_output__H77L3",morseOutput:"MorseStream_morseOutput__JDQl9"},E={append:o.R3,backspace:o.as,clear:o.ZH};var Z=(0,s.$j)((function(e){return{stream:e.encoding.morse.stream}}),E)((function(e){function n(){e.append(c.$m.DOT)}function t(){e.append(c.$m.DASH)}function r(){if(e.stream.length>0){var n=e.stream.slice(-1);n===c.jI.CHARACTER_DIVIDER?(e.backspace(),e.append(c.jI.WORD_DIVIDER)):n!==c.jI.WORD_DIVIDER&&e.append(c.jI.CHARACTER_DIVIDER)}}return(0,d.useEffect)((function(){function i(n){if(!n.defaultPrevented){var t=!1;"Backspace"!==n.key&&8!==n.keyCode||(e.backspace(),t=!0),t&&n.preventDefault()}}function s(i){if(!i.defaultPrevented){var s=!0;if(i.key)switch(i.key){case"-":case"j":t();break;case".":case"k":n();break;case"Enter":case" ":case"l":r();break;case";":e.backspace();break;default:s=!1}else switch(i.keyCode){case 45:case 106:t();break;case 46:case 107:n();break;case 13:case 32:case 108:r();break;case 59:e.backspace();break;default:s=!1}s&&i.preventDefault()}}return document.addEventListener("keydown",i),document.addEventListener("keypress",s),function(){document.removeEventListener("keydown",i),document.removeEventListener("keypress",s)}})),(0,m.jsxs)("div",{className:f.container,children:[(0,m.jsxs)(v.Z,{className:f.morseOutput,children:[(0,m.jsx)(v.Z.Header,{children:"Input"}),(0,m.jsx)(v.Z.Body,{children:(0,m.jsxs)("pre",{children:[e.stream.replace(/\./g,"\xb7").replace(/-/g,"\uff0d"),(0,m.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]}),(0,m.jsxs)(v.Z,{className:f.output,children:[(0,m.jsx)(v.Z.Header,{children:"Plaintext"}),(0,m.jsx)(v.Z.Body,{children:(0,m.jsx)("pre",{children:new c.jI(e.stream).toString()||" "})})]}),(0,m.jsxs)(v.Z,{className:f.output,children:[(0,m.jsx)(v.Z.Header,{children:"Swap Dots/Dashes"}),(0,m.jsx)(v.Z.Body,{children:(0,m.jsx)("pre",{children:new c.jI(e.stream).invertDotsAndDashes().toString()||" "})})]}),(0,m.jsxs)(v.Z,{className:f.output,children:[(0,m.jsx)(v.Z.Header,{children:"Right to Left"}),(0,m.jsx)(v.Z.Body,{children:(0,m.jsx)("pre",{children:new c.jI(e.stream).reverse().toString()||" "})})]}),(0,m.jsxs)(v.Z,{className:f.output,children:[(0,m.jsx)(v.Z.Header,{children:"Right to Left + Swap Dots/Dashes"}),(0,m.jsx)(v.Z.Body,{children:(0,m.jsx)("pre",{children:new c.jI(e.stream).invertDotsAndDashes().reverse().toString()||" "})})]}),(0,m.jsxs)(x.Z,{className:f.inputCommands,children:[(0,m.jsx)(u.Z,{children:(0,m.jsx)(l.Z,{onClick:n,variant:"primary",children:(0,m.jsx)(h,{className:f.dot_button})})}),(0,m.jsx)(u.Z,{children:(0,m.jsx)(l.Z,{onClick:t,variant:"primary",children:(0,m.jsx)(p,{className:f.dash_button})})})]}),(0,m.jsxs)(x.Z,{className:f.commands,children:[(0,m.jsx)(u.Z,{children:(0,m.jsx)(l.Z,{onClick:function(){e.backspace()},children:"\u232b"})}),(0,m.jsx)(u.Z,{children:(0,m.jsx)(l.Z,{onClick:r,children:"Next"})}),(0,m.jsx)(u.Z,{children:(0,m.jsx)(l.Z,{onClick:function(){e.clear()},variant:"danger",children:"Clear"})})]})]})})),b=t(2591),y={container:"MorseTable_container__YhS8m",morse_picture:"MorseTable_morse_picture__fJDEw"};var g=function(){var e=(new c.$m).getPotentialMatches();return(0,m.jsx)("div",{className:y.container,children:(0,m.jsxs)(b.Z,{striped:!0,responsive:!0,children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Character"}),(0,m.jsx)("th",{children:"Morse"})]})}),(0,m.jsx)("tbody",{children:e.map((function(e){return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:e.display}),(0,m.jsx)("td",{children:(0,m.jsx)("div",{className:y.morseView,children:(0,m.jsx)(j,{className:y.morse_picture,morseString:c.$m.toMorseString(e.encoding)})})})]},e.display)}))})]})})},O={selectTab:o.x2};var C=(0,s.$j)((function(e){return{selectedTab:e.encoding.morse.selectedTab}}),O)((function(e){return(0,m.jsx)(a.Z,{title:"Morse Code",children:(0,m.jsxs)(i.Z,{activeKey:e.selectedTab,id:"Morse-tabs",onSelect:e.selectTab,children:[(0,m.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,m.jsx)(Z,{})}),(0,m.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,m.jsx)(g,{})})]})})}))},551:function(e,n,t){t.d(n,{W:function(){return v}});var r=t(9439),i=t(2791),s=t(165),a=t(4944),o=t(5666),c=t(184),d=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],l=["activeKey","getControlledId","getControllerId"],u=["as"];function x(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function v(e){var n=e.active,t=e.eventKey,r=e.mountOnEnter,o=e.transition,c=e.unmountOnExit,u=e.role,v=void 0===u?"tabpanel":u,m=e.onEnter,h=e.onEntering,p=e.onEntered,j=e.onExit,f=e.onExiting,E=e.onExited,Z=x(e,d),b=(0,i.useContext)(s.Z);if(!b)return[Object.assign({},Z,{role:v}),{eventKey:t,isActive:n,mountOnEnter:r,transition:o,unmountOnExit:c,onEnter:m,onEntering:h,onEntered:p,onExit:j,onExiting:f,onExited:E}];var y=b.activeKey,g=b.getControlledId,O=b.getControllerId,C=x(b,l),_=(0,a.h)(t);return[Object.assign({},Z,{role:v,id:g(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==n&&null!=_?(0,a.h)(y)===_:n,transition:o||C.transition,mountOnEnter:null!=r?r:C.mountOnEnter,unmountOnExit:null!=c?c:C.unmountOnExit,onEnter:m,onEntering:h,onEntered:p,onExit:j,onExiting:f,onExited:E}]}var m=i.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,d=v(x(e,u)),l=(0,r.Z)(d,2),m=l[0],h=l[1],p=h.isActive,j=h.onEnter,f=h.onEntering,E=h.onEntered,Z=h.onExit,b=h.onExiting,y=h.onExited,g=h.mountOnEnter,O=h.unmountOnExit,C=h.transition,_=void 0===C?o.Z:C;return(0,c.jsx)(s.Z.Provider,{value:null,children:(0,c.jsx)(a.Z.Provider,{value:null,children:(0,c.jsx)(_,{in:p,onEnter:j,onEntering:f,onEntered:E,onExit:Z,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:O,children:(0,c.jsx)(i,Object.assign({},m,{ref:n,hidden:!p,"aria-hidden":!p}))})})})}));m.displayName="TabPanel",n.Z=m},5561:function(e,n,t){var r=t(9439),i=t(2791),s=t(3722),a=t(9181),o=t(165),c=t(4944),d=t(551),l=t(184),u=function(e){var n=e.id,t=e.generateChildId,d=e.onSelect,u=e.activeKey,x=e.defaultActiveKey,v=e.transition,m=e.mountOnEnter,h=e.unmountOnExit,p=e.children,j=(0,s.$c)(u,x,d),f=(0,r.Z)(j,2),E=f[0],Z=f[1],b=(0,a.gP)(n),y=(0,i.useMemo)((function(){return t||function(e,n){return b?"".concat(b,"-").concat(n,"-").concat(e):null}}),[b,t]),g=(0,i.useMemo)((function(){return{onSelect:Z,activeKey:E,transition:v,mountOnEnter:m||!1,unmountOnExit:h||!1,getControlledId:function(e){return y(e,"tabpane")},getControllerId:function(e){return y(e,"tab")}}}),[Z,E,v,m,h,y]);return(0,l.jsx)(o.Z.Provider,{value:g,children:(0,l.jsx)(c.Z.Provider,{value:Z||null,children:p})})};u.Panel=d.Z,n.Z=u},1734:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(2007),i=t.n(r),s=(t(2791),t(1413)),a=t(5987),o=t(5561),c=t(3507),d=t(184),l=["transition"],u=function(e){var n=e.transition,t=(0,a.Z)(e,l);return(0,d.jsx)(o.Z,(0,s.Z)((0,s.Z)({},t),{},{transition:(0,c.Z)(n)}))};u.displayName="TabContainer";var x=u,v=t(4886),m=t(4504),h={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},p=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};p.propTypes=h;var j=Object.assign(p,{Container:x,Content:v.Z,Pane:m.Z})},4886:function(e,n,t){var r=t(6543);n.Z=(0,r.Z)("tab-content")},4504:function(e,n,t){var r=t(1413),i=t(9439),s=t(5987),a=t(1694),o=t.n(a),c=t(2791),d=t(4944),l=t(165),u=t(551),x=t(162),v=t(2709),m=t(3507),h=t(184),p=["bsPrefix","transition"],j=["className","as"],f=c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.transition,c=(0,s.Z)(e,p),f=(0,u.W)((0,r.Z)((0,r.Z)({},c),{},{transition:(0,m.Z)(a)})),E=(0,i.Z)(f,2),Z=E[0],b=Z.className,y=Z.as,g=void 0===y?"div":y,O=(0,s.Z)(Z,j),C=E[1],_=C.isActive,k=C.onEnter,N=C.onEntering,S=C.onEntered,I=C.onExit,w=C.onExiting,D=C.onExited,T=C.mountOnEnter,K=C.unmountOnExit,P=C.transition,R=void 0===P?v.Z:P,A=(0,x.vE)(t,"tab-pane");return(0,h.jsx)(l.Z.Provider,{value:null,children:(0,h.jsx)(d.Z.Provider,{value:null,children:(0,h.jsx)(R,{in:_,onEnter:k,onEntering:N,onEntered:S,onExit:I,onExiting:w,onExited:D,mountOnEnter:T,unmountOnExit:K,children:(0,h.jsx)(g,(0,r.Z)((0,r.Z)({},O),{},{ref:n,className:o()(b,A,_&&"active")}))})})})}));f.displayName="TabPane",n.Z=f},2591:function(e,n,t){var r=t(1413),i=t(5987),s=t(1694),a=t.n(s),o=t(2791),c=t(162),d=t(184),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,o=e.striped,u=e.bordered,x=e.borderless,v=e.hover,m=e.size,h=e.variant,p=e.responsive,j=(0,i.Z)(e,l),f=(0,c.vE)(t,"table"),E=a()(s,f,h&&"".concat(f,"-").concat(h),m&&"".concat(f,"-").concat(m),o&&"".concat(f,"-").concat("string"===typeof o?"striped-".concat(o):"striped"),u&&"".concat(f,"-bordered"),x&&"".concat(f,"-borderless"),v&&"".concat(f,"-hover")),Z=(0,d.jsx)("table",(0,r.Z)((0,r.Z)({},j),{},{className:E,ref:n}));if(p){var b="".concat(f,"-responsive");return"string"===typeof p&&(b="".concat(b,"-").concat(p)),(0,d.jsx)("div",{className:b,children:Z})}return Z}));n.Z=u},9485:function(e,n,t){var r=t(5987),i=t(1413),s=(t(2791),t(239)),a=t(5561),o=t(6957),c=t(9102),d=t(881),l=t(4886),u=t(4504),x=t(1701),v=t(3507),m=t(184),h=["id","onSelect","transition","mountOnEnter","unmountOnExit","variant","children","activeKey"];function p(e){var n=e.props,t=n.title,r=n.eventKey,s=n.disabled,a=n.tabClassName,o=n.tabAttrs,l=n.id;return null==t?null:(0,m.jsx)(d.Z,{as:"li",role:"presentation",children:(0,m.jsx)(c.Z,(0,i.Z)((0,i.Z)({as:"button",type:"button",eventKey:r,disabled:s,id:l,className:a},o),{},{children:t}))})}var j=function(e){var n=(0,s.Ch)(e,{activeKey:"onSelect"}),t=n.id,c=n.onSelect,d=n.transition,j=n.mountOnEnter,f=void 0!==j&&j,E=n.unmountOnExit,Z=void 0!==E&&E,b=n.variant,y=void 0===b?"tabs":b,g=n.children,O=n.activeKey,C=void 0===O?function(e){var n;return(0,x.Ed)(e,(function(e){null==n&&(n=e.props.eventKey)})),n}(g):O,_=(0,r.Z)(n,h);return(0,m.jsxs)(a.Z,{id:t,activeKey:C,onSelect:c,transition:(0,v.Z)(d),mountOnEnter:f,unmountOnExit:Z,children:[(0,m.jsx)(o.Z,(0,i.Z)((0,i.Z)({},_),{},{role:"tablist",as:"ul",variant:y,children:(0,x.UI)(g,p)})),(0,m.jsx)(l.Z,{children:(0,x.UI)(g,(function(e){var n=(0,i.Z)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,m.jsx)(u.Z,(0,i.Z)({},n))}))})]})};j.displayName="Tabs",n.Z=j},3507:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(5666),i=t(2709);function s(e){return"boolean"===typeof e?e?i.Z:r.Z:e}}}]);
//# sourceMappingURL=73.1c6f3a0a.chunk.js.map