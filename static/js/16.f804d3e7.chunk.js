(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[16],{102:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a="0.7.0"},103:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"a",(function(){return p}));var a,n=r(104),o=r.n(n),c=r(102),i="appVersion",l="puzztool";function u(e){return"".concat(l,"_").concat(e)}function s(){var e,t;(function(e,t){try{if(e)return 0!==o()(t,e)}catch(r){}return!0})(function(e){if(d())return window.localStorage.getItem(u(e));return null}(i),c.a)&&(p(),e=i,t=c.a,d()&&window.localStorage.setItem(u(e),t))}function d(){if(void 0===a){var e=window.localStorage,t="__storage_test__";try{e.setItem(t,t),e.removeItem(t),a=!0}catch(r){a=r instanceof DOMException&&(22===r.code||1014===r.code||"QuotaExceededError"===r.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.name)&&0!==e.length}a&&s()}return a}function f(e){if(d()){var t=window.localStorage.getItem(u(e));if(null!==t)return JSON.parse(t)}return null}function m(e,t){d()&&window.localStorage.setItem(u(e),JSON.stringify(t))}function p(){d()&&window.localStorage.clear()}},104:function(e,t,r){var a,n,o;n=[],void 0===(o="function"===typeof(a=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function t(e){var t,r,a=e.replace(/^v/,"").replace(/\+.*$/,""),n=(r="-",-1===(t=a).indexOf(r)?t.length:t.indexOf(r)),o=a.substring(0,n).split(".");return o.push(a.substring(n+1)),o}function r(e){return isNaN(Number(e))?e:Number(e)}function a(t){if("string"!==typeof t)throw new TypeError("Invalid argument expected string");if(!e.test(t))throw new Error("Invalid argument not valid semver ('"+t+"' received)")}function n(e,n){[e,n].forEach(a);for(var o=t(e),c=t(n),i=0;i<Math.max(o.length-1,c.length-1);i++){var l=parseInt(o[i]||0,10),u=parseInt(c[i]||0,10);if(l>u)return 1;if(u>l)return-1}var s=o[o.length-1],d=c[c.length-1];if(s&&d){var f=s.split(".").map(r),m=d.split(".").map(r);for(i=0;i<Math.max(f.length,m.length);i++){if(void 0===f[i]||"string"===typeof m[i]&&"number"===typeof f[i])return-1;if(void 0===m[i]||"string"===typeof f[i]&&"number"===typeof m[i])return 1;if(f[i]>m[i])return 1;if(m[i]>f[i])return-1}}else if(s||d)return s?-1:1;return 0}var o=[">",">=","=","<","<="],c={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return n.compare=function(e,t,r){!function(e){if("string"!==typeof e)throw new TypeError("Invalid operator type, expected string but got "+typeof e);if(-1===o.indexOf(e))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(r);var a=n(e,t);return c[r].indexOf(a)>-1},n})?a.apply(t,n):a)||(e.exports=o)},106:function(e,t,r){"use strict";var a=r(1),n=r(0),o=r.n(n),c=r(3),i=r.n(c);t.a=function(e){return o.a.forwardRef((function(t,r){return o.a.createElement("div",Object(a.a)({},t,{ref:r,className:i()(t.className,e)}))}))}},107:function(e,t,r){"use strict";var a=r(1),n=r(2),o=r(3),c=r.n(o),i=r(0),l=r.n(i),u=r(4),s=r(30),d=r(106),f=r(48),m=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,i=e.variant,s=e.as,d=void 0===s?"img":s,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.b)(r,"card-img");return l.a.createElement(d,Object(a.a)({ref:t,className:c()(i?m+"-"+i:m,o)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var p=m,b=Object(d.a)("h5"),v=Object(d.a)("h6"),g=Object(s.a)("card-body"),h=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.bg,d=e.text,m=e.border,p=e.body,b=e.children,v=e.as,h=void 0===v?"div":v,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(u.b)(r,"card"),w=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return l.a.createElement(f.a.Provider,{value:w},l.a.createElement(h,Object(a.a)({ref:t},O,{className:c()(o,E,s&&"bg-"+s,d&&"text-"+d,m&&"border-"+m)}),p?l.a.createElement(g,null,b):b))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=p,h.Title=Object(s.a)("card-title",{Component:b}),h.Subtitle=Object(s.a)("card-subtitle",{Component:v}),h.Body=g,h.Link=Object(s.a)("card-link",{Component:"a"}),h.Text=Object(s.a)("card-text",{Component:"p"}),h.Header=Object(s.a)("card-header"),h.Footer=Object(s.a)("card-footer"),h.ImgOverlay=Object(s.a)("card-img-overlay");t.a=h},213:function(e,t,r){},229:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(47),c=r(107),i=r(30),l=Object(i.a)("card-deck"),u=r(103),s=r(102);r(213);t.default=function(){return n.a.createElement("div",{className:"Settings"},n.a.createElement(l,null,n.a.createElement(c.a,null,n.a.createElement(c.a.Header,null,"Saved state"),n.a.createElement(c.a.Body,null,n.a.createElement("p",null,"The most recent inputs to each tool are stored in the browser's local storage. In the event that state becomes corrupted it can be cleared using the button below."),n.a.createElement(o.a,{onClick:function(){Object(u.a)()},variant:"danger"},"Clear saved state"))),n.a.createElement(c.a,null,n.a.createElement(c.a.Header,null,"About"),n.a.createElement(c.a.Body,null,n.a.createElement("h3",null,"PuzzTool"),"Version: ",s.a,n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/puzztool/puzztool/",rel:"noopener noreferrer",target:"_blank"},"Project page")))))}}}]);
//# sourceMappingURL=16.f804d3e7.chunk.js.map