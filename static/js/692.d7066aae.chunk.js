"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[692],{692:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Re});var a=n(4420),o=n(2791),r=n(3553);const i=e=>e.contacts.items,s=e=>e.contacts.isLoading,c=e=>e.contacts.error,l=e=>e.filter,d=(0,r.P1)([i,l],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))));var u,p,m,g=n(6594),v=n(3333),b=n(9073),h=n(4294),Z=n(168),x=n(225),f=n(697),y=n(5516);const C=(0,x.Z)(f.Z)(u||(u=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n"]))),S=(0,x.Z)(y.Z)(p||(p=(0,Z.Z)(["\n  background-color: #fff;\n  border-radius: 4px;\n"]))),j=x.Z.p(m||(m=(0,Z.Z)(["\n  text-align: center;\n  color: red;\n  font-size: 20px;\n  margin-top: 30px;\n"])));var I=n(184);const k=()=>{const[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),i=(0,a.v9)(c),s=(0,a.I0)(),l=e=>{let{target:n}=e;const{name:a,value:o}=n;switch(a){case"name":t(o);break;case"number":r(o);break;default:return}},d=()=>{t(""),r("")};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(C,{onSubmit:t=>{t.preventDefault();const a={name:(0,v.K)(e.trim()),number:(0,v.u)(n.trim())};s((0,g.uK)(a)),d()},component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,children:[(0,I.jsx)(S,{id:"outlined-basic",label:"Name",variant:"outlined",type:"text",name:"name",value:e,required:!0,onChange:l,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"}),(0,I.jsx)(S,{id:"outlined-basic",label:"Number",variant:"outlined",type:"tel",name:"number",value:n,required:!0,onChange:l,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"}),(0,I.jsx)(h.Z,{type:"submit",variant:"contained",size:"large",startIcon:(0,I.jsx)(b.Z,{}),children:"Add contact"})]}),i&&(0,I.jsx)(j,{children:i})]})};var w,z,R=n(1790);const A=(0,x.Z)(f.Z)(w||(w=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),P=(0,x.Z)(y.Z)(z||(z=(0,Z.Z)(["\n  background-color: #fff;\n  border-radius: 4px;\n"]))),F=()=>{const e=(0,a.v9)(l),t=(0,a.I0)();return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(A,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,I.jsx)(P,{id:"outlined-search",label:"Search by name",type:"search",variant:"outlined",name:"filter",value:e,onChange:e=>{let{target:n}=e;t((0,R.T)(n.value.trim()))}})})})};var M=n(3366),N=n(7462),L=n(3733),O=n(838),G=n(627),V=n(3616),T=n(6934),q=n(1402),B=n(533),D=n(5925),_=n(162),E=n(2071),K=n(6199),H=n(9703),X=n(4657);function Y(e){return(0,X.ZP)("MuiListItem",e)}const W=(0,H.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const $=(0,H.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function J(e){return(0,X.ZP)("MuiListItemSecondaryAction",e)}(0,H.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);const Q=["className"],U=(0,T.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})((e=>{let{ownerState:t}=e;return(0,N.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),ee=o.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:a}=n,r=(0,M.Z)(n,Q),i=o.useContext(K.Z),s=(0,N.Z)({},n,{disableGutters:i.disableGutters}),c=(e=>{const{disableGutters:t,classes:n}=e,a={root:["root",t&&"disableGutters"]};return(0,O.Z)(a,J,n)})(s);return(0,I.jsx)(U,(0,N.Z)({className:(0,L.Z)(c.root,a),ownerState:s,ref:t},r))}));ee.muiName="ListItemSecondaryAction";const te=ee,ne=["className"],ae=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],oe=(0,T.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((e=>{let{theme:t,ownerState:n}=e;return(0,N.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!n.disablePadding&&(0,N.Z)({paddingTop:8,paddingBottom:8},n.dense&&{paddingTop:4,paddingBottom:4},!n.disableGutters&&{paddingLeft:16,paddingRight:16},!!n.secondaryAction&&{paddingRight:48}),!!n.secondaryAction&&{["& > .".concat($.root)]:{paddingRight:48}},{["&.".concat(W.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(W.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,V.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(W.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,V.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(W.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"flex-start"===n.alignItems&&{alignItems:"flex-start"},n.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},n.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(W.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,V.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,V.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}},n.hasSecondaryAction&&{paddingRight:48})})),re=(0,T.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),ie=o.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiListItem"}),{alignItems:a="center",autoFocus:r=!1,button:i=!1,children:s,className:c,component:l,components:d={},componentsProps:u={},ContainerComponent:p="li",ContainerProps:{className:m}={},dense:g=!1,disabled:v=!1,disableGutters:b=!1,disablePadding:h=!1,divider:Z=!1,focusVisibleClassName:x,secondaryAction:f,selected:y=!1,slotProps:C={},slots:S={}}=n,j=(0,M.Z)(n.ContainerProps,ne),k=(0,M.Z)(n,ae),w=o.useContext(K.Z),z=o.useMemo((()=>({dense:g||w.dense||!1,alignItems:a,disableGutters:b})),[a,w.dense,g,b]),R=o.useRef(null);(0,_.Z)((()=>{r&&R.current&&R.current.focus()}),[r]);const A=o.Children.toArray(s),P=A.length&&(0,D.Z)(A[A.length-1],["ListItemSecondaryAction"]),F=(0,N.Z)({},n,{alignItems:a,autoFocus:r,button:i,dense:z.dense,disabled:v,disableGutters:b,disablePadding:h,divider:Z,hasSecondaryAction:P,selected:y}),V=(e=>{const{alignItems:t,button:n,classes:a,dense:o,disabled:r,disableGutters:i,disablePadding:s,divider:c,hasSecondaryAction:l,selected:d}=e,u={root:["root",o&&"dense",!i&&"gutters",!s&&"padding",c&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",l&&"secondaryAction",d&&"selected"],container:["container"]};return(0,O.Z)(u,Y,a)})(F),T=(0,E.Z)(R,t),H=S.root||d.Root||oe,X=C.root||u.root||{},$=(0,N.Z)({className:(0,L.Z)(V.root,X.className,c),disabled:v},k);let J=l||"li";return i&&($.component=l||"div",$.focusVisibleClassName=(0,L.Z)(W.focusVisible,x),J=B.Z),P?(J=$.component||l?J:"div","li"===p&&("li"===J?J="div":"li"===$.component&&($.component="div")),(0,I.jsx)(K.Z.Provider,{value:z,children:(0,I.jsxs)(re,(0,N.Z)({as:p,className:(0,L.Z)(V.container,m),ref:T,ownerState:F},j,{children:[(0,I.jsx)(H,(0,N.Z)({},X,!(0,G.X)(H)&&{as:J,ownerState:(0,N.Z)({},F,X.ownerState)},$,{children:A})),A.pop()]}))})):(0,I.jsx)(K.Z.Provider,{value:z,children:(0,I.jsxs)(H,(0,N.Z)({},X,{as:J,ref:T},!(0,G.X)(H)&&{ownerState:(0,N.Z)({},F,X.ownerState)},$,{children:[A,f&&(0,I.jsx)(te,{children:f})]}))})}));var se=n(7247),ce=n(4036);function le(e){return(0,X.ZP)("MuiIconButton",e)}const de=(0,H.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),ue=["edge","children","className","color","disabled","disableFocusRipple","size"],pe=(0,T.ZP)(B.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t["color".concat((0,ce.Z)(n.color))],n.edge&&t["edge".concat((0,ce.Z)(n.edge))],t["size".concat((0,ce.Z)(n.size))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,N.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,V.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(e=>{let{theme:t,ownerState:n}=e;var a;const o=null==(a=(t.vars||t).palette)?void 0:a[n.color];return(0,N.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,N.Z)({color:null==o?void 0:o.main},!n.disableRipple&&{"&:hover":(0,N.Z)({},o&&{backgroundColor:t.vars?"rgba(".concat(o.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,V.Fq)(o.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{["&.".concat(de.disabled)]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})})),me=o.forwardRef((function(e,t){const n=(0,q.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:o,className:r,color:i="default",disabled:s=!1,disableFocusRipple:c=!1,size:l="medium"}=n,d=(0,M.Z)(n,ue),u=(0,N.Z)({},n,{edge:a,color:i,disabled:s,disableFocusRipple:c,size:l}),p=(e=>{const{classes:t,disabled:n,color:a,edge:o,size:r}=e,i={root:["root",n&&"disabled","default"!==a&&"color".concat((0,ce.Z)(a)),o&&"edge".concat((0,ce.Z)(o)),"size".concat((0,ce.Z)(r))]};return(0,O.Z)(i,le,t)})(u);return(0,I.jsx)(pe,(0,N.Z)({className:(0,L.Z)(p.root,r),centerRipple:!0,focusRipple:!c,disabled:s,ref:t,ownerState:u},d,{children:o}))}));var ge,ve,be,he=n(890);const Ze=x.Z.ul(ge||(ge=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 400px;\n  margin: 0 auto;\n"]))),xe=(0,x.Z)(me)(ve||(ve=(0,Z.Z)(["\n  &:hover {\n    color: ",";\n    background-color: transparent;\n  }\n"])),(e=>e.theme.palette.primary.main)),fe=((0,x.Z)(he.Z)(be||(be=(0,Z.Z)(["\n  text-align: center;\n  font-size: 20px;\n"]))),e=>{let{contact:t}=e;const{id:n,name:o,number:r}=t,i=(0,a.I0)();return(0,I.jsxs)(ie,{id:n,secondaryAction:(0,I.jsx)(xe,{edge:"end","aria-label":"delete",onClick:()=>{i((0,g.GK)(n))},children:(0,I.jsx)(se.Z,{})}),children:[o,": ",r]})});var ye=n(1763);const Ce=()=>{const e=(0,a.v9)(d),t=(0,a.v9)(s);return(0,I.jsxs)(I.Fragment,{children:[t&&(0,I.jsx)(ye.Z,{}),(0,I.jsx)(Ze,{children:e.length>0&&e.map((e=>(0,I.jsx)(fe,{contact:e},e.id)))})]})};var Se,je,Ie;const ke=x.Z.div(Se||(Se=(0,Z.Z)(["\n  padding: 20px 0;\n"]))),we=(0,x.Z)(he.Z)(je||(je=(0,Z.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n"]))),ze=(0,x.Z)(he.Z)(Ie||(Ie=(0,Z.Z)(["\n  text-align: center;\n  font-size: 20px;\n  margin-top: 20px;\n"]))),Re=()=>{const e=(0,a.v9)(i),t=(0,a.I0)();return(0,o.useEffect)((()=>{t((0,g.yF)())}),[t]),(0,I.jsxs)(ke,{children:[(0,I.jsx)(we,{variant:"h3",children:"Your personal Phonebook"}),(0,I.jsx)(k,{}),0!==e.length?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(we,{sx:{marginTop:"20px"},variant:"h4",children:"Contacts"}),(0,I.jsx)(F,{}),(0,I.jsx)(Ce,{})]}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(ze,{variant:"h6",children:"There are no contacts in your Phonebook"})})]})}},7247:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},9073:(e,t,n)=>{var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184);t.Z=(0,o.default)((0,r.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3z"}),"PersonAddAlt")}}]);
//# sourceMappingURL=692.d7066aae.chunk.js.map