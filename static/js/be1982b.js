(window.webpackJsonp=window.webpackJsonp||[]).push([[120,220,221,222,325,326,397,406,407],{1038:function(e,t){e.exports="/static/audios/0f792e7.mp3"},1039:function(e,t){e.exports="/static/audios/7361eed.mp3"},1040:function(e,t){e.exports="/static/audios/37e5605.mp3"},1041:function(e,t){e.exports="/static/audios/a0cf731.mp3"},1164:function(e,t,n){"use strict";n.r(t);var o=n(11),r=(n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"PagesGamesTowerBets",components:{PagesGamesCommonBets:function(){return Promise.resolve().then(n.bind(null,916))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.e)({readyToPlay:function(e){return e.towerSocket.readyToPlay},allBets:function(e){return e.towerSocket.allBets},userBets:function(e){return e.towerSocket.userBets},rareBets:function(e){return e.towerSocket.rareBets}}))},m=l,d=n(10),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("PagesGamesCommonBets",{attrs:{game:"tower",readyToPlay:e.readyToPlay,allBets:e.allBets,userBets:e.userBets,rareBets:e.rareBets}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesGamesCommonBets:n(916).default})},1165:function(e,t,n){"use strict";n.r(t);n(2),n(4),n(3),n(0),n(5),n(1),n(6);var o=n(11),r=n(17);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"PagesGamesTowerSounds",data:function(){return{sounds:{bet:null,open:null,win:null,lose:null}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.e)({enabledSound:function(e){return e.common.soundVolume}})),mounted:function(){this.initSounds(),this.initEventListeners()},beforeDestroy:function(){this.removeEventListeners(),this.destroySounds()},methods:{initSounds:function(){this.sounds.bet=new Howl({src:[n(1038)],volume:.7}),this.sounds.open=new Howl({src:[n(1039)],volume:1}),this.sounds.win=new Howl({src:[n(1040)],volume:.7}),this.sounds.lose=new Howl({src:[n(1041)],volume:.7})},stopAllSounds:function(){for(var e in this.sounds)this.sounds[e]&&this.sounds[e].playing()&&this.sounds[e].stop()},destroySounds:function(){for(var e in this.stopAllSounds(),this.sounds)this.sounds[e]&&(this.sounds[e]=null)},initEventListeners:function(){this.$root.$on("sounds:tower:bet",this.onBet),this.$root.$on("sounds:tower:open",this.onOpen),this.$root.$on("sounds:tower:win",this.onWin),this.$root.$on("sounds:tower:lose",this.onLose)},removeEventListeners:function(){this.$root.$off("sounds:tower:bet",this.onBet),this.$root.$off("sounds:tower:open",this.onOpen),this.$root.$off("sounds:tower:win",this.onWin),this.$root.$off("sounds:tower:lose",this.onLose)},onBet:function(){this.sounds.bet&&this.enabledSound&&this.sounds.bet.play()},onOpen:function(){this.sounds.open&&this.enabledSound&&this.sounds.open.play()},onWin:function(){this.sounds.win&&this.enabledSound&&this.sounds.win.play()},onLose:function(){this.sounds.lose&&this.enabledSound&&this.sounds.lose.play()}},watch:{enabledSound:function(e){e||this.stopAllSounds()}}},m=l,d=n(10),component=Object(d.a)(m,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=component.exports},1166:function(e,t,n){"use strict";n.r(t);n(2),n(4),n(3),n(5),n(6);var o=n(11),r=(n(49),n(0),n(1),n(17)),c=n(178);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"PagesGamesTowerSockets",data:function(){return{resetActiveBetTimerId:null,getGameInfoTimerId:null}},computed:m(m(m({},Object(r.e)({connected:function(e){return e.webSocket.connected},gameRoom:function(e){return e.towerSocket.room},userUuid:function(e){return e.user.uuid},userImage:function(e){return e.user.image},userNickname:function(e){return e.user.nickname},rareBetsMinMultiplier:function(e){return e.towerSocket.settings.rareBetsMinMultiplier},readyToPlay:function(e){return e.towerSocket.readyToPlay},form:function(e){return e.towerSocket.form}})),Object(r.c)({userAuthorized:"user/authorized",isRoomMembership:"webSocket/isRoomMembership"})),{},{isJoinedInGameRoom:function(){return this.isRoomMembership(this.gameRoom)}}),mounted:function(){this.initSocketEventsListeners(),this.onInitGame()},beforeDestroy:function(){this.removeSocketEventsListeners(),this.onResetGame(),this.resetActiveBetTimerId&&(clearTimeout(this.resetActiveBetTimerId),this.resetActiveBetTimerId=null),this.getGameInfoTimerId&&(clearTimeout(this.getGameInfoTimerId),this.getGameInfoTimerId=null)},methods:m(m(m({},Object(r.d)({setReadyToPlay:"towerSocket/setReadyToPlay",setSettings:"towerSocket/setSettings",resetSettings:"towerSocket/resetSettings",resetForm:"towerSocket/resetForm",stopAutoBet:"towerSocket/stopAutoBet",setActiveBet:"towerSocket/setActiveBet",resetActiveBet:"towerSocket/resetActiveBet",setAllBets:"towerSocket/setAllBets",resetAllBets:"towerSocket/resetAllBets",addAllBet:"towerSocket/addAllBet",setUserBets:"towerSocket/setUserBets",addUserBet:"towerSocket/addUserBet",resetUserBets:"towerSocket/resetUserBets",setRareBets:"towerSocket/setRareBets",resetRareBets:"towerSocket/resetRareBets",addRareBet:"towerSocket/addRareBet"})),Object(r.b)({removeRequest:"webSocket/removeRequest",resetRequests:"webSocket/resetRequests"})),{},{onInitGame:function(){this.connected&&(this.isJoinedInGameRoom?this.setReadyToPlay(!0):this.connectToGameRoom())},onResetGame:function(){this.leaveFromGameRoom(),this.resetSettings(),this.resetForm(),this.resetActiveBet(),this.resetAllBets(),this.resetUserBets(),this.resetRareBets()},connectToGameRoom:function(){this.$root.socket.emit("roomJoin",this.gameRoom)},leaveFromGameRoom:function(){this.$root.socket.emit("roomLeave",this.gameRoom)},initSocketEventsListeners:function(){var e=this;this.$root.socket.on("".concat(this.gameRoom,".bets"),(function(data){e.onBets(data)})),this.$root.socket.on("".concat(this.gameRoom,".info"),(function(data){e.onGameInfo(data)})),this.$root.socket.on("".concat(this.gameRoom,".start"),(function(data){e.onStart(data)})),this.$root.socket.on("".concat(this.gameRoom,".open"),(function(data){e.onOpen(data)})),this.$root.socket.on("".concat(this.gameRoom,".take"),(function(data){e.onTake(data)})),this.$root.socket.on("".concat(this.gameRoom,".bet"),(function(data){e.onBet(data)}))},removeSocketEventsListeners:function(){this.$root.socket.removeAllListeners("".concat(this.gameRoom,".bets")),this.$root.socket.removeAllListeners("".concat(this.gameRoom,".info")),this.$root.socket.removeAllListeners("".concat(this.gameRoom,".start")),this.$root.socket.removeAllListeners("".concat(this.gameRoom,".open")),this.$root.socket.removeAllListeners("".concat(this.gameRoom,".take")),this.$root.socket.removeAllListeners("".concat(this.gameRoom,".bet"))},getGameInfo:function(){var e=this;this.getGameInfoTimerId&&(clearTimeout(this.getGameInfoTimerId),this.getGameInfoTimerId=null),this.$root.socket.emit("".concat(this.gameRoom,".info")),this.getGameInfoTimerId=setTimeout((function(){e.getGameInfo()}),1e3)},onBets:function(e){this.userAuthorized&&this.userUuid===e.user.uuid||(this.addAllBet(e),e.bet.isRare&&this.addRareBet(e)),this.readyToPlay||this.onInitGame()},onGameInfo:function(data){var e=this;this.getGameInfoTimerId&&(clearTimeout(this.getGameInfoTimerId),this.getGameInfoTimerId=null),this.setSettings(data.settings),this.userAuthorized&&(this.setUserBets([]),data.userBets.length&&data.userBets.reverse().forEach((function(t){e.addUserBet({user:{uuid:e.userUuid,image:e.userImage,name:e.userNickname},bet:t})}))),data.activeBet?this.setActiveBet(data.activeBet):this.resetActiveBet(),this.setAllBets(data.allBets),this.setRareBets(data.rareBets),this.setReadyToPlay(!0)},onStart:function(data){this.removeRequest(data.nonce),this.setActiveBet(data.activeBet)},onOpen:function(data){this.removeRequest(data.nonce),this.setActiveBet(data.activeBet),data.activeBet.status===c.a.Win?this.$root.$emit("sounds:tower:win"):data.activeBet.status===c.a.Lose?this.$root.$emit("sounds:tower:lose"):this.$root.$emit("sounds:tower:open"),this.checkActiveBetAndAddToList(data.activeBet)},onTake:function(data){this.removeRequest(data.nonce),this.setActiveBet(data.activeBet),this.$root.$emit("sounds:tower:win"),this.checkActiveBetAndAddToList(data.activeBet)},onBet:function(data){var e=this;this.removeRequest(data.nonce),this.setActiveBet(data.activeBet),data.activeBet.status===c.a.Win?this.$root.$emit("sounds:tower:win"):this.$root.$emit("sounds:tower:lose"),this.resetActiveBetTimerId&&(clearTimeout(this.resetActiveBetTimerId),this.resetActiveBetTimerId=null),this.resetActiveBetTimerId=setTimeout((function(){e.resetActiveBet()}),1200),this.checkActiveBetAndAddToList(data.activeBet)},checkActiveBetAndAddToList:function(e){if(e.status===c.a.Win||e.status===c.a.Lose){var t={user:{uuid:this.userUuid,image:this.userImage,name:this.userNickname},bet:{uuid:e.uuid,minesCount:e.minesCount,bet:e.betAmount,win:e.winAmount,multiplier:e.multiplier,isRare:e.multiplier>=this.rareBetsMinMultiplier}};this.addUserBet(t),t.bet.isRare&&this.addRareBet(t)}}}),watch:{userAuthorized:function(e){e||(this.resetRequests(),this.resetForm(),this.resetActiveBet(),this.resetUserBets(),this.setReadyToPlay(!1))},connected:function(e){e?this.onInitGame():(this.setReadyToPlay(!1),this.stopAutoBet(),this.getGameInfoTimerId&&(clearTimeout(this.getGameInfoTimerId),this.getGameInfoTimerId=null))},isJoinedInGameRoom:function(e){e&&this.getGameInfo()}}},h=n(10),component=Object(h.a)(d,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=component.exports},1306:function(e,t,n){"use strict";n.r(t);var o=n(11),r=(n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l={name:"PagesGamesTower",components:{PagesGamesTowerSounds:function(){return Promise.resolve().then(n.bind(null,1165))},PagesGamesTowerSockets:function(){return Promise.resolve().then(n.bind(null,1166))},PagesGamesTowerGame:function(){return Promise.resolve().then(n.bind(null,1307))},PagesGamesTowerBets:function(){return Promise.resolve().then(n.bind(null,1164))},PagesGamesCommonSettings:function(){return Promise.resolve().then(n.bind(null,912))},CommonInGameBanner:function(){return Promise.resolve().then(n.bind(null,923))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.e)({windowSize:function(e){return e.page.windowSize}})),mounted:function(){this.$root.$emit("sockets.updateBalances")},beforeDestroy:function(){this.$root.$emit("sockets.updateBalances")}},m=l,d=n(10),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container container_tower"},[e.windowSize<=992&&e.windowSize>768||e.windowSize<=576&&e.windowSize>0?n("CommonInGameBanner"):e._e(),e._v(" "),n("div",{staticClass:"content-title content-title_game"},[n("div",{staticClass:"content-title__header"},[n("div",{staticClass:"content-title__header-h1"},[e._v(e._s(e.$t("seo.games.tower.title")))]),e._v(" "),n("vIcon",{attrs:{name:"sidebar/menu/tower"}})],1),e._v(" "),e.windowSize<=576?n("PagesGamesCommonSettings",{attrs:{game:"tower",showRulesText:!0,dark:!0}}):e._e()],1),e._v(" "),n("div",{staticClass:"tower"},[n("div",{staticClass:"tower-left"},[e.windowSize<=768&&e.windowSize>576?n("CommonInGameBanner"):e._e(),e._v(" "),n("PagesGamesTowerGame")],1),e._v(" "),n("div",{staticClass:"tower-right"},[e.windowSize>992?n("CommonInGameBanner"):e._e(),e._v(" "),n("PagesGamesTowerBets")],1)]),e._v(" "),n("PagesGamesTowerSounds"),e._v(" "),n("PagesGamesTowerSockets")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonInGameBanner:n(923).default,PagesGamesCommonSettings:n(912).default,PagesGamesTowerGame:n(1307).default,PagesGamesTowerBets:n(1164).default,PagesGamesTowerSounds:n(1165).default,PagesGamesTowerSockets:n(1166).default})},915:function(e,t,n){"use strict";n.r(t);n(0),n(19),n(18);var o={name:"PagesGamesCommonBetsItem",components:{IconShow:function(){return Promise.resolve().then(n.t.bind(null,792,7))}},props:{game:{type:String},bet:{type:Object,default:null}},methods:{onShowBet:function(){this.$root.$emit("showBet",{game:this.game,uuid:this.bet.bet.uuid})}}},r=n(10),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.bet?o("div",{class:["table-row","table-row_hoverable","game-bet"]},[o("div",{staticClass:"table-col"},[o("div",{staticClass:"game-bet-player"},[o("div",{staticClass:"game-bet-player__image"},[e.bet.user.image?o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.bet.user.image,expression:"bet.user.image"}],attrs:{alt:e.bet.user.name}}):o("img",{attrs:{src:n(360),alt:e.$t("user.ghost")}})]),e._v(" "),o("div",{staticClass:"game-bet-player-info"},[e.bet.user.name?o("div",{staticClass:"game-bet-player__name"},[e._v(e._s(e.bet.user.name))]):o("div",{staticClass:"game-bet-player__name"},[e._v(e._s(e.$t("user.ghost")))]),e._v(" "),o("vAmount",{staticClass:"game-bet-player__bet",attrs:{tag:"div",amount:e.bet.bet.bet}})],1)])]),e._v(" "),o("div",{staticClass:"table-col table-col_center"},[null!==e.bet.bet.multiplier?o("vMultiplier",{attrs:{tag:"div",amount:e.bet.bet.multiplier}}):e._e()],1),e._v(" "),o("div",{staticClass:"table-col table-col_right"},[e.bet.bet.win?o("vAmount",{class:["table-col__amount","table-col__amount_scrollable",{"table-col__amount_positive":e.bet.bet.win>e.bet.bet.bet}],attrs:{tag:"div",amount:e.bet.bet.win}}):e._e()],1),e._v(" "),o("div",{staticClass:"table-col table-col_right"},[o("div",{staticClass:"table-col__button table-col__button_blue table-col__button_small",on:{click:e.onShowBet}},[o("IconShow")],1)])]):e._e()}),[],!1,null,null,null);t.default=component.exports},916:function(e,t,n){"use strict";n.r(t);n(2),n(4),n(5),n(1),n(6);var o=n(11),r=(n(0),n(19),n(18),n(3),n(49),n(17));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"PagesGamesCommonBets",components:{IconQuestion:function(){return Promise.resolve().then(n.t.bind(null,782,7))},PagesGamesCommonBetsItem:function(){return Promise.resolve().then(n.bind(null,915))}},props:{game:{type:String},readyToPlay:{type:Boolean,default:!1},allBets:{type:Array,default:function(){return[]}},userBets:{type:Array,default:function(){return[]}},rareBets:{type:Array,default:function(){return[]}}},data:function(){return{menuItems:[{value:"all",name:"pages.games.common.bets.menu.all"},{value:"my",name:"pages.games.common.bets.menu.my"},{value:"rare",name:"pages.games.common.bets.menu.rare"}],menuItem:null,loading:!1,loadingTimerId:null}},computed:l(l({},Object(r.c)({userAuthorized:"user/authorized"})),{},{menu:function(){return this.userAuthorized?this.menuItems:this.menuItems.filter((function(e){return"my"!==e.value}))},bets:function(){if(this.menuItem){if("all"===this.menuItem.value)return this.allBets;if("my"===this.menuItem.value)return this.userBets;if("rare"===this.menuItem.value)return this.rareBets}return[]}}),mounted:function(){this.menuItem=this.menu[0]},beforeDestroy:function(){this.loadingTimerId&&(clearTimeout(this.loadingTimerId),this.loadingTimerId=null)},methods:{onShowRules:function(){this.$root.$emit("showGameRules",{game:this.game})}},watch:{menuItem:function(){var e=this;this.loading=!0,this.loadingTimerId&&(clearTimeout(this.loadingTimerId),this.loadingTimerId=null),this.loadingTimerId=setTimeout((function(){e.loadingTimerId=null,e.loading=!1}),300)},userAuthorized:function(e){e||(this.menuItem=this.menu[0])}}},d=n(10),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-bets"},[n("div",{staticClass:"game-bets-header"},[n("vTabMenu",{attrs:{links:!1,items:e.menu},model:{value:e.menuItem,callback:function(t){e.menuItem=t},expression:"menuItem"}})],1),e._v(" "),n("div",{staticClass:"table-wrapper",class:{"table-wrapper_with-shadow":!e.readyToPlay||e.loading||e.bets.length>0}},[e.menuItem&&"all"===e.menuItem.value&&e.readyToPlay&&!e.loading&&e.bets.length>0?[n("div",{staticClass:"game-bets-limits"},[n("div",{staticClass:"game-bets-limits__text"},[e._v(e._s(e.$t("pages.games.common.bets.limits")))])])]:e._e(),e._v(" "),n("div",{staticClass:"table"},[e.menuItem&&e.readyToPlay&&!e.loading?e.bets.length?[n("TransitionGroup",{key:"notEmptyTable",staticClass:"table-body",attrs:{tag:"div",name:"gamesBetBounce"}},[e._l(e.bets,(function(t){return[n("PagesGamesCommonBetsItem",{key:e.game+"_"+e.menuItem.value+"_"+t.bet.uuid,attrs:{game:e.game,bet:t}})]}))],2)]:[n("div",{staticClass:"table-body"},[n("vEmptyTable",{key:"emptyTable",attrs:{title:"pages.games.common.bets.empty.title",text:"pages.games.common.bets.empty.text."+e.game},scopedSlots:e._u([{key:"icon",fn:function(){return[n("vIcon",{attrs:{name:"games/"+e.game}})]},proxy:!0},{key:"button",fn:function(){return[n("vButton",{attrs:{type:"primary",small:!0},on:{click:e.onShowRules},scopedSlots:e._u([{key:"image",fn:function(){return[n("IconQuestion")]},proxy:!0}])},[e._v("\n                "+e._s(e.$t("pages.games.common.bets.empty.button"))+"\n\n                ")])]},proxy:!0}])})],1)]:[n("div",{staticClass:"table-body"},[e._l(20,(function(e,t){return[n("div",{key:t,staticClass:"table-row table-row_loading"})]}))],2)]],2)],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PagesGamesCommonBetsItem:n(915).default})},917:function(e,t,n){e.exports=n.p+"img/128f35c.png"},918:function(e,t,n){e.exports=n.p+"img/bbdac75.png"},919:function(e,t,n){e.exports=n.p+"img/d1cb5ed.png"},921:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"black-friday__name"},[t("img",{attrs:{src:n(917),alt:"Black Friday"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"black-friday__bonus-value"},[t("img",{attrs:{src:n(918),alt:"RTP up to 99%"}})])}],r=(n(2),n(4),n(3),n(5),n(1),n(6),n(11)),c=(n(0),n(19),n(18),n(49),n(17));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"CommonBlackFriday",components:{IconTime:function(){return Promise.resolve().then(n.t.bind(null,770,7))}},props:{inModal:{type:Boolean,default:!1}},data:function(){return{status:null,startedDate:null,finishedDate:null,countdown:null,countdownTimerId:null}},computed:m(m({},Object(c.e)({active:function(e){return e.blackFriday.active},startedAt:function(e){return e.blackFriday.startedAt},finishedAt:function(e){return e.blackFriday.finishedAt}})),{},{statusText:function(){return this.status?this.$t("common.blackFriday.status.".concat(this.status)):null}}),mounted:function(){this.startedAt&&this.finishedAt&&(this.startedDate=this.$DateTime.fromISO(this.startedAt),this.finishedDate=this.$DateTime.fromISO(this.finishedAt)),this.startCountdown()},destroyed:function(){this.stopCountdown()},methods:{startCountdown:function(){var e=this;this.stopCountdown(),this.updateCountdown(),this.countdownTimerId=setInterval((function(){e.updateCountdown()}),1e3)},updateCountdown:function(){var e=null,t=0,n=this.$DateTime.now();this.active?n<=this.finishedDate?(e="started",t=Math.floor(this.finishedDate.diff(n,"seconds").toObject().seconds)):e="finishing":n<=this.startedDate?(e="waiting",t=Math.floor(this.startedDate.diff(n,"seconds").toObject().seconds)):e=n<=this.finishedDate?"starting":"finished",this.status=e,this.countdown=t,"waiting"!==e&&"started"!==e&&this.stopCountdown()},stopCountdown:function(){this.countdownTimerId&&(clearInterval(this.countdownTimerId),this.countdownTimerId=null,this.countdown=null)},onShowInfo:function(){this.inModal||this.$modal.show("blackFridayModal")}}},h=n(10),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["black-friday",{"black-friday_modal":e.inModal}],on:{click:e.onShowInfo}},[e._m(0),e._v(" "),n("div",{staticClass:"black-friday__bonus"},[e._m(1),e._v(" "),e.status?n("div",{staticClass:"black-friday__bonus-countdown"},[n("span",[e._v(e._s(e.statusText))]),e._v(" "),"waiting"===e.status||"started"===e.status?[n("vCountdown",{attrs:{countdown:e.countdown}}),e._v(" "),n("IconTime")]:e._e()],2):e._e()])])}),o,!1,null,null,null);t.default=component.exports},922:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vk-bonuses-reloading__bonus"},[t("img",{attrs:{src:n(919),alt:"35 RUB"}})])}],r=(n(0),n(19),n(18),{name:"CommonVkBonusesReloading",components:{IconInfo:function(){return Promise.resolve().then(n.t.bind(null,838,7))}},props:{inModal:{type:Boolean,default:!1}},methods:{onShowInfo:function(){this.inModal||this.$modal.show("vkBonusesReloadingModal")}}}),c=n(10),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vk-bonuses-reloading",{"vk-bonuses-reloading_modal":e.inModal}],on:{click:e.onShowInfo}},[n("div",{staticClass:"vk-bonuses-reloading-header"},[n("div",{staticClass:"vk-bonuses-reloading__title"},[n("img",{attrs:{src:e.$t("common.vkBonusesReloading.titleImage"),alt:e.$t("common.vkBonusesReloading.title")}})]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"vk-bonuses-reloading-footer"},[n("div",{staticClass:"vk-bonuses-reloading__help"},[n("p",[e._v(e._s(e.$t("common.vkBonusesReloading.help")))]),e._v(" "),n("IconInfo")],1)])])}),o,!1,null,null,null);t.default=component.exports},923:function(e,t,n){"use strict";n.r(t);var o=n(11),r=(n(0),n(19),n(18),n(2),n(4),n(3),n(5),n(1),n(6),n(17));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"CommonInGameBanner",data:function(){return{hasVkBonusesReloading:!1}},components:{CommonBlackFriday:function(){return Promise.resolve().then(n.bind(null,921))},CommonVkBonusesReloading:function(){return Promise.resolve().then(n.bind(null,922))}},computed:l(l({},Object(r.e)({hasBlackFriday:function(e){return e.blackFriday.visible}})),{},{isVisibleBanner:function(){return this.hasBlackFriday||this.hasVkBonusesReloading}})},d=n(10),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["in-game-banner",{"in-game-banner_visible":e.isVisibleBanner}]},[e.hasBlackFriday?n("CommonBlackFriday"):e.hasVkBonusesReloading?n("CommonVkBonusesReloading"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommonBlackFriday:n(921).default,CommonVkBonusesReloading:n(922).default})}}]);