(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0c67":function(e,t,n){"use strict";n.r(t);var r=n("cf12"),u=n("bf11");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("4266");var i,o=n("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"288063e8",null,!1,r["a"],i);t["default"]=c.exports},4266:function(e,t,n){"use strict";var r=n("a002"),u=n.n(r);u.a},"9abe":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,i){try{var o=e[a](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{ruleForm:{},tableName:""}},onLoad:function(){var t=e.getStorageSync("loginTable");this.tableName=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.yonghuming||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){t.next=9;break}return e.$utils.msg("姓名不能为空"),t.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){t.next=12;break}return e.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 15:return t.next=17,e.$api.register("".concat(e.tableName),e.ruleForm);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return t.stop()}}),t)})))()}}};t.default=o}).call(this,n("543d")["default"])},a002:function(e,t,n){},b8d4:function(e,t,n){"use strict";(function(e){n("b497");r(n("66fd"));var t=r(n("0c67"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},bf11:function(e,t,n){"use strict";n.r(t);var r=n("9abe"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},cf12:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},a=[]}},[["b8d4","common/runtime","common/vendor"]]]);