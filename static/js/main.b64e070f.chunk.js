(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(7),n(0)),d=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).timerIdTime=0,e.state={time:new Date},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdTime=window.setInterval((function(){e.setState({time:new Date}),console.info(e.state.time.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.name;e.name!==t&&console.debug("Renamed from ".concat(e.name," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerIdTime)}},{key:"render",value:function(){var e=this.state.time,t=this.props.name;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function v(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).timerId=0,e.state={hasClock:!0,clockName:"Clock-0"},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1}),clearInterval(e.timerId)})),document.addEventListener("click",(function(){e.setState({hasClock:!0})})),this.timerId=window.setInterval((function(){e.setState({clockName:v()})}),3300)}},{key:"componentWillUnmount",value:function(){var e=this;document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1}),clearInterval(e.timerId)})),document.removeEventListener("click",(function(){e.setState({hasClock:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(d,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))},7:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.b64e070f.chunk.js.map