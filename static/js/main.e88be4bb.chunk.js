(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[0],{103:function(e,n,t){e.exports={container:"AppNav_container__6WTjY",logo:"AppNav_logo__wlLUg"}},104:function(e,n,t){e.exports={header:"PuzzToolPage_header__39EuD",title:"PuzzToolPage_title__1UlFh"}},105:function(e,n,t){e.exports={container:"KeyedCipherStream_container__2Hs_l",input:"KeyedCipherStream_input__3zMqf"}},107:function(e,n,t){"use strict";var r=t(81),c=t(104),o=t.n(c),i=t(1);n.a=function(e){var n=e.children,t=e.description,c=e.title;return Object(i.jsx)(r.a,{title:c,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:o.a.header,children:[Object(i.jsx)("h2",{className:o.a.title,children:c}),function(){if(t)return Object(i.jsx)("div",{children:t})}()]}),n]})})}},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(0);function c(){return Object(r.useCallback)((function(e){e&&e.focus()}),[])}},115:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"e",(function(){return u})),t.d(n,"f",(function(){return p})),t.d(n,"g",(function(){return b}));var r=t(68),c=t(11),o={encoding:r.BrailleEncoding.None,stream:[]},i=Object(c.b)({name:"brailleEncoding",initialState:o,reducers:{append:function(e,n){e.encoding=r.BrailleEncoding.None,e.stream.push(n.payload)},backspace:function(e){e.stream.pop()},clear:function(e){Object.assign(e,o)},selectTab:function(e,n){var t;e.selectedTab=null!==(t=n.payload)&&void 0!==t?t:void 0},setEncoding:function(e,n){e.encoding=n.payload},space:function(e){e.stream.push(r.BrailleEncoding.None)}}}),a=i.actions,s=a.append,d=a.backspace,l=a.clear,u=a.selectTab,p=a.setEncoding,b=a.space;n.d=i.reducer},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return d})),t.d(n,"e",(function(){return l}));var r=t(11),c={stream:""},o=Object(r.b)({name:"morseEncoding",initialState:c,reducers:{append:function(e,n){e.stream+=n.payload},backspace:function(e){e.stream=e.stream.slice(0,-1)},clear:function(e){Object.assign(e,c)},selectTab:function(e,n){var t;e.selectedTab=null!==(t=n.payload)&&void 0!==t?t:void 0}}}),i=o.actions,a=i.append,s=i.backspace,d=i.clear,l=i.selectTab;n.d=o.reducer},117:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return d})),t.d(n,"e",(function(){return l})),t.d(n,"f",(function(){return u})),t.d(n,"g",(function(){return p}));var r=t(11),c={directions:[],stream:""},o=Object(r.b)({name:"semaphoreEncoding",initialState:c,reducers:{append:function(e,n){e.directions.length=0,e.stream+=n.payload},backspace:function(e){e.stream=e.stream.slice(0,-1)},clear:function(e){Object.assign(e,c)},selectTab:function(e,n){var t;e.selectedTab=null!==(t=n.payload)&&void 0!==t?t:void 0},setDirections:function(e,n){e.directions=n.payload},space:function(e){e.stream+=" "}}}),i=o.actions,a=i.append,s=i.backspace,d=i.clear,l=i.selectTab,u=i.setDirections,p=i.space;n.d=o.reducer},118:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a}));var r=t(11),c=Object(r.b)({name:"resistor",initialState:{bands:[0,0,0,-1,1]},reducers:{selectTab:function(e,n){var t;e.selectedTab=null!==(t=n.payload)&&void 0!==t?t:void 0},setBand:function(e,n){var t=n.payload,r=t.bandIndex,c=t.colorIndex;e.bands[r]=c}}}),o=c.actions,i=o.selectTab,a=o.setBand;n.a=c.reducer},121:function(e,n,t){"use strict";function r(){return[{children:[{description:"Word Search Solver",name:"Word Search",url:"/wordsearch"}],description:"Automated puzzle solvers",name:"Solvers",rootUrl:"/solvers"},{children:[{description:" A Vignere cipher which uses plaintext as the key",name:"Autokey",url:"/autokey"},{description:"Letters are shifted by a fixed value",name:"Caesar",url:"/caesar"},{description:"Letters are mapped based on a key word",name:"Vignere",url:"/vigenere"}],description:"Scrambled letters",name:"Ciphers",rootUrl:"/cipher"},{children:[{description:"Mapping numbers to letters (ASCII, Binary, Ordinal)",name:"AutoConvert",url:"/autoconvert"},{description:"Six dots in a two-by-three grid",name:"Braille",url:"/braille"},{description:"Dots and dashes with separations",name:"Morse Code",url:"/morse"},{description:"Parts of a tic-tac-toe grid or X, some with dot",name:"Pigpen",url:"/pigpen"},{description:" Positions of two different flags",name:"Semaphore",url:"/semaphore"}],description:"Different ways to represent letters",name:"Encodings",rootUrl:"/encoding"},{children:[{description:"Static display of number to letter mapping",name:"Character Encodings",url:"/characterencodings"},{description:"Words used to clearly identify a letter",name:"NATO Alphabet",url:"/nato"},{description:"Different simple flags which convey a letter",name:"Naval Flags",url:"/navalflags"},{description:"Find a resistor value using different colored bands",name:"Resistors",url:"/resistors"}],description:"Miscellaneous information",name:"Reference",rootUrl:"/reference"}]}t.d(n,"a",(function(){return r}))},124:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return l}));var r=t(11),c={conversion:t(72).a.decrypt,secret:"",text:""},o=Object(r.b)({name:"autokeyCipher",initialState:c,reducers:{clear:function(e){Object.assign(e,c)},setConversion:function(e,n){e.conversion=n.payload},setSecret:function(e,n){e.secret=n.payload},setText:function(e,n){e.text=n.payload}}}),i=o.actions,a=i.clear,s=i.setConversion,d=i.setSecret,l=i.setText;n.b=o.reducer},127:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return s}));var r=t(11),c={text:""},o=Object(r.b)({name:"caesarCipher",initialState:c,reducers:{clear:function(e){Object.assign(e,c)},setText:function(e,n){e.text=n.payload}}}),i=o.actions,a=i.clear,s=i.setText;n.b=o.reducer},128:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"e",(function(){return l}));var r=t(11),c={conversion:t(72).a.decrypt,secret:"",text:""},o=Object(r.b)({name:"vigenereCipher",initialState:c,reducers:{clear:function(e){Object.assign(e,c)},setConversion:function(e,n){e.conversion=n.payload},setSecret:function(e,n){e.secret=n.payload},setText:function(e,n){e.text=n.payload}}}),i=o.actions,a=i.clear,s=i.setConversion,d=i.setSecret,l=i.setText;n.b=o.reducer},129:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return d}));var r=t(11),c={homogeneous:!0,text:""},o=Object(r.b)({name:"autoConvert",initialState:c,reducers:{clear:function(e){Object.assign(e,c)},setHomogeneous:function(e,n){e.homogeneous=n.payload},setText:function(e,n){e.text=n.payload}}}),i=o.actions,a=i.clear,s=i.setHomogeneous,d=i.setText;n.b=o.reducer},150:function(e,n,t){"use strict";t.d(n,"b",(function(){return o}));var r=t(11),c=Object(r.b)({name:"characterEncoding",initialState:{},reducers:{selectTab:function(e,n){var t;e.selectedTab=null!==(t=n.payload)&&void 0!==t?t:void 0}}}),o=c.actions.selectTab;n.a=c.reducer},151:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return s})),t.d(n,"e",(function(){return d})),t.d(n,"f",(function(){return l}));var r=t(11),c=Object(r.b)({name:"wordSearch",initialState:{canBend:!1,grid:"",useCardinals:!0,useDiagonals:!0,wordList:""},reducers:{setCanBend:function(e,n){e.canBend=n.payload},setGrid:function(e,n){e.grid=n.payload},setUseCardinals:function(e,n){e.useCardinals=n.payload},setUseDiagonals:function(e,n){e.useDiagonals=n.payload},setWordList:function(e,n){e.wordList=n.payload}}}),o=c.actions,i=o.setCanBend,a=o.setGrid,s=o.setUseCardinals,d=o.setUseDiagonals,l=o.setWordList;n.a=c.reducer},158:function(e,n,t){e.exports={container:"NotFound_container__3okh_"}},159:function(e,n,t){e.exports={content:"App_content__1Wt3K"}},211:function(e,n,t){},212:function(e,n,t){"use strict";t.r(n);var r=t(19),c=t(0),o=t.n(c),i=t(27),a=t.n(i),s=t(152),d=t(108),l=t(12),u=t(20),p=t.n(u),b=t(81),f=t(71),h=t(67),j=t(58),g=t(47),m=t(121),v=t.p+"static/media/puzztool_banner_white.0b7fbfa4.svg",x=t(1);var O=function(e){var n,t=e.category.name,r=e.category.rootUrl;return Object(x.jsx)(g.LinkContainer,{onClick:function(e){return e.preventDefault()},to:r,children:Object(x.jsx)(j.a,{id:(n=t,n.toLowerCase().replace(/[^a-z]/,"").concat("-dropdown")),title:t,children:e.category.children.map((function(e){return Object(x.jsx)(g.LinkContainer,{to:r+e.url,children:Object(x.jsx)(j.a.Item,{eventKey:t+e.name,children:e.name})},"".concat(t,"-").concat(e.name))}))})},t)},y=t(103),C=t.n(y);var w=function(){return Object(x.jsxs)(h.a,{bg:"dark",className:C.a.container,collapseOnSelect:!0,expand:"md",onSelect:function(){return document.activeElement.blur()},sticky:"top",variant:"dark",children:[Object(x.jsx)(g.LinkContainer,{to:"/",children:Object(x.jsx)(h.a.Brand,{children:Object(x.jsx)("img",{className:C.a.logo,src:v,alt:"PuzzTool logo"})})}),Object(x.jsx)(h.a.Toggle,{}),Object(x.jsxs)(h.a.Collapse,{children:[Object(x.jsx)(f.a,{children:Object(m.a)().map((function(e){return Object(x.jsx)(O,{category:e},e.name)}))}),Object(x.jsxs)(f.a,{children:[Object(x.jsx)(g.LinkContainer,{to:"/help",onClick:function(e){return e.preventDefault()},children:Object(x.jsx)(j.a,{title:"Help",id:"help-dropdown",children:Object(x.jsx)(g.LinkContainer,{to:"/help/settings",children:Object(x.jsx)(j.a.Item,{eventKey:"Help.Settings",children:"Settings"})})})}),Object(x.jsx)(f.a.Link,{eventKey:"Help.Feedback",href:"https://github.com/puzztool/puzztool/issues/new",rel:"noreferrer",target:"_blank",children:"Feedback"})]})]})]})},k=t(50),_=t(107),S=t(158),T=t.n(S);var N=function(){return Object(x.jsx)(_.a,{title:"Not Found",children:Object(x.jsxs)("p",{className:T.a.container,children:["If this was reached in error, use the navigation options or go"," ",Object(x.jsx)(k.Link,{to:"/",children:"home"}),"."]})})},L=t(48),z=t.n(L);var B=function(e){return Object(x.jsx)("div",{children:e.error?Object(x.jsxs)("div",{className:z.a.content,children:[Object(x.jsx)("div",{className:z.a.error}),Object(x.jsx)("div",{children:"Failed to load content"})]}):e.timedOut?Object(x.jsxs)("div",{className:z.a.content,children:[Object(x.jsx)("div",{className:z.a.error}),Object(x.jsx)("div",{children:"Timed out while loading content"})]}):e.pastDelay?Object(x.jsxs)("div",{className:z.a.content,children:[Object(x.jsx)("div",{className:z.a.spinner}),Object(x.jsx)("div",{children:"Loading"})]}):null})},E=t(159),A=t.n(E),D=1e4,W=p()({loader:function(){return t.e(8).then(t.bind(null,258))},loading:B,timeout:D}),U=p()({loader:function(){return t.e(13).then(t.bind(null,266))},loading:B,timeout:D}),F=p()({loader:function(){return t.e(16).then(t.bind(null,267))},loading:B,timeout:D}),P=p()({loader:function(){return t.e(3).then(t.bind(null,260))},loading:B,timeout:D}),K=p()({loader:function(){return t.e(12).then(t.bind(null,265))},loading:B,timeout:D}),I=p()({loader:function(){return t.e(7).then(t.bind(null,262))},loading:B,timeout:D}),H=p()({loader:function(){return t.e(14).then(t.bind(null,254))},loading:B,timeout:D}),M=p()({loader:function(){return t.e(6).then(t.bind(null,263))},loading:B,timeout:D}),R=p()({loader:function(){return t.e(11).then(t.bind(null,255))},loading:B,timeout:D}),Q=p()({loader:function(){return t.e(10).then(t.bind(null,256))},loading:B,timeout:D}),G=p()({loader:function(){return t.e(15).then(t.bind(null,268))},loading:B,timeout:D}),J=p()({loader:function(){return t.e(5).then(t.bind(null,259))},loading:B,timeout:D}),V=p()({loader:function(){return t.e(4).then(t.bind(null,261))},loading:B,timeout:D}),X=p()({loader:function(){return t.e(9).then(t.bind(null,264))},loading:B,timeout:D}),q=p()({loader:function(){return t.e(17).then(t.bind(null,269))},loading:B,timeout:D});var Y=function(){return Object(x.jsx)(b.a,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:A.a.content,children:Object(x.jsxs)(l.g,{children:[Object(x.jsx)(l.d,{exact:!0,path:"/",component:H}),Object(x.jsx)(l.d,{exact:!0,path:"/cipher/autokey",component:F}),Object(x.jsx)(l.d,{exact:!0,path:"/cipher/caesar",component:K}),Object(x.jsx)(l.d,{exact:!0,path:"/cipher/vigenere",component:q}),Object(x.jsx)(l.d,{exact:!0,path:"/encoding/autoconvert",component:U}),Object(x.jsx)(l.d,{exact:!0,path:"/encoding/braille",component:P}),Object(x.jsx)(l.d,{exact:!0,path:"/encoding/morse",component:M}),Object(x.jsx)(l.d,{exact:!0,path:"/encoding/pigpen",component:G}),Object(x.jsx)(l.d,{exact:!0,path:"/encoding/semaphore",component:V}),Object(x.jsx)(l.d,{exact:!0,path:"/help/settings",component:X}),Object(x.jsx)(l.d,{exact:!0,path:"/reference/characterencodings",component:I}),Object(x.jsx)(l.d,{exact:!0,path:"/reference/nato",component:R}),Object(x.jsx)(l.d,{exact:!0,path:"/reference/navalflags",component:Q}),Object(x.jsx)(l.d,{exact:!0,path:"/reference/resistors",component:J}),Object(x.jsx)(l.d,{exact:!0,path:"/solvers/wordsearch",component:W}),Object(x.jsx)(l.d,{component:N})]})})]})})},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ee=function(e){e&&e instanceof Function&&t.e(18).then(t.bind(null,257)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))},ne=t(11),te=t(30),re=t(66),ce=t.n(re),oe=t(15),ie=t(124),ae=t(127),se=t(128),de=Object(oe.b)({autokey:ie.b,caesar:ae.b,vigenere:se.b}),le=t(129),ue=t(115),pe=t(150),be=t(116),fe=t(117),he=Object(oe.b)({autoConvert:le.b,braille:ue.d,character:pe.a,morse:be.d,semaphore:fe.d}),je=t(118),ge=t(151),me={key:"cipher",storage:ce.a},ve={key:"encoding",storage:ce.a},xe=function(){return Object(oe.b)({cipher:Object(te.g)(me,de),encoding:Object(te.g)(ve,he),resistor:je.a,wordSearch:ge.a})},Oe={key:"root",storage:ce.a},ye=function(){var e=xe(),n=Object(te.g)(Oe,e),t=Object(ne.a)({reducer:n,middleware:Object(ne.c)({serializableCheck:{ignoredActions:[te.a,te.f,te.b,te.c,te.d,te.e]}})});return{store:t,persistor:Object(te.h)(t)}},Ce=(t(211),document.getElementsByTagName("base")[0].getAttribute("href")||""),we=Object(r.a)({basename:Ce}),ke=ye(),_e=ke.store,Se=ke.persistor;a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(d.a,{store:_e,children:Object(x.jsx)(s.a,{persistor:Se,children:Object(x.jsx)(l.e,{history:we,children:Object(x.jsx)(Y,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");$?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Z(n,e)}))}}(),ee()},48:function(e,n,t){e.exports={content:"Loading_content__21QeK",error:"Loading_error__2QBtH",spinner:"Loading_spinner__3RQ_C",spin:"Loading_spin___Xl3K"}},72:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r,c=t(49),o=t(69),i=t(110),a=t(44),s=t(91),d=t(61),l=t(126),u=t(113),p=t(105),b=t.n(p),f=t(1);!function(e){e[e.encrypt=0]="encrypt",e[e.decrypt=1]="decrypt"}(r||(r={})),n.b=function(e){var n=Object(u.a)();return Object(f.jsxs)("div",{className:b.a.container,children:[Object(f.jsxs)(a.a,{className:b.a.input,children:[Object(f.jsx)(a.a.Header,{children:e.prompt}),Object(f.jsxs)(a.a.Body,{children:[Object(f.jsx)(s.a,{onChange:function(n){e.onTextChange(n.currentTarget.value)},placeholder:"Text",ref:n,value:e.text}),Object(f.jsx)(s.a,{onChange:function(n){e.onSecretChange(n.currentTarget.value)},placeholder:"Key",value:e.secret}),Object(f.jsxs)(i.a,{children:[Object(f.jsxs)(l.a,{name:"KeyedCipherStream-conversion",onChange:e.onConversionChange,type:"radio",value:e.conversion,children:[Object(f.jsx)(d.a,{id:"KeyedCipherStream-conversion-encrypt",value:r.encrypt,variant:"outline-primary",children:"Encrypt"}),Object(f.jsx)(d.a,{id:"KeyedCipherStream-conversion-decrypt",value:r.decrypt,variant:"outline-primary",children:"Decrypt"})]}),Object(f.jsx)(o.a,{children:Object(f.jsx)(c.a,{onClick:function(){e.onClear()},variant:"danger",children:"Clear"})})]})]})]}),Object(f.jsxs)(a.a,{children:[Object(f.jsx)(a.a.Header,{children:"Output"}),Object(f.jsx)(a.a.Body,{children:Object(f.jsx)("pre",{children:function(){var n=e.cipher;switch(n.key=e.secret,n.text=e.text,e.conversion){case r.encrypt:return n.encrypt();case r.decrypt:return n.decrypt();default:throw new Error("Invalid conversion type")}}()||" "})})]})]})}},81:function(e,n,t){"use strict";var r=t(154),c=t.n(r),o=t(1),i="PuzzTool";n.a=function(e){var n=e.children,t=e.title;return Object(o.jsx)(c.a,{title:t?"".concat(t," - ").concat(i):i,children:n})}}},[[212,1,2]]]);
//# sourceMappingURL=main.e88be4bb.chunk.js.map