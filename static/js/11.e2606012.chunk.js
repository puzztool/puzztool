(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[11],{125:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(47),i=n(45),l=n(46),c=n(0),s=n(126),u=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){s.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(s.a.getObject(this.getLocalStorageKey()))}}]),t}(c.Component);t.a=u},126:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(128),i=n.n(o),l=n(127),c=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}this._isSupported&&this.clearOnVersionMismatch()}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this.STORAGE_KEY_PREFIX,"_").concat(e)}},{key:"didVersionChange",value:function(e,t){try{if(e)return 0!==i()(t,e)}catch(n){}return!0}},{key:"clearOnVersionMismatch",value:function(){var e=this.getItem(this.VERSION_STORAGE_KEY);this.didVersionChange(e,l.a)&&(this.clear(),this.setItem(this.VERSION_STORAGE_KEY,l.a))}}]),e}();c.VERSION_STORAGE_KEY="appVersion",c.STORAGE_KEY_PREFIX="puzztool",c._isSupported=void 0,t.a=c},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="0.7.0"},137:function(e,t,n){e.exports=n(140)()},140:function(e,t,n){"use strict";var a=n(141);function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,i){if(i!==a){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},141:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},142:function(e,t,n){"use strict";var a=n(28),r=n(29),o=n(47),i=n(45),l=n(46),c=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e)))._activeKey=1,n.state={activeKey:n._activeKey},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"onSaveState",value:function(){return{activeKey:this._activeKey}}},{key:"onRestoreState",value:function(e){null!==e&&(this._activeKey=e.activeKey)}},{key:"onUpdateState",value:function(){this.setState({activeKey:this._activeKey})}},{key:"onTabSelect",value:function(e){this._activeKey=e,this.updateState()}}]),t}(n(125).a);t.a=c},167:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},185:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";var a=n(1);t.__esModule=!0,t.default=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(0)),l=a(n(137)),c=a(n(73)),s={id:l.default.any,href:l.default.string,onClick:l.default.func,title:l.default.node.isRequired,disabled:l.default.bool,menuRole:l.default.string,rootCloseEvent:l.default.string,bsPrefix:l.default.string,variant:l.default.string,size:l.default.string},u=i.default.forwardRef((function(e,t){var n=e.title,a=e.children,l=e.bsPrefix,s=e.rootCloseEvent,u=e.variant,f=e.size,d=e.menuRole,m=e.disabled,h=e.href,p=e.id,y=(0,o.default)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","disabled","href","id"]);return i.default.createElement(c.default,(0,r.default)({ref:t},y),i.default.createElement(c.default.Toggle,{id:p,href:h,size:f,variant:u,disabled:m,childBsPrefix:l},n),i.default.createElement(c.default.Menu,{role:d,rootCloseEvent:s},a))}));u.displayName="DropdownButton",u.propTypes=s;var f=u;t.default=f,e.exports=t.default},249:function(e,t,n){"use strict";n.r(t);var a=n(28),r=n(29),o=n(47),i=n(45),l=n(46),c=n(0),s=n.n(c),u=n(145),f=n.n(u),d=n(144),m=n.n(d),h=n(142),p=n(131),y=n.n(p),v=n(124),E=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"contrastingColor",value:function(e){var t=e.substring(1),n=parseInt(t,16);return.2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(255&n)<40?"#ffffff":"#000000"}}]),e}();n(235);function b(e){return{backgroundColor:e.colorCode,color:E.contrastingColor(e.colorCode)}}var g=function(){return s.a.createElement("div",{className:"ResistorTable"},s.a.createElement(y.a,{striped:!0,responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Color"),s.a.createElement("th",null,"Value"),s.a.createElement("th",null,"Multiplier"),s.a.createElement("th",null,"Tolerance (%)"))),s.a.createElement("tbody",null,v.Resistor.colorTable.map((function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",{style:b(e)},e.name),s.a.createElement("td",null,e.getDisplayValue()),s.a.createElement("td",null,e.multiplier),s.a.createElement("td",null,e.toleranceInPercent))})))))};function S(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var O=n(167),R=n(132),_=n.n(R),k=n(134),j=n.n(k),w=n(129),I=n.n(w),T=n(126);var x=n(73),C=n.n(x),K=n(236),A=n.n(K);var N=function(e){return s.a.createElement(A.a,{title:e.title,key:e.index,id:"color-select-".concat(e.index),onSelect:function(t){var n=e.onChange;n&&n(e.index,function(e){var t=!0,n=!1,a=void 0;try{for(var r,o=v.Resistor.colorTable[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var i=r.value;if(e===i.name)return i}}catch(l){n=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}}(t))}},e.colors.map((function(t,n){return s.a.createElement(C.a.Item,{key:"".concat(e.index,"-").concat(n),eventKey:t.name},t.name)})))};n(185);var B=function(e){function t(t){return t===e.bands.length-1?104:18*t+20}function n(n){var a=e.bands[n];if(null!==a)return s.a.createElement("use",{xlinkHref:"#Band",x:t(n),fill:a.colorCode})}return s.a.createElement("div",{className:"ResistorPicture"},s.a.createElement("svg",{width:"240",viewBox:"0 0 136 40"},s.a.createElement("defs",null,s.a.createElement("g",{id:"Wire"},s.a.createElement("rect",{y:"20",height:"1",width:"8",fill:"black"})),s.a.createElement("g",{id:"Resistor"},s.a.createElement("rect",{y:"8",x:"8",width:"120",height:"24",rx:"4",ry:"4",stroke:"black",strokeWidth:"0.5",fill:"burlywood"}),s.a.createElement("use",{xlinkHref:"#Wire",x:"0"}),s.a.createElement("use",{xlinkHref:"#Wire",x:"128"})),s.a.createElement("g",{id:"Band"},s.a.createElement("rect",{y:"8",height:"24",width:"12",stroke:"black",strokeWidth:"0.5"}))),s.a.createElement("use",{xlinkHref:"#Resistor",x:"0",y:"0"}),n(0),n(1),n(2),n(3),n(4),"Sorry, your browser does not support inline SVG."))};function V(e){var t=e.slice(0,-1).filter((function(e){return null!==e})),n=v.Resistor.getValue(t);return n===v.Resistor.INVALID_RESISTOR?"Invalid Resistor Colors":"".concat(v.Resistor.getDisplayValue(n)," \u2126 \xb1 ").concat(e[e.length-1].toleranceInPercent,"%")}var P=function(){var e,t,n,a=[v.Resistor.BLACK,v.Resistor.BLACK,v.Resistor.BLACK,null,v.Resistor.BROWN],r=Object(c.useState)(V(a)),o=Object(O.a)(r,2),i=o[0],l=o[1],u=Object(c.useState)(a),f=Object(O.a)(u,2),d=f[0],m=f[1];function h(e){m(e),l(V(e))}function p(e,t){var n=Array.from(d);n[e]=t||null,h(n)}e="ResistorInput",t=function(e){e&&h(e.bands)},n=function(){return{bands:d}},Object(c.useLayoutEffect)((function(){return t(T.a.getObject(e))}),[e]),Object(c.useEffect)((function(){return T.a.setObject(e,n())}));var y=v.Resistor.colorTable.filter((function(e){return e.hasValue()})),E=v.Resistor.colorTable.filter((function(e){return e.hasTolerance()}));return s.a.createElement("div",{className:"ResistorInput"},s.a.createElement(I.a,{className:"ResistorInput-input"},s.a.createElement(I.a.Header,null,"Input"),s.a.createElement(I.a.Body,null,s.a.createElement("div",{className:"ResistorInput-display"},s.a.createElement(B,{bands:d})),s.a.createElement("div",{className:"ResistorSelectors"},s.a.createElement(j.a,null,s.a.createElement(_.a,null,s.a.createElement(N,{index:0,title:"First Band",colors:y,onChange:p})),s.a.createElement(_.a,null,s.a.createElement(N,{index:1,title:"Second Band",colors:y,onChange:p})),s.a.createElement(_.a,null,s.a.createElement(N,{index:2,title:"Third Band",colors:v.Resistor.colorTable,onChange:p})),s.a.createElement(_.a,null,s.a.createElement(N,{index:3,title:"Fourth Band",colors:[new v.ResistorColorEntry("None","",0)].concat(S(v.Resistor.colorTable)),onChange:p})),s.a.createElement(_.a,null,s.a.createElement(N,{index:4,title:"Tolerance Band",colors:E,onChange:p})))))),s.a.createElement(I.a,{className:"ResistorInput-output"},s.a.createElement(I.a.Header,null,"Output"),s.a.createElement(I.a.Body,null,i)))},z=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Resistors"},s.a.createElement("div",{className:"Resistors-content"},s.a.createElement(m.a,{activeKey:this.state.activeKey,id:"Resistors-tabs",onSelect:function(t){return e.onTabSelect(t)}},s.a.createElement(f.a,{eventKey:1,title:"Value"},s.a.createElement(P,null)),s.a.createElement(f.a,{eventKey:2,title:"Reference"},s.a.createElement(g,null)))))}},{key:"getLocalStorageKey",value:function(){return"Resistors"}}]),t}(h.a);t.default=z}}]);
//# sourceMappingURL=11.e2606012.chunk.js.map