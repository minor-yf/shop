(function(e){function t(t){for(var n,r,a=t[0],u=t[1],o=t[2],c=0,s=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(m,r)&&m[r]&&s.push(m[r][0]),m[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);g&&g(t);while(s.length)s.shift()();return l.push.apply(l,o||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],n=!0,r=1;r<i.length;r++){var a=i[r];0!==m[a]&&(n=!1)}n&&(l.splice(t--,1),e=u(u.s=i[0]))}return e}var n={},r={app:0},m={app:0},l=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-51c395e0":"65f7b745","chunk-741f5406":"6000c9d4","chunk-107d7e53":"91cbcd9b","chunk-31e66149":"23aad9ea","chunk-953dcbda":"c53df607","chunk-bda6a64a":"4f39be41"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(e){var t=[],i={"chunk-51c395e0":1,"chunk-107d7e53":1,"chunk-31e66149":1,"chunk-953dcbda":1,"chunk-bda6a64a":1};r[e]?t.push(r[e]):0!==r[e]&&i[e]&&t.push(r[e]=new Promise((function(t,i){for(var n="css/"+({}[e]||e)+"."+{"chunk-51c395e0":"95379451","chunk-741f5406":"31d6cfe0","chunk-107d7e53":"6b6c5e70","chunk-31e66149":"0ff340a2","chunk-953dcbda":"61171b9a","chunk-bda6a64a":"521660a2"}[e]+".css",m=u.p+n,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var o=l[a],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===n||c===m))return t()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){o=s[a],c=o.getAttribute("data-href");if(c===n||c===m)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var n=t&&t.target&&t.target.src||m,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete r[e],g.parentNode.removeChild(g),i(l)},g.href=m;var d=document.getElementsByTagName("head")[0];d.appendChild(g)})).then((function(){r[e]=0})));var n=m[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,i){n=m[e]=[t,i]}));t.push(n[2]=l);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var s=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(g);var i=m[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,i[1](s)}m[e]=void 0}};var g=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,i){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(i,n,function(t){return e[t]}.bind(null,n));return i},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var g=c;l.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"36cd":function(e,t,i){},"4f41":function(e,t,i){"use strict";i("a5de")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},m=[],l=(i("034f"),i("2877")),a={},u=Object(l["a"])(a,r,m,!1,null,null,null),o=u.exports,c=(i("d3b7"),i("8c4f")),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"background"},[i("navtop"),i("div",{staticStyle:{clear:"both"}}),i("router-view")],1)},g=[],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"body"},[null==e.username?i("div",{staticStyle:{float:"left"}},[i("router-link",{staticClass:"text_left",attrs:{to:"/"}},[e._v("游客 , 请登录")]),i("router-link",{staticClass:"text_left",staticStyle:{"margin-left":"20px"},attrs:{to:"/register"}},[e._v("注册")])],1):e._e(),null!=e.username?i("div",{staticStyle:{float:"left"}},[i("span",{staticClass:"text_left"},[e._v("欢迎您! "+e._s(e.username))]),i("a",{staticClass:"text_left",staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.loginOut()}}},[e._v("退出登录")])]):e._e(),i("div",{staticClass:"text_right"},[i("icon",{staticClass:"top",attrs:{name:"shopping-cart"}}),i("router-link",{staticStyle:{color:"blue"},attrs:{to:"/home/shoppingcart"}},[e._v("购物车")])],1),i("div",{staticClass:"text_right"},[i("icon",{staticClass:"top",attrs:{name:"home"}}),i("router-link",{staticStyle:{color:"rgb(43, 211, 99)"},attrs:{name:"user",to:"/home"}},[e._v("商城首页")])],1),i("div",{staticClass:"text_right"},[i("icon",{staticClass:"top",attrs:{name:"heart"}}),i("a",{staticStyle:{color:"grey"},on:{click:e.task}},[e._v("欢迎光临本数码商城")])],1)])},f=[],p={name:"navtop",data:function(){return{username:""}},methods:{loginOut:function(){localStorage.removeItem("username"),this.$router.go(0)},task:function(){this.$Message.info({content:"....欢迎光临本数码商城....",duration:3,background:!0,closable:!0})}},created:function(){this.username=localStorage.getItem("username")}},h=p,b=(i("62e2"),Object(l["a"])(h,d,f,!1,null,null,null)),v=b.exports,y={name:"LoginRegister",components:{navtop:v}},P=y,k=(i("8fa8"),Object(l["a"])(P,s,g,!1,null,null,null)),_=k.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"homebody"},[i("navtop"),i("div",{staticStyle:{clear:"both"}}),i("search",{staticClass:"searchstyle"}),i("midmenu"),i("router-view"),i("div",{staticClass:"bottom"},[e._v("联系我：1170688799@qq.com 版权所有")])],1)},C=[],I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"searchbody"},[n("div",{staticStyle:{display:"flex"}},[n("img",{attrs:{src:i("aa35"),alt:"",width:"90px",height:"90px"}}),n("input",{staticClass:"input",attrs:{type:"text",placeholder:"搜索"}}),n("button",{staticClass:"search"},[e._v("搜索")])])])}],x={name:"search"},w=x,T=(i("4f41"),Object(l["a"])(w,I,D,!1,null,null,null)),M=T.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Menu",{staticStyle:{"padding-left":"100px"},attrs:{mode:"horizontal",theme:e.theme1,accordion:""}},[i("Submenu",{attrs:{name:"0"}},[i("template",{slot:"title"},[e._v(" 数码分类 ")]),i("MenuItem",{attrs:{name:"2-1"}},[e._v("手机")]),i("MenuItem",{attrs:{name:"2-2"}},[e._v("平板电脑")]),i("MenuItem",{attrs:{name:"2-3"}},[e._v("游戏机")]),i("MenuItem",{attrs:{name:"2-4"}},[e._v("音箱")]),i("MenuItem",{attrs:{name:"2-5"}},[e._v("录音笔")]),i("MenuItem",{attrs:{name:"2-6"}},[e._v("电脑")]),i("MenuItem",{attrs:{name:"2-7"}},[e._v("键盘/鼠标")])],2),i("MenuItem",{attrs:{name:"1"}},[i("router-link",{attrs:{to:"/home/homebody"}},[e._v("首页")])],1),i("MenuItem",{attrs:{name:"2"}},[e._v(" 秒杀 ")]),i("MenuItem",{attrs:{name:"3"}},[e._v(" 会员中心 ")]),i("MenuItem",{attrs:{name:"4"}},[e._v(" 全球购 ")]),i("MenuItem",{attrs:{name:"5"}},[e._v(" 联系客服 ")])],1)],1)},O=[],A={name:"midmenu",data:function(){return{theme1:"light"}}},E=A,F=Object(l["a"])(E,L,O,!1,null,null,null),j=F.exports,B={name:"Home",props:{},components:{navtop:v,search:M,midmenu:j}},$=B,G=(i("b76c"),Object(l["a"])($,S,C,!1,null,null,null)),R=G.exports;n["default"].use(c["a"]);var N=[{path:"/home",name:"Home",redirect:"/home/homebody",component:R,children:[{path:"homebody",name:"HomeBody",component:function(){return Promise.all([i.e("chunk-741f5406"),i.e("chunk-107d7e53")]).then(i.bind(null,"f410"))}},{path:"itembody",name:"ItemBody",component:function(){return Promise.all([i.e("chunk-741f5406"),i.e("chunk-953dcbda")]).then(i.bind(null,"637f"))}},{path:"shoppingcart",name:"ShoppingCart",component:function(){return i.e("chunk-51c395e0").then(i.bind(null,"50c3"))}}]},{path:"/",name:"LoginRegister",redirect:"/login",component:_,children:[{path:"login",name:"Login",component:function(){return Promise.all([i.e("chunk-741f5406"),i.e("chunk-31e66149")]).then(i.bind(null,"de64"))}},{path:"register",name:"Register",component:function(){return i.e("chunk-bda6a64a").then(i.bind(null,"794a"))}}]}],H=new c["a"]({base:"",routes:N}),q=H,W=(i("d06d"),i("0874")),J=i("f825"),z=i.n(J),K=(i("f8ce"),i("784f")),U=i.n(K);n["default"].component("icon",W["a"]),n["default"].use(z.a),i("df9d"),n["default"].component("v-distpicker",U.a),n["default"].config.productionTip=!1,new n["default"]({router:q,render:function(e){return e(o)}}).$mount("#app")},"62e2":function(e,t,i){"use strict";i("87fc")},"85ec":function(e,t,i){},"87fc":function(e,t,i){},"8ac6":function(e,t,i){},"8fa8":function(e,t,i){"use strict";i("8ac6")},a5de:function(e,t,i){},aa35:function(e,t,i){e.exports=i.p+"img/shoppingbar.4a8c86be.png"},b76c:function(e,t,i){"use strict";i("36cd")},df9d:function(e,t,i){"use strict";i.r(t);var n=i("96eb"),r=i.n(n);r.a.mock("/user",/post|get/i,{username:"chenghao",password:"092218205"}),r.a.mock("/getItem",/post|get/i,(function(e){return"每日推荐"==e.body?r.a.mock({data:[{imgurl:100,desc:"任天堂Switch 日版续航版主机NS体感游戏机"},{imgurl:101,desc:"佳能旅游单反照相机"},{imgurl:102,desc:"搜狗录音笔"},{imgurl:103,desc:"现货Apple/苹果 Airpods2代无限蓝牙耳机"},{imgurl:104,desc:"OPPOReno5 5G新品骁龙智能手机"},{imgurl:105,desc:"Huawei/华为 Mate 40 Pro 5G手机"},{imgurl:106,desc:"【现货速发】Apple/苹果 iPhone12ProMax 5G新品智能手机"},{imgurl:107,desc:"alienware外星人笔记本游戏本"}]}):"精选好物"==e.body?r.a.mock({data:[{imgurl:108,desc:"国行2020新款Apple/苹果 MacBook Pro 13寸16寸笔记本电脑定制M1"},{imgurl:109,desc:"罗技无线蓝牙静音键盘套装键鼠"},{imgurl:110,desc:"EDIFIER/漫步者 W800BT无线蓝牙耳机"},{imgurl:111,desc:"小米AI音响小爱同学"},{imgurl:112,desc:"雷神新911黑武士10代i7电竞屏笔记本电脑"},{imgurl:113,desc:"【原封正品】2020新款Apple/苹果"},{imgurl:114,desc:"雷蛇少女电竞游戏RGB背光机械键盘"},{imgurl:115,desc:"Apple/苹果 AppleWatch SE苹果手表"}]}):void 0})),r.a.mock("/getItemInfo",/post|get/i,(function(e){return 100==e.body?r.a.mock({itemDesc:"任天堂Switch 日版续航版主机NS体感游戏机",itemDiscount:"直降200元!",itemPrice:2299,itemFullPrice:2499,itemColor:[{name:"红蓝"},{name:"灰色"}],itemType:[{name:"套餐1"},{name:"套餐2"}],sales:"6290",fullSales:"37894",fullPL:"31862",itemImg:[{imgurl:"00"},{imgurl:"01"},{imgurl:"02"},{imgurl:"03"},{imgurl:"04"},{imgurl:"05"},{imgurl:"06"}]}):101==e.body?r.a.mock({itemDesc:"佳能旅游单反照相机",itemDiscount:"直降1100元!",itemPrice:24899,itemFullPrice:25999,itemColor:[{name:"白色"},{name:"黑色"}],itemType:[{name:"套餐1"},{name:"套餐2"}],sales:"690",fullSales:"7894",fullPL:"31862",itemImg:[{imgurl:"10"},{imgurl:"11"},{imgurl:"12"},{imgurl:"13"},{imgurl:"14"},{imgurl:"15"},{imgurl:"16"}]}):102==e.body?r.a.mock({itemDesc:"搜狗录音笔",itemDiscount:"直降80元!",itemPrice:318,itemFullPrice:398,itemColor:[{name:"白色"},{name:"红色"},{name:"黑色"},{name:"蓝色"},{name:"黄色"}],itemType:[{name:"套餐1"},{name:"套餐2"}],sales:"690",fullSales:"6864",fullPL:"31862",itemImg:[{imgurl:"20"},{imgurl:"21"},{imgurl:"22"},{imgurl:"23"},{imgurl:"24"},{imgurl:"25"},{imgurl:"26"}]}):103==e.body?r.a.mock({itemDesc:"现货Apple/苹果 Airpods2代无限蓝牙耳机",itemDiscount:"直降100元!",itemPrice:848,itemFullPrice:948,itemColor:[{name:"白色"}],itemType:[{name:"套餐1"},{name:"套餐2"}],sales:"5690",fullSales:"67864",fullPL:"41862",itemImg:[{imgurl:"30"},{imgurl:"31"},{imgurl:"32"},{imgurl:"33"},{imgurl:"34"},{imgurl:"35"}]}):104==e.body?r.a.mock({itemDesc:"OPPOReno5 5G新品骁龙智能手机",itemDiscount:"直降200元!",itemPrice:2699,itemFullPrice:2899,itemColor:[{name:"黑色"},{name:"蓝色"},{name:"粉色"}],itemType:[{name:"套餐1"},{name:"套餐2"}],sales:"2290",fullSales:"19864",fullPL:"47862",itemImg:[{imgurl:"39"},{imgurl:"40"},{imgurl:"41"},{imgurl:"42"},{imgurl:"43"},{imgurl:"44"},{imgurl:"45"},{imgurl:"46"},{imgurl:"47"},{imgurl:"48"}]}):105==e.body?r.a.mock({itemDesc:"Huawei/华为 Mate 40 Pro 5G手机",itemDiscount:"直降500元!",itemPrice:7299,itemFullPrice:7799,itemColor:[{name:"黑色"},{name:"蓝色"},{name:"橙色"},{name:"粉色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"8790",fullSales:"29864",fullPL:"57862",itemImg:[{imgurl:"49"},{imgurl:"50"},{imgurl:"51"},{imgurl:"52"},{imgurl:"53"},{imgurl:"54"},{imgurl:"55"},{imgurl:"56"},{imgurl:"57"},{imgurl:"58"},{imgurl:"59"}]}):106==e.body?r.a.mock({itemDesc:"【现货速发】Apple/苹果 iPhone12ProMax 5G新品智能手机",itemDiscount:"直降400元!",itemPrice:9699,itemFullPrice:10099,itemColor:[{name:"金色"},{name:"银色"},{name:"石墨色"},{name:"海蓝色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"4590",fullSales:"54364",fullPL:"54442",itemImg:[{imgurl:"60"},{imgurl:"61"},{imgurl:"62"},{imgurl:"63"},{imgurl:"64"}]}):107==e.body?r.a.mock({itemDesc:"alienware外星人笔记本游戏本",itemDiscount:"直降2000元!",itemPrice:28999,itemFullPrice:30999,itemColor:[{name:"白色"},{name:"黑色"},{name:"灰色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"3490",fullSales:"9833",fullPL:"8332",itemImg:[{imgurl:"70"},{imgurl:"71"},{imgurl:"72"},{imgurl:"73"},{imgurl:"74"},{imgurl:"75"},{imgurl:"76"},{imgurl:"77"}]}):108==e.body?r.a.mock({itemDesc:"国行2020新款Apple/苹果 MacBook Pro 13寸16寸笔记本电脑定制M1",itemDiscount:"直降1100元!",itemPrice:8635,itemFullPrice:9735,itemColor:[{name:"白色"},{name:"黑色"},{name:"灰色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"1120",fullSales:"5345",fullPL:"11232",itemImg:[{imgurl:"80"},{imgurl:"81"},{imgurl:"82"},{imgurl:"83"},{imgurl:"84"},{imgurl:"85"}]}):109==e.body?r.a.mock({itemDesc:"罗技无线蓝牙静音键盘套装键鼠",itemDiscount:"直降10元!",itemPrice:179,itemFullPrice:189,itemColor:[{name:"粉色"},{name:"黑色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"10",fullSales:"535",fullPL:"132",itemImg:[{imgurl:"89"},{imgurl:"90"},{imgurl:"91"},{imgurl:"92"},{imgurl:"93"},{imgurl:"94"},{imgurl:"95"},{imgurl:"96"},{imgurl:"97"},{imgurl:"98"},{imgurl:"99"}]}):110==e.body?r.a.mock({itemDesc:"EDIFIER/漫步者 W800BT无线蓝牙耳机",itemDiscount:"直降10元!",itemPrice:289,itemFullPrice:299,itemColor:[{name:"粉色"},{name:"黑色"},{name:"蓝色"},{name:"橘色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"1012",fullSales:"5125",fullPL:"1322",itemImg:[{imgurl:"100"},{imgurl:"101"},{imgurl:"102"},{imgurl:"103"},{imgurl:"104"},{imgurl:"105"},{imgurl:"106"}]}):111==e.body?r.a.mock({itemDesc:"小米AI音响小爱同学",itemDiscount:"直降40元!",itemPrice:209,itemFullPrice:249,itemColor:[{name:"白色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"11223",fullSales:"53232",fullPL:"23542",itemImg:[{imgurl:"110"},{imgurl:"111"},{imgurl:"112"},{imgurl:"113"},{imgurl:"114"},{imgurl:"115"},{imgurl:"116"},{imgurl:"117"},{imgurl:"118"},{imgurl:"119"}]}):112==e.body?r.a.mock({itemDesc:"雷神新911黑武士10代i7电竞屏笔记本电脑",itemDiscount:"直降600元!",itemPrice:6799,itemFullPrice:7399,itemColor:[{name:"白色"},{name:"黑色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"1123",fullSales:"52325",fullPL:"6542",itemImg:[{imgurl:"120"},{imgurl:"121"},{imgurl:"122"},{imgurl:"123"},{imgurl:"124"},{imgurl:"125"}]}):113==e.body?r.a.mock({itemDesc:"【原封正品】2020新款Apple/苹果 10.2英寸iPad平板电脑ipad8便携式掌上电脑128G支持Apple Pencil和智能键盘",itemDiscount:"直降200元!",itemPrice:6799,itemFullPrice:6999,itemColor:[{name:"白色"},{name:"黑色"},{name:"灰色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"120",fullSales:"5366",fullPL:"1100",itemImg:[{imgurl:"130"},{imgurl:"131"},{imgurl:"132"},{imgurl:"133"},{imgurl:"134"},{imgurl:"135"},{imgurl:"136"},{imgurl:"137"},{imgurl:"138"},{imgurl:"139"}]}):114==e.body?r.a.mock({itemDesc:"雷蛇少女电竞游戏RGB背光机械键盘",itemDiscount:"直降230元!",itemPrice:869,itemFullPrice:1099,itemColor:[{name:"粉色"},{name:"黑色"},{name:"白色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"873",fullSales:"9236",fullPL:"2310",itemImg:[{imgurl:"140"},{imgurl:"141"},{imgurl:"142"},{imgurl:"143"},{imgurl:"144"},{imgurl:"145"}]}):115==e.body?r.a.mock({itemDesc:"Apple/苹果 AppleWatch SE苹果手表",itemDiscount:"直降300元!",itemPrice:2499,itemFullPrice:2799,itemColor:[{name:"白色"},{name:"黑色"},{name:"灰色"},{name:"粉色"}],itemType:[{name:"套餐1"},{name:"套餐2"},{name:"套餐3"}],sales:"2120",fullSales:"53226",fullPL:"113122",itemImg:[{imgurl:"150"},{imgurl:"151"},{imgurl:"152"},{imgurl:"153"},{imgurl:"154"},{imgurl:"155"},{imgurl:"156"}]}):r.a.mock({itemDesc:"暂无数据",itemDiscount:"暂无数据",itemPrice:"暂无数据",itemFullPrice:"暂无数据",itemColor:[{name:"暂无存货"}],itemType:[{name:"暂无存货"}],sales:"???",fullSales:"???",fullPL:"???",itemImg:[]})}))}});
//# sourceMappingURL=app.8f80054b.js.map