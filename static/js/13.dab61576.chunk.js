(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{175:function(e,t,n){"use strict";var a=n(24),o=n(25),r=n(40),c=n(38),i=n(39),s=n(1),u=n(176),l=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.restoreState(),this.updateState()}},{key:"updateState",value:function(){this.onUpdateState(),this.saveState()}},{key:"saveState",value:function(){u.a.setObject(this.getLocalStorageKey(),this.onSaveState())}},{key:"restoreState",value:function(){this.onRestoreState(u.a.getObject(this.getLocalStorageKey()))}}]),t}(s.Component);t.a=l},176:function(e,t,n){"use strict";var a=n(24),o=n(25),r=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this._prefix,"_").concat(e)}}]),e}();r._isSupported=void 0,r._prefix="puzztool",t.a=r},178:function(e,t,n){"use strict";var a=n(38);function o(e,t,n){return(o="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(a.a)(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}n.d(t,"a",function(){return o})},180:function(e,t,n){"use strict";var a=n(3),o=n(4),r=n(6),c=n(5),i=n.n(c),s=n(1),u=n.n(s),l=n(2),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=Object(o.a)(e,["className"]),r=Object(l.f)(n),c=r[0],s=r[1],p=Object(l.d)(c);return u.a.createElement("div",Object(a.a)({},s,{role:"toolbar",className:i()(t,p)}))},t}(u.a.Component);t.a=Object(l.a)("btn-toolbar",p)},193:function(e,t,n){"use strict";var a=n(3),o=n(4),r=n(6),c=n(5),i=n.n(c),s=n(1),u=n.n(s),l=n(0),p=n.n(l),f=n(18),h=n.n(f),m=(n(10),n(2)),d={glyph:p.a.string.isRequired},b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e,t=this.props,n=t.glyph,r=t.className,c=Object(o.a)(t,["glyph","className"]),s=Object(m.f)(c),l=s[0],p=s[1],f=Object(a.a)({},Object(m.d)(l),((e={})[Object(m.e)(l,n)]=!0,e));return u.a.createElement("span",Object(a.a)({},p,{className:i()(r,f)}))},t}(u.a.Component);b.propTypes=d;var v=Object(m.a)("glyphicon",b),g={$bs_formGroup:p.a.object},y=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.getGlyph=function(e){switch(e){case"success":return"ok";case"warning":return"warning-sign";case"error":return"remove";default:return null}},n.renderDefaultFeedback=function(e,t,n,o){var r=this.getGlyph(e&&e.validationState);return r?u.a.createElement(v,Object(a.a)({},o,{glyph:r,className:i()(t,n)})):null},n.render=function(){var e=this.props,t=e.className,n=e.children,r=Object(o.a)(e,["className","children"]),c=Object(m.f)(r),s=c[0],l=c[1],p=Object(m.d)(s);if(!n)return this.renderDefaultFeedback(this.context.$bs_formGroup,t,p,l);var f=u.a.Children.only(n);return u.a.cloneElement(f,Object(a.a)({},l,{className:i()(f.props.className,t,p)}))},t}(u.a.Component);y.defaultProps={bsRole:"feedback"},y.contextTypes=g;var O=Object(m.a)("form-control-feedback",y),j={componentClass:h.a},S=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,n=e.className,r=Object(o.a)(e,["componentClass","className"]),c=Object(m.f)(r),s=c[0],l=c[1],p=Object(m.d)(s);return u.a.createElement(t,Object(a.a)({},l,{className:i()(n,p)}))},t}(u.a.Component);S.propTypes=j,S.defaultProps={componentClass:"p"};var C=Object(m.a)("form-control-static",S),_=n(11),k={componentClass:h.a,type:p.a.string,id:p.a.string,inputRef:p.a.func},E={$bs_formGroup:p.a.object},N=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e,t=this.context.$bs_formGroup,n=t&&t.controlId,r=this.props,c=r.componentClass,s=r.type,l=r.id,p=void 0===l?n:l,f=r.inputRef,h=r.className,d=r.bsSize,b=Object(o.a)(r,["componentClass","type","id","inputRef","className","bsSize"]),v=Object(m.f)(b),g=v[0],y=v[1];if("file"!==s&&(e=Object(m.d)(g)),d){var O=_.a[d]||d;e[Object(m.e)({bsClass:"input"},O)]=!0}return u.a.createElement(c,Object(a.a)({},y,{type:s,id:p,ref:f,className:i()(h,e)}))},t}(u.a.Component);N.propTypes=k,N.defaultProps={componentClass:"input"},N.contextTypes=E,N.Feedback=O,N.Static=C;t.a=Object(m.a)("form-control",Object(m.b)([_.b.SMALL,_.b.LARGE],N))},239:function(e,t,n){},240:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a=n(24),o=n(25),r=n(40),c=n(38),i=n(39),s=n(1),u=n.n(s),l=n(178),p=n(193),f=n(180),h=n(66),m=n(51),d=n(175),b=n(177),v=(n(239),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e)))._text="",n._input=void 0,n._homogeneous=!0,n.state={text:"",output:"",homogeneous:!0},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(l.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this),this._input&&this._input.focus()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"AutoConvertStream"},u.a.createElement(p.a,{className:"AutoConvertStream-input",inputRef:function(t){e._input=t},onChange:function(t){return e.onTextChanged(t)},placeholder:"Text",value:this.state.text}),u.a.createElement("pre",{className:"AutoConvertStream-output"},this.state.output),u.a.createElement(f.a,{className:"AutoConvertStream-commands"},u.a.createElement(h.a,null,u.a.createElement(m.a,{onClick:function(t){return e.onClearClick(t)}},"Clear"),u.a.createElement(m.a,{onClick:function(t){return e.toggleHomogeneous(t)},active:this.state.homogeneous},"Force Consistent Encoding"))))}},{key:"getLocalStorageKey",value:function(){return"AutoConvertStream"}},{key:"onSaveState",value:function(){return{text:this._text,homogeneous:this._homogeneous}}},{key:"onRestoreState",value:function(e){null!==e&&(this._text=e.text,this._homogeneous=e.homogeneous)}},{key:"onUpdateState",value:function(){this.setState({text:this._text,output:this.calculateOutput(),homogeneous:this._homogeneous})}},{key:"onTextChanged",value:function(e){var t=e.target;this._text=t.value,this.updateState()}},{key:"onClearClick",value:function(e){this._text="",this.updateState()}},{key:"toggleHomogeneous",value:function(e){this._homogeneous=!this._homogeneous,this.updateState()}},{key:"calculateOutput",value:function(){return b.StringAutoConvert.convertString(this._text,this._homogeneous)}}]),t}(d.a)),g=(n(240),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"AutoConvert"},u.a.createElement("div",{className:"AutoConvert-content"},u.a.createElement("div",{className:"AutoConvert-info"},u.a.createElement("h2",null,"AutoConvert"),u.a.createElement("p",null,'AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext. If all of your text is in the same encoding, you can select "force consistent encoding". This can be useful for ambigious strings.'),u.a.createElement("p",null,"Some of the supported encodings are:"),u.a.createElement("ul",null,u.a.createElement("li",null,"ASCII (A=65, B=66)"),u.a.createElement("li",null,"Five bit binary (A=00001, B=00010)"),u.a.createElement("li",null,"Eight bit binary (A=01100001, B=01100010)"),u.a.createElement("li",null,"Ordinal (A=1, B=2)"))),u.a.createElement(v,null)))}}]),t}(s.Component));t.default=g}}]);
//# sourceMappingURL=13.dab61576.chunk.js.map