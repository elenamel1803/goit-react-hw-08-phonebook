"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{81:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Q});var r,a,x,p,o=t(791),s=t(420),i=t(333),d=t(594),c=t(168),l=t(686);const m=l.Z.form(r||(r=(0,c.Z)(["\n  max-width: 400px;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n"]))),u=l.Z.label(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),b=l.Z.input(x||(x=(0,c.Z)(["\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin-bottom: 10px;\n  padding: 5px;\n  max-width: 160px;\n  &:focus {\n    border: 3px solid #7396d8;\n    outline: none;\n  }\n"]))),h=l.Z.button(p||(p=(0,c.Z)(["\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 5px;\n  margin: 20px auto;\n  &:hover {\n    background-color: #7396d8;\n  }\n"])));var g=t(184);const Z=()=>{const[n,e]=(0,o.useState)(""),[t,r]=(0,o.useState)(""),a=(0,s.I0)(),x=n=>{let{target:t}=n;const{name:a,value:x}=t;switch(a){case"name":e(x);break;case"number":r(x);break;default:return}},p=()=>{e(""),r("")};return(0,g.jsxs)(m,{onSubmit:e=>{e.preventDefault();const r={name:(0,i.K)(n.trim()),number:(0,i.u)(t.trim())};a((0,d.uK)(r)),p()},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)(u,{children:"Name"}),(0,g.jsx)(b,{type:"text",name:"name",value:n,required:!0,onChange:x,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Entrer name"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)(u,{children:"Number"}),(0,g.jsx)(b,{type:"tel",name:"number",value:t,required:!0,onChange:x,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",placeholder:"Enter phone number"})]}),(0,g.jsx)(h,{type:"submit",children:"Add contact"})]})};var j=t(790),v=t(553);const f=n=>n.contacts.isLoading,w=n=>n.contacts.error,k=n=>n.filter,y=(0,v.P1)([n=>n.contacts.items,k],((n,e)=>n.filter((n=>n.name.toLowerCase().includes(e.toLowerCase())))));var C;const z=l.Z.input(C||(C=(0,c.Z)(["\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 0 auto 20px;\n  display: block;\n  padding: 5px;\n  max-width: 160px;\n\n  &:focus {\n    border: 3px solid #7396d8;\n    outline: none;\n  }\n"]))),A=()=>{const n=(0,s.v9)(k),e=(0,s.I0)();return(0,g.jsx)(z,{type:"text",name:"filter",value:n,onChange:n=>{let{target:t}=n;e((0,j.T)(t.value.trim()))},placeholder:"Search by name"})};var I,S,_,E,K;const L=l.Z.ul(I||(I=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  margin: 0 auto;\n"]))),q=l.Z.li(S||(S=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),D=l.Z.p(_||(_=(0,c.Z)(["\n  margin: 0;\n  margin-right: 10px;\n"]))),F=l.Z.button(E||(E=(0,c.Z)(["\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  &:hover {\n    background-color: #7396d8;\n  }\n"]))),N=l.Z.p(K||(K=(0,c.Z)(["\n  text-align: center;\n  color: red;\n  font-size: 18px;\n"]))),P=n=>{let{contact:e}=n;const{id:t,name:r,number:a}=e,x=(0,s.I0)();return(0,g.jsxs)(q,{children:[(0,g.jsxs)(D,{id:t,children:[r,": ",a]}),(0,g.jsx)(F,{onClick:()=>{x((0,d.GK)(t))},children:"Delete"})]})};var G=t(763);const T=()=>{const n=(0,s.v9)(y),e=(0,s.v9)(f),t=(0,s.v9)(w),r=(0,s.I0)();return(0,o.useEffect)((()=>{r((0,d.yF)())}),[r]),(0,g.jsxs)(L,{children:[e&&(0,g.jsx)(G.Z,{}),t&&(0,g.jsx)(N,{children:t}),n.length>0&&n.map((n=>(0,g.jsx)(P,{contact:n},n.id)))]})};var $,B,H;const J=l.Z.div($||($=(0,c.Z)(["\n  padding-bottom: 20px;\n"]))),M=l.Z.h1(B||(B=(0,c.Z)(["\n  text-align: center;\n  margin-bottom: 10px;\n"]))),O=l.Z.h2(H||(H=(0,c.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n"]))),Q=()=>(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(J,{children:[(0,g.jsx)(M,{children:"Phonebook"}),(0,g.jsx)(Z,{}),(0,g.jsx)(O,{children:"Contacts"}),(0,g.jsx)(A,{}),(0,g.jsx)(T,{})]})})}}]);
//# sourceMappingURL=463.881a4dc9.chunk.js.map