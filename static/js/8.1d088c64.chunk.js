(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[8],{207:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"e",(function(){return b})),a.d(t,"c",(function(){return E}));var n=a(17),l=a(0),c=a.n(l),r=a(27),i=a(10),m=a(58),o=function(){throw new Error("Not intended for rendering")},u=function(){throw new Error("Not intended for rendering")},d=c.a.createContext([]);function s(e){var t=e.className,a=void 0===t?"":t,n=e.replace,m=void 0!==n&&n,o=e.keepState,u=void 0!==o&&o,s=Object(l.useContext)(d),b=(Object(i.j)()||{url:""}).url.replace(/\/+$/,"");return c.a.createElement("nav",{className:"nav nav-pills mb-3 ".concat(a)},s.map((function(e){return c.a.createElement(r.c,{key:e.path,to:function(t){return{pathname:"".concat(b,"/").concat(e.path),state:u?t.state:void 0}},replace:m,exact:!!e.exact,className:"nav-link",activeClassName:"active"},e.title)})))}function b(e){var t=e.defaultRenderDirectly,a=void 0!==t&&t,r=e.mutateTitle,o=void 0===r||r,u=e.children,s=Object(l.useContext)(d),b=Object(i.j)()||{url:""},E=Object(i.h)(),p=b.url.replace(/\/+$/,"");return c.a.createElement(i.d,null,s.map((function(e){return c.a.createElement(i.b,{exact:e.exact,key:e.path,path:"".concat(p,"/").concat(e.path)},o&&c.a.createElement(m.Helmet,null,c.a.createElement("title",null,e.title)),e.children)})),c.a.createElement(i.b,null,a?s[0].children:c.a.createElement(i.a,{to:Object(n.a)({},E,{pathname:"".concat(p,"/").concat(s[0].path)}),push:!1})),u)}function E(e){var t=e.children;return c.a.createElement(d.Provider,{value:t[0].props.children.map((function(e){return e.props}))},t.slice(1))}},548:function(e,t,a){"use strict";a.r(t);var n,l=a(0),c=a.n(l),r=a(37),i=a(58),m=a(59),o=a(9),u=a(7),d=a(22),s=a(4),b=a(93),E=a(15),p=a(45),f=a(1),v=a.n(f),h=a(91),j=a(5);!function(e){e.All="\u5168\u90e8",e.Last4Weeks="\u6700\u8fd1\u56db\u5468",e.Custom="\u81ea\u5b9a\u4e49"}(n||(n={}));var O=Object.keys(n).map((function(e){return{key:n[e],label:n[e]}}));function g(e){var t=e.showLevel,a=void 0!==t&&t,r=Object(E.c)(),i=Object(s.a)(r,2),m=i[0],o=i[1],u=Object(l.useState)((function(){return"player"!==m.type?n.All:m.startDate?m.endDate&&!v()(m.endDate).isSame(v()(),"day")||!v()(m.startDate).isSame(v()().subtract(27,"day"),"day")?n.Custom:n.Last4Weeks:n.All})),d=Object(s.a)(u,2),f=d[0],g=d[1],y=Object(l.useState)((function(){return"player"===m.type&&m.startDate?m.startDate:j.b.dateMin})),N=Object(s.a)(y,2),w=N[0],x=N[1],k=Object(l.useState)((function(){return"player"===m.type&&m.endDate?m.endDate:v()()})),D=Object(s.a)(k,2),M=D[0],I=D[1];Object(l.useEffect)((function(){if("player"===m.type)switch(f){case n.All:o({type:"player",playerId:m.playerId,startDate:null,endDate:null,selectedMode:void 0});break;case n.Last4Weeks:o({type:"player",playerId:m.playerId,startDate:v()().subtract(27,"day"),endDate:null});break;case n.Custom:o({type:"player",playerId:m.playerId,startDate:w,endDate:M})}}),[m,f,w,M,o]);var S=Object(l.useCallback)((function(e){return o({type:"player",selectedMode:e})}),[o]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(b.a,{title:"\u65f6\u95f4",inline:!0},c.a.createElement(p.a,{type:"radio",selectedItemKey:f,items:O,groupKey:"PlayerDetailsDateRangeSelector",onChange:g}))),a&&j.b.availableModes.length>1&&c.a.createElement("div",{className:"col-6"},c.a.createElement(b.a,{title:"\u7b49\u7ea7",inline:!0},c.a.createElement(h.a,{mode:m.selectedMode,onChange:S})))),f===n.Custom?c.a.createElement("div",{className:"row mt-n3"},c.a.createElement("div",{className:"col-6"},c.a.createElement(b.a,{inline:!0},c.a.createElement(p.b,{min:j.b.dateMin,onChange:x,date:w,className:"form-control"}),c.a.createElement(p.b,{min:j.b.dateMin,onChange:I,date:M,className:"form-control"})))):null)}function y(e){var t=e.label,a=e.description,n=e.className,l=void 0===n?"":n,r=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement("dt",{className:"col-2 col-lg-1 text-nowrap ".concat(l)},t),c.a.createElement("dd",{className:"col-4 col-lg-3 text-right ".concat(l),"data-tip":a||""},r))}var N=[u.GameMode.\u7389,u.GameMode.\u738b\u5ea7,u.GameMode.\u4e09\u7389,u.GameMode.\u4e09\u738b\u5ea7];function w(e){var t=e.metadata,a=Object(E.c)(),n=Object(s.a)(a,1)[0];if(!j.b.features.estimatedStableLevel)return null;var l=u.LevelWithDelta.getAdjustedLevel(t.level);if(!n.selectedMode)return null;var r=parseInt(n.selectedMode);if(!N.includes(r)||!l.isAllowedMode(r))return null;var i=t.count<100,m=u.PlayerMetadata.calculateExpectedGamePoint(t,r),o=null;if(l.getMaxPoint()&&l.isAllowedMode(r)){var d=l.isSame(new u.Level(t.level.id))?t.level.score+t.level.delta:l.getStartingPoint();o=m>0?(l.getMaxPoint()-d)/m:d/m}var b=o?"\uff0c\u62ec\u53f7\u5185\u4e3a\u9884\u8ba1".concat(o>0?"\u5347":"\u964d","\u6bb5\u573a\u6570"):"",p=u.PlayerMetadata.getStableLevelComponents(t,r),f="\u4e00\u4e8c\u4e09\u56db".slice(0,p.length);return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{label:"\u5b89\u5b9a\u6bb5\u4f4d",description:"\u5728".concat(Object(u.modeLabel)(r),"\u4e4b\u95f4\u4e00\u76f4\u8fdb\u884c\u5bf9\u5c40\uff0c\u9884\u6d4b\u6700\u7ec8\u80fd\u8fbe\u5230\u7684\u6bb5\u4f4d\u3002").concat(3===f.length?"\u62ec\u53f7\u5185\u4e3a\u5b89\u5b9a\u6bb5\u4f4d\u65f6\u7684\u5206\u6570\u671f\u671b\u3002":"").concat(i?"\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09":"","<br/>").concat(f.slice(0,f.length-1),"\u4f4d\u5e73\u5747 Pt / ").concat(f[f.length-1],"\u4f4d\u5e73\u5747\u5f97\u70b9 Pt\uff1a[").concat(p.map((function(e){return e.toFixed(2)})).join("/"),"]"),className:i?"font-italic font-lighter text-muted":""},c.a.createElement("span",null,u.PlayerMetadata.estimateStableLevel2(t,r),i&&"?")),c.a.createElement(y,{label:"\u5206\u6570\u671f\u671b",description:"\u5728".concat(Object(u.modeLabel)(r),"\u4e4b\u95f4\u6bcf\u5c40\u83b7\u5f97\u70b9\u6570\u7684\u6570\u5b66\u671f\u671b\u503c").concat(b).concat(i?"\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09":""),className:i?"font-italic font-lighter text-muted":""},c.a.createElement("span",null,m.toFixed(1),o?" (".concat(Math.abs(o).toFixed(0),")"):"",i&&"?")))}var x=a(56),k=a(207),D=a(10),M=a(27),I=a(60);function S(e){var t=e.numGames,a=void 0===t?100:t,n=e.numDisplay,r=void 0===n?10:n,i=e.currentAccountId,u=void 0===i?0:i,s=Object(m.c)(),b=s.getCount(),E=Math.min(b,a),p=Object(l.useMemo)((function(){if(b<=0)return null;for(var e={},t=0;t<E;t++){var a=s.getItem(t);if(!("uuid"in a))return null;var n=!0,l=!1,c=void 0;try{for(var r,i=a.players[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var m=r.value;m.accountId!==u&&(e[m.accountId]||(e[m.accountId]={player:m,count:0}),e[m.accountId].count++)}}catch(d){l=!0,c=d}finally{try{n||null==i.return||i.return()}finally{if(l)throw c}}}var o=Object.values(e);return o.sort((function(e,t){return t.count-e.count})),o}),[b,s,E,u]);return b<=0?null:p?c.a.createElement("dl",{className:"row"},p.slice(0,r).map((function(e){return c.a.createElement(c.a.Fragment,{key:e.player.accountId},c.a.createElement("dt",{className:"col-8 col-lg-4 font-weight-normal"},c.a.createElement(M.b,{to:Object(I.generatePlayerPathById)(e.player.accountId)},e.player.nickname)),c.a.createElement("dd",{className:"col-4 col-lg-2 text-right"},Object(o.c)(e.count/E)," (",e.count,")"))}))):c.a.createElement(d.a,null)}function F(e){var t=e.numDisplay,a=void 0===t?10:t,n=e.currentAccountId,l=void 0===n?0:n;return c.a.createElement(k.c,null,c.a.createElement(k.d,null,c.a.createElement(k.b,{path:"latest",title:"\u6700\u8fd1 100 \u5c40"},c.a.createElement(S,{currentAccountId:l,numDisplay:a})),c.a.createElement(k.b,{path:"all",title:"\u5168\u90e8"},c.a.createElement(S,{currentAccountId:l,numDisplay:a,numGames:2147483647}))),c.a.createElement(k.a,{className:"mt-n3"}),c.a.createElement(k.e,{mutateTitle:!1}))}a.d(t,"default",(function(){return B}));var L=Object(r.a)({loader:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,544))},loading:function(){return c.a.createElement(d.a,null)}}),P=Object(r.a)({loader:function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,545))},loading:function(){return c.a.createElement(d.a,null)}}),A=Object(r.a)({loader:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,546))},loading:function(){return c.a.createElement(d.a,null)}}),C=a.e(4).then(a.t.bind(null,547,7)),G=Object(r.a)({loader:function(){return C},loading:function(){return null}});function W(e){var t=e.metadata,a=e.view,n=Object(o.h)(t.extended_stats);if(Object(l.useEffect)(o.g,[!!n]),!n)return null;var r=a;return c.a.createElement(r,{stats:n,metadata:t})}function _(e){var t=e.stats;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{label:"\u548c\u724c\u7387",description:"\u548c\u724c\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u548c\u724c\u7387||0)),c.a.createElement(y,{label:"\u653e\u94f3\u7387",description:"\u653e\u94f3\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u653e\u94f3\u7387||0)),c.a.createElement(y,{label:"\u81ea\u6478\u7387",description:"\u81ea\u6478\u5c40\u6570 / \u548c\u724c\u5c40\u6570"},Object(o.c)(t.\u81ea\u6478\u7387||0)),c.a.createElement(y,{label:"\u9ed8\u80e1\u7387",description:"\u95e8\u6e05\u9ed8\u542c\u548c\u724c\u5c40\u6570 / \u548c\u724c\u5c40\u6570"},Object(o.c)(t.\u9ed8\u542c\u7387||0)),c.a.createElement(y,{label:"\u6d41\u5c40\u7387",description:"\u6d41\u5c40\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u6d41\u5c40\u7387||0)),c.a.createElement(y,{label:"\u6d41\u542c\u7387",description:"\u6d41\u5c40\u542c\u724c\u5c40\u6570 / \u6d41\u5c40\u5c40\u6570"},Object(o.c)(t.\u6d41\u542c\u7387||0)),c.a.createElement(y,{label:"\u526f\u9732\u7387",description:"\u526f\u9732\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u526f\u9732\u7387||0)),c.a.createElement(y,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u7acb\u76f4\u7387||0)),c.a.createElement(y,{label:"\u548c\u4e86\u5de1\u6570"},(t.\u548c\u4e86\u5de1\u6570||0).toFixed(3)),c.a.createElement(y,{label:"\u5e73\u5747\u6253\u70b9"},t.\u5e73\u5747\u6253\u70b9||0),c.a.createElement(y,{label:"\u5e73\u5747\u94f3\u70b9"},t.\u5e73\u5747\u94f3\u70b9||0))}function T(e){var t=e.stats,a=e.metadata;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{label:"\u6700\u9ad8\u7b49\u7ea7"},u.LevelWithDelta.getTag(a.max_level)),c.a.createElement(y,{label:"\u6700\u9ad8\u5206\u6570"},u.LevelWithDelta.formatAdjustedScore(function(e){var t=new x.a(e.id);return e.score+e.delta<t.getStartingPoint()?{id:e.id,score:t.getStartingPoint(),delta:0}:e}(a.max_level))),c.a.createElement(y,{label:"\u6700\u5927\u8fde\u5e84"},t.\u6700\u5927\u8fde\u5e84||0),c.a.createElement(y,{label:"\u91cc\u5b9d\u7387",description:"\u4e2d\u91cc\u5b9d\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570"},Object(o.c)(t.\u91cc\u5b9d\u7387||0)),c.a.createElement(y,{label:"\u88ab\u70b8\u7387",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u6b21\u6570 / \u88ab\u81ea\u6478\u6b21\u6570"},Object(o.c)(t.\u88ab\u70b8\u7387||0)),c.a.createElement(y,{label:"\u5e73\u5747\u88ab\u70b8\u70b9\u6570",description:"\u88ab\u70b8\u5e84\uff08\u6ee1\u8d2f\u6216\u4ee5\u4e0a\uff09\u70b9\u6570 / \u6b21\u6570"},t.\u5e73\u5747\u88ab\u70b8\u70b9\u6570||0),c.a.createElement(y,{label:"\u653e\u94f3\u65f6\u7acb\u76f4\u7387",description:"\u653e\u94f3\u65f6\u7acb\u76f4\u6b21\u6570 / \u653e\u94f3\u6b21\u6570"},Object(o.c)(t.\u653e\u94f3\u65f6\u7acb\u76f4\u7387||0)),c.a.createElement(y,{label:"\u653e\u94f3\u65f6\u526f\u9732\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u653e\u94f3\u6b21\u6570"},Object(o.c)(t.\u653e\u94f3\u65f6\u526f\u9732\u7387||0)),c.a.createElement(y,{label:"\u526f\u9732\u540e\u653e\u94f3\u7387",description:"\u653e\u94f3\u65f6\u526f\u9732\u6b21\u6570 / \u526f\u9732\u6b21\u6570"},Object(o.c)(t.\u526f\u9732\u540e\u653e\u94f3\u7387||0)),c.a.createElement(y,{label:"\u526f\u9732\u540e\u548c\u724c\u7387",description:"\u526f\u9732\u540e\u548c\u724c\u6b21\u6570 / \u526f\u9732\u6b21\u6570"},Object(o.c)(t.\u526f\u9732\u540e\u548c\u724c\u7387||0)),c.a.createElement(y,{label:"\u526f\u9732\u540e\u6d41\u5c40\u7387",description:"\u526f\u9732\u540e\u6d41\u5c40\u6b21\u6570 / \u526f\u9732\u6b21\u6570"},Object(o.c)(t.\u526f\u9732\u540e\u6d41\u5c40\u7387||0)))}function R(e){var t=e.stats;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570"},Object(o.c)(t.\u7acb\u76f4\u7387||0)),c.a.createElement(y,{label:"\u7acb\u76f4\u548c\u4e86",description:"\u7acb\u76f4\u548c\u4e86\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u7acb\u76f4\u540e\u548c\u724c\u7387||0)),c.a.createElement(y,{label:"\u7acb\u76f4\u653e\u94f3",description:"\u7acb\u76f4\u653e\u94f3\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u7acb\u76f4\u540e\u653e\u94f3\u7387||0)),c.a.createElement(y,{label:"\u7acb\u76f4\u6536\u652f",description:"\u7acb\u76f4\u603b\u6536\u652f\uff08\u542b\u4f9b\u6258\uff09 / \u7acb\u76f4\u5c40\u6570"},t.\u7acb\u76f4\u6536\u652f||0),c.a.createElement(y,{label:"\u7acb\u76f4\u6536\u5165",description:"\u7acb\u76f4\u548c\u4e86\u6536\u5165\uff08\u542b\u4f9b\u6258\uff09 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570"},t.\u7acb\u76f4\u6536\u5165||0),c.a.createElement(y,{label:"\u7acb\u76f4\u652f\u51fa",description:"\u7acb\u76f4\u653e\u94f3\u652f\u51fa\uff08\u542b\u7acb\u76f4\u68d2\uff09 / \u7acb\u76f4\u653e\u94f3\u5c40\u6570"},t.\u7acb\u76f4\u652f\u51fa||0),c.a.createElement(y,{label:"\u5148\u5236\u7387",description:"\u5148\u5236\u7acb\u76f4\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u5148\u5236\u7387||0)),c.a.createElement(y,{label:"\u8ffd\u7acb\u7387",description:"\u8ffd\u7acb\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u8ffd\u7acb\u7387||0)),c.a.createElement(y,{label:"\u88ab\u8ffd\u7387",description:"\u88ab\u8ffd\u7acb\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u88ab\u8ffd\u7387||0)),c.a.createElement(y,{label:"\u7acb\u76f4\u5de1\u76ee"},Object(o.a)(t.\u7acb\u76f4\u5de1\u76ee||0)),c.a.createElement(y,{label:"\u7acb\u76f4\u6d41\u5c40",description:"\u7acb\u76f4\u6d41\u5c40\u5c40\u6570 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u7acb\u76f4\u540e\u6d41\u5c40\u7387||0)),c.a.createElement(y,{label:"\u4e00\u53d1\u7387",description:"\u4e00\u53d1\u5c40\u6570 / \u7acb\u76f4\u548c\u4e86\u5c40\u6570"},Object(o.c)(t.\u4e00\u53d1\u7387||0)),c.a.createElement(y,{label:"\u632f\u542c\u7387",description:"\u632f\u542c\u7acb\u76f4\u5c40\u6570\uff08\u4e0d\u542b\u7acb\u76f4\u89c1\u9003\uff09 / \u7acb\u76f4\u5c40\u6570"},Object(o.c)(t.\u632f\u542c\u7acb\u76f4\u7387||0)))}function H(e){var t=e.metadata;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{label:"\u8bb0\u5f55\u573a\u6570"},t.count),c.a.createElement(y,{label:"\u8bb0\u5f55\u7b49\u7ea7"},u.LevelWithDelta.getTag(t.level)),c.a.createElement(y,{label:"\u8bb0\u5f55\u5206\u6570"},u.LevelWithDelta.formatAdjustedScore(t.level)),c.a.createElement(W,{metadata:t,view:_}),c.a.createElement(y,{label:"\u5e73\u5747\u987a\u4f4d"},t.avg_rank.toFixed(3)),c.a.createElement(y,{label:"\u88ab\u98de\u7387"},Object(o.c)(t.negative_rate)),c.a.createElement(w,{metadata:t}))}function J(e){var t=e.stats;return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{label:"\u5f79\u6ee1",description:"\u548c\u51fa\u5f79\u6ee1\u6b21\u6570"},t.\u5f79\u6ee1||0),c.a.createElement(y,{label:"\u7d2f\u8ba1\u5f79\u6ee1",description:"\u548c\u51fa\u7d2f\u8ba1\u5f79\u6ee1\u6b21\u6570"},t.\u7d2f\u8ba1\u5f79\u6ee1||0),c.a.createElement(y,{label:"\u6700\u5927\u7d2f\u8ba1\u756a\u6570",description:"\u548c\u51fa\u7684\u6700\u5927\u756a\u6570\uff08\u4e0d\u542b\u5f79\u6ee1\u5f79\uff09"},t.\u6700\u5927\u7d2f\u8ba1\u756a\u6570||0),c.a.createElement(y,{label:"\u6d41\u6ee1",description:"\u6d41\u6ee1\u6b21\u6570"},t.\u6d41\u6ee1||0),c.a.createElement(y,{label:"\u4e24\u7acb\u76f4",description:"\u4e24\u7acb\u76f4\u6b21\u6570"},t.W\u7acb\u76f4||0),c.a.createElement(y,{label:"\u5e73\u5747\u8d77\u624b\u5411\u542c"},Object(o.a)(t.\u5e73\u5747\u8d77\u624b\u5411\u542c)))}function K(e){var t=e.stats,a=e.metadata;return t.\u6700\u8fd1\u5927\u94f3?c.a.createElement("div",null,c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"d-flex justify-content-between font-weight-bold",href:u.GameRecord.getRecordLink(t.\u6700\u8fd1\u5927\u94f3.id,a.id)},c.a.createElement("span",null,u.FanStatEntryList.formatFanSummary(t.\u6700\u8fd1\u5927\u94f3.fans)),c.a.createElement("span",null,u.GameRecord.formatFullStartTime(t.\u6700\u8fd1\u5927\u94f3.start_time))),c.a.createElement("dl",{className:"row mt-2"},t.\u6700\u8fd1\u5927\u94f3.fans.map((function(e){return c.a.createElement(y,{key:e.label,label:e.label},u.FanStatEntry2.formatFan(e))})))):c.a.createElement("p",{className:"text-center"},"\u65e0\u6ee1\u8d2f\u6216\u4ee5\u4e0a\u5927\u94f3")}function $(e){var t=e.metadata,a=Object(D.h)();return Object(l.useEffect)((function(){C.then((function(e){return e.rebuild()}))}),[a.pathname]),c.a.createElement(k.c,null,c.a.createElement(k.d,null,c.a.createElement(k.b,{path:"",exact:!0,title:"\u57fa\u672c"},c.a.createElement("dl",{className:"row"},c.a.createElement(H,{metadata:t}))),c.a.createElement(k.b,{path:"riichi",title:"\u7acb\u76f4"},c.a.createElement("dl",{className:"row"},c.a.createElement(W,{metadata:t,view:R}))),c.a.createElement(k.b,{path:"extended",title:"\u66f4\u591a"},c.a.createElement("dl",{className:"row"},c.a.createElement(W,{metadata:t,view:T}))),c.a.createElement(k.b,{path:"win-lose",title:"\u548c\u94f3\u5206\u5e03"},c.a.createElement(W,{metadata:t,view:A})),c.a.createElement(k.b,{path:"luck",title:"\u8840\u7edf"},c.a.createElement("dl",{className:"row"},c.a.createElement(W,{metadata:t,view:J}))),c.a.createElement(k.b,{path:"largest-lost",title:"\u6700\u8fd1\u5927\u94f3"},c.a.createElement(W,{metadata:t,view:K})),c.a.createElement(k.b,{path:"same-match",title:"\u6700\u5e38\u540c\u684c"},c.a.createElement(F,{currentAccountId:t.id}))),c.a.createElement(k.a,{className:"mt-3",replace:!0,keepState:!0}),c.a.createElement(k.e,{mutateTitle:!1}))}function B(){var e=Object(m.c)(),t=e.getMetadata();return Object(l.useEffect)((function(){C.then((function(e){return e.rebuild()}))})),Object(l.useEffect)(o.g,[!!t]),t&&t.nickname?c.a.createElement("div",null,c.a.createElement(i.Helmet,null,c.a.createElement("title",null,t.nickname)),c.a.createElement("h2",{className:"text-center"},"\u73a9\u5bb6\uff1a",t.nickname),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement("h3",{className:"text-center mb-4"},"\u6700\u8fd1\u8d70\u52bf"),c.a.createElement(P,{dataAdapter:e,playerId:t.id,aspect:6}),c.a.createElement($,{metadata:t})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("h3",{className:"text-center mb-4"},"\u7d2f\u8ba1\u6218\u7ee9"),c.a.createElement(L,{metadata:t}))),c.a.createElement(g,{showLevel:!0}),c.a.createElement(G,{effect:"solid",multiline:!0,place:"top"})):c.a.createElement(d.a,null)}}}]);
//# sourceMappingURL=8.1d088c64.chunk.js.map