import{j as t,c,B as l,s as u,f as d,g as x,P as p}from"./index-34ed3e18.js";import{B as h,a as f}from"./ButtonToolbar-0a9786a8.js";import{C as r}from"./Card-dc026a37.js";import{u as m,F as j}from"./FocusInput-3a8c3ce9.js";function C(e){function s(){return e.list.map((a,n)=>n===0?null:t.jsxs("div",{children:[n.toString().padStart(2),": ",a]},n))}return t.jsx("pre",{children:s()})}const T="_container_s4twx_1",g="_input_s4twx_5",i={container:T,input:g},y=e=>({text:e.cipher.caesar.text}),P={clear:d,setText:x},_=c(y,P);function B(e){const s=m();function a(){e.clear()}function n(o){e.setText(o.currentTarget.value)}return t.jsxs("div",{className:i.container,children:[t.jsxs(r,{className:i.input,children:[t.jsx(r.Header,{children:e.prompt}),t.jsxs(r.Body,{children:[t.jsx(j,{onChange:n,placeholder:"Text",ref:s,value:e.text}),t.jsx(h,{children:t.jsx(f,{children:t.jsx(l,{onClick:a,variant:"danger",children:"Clear"})})})]})]}),t.jsxs(r,{children:[t.jsx(r.Header,{children:"Output"}),t.jsx(r.Body,{children:t.jsx(C,{list:new u.CaesarString(e.text).getRotations()})})]})]})}const S=_(B),v="Caesar Cipher",I="A Caesar cipher works by shifting every letter by a fixed amount. This is a simple cipher - there are only 25 different shifts for each letter.";function k(){return t.jsx(p,{description:I,title:v,children:t.jsx(S,{prompt:"Type in your text, and all possible shifts will be displayed."})})}export{k as default};
