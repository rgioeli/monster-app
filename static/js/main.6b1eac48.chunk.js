(this["webpackJsonpmonster-roledex"]=this["webpackJsonpmonster-roledex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(3),o=n.n(c),a=(n(12),n(4)),i=n(5),h=n(7),d=n(6),l=(n(13),n(14),n(15),n(0)),u=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2").concat(e.monster.id)}),Object(l.jsx)("h1",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},j=function(e){var t=e.monsters.filter((function(t){return t.name.toLowerCase().includes(e.searchField)}));return Object(l.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(l.jsx)(u,{monster:e},e.id)}))})},m=function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{type:"search",placeholder:t,onChange:n})},b=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleSearch=function(t){e.setState({searchField:t.target.value.toLowerCase()})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{placeholder:"Search Monster...",handleChange:this.handleSearch}),Object(l.jsx)(j,{monsters:this.state.monsters,searchField:this.state.searchField})]})}}]),n}(r.Component);o.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.6b1eac48.chunk.js.map