(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[10],{125:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(47),i=n(45),u=n(46),l=n(0),s=n(126),c=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){s.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(s.a.getObject(this.getLocalStorageKey()))}}]),t}(l.Component);t.a=c},126:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(128),i=n.n(o),u=n(127),l=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}this._isSupported&&this.clearOnVersionMismatch()}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this.STORAGE_KEY_PREFIX,"_").concat(e)}},{key:"didVersionChange",value:function(e,t){try{if(e)return 0!==i()(t,e)}catch(n){}return!0}},{key:"clearOnVersionMismatch",value:function(){var e=this.getItem(this.VERSION_STORAGE_KEY);this.didVersionChange(e,u.a)&&(this.clear(),this.setItem(this.VERSION_STORAGE_KEY,u.a))}}]),e}();l.VERSION_STORAGE_KEY="appVersion",l.STORAGE_KEY_PREFIX="puzztool",l._isSupported=void 0,t.a=l},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0.7.0"},128:function(e,t,n){var a,r,o;r=[],void 0===(o="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,a=e.replace(/^v/,"").replace(/\+.*$/,""),r=(n="-",-1===(t=a).indexOf(n)?t.length:t.indexOf(n)),o=a.substring(0,r).split(".");return o.push(a.substring(r+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(a);for(var o=t(e),i=t(r),u=0;u<Math.max(o.length-1,i.length-1);u++){var l=parseInt(o[u]||0,10),s=parseInt(i[u]||0,10);if(l>s)return 1;if(s>l)return-1}var c=o[o.length-1],d=i[i.length-1];if(c&&d){var f=c.split(".").map(n),v=d.split(".").map(n);for(u=0;u<Math.max(f.length,v.length);u++){if(void 0===f[u]||"string"===typeof v[u]&&"number"===typeof f[u])return-1;if(void 0===v[u]||"string"===typeof f[u]&&"number"===typeof v[u])return 1;if(f[u]>v[u])return 1;if(v[u]>f[u])return-1}}else if(c||d)return c?-1:1;return 0}var o=[">",">=","=","<","<="],i={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n);var a=r(e,t);return i[n].indexOf(a)>-1},r})?a.apply(t,r):a)||(e.exports=o)},131:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(33)),u=a(n(8)),l=a(n(0)),s=n(9),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.className,a=e.striped,i=e.bordered,s=e.borderless,c=e.hover,d=e.size,f=e.variant,v=e.responsive,p=(0,o.default)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=(0,u.default)(t,n,f&&t+"-"+f,d&&t+"-"+d,a&&t+"-striped",i&&t+"-bordered",s&&t+"-borderless",c&&t+"-hover"),E=l.default.createElement("table",(0,r.default)({},p,{className:m}));if(v){var h=t+"-responsive";return"string"===typeof v&&(h=h+"-"+v),l.default.createElement("div",{className:h},E)}return E},t}(l.default.Component),d=(0,s.createBootstrapComponent)(c,"table");t.default=d,e.exports=t.default},144:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(0)),u=(a(n(74)),n(34)),l=a(n(32)),s=a(n(51)),c=a(n(50)),d=a(n(152)),f=a(n(153)),v=a(n(154)),p=n(151),m=d.default.ControlledComponent;function E(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,o=t.tabClassName;return null==n?null:i.default.createElement(c.default,{as:s.default,eventKey:a,disabled:r,className:o},n)}var h=i.default.forwardRef((function(e,t){var n=(0,u.useUncontrolled)(e,{activeKey:"onSelect"}),a=n.id,s=n.onSelect,c=n.transition,d=n.mountOnEnter,h=n.unmountOnExit,y=n.children,b=n.activeKey,g=void 0===b?function(e){var t;return(0,p.forEach)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(y):b,O=(0,o.default)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return i.default.createElement(m,{ref:t,id:a,activeKey:g,onSelect:s,transition:c,mountOnEnter:d,unmountOnExit:h},i.default.createElement(l.default,(0,r.default)({},O,{role:"tablist",as:"nav"}),(0,p.map)(y,E)),i.default.createElement(f.default,null,(0,p.map)(y,(function(e){var t=(0,r.default)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.default.createElement(v.default,t)}))))}));h.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},h.displayName="Tabs";var y=h;t.default=y,e.exports=t.default},145:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(33)),o=a(n(0)),i=a(n(152)),u=a(n(153)),l=a(n(154)),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.default)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.default.Component);s.Container=i.default,s.Content=u.default,s.Pane=l.default;var c=s;t.default=c,e.exports=t.default},150:function(e,t,n){"use strict";var a=n(1),r=n(15);t.__esModule=!0,t.default=void 0;var o,i=a(n(4)),u=a(n(5)),l=a(n(8)),s=r(n(0)),c=r(n(72)),d=a(n(70)),f=a(n(71)),v=((o={})[c.ENTERING]="show",o[c.ENTERED]="show",o),p=s.default.forwardRef((function(e,t){var n=e.className,a=e.children,r=(0,u.default)(e,["className","children"]),o=(0,s.useCallback)((function(e){(0,f.default)(e),r.onEnter&&r.onEnter(e)}),[r]);return s.default.createElement(c.default,(0,i.default)({ref:t,addEndListener:d.default},r,{onEnter:o}),(function(e,t){return s.default.cloneElement(a,(0,i.default)({},t,{className:(0,l.default)("fade",n,a.props.className,v[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade";var m=p;t.default=m,e.exports=t.default},151:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.map=function(e,t){var n=0;return r.default.Children.map(e,(function(e){return r.default.isValidElement(e)?t(e,n++):e}))},t.forEach=function(e,t){var n=0;r.default.Children.forEach(e,(function(e){r.default.isValidElement(e)&&t(e,n++)}))};var r=a(n(0))},152:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(33)),i=a(n(0)),u=n(34),l=a(n(69)),s=a(n(24)),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).getControlledId=function(e){return n.getKey(e,"tabpane")},n.getControllerId=function(e){return n.getKey(e,"tab")},n.state={tabContext:{onSelect:n.props.onSelect,activeKey:n.props.activeKey,transition:n.props.transition,mountOnEnter:n.props.mountOnEnter,unmountOnExit:n.props.unmountOnExit,getControlledId:n.getControlledId,getControllerId:n.getControllerId}},n}(0,o.default)(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.activeKey,a=e.mountOnEnter,o=e.unmountOnExit,i=e.transition;return{tabContext:(0,r.default)({},t.tabContext,{activeKey:n,mountOnEnter:a,unmountOnExit:o,transition:i})}};var n=t.prototype;return n.getKey=function(e,t){var n=this.props,a=n.generateChildId,r=n.id;return a?a(e,t):r?r+"-"+t+"-"+e:null},n.render=function(){var e=this.props,t=e.children,n=e.onSelect;return i.default.createElement(l.default.Provider,{value:this.state.tabContext},i.default.createElement(s.default.Provider,{value:n},t))},t}(i.default.Component),d=(0,u.uncontrollable)(c,{activeKey:"onSelect"});t.default=d,e.exports=t.default},153:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(33)),u=a(n(8)),l=a(n(0)),s=n(9),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.as,a=void 0===n?"div":n,i=e.className,s=(0,o.default)(e,["bsPrefix","as","className"]);return l.default.createElement(a,(0,r.default)({},s,{className:(0,u.default)(i,t)}))},t}(l.default.Component),d=(0,s.createBootstrapComponent)(c,"tab-content");t.default=d,e.exports=t.default},154:function(e,t,n){"use strict";var a=n(15),r=n(1);t.__esModule=!0,t.default=void 0;var o=r(n(4)),i=r(n(5)),u=r(n(8)),l=a(n(0)),s=n(9),c=r(n(69)),d=a(n(24)),f=r(n(150));var v=l.default.forwardRef((function(e,t){var n=function(e){var t=(0,l.useContext)(c.default);if(!t)return e;var n=t.activeKey,a=t.getControlledId,r=t.getControllerId,u=(0,i.default)(t,["activeKey","getControlledId","getControllerId"]),s=!1!==e.transition&&!1!==u.transition,v=(0,d.makeEventKey)(e.eventKey);return(0,o.default)({},e,{active:null==e.active&&null!=v?(0,d.makeEventKey)(n)===v:e.active,id:a(e.eventKey),"aria-labelledby":r(e.eventKey),transition:s&&(e.transition||u.transition||f.default),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:u.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:u.unmountOnExit})}(e),a=n.bsPrefix,r=n.className,v=n.active,p=n.onEnter,m=n.onEntering,E=n.onEntered,h=n.onExit,y=n.onExiting,b=n.onExited,g=n.mountOnEnter,O=n.unmountOnExit,x=n.transition,S=n.as,K=void 0===S?"div":S,C=(n.eventKey,(0,i.default)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),_=(0,s.useBootstrapPrefix)(a,"tab-pane");if(!v&&O)return null;var I=l.default.createElement(K,(0,o.default)({},C,{ref:t,role:"tabpanel","aria-hidden":!v,className:(0,u.default)(r,_,{active:v})}));return x&&(I=l.default.createElement(x,{in:v,onEnter:p,onEntering:m,onEntered:E,onExit:h,onExiting:y,onExited:b,mountOnEnter:g,unmountOnExit:O},I)),l.default.createElement(c.default.Provider,{value:null},l.default.createElement(d.default.Provider,{value:null},I))}));v.displayName="TabPane";var p=v;t.default=p,e.exports=t.default},226:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(29),o=n(47),i=n(45),u=n(46),l=n(0),s=n.n(l),c=n(145),d=n.n(c),f=n(144),v=n.n(f),p=n(124),m=n(131),E=n.n(m);n(226);var h=function(e){return s.a.createElement("div",{className:"CharacterTable"},s.a.createElement(E.a,{striped:!0,responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Character"),s.a.createElement("th",null,"Binary"),s.a.createElement("th",null,"Ternary"),s.a.createElement("th",null,"Octal"),s.a.createElement("th",null,"Decimal"),s.a.createElement("th",null,"Hexadecimal"))),s.a.createElement("tbody",null,e.data.map((function(e){return s.a.createElement("tr",{key:e.character},s.a.createElement("td",null,e.character),s.a.createElement("td",null,e.binary),s.a.createElement("td",null,e.ternary),s.a.createElement("td",null,e.octal),s.a.createElement("td",null,e.decimal),s.a.createElement("td",null,e.hexadecimal.toUpperCase()))})))))};var y=function(){return s.a.createElement(h,{data:p.CharacterConversion.getAsciiTable()})};var b=function(){return s.a.createElement(h,{data:p.CharacterConversion.getOrdinalTable()})},g=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e)))._activeKey=1,n.state={activeKey:n._activeKey},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"CharacterEncodings"},s.a.createElement("div",{className:"CharacterEncodings-content"},s.a.createElement(v.a,{activeKey:this.state.activeKey,id:"CharacterEncodings-tabs",onSelect:function(t){return e.onTabSelect(t)}},s.a.createElement(d.a,{eventKey:1,title:"ASCII"},s.a.createElement(y,null)),s.a.createElement(d.a,{eventKey:2,title:"Ordinal"},s.a.createElement(b,null)))))}},{key:"getLocalStorageKey",value:function(){return"CharacterEncodings"}},{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(n(125).a);t.default=g}}]);
//# sourceMappingURL=10.ee9a5b78.chunk.js.map