(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1391:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"CommonTabBar",components:{IconBonuses:function(){return Promise.resolve().then(n.t.bind(null,794,7))},IconWallet:function(){return Promise.resolve().then(n.t.bind(null,864,7))},IconPlay:function(){return Promise.resolve().then(n.t.bind(null,802,7))},IconAccount:function(){return Promise.resolve().then(n.t.bind(null,766,7))},IconMenu:function(){return Promise.resolve().then(n.t.bind(null,700,7))},IconAffiliate:function(){return Promise.resolve().then(n.t.bind(null,793,7))},IconCrash:function(){return Promise.resolve().then(n.t.bind(null,797,7))},IconPlinko:function(){return Promise.resolve().then(n.t.bind(null,803,7))},IconMiner:function(){return Promise.resolve().then(n.t.bind(null,801,7))},IconCookies:function(){return Promise.resolve().then(n.t.bind(null,796,7))},IconTower:function(){return Promise.resolve().then(n.t.bind(null,805,7))},IconKeno:function(){return Promise.resolve().then(n.t.bind(null,800,7))},IconCoinflip:function(){return Promise.resolve().then(n.t.bind(null,795,7))}},data:function(){return{gamesOpened:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)({userAuthorized:"user/authorized"})),mounted:function(){var t=this;this.$nextTick((function(){t.scrollToActiveGameTab()}))},methods:{onLogin:function(){this.$modal.show("loginModal")},onOpenWallet:function(){this.$modal.show("walletModal")},onToggleSidebar:function(){this.$root.$emit("toggleSidebar")},onToggleGames:function(){this.gamesOpened=!this.gamesOpened},scrollToActiveGameTab:function(){var t=document&&document.getElementById("tabBarGames");if(t){var e=t.querySelector(".tab-bar-games-item_active")||null;if(e){var n=t.offsetWidth,o=e.offsetWidth,r=e.offsetLeft,c=Math.floor(r-n/2+o/2-0);c<0&&(c=0),t.scroll({left:c,behavior:"smooth"})}else t.scroll({left:0,behavior:"smooth"})}}},watch:{$route:function(){this.gamesOpened=!1,this.scrollToActiveGameTab()},gamesOpened:function(){this.scrollToActiveGameTab()}}},m=l,v=n(10),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-wrapper"},[n("div",{staticClass:"tab-bar"},[n("NuxtLink",{staticClass:"tab-bar-item",attrs:{to:"/bonuses","active-class":"tab-bar-item_active"}},[n("IconBonuses"),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.bonuses")))])],1),t._v(" "),t.userAuthorized?t._e():n("NuxtLink",{staticClass:"tab-bar-item",attrs:{to:"/affiliate","active-class":"tab-bar-item_active"}},[n("IconAffiliate"),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.affiliate")))])],1),t._v(" "),t.userAuthorized?n("div",{staticClass:"tab-bar-item",on:{click:t.onOpenWallet}},[n("IconWallet"),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.wallet")))])],1):t._e(),t._v(" "),n("div",{staticClass:"tab-bar-item",class:{"tab-bar-item_active":t.gamesOpened},on:{click:t.onToggleGames}},[n("div",{staticClass:"tab-bar-item__center-icon"},[n("IconPlay")],1),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.play")))])]),t._v(" "),t.userAuthorized?t._e():n("div",{staticClass:"tab-bar-item",on:{click:t.onLogin}},[n("IconAccount"),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.signIn")))])],1),t._v(" "),t.userAuthorized?n("NuxtLink",{staticClass:"tab-bar-item",attrs:{to:"/account","active-class":"tab-bar-item_active"}},[n("IconAccount"),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.account")))])],1):t._e(),t._v(" "),n("div",{staticClass:"tab-bar-item",on:{click:t.onToggleSidebar}},[n("IconMenu"),t._v(" "),n("p",[t._v(t._s(t.$t("common.tabbar.menu.menu")))])],1)],1),t._v(" "),n("div",{staticClass:"tab-bar-games-wrapper",class:{"tab-bar-games-wrapper_opened":t.gamesOpened}},[n("div",{staticClass:"tab-bar-games",attrs:{id:"tabBarGames"}},[n("div",{staticClass:"tab-bar-games-empty-item"}),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/","active-class":"tab-bar-games-item_active",exact:!0}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.crash"))+"\n        "),n("IconCrash")],1),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/games/plinko","active-class":"tab-bar-games-item_active"}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.plinko"))+"\n        "),n("IconPlinko")],1),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/games/miner","active-class":"tab-bar-games-item_active"}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.miner"))+"\n        "),n("IconMiner")],1),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/games/cookies","active-class":"tab-bar-games-item_active"}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.cookies"))+"\n        "),n("IconCookies")],1),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/games/nuts","active-class":"tab-bar-games-item_active"}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.tower"))+"\n        "),n("IconTower")],1),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/games/keno","active-class":"tab-bar-games-item_active"}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.keno"))+"\n        "),n("IconKeno")],1),t._v(" "),n("NuxtLink",{staticClass:"tab-bar-games-item",attrs:{to:"/games/coinflip","active-class":"tab-bar-games-item_active"}},[t._v("\n        "+t._s(t.$t("common.tabbar.games.coinflip"))+"\n        "),n("IconCoinflip")],1),t._v(" "),n("div",{staticClass:"tab-bar-games-empty-item"})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);