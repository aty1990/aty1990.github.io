webpackJsonp([15],{149:function(t,e,a){a(343);var n=a(57)(a(259),a(399),null,null);t.exports=n.exports},156:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page-header",data:function(){return{}}}},157:function(t,e,a){e=t.exports=a(132)(),e.push([t.i,".page-header{width:100%}",""])},158:function(t,e,a){var n=a(157);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(133)("6e41b95c",n,!0)},159:function(t,e,a){a(158);var n=a(57)(a(156),a(160),null,null);t.exports=n.exports},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[t._t("default",[a("mt-header",{attrs:{title:"淘花宅"}})])],2)},staticRenderFns:[]}},259:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(159),s=a.n(n);e.default={name:"staging",components:{VHeader:s.a},data:function(){return{}},mounted:function(){},methods:{toBack:function(){this.$router.back()}}}},298:function(t,e,a){e=t.exports=a(132)(),e.push([t.i,'.staging .is-link{background:url("/static/href.png") scroll 98% 50% no-repeat;background-size:20px}.staging .li-item{background:#fff;padding:10px 0;position:relative;margin-top:5px}.staging .li-item p{margin-left:10px}',""])},343:function(t,e,a){var n=a(298);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(133)("e4d1a772",n,!0)},399:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"move"}},[a("div",{staticClass:"staging page-animate"},[a("v-header",[a("mt-header",{attrs:{title:"分期记录"}},[a("div",{attrs:{slot:"left"},slot:"left"},[a("mt-button",{directives:[{name:"tap",rawName:"v-tap",value:{methods:t.toBack},expression:"{methods : toBack}"}],attrs:{icon:"back"}},[t._v("返回")])],1)])],1),t._v(" "),a("div",{staticClass:"item-list"},[a("ul",t._l(10,function(e){return a("li",{staticClass:"flex li-item"},[a("p",{staticClass:"grow li-item-p"},[t._v("金额：1000.00")]),t._v(" "),a("p",{staticClass:"grow"},[t._v("期限：9期")]),t._v(" "),a("p",{staticClass:"grow"},[t._v("2017-21-1")]),t._v(" "),a("p",{staticClass:"grow is-link"},[t._v("还款中")])])}))])],1)])},staticRenderFns:[]}}});