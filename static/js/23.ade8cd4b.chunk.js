(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1387:function(e,t,a){"use strict";var r=a(6),o=a(28),n=a(2),l=a(0),s=(a(4),a(8)),i=a(10),c=a(1388),p=l.forwardRef(function(e,t){var a,o=e.classes,i=e.className,p=e.component,d=void 0===p?"li":p,m=e.disableGutters,y=void 0!==m&&m,u=e.ListItemClasses,h=e.role,b=void 0===h?"menuitem":h,f=e.selected,g=e.tabIndex,x=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==g?g:-1),l.createElement(c.a,Object(n.a)({button:!0,role:b,tabIndex:a,component:d,selected:f,disableGutters:y,classes:Object(n.a)({dense:o.dense},u),className:Object(s.a)(o.root,i,f&&o.selected,!y&&o.gutters),ref:t},x))});t.a=Object(i.a)(function(e){return{root:Object(n.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(n.a)({},e.typography.body2,{minHeight:"auto"})}},{name:"MuiMenuItem"})(p)},1388:function(e,t,a){"use strict";var r=a(2),o=a(6),n=a(0),l=(a(4),a(8)),s=a(10),i=a(561),c=a(195),p=a(26),d=a(338),m=a(25),y="undefined"===typeof window?n.useEffect:n.useLayoutEffect,u=n.forwardRef(function(e,t){var a=e.alignItems,s=void 0===a?"center":a,u=e.autoFocus,h=void 0!==u&&u,b=e.button,f=void 0!==b&&b,g=e.children,x=e.classes,v=e.className,P=e.component,E=e.ContainerComponent,C=void 0===E?"li":E,S=e.ContainerProps,O=(S=void 0===S?{}:S).className,j=Object(o.a)(S,["className"]),D=e.dense,N=void 0!==D&&D,I=e.disabled,T=void 0!==I&&I,A=e.disableGutters,k=void 0!==A&&A,B=e.divider,w=void 0!==B&&B,V=e.focusVisibleClassName,R=e.selected,M=void 0!==R&&R,$=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=n.useContext(d.a),G={dense:N||F.dense||!1,alignItems:s},U=n.useRef(null);y(function(){h&&U.current&&U.current.focus()},[h]);var H=n.Children.toArray(g),K=H.length&&Object(c.a)(H[H.length-1],["ListItemSecondaryAction"]),L=n.useCallback(function(e){U.current=m.findDOMNode(e)},[]),z=Object(p.a)(L,t),J=Object(r.a)({className:Object(l.a)(x.root,v,G.dense&&x.dense,!k&&x.gutters,w&&x.divider,T&&x.disabled,f&&x.button,"center"!==s&&x.alignItemsFlexStart,K&&x.secondaryAction,M&&x.selected),disabled:T},$),W=P||"li";return f&&(J.component=P||"div",J.focusVisibleClassName=Object(l.a)(x.focusVisible,V),W=i.a),K?(W=J.component||P?W:"div","li"===C&&("li"===W?W="div":"li"===J.component&&(J.component="div")),n.createElement(d.a.Provider,{value:G},n.createElement(C,Object(r.a)({className:Object(l.a)(x.container,O),ref:z},j),n.createElement(W,J,H),H.pop()))):n.createElement(d.a.Provider,{value:G},n.createElement(W,Object(r.a)({ref:z},J),H))});t.a=Object(s.a)(function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}},{name:"MuiListItem"})(u)},1396:function(e,t,a){"use strict";var r=a(2),o=a(6),n=a(0),l=a.n(n),s=a(8),i=(a(4),a(94)),c=a.n(i),p=a(559);function d(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.name,i=Object(o.a)(a,["name"]);var d,m=n,y="function"===typeof t?function(e){return{root:function(a){return t(Object(r.a)({theme:e},a))}}}:{root:t},u=Object(p.a)(y,Object(r.a)({Component:e,name:n||e.displayName,classNamePrefix:m},i));t.filterProps&&(d=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var h=l.a.forwardRef(function(t,a){var n=t.children,i=t.className,c=t.clone,p=t.component,m=Object(o.a)(t,["children","className","clone","component"]),y=u(t),h=Object(s.a)(y.root,i),b=m;if(d&&(b=function(e,t){var a={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(a[r]=e[r])}),a}(b,d)),c)return l.a.cloneElement(n,Object(r.a)({className:Object(s.a)(n.props.className,h)},b));if("function"===typeof n)return n(Object(r.a)({className:h},b));var f=p||e;return l.a.createElement(f,Object(r.a)({ref:a,className:h},b),n)});return c()(h,e),h}}var m=a(150);t.a=function(e){var t=d(e);return function(e,a){return t(e,Object(r.a)({defaultTheme:m.a},a))}}},1964:function(e,t,a){"use strict";var r=a(117),o=a(2),n=(a(4),a(196));var l=function(e){var t=function(t){var a=e(t);return t.css?Object(o.a)(Object(o.a)({},Object(n.a)(a,e(Object(o.a)({theme:t.theme},t.css)))),function(e,t){var a={};return Object.keys(e).forEach(function(r){-1===t.indexOf(r)&&(a[r]=e[r])}),a}(t.css,[e.filterProps])):a};return t.propTypes={},t.filterProps=["css"].concat(Object(r.a)(e.filterProps)),t};var s=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=function(e){return t.reduce(function(t,a){var r=a(e);return r?Object(n.a)(t,r):t},{})};return r.propTypes={},r.filterProps=t.reduce(function(e,t){return e.concat(t.filterProps)},[]),r},i=a(28),c=a(351);function p(e,t){return t&&"string"===typeof t?t.split(".").reduce(function(e,t){return e&&e[t]?e[t]:null},e):null}var d=function(e){var t=e.prop,a=e.cssProperty,r=void 0===a?e.prop:a,o=e.themeKey,n=e.transform,l=function(e){if(null==e[t])return null;var a=e[t],l=p(e.theme,o)||{};return Object(c.a)(e,a,function(e){var t;return"function"===typeof l?t=l(e):Array.isArray(l)?t=l[e]||e:(t=p(l,e)||e,n&&(t=n(t))),!1===r?t:Object(i.a)({},r,t)})};return l.propTypes={},l.filterProps=[t],l};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var y=s(d({prop:"border",themeKey:"borders",transform:m}),d({prop:"borderTop",themeKey:"borders",transform:m}),d({prop:"borderRight",themeKey:"borders",transform:m}),d({prop:"borderBottom",themeKey:"borders",transform:m}),d({prop:"borderLeft",themeKey:"borders",transform:m}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"})),u=s(d({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"})),h=s(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"})),b=s(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"})),f=s(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"})),g=s(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),x=d({prop:"boxShadow",themeKey:"shadows"});function v(e){return e<=1?"".concat(100*e,"%"):e}var P=d({prop:"width",transform:v}),E=d({prop:"maxWidth",transform:v}),C=d({prop:"minWidth",transform:v}),S=d({prop:"height",transform:v}),O=d({prop:"maxHeight",transform:v}),j=d({prop:"minHeight",transform:v}),D=(d({prop:"size",cssProperty:"width",transform:v}),d({prop:"size",cssProperty:"height",transform:v}),s(P,E,C,S,O,j,d({prop:"boxSizing"}))),N=a(1332),I=s(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"})),T=a(1396),A=l(s(y,u,h,b,f,g,x,D,N.b,I)),k=Object(T.a)("div")(A,{name:"MuiBox"});t.a=k},1986:function(e,t,a){"use strict";a.r(t);var r=a(5),o=a(0),n=a.n(o),l=a(541),s=a(1964),i=a(1326),c=a(1324),p=(a(1427),a(1273)),d=a(1387),m=a(1272),y=a(1276),u=a(21),h=a.n(u),b=a(18),f=a(10),g={bgcolor:"background.paper",borderColor:"text.primary",display:"flex",justifyContent:"center",style:{height:"12rem",marginBottom:10}},x={bgcolor:"background.paper",borderColor:"text.primary"};t.default=Object(f.a)(e=>({formControl:{minWidth:170,padding:"0 !important"},selectEmpty:{marginTop:e.spacing(2)},root:{flexGrow:1}}))(class extends n.a.Component{constructor(e){super(e),this.changeHandler=(e=>{var t=e.target.value;this.setState(Object(r.a)(Object(r.a)({},this.state),{},{data:Object(r.a)(Object(r.a)({},this.state.data),{},{"Deal Number":t})})),"123456"===t&&h.a.get("http://localhost:3001/getDeals/").then(e=>{this.setState(Object(r.a)(Object(r.a)({},this.state),{},{deals:Object(r.a)({},e.data)})),console.log(e)}).catch(e=>{console.log("error")})}),this.handleChange=(e=>{console.log(e)}),console.log("History",e.location.state),e.location.state?this.state={deals:{deals:Object(r.a)({},e.location.state)},data:{"Deal Number":0,Status:["submitted","available","bought","made offer","no interest"],"Buyer Name":"John Doe",Vendor:["Target"],Approver:["Jack Doe"],"Vendor Source":["Target.com"],"Source Reason":["Excess Inventory"],Resolution:["NA"],"Bid Information":{"Basis Type":["MSRP"],"Purchase Unit":["Pieces"],"Calculation Method":["% of Basis","Bid $ amount"],Currency:["USD","INR"]},"Deal Factors":{"Merch Condition":["good","near perfect","open stock","perfect","seconds","varying degrees"],"Damage Type":["None"],"Item Visibility":["100%","70%","40%"],"Item Similarity":["All long quality"],"Pricing Availability":["Vendor provided API"],"Pricing Methods":["Multiple Price Points","Single Price Points","% off"],Tags:["Strikethrough Barcode"],"Sticker Label":["remove 100%"],"Seasonal %":["25%","50%"],"FOB Point":["Tyler Tx"]},"Performance Proxy 1":{"Proxy Type":["Comp Source"],Vendor:["target","source"],"Vendor Source":["Target.com"],"Deal Name":["TGT.com Oct 2019"],"Deal Proxy":["NA"]},"Performance Proxy 2":{"Proxy Type":["Comp Deal"],Vendor:["target"],"Vendor Source":["Target.com"],"Deal Name":["TGT.com Sept 2019"],"Deal Proxy":["NA"],"Deal Number":["23456"]}},controls:{"Deal Number":{type:"text"},"Deal Name":{type:"text"},Status:{type:"select"},"Buyer Name":{type:"text"},Vendor:{type:"select"},Approver:{type:"select"},"Created Date":{type:"text"},"Bid Deadline":{type:"text"},"Vendor Source":{type:"select"},"Source Reason":{type:"select"},Resolution:{type:"select"},"Resolution Date":{type:"text"},"Bid Information":{"Basis Type":{type:"select"},"Bid %":{type:"text"},"Bid $":{type:"text"},"Transportation $":{type:"text"},Units:{type:"text"},AUR:{type:"text"},"Deposit Amount":{type:"text"},"Basis Amount $":{type:"text"},"Purchase Unit":{type:"select"},"Calculation Method":{type:"select"},Currency:{type:"select"}},"Deal Factors":{"Merch Condition":{type:"select"},"Damage Type":{type:"select"},"Item Visibility":{type:"select"},"Item Similarity":{type:"select"},"Pricing Availability":{type:"select"},"Pricing Methods":{type:"select"},Tags:{type:"select"},"Sticker Label":{type:"select"},"Seasonal %":{type:"select"},"FOB Point":{type:"text"}},"Performance Proxy 1":{"Proxy Type":{type:"select"},Vendor:{type:"select"},"Vendor Source":{type:"select"},"Deal Name":{type:"select"},"Deal Proxy":{type:"select"},"Avg Discount":{type:"text"},"Est ASP $":{type:"text"},"All in Shrink %":{type:"text"},"Vendor Shrink %":{type:"text"},"Internal Shrink %":{type:"text"},"Net ASP $":{type:"text"},"COGS/Unit":{type:"text"},"Est OPEX/Unit":{type:"text"},"Est GM $/Unit":{type:"text"}},"Performance Proxy 2":{"Proxy Type":{type:"select"},Vendor:{type:"select"},"Vendor Source":{type:"select"},"Deal Name":{type:"select"},"Deal Proxy":{type:"select"},"Avg Discount":{type:"text"},"Est ASP $":{type:"text"},"All in Shrink %":{type:"text"},"Vendor Shrink %":{type:"text"},"Internal Shrink %":{type:"text"},"Net ASP $":{type:"text"},"COGS/Unit":{type:"text"},"Est OPEX/Unit":{type:"text"},"Est GM $/Unit":{type:"text"}}}}:this.state={deals:null,data:{"Deal Number":0,Status:["submitted","available","bought","made offer","no interest"],"Buyer Name":"John Doe",Vendor:["Target"],Approver:["Jack Doe"],"Vendor Source":["Target.com"],"Source Reason":["Excess Inventory"],Resolution:["NA"],"Bid Information":{"Basis Type":["MSRP"],"Purchase Unit":["Pieces"],"Calculation Method":["% of Basis","Bid $ amount"],Currency:["USD","INR"]},"Deal Factors":{"Merch Condition":["good","near perfect","open stock","perfect","seconds","varying degrees"],"Damage Type":["None"],"Item Visibility":["100%","70%","40%"],"Item Similarity":["All long quality"],"Pricing Availability":["Vendor provided API"],"Pricing Methods":["Multiple Price Points","Single Price Points","% off"],Tags:["Strikethrough Barcode"],"Sticker Label":["remove 100%"],"Seasonal %":["25%","50%"],"FOB Point":["Tyler Tx"]},"Performance Proxy 1":{"Proxy Type":["Comp Source"],Vendor:["target","source"],"Vendor Source":["Target.com"],"Deal Name":["TGT.com Oct 2019"],"Deal Proxy":["NA"]},"Performance Proxy 2":{"Proxy Type":["Comp Deal"],Vendor:["target"],"Vendor Source":["Target.com"],"Deal Name":["TGT.com Sept 2019"],"Deal Proxy":["NA"],"Deal Number":["23456"]}},controls:{"Deal Number":{type:"text"},"Deal Name":{type:"text"},Status:{type:"select"},"Buyer Name":{type:"text"},Vendor:{type:"select"},Approver:{type:"select"},"Created Date":{type:"text"},"Bid Deadline":{type:"text"},"Vendor Source":{type:"select"},"Source Reason":{type:"select"},Resolution:{type:"select"},"Resolution Date":{type:"text"},"Bid Information":{"Basis Type":{type:"select"},"Bid %":{type:"text"},"Bid $":{type:"text"},"Transportation $":{type:"text"},Units:{type:"text"},AUR:{type:"text"},"Deposit Amount":{type:"text"},"Basis Amount $":{type:"text"},"Purchase Unit":{type:"select"},"Calculation Method":{type:"select"},Currency:{type:"select"}},"Deal Factors":{"Merch Condition":{type:"select"},"Damage Type":{type:"select"},"Item Visibility":{type:"select"},"Item Similarity":{type:"select"},"Pricing Availability":{type:"select"},"Pricing Methods":{type:"select"},Tags:{type:"select"},"Sticker Label":{type:"select"},"Seasonal %":{type:"select"},"FOB Point":{type:"text"}},"Performance Proxy 1":{"Proxy Type":{type:"select"},Vendor:{type:"select"},"Vendor Source":{type:"select"},"Deal Name":{type:"select"},"Deal Proxy":{type:"select"},"Avg Discount":{type:"text"},"Est ASP $":{type:"text"},"All in Shrink %":{type:"text"},"Vendor Shrink %":{type:"text"},"Internal Shrink %":{type:"text"},"Net ASP $":{type:"text"},"COGS/Unit":{type:"text"},"Est OPEX/Unit":{type:"text"},"Est GM $/Unit":{type:"text"}},"Performance Proxy 2":{"Proxy Type":{type:"select"},Vendor:{type:"select"},"Vendor Source":{type:"select"},"Deal Name":{type:"select"},"Deal Proxy":{type:"select"},"Avg Discount":{type:"text"},"Est ASP $":{type:"text"},"All in Shrink %":{type:"text"},"Vendor Shrink %":{type:"text"},"Internal Shrink %":{type:"text"},"Net ASP $":{type:"text"},"COGS/Unit":{type:"text"},"Est OPEX/Unit":{type:"text"},"Est GM $/Unit":{type:"text"}}}}}render(){var e=this.props.classes,t=Object.keys(this.state.controls),a=Object.keys(this.state.controls["Bid Information"]),r=Object.keys(this.state.controls["Deal Factors"]),o=Object.keys(this.state.controls["Performance Proxy 1"]),u=Object.keys(this.state.controls["Performance Proxy 2"]),h=t.map((t,a)=>{if("Performance Proxy 2"!==t&&"Performance Proxy 1"!==t&&"Deal Factors"!==t&&"Bid Information"!==t)return this.state.deals?"text"===this.state.controls[t].type?"Deal Number"===t?n.a.createElement(l.a,{id:t,key:t+a,label:t,onChange:this.changeHandler,value:this.state.data["Deal Number"]}):n.a.createElement(l.a,{id:t,key:t+a,label:t,value:this.state.deals.deals[t]}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.deals.deals[t][0],onChange:this.handleChange},this.state.deals.deals[t].map(e=>(console.log(t,e),console.log(e===this.state.deals.deals[t][0]),n.a.createElement(d.a,{value:e},e))))):"text"===this.state.controls[t].type?"Deal Number"===t?n.a.createElement(l.a,{id:t,key:t+a,label:t,onChange:this.changeHandler,value:this.state.data["Deal Number"]}):n.a.createElement(l.a,{id:t,key:t+a,label:t,value:"",onChange:this.changeHandler}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",onChange:this.changeHandler},this.state.data[t].map(e=>n.a.createElement(d.a,{value:e},e))))}),f=a.map((t,a)=>this.state.deals?"text"===this.state.controls["Bid Information"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:this.state.deals.deals["Bid Information"][t]}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.deals.deals["Bid Information"][t][0],onChange:this.handleChange},this.state.deals.deals["Bid Information"][t].map(e=>n.a.createElement(d.a,{value:e},e)))):"text"===this.state.controls["Bid Information"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:"",onChange:this.changeHandler}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",onChange:this.changeHandler},this.state.data["Bid Information"][t].map(e=>n.a.createElement(d.a,{value:e},e))))),v=r.map((t,a)=>this.state.deals?"text"===this.state.controls["Deal Factors"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:this.state.deals.deals["Deal Factors"][t]}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.deals.deals["Deal Factors"][t][0],onChange:this.handleChange},this.state.deals.deals["Deal Factors"][t].map(e=>n.a.createElement(d.a,{value:e},e)))):"text"===this.state.controls["Deal Factors"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:"",onChange:this.changeHandler}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",onChange:this.changeHandler},this.state.data["Deal Factors"][t].map(e=>n.a.createElement(d.a,{value:e},e))))),P=o.map((t,a)=>this.state.deals?"text"===this.state.controls["Performance Proxy 1"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:this.state.deals.deals["Performance Proxy 1"][t]}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.deals.deals["Performance Proxy 1"][t][0],onChange:this.handleChange},this.state.deals.deals["Performance Proxy 1"][t].map(e=>n.a.createElement(d.a,{value:e},e)))):"text"===this.state.controls["Performance Proxy 1"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:"",onChange:this.changeHandler}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",onChange:this.changeHandler},this.state.data["Performance Proxy 1"][t].map(e=>n.a.createElement(d.a,{value:e},e))))),E=u.map((t,a)=>this.state.deals?"text"===this.state.controls["Performance Proxy 2"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:this.state.deals.deals["Performance Proxy 2"][t]}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:this.state.deals.deals["Performance Proxy 2"][t][0],onChange:this.handleChange},this.state.deals.deals["Performance Proxy 2"][t].map(e=>n.a.createElement(d.a,{value:e},e)))):"text"===this.state.controls["Performance Proxy 2"][t].type?n.a.createElement(l.a,{id:t,key:t+a,label:t,value:"",onChange:this.changeHandler}):n.a.createElement(m.a,{className:e.formControl},n.a.createElement(p.a,{id:"demo-simple-select-label"},t),n.a.createElement(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:"",onChange:this.changeHandler},this.state.data["Performance Proxy 2"][t].map(e=>n.a.createElement(d.a,{value:e},e)))));return n.a.createElement("div",{className:"pb-86 pt-30 px-30 "},n.a.createElement("div",{className:e.root},n.a.createElement(b.a,{routeSegments:[{name:"Deals",path:"/deals"},{name:"Create/Edit Deal"}]}),n.a.createElement(i.a,{container:!0,spacing:3,style:{marginTop:10}},n.a.createElement(s.a,Object.assign({border:1},g),n.a.createElement(i.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},n.a.createElement(i.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",xs:10},h),n.a.createElement(i.a,{container:!0,direction:"column",justify:"space-around",alignItems:"center",xs:2},n.a.createElement(c.a,{variant:"contained",color:"primary",style:{margin:4,width:160}},"Save"),n.a.createElement(c.a,{variant:"contained",color:"primary",style:{margin:4,width:160}},"Share"),n.a.createElement(c.a,{variant:"contained",color:"primary",style:{margin:4,width:160}},"Submit for approval")))),n.a.createElement(i.a,{container:!0,direction:"row",justify:"center",alignItems:"center"}),n.a.createElement(i.a,{container:!0,direction:"row",justify:"space-around"},n.a.createElement(c.a,{variant:"contained",color:"primary"},"Deal Economics"),n.a.createElement(c.a,{variant:"contained",color:"primary"},"Merchandise Info"),n.a.createElement(c.a,{variant:"contained",color:"primary"},"Inbound Transit"),n.a.createElement(c.a,{variant:"contained",color:"primary"},"Production Planning"),n.a.createElement(c.a,{variant:"contained",color:"primary"},"Account Payable"),n.a.createElement(c.a,{variant:"contained",color:"primary"},"Actual Performance")),n.a.createElement(i.a,{container:!0,direction:"row",justify:"space-between",style:{marginTop:20}},n.a.createElement(s.a,Object.assign({border:1,justifyContent:"center"},x),n.a.createElement("div",{style:{width:240,textAlign:"center",paddingTop:5}},n.a.createElement("h5",null,"1. Enter Bid Information"),f)),n.a.createElement(s.a,Object.assign({border:1,justifyContent:"center"},x),n.a.createElement("div",{style:{width:240,textAlign:"center",paddingTop:5}},n.a.createElement("h5",null,"2. Enter all major deal factors"),v)),n.a.createElement(s.a,Object.assign({border:1,justifyContent:"center"},x),n.a.createElement("div",{style:{width:240,textAlign:"center",paddingTop:5}},n.a.createElement("h5",null,"3. Select performance proxy #1"),P)),n.a.createElement(s.a,Object.assign({border:1,justifyContent:"center"},x),n.a.createElement("div",{style:{width:240,textAlign:"center",paddingTop:5}},n.a.createElement("h5",null,"4. Select performance proxy #2"),E))))))}})}}]);
//# sourceMappingURL=23.ade8cd4b.chunk.js.map