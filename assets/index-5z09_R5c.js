import{j as e,c as _,r as M,B as l,s as r,F as T,G as N,H as w,P as R,I as B}from"./index-Bhe6d_z7.js";import{T as E,a as f}from"./Tabs-DNWfR1e8.js";import{B as g,a as d}from"./ButtonToolbar-B7ZkcckU.js";import{C as t}from"./Card-B3YFRc5T.js";import{T as P}from"./Table-2OquoJO6.js";import"./ElementChildren-CgGc9bps.js";function b(s){return e.jsxs("svg",{className:s.className,viewBox:"0 0 30 30",children:[e.jsx("circle",{cx:"15",cy:"15",r:"15"}),"Sorry, your browser does not support inline SVG."]})}function k(s){return e.jsxs("svg",{className:s.className,viewBox:"0 0 90 30",children:[e.jsx("rect",{width:"90",height:"30"}),"Sorry, your browser does not support inline SVG."]})}function I(s){return e.jsx(e.Fragment,{children:Array.from(s.morseString).map((c,u)=>e.jsx("span",{className:s.className,children:c==="."?e.jsx(b,{}):e.jsx(k,{})},u))})}const H="_container_1qg1v_1",A="_inputCommands_1qg1v_8",V="_dot_button_1qg1v_14",O="_dash_button_1qg1v_15",q="_output_1qg1v_22",L="_morseOutput_1qg1v_26",a={container:H,inputCommands:A,dot_button:V,dash_button:O,output:q,morseOutput:L},K=s=>({stream:s.encoding.morse.stream}),$={append:T,backspace:N,clear:w},G=_(K,$);function z(s){M.useEffect(()=>{function i(n){if(n.defaultPrevented)return;let o=!1;(n.key==="Backspace"||n.keyCode===8)&&(s.backspace(),o=!0),o&&n.preventDefault()}function p(n){if(n.defaultPrevented)return;let o=!0;if(n.key)switch(n.key){case"-":case"j":m();break;case".":case"k":h();break;case"Enter":case" ":case"l":x();break;case";":s.backspace();break;default:o=!1}else switch(n.keyCode){case 45:case 106:m();break;case 46:case 107:h();break;case 13:case 32:case 108:x();break;case 59:s.backspace();break;default:o=!1}o&&n.preventDefault()}return document.addEventListener("keydown",i),document.addEventListener("keypress",p),()=>{document.removeEventListener("keydown",i),document.removeEventListener("keypress",p)}});function c(){return s.stream.replace(/\./g,"·").replace(/-/g,"－")}function u(){return new r.MorseString(s.stream).toString()}function v(){return new r.MorseString(s.stream).invertDotsAndDashes().toString()}function C(){return new r.MorseString(s.stream).reverse().toString()}function y(){return new r.MorseString(s.stream).invertDotsAndDashes().reverse().toString()}function D(){s.backspace()}function S(){s.clear()}function h(){s.append(r.MorseCharacter.DOT)}function m(){s.append(r.MorseCharacter.DASH)}function x(){if(s.stream.length>0){const i=s.stream.slice(-1);i===r.MorseString.CHARACTER_DIVIDER?(s.backspace(),s.append(r.MorseString.WORD_DIVIDER)):i!==r.MorseString.WORD_DIVIDER&&s.append(r.MorseString.CHARACTER_DIVIDER)}}return e.jsxs("div",{className:a.container,children:[e.jsxs(t,{className:a.morseOutput,children:[e.jsx(t.Header,{children:"Input"}),e.jsx(t.Body,{children:e.jsxs("pre",{children:[c(),e.jsx("span",{className:"blinking-cursor",children:"|"})]})})]}),e.jsxs(t,{className:a.output,children:[e.jsx(t.Header,{children:"Plaintext"}),e.jsx(t.Body,{children:e.jsx("pre",{children:u()||" "})})]}),e.jsxs(t,{className:a.output,children:[e.jsx(t.Header,{children:"Swap Dots/Dashes"}),e.jsx(t.Body,{children:e.jsx("pre",{children:v()||" "})})]}),e.jsxs(t,{className:a.output,children:[e.jsx(t.Header,{children:"Right to Left"}),e.jsx(t.Body,{children:e.jsx("pre",{children:C()||" "})})]}),e.jsxs(t,{className:a.output,children:[e.jsx(t.Header,{children:"Right to Left + Swap Dots/Dashes"}),e.jsx(t.Body,{children:e.jsx("pre",{children:y()||" "})})]}),e.jsxs(g,{className:a.inputCommands,children:[e.jsx(d,{children:e.jsx(l,{onClick:h,variant:"primary",children:e.jsx(b,{className:a.dot_button})})}),e.jsx(d,{children:e.jsx(l,{onClick:m,variant:"primary",children:e.jsx(k,{className:a.dash_button})})})]}),e.jsxs(g,{className:a.commands,children:[e.jsx(d,{children:e.jsx(l,{onClick:D,children:"⌫"})}),e.jsx(d,{children:e.jsx(l,{onClick:x,children:"Next"})}),e.jsx(d,{children:e.jsx(l,{onClick:S,variant:"danger",children:"Clear"})})]})]})}const F=G(z),W="_container_b2igg_1",J="_morse_picture_b2igg_14",j={container:W,morse_picture:J};function Q(){const s=new r.MorseCharacter().getPotentialMatches();return e.jsx("div",{className:j.container,children:e.jsxs(P,{striped:!0,responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Character"}),e.jsx("th",{children:"Morse"})]})}),e.jsx("tbody",{children:s.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:c.display}),e.jsx("td",{children:e.jsx("div",{className:j.morseView,children:e.jsx(I,{className:j.morse_picture,morseString:r.MorseCharacter.toMorseString(c.encoding)})})})]},c.display))})]})})}const U=s=>({selectedTab:s.encoding.morse.selectedTab}),X={selectTab:B},Y=_(U,X);function Z(s){return e.jsx(R,{title:"Morse Code",children:e.jsxs(E,{activeKey:s.selectedTab,id:"Morse-tabs",onSelect:s.selectTab,children:[e.jsx(f,{eventKey:"1",title:"Value",children:e.jsx(F,{})}),e.jsx(f,{eventKey:"2",title:"Reference",children:e.jsx(Q,{})})]})})}const ce=Y(Z);export{ce as default};