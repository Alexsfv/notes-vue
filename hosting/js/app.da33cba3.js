(function(t){function e(e){for(var i,a,o=e[0],c=e[1],d=e[2],u=0,f=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={app:0},r=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"002a":function(t,e,s){"use strict";s("bd24")},"01be":function(t,e,s){"use strict";s("9f11")},1935:function(t,e,s){"use strict";s("e806")},"389d":function(t,e,s){"use strict";s("658d")},4678:function(t,e,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("b0c0"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"wrapper-content"},[s("section",[s("div",{staticClass:"container"},[t.$store.getters["message/getMessage"]?s("message"):t._e(),s("newNote"),s("div",{staticClass:"note-header note-header_center",staticStyle:{margin:"36px 0"}},[s("h1",[t._v(t._s(t.title))]),s("search"),s("div",{staticClass:"icons"},[s("svg",{class:{active:t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!0}}},[s("rect",{attrs:{x:"3",y:"3",width:"7",height:"7"}}),s("rect",{attrs:{x:"14",y:"3",width:"7",height:"7"}}),s("rect",{attrs:{x:"14",y:"14",width:"7",height:"7"}}),s("rect",{attrs:{x:"3",y:"14",width:"7",height:"7"}})]),s("svg",{class:{active:!t.grid},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:function(e){t.grid=!1}}},[s("line",{attrs:{x1:"8",y1:"6",x2:"21",y2:"6"}}),s("line",{attrs:{x1:"8",y1:"12",x2:"21",y2:"12"}}),s("line",{attrs:{x1:"8",y1:"18",x2:"21",y2:"18"}}),s("line",{attrs:{x1:"3",y1:"6",x2:"3",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"12",x2:"3",y2:"12"}}),s("line",{attrs:{x1:"3",y1:"18",x2:"3",y2:"18"}})])])],1),s("notes",{attrs:{grid:t.grid}})],1)])])])},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("p",[t._v(t._s(t.$store.getters["message/getMessage"]))])])},o=[],c=(s("389d"),s("2877")),d={},l=Object(c["a"])(d,a,o,!1,null,"5c4e45c5",null),u=l.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"new-note"},[s("label",{staticClass:"text"},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.title,expression:"title",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:t.title},on:{change:function(e){t.title=e.target.value}}}),s("label",{staticClass:"text"},[t._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:t.description,expression:"description",modifiers:{lazy:!0}}],domProps:{value:t.description},on:{change:function(e){t.description=e.target.value}}}),s("label",{staticClass:"text"},[t._v("Priority")]),s("div",[s("a-radio-group",{attrs:{"default-value":"low","button-style":"solid"},model:{value:t.priority,callback:function(e){t.priority=e},expression:"priority"}},[s("a-radio-button",{attrs:{value:"low"}},[t._v(" Low ")]),s("a-radio-button",{attrs:{value:"medium"}},[t._v(" Medium ")]),s("a-radio-button",{attrs:{value:"hight"}},[t._v(" Hight ")])],1)],1),s("button",{staticClass:"btn btnPrimary",on:{click:t.addNote}},[t._v("New note")])])},p=[],h=(s("45fc"),{methods:{$getRandomId:function(t){var e=Math.round(99999999*Math.random()),s=t.some((function(t){return t===e}));return s?this.getRandomId():e}}}),g={mixins:[h],computed:{priority:{set:function(t){this.$store.dispatch("newNote/setPriority",t)},get:function(){return this.$store.getters["newNote/getPriority"]}},title:{set:function(t){this.$store.dispatch("newNote/setTitle",t)},get:function(){return this.$store.getters["newNote/getTitle"]}},description:{set:function(t){this.$store.dispatch("newNote/setDescription",t)},get:function(){return this.$store.getters["newNote/getDescription"]}}},methods:{addNote:function(){var t=this.$store.getters["newNote/getNoteFields"],e=t.title,s=t.descr,i=t.priority;if(""===e)return this.$store.dispatch("message/setMessage","title cant be blank!"),null;var n=this.$getRandomId(this.$store.getters.getNotesIds),r={id:n,title:e,descr:s,date:new Date(Date.now()).toLocaleString(),priority:i,edit:{isEditing:!1,hasEdited:!1,editedDate:""}};this.$store.dispatch("addNote",r),this.$store.dispatch("newNote/resetFields"),this.$store.dispatch("message/setMessage",null)}}},m=g,j=(s("002a"),Object(c["a"])(m,f,p,!1,null,"7f08f0a6",null)),b=j.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notes"},t._l(t.$store.getters.getSearchNotes,(function(e,i){return s("div",{key:i,staticClass:"note",class:{full:!t.grid,editing:e.edit.isEditing,low:"low"===e.priority,medium:"medium"===e.priority,hight:"hight"===e.priority}},[s("div",{staticClass:"note-header",class:{grid:!t.grid}},[e.edit.isEditing?s("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],staticClass:"edit-input-title",attrs:{type:"text"},domProps:{value:t.edit.title},on:{input:function(e){e.target.composing||t.$set(t.edit,"title",e.target.value)}}}):s("p",[t._v(t._s(e.title))]),e.edit.isEditing?s("a-icon",{staticClass:"editBtn editBtn_check",attrs:{type:"check-circle"},on:{click:function(e){return t.saveEditData()}}}):s("a-icon",{staticClass:"editBtn",attrs:{type:"edit"},on:{click:function(s){return t.startEditData(e)}}}),s("p",{staticClass:"deleteBtn",staticStyle:{cursor:"pointer"},on:{click:function(s){return t.removeNote(e.id)}}},[t._v("x")])],1),s("div",{staticClass:"note-body"},[e.edit.isEditing?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.description,expression:"edit.description"}],staticClass:"edit-input-description",domProps:{value:t.edit.description},on:{input:function(e){e.target.composing||t.$set(t.edit,"description",e.target.value)}}}):s("p",[t._v(t._s(e.descr))]),t._v(" "),s("span",[t._v(t._s(e.edit.editedDate||e.date))]),e.edit.hasEdited?s("span",[t._v(" (ред.)")]):t._e()])])})),0)},y=[],w=(s("a4d3"),s("e01a"),{props:{grid:{type:Boolean,required:!0}},data:function(){return{edit:{id:null,title:"",description:""}}},methods:{removeNote:function(t){this.$store.dispatch("removeNote",t)},cleanEditData:function(){this.edit.id="",this.edit.title="",this.edit.description=""},startEditData:function(t){var e=t.id,s=t.title,i=t.descr;this.cleanEditData(),this.edit.id=e,this.edit.title=s,this.edit.description=i,this.$store.dispatch("changeNoteEditStatus",t.id)},saveEditData:function(){var t={id:this.edit.id,title:this.edit.title,description:this.edit.description,date:new Date(Date.now()).toLocaleString()};this.$store.dispatch("saveEditData",t)}}}),x=w,k=(s("1935"),Object(c["a"])(x,v,y,!1,null,null,null)),N=k.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper__search"},[s("div",{staticClass:"search"},[s("div",{staticClass:"search-icon"},[s("svg",{staticClass:"feather feather-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"11",cy:"11",r:"8"}}),s("line",{attrs:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}})])])]),s("input",{attrs:{type:"text",placeholder:"Search"},domProps:{value:t.$store.getters.getSearch},on:{input:function(e){return t.$store.dispatch("search/setValue",e.target.value)}}})])},D=[],E=(s("01be"),{}),C=Object(c["a"])(E,_,D,!1,null,"36c3c923",null),$=C.exports,z={name:"App",components:{message:u,newNote:b,notes:N,search:$},data:function(){return{title:"Notes App",grid:!0}}},O=z,S=(s("5c0b"),Object(c["a"])(O,n,r,!1,null,null,null)),P=S.exports,M=s("50f6"),T=s.n(M),L=s("a1a7"),B=s.n(L),F=s("ab79"),V=s.n(F),I=(s("c1c3"),s("202f"),s("2f62")),q=(s("4de4"),s("7db0"),s("c975"),s("d81d"),s("498a"),s("2909")),R={state:{notes:[{id:1,title:"First Note",descr:"Description for first Note",date:new Date(Date.now()).toLocaleString(),priority:"low",edit:{isEditing:!1,hasEdited:!1,editedDate:"21312"}},{id:2,title:"Second Note",descr:"Description for Second Note",date:new Date(Date.now()).toLocaleString(),priority:"medium",edit:{isEditing:!1,hasEdited:!1,editedDate:""}},{id:3,title:"Third Note",descr:"Description for Third Note",date:new Date(Date.now()).toLocaleString(),priority:"hight",edit:{isEditing:!1,hasEdited:!1,editedDate:""}}]},mutations:{changeNotes:function(t,e){t.notes=Object(q["a"])(e)},addNote:function(t,e){t.notes.push(e)}},actions:{removeNote:function(t,e){var s=t.commit,i=t.state,n=i.notes.filter((function(t){return t.id!==e}));s("changeNotes",n)},addNote:function(t,e){var s=t.commit;s("addNote",e)},saveEditData:function(t,e){var s=t.commit,i=t.state,n=i.notes.find((function(t){return t.id===e.id})),r=e.title!==n.title||e.description!==n.descr;r&&(n.title=e.title,n.descr=e.description,n.edit.editedDate=e.date,n.edit.hasEdited=!0),n.edit.isEditing=!1;var a=i.notes.map((function(t){return t.id===e.id?n:t}));s("changeNotes",a)},changeNoteEditStatus:function(t,e){var s=t.commit,i=t.state,n=i.notes.map((function(t){return e===t.id?t.edit.isEditing=!0:!0===t.edit.isEditing&&(t.edit.isEditing=!1),t}));s("changeNotes",n)}},getters:{getNotes:function(t){return t.notes},getNotesIds:function(t){return t.notes.map((function(t){return t.id}))},getSearchNotes:function(t,e){var s=e["search/getValue"];if(!s)return t.notes;var i=s.trim().toLowerCase();return t.notes.filter((function(t){return-1!==t.title.toLowerCase().indexOf(i)}))}}},A={namespaced:!0,state:{title:"",description:"",priority:"low"},mutations:{resetFields:function(t){t.title="",t.description="",t.priority="low"},setTitle:function(t,e){t.title=e},setDescription:function(t,e){t.description=e},setPriority:function(t,e){t.priority=e}},actions:{resetFields:function(t){var e=t.commit;e("resetFields")},setTitle:function(t,e){var s=t.commit;s("setTitle",e)},setDescription:function(t,e){var s=t.commit;s("setDescription",e)},setPriority:function(t,e){var s=t.commit;s("setPriority",e)}},getters:{getNoteFields:function(t){return{title:t.title,description:t.description,priority:t.priority}},getTitle:function(t){return t.title},getDescription:function(t){return t.description},getPriority:function(t){return t.priority}}},J={namespaced:!0,state:{message:null},mutations:{setMessage:function(t,e){t.message=e}},actions:{setMessage:function(t,e){var s=t.commit;s("setMessage",e)}},getters:{getMessage:function(t){return t.message}}},U={namespaced:!0,state:{value:""},mutations:{setValue:function(t,e){t.value=e}},actions:{setValue:function(t,e){var s=t.commit;s("setValue",e)}},getters:{getValue:function(t){return t.value}}};i["default"].use(I["a"]);var H=new I["a"].Store({modules:{notes:R,newNote:A,message:J,search:U}});i["default"].component(T.a.name,T.a),i["default"].component(B.a.name,B.a),i["default"].component(V.a.name,V.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(P)},store:H}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"658d":function(t,e,s){},"9c0c":function(t,e,s){},"9f11":function(t,e,s){},bd24:function(t,e,s){},c1c3:function(t,e,s){},e806:function(t,e,s){}});