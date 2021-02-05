(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(1),c=a.n(n),o=a(8),r=a.n(o),i=(a(14),a(2)),d=a(3),l=a(5),_=a(4),h=(a(15),a(7),function(t){Object(l.a)(a,t);var e=Object(_.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{style:{display:this.props.display},children:[Object(s.jsx)("div",{className:"progress-text-title",children:this.props.counterTitle}),Object(s.jsxs)("div",{className:"progress",children:[Object(s.jsx)("div",{className:"progress-text",children:this.props.counterValue}),Object(s.jsx)("div",{className:"progress-value",style:{width:this.props.progress}})]})]})}}]),a}(n.Component)),u=function(t){Object(l.a)(a,t);var e=Object(_.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).toggleDisplayState=function(){var t="none"===s.state.display?"block":"none",e="none"!==t;s.setState({display:t,isActive:e})},s.state={display:"none",hint:"Click to view details",isActive:!1},s}return Object(d.a)(a,[{key:"render",value:function(){var t,e=this.props.data,a=(parseInt(e.total.confirmed)/parseInt(e.total.tested)*100).toFixed(2);return t=this.state.isActive?"":this.state.hint,Object(s.jsxs)("div",{className:"card",onClick:this.toggleDisplayState,style:{background:this.state.color},children:[Object(s.jsx)("h3",{children:this.props.title}),Object(s.jsx)("p",{children:t}),Object(s.jsxs)("div",{style:{display:this.state.display},children:[Object(s.jsx)(h,{counterTitle:"Tested",counterValue:parseInt(e.total.tested).toLocaleString(),progress:"100%"}),Object(s.jsx)(h,{counterTitle:"Confirmed",counterValue:parseInt(e.total.confirmed).toLocaleString(),progress:"100%"}),Object(s.jsx)(h,{counterTitle:"Positivity Rate",counterValue:a+"%",progress:"100%"}),Object(s.jsx)(h,{counterTitle:"Recovered",counterValue:parseInt(e.total.recovered).toLocaleString(),progress:"100%"}),Object(s.jsx)(h,{counterTitle:"Deceased",counterValue:parseInt(e.total.deceased).toLocaleString(),progress:"100%"})]})]})}}]),a}(n.Component),m=function(t){Object(l.a)(a,t);var e=Object(_.a)(a);function a(t){var s;return Object(i.a)(this,a),(s=e.call(this,t)).setStateCodes=function(){s.setState({state_meta:[{state_code:"TT",state_name:"Total"},{state_code:"MH",state_name:"Maharashtra"},{state_code:"KA",state_name:"Karnataka"},{state_code:"AP",state_name:"Andhra Pradesh"},{state_code:"TN",state_name:"Tamil Nadu"},{state_code:"KL",state_name:"Kerala"},{state_code:"DL",state_name:"Delhi"},{state_code:"UP",state_name:"Uttar Pradesh"},{state_code:"WB",state_name:"West Bengal"},{state_code:"OR",state_name:"Odisha"},{state_code:"RJ",state_name:"Rajasthan"},{state_code:"TG",state_name:"Telangana"},{state_code:"CT",state_name:"Chhattisgarh"},{state_code:"HR",state_name:"Haryana"},{state_code:"BR",state_name:"Bihar"},{state_code:"GJ",state_name:"Gujarat"},{state_code:"MP",state_name:"Madhya Pradesh"},{state_code:"AS",state_name:"Assam"},{state_code:"PB",state_name:"Punjab"},{state_code:"JK",state_name:"Jammu and Kashmir"},{state_code:"JH",state_name:"Jharkhand"},{state_code:"UT",state_name:"Uttarakhand"},{state_code:"HP",state_name:"Himachal Pradesh"},{state_code:"GA",state_name:"Goa"},{state_code:"PY",state_name:"Puducherry"},{state_code:"TR",state_name:"Tripura"},{state_code:"MN",state_name:"Manipur"},{state_code:"CH",state_name:"Chandigarh"},{state_code:"AR",state_name:"Arunachal Pradesh"},{state_code:"ML",state_name:"Meghalaya"},{state_code:"NL",state_name:"Nagaland"},{state_code:"LA",state_name:"Ladakh"},{state_code:"SK",state_name:"Sikkim"},{state_code:"AN",state_name:"Andaman and Nicobar Islands"},{state_code:"MZ",state_name:"Mizoram"},{state_code:"DN",state_name:"Dadra and Nagar Haveli and Daman and Diu"},{state_code:"UN",state_name:"State Unassigned"},{state_code:"LD",state_name:"Lakshadweep"}]})},s.getDataFromAPI=function(){fetch("https://api.covid19india.org/v4/data.json",{method:"GET",mode:"cors"}).then((function(t){return t.json()})).then((function(t){void 0!==t.TT.total&&s.setState({india_data:t.TT.total});var e=t;delete e.TT,void 0!==e&&s.setState({statewise_data:e}),console.log(s.state.statewise_data),console.log(s.state.statewise_data.BR),s.setState({data_received:!0})})).catch((function(t){console.log(t)}))},s.state={statewise_data:{},india_data:{},data_received:!1,state_meta:{}},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.setStateCodes(),this.getDataFromAPI()}},{key:"getCardDetails",value:function(){var t=this,e=[],a=Object.entries(this.state.statewise_data),n=[];return a.forEach((function(a){var c=t.state.state_meta.find((function(t){return t.state_code===a[0]})),o={state_code:a[0],data:a[1],state_name:c.state_name};e.push(Object(s.jsx)(u,{data:o.data,title:o.state_name},o.state_code)),n.push(o),console.log(o.data)})),e}},{key:"render",value:function(){var t;return t=this.state.data_received?this.getCardDetails():Object(s.jsx)("h1",{children:"Data Recieving..."}),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"COVID 19 TRACKER - INDIA"})}),t,Object(s.jsx)("footer",{children:Object(s.jsx)("h3",{children:"COVID 19 TRACKER PROJECT - SHIJIN RAJ 2021"})})]})}}]),a}(n.Component),j=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),s(t),n(t),c(t),o(t)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),j()},7:function(t,e,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.385d67af.chunk.js.map