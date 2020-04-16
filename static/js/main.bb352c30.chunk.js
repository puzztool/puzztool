(this.webpackJsonppuzztool=this.webpackJsonppuzztool||[]).push([[1],{65:function(e,t,n){"use strict";function a(){return[{children:[{description:"Word Search Solver",name:"Word Search",url:"/wordsearch"}],description:"Automated puzzle solvers",name:"Solvers",rootUrl:"/solvers"},{children:[{description:" A Vignere cipher which uses plaintext as the key",name:"Autokey",url:"/autokey"},{description:"Letters are shifted by a fixed value",name:"Caesar",url:"/caesar"},{description:"Letters are mapped based on a key word",name:"Vignere",url:"/vigenere"}],description:"Scrambled letters",name:"Ciphers",rootUrl:"/cipher"},{children:[{description:"Mapping numbers to letters (ASCII, Binary, Ordinal)",name:"AutoConvert",url:"/autoconvert"},{description:"Six dots in a two-by-three grid",name:"Braille",url:"/braille"},{description:"Dots and dashes with separations",name:"Morse Code",url:"/morse"},{description:"Parts of a tic-tac-toe grid or X, some with dot",name:"Pigpen",url:"/pigpen"},{description:" Positions of two different flags",name:"Semaphore",url:"/semaphore"}],description:"Different ways to represent letters",name:"Encodings",rootUrl:"/encoding"},{children:[{description:"Static display of number to letter mapping",name:"Character Encodings",url:"/characterencodings"},{description:"Words used to clearly identify a letter",name:"NATO Alphabet",url:"/nato"},{description:"Different simple flags which convey a letter",name:"Naval Flags",url:"/navalflags"},{description:"Find a resistor value using different colored bands",name:"Resistors",url:"/resistors"}],description:"Miscellaneous information",name:"Reference",rootUrl:"/reference"}]}n.d(t,"a",(function(){return a}))},68:function(e,t,n){e.exports=n.p+"static/media/puzztool_banner_white.b6754a16.svg"},76:function(e,t,n){e.exports=n(97)},91:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(15),o=n(0),r=n.n(o),l=n(34),i=n.n(l),c=n(27),s=n(12),d=n.n(s),m=n(47),u=n(44),p=n(38),h=n(30),g=n(65),v=n(68),f=n.n(v);var E=function(e){const t=e.category.name,n=e.category.rootUrl;return r.a.createElement(h.LinkContainer,{key:t,onClick:e=>e.preventDefault(),to:n},r.a.createElement(p.a,{id:(a=t,a.toLowerCase().replace(/[^a-z]/,"").concat("-dropdown")),title:t},e.category.children.map(e=>r.a.createElement(h.LinkContainer,{key:"".concat(t,"-").concat(e.name),to:n+e.url},r.a.createElement(p.a.Item,{eventKey:t+e.name},e.name)))));var a};n(91);var b=function(){return r.a.createElement(u.a,{bg:"dark",className:"AppNav",collapseOnSelect:!0,expand:"md",onSelect:()=>document.activeElement.blur(),sticky:"top",variant:"dark"},r.a.createElement(h.LinkContainer,{to:"/"},r.a.createElement(u.a.Brand,null,r.a.createElement("img",{className:"NavbarLogo",src:f.a,alt:"PuzzTool logo"}))),r.a.createElement(u.a.Toggle,null),r.a.createElement(u.a.Collapse,null,r.a.createElement(m.a,null,Object(g.a)().map(e=>r.a.createElement(E,{key:e.name,category:e}))),r.a.createElement(m.a,null,r.a.createElement(h.LinkContainer,{to:"/help",onClick:e=>e.preventDefault()},r.a.createElement(p.a,{title:"Help",id:"help-dropdown"},r.a.createElement(h.LinkContainer,{to:"/help/settings"},r.a.createElement(p.a.Item,{eventKey:"Help.Settings"},"Settings")))),r.a.createElement(m.a.Link,{eventKey:"Help.Feedback",href:"https://github.com/puzztool/puzztool/issues/new",target:"_blank"},"Feedback"))))},w=n(32);n(93);var y=function(){return r.a.createElement("div",{className:"NotFound"},r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"If this was reached in error, use the navigation options or go ",r.a.createElement(w.Link,{to:"/"},"home"),"."))};n(94);var k=function(e){return r.a.createElement("div",{className:"Loading"},e.error?r.a.createElement("div",{className:"Loading-content"},r.a.createElement("div",{className:"Loading-error"}),r.a.createElement("div",null,"Failed to load content")):e.timedOut?r.a.createElement("div",{className:"Loading-content"},r.a.createElement("div",{className:"Loading-error"}),r.a.createElement("div",null,"Timed out while loading content")):e.pastDelay?r.a.createElement("div",{className:"Loading-content"},r.a.createElement("div",{className:"Loading-spinner"}),r.a.createElement("div",null,"Loading")):null)};n(95);const x=d()({loader:()=>Promise.all([n.e(0),n.e(13),n.e(14)]).then(n.bind(null,230)),loading:k,timeout:1e4}),L=d()({loader:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,232)),loading:k,timeout:1e4}),N=d()({loader:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,233)),loading:k,timeout:1e4}),C=d()({loader:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,226)),loading:k,timeout:1e4}),P=d()({loader:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,231)),loading:k,timeout:1e4}),A=d()({loader:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,228)),loading:k,timeout:1e4}),S=d()({loader:()=>n.e(19).then(n.bind(null,221)),loading:k,timeout:1e4}),z=d()({loader:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,229)),loading:k,timeout:1e4}),W=d()({loader:()=>Promise.all([n.e(0),n.e(16)]).then(n.bind(null,222)),loading:k,timeout:1e4}),U=d()({loader:()=>Promise.all([n.e(0),n.e(17)]).then(n.bind(null,223)),loading:k,timeout:1e4}),F=d()({loader:()=>n.e(18).then(n.bind(null,224)),loading:k,timeout:1e4}),O=d()({loader:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,225)),loading:k,timeout:1e4}),T=d()({loader:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,227)),loading:k,timeout:1e4}),B=d()({loader:()=>n.e(15).then(n.bind(null,234)),loading:k,timeout:1e4}),D=d()({loader:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,235)),loading:k,timeout:1e4});var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement("div",{className:"App-content"},r.a.createElement(c.g,null,r.a.createElement(c.d,{exact:!0,path:"/",component:S}),r.a.createElement(c.d,{exact:!0,path:"/cipher/autokey",component:N}),r.a.createElement(c.d,{exact:!0,path:"/cipher/caesar",component:P}),r.a.createElement(c.d,{exact:!0,path:"/cipher/vigenere",component:D}),r.a.createElement(c.d,{exact:!0,path:"/encoding/autoconvert",component:L}),r.a.createElement(c.d,{exact:!0,path:"/encoding/braille",component:C}),r.a.createElement(c.d,{exact:!0,path:"/encoding/morse",component:z}),r.a.createElement(c.d,{exact:!0,path:"/encoding/pigpen",component:F}),r.a.createElement(c.d,{exact:!0,path:"/encoding/semaphore",component:T}),r.a.createElement(c.d,{exact:!0,path:"/help/settings",component:B}),r.a.createElement(c.d,{exact:!0,path:"/reference/characterencodings",component:A}),r.a.createElement(c.d,{exact:!0,path:"/reference/nato",component:W}),r.a.createElement(c.d,{exact:!0,path:"/reference/navalflags",component:U}),r.a.createElement(c.d,{exact:!0,path:"/reference/resistors",component:O}),r.a.createElement(c.d,{exact:!0,path:"/solvers/wordsearch",component:x}),r.a.createElement(c.d,{component:y}))))};const R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}n(96);const H=document.getElementsByTagName("base")[0].getAttribute("href")||"",K=Object(a.a)({basename:H});i.a.render(r.a.createElement(c.e,{history:K},r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="".concat("","/service-worker.js");R?(!function(e,t){fetch(e).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):j(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[76,2,3]]]);
//# sourceMappingURL=main.bb352c30.chunk.js.map