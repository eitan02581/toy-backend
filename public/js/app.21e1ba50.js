(function(t){function e(e){for(var o,a,i=e[0],u=e[1],c=e[2],d=0,f=[];d<i.length;d++)a=i[d],s[a]&&f.push(s[a][0]),s[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10e3":function(t,e,n){"use strict";var o=n("a720"),s=n.n(o);s.a},4678:function(t,e,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}s.keys=function(){return Object.keys(o)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{"data-aos":"fade",to:"/"}},[t._v("toys")]),t._v("|\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),n("h2",[t._v("Hey "+t._s(t.loggedUserName))])],1),n("router-view")],1)},r=[],a={computed:{loggedUserName:function(){return this.$store.getters.loggedUserName}}},i=a,u=(n("9e10"),n("2877")),c=Object(u["a"])(i,s,r,!1,null,"33e6e1e3",null),l=c.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.isLogged?[n("toy-filter",{on:{filter:t.onFilter}}),n("hr"),n("router-link",{attrs:{to:"toy/edit"}},[n("el-button",{attrs:{type:"success"}},[t._v("Add New Toy")])],1),n("hr"),n("toy-list",{attrs:{toys:t.toys},on:{delete:t.onDelete}}),n("hr"),n("h1",[t._v("Some Stats")]),n("bar-vue",{attrs:{toys:t.toys}})]:n("log-in")],2)},p=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v(t._s(t.isAdmin))]),t._l(t.toys,function(e){return n("div",{key:e._id,attrs:{"data-aos":"fade-up-left"}},[n("div",{staticClass:"btn-wrapper"},[t.isAdmin?[n("button",{on:{click:function(n){return t.$emit("delete",e._id)}}},[t._v("Delete")]),n("router-link",{attrs:{to:"/toy/edit/"+e._id}},[t._v("Edit")])]:t._e()],2),n("router-link",{attrs:{to:"/toy/"+e._id}},[n("toy-preview",{attrs:{toy:e}})],1)],1)})],2)},h=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"item-wrapper"},[n("h1",[t._v(t._s(t.toy.name))]),n("ul",[n("li",[t._v("Price: "+t._s(t.toy.price))]),n("li",[t._v("Type: "+t._s(t.toy.type))]),n("li",[t._v("In stock: "+t._s(t.toy.inStock))])])])])},v=[],g={props:["toy"]},b=g,j=(n("10e3"),Object(u["a"])(b,m,v,!1,null,"f50b2bee",null)),_=j.exports,k={props:["toys"],components:{ToyPreview:_},created:function(){},computed:{isAdmin:function(){return this.$store.getters.isAdmin}}},S=k,$=(n("82e5"),Object(u["a"])(S,y,h,!1,null,"625356e2",null)),w=$.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("form",[n("label",[t._v("Search by name")]),n("selectEl",{on:{selectedVals:t.onSelectedVals}}),n("label",[t._v("In stock?")]),n("el-select",{attrs:{placeholder:"in stock?"},model:{value:t.filterObj.inStock,callback:function(e){t.$set(t.filterObj,"inStock",e)},expression:"filterObj.inStock"}},[n("el-option",{attrs:{value:"All"}},[t._v("ALL")]),n("el-option",{attrs:{value:"true"}},[t._v("In stock")]),n("el-option",{attrs:{value:"false"}},[t._v("Out of stock")])],1),n("label",[t._v("Choose type")]),n("el-select",{attrs:{placeholder:"Choose type"},model:{value:t.filterObj.type,callback:function(e){t.$set(t.filterObj,"type",e)},expression:"filterObj.type"}},[n("el-option",{attrs:{value:"All"}},[t._v("ALL")]),n("el-option",{attrs:{value:"Adult"}},[t._v("Adult")]),n("el-option",{attrs:{value:"Educational"}},[t._v("Educational")]),n("el-option",{attrs:{value:"Funny"}},[t._v("Funny")])],1),n("label",[t._v("Sort By")]),n("el-select",{attrs:{placeholder:"in stock?"},model:{value:t.filterObj.sortBy,callback:function(e){t.$set(t.filterObj,"sortBy",e)},expression:"filterObj.sortBy"}},[n("el-option",{attrs:{value:"name"}},[t._v("Name")]),n("el-option",{attrs:{value:"price"}},[t._v("Price")])],1)],1)])},T=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("el-select",{attrs:{multiple:"",filterable:"","default-first-option":"",placeholder:"Choose tags for your article"},on:{change:t.onSave},model:{value:t.value10,callback:function(e){t.value10=e},expression:"value10"}},t._l(t.options5,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)},O=[],A={data:function(){return{options5:[{value:"All",label:"All"},{value:"Adult",label:"Adult"},{value:"Educational",label:"Educational"},{value:"Funny",label:"Funny"}],value10:[]}},methods:{onSave:function(){this.$emit("selectedVals",this.value10)}}},N=A,x=Object(u["a"])(N,P,O,!1,null,null,null),E=x.exports,L={components:{selectEl:E},data:function(){return{filterObj:{name:"",inStock:null,type:null,sortBy:"Name"}}},methods:{onSelectedVals:function(t){this.filterObj.type=t,console.log(t)}},watch:{filterObj:{deep:!0,handler:function(t,e){this.$emit("filter",t)}}}},U=L,z=Object(u["a"])(U,I,T,!1,null,null,null),C=z.exports,B=n("db0c"),D=n.n(B),M=n("a4bb"),F=n.n(M),q=(n("ac6a"),n("c5f6"),n("30ef")),R=n.n(q);function G(t,e){return{render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])},props:{chartId:{default:t,type:String},width:{default:400,type:Number},height:{default:400,type:Number},cssClasses:{type:String,default:""},styles:{type:Object},plugins:{type:Array,default:function(){return[]}}},data:function(){return{_chart:null,_plugins:this.plugins}},methods:{addPlugin:function(t){this.$data._plugins.push(t)},generateLegend:function(){if(this.$data._chart)return this.$data._chart.generateLegend()},renderChart:function(t,n){this.$data._chart&&this.$data._chart.destroy(),this.$data._chart=new R.a(this.$refs.canvas.getContext("2d"),{type:e,data:t,options:n,plugins:this.$data._plugins})}},beforeDestroy:function(){this.$data._chart&&this.$data._chart.destroy()}}}var V,H,J,W,Q=G("bar-chart","bar"),X=G("horizontalbar-chart","horizontalBar"),K=G("doughnut-chart","doughnut"),Y=G("line-chart","line"),Z=G("pie-chart","pie"),tt=G("polar-chart","polarArea"),et=G("radar-chart","radar"),nt=G("bubble-chart","bubble"),ot=G("scatter-chart","scatter"),st={Bar:Q,HorizontalBar:X,Doughnut:K,Line:Y,Pie:Z,PolarArea:tt,Radar:et,Bubble:nt,Scatter:ot},rt=st,at=Object(u["a"])(rt,V,H,!1,null,null,null),it=(at.exports,{props:["toys"],extends:K,data:function(){return{typeCounterMap:{},types:[],coutner:[]}},created:function(){this.setInfoReadyForChart()},methods:{setInfoReadyForChart:function(){var t=this;this.toys.forEach(function(e){t.typeCounterMap[e.type]?t.typeCounterMap[e.type]++:t.typeCounterMap[e.type]=1}),this.types=F()(this.typeCounterMap),this.coutner=D()(this.typeCounterMap)}},mounted:function(){this.renderChart({labels:this.types,datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:this.coutner}]},{responsive:!0,maintainAspectRatio:!1})}}),ut=it,ct=Object(u["a"])(ut,J,W,!1,null,null,null),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("sign-up")]),n("form",[n("label",[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",required:""},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),n("label",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userPass,expression:"userPass"}],attrs:{type:"password",required:""},domProps:{value:t.userPass},on:{input:function(e){e.target.composing||(t.userPass=e.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onSignUp(e)}}},[t._v("Sign Up")])])])},ft=[],pt={name:"sign-up",created:function(){},data:function(){return{userName:null,userPass:null}},methods:{onSignUp:function(){var t=this;this.userPass&&this.userName&&logService.signUp(this.userName,this.userPass).then(function(){t.$router.push("/bug"),eventBus.$emit(LOG_IN,!0)}).catch(function(){return console.log(".......")})}}},yt=pt,ht=Object(u["a"])(yt,dt,ft,!1,null,null,null),mt=ht.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("log-in")]),n("form",[n("label",[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userName,expression:"user.userName"}],attrs:{type:"text",required:""},domProps:{value:t.user.userName},on:{input:function(e){e.target.composing||t.$set(t.user,"userName",e.target.value)}}}),n("label",[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userPass,expression:"user.userPass"}],attrs:{type:"password",required:""},domProps:{value:t.user.userPass},on:{input:function(e){e.target.composing||t.$set(t.user,"userPass",e.target.value)}}}),n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onLogIn(e)}}},[t._v("Log in")])])])},gt=[],bt=n("f499"),jt=n.n(bt),_t={store:kt,load:St,remove:$t};function kt(t,e){var n=jt()(e);localStorage.setItem(t,n)}function St(t){var e=localStorage.getItem(t);return JSON.parse(e)}function $t(t){localStorage.removeItem(t)}var wt=n("7338"),It=n.n(wt),Tt={signUp:At,logIn:Nt,logout:xt,getLoggedInUser:Et},Pt="",Ot=_t.load("loggedInUser");function At(t,e){var n={userName:t,userPass:e};return It.a.post("/api/signUp",n).then(function(t){console.log("user signed up!!"),Ot=n,_t.store("loggedInUser",Ot)}).catch(function(t){return console.log("not signed up :("),reject()})}function Nt(t){return It.a.post("".concat(Pt,"/login"),t).then(function(t){return t.data})}function xt(){return It.a.get("/api/logout").then(function(t){console.log("RES IS",t),_t.remove("loggedInUser"),Ot=null})}function Et(){return Ot||{userName:!1,id:!1,isAdmin:!1}}var Lt={name:"log-in",data:function(){return{user:{userName:null,userPass:null}}},methods:{onLogIn:function(){this.$store.dispatch({type:"logIn",user:this.user})}}},Ut=Lt,zt=Object(u["a"])(Ut,vt,gt,!1,null,null,null),Ct=zt.exports,Bt={components:{ToyList:w,toyFilter:C,barVue:lt,signUp:mt,logIn:Ct},data:function(){return{}},created:function(){var t=this;this.$store.dispatch({type:"checkIfLogged"}).then(function(){t.$store.dispatch({type:"getToys"})})},computed:{toys:function(){return this.$store.getters.toys},isLogged:function(){return this.$store.getters.isLogged}},methods:{onDelete:function(t){this.$store.dispatch({type:"deleteToy",toyId:t})},onFilter:function(t){this.$store.dispatch({type:"filterToys",filterObj:t})}}},Dt=Bt,Mt=Object(u["a"])(Dt,f,p,!1,null,"7d889329",null),Ft=Mt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toyToShow?n("section",[n("h1",[t._v(t._s(t.toyToShow.name))]),n("ul",[n("li",[t._v("Price: "+t._s(t.toyToShow.price))]),n("li",[t._v("Type: "+t._s(t.toyToShow.type))]),n("li",[t._v("In stock: "+t._s(t.toyToShow.inStock))])])]):t._e()},Rt=[],Gt={data:function(){return{}},created:function(){var t=this.$route.params.id;this.$store.dispatch({type:"getToy",toyId:t})},computed:{toyToShow:function(){return this.$store.getters.toy}},methods:{}},Vt=Gt,Ht=Object(u["a"])(Vt,qt,Rt,!1,null,null,null),Jt=Ht.exports,Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v(t._s(t.toyId?"Edit":"Add"))]),n("form",[n("label",[t._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toy.name,expression:"toy.name"}],domProps:{value:t.toy.name},on:{input:function(e){e.target.composing||t.$set(t.toy,"name",e.target.value)}}}),n("label",[t._v("Price:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toy.price,expression:"toy.price"}],domProps:{value:t.toy.price},on:{input:function(e){e.target.composing||t.$set(t.toy,"price",e.target.value)}}}),n("label",[t._v("Type:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.toy.type,expression:"toy.type"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.toy,"type",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Adult"}},[t._v("Adult")]),n("option",{attrs:{value:"Educational"}},[t._v("Educational")]),n("option",{attrs:{value:"Funny"}},[t._v("Funny")])]),n("label",[t._v("In stock:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.toy.inStock,expression:"toy.inStock"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.toy,"inStock",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"true"}},[t._v("In stock")]),n("option",{attrs:{value:"false"}},[t._v("Out of stock")])]),t.toyId?n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.onUpdate(e)}}},[t._v("Update")]):n("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.onAdd(e)}}},[t._v("Add")])])])},Qt=[],Xt=(n("7f7f"),{data:function(){return{toy:{name:"",price:"",type:"",inStock:""},toyId:null}},created:function(){var t=this;this.toyId=this.$route.params.id,this.toyId&&this.$store.dispatch({type:"getToy",toyId:this.toyId}).then(function(e){return t.toy=t.$store.getters.toy})},methods:{onUpdate:function(){var t=this;this.$store.dispatch({type:"updateToy",toy:this.toy}),setTimeout(function(){t.$router.push("/")},600)},onAdd:function(){var t=this;this.toy.name&&this.toy.price&&this.toy.type&&this.toy.inStock&&(this.$store.dispatch({type:"addToy",toy:this.toy}),setTimeout(function(){t.$router.push("/")},600))}}}),Kt=Xt,Yt=(n("eb47"),Object(u["a"])(Kt,Wt,Qt,!1,null,"4f8fd516",null)),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("About Us")]),n("googleMap")],1)},ee=[],ne=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h2",[t._v("Search and add a pin")]),n("label",[n("gmap-autocomplete",{on:{place_changed:t.setPlace}}),n("button",{on:{click:t.addMarker}},[t._v("Add")])],1),n("br")]),n("br"),n("gmap-map",{staticStyle:{width:"100%",height:"400px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,function(e,o){return n("gmap-marker",{key:o,attrs:{position:e.position},on:{click:function(n){t.center=e.position}}})}),1),n("div",{staticClass:"btn-wrapper"},[n("button",{on:{click:function(e){return t.onBtn(0)}}},[t._v("Tel Aviv")]),n("button",{on:{click:function(e){return t.onBtn(1)}}},[t._v("Ramat Gan")]),n("button",{on:{click:function(e){return t.onBtn(2)}}},[t._v("Haifa")])])],1)},oe=[],se={name:"GoogleMap",data:function(){return{center:{lat:45.508,lng:-73.587},markers:[{position:{lat:32.0882124,lng:34.80273179999995}},{position:{lat:32.08379899999999,lng:34.81545099999994}},{position:{lat:32.7940463,lng:34.98957100000007}}],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(this.currentPlace){var t={lat:this.currentPlace.geometry.location.lat(),lng:this.currentPlace.geometry.location.lng()};this.markers.push({position:t}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}})},onBtn:function(t){console.log(t),this.center=this.markers[t].position}}},re=se,ae=(n("5c70"),Object(u["a"])(re,ne,oe,!1,null,"15c5fc91",null)),ie=ae.exports,ue={components:{googleMap:ie}},ce=ue,le=Object(u["a"])(ce,te,ee,!1,null,null,null),de=le.exports;o["default"].use(d["a"]);var fe=new d["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,n){return{y:99}},routes:[{path:"/",name:"toys",component:Ft},{path:"/",name:"logIn",component:Ft},{path:"/toy/edit/:id?",name:"toyEdit",component:Zt},{path:"/toy/:id",name:"toyDetails",component:Jt},{path:"/about",name:"about",component:de}]}),pe=n("2f62"),ye=(n("20d6"),{query:me,getToyById:ve,deleteToy:ge,updateToy:be,addToy:je}),he="";function me(t){if(t){var e="?";return t.name&&(e+="name=".concat(t.name,"&")),"All"!==t.type&&t.type&&(e+="type=".concat(t.type,"&")),"All"!==t.inStock&&t.inStock&&(e+="inStock=".concat(t.inStock,"&")),e+="sortBy=".concat(t.sortBy),console.log(e),It.a.get("".concat(he,"/toys/").concat(e)).then(function(t){return t.data})}return It.a.get("".concat(he,"/toys")).then(function(t){return t.data})}function ve(t){return It.a.get("".concat(he,"/toy/").concat(t)).then(function(t){return t.data})}function ge(t){return It.a.delete("".concat(he,"/toy/").concat(t))}function be(t){return It.a.put("".concat(he,"/toy/").concat(t._id),t)}function je(t){return t.createdAt=(new Date).getTime(),It.a.post("".concat(he,"/toy"),t)}o["default"].use(pe["a"]);var _e={state:{toys:null,toy:null},getters:{toy:function(t){return t.toy},toys:function(t){return t.toys}},mutations:{setToys:function(t,e){var n=e.toys;t.toys=n,console.log(n)},setToy:function(t,e){var n=e.toy;console.log("added",n),t.toy=n},deleteToy:function(t,e){var n=e.toyId,o=t.toys.findIndex(function(t){return t._id===n});t.toys.splice(o,1)}},actions:{getToys:function(t){var e=t.commit;ye.query().then(function(t){return e({type:"setToys",toys:t})})},getToy:function(t,e){var n=t.commit,o=e.toyId;return ye.getToyById(o).then(function(t){n({type:"setToy",toy:t})})},deleteToy:function(t,e){var n=t.commit,o=e.toyId;ye.deleteToy(o).then(function(){return n({type:"deleteToy",toyId:o})})},updateToy:function(t,e){t.commit;var n=e.toy;ye.updateToy(n)},addToy:function(t,e){t.commit;var n=e.toy;ye.addToy(n)},filterToys:function(t,e){var n=t.commit,o=e.filterObj;ye.query(o).then(function(t){return n({type:"setToys",toys:t})})}}},ke=_e;o["default"].use(pe["a"]);var Se={strict:!0,state:{isLogged:!1,loggedUserName:null,isAdmin:!1},getters:{isLogged:function(t){return t.isLogged},loggedUserName:function(t){return t.loggedUserName},isAdmin:function(t){var e=_t.load("loggedInUser");return"true"===e.isAdmin&&(t.isAdmin=!0),t.isAdmin}},mutations:{userLogged:function(t,e){var n=e.user;t.isLogged=!0,t.loggedUserName=n.userName,"true"===n.isAdmin&&(t.isAdmin=!0)},setIfUserIsLogged:function(t,e){var n=e.isLogged;t.isLogged=n}},actions:{logIn:function(t,e){var n=t.commit,o=e.user;Tt.logIn(o).then(function(t){_t.store("loggedInUser",t),n({type:"userLogged",user:t})}).catch(function(){console.log("WRONG")})},checkIfLogged:function(t){var e=t.commit,n=_t.load("loggedInUser");e({type:"setIfUserIsLogged",isLogged:n})}}},$e=Se;o["default"].use(pe["a"]);var we=new pe["a"].Store({strict:!0,state:{},mutations:{},getters:{},actions:{},modules:{toyStore:ke,userStore:$e}}),Ie=we,Te=n("755e"),Pe=n("43f9"),Oe=n.n(Pe),Ae=(n("51de"),n("f5af")),Ne=n.n(Ae),xe=(n("e829"),n("5c96")),Ee=n.n(xe);n("0fae");o["default"].use(Oe.a),o["default"].use(Ee.a),o["default"].config.productionTip=!1,o["default"].use(Te,{load:{key:"AIzaSyC00uQHshEGC7XTuWgS90We3R0gEfilP5w",libraries:"places"}}),new o["default"]({created:function(){Ne.a.init()},router:fe,store:Ie,render:function(t){return t(l)}}).$mount("#app")},"5c70":function(t,e,n){"use strict";var o=n("8d8c"),s=n.n(o);s.a},"817b":function(t,e,n){},"82e5":function(t,e,n){"use strict";var o=n("8638"),s=n.n(o);s.a},8638:function(t,e,n){},"8d8c":function(t,e,n){},"9e10":function(t,e,n){"use strict";var o=n("c554"),s=n.n(o);s.a},a720:function(t,e,n){},c554:function(t,e,n){},eb47:function(t,e,n){"use strict";var o=n("817b"),s=n.n(o);s.a}});
//# sourceMappingURL=app.21e1ba50.js.map