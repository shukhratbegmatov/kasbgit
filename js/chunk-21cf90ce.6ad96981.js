(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21cf90ce"],{"684f":function(t,a,s){t.exports=s.p+"img/llaptop.abee88fe.png"},c024:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main_navs"},[a("Header"),a("div",{staticClass:"container"},[a("div",{staticClass:"login"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-xl-7"},[a("div",{staticClass:"log_form"},[a("div",[a("form",{on:{submit:function(a){return a.preventDefault(),t.regIstration()}}},[a("label",[t._v("Email *")]),a("div",{staticClass:"input_text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),a("label",[t._v("Parol*")]),a("div",{staticClass:"input_text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Parol"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),a("div",{staticClass:"forgot_password"},[a("router-link",{staticClass:"decoration",attrs:{to:"/"}},[t._v(" Parolni tiklash ")])],1),t._m(1),a("div",{staticClass:"phone_link"},[a("router-link",{attrs:{to:"/phone_reg"}},[a("div",[t._v(" Telefon raqam orqali kirish ")])])],1)]),a("div",{staticClass:"reg_links"},[a("router-link",{attrs:{to:"/email-login"}},[a("div",[t._v("Ещё не зарегистированы? "),a("span",[t._v("Kirish")])])])],1)])])])])])]),a("Footer")],1)},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"col-xl-5"},[a("div",{staticClass:"log_img"},[a("div",{staticClass:"log_img_title"},[t._v("Ro'yxatdan o'tish")]),a("img",{attrs:{src:s("684f"),alt:""}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"log_btn"},[a("button",[t._v(" Ro'yxatdan o'tish")])])}],o=s("0418"),l=s("fd2d"),r={components:{Footer:l["a"],Header:o["a"]},data(){return{email:"",password:""}},methods:{regIstration(){this.$axiosDefault.post("/students/register/",{email:this.email,password:this.password}).then(()=>{this.$toast("Emailga xabar jo'natildi iltimos tekshirib ko'ring",{timeout:1e4,type:"success"})}).catch(()=>{this.$toast("Bu email oldin ro'yxatdan o'tgan",{timeout:1e4,type:"error"})})}}},n=r,d=s("2877"),c=Object(d["a"])(n,i,e,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-21cf90ce.6ad96981.js.map