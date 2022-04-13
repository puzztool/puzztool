"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[73],{6073:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(1734),i=t(9485),s=t(364),o=t(3624),a=t(9993),c=t(1560),l=t(2791),d=t(3360),u=t(6144),x=t(7418),m=t(9140),v=t(184);function h(e){return(0,v.jsxs)("svg",{className:e.className,viewBox:"0 0 30 30",children:[(0,v.jsx)("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG."]})}function f(e){return(0,v.jsxs)("svg",{className:e.className,viewBox:"0 0 90 30",children:[(0,v.jsx)("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG."]})}var j=function(e){return(0,v.jsx)(v.Fragment,{children:Array.from(e.morseString).map((function(n,t){return(0,v.jsx)("span",{className:e.className,children:"."===n?(0,v.jsx)(h,{}):(0,v.jsx)(f,{})},t)}))})},p={container:"MorseStream_container__yFOJ4",inputCommands:"MorseStream_inputCommands__RozTG",dot_button:"MorseStream_dot_button__8QvSB",dash_button:"MorseStream_dash_button__M0FA0",output:"MorseStream_output__H77L3",morseOutput:"MorseStream_morseOutput__JDQl9"},E={append:a.R3,backspace:a.as,clear:a.ZH};var b=(0,s.$j)((function(e){return{stream:e.encoding.morse.stream}}),E)((function(e){function n(){e.append(c.$m.DOT)}function t(){e.append(c.$m.DASH)}function r(){if(e.stream.length>0){var n=e.stream.slice(-1);n===c.jI.CHARACTER_DIVIDER?(e.backspace(),e.append(c.jI.WORD_DIVIDER)):n!==c.jI.WORD_DIVIDER&&e.append(c.jI.CHARACTER_DIVIDER)}}return(0,l.useEffect)((function(){function i(n){if(!n.defaultPrevented){var t=!1;"Backspace"!==n.key&&8!==n.keyCode||(e.backspace(),t=!0),t&&n.preventDefault()}}function s(i){if(!i.defaultPrevented){var s=!0;if(i.key)switch(i.key){case"-":case"j":t();break;case".":case"k":n();break;case"Enter":case" ":case"l":r();break;case";":e.backspace();break;default:s=!1}else switch(i.keyCode){case 45:case 106:t();break;case 46:case 107:n();break;case 13:case 32:case 108:r();break;case 59:e.backspace();break;default:s=!1}s&&i.preventDefault()}}return document.addEventListener("keydown",i),document.addEventListener("keypress",s),function(){document.removeEventListener("keydown",i),document.removeEventListener("keypress",s)}})),(0,v.jsxs)("div",{className:p.container,children:[(0,v.jsxs)(m.Z,{className:p.morseOutput,children:[(0,v.jsx)(m.Z.Header,{children:"Input"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsxs)("pre",{children:[e.stream.replace(/\./g,"\xb7").replace(/-/g,"\uff0d"),(0,v.jsx)("span",{className:"blinking-cursor",children:"|"})]})})]}),(0,v.jsxs)(m.Z,{className:p.output,children:[(0,v.jsx)(m.Z.Header,{children:"Plaintext"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).toString()||" "})})]}),(0,v.jsxs)(m.Z,{className:p.output,children:[(0,v.jsx)(m.Z.Header,{children:"Swap Dots/Dashes"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).invertDotsAndDashes().toString()||" "})})]}),(0,v.jsxs)(m.Z,{className:p.output,children:[(0,v.jsx)(m.Z.Header,{children:"Right to Left"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).reverse().toString()||" "})})]}),(0,v.jsxs)(m.Z,{className:p.output,children:[(0,v.jsx)(m.Z.Header,{children:"Right to Left + Swap Dots/Dashes"}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsx)("pre",{children:new c.jI(e.stream).invertDotsAndDashes().reverse().toString()||" "})})]}),(0,v.jsxs)(x.Z,{className:p.inputCommands,children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:n,variant:"primary",children:(0,v.jsx)(h,{className:p.dot_button})})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:t,variant:"primary",children:(0,v.jsx)(f,{className:p.dash_button})})})]}),(0,v.jsxs)(x.Z,{className:p.commands,children:[(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:function(){e.backspace()},children:"\u232b"})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:r,children:"Next"})}),(0,v.jsx)(u.Z,{children:(0,v.jsx)(d.Z,{onClick:function(){e.clear()},variant:"danger",children:"Clear"})})]})]})})),Z=t(2591),y={container:"MorseTable_container__YhS8m",morse_picture:"MorseTable_morse_picture__fJDEw"};var g=function(){var e=(new c.$m).getPotentialMatches();return(0,v.jsx)("div",{className:y.container,children:(0,v.jsxs)(Z.Z,{striped:!0,responsive:!0,children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Character"}),(0,v.jsx)("th",{children:"Morse"})]})}),(0,v.jsx)("tbody",{children:e.map((function(e){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:e.display}),(0,v.jsx)("td",{children:(0,v.jsx)("div",{className:y.morseView,children:(0,v.jsx)(j,{className:y.morse_picture,morseString:c.$m.toMorseString(e.encoding)})})})]},e.display)}))})]})})},O={selectTab:a.x2};var C=(0,s.$j)((function(e){return{selectedTab:e.encoding.morse.selectedTab}}),O)((function(e){return(0,v.jsx)(o.Z,{title:"Morse Code",children:(0,v.jsxs)(i.Z,{activeKey:e.selectedTab,id:"Morse-tabs",onSelect:e.selectTab,children:[(0,v.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,v.jsx)(b,{})}),(0,v.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,v.jsx)(g,{})})]})})}))},1533:function(e,n,t){t.d(n,{Z:function(){return h},W:function(){return m}});var r=t(885),i=t(2791),s=t(165),o=t(4944);var a=function(e){var n=e.children,t=e.in,r=e.mountOnEnter,s=e.unmountOnExit,o=(0,i.useRef)(t);return(0,i.useEffect)((function(){t&&(o.current=!0)}),[t]),t?n:s||!o.current&&r?null:n},c=t(184),l=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],d=["activeKey","getControlledId","getControllerId"],u=["as"];function x(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function m(e){var n=e.active,t=e.eventKey,r=e.mountOnEnter,a=e.transition,c=e.unmountOnExit,u=e.role,m=void 0===u?"tabpanel":u,v=e.onEnter,h=e.onEntering,f=e.onEntered,j=e.onExit,p=e.onExiting,E=e.onExited,b=x(e,l),Z=(0,i.useContext)(s.Z);if(!Z)return[Object.assign({},b,{role:m}),{eventKey:t,isActive:n,mountOnEnter:r,transition:a,unmountOnExit:c,onEnter:v,onEntering:h,onEntered:f,onExit:j,onExiting:p,onExited:E}];var y=Z.activeKey,g=Z.getControlledId,O=Z.getControllerId,C=x(Z,d),_=(0,o.h)(t);return[Object.assign({},b,{role:m,id:g(t),"aria-labelledby":O(t)}),{eventKey:t,isActive:null==n&&null!=_?(0,o.h)(y)===_:n,transition:a||C.transition,mountOnEnter:null!=r?r:C.mountOnEnter,unmountOnExit:null!=c?c:C.unmountOnExit,onEnter:v,onEntering:h,onEntered:f,onExit:j,onExiting:p,onExited:E}]}var v=i.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,l=m(x(e,u)),d=(0,r.Z)(l,2),v=d[0],h=d[1],f=h.isActive,j=h.onEnter,p=h.onEntering,E=h.onEntered,b=h.onExit,Z=h.onExiting,y=h.onExited,g=h.mountOnEnter,O=h.unmountOnExit,C=h.transition,_=void 0===C?a:C;return(0,c.jsx)(s.Z.Provider,{value:null,children:(0,c.jsx)(o.Z.Provider,{value:null,children:(0,c.jsx)(_,{in:f,onEnter:j,onEntering:p,onEntered:E,onExit:b,onExiting:Z,onExited:y,mountOnEnter:g,unmountOnExit:O,children:(0,c.jsx)(i,Object.assign({},v,{ref:n,hidden:!f,"aria-hidden":!f}))})})})}));v.displayName="TabPanel";var h=v},5561:function(e,n,t){var r=t(885),i=t(2791),s=t(239),o=t(4413),a=t(165),c=t(4944),l=t(1533),d=t(184),u=function(e){var n=e.id,t=e.generateChildId,l=e.onSelect,u=e.activeKey,x=e.defaultActiveKey,m=e.transition,v=e.mountOnEnter,h=e.unmountOnExit,f=e.children,j=(0,s.$c)(u,x,l),p=(0,r.Z)(j,2),E=p[0],b=p[1],Z=(0,o.gP)(n),y=(0,i.useMemo)((function(){return t||function(e,n){return Z?"".concat(Z,"-").concat(n,"-").concat(e):null}}),[Z,t]),g=(0,i.useMemo)((function(){return{onSelect:b,activeKey:E,transition:m,mountOnEnter:v||!1,unmountOnExit:h||!1,getControlledId:function(e){return y(e,"tabpane")},getControllerId:function(e){return y(e,"tab")}}}),[b,E,m,v,h,y]);return(0,d.jsx)(a.Z.Provider,{value:g,children:(0,d.jsx)(c.Z.Provider,{value:b||null,children:f})})};u.Panel=l.Z,n.Z=u},1734:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(2007),i=t.n(r),s=(t(2791),t(1413)),o=t(5987),a=t(5561),c=t(3507),l=t(184),d=["transition"],u=function(e){var n=e.transition,t=(0,o.Z)(e,d);return(0,l.jsx)(a.Z,(0,s.Z)((0,s.Z)({},t),{},{transition:(0,c.Z)(n)}))};u.displayName="TabContainer";var x=u,m=t(4886),v=t(4504),h={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},f=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};f.propTypes=h;var j=Object.assign(f,{Container:x,Content:m.Z,Pane:v.Z})},4886:function(e,n,t){var r=t(6543);n.Z=(0,r.Z)("tab-content")},4504:function(e,n,t){var r=t(1413),i=t(885),s=t(5987),o=t(1694),a=t.n(o),c=t(2791),l=t(4944),d=t(165),u=t(1533),x=t(162),m=t(2709),v=t(3507),h=t(184),f=["bsPrefix","transition"],j=["className","as"],p=c.forwardRef((function(e,n){var t=e.bsPrefix,o=e.transition,c=(0,s.Z)(e,f),p=(0,u.W)((0,r.Z)((0,r.Z)({},c),{},{transition:(0,v.Z)(o)})),E=(0,i.Z)(p,2),b=E[0],Z=b.className,y=b.as,g=void 0===y?"div":y,O=(0,s.Z)(b,j),C=E[1],_=C.isActive,k=C.onEnter,N=C.onEntering,S=C.onEntered,I=C.onExit,w=C.onExiting,D=C.onExited,T=C.mountOnEnter,P=C.unmountOnExit,R=C.transition,K=void 0===R?m.Z:R,A=(0,x.vE)(t,"tab-pane");return(0,h.jsx)(d.Z.Provider,{value:null,children:(0,h.jsx)(l.Z.Provider,{value:null,children:(0,h.jsx)(K,{in:_,onEnter:k,onEntering:N,onEntered:S,onExit:I,onExiting:w,onExited:D,mountOnEnter:T,unmountOnExit:P,children:(0,h.jsx)(g,(0,r.Z)((0,r.Z)({},O),{},{ref:n,className:a()(Z,A,_&&"active")}))})})})}));p.displayName="TabPane",n.Z=p},2591:function(e,n,t){var r=t(1413),i=t(5987),s=t(1694),o=t.n(s),a=t(2791),c=t(162),l=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=a.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,a=e.striped,u=e.bordered,x=e.borderless,m=e.hover,v=e.size,h=e.variant,f=e.responsive,j=(0,i.Z)(e,d),p=(0,c.vE)(t,"table"),E=o()(s,p,h&&"".concat(p,"-").concat(h),v&&"".concat(p,"-").concat(v),a&&"".concat(p,"-striped"),u&&"".concat(p,"-bordered"),x&&"".concat(p,"-borderless"),m&&"".concat(p,"-hover")),b=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},j),{},{className:E,ref:n}));if(f){var Z="".concat(p,"-responsive");return"string"===typeof f&&(Z="".concat(Z,"-").concat(f)),(0,l.jsx)("div",{className:Z,children:b})}return b}));n.Z=u},9485:function(e,n,t){var r=t(5987),i=t(1413),s=(t(2791),t(239)),o=t(5561),a=t(6957),c=t(9102),l=t(881),d=t(4886),u=t(4504),x=t(1701),m=t(3507),v=t(184),h=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function f(e){var n=e.props,t=n.title,r=n.eventKey,s=n.disabled,o=n.tabClassName,a=n.tabAttrs,d=n.id;return null==t?null:(0,v.jsx)(l.Z,{as:"li",role:"presentation",children:(0,v.jsx)(c.Z,(0,i.Z)((0,i.Z)({as:"button",type:"button",eventKey:r,disabled:s,id:d,className:o},a),{},{children:t}))})}var j=function(e){var n=(0,s.Ch)(e,{activeKey:"onSelect"}),t=n.id,c=n.onSelect,l=n.transition,j=n.mountOnEnter,p=n.unmountOnExit,E=n.children,b=n.activeKey,Z=void 0===b?function(e){var n;return(0,x.Ed)(e,(function(e){null==n&&(n=e.props.eventKey)})),n}(E):b,y=(0,r.Z)(n,h);return(0,v.jsxs)(o.Z,{id:t,activeKey:Z,onSelect:c,transition:(0,m.Z)(l),mountOnEnter:j,unmountOnExit:p,children:[(0,v.jsx)(a.Z,(0,i.Z)((0,i.Z)({},y),{},{role:"tablist",as:"ul",children:(0,x.UI)(E,f)})),(0,v.jsx)(d.Z,{children:(0,x.UI)(E,(function(e){var n=(0,i.Z)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,delete n.tabAttrs,(0,v.jsx)(u.Z,(0,i.Z)({},n))}))})]})};j.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},j.displayName="Tabs",n.Z=j},3507:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2709);function i(e){return"boolean"===typeof e?e?r.Z:void 0:e}}}]);
//# sourceMappingURL=73.960afa8d.chunk.js.map