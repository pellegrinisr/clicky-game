(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e){e.exports=[{id:1,name:"angels",src:"angels.jpg"},{id:2,name:"atlanta",src:"atlanta.jpg"},{id:3,name:"boston",src:"boston.gif"},{id:4,name:"chicago",src:"chicago.png"},{id:5,name:"cleveland",src:"cleveland.jpg"},{id:6,name:"colorado",src:"colorado.png"},{id:7,name:"dodgers",src:"dodgers.jpg"},{id:8,name:"houston",src:"houston.png"},{id:9,name:"milwaukee",src:"milwaukee.jpg"},{id:10,name:"new york",src:"newYork.jpg"},{id:11,name:"oakland",src:"oakland.jpg"},{id:12,name:"washington",src:"washington.png"}]},,,,,,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),s=t(5),i=t(6),o=t(8),m=t(7),d=t(9),u=t(1),g=(t(15),function(e){return c.a.createElement("nav",{className:"navbar fixed-top"},c.a.createElement("div",{className:"nav navbar-nav navbar-left"},c.a.createElement("a",{href:"/"},"Clicky Game")),c.a.createElement("div",{className:"nav navbar-nav navbar-center"},c.a.createElement("span",{className:"navbar-text"},"Click a Team Logo to Begin!")),c.a.createElement("div",{className:"nav navbar-nav navbar-right text-light"},"Score: ",e.score," | Top Score: ",e.topScore))}),h=(t(17),function(e){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("h1",null,"MLB Postseason"),c.a.createElement("h4",null,"Welcome to October"),c.a.createElement("p",null,"Click the Team Logos to Earn Points, but Don't Click Any Image More than Once!")))}),v=(t(19),function(e){return c.a.createElement("img",{className:"pic",src:"images/"+e.src,alt:"test",onClick:e.onClick,id:e.id})}),f=(t(21),function(e){return c.a.createElement("footer",null,c.a.createElement("div",{className:"color"}),c.a.createElement("span",{className:"px-3"},"Clicky Game")," ",c.a.createElement("img",{className:"py-1",src:"favicon.ico",alt:"react icon"}))}),p=t(2),k=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={images:p,score:0,topScore:0,clicked:[]},t.shuffle=t.shuffle.bind(Object(u.a)(Object(u.a)(t))),t.clickHandler=t.clickHandler.bind(Object(u.a)(Object(u.a)(t))),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"shuffle",value:function(e){for(var a=e.slice(),t=a.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=a[t];a[t]=a[n],a[n]=c}this.setState({images:a})}},{key:"clickHandler",value:function(e){var a=this.state.clicked.slice();if(console.log("clicked: ",e.target.id),a.includes(e.target.id))window.alert("you lose"),this.setState({images:p,score:0,clicked:[]});else{var t=this.state.score;t++,a.push(e.target.id),t>this.state.topScore?this.setState({clicked:a,score:t,topScore:t}):this.setState({clicked:a,score:t}),this.shuffle(this.state.images)}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.images.map(function(a){return c.a.createElement("div",{className:"col-lg-3",key:a.id},c.a.createElement(v,{onClick:e.clickHandler,id:a.id,name:a.name,src:a.src}))}))),c.a.createElement("br",null),c.a.createElement(f,null))}}]),a}(c.a.Component);l.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.6095c362.chunk.js.map