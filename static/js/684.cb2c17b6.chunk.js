"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{490:function(e,t,s){s.d(t,{B:function(){return b}});var a=s(1413),i=s(9439),n=s(5705),r=s(2791),l=s(5048),o=s(4554),u=s(890),m=s(3400),c=s(3746),p=s(165),d=s(4294),h={img:"RegisterForm_img__CALgW",inputThumb:"RegisterForm_inputThumb__poMUP",input:"RegisterForm_input__neyXp",inputText:"RegisterForm_inputText__85-aF",buttonActive:"RegisterForm_buttonActive__rLpVJ",helpfulText:"RegisterForm_helpfulText__fhBtO"},x=s(6847),g=s(3329),w=function(e){var t;return e?/^[A-Za-z]+$/.test(e)&&(t="Invalid name"):t="Required",t},f=function(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Required",t},v=function(e){var t;return e||(t="Required"),e.length<7&&(t="Password to short"),t},b=function(e){var t=e.title,s=(0,l.I0)(),b=(0,r.useState)({showPassword:!1}),j=(0,i.Z)(b,2),_=j[0],Z=j[1],N=function(){Z((0,a.Z)((0,a.Z)({},_),{},{showPassword:!_.showPassword}))};return(0,g.jsx)("div",{className:h.img,children:(0,g.jsxs)(o.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,g.jsx)(u.Z,{style:{fontSize:"45px",fontWeight:"bold",color:"#1976d2",lineHeight:"2.8",marginBottom:"40px"},variant:"h2",children:t}),(0,g.jsx)(n.J9,{initialValues:{email:"",password:"",name:"",showPassword:!1},onSubmit:function(e,a){var i,n,r,l=a.resetForm;i=e.name,n=e.email,r=e.password,s("Register"===t?(0,x.z2)({name:i,email:n,password:r}):(0,x.x4)({email:n,password:r})),l()},children:function(e){var s=e.errors,a=e.touched,i=e.values.password.length>=7;return(0,g.jsxs)(n.l0,{children:["Register"===t?(0,g.jsxs)(o.Z,{className:h.inputThumb,children:[(0,g.jsx)(u.Z,{variant:"caption",className:h.inputText,children:"Name"}),(0,g.jsx)(n.gN,{className:h.input,name:"name",type:"text",validate:w}),s.name&&a.name&&(0,g.jsx)(u.Z,{variant:"subtitle1",className:h.helpfulText,children:s.name})]}):null,(0,g.jsxs)(o.Z,{className:h.inputThumb,children:[(0,g.jsx)(u.Z,{variant:"caption",className:h.inputText,children:"Email"}),(0,g.jsx)(n.gN,{className:h.input,name:"email",type:"email",validate:f}),s.email&&a.email&&(0,g.jsx)(u.Z,{variant:"subtitle1",className:h.helpfulText,children:s.email})]}),(0,g.jsxs)(o.Z,{className:h.inputThumb,children:[(0,g.jsx)(u.Z,{variant:"caption",className:h.inputText,children:"Password"}),(0,g.jsx)(n.gN,{className:h.input,type:_.showPassword?"text":"password",name:"password",validate:v}),(0,g.jsx)(m.Z,{style:{width:"24px",height:"24px",position:"absolute",top:"17px",right:"7px"},size:"small",type:"button",onClick:N,children:_.showPassword?(0,g.jsx)(p.Z,{}):(0,g.jsx)(c.Z,{})}),s.password&&a.password&&(0,g.jsx)(u.Z,{variant:"subtitle1",className:h.helpfulText,children:s.password})]}),(0,g.jsx)(d.Z,{className:h.buttonThumb,fullWidth:!0,color:"primary",type:"submit",disabled:!!s.email||!i,style:{fontSize:"24px",color:"rgba(31, 143, 77)",backgroundColor:"rgba(252, 202, 205, 0.9)"},children:"Register"===t?"Register":"Login"})]})}})]})})}},9684:function(e,t,s){s.r(t);var a=s(490),i=s(3329);t.default=function(){return(0,i.jsx)(a.B,{title:"Register"})}}}]);
//# sourceMappingURL=684.cb2c17b6.chunk.js.map