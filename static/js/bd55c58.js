(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1433:function(e,t,r){"use strict";r.r(t);r(2),r(4),r(3),r(0),r(5),r(1),r(6);var n=r(11),o=r(17);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"WagerModalAbout",computed:c(c({},Object(o.e)({isClient:function(e){return e.user.isClient}})),Object(o.c)({authorized:"user/authorized",wagerBalance:"userBalances/wagerBalance"}))},w=r(10),component=Object(w.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-text"},[r("h3",[e._v("\n    "+e._s(e.$t("modals.wager.about.wager.title"))+"\n    "),r("span",{staticClass:"modal-badge"},[e._v(e._s(e.$t("modals.wager.about.wager.badge")))])]),e._v(" "),e._l(e.$t("modals.wager.about.wager.text"),(function(t){return[r("p",{domProps:{innerHTML:e._s(t)}})]})),e._v(" "),r("h3",[e._v("\n    "+e._s(e.$t("modals.wager.about.wagering.title"))+"\n    "),e.authorized?r("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("modals.wager.about.wagering.badgeTooltip"),expression:"$t('modals.wager.about.wagering.badgeTooltip')"}],staticClass:"modal-badge modal-badge_hoverable",class:{"modal-badge_warning":!!e.isClient&&e.wagerBalance>0}},[r("vAmount",{attrs:{amount:e.isClient?e.wagerBalance:0}})],1):e._e()]),e._v(" "),e._l(e.$t("modals.wager.about.wagering.text"),(function(t){return[r("p",{domProps:{innerHTML:e._s(t)}})]}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);