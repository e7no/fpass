webpackJsonp([1],[,,,,function(n,e,t){"use strict";t.d(e,"b",function(){return o}),t.d(e,"a",function(){return r});var a=t(0),i=t(11);a.default.use(i.a);var o=["en","zh-CN"],r=new i.a({locale:o[0],messages:o.reduce(function(n,e){return n[e]=t(12)("./"+e+".json"),n},{})})},function(n,e,t){"use strict";var a=t(19),i=t.n(a),o=t(27),r=t(30),s=t(31);e.a={data:function(){return{rules:r.a,ruleIndex:"",password:"",dialog:"",domain:"",length:""}},components:{GithubIcon:o.a},computed:{encrypt:function(){var n=this.rules[this.ruleIndex];return n&&this.password?this.ruleIndex===this.rules.length-1?Object(s.a)({domain:this.domain,salt:this.password,length:this.length}):Object(s.a)(Object.assign({},n,{salt:this.password})):""}},mounted:function(){this.jsOk=this.$el.querySelector(".js-ok"),this.clipboard(),this.keyup(),this.scrollIntoView()},methods:{clipboard:function(){var n=this;new i.a(this.jsOk,{text:function(){return n.encrypt}})},keyup:function(){var n=this,e={13:function(){return n.jsOk.click()},27:function(){return n.dialog=""}};window.addEventListener("keyup",function(n){var t=n.keyCode;return e[t]&&e[t]()})},scrollIntoView:function(){Array.from(this.$el.querySelectorAll("input")).forEach(function(n){n.addEventListener("focus",function(){setTimeout(function(){return n.scrollIntoView(!1)},250)})})},clickOk:function(){this.dialog=i.a.isSupported()?this.$t("copied"):this.encrypt}}}},function(n,e,t){"use strict";var a=t(0),i=t(37),o=t.n(i),r=t(38),s=(t.n(r),t(39));t.n(s);a.default.use(o.a),e.a={}},function(n,e,t){n.exports=t(8)},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(0),i=t(4),o=t(15),r=t(35);new a.default({i18n:i.a,router:o.a,el:"#app",render:function(n){return n(r.a)}})},,,,function(n,e,t){function a(n){return t(i(n))}function i(n){var e=o[n];if(!(e+1))throw new Error("Cannot find module '"+n+"'.");return e}var o={"./en.json":13,"./zh-CN.json":14};a.keys=function(){return Object.keys(o)},a.resolve=i,n.exports=a,a.id=12},function(n,e){n.exports={domain:"DOMAIN",password:"PASSWORD",length:"LENGTH",confirm:"OK",copied:"The password has been copied to the clipboard"}},function(n,e){n.exports={domain:"域名",password:"密码",length:"长度",confirm:"确定",copied:"密码已复制到剪贴板"}},function(n,e,t){"use strict";var a=t(0),i=t(16),o=t(4),r=t(17);a.default.use(i.a);var s=new i.a({mode:"history",routes:[].concat(function(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}(o.b.map(function(n){return{name:n,path:"/"+n,component:r.a}})),[{name:"index",path:"*",component:r.a}])});s.beforeEach(function(n,e,t){var a=n.name,i=-1===o.b.indexOf(a)?-1===o.b.indexOf(navigator.language)?o.b[0]:navigator.language:a;if("index"===a)return t({name:i,replace:!0});o.a.locale=i,t()}),e.a=s},,function(n,e,t){"use strict";function a(n){t(18)}var i=t(5),o=t(34),r=t(2),s=a,l=r(i.a,o.a,!1,s,"data-v-5371d6f6",null);e.a=l.exports},function(n,e){},,,,,,,,,function(n,e,t){"use strict";function a(n){t(28)}var i=t(29),o=t(2),r=a,s=o(null,i.a,!1,r,"data-v-651b26cb",null);e.a=s.exports},function(n,e){},function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",{staticClass:"github-icon"},[t("svg",{attrs:{height:"32",version:"1.1",viewBox:"0 0 16 16",width:"32"}},[t("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])},i=[],o={render:a,staticRenderFns:i};e.a=o},function(n,e,t){"use strict";var a=[{name:"腾讯企业邮",domain:"exmail.qq.com",length:32},{name:"segmentfault",domain:"segmentfault.com",length:32},{name:"简书",domain:"jianshu.com",length:32},{name:"微信公众平台",domain:"mp.weixin.qq.com",length:16},{name:"优酷",domain:"youku.com",length:16},{name:"Steam",domain:"store.steampowered.com",length:64},{name:"腾讯QQ",domain:"qq.com",length:16},{name:"微信",domain:"wx.qq.com",length:16},{name:"GitHub",domain:"github.com",length:72},{name:"NPM",domain:"npmjs.com",length:72},{name:"知乎",domain:"zhihu.com",length:128},{name:"百度",domain:"baidu.com",length:14},{name:"新浪微博",domain:"weibo.com",length:16},{name:"12306",domain:"12306.cn",length:20},{name:"豆瓣",domain:"douban.com",length:20},{name:"拉钩",domain:"lagou.com",length:16},{name:"阿里云企业邮",domain:"qiye.aliyun.com",length:32},{name:"淘宝",domain:"taobao.com",length:20},{name:"京东",domain:"jd.com",length:20},{name:"Coding",domain:"coding.net",length:64},{name:"开源中国",domain:"oschina.net",length:20},{name:"码云",domain:"gitee.com",length:16},{name:"斗鱼",domain:"douyu.com",length:25},{name:"哔哩哔哩",domain:"bilibili.com",length:16},{name:"甲骨文",domain:"oracle.com",length:80},{name:"饿了么",domain:"ele.me",length:20},{name:"Cloudflare",domain:"cloudflare.com",length:128},{name:"Freenom",domain:"freenom.com",length:64},{name:"Vultr",domain:"vultr.com",length:128},{name:"小米",domain:"mi.com",length:16},{name:"华为账号",domain:"vmall.com",length:32}];a.sort(function(n,e){return n.domain<=e.domain?-1:1}),a.push({name:"其它",domain:"other"}),e.a=a},function(n,e,t){"use strict";var a=t(32),i=t.n(a);e.a=function(n){var e=n.domain,t=n.salt,a=n.length;if(!e||!t||a<=2)return"";var o=Array.apply(null,{length:3}).reduce(function(n){return i()(n+t)},e).substr(0,a).split("");return o[0]=isNaN(o[0])?o[0].toUpperCase():String.fromCharCode(65+parseInt(o[0])),o[1]=isNaN(o[1])?o[1].toLowerCase():String.fromCharCode(97+parseInt(o[1])),o[2]=isNaN(o[2])?o[2].charCodeAt(0)%10:o[2],o.join("")}},,,function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"wrap"},[t("div",{staticClass:"mu-appbar"},[n._m(0),n._v(" "),t("a",{staticClass:"github",attrs:{href:"https://github.com/fpass/fpass",target:"_blank"}},[t("github-icon")],1)]),n._v(" "),t("mu-card",{staticClass:"form"},[t("div",{staticClass:"field"},[t("mu-select-field",{attrs:{label:n.$t("domain")},model:{value:n.ruleIndex,callback:function(e){n.ruleIndex=e},expression:"ruleIndex"}},n._l(n.rules,function(n,e){return t("mu-menu-item",{key:e,attrs:{value:e,title:n.domain+" - "+n.name}})}))],1),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.ruleIndex===n.rules.length-1,expression:"ruleIndex === rules.length - 1"}],staticClass:"field"},[t("mu-text-field",{attrs:{label:n.$t("domain"),type:"text"},model:{value:n.domain,callback:function(e){n.domain=e},expression:"domain"}})],1),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.ruleIndex===n.rules.length-1,expression:"ruleIndex === rules.length - 1"}],staticClass:"field"},[t("mu-text-field",{attrs:{label:n.$t("length"),type:"number"},model:{value:n.length,callback:function(e){n.length=e},expression:"length"}})],1),n._v(" "),t("div",{staticClass:"field"},[t("mu-text-field",{attrs:{label:n.$t("password"),type:"password"},model:{value:n.password,callback:function(e){n.password=e},expression:"password"}})],1),n._v(" "),t("div",{staticClass:"field"},[t("mu-raised-button",{staticClass:"js-ok",attrs:{label:n.$t("confirm"),disabled:!n.encrypt,primary:""},on:{click:n.clickOk}})],1)]),n._v(" "),t("mu-dialog",{attrs:{open:!!n.dialog,title:n.dialog}},[t("mu-flat-button",{attrs:{slot:"actions",label:n.$t("confirm"),primary:""},on:{click:function(e){n.dialog=""}},slot:"actions"})],1)],1)},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mu-appbar-title"},[t("span",[n._v("FINAL PASS")])])}],o={render:a,staticRenderFns:i};e.a=o},function(n,e,t){"use strict";function a(n){t(36)}var i=t(6),o=t(40),r=t(2),s=a,l=r(i.a,o.a,!1,s,null,null);e.a=l.exports},function(n,e){},,,,function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],o={render:a,staticRenderFns:i};e.a=o}],[7]);
//# sourceMappingURL=client.b2719631.js.map