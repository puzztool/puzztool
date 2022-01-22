"use strict";(self.webpackChunkpuzztool=self.webpackChunkpuzztool||[]).push([[753],{5753:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r=t(1734),i=t(364),o=t(9485),s=t(3624),a=t(2982),l=t(1560),c=t(6144),d=t(7418),u=t(9140),x=t(7762),f=t(5353),v=t(1413),h=t(5987),b=t(2791),j=t(2007),m=t.n(j),Z=t(5107),E=t(70),p=m().oneOf(["start","end"]),y=m().oneOfType([p,m().shape({sm:p}),m().shape({md:p}),m().shape({lg:p}),m().shape({xl:p}),m().shape({xxl:p})]),g=t(184),O=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant"],C={id:m().string,href:m().string,onClick:m().func,title:m().node.isRequired,disabled:m().bool,align:y,menuRole:m().string,renderMenuOnMount:m().bool,rootCloseEvent:m().string,menuVariant:m().oneOf(["dark"]),bsPrefix:m().string,variant:m().string,size:m().string},T=b.forwardRef((function(n,e){var t=n.title,r=n.children,i=n.bsPrefix,o=n.rootCloseEvent,s=n.variant,a=n.size,l=n.menuRole,c=n.renderMenuOnMount,d=n.disabled,u=n.href,x=n.id,b=n.menuVariant,j=(0,h.Z)(n,O);return(0,g.jsxs)(f.Z,(0,v.Z)((0,v.Z)({ref:e},j),{},{children:[(0,g.jsx)(Z.Z,{id:x,href:u,size:a,variant:s,disabled:d,childBsPrefix:i,children:t}),(0,g.jsx)(E.Z,{role:l,renderOnMount:c,rootCloseEvent:o,variant:b,children:r})]}))}));T.displayName="DropdownButton",T.propTypes=C;var I=T;var P=function(n){return(0,g.jsx)(I,{title:n.title,id:"color-select-".concat(n.index),onSelect:function(e){var t=n.onChange;t&&t(n.index,function(n){var e,t=(0,x.Z)(l.VE.colorTable);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(n===r.name)return r}}catch(i){t.e(i)}finally{t.f()}}(e))},children:n.colors.map((function(e,t){return(0,g.jsx)(f.Z.Item,{eventKey:e.name,children:e.name},"".concat(n.index,"-").concat(t))}))},n.index)},R=t(6376);var N=function(n){function e(e){return e===n.bands.length-1?104:18*e+20}function t(t){var r=n.bands[t];if(r)return(0,g.jsx)("use",{xlinkHref:"#Band",x:e(t),fill:r.colorCode})}return(0,g.jsx)("div",{children:(0,g.jsxs)("svg",{width:"240",viewBox:"0 0 136 40",children:[(0,g.jsxs)("defs",{children:[(0,g.jsx)("g",{id:"Wire",children:(0,g.jsx)("rect",{y:"20",height:"1",width:"8",fill:"black"})}),(0,g.jsxs)("g",{id:"Resistor",children:[(0,g.jsx)("rect",{y:"8",x:"8",width:"120",height:"24",rx:"4",ry:"4",stroke:"black",strokeWidth:"0.5",fill:"burlywood"}),(0,g.jsx)("use",{xlinkHref:"#Wire",x:"0"}),(0,g.jsx)("use",{xlinkHref:"#Wire",x:"128"})]}),(0,g.jsx)("g",{id:"Band",children:(0,g.jsx)("rect",{y:"8",height:"24",width:"12",stroke:"black",strokeWidth:"0.5"})})]}),(0,g.jsx)("use",{xlinkHref:"#Resistor",x:"0",y:"0"}),t(0),t(1),t(2),t(3),t(4),"Sorry, your browser does not support inline SVG."]})})},V="ResistorInput_container__QveP0",K="ResistorInput_input__DUnFf",k="ResistorInput_display__i86Qi",w="ResistorInput_output__wxXyF",_={setBand:R.bF};function B(n){var e=n.slice(0,-1).filter((function(n){return!!n})),t=l.VE.getValue(e);return t===l.VE.INVALID_RESISTOR?"Invalid Resistor Colors":"".concat(l.VE.getDisplayValue(t)," \u2126 \xb1 ").concat(n[n.length-1].toleranceInPercent,"%")}var S=(0,i.$j)((function(n){return{bands:n.resistor.bands}}),_)((function(n){function e(e,t){var r=t?l.VE.colorTable.indexOf(t):-1;n.setBand({bandIndex:e,colorIndex:r})}var t=n.bands.map((function(n){return l.VE.colorTable[n]})),r=l.VE.colorTable.filter((function(n){return n.hasValue()})),i=l.VE.colorTable.filter((function(n){return n.hasTolerance()}));return(0,g.jsxs)("div",{className:V,children:[(0,g.jsxs)(u.Z,{className:K,children:[(0,g.jsx)(u.Z.Header,{children:"Input"}),(0,g.jsxs)(u.Z.Body,{children:[(0,g.jsx)("div",{className:k,children:(0,g.jsx)(N,{bands:t})}),(0,g.jsx)("div",{children:(0,g.jsxs)(d.Z,{children:[(0,g.jsx)(c.Z,{children:(0,g.jsx)(P,{index:0,title:"First Band",colors:r,onChange:e})}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(P,{index:1,title:"Second Band",colors:r,onChange:e})}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(P,{index:2,title:"Third Band",colors:l.VE.colorTable,onChange:e})}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(P,{index:3,title:"Fourth Band",colors:[new l.GA("None","",0)].concat((0,a.Z)(l.VE.colorTable)),onChange:e})}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(P,{index:4,title:"Tolerance Band",colors:i,onChange:e})})]})})]})]}),(0,g.jsxs)(u.Z,{className:w,children:[(0,g.jsx)(u.Z.Header,{children:"Output"}),(0,g.jsx)(u.Z.Body,{children:B(t)})]})]})})),z=t(2591);function M(n){var e=n.substring(1),t=parseInt(e,16);return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(255&t)<40?"#ffffff":"#000000"}var A="ResistorTable_container__DFVK6";function F(n){return{backgroundColor:n.colorCode,color:M(n.colorCode)}}var W=function(){return(0,g.jsx)("div",{className:A,children:(0,g.jsxs)(z.Z,{striped:!0,responsive:!0,children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Color"}),(0,g.jsx)("th",{children:"Value"}),(0,g.jsx)("th",{children:"Multiplier"}),(0,g.jsx)("th",{children:"Tolerance (%)"})]})}),(0,g.jsx)("tbody",{children:l.VE.colorTable.map((function(n){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{style:F(n),children:n.name}),(0,g.jsx)("td",{children:n.getDisplayValue()}),(0,g.jsx)("td",{children:n.multiplier}),(0,g.jsx)("td",{children:n.toleranceInPercent})]},n.name)}))})]})})},D={selectTab:R.x2};var H=(0,i.$j)((function(n){return{selectedTab:n.resistor.selectedTab}}),D)((function(n){return(0,g.jsx)(s.Z,{title:"Resistors",children:(0,g.jsxs)(o.Z,{activeKey:n.selectedTab,id:"Resistors-tabs",onSelect:n.selectTab,children:[(0,g.jsx)(r.Z,{eventKey:"1",title:"Value",children:(0,g.jsx)(S,{})}),(0,g.jsx)(r.Z,{eventKey:"2",title:"Reference",children:(0,g.jsx)(W,{})})]})})}))},5666:function(n,e,t){var r=t(2791);e.Z=function(n){var e=n.children,t=n.in,i=n.mountOnEnter,o=n.unmountOnExit,s=(0,r.useRef)(t);return(0,r.useEffect)((function(){t&&(s.current=!0)}),[t]),t?e:o||!s.current&&i?null:e}},551:function(n,e,t){t.d(e,{W:function(){return f}});var r=t(885),i=t(2791),o=t(165),s=t(4944),a=t(5666),l=t(184),c=["active","eventKey","mountOnEnter","transition","unmountOnExit"],d=["activeKey","getControlledId","getControllerId"],u=["as"];function x(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function f(n){var e=n.active,t=n.eventKey,r=n.mountOnEnter,a=n.transition,l=n.unmountOnExit,u=x(n,c),f=(0,i.useContext)(o.Z);if(!f)return[u,{eventKey:t,isActive:e,mountOnEnter:r,transition:a,unmountOnExit:l}];var v=f.activeKey,h=f.getControlledId,b=f.getControllerId,j=x(f,d),m=(0,s.h)(t);return[Object.assign({},u,{id:h(t),"aria-labelledby":b(t)}),{eventKey:t,isActive:null==e&&null!=m?(0,s.h)(v)===m:e,transition:a||j.transition,mountOnEnter:null!=r?r:j.mountOnEnter,unmountOnExit:null!=l?l:j.unmountOnExit}]}var v=i.forwardRef((function(n,e){var t=n.as,i=void 0===t?"div":t,c=f(x(n,u)),d=(0,r.Z)(c,2),v=d[0],h=d[1],b=h.isActive,j=h.onEnter,m=h.onEntering,Z=h.onEntered,E=h.onExit,p=h.onExiting,y=h.onExited,g=h.mountOnEnter,O=h.unmountOnExit,C=h.transition,T=void 0===C?a.Z:C;return(0,l.jsx)(o.Z.Provider,{value:null,children:(0,l.jsx)(s.Z.Provider,{value:null,children:(0,l.jsx)(T,{in:b,onEnter:j,onEntering:m,onEntered:Z,onExit:E,onExiting:p,onExited:y,mountOnEnter:g,unmountOnExit:O,children:(0,l.jsx)(i,Object.assign({},v,{ref:e,role:"tabpanel",hidden:!b,"aria-hidden":!b}))})})})}));v.displayName="TabPanel",e.Z=v},5561:function(n,e,t){var r=t(885),i=t(2791),o=t(239),s=t(2021),a=t(165),l=t(4944),c=t(551),d=t(184),u=function(n){var e=n.id,t=n.generateChildId,c=n.onSelect,u=n.activeKey,x=n.defaultActiveKey,f=n.transition,v=n.mountOnEnter,h=n.unmountOnExit,b=n.children,j=(0,o.$c)(u,x,c),m=(0,r.Z)(j,2),Z=m[0],E=m[1],p=(0,s.gP)(e),y=(0,i.useMemo)((function(){return t||function(n,e){return p?"".concat(p,"-").concat(e,"-").concat(n):null}}),[p,t]),g=(0,i.useMemo)((function(){return{onSelect:E,activeKey:Z,transition:f,mountOnEnter:v||!1,unmountOnExit:h||!1,getControlledId:function(n){return y(n,"tabpane")},getControllerId:function(n){return y(n,"tab")}}}),[E,Z,f,v,h,y]);return(0,d.jsx)(a.Z.Provider,{value:g,children:(0,d.jsx)(l.Z.Provider,{value:E||null,children:b})})};u.Panel=c.Z,e.Z=u},1734:function(n,e,t){t.d(e,{Z:function(){return j}});var r=t(2007),i=t.n(r),o=(t(2791),t(1413)),s=t(5987),a=t(5561),l=t(3507),c=t(184),d=["transition"],u=function(n){var e=n.transition,t=(0,s.Z)(n,d);return(0,c.jsx)(a.Z,(0,o.Z)((0,o.Z)({},t),{},{transition:(0,l.Z)(e)}))};u.displayName="TabContainer";var x=u,f=t(4886),v=t(4504),h={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string},b=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};b.propTypes=h;var j=Object.assign(b,{Container:x,Content:f.Z,Pane:v.Z})},4886:function(n,e,t){var r=t(6543);e.Z=(0,r.Z)("tab-content")},4504:function(n,e,t){var r=t(1413),i=t(885),o=t(5987),s=t(1694),a=t.n(s),l=t(2791),c=t(5666),d=t(4944),u=t(165),x=t(551),f=t(162),v=t(3507),h=t(184),b=["bsPrefix","transition"],j=["className","as"],m=l.forwardRef((function(n,e){var t=n.bsPrefix,s=n.transition,l=(0,o.Z)(n,b),m=(0,x.W)((0,r.Z)((0,r.Z)({},l),{},{transition:(0,v.Z)(s)})),Z=(0,i.Z)(m,2),E=Z[0],p=E.className,y=E.as,g=void 0===y?"div":y,O=(0,o.Z)(E,j),C=Z[1],T=C.isActive,I=C.onEnter,P=C.onEntering,R=C.onEntered,N=C.onExit,V=C.onExiting,K=C.onExited,k=C.mountOnEnter,w=C.unmountOnExit,_=C.transition,B=void 0===_?c.Z:_,S=(0,f.vE)(t,"tab-pane");return(0,h.jsx)(u.Z.Provider,{value:null,children:(0,h.jsx)(d.Z.Provider,{value:null,children:(0,h.jsx)(B,{in:T,onEnter:I,onEntering:P,onEntered:R,onExit:N,onExiting:V,onExited:K,mountOnEnter:k,unmountOnExit:w,children:(0,h.jsx)(g,(0,r.Z)((0,r.Z)({},O),{},{ref:e,className:a()(p,S,T&&"active")}))})})})}));m.displayName="TabPane",e.Z=m},2591:function(n,e,t){var r=t(1413),i=t(5987),o=t(1694),s=t.n(o),a=t(2791),l=t(162),c=t(184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=a.forwardRef((function(n,e){var t=n.bsPrefix,o=n.className,a=n.striped,u=n.bordered,x=n.borderless,f=n.hover,v=n.size,h=n.variant,b=n.responsive,j=(0,i.Z)(n,d),m=(0,l.vE)(t,"table"),Z=s()(o,m,h&&"".concat(m,"-").concat(h),v&&"".concat(m,"-").concat(v),a&&"".concat(m,"-striped"),u&&"".concat(m,"-bordered"),x&&"".concat(m,"-borderless"),f&&"".concat(m,"-hover")),E=(0,c.jsx)("table",(0,r.Z)((0,r.Z)({},j),{},{className:Z,ref:e}));if(b){var p="".concat(m,"-responsive");return"string"===typeof b&&(p="".concat(p,"-").concat(b)),(0,c.jsx)("div",{className:p,children:E})}return E}));e.Z=u},9485:function(n,e,t){var r=t(1413),i=t(5987),o=(t(2791),t(239)),s=t(5561),a=t(6957),l=t(9102),c=t(881),d=t(4886),u=t(4504),x=t(1701),f=t(3507),v=t(184),h=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function b(n){var e=n.props,t=e.title,r=e.eventKey,i=e.disabled,o=e.tabClassName,s=e.id;return null==t?null:(0,v.jsx)(c.Z,{as:"li",role:"presentation",children:(0,v.jsx)(l.Z,{as:"button",type:"button",eventKey:r,disabled:i,id:s,className:o,children:t})})}var j=function(n){var e=(0,o.Ch)(n,{activeKey:"onSelect"}),t=e.id,l=e.onSelect,c=e.transition,j=e.mountOnEnter,m=e.unmountOnExit,Z=e.children,E=e.activeKey,p=void 0===E?function(n){var e;return(0,x.Ed)(n,(function(n){null==e&&(e=n.props.eventKey)})),e}(Z):E,y=(0,i.Z)(e,h);return(0,v.jsxs)(s.Z,{id:t,activeKey:p,onSelect:l,transition:(0,f.Z)(c),mountOnEnter:j,unmountOnExit:m,children:[(0,v.jsx)(a.Z,(0,r.Z)((0,r.Z)({},y),{},{role:"tablist",as:"ul",children:(0,x.UI)(Z,b)})),(0,v.jsx)(d.Z,{children:(0,x.UI)(Z,(function(n){var e=(0,r.Z)({},n.props);return delete e.title,delete e.disabled,delete e.tabClassName,(0,v.jsx)(u.Z,(0,r.Z)({},e))}))})]})};j.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},j.displayName="Tabs",e.Z=j},3507:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(2709);function i(n){return"boolean"===typeof n?n?r.Z:void 0:n}}}]);
//# sourceMappingURL=753.73a3067a.chunk.js.map