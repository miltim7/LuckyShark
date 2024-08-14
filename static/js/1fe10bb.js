(window.webpackJsonp=window.webpackJsonp||[]).push([[431,267],{1059:function(e,t,n){},1075:function(e,t,n){"use strict";n.r(t);var r=n(11),o=(n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={name:"PagesAffiliateMenu",components:{IconWarning:function(){return Promise.resolve().then(n.t.bind(null,779,7))}},data:function(){return{menu:[{name:"pages.affiliate.menu.about",icon:"question",link:"/affiliate",exact:!0},{name:"pages.affiliate.menu.campaigns",icon:"affiliates/campaigns",link:"/affiliate/campaigns"},{name:"pages.affiliate.menu.referrals",icon:"affiliates/referrals",link:"/affiliate/referrals"},{name:"pages.affiliate.menu.funds",icon:"affiliates/funds",link:"/affiliate/funds"}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({affiliateBlocked:"affiliate/blocked"})),methods:{onShowBlockedModal:function(){this.affiliateBlocked&&this.$modal.show("affiliateBlockedModal")}}},l=c,d=n(10),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"affiliate-menu"},[n("vTabMenu",{attrs:{items:e.menu}}),e._v(" "),e.affiliateBlocked?n("div",{staticClass:"affiliate-blocked",on:{click:e.onShowBlockedModal}},[n("div",{staticClass:"affiliate-blocked-content"},[n("span",[e._v(e._s(e.$t("pages.affiliate.menu.blocked")))]),e._v(" "),n("IconWarning")],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},1202:function(e,t,n){"use strict";n(1059)},1336:function(e,t,n){"use strict";n.r(t);var r=n(11),o=n(14),f=(n(30),n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={middleware:function(e){var t=e.store,n=e.route,r=e.redirect;if(!t.getters["user/authorized"]&&"/affiliate"!==n.path)return r("/affiliate")},components:{PagesAffiliateMenu:function(){return Promise.resolve().then(n.bind(null,1075))},CreateCampaignModal:function(){return n.e(32).then(n.bind(null,1426))},EditCampaignModal:function(){return n.e(33).then(n.bind(null,1427))},CampaignModal:function(){return n.e(31).then(n.bind(null,1425))},ReferralModal:function(){return n.e(34).then(n.bind(null,1428))},AffiliateBlockedModal:function(){return n.e(30).then(n.bind(null,1424))}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.update();case 2:case"end":return t.stop()}}),t)})))()},computed:l({},Object(f.c)({authorized:"user/authorized"})),created:function(){this.setPage({title:this.$t("seo.affiliate.title"),icon:"sidebar/menu/affiliate"})},methods:l(l(l({},Object(f.d)({setPage:"page/setPage"})),Object(f.b)({updateAffiliate:"affiliate/update",resetUpdatingDate:"affiliate/resetUpdatingDate"})),{},{update:function(){var e=arguments,t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]&&e[0],n.abrupt("return",Promise.resolve().then((function(){r&&t.resetUpdatingDate()})).then((function(){return t.updateAffiliate()})).catch((function(e){t.$noty({title:t.$t("notifications.fail"),text:t.$t("notifications.affiliateLoadingFailed"),type:"error",duration:1e4})})));case 2:case"end":return n.stop()}}),n)})))()}}),watch:{authorized:function(e){e||this.$router.push("/affiliate"),this.update(!0)}}},m=d,h=(n(1202),n(10)),component=Object(h.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"affiliate"},[n("div",{staticClass:"container"},[e.authorized?n("PagesAffiliateMenu"):e._e(),e._v(" "),n("div",{staticClass:"affiliate-content"},[n("NuxtChild")],1)],1)]),e._v(" "),n("CreateCampaignModal"),e._v(" "),n("EditCampaignModal"),e._v(" "),n("CampaignModal"),e._v(" "),n("ReferralModal"),e._v(" "),n("AffiliateBlockedModal")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesAffiliateMenu:n(1075).default})}}]);