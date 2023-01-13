"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[801],{9591:function(n,t,e){e.d(t,{g:function(){return s}});var r=e(1413),o=e(5048),i=e(873),c=e(2791),a=e(4054),u=e(8069),s=function(){var n=(0,o.v9)(u.TA),t=(0,c.useMemo)((function(){return(0,i.P1)([function(n){return n.data},function(n,t){return t}],(function(n,t){var e;return null!==(e=null!==n&&void 0!==n?n:null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})))&&void 0!==e?e:[]}))}),[]);return(0,a.wY)(void 0,{selectFromResult:function(e){return(0,r.Z)((0,r.Z)({},e),{},{filteredContacts:t(e,n)})}})}},3801:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r,o,i,c=e(9591),a=e(5984),u=e(8069),s=e(5048),l=e(168),p=e(9202),d=p.Z.input(r||(r=(0,l.Z)(["\nwidth: 300px;\nheight: 30px;\nfont-size: 24px;\ncolor: ",";\nmargin: 20px;\n"])),(function(n){return n.theme.colors.titleColor})),x=p.Z.label(o||(o=(0,l.Z)(["\n  font-weight: bold;\n"]))),h=p.Z.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: ",";\n  width: 300px;\nheight: 30px;\nfont-size: 24px;\n  margin: 20px;\n  margin-top: 300px;\n"])),(function(n){return n.theme.colors.titleColor})),f=e(184);function g(){var n=(0,a.x0)(),t=(0,s.I0)(),e=(0,s.v9)(u.TA);return(0,f.jsxs)(h,{children:[(0,f.jsx)(x,{htmlFor:n,children:"Find contacts by name"}),(0,f.jsx)(d,{type:"text",name:"name",id:n,value:e,onChange:function(n){return t((0,u.a8)(n.currentTarget.value))}})]})}var m,b,Z,v,w,j,y=e(9439),C=e(4054),k=e(8820),_=p.Z.li(m||(m=(0,l.Z)(["\n   display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 420px;\n    margin-right: 0; \n    &:not(:last-child) {\n    margin-bottom: 10px;}\n"]))),L=p.Z.span(b||(b=(0,l.Z)(["\n    margin-left: 20px;\n    margin-right: 20px;\n    font-weight: bold;\n"]))),z=p.Z.button(Z||(Z=(0,l.Z)(["\n  padding: ",";\n  background-color: ",";\n  border-radius: ",";\n  margin: ",";\n  width: ",";\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; \n  &:hover {\n    scale: 1.1;\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.mainButtonColor}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(25)}));function F(n){var t=n.contact,e=(0,C.Nt)(),r=(0,y.Z)(e,2),o=r[0],i=r[1].isLoading,c=t.id,a=t.name,u=t.number;return(0,f.jsxs)(_,{children:[(0,f.jsxs)("p",{children:[a,": ",(0,f.jsx)(L,{children:u})]}),(0,f.jsxs)(z,{type:"button",disabled:i,onClick:function(){return o(c)},children:[(0,f.jsx)(k.VPh,{size:"20px"}),(0,f.jsx)("span",{children:i?"Deleting...":"Delete"})]})]},c)}(0,p.Z)("button")(v||(v=(0,l.Z)(["\n  padding: ",";\n  background-color: ",";\n  border-radius: ",";\n  margin: ",";\n  width: ",";\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; \n  &:hover {\n    scale: 1.1;\n  }\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.mainButtonColor}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.spacing(25)})),p.Z.span(w||(w=(0,l.Z)(["\n  font-weight: bold;\n"])));var P=p.Z.ul(j||(j=(0,l.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 1000px;\n  margin-top: 150px;\n"])));function T(n){var t=n.contacts;return(0,f.jsx)(P,{children:t.map((function(n){return(0,f.jsx)(F,{contact:n},n.id)}))})}var A,B,D,S=e(5218),Y=p.Z.h1(A||(A=(0,l.Z)(["\n    text-align: center;\n    font-size: 24px;\n    font-weight: 400;\n    margin-bottom: 20px;\n    margin-top: 150px;\n    width: 250px;\n    "]))),I=p.Z.span(B||(B=(0,l.Z)(["\n    color: ","; \n"])),(function(n){return n.theme.colors.titleColor})),M=p.Z.p(D||(D=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;   \n"])));function N(){var n=(0,c.g)(),t=n.filteredContacts,e=n.error,r=n.isLoading,o=n.isSuccess,i=t.length;return(0,f.jsxs)("div",{children:[(0,f.jsx)(S.x7,{position:"top-center"}),(0,f.jsxs)(Y,{children:["You have ",(0,f.jsx)(I,{children:i})," contacts"]}),(0,f.jsx)(g,{}),r&&(0,f.jsx)(M,{children:"...Loading"}),o&&t&&(0,f.jsx)(T,{contacts:t}),e&&S.ZP.error("Sorry, we can't find your contacts :(")]})}}}]);
//# sourceMappingURL=801.d279664d.chunk.js.map