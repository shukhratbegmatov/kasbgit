(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c84d3"],{"53fe":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("Header"),s("div",{staticClass:"container"},[s("h1",{staticClass:"text-center h1_main"},[t._v(" РЕгистрация ")]),s("div",{staticClass:"reg_main"},[s("div",{staticClass:"form_main"},[t._m(0),s("div",{staticClass:"border_main"}),s("div",{staticClass:"reg_forms"},[s("form",{on:{submit:function(s){return s.preventDefault(),t.regIstration()}}},[s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passport_number,expression:"passport_number"}],attrs:{type:"text",placeholder:"AB0000000"},domProps:{value:t.passport_number},on:{input:function(s){s.target.composing||(t.passport_number=s.target.value)}}})]),s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passport_jshshr,expression:"passport_jshshr"}],attrs:{type:"number",placeholder:"Password"},domProps:{value:t.passport_jshshr},on:{input:function(s){s.target.composing||(t.passport_jshshr=s.target.value)}}})]),t._m(1)])])])])]),s("Footer")],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"form_tab"},[s("div",{staticClass:"tab_1 w-100 active"},[s("button",{staticClass:"w-100"},[t._v("Passport ma'lumotlariz")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"log_btn reg_btn"},[s("button",[t._v("Qidirsh")])])}],i=a("0418"),o=a("fd2d"),n={components:{Footer:o["a"],Header:i["a"]},data(){return{email:"",password:"",passport_number:"",passport_jshshr:""}},methods:{regIstration(){this.$axiosDefault.post("/students/register/",{email:this.email,password:this.password}).then(()=>{this.$toast("Emailga xabar jo'natildi iltimos tekshirib ko'ring",{timeout:1e4,type:"success"})}).catch(()=>{this.$toast("Bu email oldin ro'yxatdan o'tgan",{timeout:1e4,type:"error"})})}}},p=n,l=a("2877"),u=Object(l["a"])(p,e,r,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c84d3.3455f2c9.js.map