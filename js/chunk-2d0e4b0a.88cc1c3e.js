(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4b0a"],{"90fc":function(t,a,e){"use strict";e.r(a);e("14d9");var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mail_v main_navs"},[a("Header"),a("div",{staticClass:"container"},[a("div",{staticClass:"reg_main"},[a("div",{staticClass:"card-body card_main_one"},[a("div",{staticClass:"wrapper text-center"},[a("sweetalert-icon",{attrs:{icon:"success"}}),a("h2",[t._v("Muvaffaqiyatli ro'yxatdan o'toldi!")]),a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.$router.push("/settings")}}},[t._v("Profile sahifaga o'tish")])],1)])])]),a("Footer")],1)},o=[],r=e("0418"),n=e("fd2d"),i={components:{Footer:n["a"],Header:r["a"]},data(){return{email:"",password:"",passport_number:"",passport_jshshr:""}},mounted(){this.$axiosDefault.get("students/verify-email",{params:{token:localStorage.getItem("reg_token")}}),console.log(this.$route.query.token),localStorage.setItem("reg_token",this.$route.query.token)}},c=i,l=e("2877"),u=Object(l["a"])(c,s,o,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e4b0a.88cc1c3e.js.map