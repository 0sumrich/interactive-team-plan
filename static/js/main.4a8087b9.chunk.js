(this["webpackJsonpinteractable-team-plan"]=this["webpackJsonpinteractable-team-plan"]||[]).push([[0],{206:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(28),i=n.n(a),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var s=n(230),l=n(229),u=n(15),d=n.n(u),f=n(110),p=n(20),h=n(4);var g=n(65);var v=function(t,e){for(var n=Math.max.apply(Math,Object(g.a)(e.map((function(t){return t.id}))))+1,r=Object(g.a)(e),a=0;a<t.length;a++){var i={id:n,task:"",team:"",objective:t[a].objective,complete:"FALSE"};r.push(i),n++}return r};function m(t){return"TRUE"===t}var x=50,j=70,b=50,O=500,y=O+x+25,k=y*Math.sqrt(2),w=Math.min(500,O)/2,A=(Math.PI,h.g),T=60,S=k/2-j,W=250+x,C=(h.f().range(A),h.e().range([0,1]),h.e().range([.2,.35])),M=h.e().range([5,9]);function N(t,e){return h.a().innerRadius(t[e].inner).outerRadius(t[e].outer).cornerRadius([2])}function z(t){return h.b(t).darker([2])+""}function E(t,e){var n=t[0],r=function(t,e,n){for(var r=(e-n)/(t+1),a=[{inner:n,outer:n+r}],i=1;i<t;i++){var c=a[i-1].outer+1;a.push({inner:c,outer:c+r})}return a}(t.length,w,90);C.domain([1,t.length]),M.domain([1,t.length]);var a=e.append("g").attr("class","mainChart");a.selectAll(".arc").data(n).enter().append("g").attr("class","arc").append("path").attr("id",(function(t){return"seg"+t.data.id})).attr("d",N(r,0)).style("fill",A[1]),a.selectAll(".oText").data(n).enter().append("text").attr("class","oText").attr("dy",(r[0].outer-r[0].inner)/2+2).attr("text-anchor","middle").attr("id",(function(t){return"text"+t.data.id})).style("fill","black").append("textPath").attr("startOffset","25%").attr("href",(function(t){return"#seg"+t.data.id})).attr("font-size","0.4em").text((function(t){return t.data.objective}));for(var i=function(e){var n=t[e];a.selectAll(".arc"+e.toString()).data(n).enter().append("g").attr("class","arc"+e.toString()).append("path").attr("id",(function(t){return"seg"+t.data.id})).attr("d",N(r,e)).style("fill",(function(t){var n=m(t.data.complete),r=h.b(A[e+1]);return n&&(r.opacity=.25),r+""})),a.selectAll(".task"+e.toString()).data(n).enter().append("text").attr("class","task"+e.toString()).attr("id",(function(t){return"text"+t.data.id})).attr("x",3).attr("dy",M(e)).style("fill",(function(t){return m(t.data.complete)?z(A[e+1]):"black"})).append("textPath").attr("href",(function(t){return"#seg"+t.data.id})).attr("font-size",C(e)+"em").text((function(t){return t.data.task})).each((function(t){!function(t,e,n,r){var a=h.h(t),i=h.h(a.node().parentNode),c=a.text().split(" "),o=[],s=1,l=i.attr("y"),u=i.attr("dy"),d=a.attr("href"),f=+a.attr("font-size").slice(0,-2),p=(e.endAngle-e.startAngle)*((n.outer+n.inner)/2),g=m(e.data.complete);if(a.node().getComputedTextLength()>p){for(;a.node().getComputedTextLength()>p;)o.push(c.pop()),a.text(c.join(" "));u=f<.3?5:6,i.attr("dy",u),s++,h.h(i.node().parentNode).append("text").attr("x",i.attr("x")).attr("y",l).attr("dy",s*u).attr("fill",g?r:"black").append("textPath").attr("href",d).attr("font-size",a.attr("font-size")).text(o.reverse().join(" "))}}(this,t,r[e],z(A[e+1]))}))},c=1;c<t.length;c++)i(c);var o=function(t){return t.map((function(t){var e=t[0].data.team;return 0===e.length?"Strategic Objectives":e}))}(t);o.splice(0,0,"Library Service Values");var s=h.e().domain([0,o.length]).range([5,150]),l=x/3-250,u=e.append("g").attr("transform","translate(250,"+l+")");u.selectAll(".circ").data(o).enter().append("circle").attr("class","circ").attr("cx",b).attr("cy",(function(t,e){return s(e)})).attr("r",4).attr("stroke","black").attr("stroke-width",.25).style("fill",(function(t,e){return A[e]})),u.selectAll(".legendText").data(o).enter().append("text").attr("class","legendText").attr("x",b+8).attr("y",(function(t,e){return s(e)+.5})).attr("dominant-baseline","middle").attr("font-size","0.4em").attr("fill","black").text((function(t){return t}))}var L=function(t){var e=t.tasks,n=t.objectives,r=function(t,e){var n,r,a,i,c=t.map((function(t){return t.value})),o=t.map((function(t){return t.id})),s=[{id:o.shift(),x:e,y:e,value:c.shift()}],l=2*e;for(i=0;i<c.length;i++)n=i/(c.length/2)*Math.PI,r=e*Math.cos(n)+l/2,a=e*Math.sin(n)+l/2,s.push({id:o[i],x:r,y:a,value:c[i]});return s}(t.values,T),a=h.h("#svg").attr("viewBox","0 0 ".concat(k," ").concat(y)).append("g").attr("transform","translate(".concat(S,",").concat(W,")"));h.h("#svg").call(h.j().on("zoom",(function(t){var e=t.transform;return h.h("#svg > g").attr("transform",e)}))),a.append("text").attr("y",y/-2+x/2-10).attr("font-size","1.25em").attr("text-anchor","middle").text("Libraries' Team Plan ".concat("2021-22"));var i=a.append("g").attr("transform","translate(".concat(-60,",").concat(-60,")"));i.append("circle").attr("r",T).attr("cx",T).attr("cy",T).attr("fill","none").attr("stroke","#e5e5e5").attr("stroke-width",8),i.selectAll(".valueCirc").data(r).enter().append("circle").attr("class","valueCirc").attr("r",25).attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})).attr("stroke-width",.5).attr("fill",A[0]),i.selectAll(".valueTxt").data(r).enter().append("text").attr("class","valueTxt").attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})).attr("text-anchor","middle").attr("font-size","0.4em").attr("id",(function(t){return t.id})).text((function(t){return t.value})).each((function(t){for(var e,n=h.h(this),r=n.text().split(" ").reverse(),a=0,i=t.y,c=t.x,o=[],s=2*Math.sqrt(Math.pow(25,2)-Math.pow(a,2))-7,l=n.text(null).append("tspan").attr("x",c).attr("y",i).attr("dy",a+"em");e=r.pop();)o.push(e),l.text(o.join(" ")),l.node().getComputedTextLength()>s&&(o.pop(),l.text(o.join(" ")),o=[e],a+=1.1,l=n.append("tspan").attr("x",c).attr("y",i).attr("dy",a+"em").text(e));var u=n.node().getBBox().height-12;n.attr("transform","translate(0, ".concat(u/2/-1," )"))})),E(function(t,e){var n=v(t,e),r=h.c().value([1]).padAngle([.005]).sort(null);n.forEach((function(t,e){if(" "===t.team[t.team.length-1]){var n=t.team.slice(0,-1);t.team=n}return t}));var a=function(t){return t.map((function(t){return t.team})).filter((function(t,e,n){return n.indexOf(t)===e}))}(n).filter((function(t){return""!==t}));a.splice(0,0,"");for(var i=r(function(t){return t.filter((function(t){return t.team.length<1}))}(n)),c=i.map((function(t){return{start:t.startAngle,end:t.endAngle}})),o=i.map((function(t,e){for(var i=c[e],o=n.filter((function(e){return e.objective===t.data.objective})),s=[],l=function(t){var e=o.filter((function(e){return e.team===a[t]})),n=r.startAngle(i.start).endAngle(i.end)(e);e.length>0&&s.push(n)},u=1;u<a.length;u++)l(u);return s})).reduce((function(t,e){return t.concat(e)}),[]).reduce((function(t,e){return t.concat(e)}),[]),s=[i],l=function(t){s.push(o.filter((function(e){return e.data.team===a[t]})))},u=1;u<a.length;u++)l(u);return s}(n,e),a)},P=n(225),R=n(2),B=Object(P.a)((function(t){return{tooltip:{display:"inline",marginLeft:function(e){return e.margin?t.spacing(3)+e.margin.left:0},marginTop:function(e){return e.margin?t.spacing(3)+e.margin.top:0},position:"absolute",left:function(t){return t.left?t.left:"auto"},top:function(t){return t.top},transform:"translate(-50%, -100%)",visibility:function(t){return t.visible?"visible":"hidden"},background:t.palette.grey[900],opacity:.9,color:t.palette.primary.contrastText,borderRadius:t.shape.borderRadius,padding:t.spacing(1)}}}));var U=function(t){var e=B(t);return Object(R.jsx)("div",{className:e.tooltip,children:t.children})};var q=n(226),F=n(231),I=function(t){var e=t.title,n=t.text;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(q.a,{variant:"caption",display:"block",color:"secondary",children:e}),Object(R.jsx)(q.a,{variant:"body2",display:"block",gutterBottom:!0,children:n})]})};function D(t){var e=t.hoverData,n=e.objective,r=e.team,a=e.task;return 0===r.length?Object(R.jsx)(q.a,{variant:"caption",component:"div",children:Object(R.jsx)(F.a,{fontWeight:"fontWeightBold",children:n})}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(I,{title:"Task",text:a}),Object(R.jsx)(I,{title:"Outcome",text:n})]})}var J=n(46),G=n(104),V=n(105),$={select:G.a,selectAll:V.a};function H(t){var e=$.select(t.target),n=function(t){return Object(J.a)(t).darker([.5])}(e.style("fill"));e.attr("stroke",n.toString()).attr("stroke-width",2)}function K(t,e){var n;H(t),(n=e.data.team).length>0&&$.selectAll(".legendText").filter((function(t){return t===n})).style("font-weight","bold"),function(t){$.selectAll(".circ").filter((function(e){return e===t})).attr("stroke-width",1)}(e.data.team)}function Q(t,e){var n;!function(t){$.select($.select(t.target).node().firstElementChild).attr("stroke","none")}(t),n=e.data.team,$.selectAll(".legendText").filter((function(t){return t===n})).style("font-weight","normal"),function(t){$.selectAll(".circ").filter((function(e){return e===t})).attr("stroke-width",.25)}(e.data.team)}var X=Object(P.a)((function(t){return{root:{display:"block",margin:"auto"},chartWrapper:{position:"relative"}}}));var Y=function(t){var e=t.data,n=X(),a=Object(r.useState)({objective:"Test",task:"test",team:"test"}),i=Object(p.a)(a,2),c=i[0],o=i[1],s=Object(r.useState)([0,0]),l=Object(p.a)(s,2),u=l[0],d=l[1],f=Object(r.useState)(!1),g=Object(p.a)(f,2),v=g[0],m=g[1];return Object(r.useEffect)((function(){return L(e)}),[e]),Object(r.useEffect)((function(){h.i('g[class^="arc"]').style("cursor","pointer").on("mouseover",(function(t,e){var n=e.data,r=n.objective,a=n.task,i=n.team;o({objective:r,task:a,team:i}),d(function(t){var e=h.h("#svg").node(),n=e.getBoundingClientRect(),r=h.d(t,e),a=Object(p.a)(r,2),i=a[0],c=a[1];return[i*(n.width/k),c*(n.height/y)]}(t)),K(t,e),(r.length>0&&a.length>0||0===i.length)&&m(!0)})).on("mouseleave",(function(t,e){Q(t,e),m(!1)}))}),[]),Object(R.jsxs)("div",{className:n.chartWrapper,children:[Object(R.jsx)("svg",{id:"svg",className:n.root}),Object(R.jsx)(U,{left:u[0],top:u[1]-5,visible:v,children:Object(R.jsx)(D,{hoverData:c})})]})},Z=n(232),_=n(111),tt=n.n(_),et=n(112),nt=n.n(et),rt=n(227),at={select:G.a},it=Object(P.a)((function(t){return{root:{flexGrow:1,padding:t.spacing(1)}}})),ct=function(t){var e=t.direction,n=t.click,r=t.degrees;return Object(R.jsx)(rt.a,{item:!0,sm:12,md:6,children:Object(R.jsx)(Z.a,{variant:"outlined",onClick:function(){return n(r)},startIcon:"left"===e?Object(R.jsx)(tt.a,{}):Object(R.jsx)(nt.a,{}),children:e})})},ot=function(t){var e=at.select(".mainChart"),n=e.attr("transform"),r="rotate(".length,a=n?Number(n.slice(r,n.indexOf(")",r))):0;e.transition().duration(1e3).attr("transform","rotate(".concat(a+t,")"))};function st(t){var e=t.degrees,n=it();return Object(R.jsxs)(rt.a,{container:!0,spacing:2,className:n.root,children:[Object(R.jsx)(ct,{direction:"left",click:ot,degrees:e/-1}),Object(R.jsx)(ct,{direction:"right",click:ot,degrees:e})]})}var lt=n(228),ut=Object(P.a)((function(t){return{loading:{display:"flex",margin:"auto",padding:t.spacing(2)}}}));var dt=function(){var t=Object(r.useState)(null),e=Object(p.a)(t,2),n=e[0],a=e[1],i=ut();return Object(r.useEffect)((function(){(function(){var t=Object(f.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://team-plan.glitch.me/api/main");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,a(n),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),a(null),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(R.jsxs)(rt.a,{container:!0,spacing:3,children:[Object(R.jsx)(rt.a,{item:!0,xs:2,children:Object(R.jsx)(st,{degrees:n?360/(2*n.objectives.length):45})}),Object(R.jsx)(rt.a,{item:!0,xs:10,children:n?Object(R.jsx)(Y,{data:n}):Object(R.jsx)(lt.a,{className:i.loading})})]})},ft=n(113),pt=Object(ft.a)({});i.a.render(Object(R.jsxs)(l.a,{theme:pt,children:[Object(R.jsx)(s.a,{}),Object(R.jsx)(dt,{})]}),document.querySelector("#root")),function(t){if("serviceWorker"in navigator){if(new URL("/interactive-team-plan",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/interactive-team-plan","/service-worker.js");c?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):o(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):o(e,t)}))}}()}},[[206,1,2]]]);
//# sourceMappingURL=main.4a8087b9.chunk.js.map