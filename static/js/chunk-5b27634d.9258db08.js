(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b27634d"],{"1e4b":function(t,e,i){"use strict";i.r(e);var u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("section",{staticClass:"main-wrapper nav-bar"},[i("van-nav-bar",{attrs:{title:"财富中心"}}),i("van-form",[i("van-cell-group",[i("van-field",{attrs:{type:"number",center:"",label:"红球数量：",required:""},model:{value:t.redNum,callback:function(e){t.redNum=e},expression:"redNum"}}),i("van-field",{attrs:{type:"number",center:"",label:"蓝球数量：",required:""},model:{value:t.blueNum,callback:function(e){t.blueNum=e},expression:"blueNum"}}),i("van-field",{attrs:{type:"number",center:"",label:"投注数量：",required:""},model:{value:t.totalNum,callback:function(e){t.totalNum=e},expression:"totalNum"}}),i("van-field",{attrs:{type:"number",center:"",label:"投注倍数：",required:""},model:{value:t.beiNum,callback:function(e){t.beiNum=e},expression:"beiNum"}})],1)],1),i("div",{staticStyle:{display:"flex","justify-content":"center",padding:"10px"}},[i("van-button",{attrs:{color:"red"},on:{click:t.goAction}},[t._v("大吉大利")])],1),i("van-cell-group",{attrs:{title:"总计："+this.money+"元（倍数："+t.currentBei+"）"}},t._l(t.resultList,(function(e,u){return i("van-cell",{key:u,attrs:{center:""},scopedSlots:t._u([{key:"title",fn:function(){return[i("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},t._l(e.red,(function(e,u){return i("div",{key:u,staticClass:"ball",staticStyle:{background:"#ed2836"}},[t._v(" "+t._s(e))])})),0)]},proxy:!0},{key:"right-icon",fn:function(){return[i("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-evenly","max-width":"20%","min-width":"100px"}},t._l(e.blue,(function(e,u){return i("div",{key:u,staticClass:"ball",staticStyle:{background:"#206cd3","margin-left":"10px"}},[t._v(" "+t._s(e))])})),0)]},proxy:!0}],null,!0)})})),1)],1)])},s=[],l=i("2b0e"),a={name:"Index",components:{},data:function(){return{redNum:6,blueNum:1,totalNum:1,beiNum:1,currentBei:1,resultList:[],money:0}},created:function(){l["a"].ls.get("redNum")||l["a"].ls.set("redNum",this.redNum),l["a"].ls.get("blueNum")||l["a"].ls.set("blueNum",this.blueNum),l["a"].ls.get("totalNum")||l["a"].ls.set("totalNum",this.totalNum),l["a"].ls.get("beiNum")||l["a"].ls.set("beiNum",this.beiNum),this.redNum=l["a"].ls.get("redNum"),this.blueNum=l["a"].ls.get("blueNum"),this.totalNum=l["a"].ls.get("totalNum"),this.beiNum=l["a"].ls.get("beiNum"),this.currentBei=this.beiNum},methods:{goAction:function(){var t=this;if(this.resultList.length>0)this.$dialog.confirm({title:"请问",message:"是否重新生成财富幸运代码？"}).then((function(){t.resultList=[],t.goAction()}));else{(this.redNum<6||this.redNum>33)&&(this.redNum=6),(this.blueNum<1||this.blueNum>16)&&(this.blueNum=1),this.totalNum<1&&(this.totalNum=1),this.beiNum<1&&(this.beiNum=1),this.money=0,this.resultList=[];for(var e=0,i=0;i<this.totalNum;i++){var u=this.getRandomNum(1,33,this.redNum),s=this.getRandomNum(1,16,this.blueNum),a={red:u,blue:s};this.resultList.push(a),0===i&&(e=this.fac(this.redNum,6)*this.fac(this.blueNum,1)*this.beiNum*2)}this.money=e*this.resultList.length,l["a"].ls.set("redNum",this.redNum),l["a"].ls.set("blueNum",this.blueNum),l["a"].ls.set("totalNum",this.totalNum),l["a"].ls.set("beiNum",this.beiNum),this.currentBei=this.beiNum}},fac:function(t,e){if(t<e)return 0;if(t===e)return 1;var i=this.factorial(t)/(this.factorial(t-e)*this.factorial(e));return i},factorial:function(t,e){return console.log(t,e),e=e||1,console.log(t,e),t<2?e:this.factorial(t-1,e*t)},getRandomNum:function(t,e,i){var u=[];function s(){for(var s=0;s<i;s++){var l=Math.floor(Math.random()*(e-t+1)+t);-1===u.indexOf(l)?u.push(l):s--}return u}return s(),u.sort((function(t,e){return t-e})),u}}},n=a,r=(i("c0bb"),i("2877")),o=Object(r["a"])(n,u,s,!1,null,"7f707f3b",null);e["default"]=o.exports},c0bb:function(t,e,i){"use strict";i("c6ea")},c6ea:function(t,e,i){}}]);