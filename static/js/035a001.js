(window.webpackJsonp=window.webpackJsonp||[]).push([[7,327,328,329,330,367,368,369],{1141:function(e,t,n){"use strict";n.r(t);var o=n(11),r=(n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={name:"PagesGamesKenoGameFormBet",components:{PagesGamesCommonForm:function(){return Promise.resolve().then(n.bind(null,908))},PagesGamesCommonFormTools:function(){return Promise.resolve().then(n.bind(null,910))},PagesGamesCommonFormPresets:function(){return Promise.resolve().then(n.bind(null,911))}},data:function(){return{defaultBetAmount:10,betAmount:0,betAmountVariants:[2,5,25,100,250],autoBet:!1}},computed:m(m(m({},Object(r.e)({readyToPlay:function(e){return e.kenoSocket.readyToPlay},form:function(e){return e.kenoSocket.form},animating:function(e){return e.kenoSocket.activeBet.animating},minBetAmount:function(e){return e.keno.minBetAmount},maxBetAmount:function(e){return e.keno.maxBetAmount},windowSize:function(e){return e.page.windowSize}})),Object(r.c)({userAuthorized:"user/authorized",userBanned:"user/banned",userMainBalance:"userBalances/mainBalance"})),{},{balance:function(){return this.userAuthorized?this.userMainBalance:this.maxBetAmount},formDisabled:function(){return!!this.userAuthorized&&(!this.readyToPlay||(!this.form||(!(!this.form.betProcessing&&!this.form.autoBetStarted)||!!this.animating)))}}),mounted:function(){this.form&&(this.betAmount=this.form.betAmount,this.autoBet=this.form.autoBet)},methods:m(m({},Object(r.d)({updateForm:"kenoSocket/updateForm"})),{},{validateBetAmount:function(){var e=this;!this.activeBet&&this.userAuthorized&&this.betAmount>this.balance&&this.$nextTick((function(){e.betAmount=e.$roundFloor(e.balance,2)}))}}),watch:{betAmount:function(e){this.validateBetAmount(),this.form&&this.form.betAmount!==e&&this.updateForm({betAmount:e})},autoBet:function(e){this.form&&this.form.autoBet!==e&&this.updateForm({autoBet:e})}}},d=n(10),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PagesGamesCommonForm",{attrs:{label:"pages.games.keno.game.form.bet.label",inputIcon:"ruble",defaultValue:e.defaultBetAmount,minInputValue:e.minBetAmount,maxInputValue:e.maxBetAmount,disabled:e.formDisabled},scopedSlots:e._u([{key:"labelExtra",fn:function(){return[n("vTumbler",{attrs:{disabled:e.formDisabled,label:e.windowSize<=768?e.$t("pages.games.keno.game.form.bet.autoBetShort"):e.$t("pages.games.keno.game.form.bet.autoBet")},model:{value:e.autoBet,callback:function(t){e.autoBet=t},expression:"autoBet"}})]},proxy:!0},{key:"inputTools",fn:function(){return[n("PagesGamesCommonFormTools",{attrs:{min:e.minBetAmount,max:e.maxBetAmount,disabled:e.formDisabled},model:{value:e.betAmount,callback:function(t){e.betAmount=t},expression:"betAmount"}})]},proxy:!0},{key:"presets",fn:function(t){var o=t.focused;return[n("PagesGamesCommonFormPresets",{attrs:{items:e.betAmountVariants,visible:o},model:{value:e.betAmount,callback:function(t){e.betAmount=t},expression:"betAmount"}})]}}]),model:{value:e.betAmount,callback:function(t){e.betAmount=t},expression:"betAmount"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesGamesCommonFormTools:n(910).default,PagesGamesCommonFormPresets:n(911).default,PagesGamesCommonForm:n(908).default})},1142:function(e,t,n){"use strict";n.r(t);n(2),n(4),n(3),n(5),n(1),n(6);var o=n(11),r=(n(0),n(19),n(18),n(103),n(17)),l=n(105);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"PagesGamesKenoGameFormRisk",components:{PagesGamesCommonForm:function(){return Promise.resolve().then(n.bind(null,908))}},data:function(){return{risk:null}},computed:c(c(c({},Object(r.e)({readyToPlay:function(e){return e.kenoSocket.readyToPlay},form:function(e){return e.kenoSocket.form},animating:function(e){return e.kenoSocket.activeBet.animating},windowSize:function(e){return e.page.windowSize}})),Object(r.c)({userAuthorized:"user/authorized",userBanned:"user/banned"})),{},{risksList:function(){return l.b.List},formDisabled:function(){return!!this.userAuthorized&&(!this.readyToPlay||(!this.form||(!(!this.form.betProcessing&&!this.form.autoBetStarted)||!!this.animating)))},maxMultiplier:function(){return this.form&&this.risk&&l.a[this.risk.value]&&this.form.cells.length?this.$formatAmount(l.a[this.risk.value][this.form.cells.length][l.a[this.risk.value][this.form.cells.length].length-1],{withSpaces:!1,minDecimals:2}):null}}),mounted:function(){var e=this;if(this.form){var t=this.risksList.findIndex((function(t){return t.value===e.form.risk}));-1!==t&&(this.risk=this.risksList[t])}},methods:c({},Object(r.d)({updateForm:"kenoSocket/updateForm"})),watch:{risk:function(e){e&&this.form&&this.form.risk!==e.value&&this.updateForm({risk:e.value})}}},f=n(10),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("PagesGamesCommonForm",{attrs:{label:"pages.games.keno.game.form.risk.label",labelHelp:e.windowSize<=400||null===e.maxMultiplier?null:e.$t("pages.games.keno.game.form.risk.limits",{multiplier:e.maxMultiplier}),disabled:e.formDisabled},scopedSlots:e._u([{key:"customInput",fn:function(){return[e.windowSize>768?n("vTabSelect",{attrs:{items:e.risksList,wide:!0,solid:!1,monocolor:!1,disabled:e.formDisabled},model:{value:e.risk,callback:function(t){e.risk=t},expression:"risk"}}):e._e(),e._v(" "),e.windowSize<=768?n("vSelect",{attrs:{items:e.risksList,disabled:e.formDisabled},model:{value:e.risk,callback:function(t){e.risk=t},expression:"risk"}}):e._e()]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesGamesCommonForm:n(908).default})},1143:function(e,t,n){"use strict";n.r(t);n(2),n(4),n(3),n(5),n(1),n(6);var o=n(14),r=n(11),l=(n(30),n(0),n(19),n(18),n(49),n(17));function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"PagesGamesKenoGameFormButton",components:{PagesGamesCommonFormButton:function(){return Promise.resolve().then(n.bind(null,913))}},data:function(){return{prevProcessingNonce:null,processingNonce:null,autoBetTimerId:null}},computed:c(c(c({},Object(l.e)({gameRoom:function(e){return e.kenoSocket.room},readyToPlay:function(e){return e.kenoSocket.readyToPlay},pageVisible:function(e){return e.page.visible},enabledAnimations:function(e){return e.common.animations},form:function(e){return e.kenoSocket.form},animating:function(e){return e.kenoSocket.activeBet.animating}})),Object(l.c)({userAuthorized:"user/authorized",userBanned:"user/banned",userMainBalance:"userBalances/mainBalance",requestProcessing:"webSocket/requestProcessing"})),{},{betAmount:function(){return this.form?this.form.betAmount:0},risk:function(){return this.form?this.form.risk:null},openedCells:function(){return this.form?this.form.cells:[]},autoBet:function(){return!!this.form&&this.form.autoBet},autoBetStarted:function(){return!!this.form&&this.form.autoBetStarted},buttonDisabled:function(){return!!this.userAuthorized&&(!this.readyToPlay||(!(this.autoBetStarted||!this.betProcessing&&!this.animating)||(this.openedCells.length<1||this.openedCells.length>10)))},betProcessing:function(){return!!this.processingNonce&&this.requestProcessing(this.processingNonce)},buttonColor:function(){return this.autoBetStarted?"red":"blue"},buttonText:function(){return this.autoBetStarted?this.$t("pages.games.keno.game.form.button.stop"):this.autoBet?this.$t("pages.games.keno.game.form.button.start"):this.$t("pages.games.keno.game.form.button.bet")},buttonHelp:function(){return this.autoBetStarted||this.autoBet?this.$t("pages.games.keno.game.form.button.autoBet"):null},buttonAmount:function(){return null},withAnimation:function(){return this.enabledAnimations&&this.pageVisible}}),mounted:function(){this.$root.$on("sockets.error.".concat(this.gameRoom,".bet"),this.onFailedBet)},beforeDestroy:function(){this.$root.$off("sockets.error.".concat(this.gameRoom,".bet"),this.onFailedBet),this.stopAutoBet()},methods:c(c(c({},Object(l.d)({updateForm:"kenoSocket/updateForm",resetGameCells:"kenoSocket/resetGameCells"})),Object(l.b)({addRequest:"webSocket/addRequest"})),{},{onSubmit:function(){this.buttonDisabled||(this.userAuthorized?this.userBanned?this.$modal.show("accountBannedModal"):this.autoBetStarted?this.stopAutoBet():this.autoBet?this.startAutoBet():this.createBet():this.$modal.show("loginModal"))},startAutoBet:function(){var e=this;this.autoBet&&!this.autoBetStarted&&(this.updateForm({autoBetStarted:!0}),this.autoBetTimerId=setInterval((function(){null!==e.autoBetTimerId&&e.createBet()}),100))},stopAutoBet:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(e||this.autoBetStarted)&&(this.updateForm({autoBetStarted:!1}),this.autoBetTimerId&&(clearInterval(this.autoBetTimerId),this.autoBetTimerId=null))},createBet:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.betProcessing&&!e.animating){t.next=2;break}return t.abrupt("return");case 2:if(!(e.betAmount>e.userMainBalance)){t.next=6;break}return e.autoBetStarted&&e.stopAutoBet(),e.$noty({title:e.$t("notifications.warn"),text:e.$t("notifications.balanceInsufficientForBet"),type:"warning"}),t.abrupt("return");case 6:return e.resetGameCells(),e.autoBetStarted||e.$root.$emit("sounds:keno:bet"),e.processingNonce=e.$makeHash(),e.addRequest(e.processingNonce),e.updateForm({betProcessing:!0}),t.next=13,e.$makePause(300);case 13:e.$root.socket.emit("".concat(e.gameRoom,".bet"),{nonce:e.processingNonce,risk:e.risk,cells:e.openedCells,betAmount:e.betAmount,autoBet:e.autoBet,withAnimation:e.withAnimation});case 14:case"end":return t.stop()}}),t)})))()},onFailedBet:function(data){data.nonce&&(data.nonce!==this.processingNonce&&data.nonce!==this.prevProcessingNonce||this.stopAutoBet())}}),watch:{betProcessing:function(e){e||(this.prevProcessingNonce=this.processingNonce,this.processingNonce=null,this.updateForm({betProcessing:!1}))},autoBetStarted:function(e){e||this.stopAutoBet(!0)},userAuthorized:function(e){e||this.stopAutoBet()},betAmount:function(){this.resetGameCells()},risk:function(){this.resetGameCells()},autoBet:function(){this.resetGameCells()}}},f=d,h=n(10),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("PagesGamesCommonFormButton",{attrs:{color:e.buttonColor,text:e.buttonText,help:e.buttonHelp,amount:e.buttonAmount,loading:e.autoBetStarted,processing:!e.autoBetStarted&&e.betProcessing,disabled:e.buttonDisabled},on:{click:e.onSubmit}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesGamesCommonFormButton:n(913).default})},1302:function(e,t,n){"use strict";n.r(t);n(0),n(19),n(18);var o={name:"PagesGamesKenoGameForm",components:{PagesGamesKenoGameFormBet:function(){return Promise.resolve().then(n.bind(null,1141))},PagesGamesKenoGameFormRisk:function(){return Promise.resolve().then(n.bind(null,1142))},PagesGamesKenoGameFormButton:function(){return Promise.resolve().then(n.bind(null,1143))}}},r=n(10),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keno-game-form"},[n("div",{staticClass:"game-form-group"},[n("PagesGamesKenoGameFormBet"),e._v(" "),n("PagesGamesKenoGameFormRisk")],1),e._v(" "),n("PagesGamesKenoGameFormButton")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesGamesKenoGameFormBet:n(1141).default,PagesGamesKenoGameFormRisk:n(1142).default,PagesGamesKenoGameFormButton:n(1143).default})},906:function(e,t,n){n(907)},907:function(e,t,n){"use strict";var o=n(23),r=n(20),l=n(37),m=n(26),c=n(58),d=n(34),f=n(175),h=n(44),v=n(99),_=n(176),k=n(359),y=n(33),B=n(74),P=y("replace"),x=RegExp.prototype,S=r.TypeError,A=m(_),w=m("".indexOf),O=m("".replace),V=m("".slice),I=Math.max,F=function(e,t,n){return n>e.length?-1:""===t?n:w(e,t,n)};o({target:"String",proto:!0},{replaceAll:function(e,t){var n,o,r,m,_,y,$,j,C,G=c(this),T=0,N=0,D="";if(null!=e){if((n=f(e))&&(o=h(c("flags"in x?e.flags:A(e))),!~w(o,"g")))throw S("`.replaceAll` does not allow non-global regexes");if(r=v(e,P))return l(r,e,G,t);if(B&&n)return O(h(G),e,t)}for(m=h(G),_=h(e),(y=d(t))||(t=h(t)),$=_.length,j=I(1,$),T=F(m,_,0);-1!==T;)C=y?h(t(_,T,m)):k(_,m,T,[],void 0,t),D+=V(m,N,T)+C,N=T+$,T=F(m,_,T+j);return N<m.length&&(D+=V(m,N)),D}})},908:function(e,t,n){"use strict";n.r(t);n(36),n(31),n(32),n(55),n(906);var o={name:"PagesGamesCommonForm",props:{label:{type:String,default:null},labelHelp:{type:String,default:null},inputIcon:{type:String,default:null},bigInputIcon:{type:Boolean,default:!1},value:{type:Number,default:null},defaultValue:{type:Number,default:null},minInputValue:{type:Number,default:null},maxInputValue:{type:Number,default:null},inputType:{type:String,default:"text",validate:function(e){return["text","number"].includes(e)}},inputStep:{type:Number,default:null},disabled:{type:Boolean,default:!1}},data:function(){return{formId:null,focused:!1,currentValue:this.value}},mounted:function(){this.formId=this.$uniqueId("bet")},methods:{onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1,this.validateValue(),this.emitValue()},validateValue:function(){var e=String(this.currentValue);(e=(e=e.replaceAll(",",".")).replaceAll(/[^0-9.]+/gi,""))&&e.length||null===this.defaultValue||(e=this.defaultValue),e=Number(e),isNaN(e)&&(e=this.defaultValue),null!==this.minInputValue&&e<this.minInputValue&&(e=this.minInputValue),null!==this.maxInputValue&&e>this.maxInputValue&&(e=this.maxInputValue),"text"===this.inputType?e=Math.round(100*e)/100:"number"===this.inputType&&(e=Math.round(e)),this.currentValue=e},emitValue:function(){this.$emit("input",this.currentValue)}},watch:{value:function(e){this.currentValue=e}}},r=n(10),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["game-form",{"game-form_focused":e.focused}]},[n("div",{staticClass:"game-form-header"},[e.label?n("label",{staticClass:"game-form__label",attrs:{for:e.$scopedSlots.customInput?null:e.formId}},[e._v("\n      "+e._s(e.$t(e.label))+"\n    ")]):e._e(),e._v(" "),e.$scopedSlots.customLabel?[n("div",{staticClass:"game-form__label-custom"},[e._t("customLabel")],2)]:e._e(),e._v(" "),e.$scopedSlots.labelHelp?[n("div",{staticClass:"game-form__label-help"},[e._t("labelHelp")],2)]:e.labelHelp?[n("div",{staticClass:"game-form__label-help"},[n("span",{domProps:{innerHTML:e._s(e.$t(e.labelHelp))}})])]:e._e(),e._v(" "),e.$scopedSlots.labelExtra?[n("div",{staticClass:"game-form__label-extra"},[e._t("labelExtra")],2)]:e._e()],2),e._v(" "),n("div",{staticClass:"game-form-body"},[e.inputIcon?n("div",{class:["game-form__input-icon",{"game-form__input-icon_big":e.bigInputIcon},{"game-form__input-icon_muted":e.disabled}]},[n("vIcon",{attrs:{name:e.inputIcon}})],1):e._e(),e._v(" "),n("div",{staticClass:"game-form__input"},[e.$scopedSlots.customInput?[e._t("customInput")]:["checkbox"===e.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{id:e.formId,name:e.formId,step:e.inputStep,min:"number"===e.inputType?e.minInputValue:null,max:"number"===e.inputType?e.maxInputValue:null,disabled:e.disabled,type:"checkbox"},domProps:{checked:Array.isArray(e.currentValue)?e._i(e.currentValue,null)>-1:e.currentValue},on:{focus:e.onFocus,blur:e.onBlur,change:function(t){var n=e.currentValue,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.currentValue=n.concat([null])):l>-1&&(e.currentValue=n.slice(0,l).concat(n.slice(l+1)))}else e.currentValue=r}}}):"radio"===e.inputType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{id:e.formId,name:e.formId,step:e.inputStep,min:"number"===e.inputType?e.minInputValue:null,max:"number"===e.inputType?e.maxInputValue:null,disabled:e.disabled,type:"radio"},domProps:{checked:e._q(e.currentValue,null)},on:{focus:e.onFocus,blur:e.onBlur,change:function(t){e.currentValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{id:e.formId,name:e.formId,step:e.inputStep,min:"number"===e.inputType?e.minInputValue:null,max:"number"===e.inputType?e.maxInputValue:null,disabled:e.disabled,type:e.inputType},domProps:{value:e.currentValue},on:{focus:e.onFocus,blur:e.onBlur,input:function(t){t.target.composing||(e.currentValue=t.target.value)}}})]],2),e._v(" "),e.$scopedSlots.inputTools?[e._t("inputTools")]:e._e()],2),e._v(" "),e.$scopedSlots.presets?[e._t("presets",null,{focused:e.focused})]:e._e()],2)}),[],!1,null,null,null);t.default=component.exports},910:function(e,t,n){"use strict";n.r(t);n(0),n(19),n(18),n(36);var o={name:"PagesGamesCommonFormTools",components:{IconDivider:function(){return Promise.resolve().then(n.t.bind(null,658,7))},IconMultiplier:function(){return Promise.resolve().then(n.t.bind(null,866,7))}},props:{value:{type:Number},decimals:{type:Number,default:2},min:{type:Number},max:{type:Number},disabled:{type:Boolean,default:!1},withDivider:{type:Boolean,default:!0},withMultiplier:{type:Boolean,default:!0},withMin:{type:Boolean,default:!1},withMax:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value}},methods:{emitValue:function(){this.$emit("input",this.currentValue)},change:function(e){if(!this.disabled){var t=this.currentValue;switch(e){case"divide":t=this.$round(t/2,this.decimals);break;case"multiply":t=this.$round(2*t,this.decimals);break;case"min":t=this.min;break;case"max":t=this.max;break;default:return}t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.currentValue=t,this.emitValue(),this.$root.$emit("sounds:click")}}},watch:{value:function(e){this.currentValue=e}}},r=n(10),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-form-tools"},[e.withDivider?n("button",{class:["game-form-tools__item","game-form-tools__item_divider",{"game-form-tools__item_disabled":e.disabled}],attrs:{"aria-label":"Divide"},on:{click:function(t){return e.change("divide")}}},[n("IconDivider")],1):e._e(),e._v(" "),e.withMultiplier?n("button",{class:["game-form-tools__item","game-form-tools__item_multiplier",{"game-form-tools__item_disabled":e.disabled}],attrs:{"aria-label":"Multiply"},on:{click:function(t){return e.change("multiply")}}},[n("IconMultiplier")],1):e._e(),e._v(" "),e.withMin?n("button",{class:["game-form-tools__item","game-form-tools__item_min",{"game-form-tools__item_disabled":e.disabled}],attrs:{"aria-label":"MIN"},on:{click:function(t){return e.change("min")}}},[n("span",[e._v("MIN")])]):e._e(),e._v(" "),e.withMax?n("button",{class:["game-form-tools__item","game-form-tools__item_max",{"game-form-tools__item_disabled":e.disabled}],attrs:{"aria-label":"MAX"},on:{click:function(t){return e.change("max")}}},[n("span",[e._v("MAX")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},911:function(e,t,n){"use strict";n.r(t);n(0),n(19),n(18),n(36);var o={name:"PagesGamesCommonFormPresets",components:{IconEdit:function(){return Promise.resolve().then(n.t.bind(null,771,7))}},data:function(){return{currentValue:this.value}},props:{value:{type:Number},decimals:{type:Number,default:null},visible:{type:Boolean,default:!1},items:{type:Array},editable:{type:Boolean,default:!1},right:{type:Boolean,default:!1}},methods:{emitValue:function(){this.$emit("input",this.currentValue)},onSelect:function(e){this.currentValue=e,this.emitValue(),this.$root.$emit("sounds:click")},onEdit:function(){this.editable&&(this.$root.$emit("sounds:click"),this.$emit("edit"))}},watch:{value:function(e){this.currentValue=e}}},r=n(10),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["game-form-presets",{"game-form-presets_visible":e.visible},{"game-form-presets_right":e.right}]},[e._l(e.items,(function(t,o){return[n("button",{key:o,staticClass:"game-form-presets__item",attrs:{"aria-label":t},on:{click:function(n){return e.onSelect(t)}}},[null===e.decimals?[e._v(e._s(t))]:[e._v(e._s(Number(t).toFixed(e.decimals)))]],2)]})),e._v(" "),e.editable?n("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("ui.gameForm.presets.edit"),expression:"$t('ui.gameForm.presets.edit')"}],staticClass:"game-form-presets__item game-form-presets__item_edit",attrs:{"aria-label":"Edit"},on:{click:e.onEdit}},[n("IconEdit")],1):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},913:function(e,t,n){"use strict";n.r(t);n(0),n(19),n(18),n(31),n(36);var o={name:"PagesGamesCommonFormButton",components:{IconSpinner:function(){return Promise.resolve().then(n.t.bind(null,835,7))}},props:{color:{type:String,default:null,validate:function(e){return[null,"blue","red","green"].includes(e)}},text:{type:String,default:null},help:{type:String,default:null},amount:{type:Number,default:null},loading:{type:Boolean,default:!1},processing:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxDecimals:{type:Number,default:2}}},r=n(10),component=Object(r.a)(o,(function(){var e,t=this,n=t.$createElement,o=t._self._c||n;return o("button",{class:["game-form-button",(e={},e["game-form-button_"+t.color]=!!t.color,e),{"game-form-button_loading":t.loading},{"game-form-button_processing":t.processing},{"game-form-button_disabled":t.disabled||t.processing},{"game-form-button_with-help":t.help||t.amount}],attrs:{"aria-label":t.text},on:{click:function(e){return t.$emit("click")}}},[o("span",{staticClass:"game-form-button-content"},[o("span",{staticClass:"game-form-button__text"},[t._v("\n      "+t._s(t.text)+"\n\n      "),o("span",{staticClass:"game-form-button__loading"},[o("IconSpinner")],1)]),t._v(" "),o("span",{staticClass:"game-form-button__help"},[null!==t.help?o("span",[t._v(t._s(t.help))]):t._e(),t._v(" "),null!==t.amount?o("vAmount",{attrs:{amount:t.amount,minDecimals:2,"max-decimals":t.maxDecimals}}):t._e()],1)]),t._v(" "),o("span",{staticClass:"game-form-button__processing"},[o("IconSpinner")],1)])}),[],!1,null,null,null);t.default=component.exports}}]);