(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[1],{51:function(e,n,t){"use strict";function a(){return[{children:[{description:"Word Search Solver",name:"Word Search",url:"/wordsearch"}],description:"Automated puzzle solvers",name:"Solvers",rootUrl:"/solvers"},{children:[{description:" A Vignere cipher which uses plaintext as the key",name:"Autokey",url:"/autokey"},{description:"Letters are shifted by a fixed value",name:"Caesar",url:"/caesar"},{description:"Letters are mapped based on a key word",name:"Vignere",url:"/vigenere"}],description:"Scrambled letters",name:"Ciphers",rootUrl:"/cipher"},{children:[{description:"Mapping numbers to letters (ASCII, Binary, Ordinal)",name:"AutoConvert",url:"/autoconvert"},{description:"Six dots in a two-by-three grid",name:"Braille",url:"/braille"},{description:"Dots and dashes with separations",name:"Morse Code",url:"/morse"},{description:"Parts of a tic-tac-toe grid or X, some with dot",name:"Pigpen",url:"/pigpen"},{description:" Positions of two different flags",name:"Semaphore",url:"/semaphore"}],description:"Different ways to represent letters",name:"Encodings",rootUrl:"/encoding"},{children:[{description:"Static display of number to letter mapping",name:"Character Encodings",url:"/characterencodings"},{description:"Words used to clearly identify a letter",name:"NATO Alphabet",url:"/nato"},{description:"Different simple flags which convey a letter",name:"Naval Flags",url:"/navalflags"},{description:"Find a resistor value using different colored bands",name:"Resistors",url:"/resistors"}],description:"Miscellaneous information",name:"Reference",rootUrl:"/reference"}]}t.d(n,"a",(function(){return a}))},58:function(e,n,t){e.exports=t(77)},72:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(35),i=t.n(r),l=t(34),c=t(18),s=t(8),d=t.n(s),u=t(33),m=t(30),p=t(25),h=t(21),f=t(51);var g=function(e){var n,t=e.category.name,a=e.category.rootUrl;return o.a.createElement(h.LinkContainer,{key:t,onClick:function(e){return e.preventDefault()},to:a},o.a.createElement(p.a,{id:(n=t,n.toLowerCase().replace(/[^a-z]/,"").concat("-dropdown")),title:t},e.category.children.map((function(e){return o.a.createElement(h.LinkContainer,{key:"".concat(t,"-").concat(e.name),to:a+e.url},o.a.createElement(p.a.Item,{eventKey:t+e.name},e.name))}))))};t(72);var v=function(){return o.a.createElement(m.a,{bg:"dark",className:"AppNav",collapseOnSelect:!0,expand:"md",onSelect:function(){return document.activeElement.blur()},sticky:"top",variant:"dark"},o.a.createElement(h.LinkContainer,{to:"/"},o.a.createElement(m.a.Brand,null,"PuzzTool")),o.a.createElement(m.a.Toggle,null),o.a.createElement(m.a.Collapse,null,o.a.createElement(u.a,null,Object(f.a)().map((function(e){return o.a.createElement(g,{key:e.name,category:e})}))),o.a.createElement(u.a,null,o.a.createElement(h.LinkContainer,{to:"/help",onClick:function(e){return e.preventDefault()}},o.a.createElement(p.a,{title:"Help",id:"help-dropdown"},o.a.createElement(h.LinkContainer,{to:"/help/settings"},o.a.createElement(p.a.Item,{eventKey:"Help.Settings"},"Settings")))),o.a.createElement(u.a.Link,{eventKey:"Help.Feedback",href:"https://github.com/puzztool/puzztool/issues/new",target:"_blank"},"Feedback"))))};t(74);var E=function(e){return o.a.createElement("div",{className:"Loading"},e.error?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-error"}),o.a.createElement("div",null,"Failed to load content")):e.timedOut?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-error"}),o.a.createElement("div",null,"Timed out while loading content")):e.pastDelay?o.a.createElement("div",{className:"Loading-content"},o.a.createElement("div",{className:"Loading-spinner"}),o.a.createElement("div",null,"Loading")):null)},b=(t(75),d()({loader:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,194))},loading:E,timeout:1e4})),w=d()({loader:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,200))},loading:E,timeout:1e4}),k=d()({loader:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,202))},loading:E,timeout:1e4}),y=d()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,195))},loading:E,timeout:1e4}),L=d()({loader:function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,199))},loading:E,timeout:1e4}),C=d()({loader:function(){return Promise.all([t.e(0),t.e(13)]).then(t.bind(null,197))},loading:E,timeout:1e4}),P=d()({loader:function(){return t.e(18).then(t.bind(null,189))},loading:E,timeout:1e4}),S=d()({loader:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,198))},loading:E,timeout:1e4}),A=d()({loader:function(){return Promise.all([t.e(0),t.e(15)]).then(t.bind(null,190))},loading:E,timeout:1e4}),N=d()({loader:function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,191))},loading:E,timeout:1e4}),z=d()({loader:function(){return t.e(17).then(t.bind(null,192))},loading:E,timeout:1e4}),W=d()({loader:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,193))},loading:E,timeout:1e4}),U=d()({loader:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,196))},loading:E,timeout:1e4}),x=d()({loader:function(){return t.e(14).then(t.bind(null,203))},loading:E,timeout:1e4}),D=d()({loader:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,201))},loading:E,timeout:1e4});var O=function(){return o.a.createElement(l.HashRouter,null,o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement("div",{className:"App-content"},o.a.createElement(c.d,{exact:!0,path:"/",component:P}),o.a.createElement(c.d,{path:"/cipher/autokey",component:k}),o.a.createElement(c.d,{path:"/cipher/caesar",component:L}),o.a.createElement(c.d,{path:"/cipher/vigenere",component:D}),o.a.createElement(c.d,{path:"/encoding/autoconvert",component:w}),o.a.createElement(c.d,{path:"/encoding/braille",component:y}),o.a.createElement(c.d,{path:"/encoding/morse",component:S}),o.a.createElement(c.d,{path:"/encoding/pigpen",component:z}),o.a.createElement(c.d,{path:"/encoding/semaphore",component:U}),o.a.createElement(c.d,{path:"/help/settings",component:x}),o.a.createElement(c.d,{path:"/reference/characterencodings",component:C}),o.a.createElement(c.d,{path:"/reference/nato",component:A}),o.a.createElement(c.d,{path:"/reference/navalflags",component:N}),o.a.createElement(c.d,{path:"/reference/resistors",component:W}),o.a.createElement(c.d,{path:"/solvers/wordsearch",component:b}))))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(76);i.a.render(o.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");R?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(n,e)}))}}()}},[[58,2,3]]]);
//# sourceMappingURL=main.0aa3d578.chunk.js.map