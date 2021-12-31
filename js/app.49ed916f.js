(function(t){function e(e){for(var n,r,a=e[0],l=e[1],u=e[2],h=0,d=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-loadmore/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuejs-loadmore"},[i("div",{ref:"track",staticClass:"vuejs-refresh-track",style:{transform:t.distance?"translate3d(0, "+t.distance+"px, 0)":"",webkitTransform:t.distance?"translate3d(0, "+t.distance+"px, 0)":"",transitionDuration:t.duration+"ms"}},[i("div",{staticClass:"vuejs-refresh-head",style:t.headStyle},["refresh"===t.status?i("div",[i("Loading",[t._v(t._s(t.genStatus))])],1):i("div",{staticClass:"vuejs-refresh-text"},[t._v(t._s(t.genStatus))])]),t._t("default"),i("div",{staticClass:"vuejs-loadmore"},[!t.loadLoading||t.finished||t.error?t._e():i("div",{staticClass:"vuejs-loadmore-loading"},[i("Loading",[t._v(t._s(t.loadingText))])],1),t.finished?i("div",{staticClass:"vuejs-loadmore-finished-text"},[t._v(" "+t._s(t.finishedText)+" ")]):t._e(),t.error?i("div",{staticClass:"vuejs-loadmore-error-text",on:{click:t.clickErrorText}},[t._v(" "+t._s(t.errorText)+" ")]):t._e(),i("div",{ref:"placeholder",staticClass:"vuejs-loadmore-placeholder"})])],2)])},o=[];i("a9e3");function r(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.addEventListener(e,i,!!n&&{capture:!1,passive:n})}function a(t,e,i){t.removeEventListener(e,i)}function l(t){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault()}function u(t,e){var i=10,n=Math.abs(t),s=Math.abs(e);return n>s&&n>i?"horizontal":s>n&&s>i?"vertical":""}var c={data:function(){return{direction:""}},methods:{bindTouchEvent:function(t){var e=this.onTouchStart,i=this.onTouchMove,n=this.onTouchEnd;r(t,"touchstart",e),r(t,"touchmove",i),n&&(r(t,"touchend",n),r(t,"touchcancel",n))},touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX<0?0:e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.direction=this.direction||u(this.deltaX,this.deltaY)},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0}}};function h(t){function e(){t.call(this,r)}function i(){t.call(this,a)}return{mounted:e,activated:e,deactivated:i,beforeDestroy:i}}var d={data:function(){return{timer:null}},methods:{timeout:function(t,e){clearTimeout(this.timer),setTimeout((function(){"function"===typeof t&&t()}),e)}},beforeDestroy:function(){clearTimeout(this.timer)}},f=(i("ac1f"),i("00b4"),/scroll|auto/i);function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,i=t;while(i&&"HTML"!==i.tagName&&"BODY"!==i.tagName&&1===i.nodeType&&i!==e){var n=window.getComputedStyle(i),s=n.overflowY;if(f.test(s))return i;i=i.parentNode}return e}function v(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}var g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuejs-loading vuejs-loading-circular"},[i("span",{staticClass:"vuejs-loading-spinner vuejs-loading-spinner-circular"},[i("svg",{staticClass:"vuejs-loading-circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])]),i("span",{staticClass:"vuejs-loading-text"},[t._t("default")],2)])},m=[],b={name:"loading"},S=b,T=i("2877"),y=Object(T["a"])(S,g,m,!1,null,null,null),x=y.exports,_=(i("6089"),x),C=["pulling","loosing","refresh","success"],w={name:"loadmore",mixins:[c,h((function(t){this.scroller||(this.scroller=p(this.$el)),t(this.scroller,"scroll",this.checkSroll)})),d],components:{Loading:_},props:{onRefresh:Function,pullingText:{type:String,default:"下拉刷新"},loosingText:{type:String,default:"释放刷新"},refreshText:{type:String,default:"正在刷新"},successText:{type:String,default:"刷新完成"},showSuccessText:{type:Boolean,default:!0},pullDistance:{type:[Number,String],default:50},headHeight:{type:[Number,String],default:50},animationDuration:{type:[Number,String],default:200},onLoadmore:Function,immediateCheck:{type:Boolean,default:!1},loadOffset:{type:[Number,String],default:50},finished:Boolean,error:Boolean,loadingText:{type:String,default:"正在加载"},finishedText:{type:String,default:"没有更多了"},errorText:{type:String,default:"请求失败，点击重新加载"}},data:function(){return{status:"normal",distance:0,duration:0,scroller:null,loadLoading:!1}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scroller=p(this.$el),this.immediateCheck&&this.checkSroll()},computed:{touchable:function(){return"refresh"!==this.status&&"success"!==this.status&&this.onRefresh},headStyle:function(){return 50!==this.headHeight?{height:"".concat(this.headHeight,"px")}:{}},genStatus:function(){var t=this.status;return-1!==C.indexOf(t)?this["".concat(t,"Text")]:""}},watch:{loadLoading:"checkSroll",finished:"checkSroll"},methods:{checkPullStart:function(t){this.ceiling=0===v(this.scroller),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(l(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.deltaY&&this.touchable&&(this.duration=this.animationDuration,"loosing"===this.status?(this.showRefreshTip(),this.$nextTick((function(){t.onRefresh(t.refreshDone)}))):this.setStatus(0))},ease:function(t){var e=+(this.pullDistance||this.headHeight);return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t){var e,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=i?"refresh":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,e!==this.status&&(this.status=e)},refreshDone:function(){var t=this;this.showSuccessText?this.timeout(this.showSuccessTip,500):this.timeout((function(){return t.setStatus(0)}),500)},showRefreshTip:function(){this.setStatus(+this.headHeight,!0)},showSuccessTip:function(){var t=this;this.status="success",this.timeout((function(){return t.setStatus(0)}),1e3)},checkSroll:function(){var t=this;this.$nextTick((function(){if(!t.loadLoading&&t.onLoadmore&&!t.finished&&!t.error){var e,i=t.scroller,n=t.loadOffset;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var s=e.bottom-e.top;if(!s)return!1;var o=t.$refs.placeholder.getBoundingClientRect(),r=o.bottom-e.bottom<=n;r&&(t.loadLoading=!0,t.timeout((function(){return t.onLoadmore(t.loadmoreDone)}),500))}}))},clickErrorText:function(){var t=this;this.$emit("update:error",!1),this.loadLoading=!0,this.timeout((function(){return t.onLoadmore(t.loadmoreDone)}),500)},loadmoreDone:function(){this.loadLoading=!1}}},j=w,k=Object(T["a"])(j,s,o,!1,null,null,null),L=k.exports,O=(i("93a9"),{install:function(t){t.component("vue-loadmore",L)}}),D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"loadmore-head"},[i("div",{staticClass:"text"},[t._v(t._s("Chinese"===t.language?"下拉刷新上拉加载":"pull up and pull down"))]),i("div",{staticClass:"lan",on:{click:t.changeLanguage}},[t._v(t._s("Chinese"===t.language?"English":"Chinese"))])]),i("div",{staticClass:"wrap"},[i("vue-loadmore",{ref:"loadmoreRef",attrs:{"on-refresh":t.onRefresh,"on-loadmore":t.onLoad,finished:t.finished,error:t.error},on:{"update:error":function(e){t.error=e}}},[i("ul",{staticClass:"list-ul"},t._l(t.list,(function(e,n){return i("li",{key:e,staticClass:"list-li"},[t._v(t._s("Chinese"===t.language?"测试数据":"This is data")+" "+t._s(n+1))])})),0)])],1)])},E=[],M={name:"app",data:function(){return{list:[],page:1,finished:!1,error:!1,language:"English"}},mounted:function(){this.fetch()},methods:{initData:function(){this.list=[],this.page=1,this.finished=!1,this.error=!1},onRefresh:function(t){var e=this;this.initData(),this.fetch(),t(),setTimeout((function(){e.$refs.loadmoreRef.checkSroll()}),1500)},onLoad:function(t){this.page<=10?this.fetch():this.finished=!0,3===this.page&&(this.error=!0),t()},fetch:function(){for(var t=0;t<15;t++)this.list.push(this.list.length+1);this.page++},changeLanguage:function(){this.language="Chinese"===this.language?"English":"Chinese"}},destroyed:function(){clearTimeout(this.timer)}},Y=M,R=(i("5c0b"),Object(T["a"])(Y,D,E,!1,null,null,null)),$=R.exports;n["a"].config.productionTip=!1,n["a"].use(O),new n["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},6089:function(t,e,i){},"93a9":function(t,e,i){},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.c46e731b.js.map