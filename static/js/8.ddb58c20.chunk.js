(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[8],{176:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(3),l=n.n(i),o=n(0),c=n.n(o),u=n(4),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.striped,s=e.bordered,d=e.borderless,m=e.hover,E=e.size,b=e.variant,v=e.responsive,f=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(u.a)(n,"table"),p=l()(i,O,b&&O+"-"+b,E&&O+"-"+E,o&&O+"-striped",s&&O+"-bordered",d&&O+"-borderless",m&&O+"-hover"),h=c.a.createElement("table",Object(a.a)({},f,{className:p,ref:t}));if(v){var y=O+"-responsive";return"string"===typeof v&&(y=y+"-"+v),c.a.createElement("div",{className:y},h)}return h}));t.a=s},177:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(18),l=n(71),o=n(8);t.a=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,c=t.generateChildId,u=t.onSelect,s=t.activeKey,d=t.transition,m=t.mountOnEnter,E=t.unmountOnExit,b=t.children,v=Object(a.useMemo)((function(){return c||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,c]),f=Object(a.useMemo)((function(){return{onSelect:u,activeKey:s,transition:d,mountOnEnter:m,unmountOnExit:E,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[u,s,d,m,E,v]);return r.a.createElement(l.a.Provider,{value:f},r.a.createElement(o.a.Provider,{value:u},b))}},178:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(3),l=n.n(i),o=n(0),c=n.n(o),u=n(4),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.as,o=void 0===i?"div":i,s=e.className,d=Object(r.a)(e,["bsPrefix","as","className"]),m=Object(u.a)(n,"tab-content");return c.a.createElement(o,Object(a.a)({ref:t},d,{className:l()(s,m)}))}));t.a=s},179:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(3),l=n.n(i),o=n(0),c=n.n(o),u=n(4),s=n(71),d=n(8),m=n(180);var E=c.a.forwardRef((function(e,t){var n=function(e){var t=Object(o.useContext)(s.a);if(!t)return e;var n=t.activeKey,i=t.getControlledId,l=t.getControllerId,c=Object(r.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==c.transition,E=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=E?Object(d.b)(n)===E:e.active,id:i(e.eventKey),"aria-labelledby":l(e.eventKey),transition:u&&(e.transition||c.transition||m.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:c.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:c.unmountOnExit})}(e),i=n.bsPrefix,E=n.className,b=n.active,v=n.onEnter,f=n.onEntering,O=n.onEntered,p=n.onExit,h=n.onExiting,y=n.onExited,x=n.mountOnEnter,j=n.unmountOnExit,C=n.transition,N=n.as,K=void 0===N?"div":N,g=(n.eventKey,Object(r.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),T=Object(u.a)(i,"tab-pane");if(!b&&!C&&j)return null;var P=c.a.createElement(K,Object(a.a)({},g,{ref:t,role:"tabpanel","aria-hidden":!b,className:l()(E,T,{active:b})}));return C&&(P=c.a.createElement(C,{in:b,onEnter:v,onEntering:f,onEntered:O,onExit:p,onExiting:h,onExited:y,mountOnEnter:x,unmountOnExit:j},P)),c.a.createElement(s.a.Provider,{value:null},c.a.createElement(d.a.Provider,{value:null},P))}));E.displayName="TabPane",t.a=E},180:function(e,t,n){"use strict";var a,r=n(1),i=n(2),l=n(3),o=n.n(l),c=n(72),u=n(0),s=n.n(u),d=n(32),m=n(73),E=((a={})[d.b]="show",a[d.a]="show",a),b=s.a.forwardRef((function(e,t){var n=e.className,a=e.children,l=Object(i.a)(e,["className","children"]),b=Object(u.useCallback)((function(e){Object(m.a)(e),l.onEnter&&l.onEnter(e)}),[l]);return s.a.createElement(d.e,Object(r.a)({ref:t,addEndListener:c.a},l,{onEnter:b}),(function(e,t){return s.a.cloneElement(a,Object(r.a)({},t,{className:o()("fade",n,a.props.className,E[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",t.a=b},181:function(e,t,n){"use strict";var a=n(1),r=n(2),i=n(0),l=n.n(i),o=(n(118),n(18)),c=n(48),u=n(47),s=n(46),d=n(177),m=n(178),E=n(179),b=n(75);function v(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,i=t.tabClassName,o=t.id;return null==n?null:l.a.createElement(s.a,{as:u.a,eventKey:a,disabled:r,id:o,className:i},n)}var f=l.a.forwardRef((function(e,t){var n=Object(o.a)(e,{activeKey:"onSelect"}),i=n.id,u=n.onSelect,s=n.transition,f=n.mountOnEnter,O=n.unmountOnExit,p=n.children,h=n.activeKey,y=void 0===h?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(p):h,x=Object(r.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return l.a.createElement(d.a,{ref:t,id:i,activeKey:y,onSelect:u,transition:s,mountOnEnter:f,unmountOnExit:O},l.a.createElement(c.a,Object(a.a)({},x,{role:"tablist",as:"nav"}),Object(b.b)(p,v)),l.a.createElement(m.a,null,Object(b.b)(p,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,l.a.createElement(E.a,t)}))))}));f.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},f.displayName="Tabs",t.a=f},182:function(e,t,n){"use strict";var a=n(9),r=n(0),i=n.n(r),l=n(177),o=n(178),c=n(179),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(i.a.Component);u.Container=l.a,u.Content=o.a,u.Pane=c.a,t.a=u},201:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(182),l=n(181),o=n(70),c=n(44),u=n(176);n(201);var s=function(e){return r.a.createElement("div",{className:"CharacterTable"},r.a.createElement(u.a,{striped:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Character"),r.a.createElement("th",null,"Binary"),r.a.createElement("th",null,"Ternary"),r.a.createElement("th",null,"Octal"),r.a.createElement("th",null,"Decimal"),r.a.createElement("th",null,"Hexadecimal"))),r.a.createElement("tbody",null,e.data.map(e=>r.a.createElement("tr",{key:e.character},r.a.createElement("td",null,e.character),r.a.createElement("td",null,e.binary),r.a.createElement("td",null,e.ternary),r.a.createElement("td",null,e.octal),r.a.createElement("td",null,e.decimal),r.a.createElement("td",null,e.hexadecimal.toUpperCase()))))))};var d=function(){return r.a.createElement(s,{data:c.CharacterConversion.getAsciiTable()})},m=n(111);var E=function(){return r.a.createElement(s,{data:c.CharacterConversion.getOrdinalTable()})};const b={selectTab:m.b},v=Object(o.b)(e=>({selectedTab:e.encoding.character.selectedTab}),b);t.default=v((function(e){return r.a.createElement(l.a,{activeKey:e.selectedTab,id:"CharacterEncodings-tabs",onSelect:e.selectTab},r.a.createElement(i.a,{eventKey:1,title:"ASCII"},r.a.createElement(d,null)),r.a.createElement(i.a,{eventKey:2,title:"Ordinal"},r.a.createElement(E,null)))}))}}]);
//# sourceMappingURL=8.ddb58c20.chunk.js.map