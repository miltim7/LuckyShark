(window.webpackJsonp=window.webpackJsonp||[]).push([[437,307],{1061:function(e,n,t){},1092:function(e,n,t){"use strict";t.r(n);var r={name:"PagesFairnessMenu",data:function(){return{menu:[{name:"pages.fairness.menu.overview",icon:"question",link:"/fairness/overview"},{name:"pages.fairness.menu.implementation",icon:"fairness/implementation",link:"/fairness/implementation"},{name:"pages.fairness.menu.conversions",icon:"fairness/conversion",link:"/fairness/conversions"},{name:"pages.fairness.menu.gameEvents",icon:"fairness/gameEvents",link:"/fairness/game-events"},{name:"pages.fairness.menu.calculation",icon:"fairness/calculation",link:"/fairness/calculation"}]}}},o=t(10),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"fairness-menu"},[t("vTabMenu",{attrs:{items:e.menu}})],1)}),[],!1,null,null,null);n.default=component.exports},1204:function(e,n,t){"use strict";t(1061)},1342:function(e,n,t){"use strict";t.r(n);var r=t(11),o=(t(0),t(19),t(18),t(2),t(4),t(3),t(5),t(1),t(6),t(17));function c(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var l={components:{PagesFairnessMenu:function(){return Promise.resolve().then(t.bind(null,1092))}},created:function(){this.setPage({title:this.$t("seo.fairness.title"),icon:"sidebar/menu/fairness"})},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({},Object(o.d)({setPage:"page/setPage"}))},f=l,m=(t(1204),t(10)),component=Object(m.a)(f,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"fairness"},[t("div",{staticClass:"container"},[t("PagesFairnessMenu"),e._v(" "),t("NuxtChild")],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PagesFairnessMenu:t(1092).default})}}]);