import{c as u,j as e,B as l,s as d,m,n as x,o as h,P as g}from"./index-34ed3e18.js";import{B as j,a as p}from"./ButtonToolbar-0a9786a8.js";import{C as t}from"./Card-dc026a37.js";import{u as v,F as C}from"./FocusInput-3a8c3ce9.js";import{T as f,a as r}from"./ToggleButtonGroup-1be6c866.js";import"./ElementChildren-0f27df44.js";const A="_container_s4twx_1",y="_input_s4twx_5",s={container:A,input:y},T=n=>({homogeneous:n.encoding.autoConvert.homogeneous,text:n.encoding.autoConvert.text}),B={clear:m,setHomogeneous:x,setText:h},S=u(T,B);function b(n){const i=v();function a(){n.clear()}function c(o){n.setText(o.currentTarget.value)}return e.jsxs("div",{className:s.container,children:[e.jsxs(t,{className:s.input,children:[e.jsx(t.Header,{children:n.prompt}),e.jsxs(t.Body,{children:[e.jsx(C,{onChange:c,placeholder:"Text",ref:i,value:n.text}),e.jsxs(j,{children:[e.jsxs(f,{name:"AutoConvertStream-homogeneous",onChange:o=>n.setHomogeneous(o===0),type:"radio",value:n.homogeneous?0:1,children:[e.jsx(r,{id:"AutoConvertStream-homogeneous-consistent",value:0,variant:"outline-primary",children:"Consistent"}),e.jsx(r,{id:"AutoConvertStream-homogeneous-mixed",value:1,variant:"outline-primary",children:"Mixed"})]}),e.jsx(p,{children:e.jsx(l,{onClick:a,variant:"danger",children:"Clear"})})]})]})]}),e.jsxs(t,{children:[e.jsx(t.Header,{children:"Output"}),e.jsx(t.Body,{children:e.jsx("pre",{children:d.StringAutoConvert.convertString(n.text,n.homogeneous)||" "})})]})]})}const I=S(b);function _(){return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:'AutoConvert will automatically detect and convert several encodings - simply enter your ciphertext. If all of your text is in the same encoding, you can select "force consistent encoding". This can be useful for ambigious strings.'}),e.jsx("p",{children:"Some of the supported encodings are:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"ASCII (A=65, B=66)"}),e.jsx("li",{children:"Five bit binary (A=00001, B=00010)"}),e.jsx("li",{children:"Eight bit binary (A=01100001, B=01100010)"}),e.jsx("li",{children:"Ordinal (A=1, B=2)"}),e.jsx("li",{children:"Ternary (A=001, E=012)"})]})]})}function z(){return e.jsx(g,{description:_(),title:"AutoConvert",children:e.jsx(I,{prompt:"Input"})})}export{z as default};
