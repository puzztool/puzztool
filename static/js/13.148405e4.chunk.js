(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[13],{126:function(e,t,a){"use strict";var r=a(28),l=a(29),n=function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(a){this._isSupported=a instanceof DOMException&&(22===a.code||1014===a.code||"QuotaExceededError"===a.name||"NS_ERROR_DOM_QUOTA_REACHED"===a.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();n._isSupported=void 0,n._prefix="puzztool",t.a=n},127:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r="0.7.0"},128:function(e,t,a){"use strict";var r=a(15),l=a(1);t.__esModule=!0,t.default=void 0;var n=l(a(4)),o=l(a(5)),u=l(a(8)),d=r(a(0)),i=a(9),s=l(a(48)),c=l(a(133)),f=l(a(68)),p=l(a(136)),m=(0,c.default)("h5"),v=(0,c.default)("h6"),g=(0,s.default)("card-body"),h=d.default.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.bg,s=e.text,c=e.border,p=e.body,m=e.children,v=e.as,h=void 0===v?"div":v,b=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),_=(0,i.useBootstrapPrefix)(a,"card"),y=(0,d.useMemo)((function(){return{cardHeaderBsPrefix:_+"-header"}}),[_]);return d.default.createElement(f.default.Provider,{value:y},d.default.createElement(h,(0,n.default)({ref:t},b,{className:(0,u.default)(r,_,l&&"bg-"+l,s&&"text-"+s,c&&"border-"+c)}),p?d.default.createElement(g,null,m):m))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=p.default,h.Title=(0,s.default)("card-title",{Component:m}),h.Subtitle=(0,s.default)("card-subtitle",{Component:v}),h.Body=g,h.Link=(0,s.default)("card-link",{Component:"a"}),h.Text=(0,s.default)("card-text",{Component:"p"}),h.Header=(0,s.default)("card-header"),h.Footer=(0,s.default)("card-footer"),h.ImgOverlay=(0,s.default)("card-img-overlay");var b=h;t.default=b,e.exports=t.default},133:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=r(a(4)),n=r(a(0)),o=r(a(8));t.default=function(e){return n.default.forwardRef((function(t,a){return n.default.createElement("div",(0,l.default)({},t,{ref:a,className:(0,o.default)(t.className,e)}))}))},e.exports=t.default},136:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=r(a(4)),n=r(a(5)),o=r(a(8)),u=r(a(0)),d=a(9),i=u.default.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,s=e.as,c=void 0===s?"img":s,f=(0,n.default)(e,["bsPrefix","className","variant","as"]),p=(0,d.useBootstrapPrefix)(a,"card-img");return u.default.createElement(c,(0,l.default)({ref:t,className:(0,o.default)(i?p+"-"+i:p,r)},f))}));i.displayName="CardImg",i.defaultProps={variant:null};var s=i;t.default=s,e.exports=t.default},241:function(e,t,a){},242:function(e,t,a){"use strict";var r=a(1);t.__esModule=!0,t.default=void 0;var l=(0,r(a(48)).default)("card-deck");t.default=l,e.exports=t.default},248:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(67),o=a.n(n),u=a(128),d=a.n(u),i=a(242),s=a.n(i),c=a(126),f=a(127);a(241);t.default=function(){return l.a.createElement("div",{className:"Settings"},l.a.createElement("div",{className:"Settings-content"},l.a.createElement(s.a,null,l.a.createElement(d.a,null,l.a.createElement(d.a.Header,null,"Saved state"),l.a.createElement(d.a.Body,null,l.a.createElement("p",null,"The most recent inputs to each tool are stored in the browser's local storage. In the event that state becomes corrupted it can be cleared using the button below."),l.a.createElement(o.a,{onClick:function(){c.a.clear()},variant:"danger"},"Clear saved state"))),l.a.createElement(d.a,null,l.a.createElement(d.a.Header,null,"About"),l.a.createElement(d.a.Body,null,l.a.createElement("h3",null,"PuzzTool"),"Version: ",f.a,l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/puzztool/puzztool/",rel:"noopener noreferrer",target:"_blank"},"Project page"))))))}}}]);
//# sourceMappingURL=13.148405e4.chunk.js.map