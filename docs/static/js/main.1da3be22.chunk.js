(this.webpackJsonpspeedtest=this.webpackJsonpspeedtest||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),c=r(4),s=r.n(c),i=(r(15),r(8)),l=r(5),h=r(6),o=r(2),d=r(10),j=r(9),u=r(7),p=r.n(u),b=(r(17),r(0));function m(e){var t=p.a.renderToStaticMarkup(e),r=document.createElement("textarea");r.innerHTML=t;var a=r.value.replace(/(<([^>]+)>)/gi,"").split(":");return a[a.length-1]}for(var x=[{html:Object(b.jsx)("p",{children:"Hello how are you doing?"})},{html:Object(b.jsxs)("p",{children:[Object(b.jsxs)("i",{children:[Object(b.jsx)("b",{children:"Clear and replace text"})," with:"]}),"Yo Jason, what's up?"]}),clear:!0},{html:Object(b.jsx)("p",{children:"I would love to catch up. Are you free on Thursday night for a beer?"}),clear:!1},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:"Change Thursday to Friday:"}),"I would love to catch up. Are you free on ",Object(b.jsx)("b",{children:"Friday"})," night for a beer?"]}),clear:!0},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:"Insert cake emoji and party emoji:"}),"Saturday it's my birthday so I want to start the celebration early \ud83c\udf82"]}),clear:!0},{html:Object(b.jsx)("p",{children:"I was thinking we could meet at teske"}),clear:!0},{html:Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"Take a break, then tap for next prompt when you're ready..."})}),break:!0,clear:!0},{html:Object(b.jsx)("p",{children:"Hey I have some time off.  Are you interested in going backpacking next weekend?"})},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:"Replace weekend with Friday:"}),"Hey I have some time off.  Are you interested in going backpacking next ",Object(b.jsx)("b",{children:"Friday"}),"?"]}),clear:!0},{html:Object(b.jsx)("p",{children:"I can drive, but my car is acting a bit funky"})},{html:Object(b.jsxs)("p",{children:[Object(b.jsxs)("i",{children:[Object(b.jsx)("b",{children:"Clear and replace text"})," with:"]}),"My car is acting weird. Can you drive?"]}),clear:!0},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:"Add laughing emoji:"}),"Also you should ask Anne to join.  She is so funny \ud83d\ude02"]}),clear:!0},{html:Object(b.jsx)("p",{children:"I am happy to go anywhere but I was thinking about going to Mount Monadnock"}),clear:!0},{html:Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:"Take a break, then tap for next prompt when you're ready..."})}),break:!0,clear:!0},{html:Object(b.jsx)("p",{children:"Can you stop at the grocery store?"}),clear:!0},{html:Object(b.jsx)("p",{children:"I want to start preparing that dinner for Thursday night."})},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:'Replace "Thursday" with "Wednesday":'}),"I want to start preparing that dinner for ",Object(b.jsx)("b",{children:"Wednesday"})," night."]}),clear:!0},{html:Object(b.jsx)("p",{children:"I want to try and make that new chili recipe."})},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:"Clear and replace with:"}),"What do you think about chili?"]}),clear:!0},{html:Object(b.jsx)("p",{children:"I was also thinking about making some paczki for next week"}),clear:!0},{html:Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{children:"Add heart eyes emoji:"}),"Thank you \ud83d\ude0d"]}),clear:!0}],O=0;O<x.length;O++)x[O].text=m(x[O].html);function g(e){var t=-1===e.currentPrompt?"Tap to start":"Tap for next prompt";return Object(b.jsx)("button",{onClick:e.onClick,type:"button",children:t})}var y=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(e){var a;return Object(l.a)(this,r),(a=t.call(this,e)).state={currentPrompt:-1,taskCompleted:!0,shouldClear:!0,taskStartTime:0,taskTimes:[],debug:""},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a.handleNext=a.handleNext.bind(Object(o.a)(a)),a}return Object(h.a)(r,[{key:"handleChange",value:function(e){var t=function(e){return e.replaceAll(" ","").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').toLowerCase()};this.state.taskCompleted||(console.log(e.target.value),console.log(x[this.state.currentPrompt].text),t(e.target.value).indexOf(t(x[this.state.currentPrompt].text))>-1&&this.setState({taskCompleted:!0,taskTimes:[].concat(Object(i.a)(this.state.taskTimes),[Date.now()-this.state.taskStartTime])}))}},{key:"handleNext",value:function(e){var t=this;this.setState({shouldClear:this.state.currentPrompt<0||x[this.state.currentPrompt].clear,taskCompleted:this.state.currentPrompt+1<x.length&&x[this.state.currentPrompt+1].break,currentPrompt:this.state.currentPrompt+1,taskStartTime:Date.now()},(function(){if(t.state.currentPrompt<x.length){var e=document.getElementById("textbox");e.blur(),t.state.shouldClear&&(e.value=""),e.focus()}}))}},{key:"handleFocus",value:function(e){e.target.select()}},{key:"render",value:function(){if(this.state.currentPrompt<x.length){var e=Object(b.jsx)(g,{currentPrompt:this.state.currentPrompt,onClick:this.handleNext}),t=this.state.currentPrompt>=0?this.state.currentPrompt+1+" / "+x.length:"";return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"half",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:this.state.currentPrompt in x?x[this.state.currentPrompt].html:""}),Object(b.jsx)("h2",{children:this.state.taskCompleted?e:""})]}),Object(b.jsx)("div",{className:"bottom half",children:Object(b.jsx)("textarea",{rows:"4",id:"textbox",onChange:this.handleChange})})]})}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Done- please enter your username then tap submit:"}),Object(b.jsxs)("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLSdDzSs-JBDvNuYW225c3Dog4grp0oCIdLfWzQyM0egu6Cf6mg/formResponse",target:"_self",method:"POST",id:"mG61Hd",jsmodel:"TOfxwf Q91hve","data-response":"%.@.[]]","data-first-entry":"0","data-last-entry":"1","data-is-first-page":"true",children:[Object(b.jsx)("textarea",{readOnly:!0,name:"entry.1431434204",onFocus:this.handleFocus,value:JSON.stringify(this.state.taskTimes)}),Object(b.jsx)("input",{name:"entry.890606469",placeholder:"Enter your username here then tap Submit"}),Object(b.jsx)("input",{name:"entry.26542893",type:"hidden",value:navigator.userAgent}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]})]})}}]),r}(n.a.Component),f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,20)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),a(e),n(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.1da3be22.chunk.js.map