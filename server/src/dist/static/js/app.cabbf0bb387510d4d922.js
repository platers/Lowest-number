webpackJsonp([1],{"0Act":function(e,t,n){"use strict";var r=n("w8lG");t.a={fetchEvents:function(){return n.i(r.a)().get("events")},getGame:function(e){return n.i(r.a)().get("getGame/"+e.id)},addEvent:function(e){return n.i(r.a)().post("add_event",e)},getCurrentGame:function(){return n.i(r.a)().post("currentGame")}}},"1ASC":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"posts"},[n("h1",[e._v("Lowest number")]),e._v(" "),n("div",[n("router-link",{attrs:{to:{name:"results"}}},[e._v("Results")])],1),e._v(" "),n("p",[e._v("Guess a positive integer. The person with the lowest unique number wins!")]),e._v(" "),n("div",{staticClass:"form"},[e.errors.length?n("p",[n("b",[e._v("Please correct the following error(s):")]),e._v(" "),n("ul",e._l(e.errors,function(t){return n("li",{key:t.id},[e._v(e._s(t))])}))]):e._e(),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.number,expression:"number"}],attrs:{type:"number",name:"number",placeholder:"Number",min:"1",step:"1"},domProps:{value:e.number},on:{input:function(t){t.target.composing||(e.number=t.target.value)}}})]),e._v(" "),n("div",[n("button",{staticClass:"app_post_btn",on:{click:e.addGuess}},[e._v("Guess")])])])])},a=[],s={render:r,staticRenderFns:a};t.a=s},"A/yq":function(e,t){},FGQs:function(e,t,n){"use strict";var r=n("Xxa5"),a=n.n(r),s=n("exGp"),u=n.n(s),i=n("0Act");t.a={name:"home",data:function(){return{name:"",number:0,entry_limit:3,gameId:0,events:[],errors:[],debug:-1}},methods:{checkForm:function(){this.errors=[],this.name||this.errors.push("Name required"),this.number||this.errors.push("Number required"),this.number<1&&this.errors.push("Number must be at least 1"),this.number>1e5&&this.errors.push("Number must be less than 100000"),this.number%1!=0&&this.errors.push("Number must be an integer")},getGame:function(){var e=this;return u()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getGame({id:e.gameId});case 2:n=t.sent,e.debug=n,e.events=n.data.events,e.events.length>=e.entry_limit&&(e.gameId+=1);case 6:case"end":return t.stop()}},t,e)}))()},currentGame:function(){var e=this;return u()(a.a.mark(function t(){var n;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getCurrentGame({});case 2:n=t.sent,e.debug=n.data,e.gameId=n.data.id;case 5:case"end":return t.stop()}},t,e)}))()},addGuess:function(){var e=this;return u()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.checkForm(),!e.errors.length){t.next=4;break}return e.$swal("Input was not valid","Please fix the above errors","error"),t.abrupt("return");case 4:return t.next=6,e.currentGame();case 6:return t.next=8,e.getGame();case 8:return t.next=10,i.a.addEvent({name:e.name,number:e.number,game:e.gameId});case 10:e.$swal("Great!","Your post has been updated!","success"),e.$router.push({name:"home"});case 12:case"end":return t.stop()}},t,e)}))()}}}},FpRT:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s={render:r,staticRenderFns:a};t.a=s},Ghqa:function(e,t){},M93x:function(e,t,n){"use strict";function r(e){n("A/yq")}var a=n("xJD8"),s=n("FpRT"),u=n("VU/8"),i=r,o=u(a.a,s.a,!1,i,null,null);t.a=o.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("M93x"),s=n("YaEn"),u=n("oYt9");r.a.use(u.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},RCpc:function(e,t,n){"use strict";var r=n("Xxa5"),a=n.n(r),s=n("BO1k"),u=n.n(s),i=n("exGp"),o=n.n(i),c=n("0Act");t.a={name:"results",data:function(){return{events:[],debug:[],entry_limit:3,numSubmissions:0}},mounted:function(){this.getEvents()},methods:{getEvents:function(){var e=this;return o()(a.a.mark(function t(){var n,r,s,i,o,m,v,p,l,d,h;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.fetchEvents({});case 2:n=t.sent,r=n.data.events,e.debug=r,s={},i={},o=r.length-1;case 8:if(!(o>=0)){t.next=18;break}if(i[r[o].game]?i[r[o].game]++:i[r[o].game]=1,!(o>0&&r[o].number===r[o-1].number&&r[o].game===r[o-1].game)){t.next=12;break}return t.abrupt("continue",15);case 12:if(!(o<r.length-1&&r[o].number===r[o+1].number&&r[o].game===r[o+1].game)){t.next=14;break}return t.abrupt("continue",15);case 14:s[r[o].game]=r[o].number;case 15:o--,t.next=8;break;case 18:for(e.numSubmissions=r.length%e.entry_limit,m=!0,v=!1,p=void 0,t.prev=22,l=u()(r);!(m=(d=l.next()).done);m=!0)h=d.value,console.log(i[h.game]),i[h.game]===e.entry_limit&&e.events.push({name:h.name,game:h.game,number:h.number,color:h.game%2,winner:s[h.game]===h.number});t.next=30;break;case 26:t.prev=26,t.t0=t.catch(22),v=!0,p=t.t0;case 30:t.prev=30,t.prev=31,!m&&l.return&&l.return();case 33:if(t.prev=33,!v){t.next=36;break}throw p;case 36:return t.finish(33);case 37:return t.finish(30);case 38:case"end":return t.stop()}},t,e,[[22,26,30,38],[31,,33,37]])}))()}}}},Sy1g:function(e,t,n){"use strict";function r(e){n("Ghqa")}var a=n("RCpc"),s=n("t+1o"),u=n("VU/8"),i=r,o=u(a.a,s.a,!1,i,null,null);t.a=o.exports},UdIB:function(e,t){},YaEn:function(e,t,n){"use strict";var r=n("7+uW"),a=n("/ocq"),s=n("wUZA"),u=n("Sy1g");r.a.use(a.a),t.a=new a.a({mode:"history",routes:[{path:"/",name:"home",component:s.a},{path:"/results",component:u.a,name:"results"}]})},hkSN:function(e,t){},"t+1o":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"posts"},[n("h1",[e._v("Lowest number")]),e._v(" "),n("p",[e._v("Guess a positive integer. The person with the lowest unique number wins!")]),e._v(" "),n("p",[e._v("Next game has "+e._s(e.numSubmissions)+"/"+e._s(e.entry_limit)+" submissions")]),e._v(" "),n("div",{staticClass:"table"},[n("table",[e._m(0),e._v(" "),e._l(e.events,function(t){return n("tr",{key:t.id,class:t.color?"white":"gray"},[n("td",[e._v(e._s(t.game))]),e._v(" "),n("td",[e._v(e._s(t.name))]),e._v(" "),n("td",[e._v(e._s(t.number))]),e._v(" "),t.winner?n("td",[n("img",{attrs:{src:"https://freeiconshop.com/wp-content/uploads/edd/star-curved-outline.png",width:"13px"}})]):e._e()])})],2)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",[e._v("Game")]),e._v(" "),n("td",[e._v("Name")]),e._v(" "),n("td",[e._v("Guess")])])}],s={render:r,staticRenderFns:a};t.a=s},w8lG:function(e,t,n){"use strict";var r=n("mtWM"),a=n.n(r);t.a=function(){return a.a.create({baseURL:"http://lowest-number.herokuapp.com"})}},wUZA:function(e,t,n){"use strict";function r(e){n("hkSN")}var a=n("FGQs"),s=n("1ASC"),u=n("VU/8"),i=r,o=u(a.a,s.a,!1,i,null,null);t.a=o.exports},xJD8:function(e,t,n){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.cabbf0bb387510d4d922.js.map