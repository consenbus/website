webpackJsonp([35783957827783],{503:function(e,t,n){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),i=n(41),l=a(i),u=n(33),d=a(u),s=e.__MUI_SvgIcon__||d.default,c=r.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),f=function(e){return r.default.createElement(s,e,c)};f=(0,l.default)(f),f.muiName="SvgIcon",t.default=f}).call(t,function(){return this}())},506:function(e,t,n){(function(e){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),i=n(41),l=a(i),u=n(33),d=a(u),s=e.__MUI_SvgIcon__||d.default,c=r.default.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),f=function(e){return r.default.createElement(s,e,c)};f=(0,l.default)(f),f.muiName="SvgIcon",t.default=f}).call(t,function(){return this}())},255:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),u=a(l),d=n(2),s=a(d),c=n(108),f=a(c),p=n(21),m=a(p),g=n(22),h=n(42),b=a(h),E=n(242),v=a(E),y=n(78),x=a(y),w=n(229),C=a(w),_=n(506),k=a(_),B=n(503),N=a(B),S=function(e){var t,n;return{root:{padding:6*e.spacing.unit,marginBottom:6*e.spacing.unit},hero:{position:"relative",minHeight:"80vh",flex:"0 0 auto",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"light"===e.palette.type?e.palette.primary.main:e.palette.primary.dark,backgroundImage:"linear-gradient(60deg,#306efe,#003ab7)",color:e.palette.primary.contrastText},heroBottom:{position:"absolute",bottom:0,left:0,width:"100%",height:"auto",marginBottom:"-1px"},title:{textAlign:"center",paddingTop:5*e.spacing.unit,fontFamily:x.default.antonio},content:(t={paddingTop:8*e.spacing.unit,paddingBottom:8*e.spacing.unit},t[e.breakpoints.up("sm")]={paddingTop:12*e.spacing.unit,paddingBottom:20*e.spacing.unit},t),text:{paddingLeft:4*e.spacing.unit,paddingRight:4*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},headline:{marginTop:"1rem",maxWidth:800,textAlign:"center"},button:{marginTop:3*e.spacing.unit},logo:{margin:"20px 0",width:"100%",height:"35vw",maxHeight:200},backers:{backgroundColor:e.palette.background.paper,padding:2*e.spacing.unit,display:"flex",justifyContent:"center",minHeight:600},backersBody:{maxWidth:90*e.spacing.unit},card:{backgroundColor:"transparent"},media:{height:200},subtitle:{paddingBottom:2*e.spacing.unit,fontFamily:x.default.antonio},buttonCircle:{backgroundColor:"transparent",border:"2px solid #306ffd",borderRadius:"20px",padding:".5rem 1.5rem",fontWeight:700,color:"#306ffd",marginTop:"1rem",boxShadow:"none","&:hover":{color:"#306ffd",backgroundColor:"#e1eaff"}},buttonWhite:(n={marginTop:"2rem",fontSize:"16px"},n.fontSize="1rem",n.border="0 solid #fff",n.color="#306ffd",n.backgroundColor="#fff",n.borderRadius="50px",n.padding="1rem 1.5rem",n.boxShadow="0 0 20px rgba(0,0,0,.2)",n.transition="box-shadow .2s ease",n.fontWeight="700",n["&:active, &:focus, &:hover"]={backgroundColor:"#fff",boxShadow:"0 0 20px rgba(0,0,0,.7)"},n)}},T=function(e){function t(){var n,a,i;o(this,t);for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return n=a=r(this,e.call.apply(e,[this].concat(u))),a.state={open:!1},a.handleClose=function(){a.setState({open:!1})},a.handleClick=function(){a.setState({open:!0})},i=n,r(a,i)}return i(t,e),t.prototype.renderHeroBottom=function(e){return u.default.createElement("svg",{width:"100%",height:"47px",viewBox:"0 0 1440 47",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:e.heroBottom,preserveAspectRatio:"none"},u.default.createElement("defs",null),u.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},u.default.createElement("path",{d:"M0,0.0577405639 C117.504588,18.44359 269.602477,22.1720696 456.293666,11.2431795 C562.076057,5.05068514 730.784198,0.911127653 885.297232,3.27366179 C1157.17617,7.43074321 1386.98062,21.3276838 1440,38.3891927 L1440,46.9388979 L0,46.9388979 L0,0.0577405639 Z",id:"Path-9",fill:"#fafafa"})))},t.prototype.renderHero=function(e){return u.default.createElement("div",{className:e.hero},u.default.createElement("div",{className:e.content},u.default.createElement("img",{src:v.default,alt:"Consenbus Logo",className:e.logo}),u.default.createElement("div",{className:e.text},u.default.createElement(m.default,{variant:"display1",component:"h1",color:"inherit",className:e.title,gutterBottom:!0},"THE ECONOMY OF EVERYTHING"),u.default.createElement(m.default,{variant:"subheading",component:"h2",color:"inherit",className:e.headline},"Consenbus is the intelligent connection of people, process, data and things."),u.default.createElement(f.default,{size:"large",variant:"raised",color:"primary",component:"a",href:"/consenbus-report.pdf",className:e.buttonWhite},"Access the report ",u.default.createElement(N.default,null)))),this.renderHeroBottom(e))},t.prototype.renderFeatures=function(e,t){return u.default.createElement("div",{className:e.card},u.default.createElement("div",null,u.default.createElement(m.default,{variant:"headline",component:"h2",className:e.subtitle},t.title),u.default.createElement(m.default,{component:"p",variant:"subheading"},t.description)),u.default.createElement("div",null,u.default.createElement(f.default,{size:"large",variant:"raised",color:"primary",component:"a",href:t.link,className:e.buttonCircle},t.button," ",u.default.createElement(k.default,null))))},t.prototype.render=function(){var e=this.props.classes;this.state.open;return u.default.createElement(b.default,{active:"index"},this.renderHero(e),u.default.createElement("div",{className:e.root},u.default.createElement(C.default,{container:!0,spacing:16},u.default.createElement(C.default,{item:!0,xs:12,sm:6},this.renderFeatures(e,{title:"WEB WALLET",description:"Consenbus Web Wallet is the official online, light wallet for $BUS. With the online wallet, you are in control of your funds without having to download the ledger.",button:"Go to Web Wallet",link:"http://wallet.consenbus.org/"})),u.default.createElement(C.default,{item:!0,xs:12,sm:6},this.renderFeatures(e,{title:"EXPLORER",description:"Consenbus Block Explorer is a web tool that provides detailed information about Consenbus blocks, addresses, and transactions.",button:"Go to Explorer",link:"http://wallet.consenbus.org/explorer/blocks/124BDE14463FE7CFF7C8785EDB8C563194C0894FE499B5566D48622EF9EF4B75"})))))},t}(u.default.Component);T.propTypes={classes:s.default.object.isRequired},t.default=(0,g.withStyles)(S)(T),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-619281c8f57f9b761b49.js.map