(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f185"],{b1bb:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"main_navs"},[t("Header"),s.is_response?t("div",{staticClass:"container mb-4"},[t("div",{staticClass:"ans_card"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-8"},[t("div",{staticClass:"ans_title"},[s._v(s._s(s.it.domain_title))]),s._l(s.an_res,(function(a,e){return t("div",{key:e},[t("div",{staticClass:"ans_desc"},[s._v(" "+s._s(a.domain_description)+" ")]),t("div",{staticClass:"ans_desc"},[s._v(" "+s._s(a.test_title)+" ")])])})),t("div",{staticClass:"link_group"},[t("div",[t("a",{staticClass:"link_main decoration",attrs:{href:"#"},on:{click:function(t){return s.getOnetest()}}},[t("div",[s._v(" Testga qaytish ")])])]),t("div",[t("router-link",{staticClass:"link_main_calk decoration",attrs:{to:"/start-test"}},[t("div",[s._v(" Boshqa testga kirish ")])])],1)])],2),t("div",{staticClass:"col-xl-4"},[t("img",{staticClass:"ans_img",attrs:{src:s.an_res.image_url,width:"100%",alt:""}})])])])]):s._e(),s.is_response?s._e():t("div",{staticClass:"container"},[t("div",{staticClass:"on_test_title"},[s._v(s._s(s.$store.state.testsId.title))]),t("div",{staticClass:"on-test"},[t("div",{staticClass:"one_test_progress"},[t("div",{staticClass:"on-test-count"},[s._v(" "+s._s(s.sliderValue)+"/"+s._s(s.$store.state.test_one.length)+" ")]),t("div",{staticClass:"on-test-range"},[t("range-slider",{staticClass:"slider",attrs:{min:"0",max:s.$store.state.test_one.length,step:"1"},model:{value:s.sliderValue,callback:function(t){s.sliderValue=t},expression:"sliderValue"}})],1),t("div",{staticClass:"on-test-card"},[t("div",[t("div",[t("div",{staticClass:"on-test-quiz"},[s._v(" "+s._s(s.$store.state.test_one[s.sliderValue-1].title)+" ")]),t("div",{staticClass:"answers"},[t("label",{staticClass:"ans_id container_input",attrs:{for:"`quiz_ans`"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ans_quiz,expression:"ans_quiz"}],attrs:{type:"radio",id:"`quiz_ans`",name:"quiz_ans",value:"-3"},domProps:{checked:s._q(s.ans_quiz,"-3")},on:{input:function(t){return s.getAns(s.ans_quiz)},change:function(t){s.ans_quiz="-3"}}}),t("span",{staticClass:"checkmark"}),t("span",{staticClass:"ans_text"},[s._v("To'liq qo'shilmayman")])])]),t("div",{staticClass:"answers"},[t("label",{staticClass:"ans_id container_input",attrs:{for:"`quiz_ans1`"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ans_quiz,expression:"ans_quiz"}],attrs:{type:"radio",id:"`quiz_ans1`",name:"quiz_ans",value:"-2"},domProps:{checked:s._q(s.ans_quiz,"-2")},on:{input:function(t){return s.getAns(s.ans_quiz)},change:function(t){s.ans_quiz="-2"}}}),t("span",{staticClass:"checkmark"}),t("span",{staticClass:"ans_text"},[s._v("Qo'shilmayman")])])]),t("div",{staticClass:"answers"},[t("label",{staticClass:"ans_id container_input",attrs:{for:"`quiz_ans2`"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ans_quiz,expression:"ans_quiz"}],attrs:{type:"radio",id:"`quiz_ans2`",name:"quiz_ans",value:"-1"},domProps:{checked:s._q(s.ans_quiz,"-1")},on:{input:function(t){return s.getAns(s.ans_quiz)},change:function(t){s.ans_quiz="-1"}}}),t("span",{staticClass:"checkmark"}),t("span",{staticClass:"ans_text"},[s._v("Qisman qo'shilmayman")])])]),t("div",{staticClass:"answers"},[t("label",{staticClass:"ans_id container_input",attrs:{for:"`quiz_ans3`"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ans_quiz,expression:"ans_quiz"}],attrs:{type:"radio",id:"`quiz_ans3`",name:"quiz_ans",value:"1"},domProps:{checked:s._q(s.ans_quiz,"1")},on:{input:function(t){return s.getAns(s.ans_quiz)},change:function(t){s.ans_quiz="1"}}}),t("span",{staticClass:"checkmark"}),t("span",{staticClass:"ans_text"},[s._v("Qisman qo'shilaman")])])]),t("div",{staticClass:"answers"},[t("label",{staticClass:"ans_id container_input",attrs:{for:"`quiz_ans4`"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ans_quiz,expression:"ans_quiz"}],attrs:{type:"radio",id:"`quiz_ans4`",name:"quiz_ans",value:"2"},domProps:{checked:s._q(s.ans_quiz,"2")},on:{input:function(t){return s.getAns(s.ans_quiz)},change:function(t){s.ans_quiz="2"}}}),t("span",{staticClass:"checkmark"}),t("span",{staticClass:"ans_text"},[s._v("Qo'shilaman")])])]),t("div",{staticClass:"answers"},[t("label",{staticClass:"ans_id container_input",attrs:{for:"`quiz_ans5`"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.ans_quiz,expression:"ans_quiz"}],attrs:{type:"radio",id:"`quiz_ans5`",name:"quiz_ans",value:"3"},domProps:{checked:s._q(s.ans_quiz,"3")},on:{input:function(t){return s.getAns(s.ans_quiz)},change:function(t){s.ans_quiz="3"}}}),t("span",{staticClass:"checkmark"}),t("span",{staticClass:"ans_text"},[s._v("To'liq qo'shilaman")])])])]),t("div",{staticClass:"on-test-button"},[t("button",{staticClass:"prev",on:{click:function(t){return s.prevStart()}}},[t("span",[s._v("Odldingisi")])]),s.sliderValue==s.$store.state.test_one.length?t("button",{staticClass:"next",on:{click:function(t){return s.endTest()}}},[t("span",[s._v("Tugatish")])]):t("button",{staticClass:"next",on:{click:function(t){return s.nextStart()}}},[t("span",[s._v("Keyngisi")])])])])])])])]),t("Footer")],1)},i=[],n=a("0418"),r=a("fd2d"),l=a("c7e3"),o=a.n(l),u=(a("2760"),{components:{Footer:r["a"],Header:n["a"],RangeSlider:o.a},data(){return{ans_quiz:"",sliderValue:1,value:0,activeIndex:0,max:12,isActive:!1,userResponses:[],answer:[],activeAn:[],an_res:{},is_response:!1}},mounted(){this.$store.dispatch("getQuizOne",this.$route.params.id),this.max=this.$store.state.test_one.length,this.$store.dispatch("getTestsId",this.$route.params.id)},methods:{getAns(s){console.log(),this.answer[this.sliderValue-1]={question_id:this.$store.state.test_one[this.sliderValue-1].id,value:Number(s)},console.log(typeof Number(s))},nextStart(){this.sliderValue<this.$store.state.test_one.length&&this.sliderValue++},endTest(){this.$axiosDefault.post("test-result/",{answers:this.answer,test_id:this.$route.params.id},{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(s=>{this.an_res=s.data.result,this.is_response=!0})},getOnetest(){this.is_response=!1,this.sliderValue=1,this.answer=[]},prevStart(){this.sliderValue>1&&this.sliderValue--}}}),c=u,_=a("2877"),d=Object(_["a"])(c,e,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d20f185.e6a913be.js.map