(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21cf90ce"],{"684f":function(t,s,a){t.exports=a.p+"img/llaptop.abee88fe.png"},c024:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("Header"),s("div",{staticClass:"container"},[s("div",{staticClass:"login"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-5"},[s("div",{staticClass:"log_img"},[s("div",{staticClass:"log_img_title"},[t._v(t._s(t.$t("reg")))]),s("img",{attrs:{src:a("684f"),alt:""}})])]),s("div",{staticClass:"col-xl-7"},[s("div",{staticClass:"log_form"},[s("div",[s("form",{on:{submit:function(s){return s.preventDefault(),t.regIstration()}}},[s("label",[t._v(t._s(t.$t("email"))+" *")]),s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),s("label",[t._v(t._s(t.$t("password"))+"*")]),s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:t.$t("password")},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),s("div",{staticClass:"forgot_password"},[s("router-link",{staticClass:"decoration",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("forget_password"))+" ")])],1),s("div",{staticClass:"log_btn"},[s("button",[t._v(" "+t._s(t.$t("reg")))])]),s("div",{staticClass:"phone_link"},[s("router-link",{attrs:{to:"/phone_reg"}},[s("div",[t._v(" "+t._s(t.$t("phone_rg"))+" ")])])],1)]),s("div",{staticClass:"reg_links"},[s("router-link",{attrs:{to:"/email-login"}},[s("div",[t._v(t._s(t.$t("reg_quiz"))+"? "),s("span",[t._v(t._s(t.$t("login")))])])])],1)])])])])])]),s("Footer")],1)},i=[],o=a("0418"),r=a("fd2d"),l={components:{Footer:r["a"],Header:o["a"]},data(){return{email:"",password:""}},methods:{regIstration(){this.$axiosDefault.post("/students/register/",{email:this.email,password:this.password}).then(()=>{this.$toast("Emailga xabar jo'natildi iltimos tekshirib ko'ring",{timeout:1e4,type:"success"})}).catch(t=>{console.log(t),this.$toast(`${t.response.data.email},${t.response.data.password}`,{timeout:1e4,type:"error"})})}}},n=l,d=a("2877"),p=Object(d["a"])(n,e,i,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-21cf90ce.553a887a.js.map