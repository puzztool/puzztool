(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[10],{125:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(47),i=n(45),l=n(46),u=n(130),c=n.n(u),s=n(0),d=n(126),f=n(127),v=function(e){function t(e){var n;Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).VERSION_STORAGE_KEY="puzztoolVersion";var r=d.a.getObject(n.VERSION_STORAGE_KEY);return n.versionIncreased(r,f.a)&&(d.a.clear(),d.a.setObject(n.VERSION_STORAGE_KEY,f.a)),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"versionIncreased",value:function(e,t){return null==e||1===c()(t,e)}},{key:"saveState",value:function(){d.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(d.a.getObject(this.getLocalStorageKey()))}}]),t}(s.Component);t.a=v},126:function(e,t,n){"use strict";var a=n(28),r=n(29),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();o._isSupported=void 0,o._prefix="puzztool",t.a=o},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0.7.0"},130:function(e,t,n){var a,r,o;r=[],void 0===(o="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,n,a=e.replace(/^v/,"").replace(/\+.*$/,""),r=(n="-",-1===(t=a).indexOf(n)?t.length:t.indexOf(n)),o=a.substring(0,r).split(".");return o.push(a.substring(r+1)),o}function n(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function r(e,r){[e,r].forEach(a);for(var o=t(e),i=t(r),l=0;l<Math.max(o.length-1,i.length-1);l++){var u=parseInt(o[l]||0,10),c=parseInt(i[l]||0,10);if(u>c)return 1;if(c>u)return-1}var s=o[o.length-1],d=i[i.length-1];if(s&&d){var f=s.split(".").map(n),v=d.split(".").map(n);for(l=0;l<Math.max(f.length,v.length);l++){if(void 0===f[l]||"string"===typeof v[l]&&"number"===typeof f[l])return-1;if(void 0===v[l]||"string"===typeof f[l]&&"number"===typeof v[l])return 1;if(f[l]>v[l])return 1;if(v[l]>f[l])return-1}}else if(s||d)return s?-1:1;return 0}var o=[">",">=","=","<","<="],i={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return r.compare=function(e,t,n){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(n);var a=r(e,t);return i[n].indexOf(a)>-1},r})?a.apply(t,r):a)||(e.exports=o)},131:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(33)),l=a(n(8)),u=a(n(0)),c=n(9),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.className,a=e.striped,i=e.bordered,c=e.borderless,s=e.hover,d=e.size,f=e.variant,v=e.responsive,p=(0,o.default)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),m=(0,l.default)(t,n,f&&t+"-"+f,d&&t+"-"+d,a&&t+"-striped",i&&t+"-bordered",c&&t+"-borderless",s&&t+"-hover"),E=u.default.createElement("table",(0,r.default)({},p,{className:m}));if(v){var h=t+"-responsive";return"string"===typeof v&&(h=h+"-"+v),u.default.createElement("div",{className:h},E)}return E},t}(u.default.Component),d=(0,c.createBootstrapComponent)(s,"table");t.default=d,e.exports=t.default},144:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(0)),l=(a(n(74)),n(34)),u=a(n(32)),c=a(n(51)),s=a(n(50)),d=a(n(152)),f=a(n(153)),v=a(n(154)),p=n(151),m=d.default.ControlledComponent;function E(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,o=t.tabClassName;return null==n?null:i.default.createElement(s.default,{as:c.default,eventKey:a,disabled:r,className:o},n)}var h=i.default.forwardRef((function(e,t){var n=(0,l.useUncontrolled)(e,{activeKey:"onSelect"}),a=n.id,c=n.onSelect,s=n.transition,d=n.mountOnEnter,h=n.unmountOnExit,y=n.children,b=n.activeKey,g=void 0===b?function(e){var t;return(0,p.forEach)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(y):b,O=(0,o.default)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return i.default.createElement(m,{ref:t,id:a,activeKey:g,onSelect:c,transition:s,mountOnEnter:d,unmountOnExit:h},i.default.createElement(u.default,(0,r.default)({},O,{role:"tablist",as:"nav"}),(0,p.map)(y,E)),i.default.createElement(f.default,null,(0,p.map)(y,(function(e){var t=(0,r.default)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.default.createElement(v.default,t)}))))}));h.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},h.displayName="Tabs";var y=h;t.default=y,e.exports=t.default},145:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(33)),o=a(n(0)),i=a(n(152)),l=a(n(153)),u=a(n(154)),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.default)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.default.Component);c.Container=i.default,c.Content=l.default,c.Pane=u.default;var s=c;t.default=s,e.exports=t.default},150:function(e,t,n){"use strict";var a=n(1),r=n(15);t.__esModule=!0,t.default=void 0;var o,i=a(n(4)),l=a(n(5)),u=a(n(8)),c=r(n(0)),s=r(n(72)),d=a(n(70)),f=a(n(71)),v=((o={})[s.ENTERING]="show",o[s.ENTERED]="show",o),p=c.default.forwardRef((function(e,t){var n=e.className,a=e.children,r=(0,l.default)(e,["className","children"]),o=(0,c.useCallback)((function(e){(0,f.default)(e),r.onEnter&&r.onEnter(e)}),[r]);return c.default.createElement(s.default,(0,i.default)({ref:t,addEndListener:d.default},r,{onEnter:o}),(function(e,t){return c.default.cloneElement(a,(0,i.default)({},t,{className:(0,u.default)("fade",n,a.props.className,v[e])}))}))}));p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},p.displayName="Fade";var m=p;t.default=m,e.exports=t.default},151:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.map=function(e,t){var n=0;return r.default.Children.map(e,(function(e){return r.default.isValidElement(e)?t(e,n++):e}))},t.forEach=function(e,t){var n=0;r.default.Children.forEach(e,(function(e){r.default.isValidElement(e)&&t(e,n++)}))};var r=a(n(0))},152:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(33)),i=a(n(0)),l=n(34),u=a(n(69)),c=a(n(24)),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).getControlledId=function(e){return n.getKey(e,"tabpane")},n.getControllerId=function(e){return n.getKey(e,"tab")},n.state={tabContext:{onSelect:n.props.onSelect,activeKey:n.props.activeKey,transition:n.props.transition,mountOnEnter:n.props.mountOnEnter,unmountOnExit:n.props.unmountOnExit,getControlledId:n.getControlledId,getControllerId:n.getControllerId}},n}(0,o.default)(t,e),t.getDerivedStateFromProps=function(e,t){var n=e.activeKey,a=e.mountOnEnter,o=e.unmountOnExit,i=e.transition;return{tabContext:(0,r.default)({},t.tabContext,{activeKey:n,mountOnEnter:a,unmountOnExit:o,transition:i})}};var n=t.prototype;return n.getKey=function(e,t){var n=this.props,a=n.generateChildId,r=n.id;return a?a(e,t):r?r+"-"+t+"-"+e:null},n.render=function(){var e=this.props,t=e.children,n=e.onSelect;return i.default.createElement(u.default.Provider,{value:this.state.tabContext},i.default.createElement(c.default.Provider,{value:n},t))},t}(i.default.Component),d=(0,l.uncontrollable)(s,{activeKey:"onSelect"});t.default=d,e.exports=t.default},153:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(33)),l=a(n(8)),u=a(n(0)),c=n(9),s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,n=e.as,a=void 0===n?"div":n,i=e.className,c=(0,o.default)(e,["bsPrefix","as","className"]);return u.default.createElement(a,(0,r.default)({},c,{className:(0,l.default)(i,t)}))},t}(u.default.Component),d=(0,c.createBootstrapComponent)(s,"tab-content");t.default=d,e.exports=t.default},154:function(e,t,n){"use strict";var a=n(15),r=n(1);t.__esModule=!0,t.default=void 0;var o=r(n(4)),i=r(n(5)),l=r(n(8)),u=a(n(0)),c=n(9),s=r(n(69)),d=a(n(24)),f=r(n(150));var v=u.default.forwardRef((function(e,t){var n=function(e){var t=(0,u.useContext)(s.default);if(!t)return e;var n=t.activeKey,a=t.getControlledId,r=t.getControllerId,l=(0,i.default)(t,["activeKey","getControlledId","getControllerId"]),c=!1!==e.transition&&!1!==l.transition,v=(0,d.makeEventKey)(e.eventKey);return(0,o.default)({},e,{active:null==e.active&&null!=v?(0,d.makeEventKey)(n)===v:e.active,id:a(e.eventKey),"aria-labelledby":r(e.eventKey),transition:c&&(e.transition||l.transition||f.default),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),a=n.bsPrefix,r=n.className,v=n.active,p=n.onEnter,m=n.onEntering,E=n.onEntered,h=n.onExit,y=n.onExiting,b=n.onExited,g=n.mountOnEnter,O=n.unmountOnExit,x=n.transition,S=n.as,K=void 0===S?"div":S,C=(n.eventKey,(0,i.default)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),_=(0,c.useBootstrapPrefix)(a,"tab-pane");if(!v&&O)return null;var N=u.default.createElement(K,(0,o.default)({},C,{ref:t,role:"tabpanel","aria-hidden":!v,className:(0,l.default)(r,_,{active:v})}));return x&&(N=u.default.createElement(x,{in:v,onEnter:p,onEntering:m,onEntered:E,onExit:h,onExiting:y,onExited:b,mountOnEnter:g,unmountOnExit:O},N)),u.default.createElement(s.default.Provider,{value:null},u.default.createElement(d.default.Provider,{value:null},N))}));v.displayName="TabPane";var p=v;t.default=p,e.exports=t.default},226:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(29),o=n(47),i=n(45),l=n(46),u=n(0),c=n.n(u),s=n(145),d=n.n(s),f=n(144),v=n.n(f),p=n(124),m=n(131),E=n.n(m);n(226);var h=function(e){return c.a.createElement("div",{className:"CharacterTable"},c.a.createElement(E.a,{striped:!0,responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Character"),c.a.createElement("th",null,"Binary"),c.a.createElement("th",null,"Ternary"),c.a.createElement("th",null,"Octal"),c.a.createElement("th",null,"Decimal"),c.a.createElement("th",null,"Hexadecimal"))),c.a.createElement("tbody",null,e.data.map((function(e){return c.a.createElement("tr",{key:e.character},c.a.createElement("td",null,e.character),c.a.createElement("td",null,e.binary),c.a.createElement("td",null,e.ternary),c.a.createElement("td",null,e.octal),c.a.createElement("td",null,e.decimal),c.a.createElement("td",null,e.hexadecimal.toUpperCase()))})))))};var y=function(){return c.a.createElement(h,{data:p.CharacterConversion.getAsciiTable()})};var b=function(){return c.a.createElement(h,{data:p.CharacterConversion.getOrdinalTable()})},g=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e)))._activeKey=1,n.state={activeKey:n._activeKey},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"CharacterEncodings"},c.a.createElement("div",{className:"CharacterEncodings-content"},c.a.createElement(v.a,{activeKey:this.state.activeKey,id:"CharacterEncodings-tabs",onSelect:function(t){return e.onTabSelect(t)}},c.a.createElement(d.a,{eventKey:1,title:"ASCII"},c.a.createElement(y,null)),c.a.createElement(d.a,{eventKey:2,title:"Ordinal"},c.a.createElement(b,null)))))}},{key:"getLocalStorageKey",value:function(){return"CharacterEncodings"}},{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(n(125).a);t.default=g}}]);
//# sourceMappingURL=10.a1fbfb40.chunk.js.map