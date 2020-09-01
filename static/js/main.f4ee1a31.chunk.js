(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Card_container__UTOq7",card:"Card_card__2Ztpm",confirm:"Card_confirm__3TVkU",recover:"Card_recover__7bxiX",death:"Card_death__sLjTa"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(71),o=a.n(c),s=a(5),i=a.n(s),u=a(10),l=a(72),d=a(73),m=a(81),f=a(80),b=a(225),p=a(229),v=a(226),h=a(227),y=a(13),E=a.n(y),x=a(30),O=a.n(x),g=a(31),j=a.n(g),A=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:E.a.container},r.a.createElement(b.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(b.a,{item:!0,component:p.a,xs:12,md:3,className:j()(E.a.card,E.a.confirm)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(O.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of active cases of Covid-19"))),r.a.createElement(b.a,{item:!0,component:p.a,xs:12,md:3,className:j()(E.a.card,E.a.recover)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0,className:E.a.tx1},"Recoveries"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(O.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of recoveries from Covid-19"))),r.a.createElement(b.a,{item:!0,component:p.a,xs:12,md:3,className:j()(E.a.card,E.a.death)},r.a.createElement(v.a,null,r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(h.a,{variant:"h5"},r.a.createElement(O.a,{start:0,end:c.value,duration:2.5,separator:","})),r.a.createElement(h.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(h.a,{variant:"body2"},"Number of Deaths caused by Covid-19"))))):"Loading..."},C=a(29),D=a(43),U=a(32),k=a.n(U),G="https://covid19.mathdro.id/api",w=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=G,t&&(a="".concat(G,"/countries/").concat(t)),e.prev=2,e.next=5,k.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(G,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(G,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(78),F=a.n(V),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)({}),d=Object(C.a)(l,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=a?r.a.createElement(D.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null,p=m[0]?r.a.createElement(D.Line,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:F.a.container},s?b:p)},Y=a(230),X=a(228),W=a(44),Z=a.n(W),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,L();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(Y.a,{className:Z.a.formControl},r.a.createElement(X.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{className:Z.a.color1,value:"global"},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),"))}"))},Q=a(45),R=a.n(Q),T=a(79),P=a.n(T),N=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:R.a.container},r.a.createElement("img",{className:R.a.image,src:P.a,alt:"Covid19"}),r.a.createElement(A,{data:t}),r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(z,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(N,null),document.getElementById("root"))},44:function(e,t,a){e.exports={formControl:"Country_formControl__2EoGx",color1:"Country_color1__1tO3C"}},45:function(e,t,a){e.exports={container:"App_container___Q_lu",image:"App_image__P-FA8"}},78:function(e,t,a){e.exports={container:"Chart_container__liiq2"}},79:function(e,t){e.exports="data:image/png;base64,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"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.f4ee1a31.chunk.js.map