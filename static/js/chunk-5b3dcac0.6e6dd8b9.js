(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b3dcac0"],{"1e4b":function(t,e,u){"use strict";u.r(e);var i=function(){var t=this,e=t.$createElement,u=t._self._c||e;return u("div",{staticStyle:{height:"100%"}},[u("section",{staticClass:"main-wrapper nav-bar"},[u("van-nav-bar",{attrs:{title:"财富中心"}}),u("van-form",[u("van-cell-group",[u("van-field",{attrs:{type:"number",center:"",label:"红球数量：",required:""},model:{value:t.redNum,callback:function(e){t.redNum=e},expression:"redNum"}}),u("van-field",{attrs:{type:"number",center:"",label:"蓝球数量：",required:""},model:{value:t.blueNum,callback:function(e){t.blueNum=e},expression:"blueNum"}}),u("van-field",{attrs:{type:"number",center:"",label:"投注数量：",required:""},model:{value:t.totalNum,callback:function(e){t.totalNum=e},expression:"totalNum"}}),u("van-field",{attrs:{type:"number",center:"",label:"投注倍数：",required:""},model:{value:t.beiNum,callback:function(e){t.beiNum=e},expression:"beiNum"}})],1)],1),u("div",{staticStyle:{display:"flex","justify-content":"center",padding:"10px"}},[u("van-button",{attrs:{color:"red"},on:{click:t.goAction}},[t._v("大吉大利")])],1),u("van-cell-group",{attrs:{title:"总计："+this.money+"元（倍数："+t.currentBei+"）"}},t._l(t.resultList,(function(t,e){return u("van-cell",{key:e,attrs:{title:t.red,value:t.blue,"title-style":"color: red","value-class":"valueClass"}})})),1)],1)])},s=[],a=(u("a15b"),u("2b0e")),l={name:"Index",components:{},data:function(){return{redNum:6,blueNum:1,totalNum:1,beiNum:1,currentBei:1,resultList:[],money:0}},created:function(){a["a"].ls.get("redNum")||a["a"].ls.set("redNum",this.redNum),a["a"].ls.get("blueNum")||a["a"].ls.set("blueNum",this.blueNum),a["a"].ls.get("totalNum")||a["a"].ls.set("totalNum",this.totalNum),a["a"].ls.get("beiNum")||a["a"].ls.set("beiNum",this.beiNum),this.redNum=a["a"].ls.get("redNum"),this.blueNum=a["a"].ls.get("blueNum"),this.totalNum=a["a"].ls.get("totalNum"),this.beiNum=a["a"].ls.get("beiNum"),this.currentBei=this.beiNum},methods:{goAction:function(){(this.redNum<6||this.redNum>33)&&(this.redNum=6),(this.blueNum<1||this.blueNum>16)&&(this.blueNum=1),this.totalNum<1&&(this.totalNum=1),this.beiNum<1&&(this.beiNum=1),this.money=0,this.resultList=[];for(var t=0,e=0;e<this.totalNum;e++){var u=this.getRandomNum(1,33,this.redNum),i=this.getRandomNum(1,16,this.blueNum),s={red:u.join("，"),blue:i.join("，")};this.resultList.push(s),0===e&&(t=this.fac(this.redNum,6)*this.fac(this.blueNum,1)*this.beiNum*2)}this.money=t*this.resultList.length,a["a"].ls.set("redNum",this.redNum),a["a"].ls.set("blueNum",this.blueNum),a["a"].ls.set("totalNum",this.totalNum),a["a"].ls.set("beiNum",this.beiNum),this.currentBei=this.beiNum},fac:function(t,e){if(t<e)return 0;if(t===e)return 1;var u=this.factorial(t)/(this.factorial(t-e)*this.factorial(e));return u},factorial:function(t,e){return console.log(t,e),e=e||1,console.log(t,e),t<2?e:this.factorial(t-1,e*t)},getRandomNum:function(t,e,u){var i=[];function s(){for(var s=0;s<u;s++){var a=Math.floor(Math.random()*(e-t+1)+t);-1===i.indexOf(a)?i.push(a):s--}return i}return s(),i.sort((function(t,e){return t-e})),i}}},r=l,n=(u("ec98"),u("2877")),o=Object(n["a"])(r,i,s,!1,null,"5d268288",null);e["default"]=o.exports},"6c76":function(t,e,u){},a15b:function(t,e,u){"use strict";var i=u("23e7"),s=u("44ad"),a=u("fc6a"),l=u("a640"),r=[].join,n=s!=Object,o=l("join",",");i({target:"Array",proto:!0,forced:n||!o},{join:function(t){return r.call(a(this),void 0===t?",":t)}})},ec98:function(t,e,u){"use strict";u("6c76")}}]);