(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1408:function(e,t,l){"use strict";l.r(t);l(2),l(4),l(3),l(5),l(1),l(6);var r=l(11),n=(l(0),l(19),l(18),l(7),l(36),l(17)),o=l(282),c=l.n(o);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"CrashFairnessModal",components:{IconQuestion:function(){return Promise.resolve().then(l.t.bind(null,782,7))},IconRefresh:function(){return Promise.resolve().then(l.t.bind(null,784,7))},IconExternalLink:function(){return Promise.resolve().then(l.t.bind(null,652,7))},IconCaret:function(){return Promise.resolve().then(l.t.bind(null,619,7))}},data:function(){return{gameRtp:0,randomNumber:null,randomSalt:null,resultHash:null,multiplier:null,exampleExpanded:!1}},computed:m(m({},Object(n.e)({currentRtp:function(e){return e.crash.rtpValue},maxMultiplier:function(e){return e.crash.maxMultiplier}})),{},{gameRtpValue:function(){return this.$formatPercent(this.gameRtp)},codeOfRandom:function(){return"Math.random();"},codeOfHash:function(){return"CryptoJS.HmacSHA256(\n  '".concat(this.randomNumber,"',\n  '").concat(this.randomSalt,"'\n).toString();")},codeOfAlgorithm:function(){return"// RTP (Return to player) (".concat(this.gameRtpValue,")\nconst CRASH_RTP = ").concat(this.gameRtp,";\n\n// Max multiplier\nconst MAX_MULTIPLIER = ").concat(this.maxMultiplier,";\n\nlet random = ").concat(this.randomNumber,";\nlet rounder = Math.pow(10, 15);\nlet rawMultiplier = rounder / (Math.floor(random * rounder) + 1);\nlet multiplierByRtp = rawMultiplier * CRASH_RTP;\nlet multiplier = Math.round(multiplierByRtp * 100) / 100;\n\nif (multiplier > MAX_MULTIPLIER) {\n  multiplier = MAX_MULTIPLIER;\n}\n\nif (multiplier <= 1.00) {\n  multiplier = 0.00;\n}\n")}}),created:function(){this.updateRandomNumber(),this.updateRandomSalt()},methods:{onBeforeOpen:function(e){var t=e.params;t&&t.randomNumber&&t.randomSalt?(this.randomNumber=t.randomNumber,this.randomSalt=t.randomSalt):(this.updateRandomNumber(),this.updateRandomSalt()),t&&t.rtp?this.gameRtp=t.rtp:this.gameRtp=this.currentRtp,this.updateResultHash(),this.updateMultiplier()},onBeforeClose:function(){this.gameRtp=0,this.randomNumber=null,this.randomSalt=null,this.resultHash=null,this.multiplier=null,this.exampleExpanded=!1},updateRandomNumber:function(){this.randomNumber=String(Math.random())},updateRandomSalt:function(){this.randomSalt=this.$randomString(16)},updateResultHash:function(){null===this.randomNumber||null===this.randomSalt?this.resultHash=null:this.resultHash=c()(this.randomNumber,this.randomSalt)},updateMultiplier:function(){var e=Number(this.randomNumber),t=Math.pow(10,15),l=t/(Math.floor(e*t)+1)*this.gameRtp,r=Math.round(100*l)/100;r>this.maxMultiplier&&(r=this.maxMultiplier),r<=1&&(r=0),this.multiplier=r},onToggleExample:function(){this.exampleExpanded=!this.exampleExpanded}},watch:{randomNumber:function(){this.updateResultHash(),this.updateMultiplier()},randomSalt:function(){this.updateResultHash()}}},v=l(10),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vModal",{attrs:{classes:["crash-fairness-modal"],name:"crashFairnessModal",vertical:!0,width:500},on:{"before-open":e.onBeforeOpen,"before-close":e.onBeforeClose},scopedSlots:e._u([{key:"sidebar",fn:function(){return[r("div",{staticClass:"crash-fairness-modal-sidebar"},[r("img",{attrs:{src:l(937),alt:"Fairness"}})])]},proxy:!0},{key:"title",fn:function(){return[e._v(e._s(e.$t("modals.crashFairness.title")))]},proxy:!0},null!==e.randomNumber&&null!==e.randomSalt&&null!==e.resultHash&&null!==e.multiplier?{key:"footer",fn:function(){return[r("div",{staticClass:"crash-fairness-example",class:{"crash-fairness-example_expanded":e.exampleExpanded}},[r("div",{staticClass:"crash-fairness-example__title",on:{click:e.onToggleExample}},[r("h3",[e._v(e._s(e.$t("modals.crashFairness.example.title")))]),e._v(" "),r("IconCaret")],1),e._v(" "),e.exampleExpanded?r("div",{staticClass:"crash-fairness-example__body"},[r("div",{staticClass:"key-value-block"},[r("div",{staticClass:"key-value-block-body key-value-block-body_vertical key-value-block-body_with-tool"},[r("div",{staticClass:"key-value-block__title"},[e._v("\n              "+e._s(e.$t("modals.crashFairness.example.randomNumber.title"))+"\n              "),r("IconQuestion",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("modals.crashFairness.example.randomNumber.tooltip"),expression:"$t('modals.crashFairness.example.randomNumber.tooltip')"}]})],1),e._v(" "),r("div",{staticClass:"key-value-block__value"},[e._v("\n              "+e._s(e.randomNumber)+"\n            ")]),e._v(" "),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("modals.crashFairness.buttons.refresh"),expression:"$t('modals.crashFairness.buttons.refresh')"}],staticClass:"key-value-block__tool",on:{click:e.updateRandomNumber}},[r("IconRefresh")],1)]),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("ClientOnly",[r("highlightjs",{attrs:{language:"javascript",code:e.codeOfRandom}})],1)],1),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.example.randomNumber.help"))}})])]),e._v(" "),r("div",{staticClass:"key-value-block"},[r("div",{staticClass:"key-value-block-body key-value-block-body_vertical key-value-block-body_overflow key-value-block-body_with-tool"},[r("div",{staticClass:"key-value-block__title"},[e._v("\n              "+e._s(e.$t("modals.crashFairness.example.randomSalt.title"))+"\n              "),r("IconQuestion",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("modals.crashFairness.example.randomSalt.tooltip"),expression:"$t('modals.crashFairness.example.randomSalt.tooltip')"}]})],1),e._v(" "),r("div",{staticClass:"key-value-block__value"},[e._v("\n              "+e._s(e.randomSalt)+"\n            ")]),e._v(" "),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("modals.crashFairness.buttons.refresh"),expression:"$t('modals.crashFairness.buttons.refresh')"}],staticClass:"key-value-block__tool",on:{click:e.updateRandomSalt}},[r("IconRefresh")],1)]),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.example.randomSalt.help"))}})])]),e._v(" "),r("div",{staticClass:"key-value-block"},[r("div",{staticClass:"key-value-block-body key-value-block-body_vertical key-value-block-body_overflow"},[r("div",{staticClass:"key-value-block__title"},[e._v("\n              "+e._s(e.$t("modals.crashFairness.example.resultHash.title"))+"\n              "),r("IconQuestion",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("modals.crashFairness.example.resultHash.tooltip"),expression:"$t('modals.crashFairness.example.resultHash.tooltip')"}]})],1),e._v(" "),r("div",{staticClass:"key-value-block__value"},[e._v("\n              "+e._s(e.resultHash)+"\n            ")])]),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("ClientOnly",[r("highlightjs",{attrs:{language:"javascript",code:e.codeOfHash}})],1)],1),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.example.resultHash.help"))}})])]),e._v(" "),r("div",{staticClass:"key-value-block"},[r("div",{staticClass:"key-value-block-body key-value-block-body_vertical"},[r("div",{staticClass:"key-value-block__title"},[e._v("\n              "+e._s(e.$t("modals.crashFairness.example.resultMultiplier.title"))+"\n            ")]),e._v(" "),r("div",{staticClass:"key-value-block__value"},[r("vMultiplier",{attrs:{amount:e.multiplier}})],1)]),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("ClientOnly",[r("highlightjs",{attrs:{language:"javascript",code:e.codeOfAlgorithm}})],1)],1),e._v(" "),r("div",{staticClass:"key-value-block-footer"},[r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.example.resultMultiplier.help"))}})])])]):e._e()])]},proxy:!0}:null],null,!0)},[e._v(" "),e._v(" "),r("div",{staticClass:"crash-fairness"},[r("div",{staticClass:"modal-text"},[r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.text"))}}),e._v(" "),r("vButton",{attrs:{small:!0,to:"/games/crash/history/future",target:"_blank"},scopedSlots:e._u([{key:"image",fn:function(){return[r("IconExternalLink")]},proxy:!0}])},[e._v("\n        "+e._s(e.$t("modals.crashFairness.buttons.showFutureGames"))+"\n\n        ")])],1),e._v(" "),r("div",{staticClass:"modal-text"},[r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.disclosures.0"))}}),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.disclosures.1"))}}),e._v(" "),r("p",{domProps:{innerHTML:e._s(e.$t("modals.crashFairness.disclosures.2"))}})])])])}),[],!1,null,null,null);t.default=component.exports},937:function(e,t,l){e.exports=l.p+"img/f9b1443.png"}}]);