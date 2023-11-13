"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[872],{9750:function(o,e,r){r.d(e,{g:function(){return a},v:function(){return t}});var t=function(o){return o.auth.isLoggedIn},a=function(o){return o.auth.user.email}},1872:function(o,e,r){r.r(e),r.d(e,{default:function(){return z}});var t=r(3366),a=r(7462),n=r(2791),i=r(3733),l=r(4419),s=r(7630),c=r(1046),u=r(4036),p=r(5527),d=r(5878),v=r(1217);function f(o){return(0,v.Z)("MuiAppBar",o)}(0,d.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var g=r(3329),x=["className","color","enableColorOnDark","position"],b=function(o,e){return o?"".concat(null==o?void 0:o.replace(")",""),", ").concat(e,")"):e},m=(0,s.ZP)(p.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e["position".concat((0,u.Z)(r.position))],e["color".concat((0,u.Z)(r.color))]]}})((function(o){var e=o.theme,r=o.ownerState,t="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!e.vars&&(0,a.Z)({},"default"===r.color&&{backgroundColor:t,color:e.palette.getContrastText(t)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===e.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,a.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,a.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:b(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:b(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:b(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:b(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),h=n.forwardRef((function(o,e){var r=(0,c.Z)({props:o,name:"MuiAppBar"}),n=r.className,s=r.color,p=void 0===s?"primary":s,d=r.enableColorOnDark,v=void 0!==d&&d,b=r.position,h=void 0===b?"fixed":b,k=(0,t.Z)(r,x),Z=(0,a.Z)({},r,{color:p,position:h,enableColorOnDark:v}),w=function(o){var e=o.color,r=o.position,t=o.classes,a={root:["root","color".concat((0,u.Z)(e)),"position".concat((0,u.Z)(r))]};return(0,l.Z)(a,f,t)}(Z);return(0,g.jsx)(m,(0,a.Z)({square:!0,component:"header",ownerState:Z,elevation:4,className:(0,i.Z)(w.root,n,"fixed"===h&&"mui-fixed"),ref:e},k))})),k=r(4554),Z=r(4942);function w(o){return(0,v.Z)("MuiToolbar",o)}(0,d.Z)("MuiToolbar",["root","gutters","regular","dense"]);var C=["className","component","disableGutters","variant"],B=(0,s.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,!r.disableGutters&&e.gutters,e[r.variant]]}})((function(o){var e=o.theme,r=o.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,Z.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(o){var e=o.theme;return"regular"===o.ownerState.variant&&e.mixins.toolbar})),j=n.forwardRef((function(o,e){var r=(0,c.Z)({props:o,name:"MuiToolbar"}),n=r.className,s=r.component,u=void 0===s?"div":s,p=r.disableGutters,d=void 0!==p&&p,v=r.variant,f=void 0===v?"regular":v,x=(0,t.Z)(r,C),b=(0,a.Z)({},r,{component:u,disableGutters:d,variant:f}),m=function(o){var e=o.classes,r={root:["root",!o.disableGutters&&"gutters",o.variant]};return(0,l.Z)(r,w,e)}(b);return(0,g.jsx)(B,(0,a.Z)({as:u,className:(0,i.Z)(m.root,n),ref:e,ownerState:b},x))})),A=r(890),R=r(3400),S=r(4294),y=r(1087),I=r(7689),M=r(5048),D=r(9750),O=r(6847),q=function(){var o=(0,M.v9)(D.g),e=(0,M.I0)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(A.Z,{sx:{mr:2},children:o||null}),(0,g.jsx)(S.Z,{onClick:function(){return e((0,O.kS)())},color:"inherit",children:"Logout"})]})},N={textDecoration:"none",backgroundColor:"#dafaef",color:"black",marginRight:"40px",borderRadius:"5px",padding:"5px 10px",border:"1px solid white",transition:"background-color 0.3s ease",":hover":{backgroundColor:"white"},":focus":{backgroundColor:"white"}},P={textDecoration:"none",color:"black",backgroundColor:"#dafaef",padding:"5px 10px",marginRight:"40px",borderRadius:"5px",transition:"background-color 0.3s ease",":hover":{backgroundColor:"white"},":focus":{backgroundColor:"white"}},T=function(){var o=(0,M.v9)(D.v);return(0,g.jsxs)(k.Z,{sx:{flexGrow:1},children:[(0,g.jsx)(h,{position:"static",children:(0,g.jsxs)(j,{children:[(0,g.jsx)(R.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),(0,g.jsx)(A.Z,{variant:"h5",component:"div",sx:{flexGrow:1},children:"Phonebook"}),o?(0,g.jsx)(q,{}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(S.Z,{children:(0,g.jsx)(y.OL,{style:function(o){return o.isActive?P:N},to:"/register",children:"Register"})}),(0,g.jsx)(S.Z,{children:(0,g.jsx)(y.OL,{style:function(o){return o.isActive?P:N},to:"/login",children:"Log in"})})]})]})}),(0,g.jsx)(I.j3,{})]})},z=function(){return(0,g.jsx)(T,{})}},5527:function(o,e,r){r.d(e,{Z:function(){return m}});var t=r(3366),a=r(7462),n=r(2791),i=r(3733),l=r(4419),s=r(2065),c=r(7630),u=function(o){return((o<1?5.11916*Math.pow(o,2):4.5*Math.log(o+1)+2)/100).toFixed(2)},p=r(1046),d=r(5878),v=r(1217);function f(o){return(0,v.Z)("MuiPaper",o)}(0,d.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=r(3329),x=["className","component","elevation","square","variant"],b=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(o,e){var r=o.ownerState;return[e.root,e[r.variant],!r.square&&e.rounded,"elevation"===r.variant&&e["elevation".concat(r.elevation)]]}})((function(o){var e,r=o.theme,t=o.ownerState;return(0,a.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!t.square&&{borderRadius:r.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===t.variant&&(0,a.Z)({boxShadow:(r.vars||r).shadows[t.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",u(t.elevation)),", ").concat((0,s.Fq)("#fff",u(t.elevation)),")")},r.vars&&{backgroundImage:null==(e=r.vars.overlays)?void 0:e[t.elevation]}))})),m=n.forwardRef((function(o,e){var r=(0,p.Z)({props:o,name:"MuiPaper"}),n=r.className,s=r.component,c=void 0===s?"div":s,u=r.elevation,d=void 0===u?1:u,v=r.square,m=void 0!==v&&v,h=r.variant,k=void 0===h?"elevation":h,Z=(0,t.Z)(r,x),w=(0,a.Z)({},r,{component:c,elevation:d,square:m,variant:k}),C=function(o){var e=o.square,r=o.elevation,t=o.variant,a=o.classes,n={root:["root",t,!e&&"rounded","elevation"===t&&"elevation".concat(r)]};return(0,l.Z)(n,f,a)}(w);return(0,g.jsx)(b,(0,a.Z)({as:c,ownerState:w,className:(0,i.Z)(C.root,n),ref:e},Z))}))}}]);
//# sourceMappingURL=872.6eabfc92.chunk.js.map