(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d214428"],{afd1:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("div",{staticClass:"modal_main",class:{active:t.isActive}},[s("button",{staticClass:"exit_modal",on:{click:function(s){return t.exit_click()}}},[s("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M84.9407 448.942C78.6923 455.19 68.5616 455.19 62.3132 448.942C56.0649 442.693 56.0649 432.563 62.3132 426.314L233 255.628L62.3132 84.9417C56.0649 78.6933 56.0649 68.5626 62.3132 62.3142C68.5616 56.0658 78.6923 56.0658 84.9407 62.3142L255.627 233.001L426.313 62.3142C432.562 56.0658 442.692 56.0658 448.941 62.3142C455.189 68.5626 455.189 78.6933 448.941 84.9417L278.254 255.628L448.941 426.314C455.189 432.563 455.189 442.693 448.941 448.942C442.692 455.19 432.562 455.19 426.313 448.942L255.627 278.255L84.9407 448.942Z",fill:"black"}})])]),s("div",{staticClass:"create_code"},[s("form",{on:{submit:function(s){return s.preventDefault(),t.createCode()}}},[s("div",[s("div",{staticClass:"title_code"},[t._v("Tasdiqlash kodi!")]),s("div",{staticClass:"code_input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text"},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}})]),t._m(0)])])])]),s("Header"),s("div",{staticClass:"container"},[s("div",{staticClass:"login"},[s("div",{staticClass:"row"},[t._m(1),s("div",{staticClass:"col-xl-7"},[s("div",{staticClass:"log_form"},[s("div",[s("form",{on:{submit:function(s){return s.preventDefault(),t.regIstration()}}},[s("label",[t._v("Telefon raqam *")]),s("phone-mask-input",{attrs:{autoDetectCountry:"",showFlag:"",wrapperClass:"wrraper-example",inputClass:"input-example",flagClass:"flag-example"},model:{value:t.phone,callback:function(s){t.phone=s},expression:"phone"}}),s("label",[t._v("Parol*")]),s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"Parol"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),s("div",{staticClass:"forgot_password"},[s("router-link",{staticClass:"decoration",attrs:{to:"/"}},[t._v(" Parolni tiklash ")])],1),t._m(2),s("div",{staticClass:"phone_link"},[s("router-link",{attrs:{to:"/registration"}},[s("div",[t._v(" Email orqali kirish ")])])],1)],1),s("div",{staticClass:"reg_links"},[s("router-link",{attrs:{to:"/email-login"}},[s("div",[t._v("Ещё не зарегистированы? "),s("span",[t._v("Kirish")])])])],1)])])])])])]),s("Footer")],1)},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"code_btn"},[s("button",[t._v("Tasdiqlash")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"col-xl-5"},[s("div",{staticClass:"log_img"},[s("div",{staticClass:"log_img_title"},[t._v("Kirish")]),s("img",{attrs:{src:a("684f"),alt:""}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"log_btn"},[s("button",[t._v("Kirish")])])}],o=(a("14d9"),a("0418")),l=a("fd2d"),r=a("a4cd"),n={components:{Footer:l["a"],Header:o["a"],PhoneMaskInput:r["a"]},data(){return{email:"",password:"",phone:"",code:"",isActive:!1}},methods:{regIstration(){this.$axiosDefault.post("/students/login/",{phone_number:this.phone,password:this.password}).then(t=>{localStorage.setItem("reg_token",t.data.access),this.$store.dispatch("getMe"),this.$router.push("/")})}}},c=n,d=a("2877"),u=Object(d["a"])(c,e,i,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d214428.acee2d22.js.map