(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4b0a"],{"90fc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mail_v main_navs"},[e("Header"),t._m(0),e("Footer")],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"reg_main"},[e("div",{staticClass:"card-body card_main_one"})])])}],r=(s("14d9"),s("0418")),n=s("fd2d"),i={components:{Footer:n["a"],Header:r["a"]},data(){return{email:"",password:"",passport_number:"",passport_jshshr:""}},mounted(){this.$axiosDefault.get("students/verify-email",{params:{token:localStorage.getItem("reg_token")}}).then(()=>{localStorage.setItem("reg_token",this.$route.query.token),this.$router.push("/settings")}).catch(t=>{console.log(t.message),this.$toast(""+t.message,{timeout:4e3,type:"error"})})}},c=i,l=s("2877"),u=Object(l["a"])(c,a,o,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e4b0a.b34c26b8.js.map