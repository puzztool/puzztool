(window.webpackJsonppuzztool=window.webpackJsonppuzztool||[]).push([[13],{125:function(e,t,n){"use strict";var r=n(28),a=n(29),o=n(128),i=n.n(o),c=n(126),l=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"isSupported",value:function(){if(void 0===this._isSupported){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),this._isSupported=!0}catch(n){this._isSupported=n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&0!==e.length}this._isSupported&&this.clearOnVersionMismatch()}return this._isSupported}},{key:"getItem",value:function(e){return this.isSupported()?window.localStorage.getItem(this.getKey(e)):null}},{key:"getObject",value:function(e){if(this.isSupported()){var t=window.localStorage.getItem(this.getKey(e));if(null!==t)return JSON.parse(t)}return null}},{key:"setItem",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),t)}},{key:"setObject",value:function(e,t){this.isSupported()&&window.localStorage.setItem(this.getKey(e),JSON.stringify(t))}},{key:"clear",value:function(){this.isSupported()&&window.localStorage.clear()}},{key:"getKey",value:function(e){return"".concat(this.STORAGE_KEY_PREFIX,"_").concat(e)}},{key:"didVersionChange",value:function(e,t){try{if(e)return 0!==i()(t,e)}catch(n){}return!0}},{key:"clearOnVersionMismatch",value:function(){var e=this.getItem(this.VERSION_STORAGE_KEY);this.didVersionChange(e,c.a)&&(this.clear(),this.setItem(this.VERSION_STORAGE_KEY,c.a))}}]),e}();l.VERSION_STORAGE_KEY="appVersion",l.STORAGE_KEY_PREFIX="puzztool",l._isSupported=void 0,t.a=l},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="0.7.0"},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n(125);function o(e,t,n){Object(r.useLayoutEffect)((function(){return t(a.a.getObject(e))}),[e]),Object(r.useEffect)((function(){return a.a.setObject(e,n())}))}},210:function(e,t,n){},211:function(e,t,n){},217:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(155),i=n(212),c=n.n(i),l=n(129),u=n.n(l),s=n(150),d=n.n(s),h=n(148),f=n.n(h),p=n(214),m=n.n(p),v=n(141),E=n.n(v),S=n(149),g=n.n(S);var y=n(158),O=n(130),b=n.n(O),w=n(124);n(210);function _(e){return e.split(/\r?\n/)}function I(e,t,n){var r=new w.WordSearchSolver;return r.setDirections(n),r.setGrid(e),r.setWords(t),function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var l=i.value,u=Array.from({length:l.length},(function(){return!1}));n.push(u)}}catch(b){a=!0,o=b}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}var s=!0,d=!1,h=void 0;try{for(var f,p=t[Symbol.iterator]();!(s=(f=p.next()).done);s=!0){var m=f.value,v=!0,E=!1,S=void 0;try{for(var g,y=m.points[Symbol.iterator]();!(v=(g=y.next()).done);v=!0){var O=g.value;n[O.y][O.x]=!0}}catch(b){E=!0,S=b}finally{try{v||null==y.return||y.return()}finally{if(E)throw S}}}}catch(b){d=!0,h=b}finally{try{s||null==p.return||p.return()}finally{if(d)throw h}}return n}(e,r.findWords())}function k(e){return e?"WordSearchOutput-highlightChar":""}var C=function(e){var t=e.gridInputText.trim();if(!t)return null;var n=_(t),r=[],o=!0,i=!1,c=void 0;try{for(var l,u=n[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value;r.push(s.split(""))}}catch(m){i=!0,c=m}finally{try{o||null==u.return||u.return()}finally{if(i)throw c}}var d,h,f=(d=e.useCardinals,h=e.useDiagonals,d&&h?w.WordSearchDirection.CardinalAndDiagonal:d?w.WordSearchDirection.Cardinal:h?w.WordSearchDirection.Diagonal:w.WordSearchDirection.None),p=I(r,_(e.wordListInputText).filter((function(e){return e.length>0})),f);return a.a.createElement(b.a,{className:"WordSearchOutput",borderless:!0},a.a.createElement("tbody",null,r.map((function(e,t){return a.a.createElement("tr",{key:t},e.map((function(e,n){return a.a.createElement("td",{className:k(p[t][n]),key:"".concat(t,",").concat(n)},e)})))}))))};n(211);var x=function(){var e=Object(r.useCallback)((function(e){e&&e.focus()}),[]),t=Object(r.useState)(""),n=Object(o.a)(t,2),i=n[0],l=n[1],s=Object(r.useState)(""),h=Object(o.a)(s,2),p=h[0],v=h[1],S=Object(r.useState)(!0),O=Object(o.a)(S,2),b=O[0],w=O[1],_=Object(r.useState)(!0),I=Object(o.a)(_,2),k=I[0],x=I[1];return Object(y.a)("WordSearchComponent",(function(e){e&&(l(e.gridInputText),v(e.wordListInputText),w(e.useCardinals),x(e.useDiagonals))}),(function(){return{gridInputText:i,wordListInputText:p,useCardinals:b,useDiagonals:k}})),a.a.createElement("div",{className:"WordSearchComponent"},a.a.createElement(f.a,{fluid:!0},a.a.createElement(g.a,{noGutters:!0},a.a.createElement(d.a,{md:4},a.a.createElement(u.a,{className:"WordSearchComponent-ListInput"},a.a.createElement(u.a.Header,null,"Enter the list of words to find, one word per line"),a.a.createElement(u.a.Body,null,a.a.createElement(E.a,{as:"textarea",onChange:function(e){var t=e.target;v(t.value)},placeholder:"Word List To Find",value:p}),function(){if(!b&&!k)return a.a.createElement(c.a,{variant:"warning"},"No directions are selected. No results will be shown.")}(),a.a.createElement(m.a,{checked:k,id:"WordSearchComponent-checkbox-diagonal",label:"Use diagonal directions",onChange:function(e){var t=e.target;x(t.checked)},type:"checkbox"}),a.a.createElement(m.a,{checked:b,id:"WordSearchComponent-checkbox-cardinal",label:"Use cardinal directions",onChange:function(e){var t=e.target;w(t.checked)},type:"checkbox"})))),a.a.createElement(d.a,{md:8},a.a.createElement(u.a,{className:"WordSearchComponent-GridInput"},a.a.createElement(u.a.Header,null,"Enter the word search grid, one row of letters per line"),a.a.createElement(u.a.Body,null,a.a.createElement(E.a,{as:"textarea",onChange:function(e){var t=e.target;l(t.value)},placeholder:"Grid Text",ref:e,spellCheck:!1,value:i}))))),a.a.createElement(g.a,{noGutters:!0},a.a.createElement(d.a,{md:12},a.a.createElement(u.a,{className:"WordSearchComponent-GridOutput"},a.a.createElement(u.a.Header,null,"Output"),a.a.createElement(u.a.Body,null,a.a.createElement(C,{gridInputText:i,useCardinals:b,useDiagonals:k,wordListInputText:p})))))))};n(217);t.default=function(){return a.a.createElement("div",{className:"WordSearch"},a.a.createElement("h2",null,"Word Search"),a.a.createElement(x,null))}}}]);
//# sourceMappingURL=13.40bfeb3a.chunk.js.map