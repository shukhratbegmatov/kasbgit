(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f899"],{d9f4:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("Header"),t.is_response?s("div",{staticClass:"container mb-4"},[s("div",{staticClass:"ans_card"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-8"},[s("div",{staticClass:"ans_title"},[t._v(t._s(t.an_res.title))]),s("div",{staticClass:"ans_desc"},[t._v(" "+t._s(t.an_res.description)+" ")]),s("div",{staticClass:"link_group"},[s("div",[s("a",{staticClass:"link_main decoration",attrs:{href:"#"},on:{click:function(s){return t.getOnetest()}}},[s("div",[t._v(" Testga qaytish ")])])]),s("div",[s("router-link",{staticClass:"link_main_calk decoration",attrs:{to:"/start-test"}},[s("div",[t._v(" Boshqa testga kirish ")])])],1)])]),s("div",{staticClass:"col-xl-4"},[s("img",{staticClass:"ans_img",attrs:{src:t.an_res.image_url,width:"100%",alt:""}})])])])]):t._e(),t.is_response?t._e():s("div",{staticClass:"container"},[s("div",{staticClass:"on_test_title"},[t._v(t._s(t.$store.state.testsId.title))]),s("div",{staticClass:"on-test"},[s("div",{staticClass:"one_test_progress"},[s("div",{staticClass:"on-test-count"},[t._v(" Вопросы "+t._s(t.sliderValue)+"/"+t._s(t.$store.state.test_one.length)+" ")]),s("div",{staticClass:"on-test-range"},[s("range-slider",{staticClass:"slider",attrs:{min:"0",max:t.$store.state.test_one.length,step:"1"},model:{value:t.sliderValue,callback:function(s){t.sliderValue=s},expression:"sliderValue"}})],1),s("div",{staticClass:"on-test-card"},[s("div",[s("div",[s("div",{staticClass:"on-test-quiz"},[t._v(" "+t._s(t.$store.state.test_one[t.sliderValue-1].title)+" ")]),s("div",{staticClass:"answers quiz_two"},[s("div",[s("button",{staticClass:"chois_btn_true",class:{active:t.quiz_active},on:{click:function(s){return t.getQuiz(!0)}}},[t._v(" "+t._s(t.$t("true"))+" ")]),s("button",{staticClass:"chois_btn_false",class:{active:!t.quiz_active},on:{click:function(s){return t.getQuiz(!1)}}},[t._v(" "+t._s(t.$t("false"))+" ")])])])])])])])])]),s("Footer")],1)},a=[],r=(e("14d9"),e("0418")),n=e("fd2d"),l=e("c7e3"),o=e.n(l),d=(e("2760"),{components:{Footer:n["a"],Header:r["a"],RangeSlider:o.a},data(){return{sliderValue:1,value:0,activeIndex:0,max:12,isActive:!1,userResponses:[],answer:[],activeAn:[],an_res:{},is_response:!1,timer:80,quiz_active:"",allAnswer:[]}},mounted(){this.$store.dispatch("getTestsId",this.$route.params.id),this.$store.dispatch("getQuizOne",this.$route.params.id),this.max=this.$store.state.test_one.length;var t=setInterval(()=>{this.timer=this.timer-1,0==this.timer&&(clearInterval(t),this.endTest())},5e3)},methods:{getQuiz(t){console.log(t),this.quiz_active=1==t,this.sliderValue=this.sliderValue+1,this.answer.push({question_id:this.$store.state.test_one[this.sliderValue-1].id,choice:!0}),this.sliderValue==this.$store.state.test_one.length&&this.endTest()},getAns(t){this.answer[this.sliderValue-1]={question_id:this.$store.state.test_one[this.sliderValue-1].id,choice_id:t.id}},nextStart(){this.sliderValue<this.$store.state.test_one.length&&this.sliderValue++},endTest(){this.$axiosDefault.post("test-result/",{answers:this.answer,test_id:this.$route.params.id},{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(t=>{this.an_res=t.data.result,this.is_response=!0,this.timer=0})},getOnetest(){this.is_response=!1,this.sliderValue=1,this.answer=[]},prevStart(){this.sliderValue>1&&this.sliderValue--}}}),c=d,u=e("2877"),_=Object(u["a"])(c,i,a,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d21f899.958c3415.js.map