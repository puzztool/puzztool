"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[73],{6073:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(1734),i=t(9485),s=t(8687),a=t(3624),o=t(9993),c=t(1560),l=t(2791),d=t(3360),u=t(6144),x=t(7418),m=t(9140),v=t(184);function h(e){return(0,v.jsxs)("svg",{className:e.className,viewBox:"0 0 30 30",children:[(0,v.jsx)("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG."]})}function p(e){return(0,v.jsxs)("svg",{className:e.className,viewBox:"0 0 90 30",children:[(0,v.jsx)("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG."]})}var j=function(e){return(0,v.jsx)(v.Fragment,{children:Array.from(e.morseString).map((function(n,t){return(0,v.jsx)("span",{className:e.className,children:"."===n?(0,v.jsx)(h,{}):(0,v.jsx)(p,{})},t)}))})},f={container:"MorseStream_container__yFOJ4",inputCommands:"MorseStream_inputCommands__RozTG",dot_button:"MorseStream_dot_button__8QvSB",dash_button:"MorseStream_dash_button__M0FA0",output:"MorseStream_output__H77L3",morseOutput:"MorseStream_morseOutput__JDQl9"},E={append:o.R3,backspace:o.as,clear:o.ZH};var Z=(0,s.$j)((function(e){return{stream:e.encoding.morse.stream}}),E)((function(e){function n(){e.append(c.$m.DOT)}function t(){e.append(c.$m.DASH)}function r(){if(e.stream.length>0){var n=e.stream.slice(-1);n===c.jI.CHARACTER_DIVIDER?(e.backspace(),e.append(c.jI.WORD_DIVIDER)):n!==c.jI.WORD_DIVIDER&&e.append(c.jI.CHARACTER_DIVIDER)}}return(0,l.useEffect)((function(){function i(n){if(!n.defaultPrevented){var t=!1;"Backspace"!==n.key&&8!==n.keyCode||(e.backspace(),t=!0),t&&n.preventDefault()}}function s(i){if(!i.defaultPrevented){var s=!0;if(i.key)switch(i.key){case"-":case"j":t();break;case".":case"k":n();break;case"Enter":case" ":case"l":r();break;case";":e.backspace();break;default:s=!1}else switch(i.keyCode){case 45:case 106:t();break;case 46:case 107:n();break;case 13:case 32:case 108:r();break;case 59:e.backspace();break;default:s=!1}s&&i.preventDefault()}}return document.addEventListener("keydown",i),document.addEventListener("keypress",s),function(){document.removeEventListener("keydown",i),document.removeEventListener("keypress",s)}})),(0,v.jsxs)("div",{className:f.container,children:[(0,v.jsxs)(m.Z,{className:f.morseOutput,children:[(0,v.jsx)(m.Z.Header,{children:"Input"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsxs)("pre",{children:[e.stream.replace(/\./g,"\xb7").replace(/-/g,"\uff0d"),(0,v.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]}),(0,v.jsxs)(m.Z,{className:f.output,children:[(0,v.jsx)(m.Z.Header,{children:"Plaintext"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).toString()||" "})})]}),(0,v.jsxs)(m.Z,{className:f.output,children:[(0,v.jsx)(m.Z.Header,{children:"Swap Dots/Dashes"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).invertDotsAndDashes().toString()||" "})})]}),(0,v.jsxs)(m.Z,{className:f.output,children:[(0,v.jsx)(m.Z.Header,{children:"Right to Left"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).reverse().toString()||" "})})]}),(0,v.jsxs)(m.Z,{className:f.output,children:[(0,v.jsx)(m.Z.Header,{children:"Right to Left + Swap Dots/Dashes"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).invertDotsAndDashes().reverse().toString()||" "})})]}),(0,v.jsxs)(x.Z,{className:f.inputCommands,children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:n,variant:"primary",children:(0,v.jsx)(h,{className:f.dot_button})})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:t,variant:"primary",children:(0,v.jsx)(p,{className:f.dash_button})})})]}),(0,v.jsxs)(x.Z,{className:f.commands,children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:function(){e.backspace()},children:"\u232b"})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:r,children:"Next"})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:function(){e.clear()},variant:"danger",children:"Clear"})})]})]})})),b=t(2591),y={container:"MorseTable_container__YhS8m",morse_picture:"MorseTable_morse_picture__fJDEw"};var g=function(){var e=(new c.$m).getPotentialMatches();return(0,v.jsx)("div",{className:y.container,children:(0,v.jsxs)(b.Z,{striped:!0,responsive:!0,children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Character"}),(0,v.jsx)("th",{children:"Morse"})]})}),(0,v.jsx)("tbody",{children:e.map((function(e){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:e.display}),(0,v.jsx)("td",{children:(0,v.jsx)("div",{className:y.morseView,children:(0,v.jsx)(j,{className:y.morse_picture,morseString:c.$m.toMorseString(e.encoding)})})})]},e.display)}))})]})})},O={selectTab:o.x2};var C=(0,s.$j)((function(e){return{selectedTab:e.encoding.morse.selectedTab}}),O)((function(e){return(0,v.jsx)(a.Z,{title:"Morse Code",children:(0,v.jsxs)(i.Z,{activeKey:e.selectedTab,id:"Morse-tabs",onSelect:e.selectTab,children:[(0,v.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,v.jsx)(Z,{})}),(0,v.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,v.jsx)(g,{})})]})})}))},551:function(e,n,t){t.d(n,{W:function(){return m}});var r=t(9439),i=t(2791),s=t(165),a=t(4944),o=t(5666),c=t(184),l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],d=["activeKey","getControlledId","getControllerId"],u=["as"];function x(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function m(e){var n=e.active,t=e.eventKey,r=e.mountOnEnter,o=e.transition,c=e.unmountOnExit,u=e.role,m=void 0===u?"tabpanel":u,v=e.onEnter,h=e.onEntering,p=e.onEntered,j=e.onExit,f=e.onExiting,E=e.onExited,Z=x(e,l),b=(0,i.useContext)(s.Z);if(!b)return[Object.assign({},Z,{role:m}),{eventKey:t,isActive:n,mountOnEnter:r,transition:o,unmountOnExit:c,onEnter:v,onEntering:h,onEntered:p,onExit:j,onExiting:f,onExited:E}];var y=b.activeKey,g=b.getControlledId,O=b.getControllerId,C=x(b,d),_=(0,a.h)(t);return[Object.assign({},Z,{role:m,id:g(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==n&&null!=_?(0,a.h)(y)===_:n,transition:o||C.transition,mountOnEnter:null!=r?r:C.mountOnEnter,unmountOnExit:null!=c?c:C.unmountOnExit,onEnter:v,onEntering:h,onEntered:p,onExit:j,onExiting:f,onExited:E}]}var v=i.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,l=m(x(e,u)),d=(0,r.Z)(l,2),v=d[0],h=d[1],p=h.isActive,j=h.onEnter,f=h.onEntering,E=h.onEntered,Z=h.onExit,b=h.onExiting,y=h.onExited,g=h.mountOnEnter,O=h.unmountOnExit,C=h.transition,_=void 0===C?o.Z:C;return(0,c.jsx)(s.Z.Provider,{value:null,children:(0,c.jsx)(a.Z.Provider,{value:null,children:(0,c.jsx)(_,{in:p,onEnter:j,onEntering:f,onEntered:E,onExit:Z,onExiting:b,onExited:y,mountOnEnter:g,unmountOnExit:O,children:(0,c.jsx)(i,Object.assign({},v,{ref:n,hidden:!p,"aria-hidden":!p}))})})})}));v.displayName="TabPanel",n.Z=v},5561:function(e,n,t){var r=t(9439),i=t(2791),s=t(239),a=t(2021),o=t(165),c=t(4944),l=t(551),d=t(184),u=function(e){var n=e.id,t=e.generateChildId,l=e.onSelect,u=e.activeKey,x=e.defaultActiveKey,m=e.transition,v=e.mountOnEnter,h=e.unmountOnExit,p=e.children,j=(0,s.$c)(u,x,l),f=(0,r.Z)(j,2),E=f[0],Z=f[1],b=(0,a.gP)(n),y=(0,i.useMemo)((function(){return t||function(e,n){return b?"".concat(b,"-").concat(n,"-").concat(e):null}}),[b,t]),g=(0,i.useMemo)((function(){return{onSelect:Z,activeKey:E,transition:m,mountOnEnter:v||!1,unmountOnExit:h||!1,getControlledId:function(e){return y(e,"tabpane")},getControllerId:function(e){return y(e,"tab")}}}),[Z,E,m,v,h,y]);return(0,d.jsx)(o.Z.Provider,{value:g,children:(0,d.jsx)(c.Z.Provider,{value:Z||null,children:p})})};u.Panel=l.Z,n.Z=u},1734:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(2007),i=t.n(r),s=(t(2791),t(1413)),a=t(5987),o=t(5561),c=t(3507),l=t(184),d=["transition"],u=function(e){var n=e.transition,t=(0,a.Z)(e,d);return(0,l.jsx)(o.Z,(0,s.Z)((0,s.Z)({},t),{},{transition:(0,c.Z)(n)}))};u.displayName="TabContainer";var x=u,m=t(4886),v=t(4504),h={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},p=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};p.propTypes=h;var j=Object.assign(p,{Container:x,Content:m.Z,Pane:v.Z})},4886:function(e,n,t){var r=t(6543);n.Z=(0,r.Z)("tab-content")},4504:function(e,n,t){var r=t(1413),i=t(9439),s=t(5987),a=t(1694),o=t.n(a),c=t(2791),l=t(4944),d=t(165),u=t(551),x=t(162),m=t(2709),v=t(3507),h=t(184),p=["bsPrefix","transition"],j=["className","as"],f=c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.transition,c=(0,s.Z)(e,p),f=(0,u.W)((0,r.Z)((0,r.Z)({},c),{},{transition:(0,v.Z)(a)})),E=(0,i.Z)(f,2),Z=E[0],b=Z.className,y=Z.as,g=void 0===y?"div":y,O=(0,s.Z)(Z,j),C=E[1],_=C.isActive,k=C.onEnter,N=C.onEntering,S=C.onEntered,I=C.onExit,w=C.onExiting,D=C.onExited,T=C.mountOnEnter,P=C.unmountOnExit,K=C.transition,R=void 0===K?m.Z:K,A=(0,x.vE)(t,"tab-pane");return(0,h.jsx)(d.Z.Provider,{value:null,children:(0,h.jsx)(l.Z.Provider,{value:null,children:(0,h.jsx)(R,{in:_,onEnter:k,onEntering:N,onEntered:S,onExit:I,onExiting:w,onExited:D,mountOnEnter:T,unmountOnExit:P,children:(0,h.jsx)(g,(0,r.Z)((0,r.Z)({},O),{},{ref:n,className:o()(b,A,_&&"active")}))})})})}));f.displayName="TabPane",n.Z=f},2591:function(e,n,t){var r=t(1413),i=t(5987),s=t(1694),a=t.n(s),o=t(2791),c=t(162),l=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,o=e.striped,u=e.bordered,x=e.borderless,m=e.hover,v=e.size,h=e.variant,p=e.responsive,j=(0,i.Z)(e,d),f=(0,c.vE)(t,"table"),E=a()(s,f,h&&"".concat(f,"-").concat(h),v&&"".concat(f,"-").concat(v),o&&"".concat(f,"-").concat("string"===typeof o?"striped-".concat(o):"striped"),u&&"".concat(f,"-bordered"),x&&"".concat(f,"-borderless"),m&&"".concat(f,"-hover")),Z=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},j),{},{className:E,ref:n}));if(p){var b="".concat(f,"-responsive");return"string"===typeof p&&(b="".concat(b,"-").concat(p)),(0,l.jsx)("div",{className:b,children:Z})}return Z}));n.Z=u},9485:function(e,n,t){var r=t(5987),i=t(1413),s=(t(2791),t(239)),a=t(5561),o=t(6957),c=t(9102),l=t(881),d=t(4886),u=t(4504),x=t(1701),m=t(3507),v=t(184),h=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function p(e){var n=e.props,t=n.title,r=n.eventKey,s=n.disabled,a=n.tabClassName,o=n.tabAttrs,d=n.id;return null==t?null:(0,v.jsx)(l.Z,{as:"li",role:"presentation",children:(0,v.jsx)(c.Z,(0,i.Z)((0,i.Z)({as:"button",type:"button",eventKey:r,disabled:s,id:d,className:a},o),{},{children:t}))})}var j=function(e){var n=(0,s.Ch)(e,{activeKey:"onSelect"}),t=n.id,c=n.onSelect,l=n.transition,j=n.mountOnEnter,f=n.unmountOnExit,E=n.children,Z=n.activeKey,b=void 0===Z?function(e){var n;return(0,x.Ed)(e,(function(e){null==n&&(n=e.props.eventKey)})),n}(E):Z,y=(0,r.Z)(n,h);return(0,v.jsxs)(a.Z,{id:t,activeKey:b,onSelect:c,transition:(0,m.Z)(l),mountOnEnter:j,unmountOnExit:f,children:[(0,v.jsx)(o.Z,(0,i.Z)((0,i.Z)({},y),{},{role:"tablist",as:"ul",children:(0,x.UI)(E,p)})),(0,v.jsx)(d.Z,{children:(0,x.UI)(E,(function(e){var n=(0,i.Z)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,v.jsx)(u.Z,(0,i.Z)({},n))}))})]})};j.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},j.displayName="Tabs",n.Z=j},3507:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(5666),i=t(2709);function s(e){return"boolean"===typeof e?e?i.Z:r.Z:e}}}]);
//# sourceMappingURL=73.bac879b9.chunk.js.map