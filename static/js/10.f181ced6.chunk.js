(this["webpackJsonpamae-koromo"]=this["webpackJsonpamae-koromo"]||[]).push([[10],{540:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var l,n=a(3),c=a(0),r=a.n(c),m=a(29),o=a.n(m),s=a(79),i=a(83),d=a(36),u=a(33),b=a(23),E=a(24),p=a(80),f=a(9),v=a(31),y=a(1),g=a.n(y),j=a(77),h=o()({loader:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,524))},loading:function(){return r.a.createElement(E.a,null)}}),O=o()({loader:function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,525))},loading:function(){return r.a.createElement(E.a,null)}}),D=a.e(5).then(a.t.bind(null,526,7)),N=o()({loader:function(){return D},loading:function(){return null}});!function(e){e.All="\u5168\u90e8",e.Last4Weeks="\u6700\u8fd1\u56db\u5468",e.Custom="\u81ea\u5b9a\u4e49"}(l||(l={}));var x=Object.keys(l).map((function(e){return{key:l[e],label:l[e]}}));function k(e){var t=e.showLevel,a=void 0!==t&&t,m=Object(f.c)(),o=Object(n.a)(m,2),s=o[0],i=o[1],d=Object(c.useState)((function(){return"player"!==s.type?l.All:s.startDate?s.endDate&&!g()(s.endDate).isSame(g()(),"day")||!g()(s.startDate).isSame(g()().subtract(27,"day"),"day")?l.Custom:l.Last4Weeks:l.All})),u=Object(n.a)(d,2),E=u[0],y=u[1],h=Object(c.useState)((function(){return"player"===s.type&&s.startDate?s.startDate:b.b})),O=Object(n.a)(h,2),D=O[0],N=O[1],k=Object(c.useState)((function(){return"player"===s.type&&s.endDate?s.endDate:g()()})),M=Object(n.a)(k,2),w=M[0],L=M[1];Object(c.useEffect)((function(){if("player"===s.type)switch(E){case l.All:i({type:"player",playerId:s.playerId,startDate:null,endDate:null,selectedMode:void 0});break;case l.Last4Weeks:i({type:"player",playerId:s.playerId,startDate:g()().subtract(27,"day"),endDate:null});break;case l.Custom:i({type:"player",playerId:s.playerId,startDate:D,endDate:w})}}),[s,E,D,w,i]);var S=Object(c.useCallback)((function(e){return i({type:"player",selectedMode:e})}),[i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(p.a,{title:"\u65f6\u95f4",inline:!0},r.a.createElement(v.a,{type:"radio",selectedItemKey:E,items:x,groupKey:"PlayerDetailsDateRangeSelector",onChange:y}))),a&&r.a.createElement("div",{className:"col-6"},r.a.createElement(p.a,{title:"\u7b49\u7ea7",inline:!0},r.a.createElement(j.a,{mode:s.selectedMode,onChange:S})))),E===l.Custom?r.a.createElement("div",{className:"row mt-n3"},r.a.createElement("div",{className:"col-6"},r.a.createElement(p.a,{inline:!0},r.a.createElement(v.b,{min:b.b,onChange:N,date:D,className:"form-control"}),r.a.createElement(v.b,{min:b.b,onChange:L,date:w,className:"form-control"})))):null)}function M(e){var t=e.label,a=e.description,l=e.className,n=void 0===l?"":l,c=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"col-2 col-lg-1 text-nowrap ".concat(n)},t),r.a.createElement("dd",{className:"col-4 col-lg-3 text-right ".concat(n),"data-tip":a||""},c))}function w(e){var t=e.maybeStats,a=Object(d.d)(t);return Object(c.useEffect)(d.c,[!!a]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{label:"\u548c\u724c\u7387",description:"\u548c\u724c\u5c40\u6570 / \u603b\u5c40\u6570"},Object(d.a)(a.\u548c\u724c\u7387||0)),r.a.createElement(M,{label:"\u653e\u94f3\u7387",description:"\u653e\u94f3\u5c40\u6570 / \u603b\u5c40\u6570"},Object(d.a)(a.\u653e\u94f3\u7387||0)),r.a.createElement(M,{label:"\u81ea\u6478\u7387",description:"\u81ea\u6478\u5c40\u6570 / \u548c\u724c\u5c40\u6570"},Object(d.a)(a.\u81ea\u6478\u7387||0)),r.a.createElement(M,{label:"\u9ed8\u80e1\u7387",description:"\u95e8\u6e05\u9ed8\u542c\u548c\u724c\u5c40\u6570 / \u548c\u724c\u5c40\u6570"},Object(d.a)(a.\u9ed8\u542c\u7387||0)),r.a.createElement(M,{label:"\u6d41\u5c40\u7387",description:"\u6d41\u5c40\u5c40\u6570 / \u603b\u5c40\u6570"},Object(d.a)(a.\u6d41\u5c40\u7387||0)),r.a.createElement(M,{label:"\u6d41\u542c\u7387",description:"\u6d41\u5c40\u542c\u724c\u5c40\u6570 / \u6d41\u5c40\u5c40\u6570"},Object(d.a)(a.\u6d41\u542c\u7387||0)),r.a.createElement(M,{label:"\u526f\u9732\u7387",description:"\u526f\u9732\u5c40\u6570 / \u603b\u5c40\u6570"},Object(d.a)(a.\u526f\u9732\u7387||0)),r.a.createElement(M,{label:"\u7acb\u76f4\u7387",description:"\u7acb\u76f4\u5c40\u6570 / \u603b\u5c40\u6570"},Object(d.a)(a.\u7acb\u76f4\u7387||0)),r.a.createElement(M,{label:"\u548c\u4e86\u5de1\u6570"},(a.\u548c\u4e86\u5de1\u6570||0).toFixed(3)),r.a.createElement(M,{label:"\u5e73\u5747\u6253\u70b9"},a.\u5e73\u5747\u6253\u70b9||0),r.a.createElement(M,{label:"\u5e73\u5747\u94f3\u70b9"},a.\u5e73\u5747\u94f3\u70b9||0),r.a.createElement(M,{label:"\u6700\u5927\u8fde\u5e84"},a.\u6700\u5927\u8fde\u5e84||0)):null}function L(e){var t=e.metadata,a=Object(f.c)(),l=Object(n.a)(a,1)[0],c=u.LevelWithDelta.getAdjustedLevel(t.level),m=l.selectedMode?parseInt(l.selectedMode):"\u9b42"===u.LevelWithDelta.getTag(t.level)?u.GameMode.\u738b\u5ea7:u.GameMode.\u7389,o=t.count<100,s=u.PlayerMetadata.calculateExpectedGamePoint(t,m),i=null;if(c.getMaxPoint()&&c.isAllowedMode(m)){var d=c.isSame(new u.Level(t.level.id))?t.level.score+t.level.delta:c.getStartingPoint();i=s>0?(c.getMaxPoint()-d)/s:d/s}var b=i?"\uff0c\u62ec\u53f7\u5185\u4e3a\u9884\u8ba1".concat(i>0?"\u5347":"\u964d","\u6bb5\u573a\u6570"):"";return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{label:"\u5b89\u5b9a\u6bb5\u4f4d",description:"\u5728".concat(u.GameMode[m],"\u4e4b\u95f4\u4e00\u76f4\u8fdb\u884c\u5bf9\u5c40\uff0c\u9884\u6d4b\u6700\u7ec8\u80fd\u8fbe\u5230\u7684\u6bb5\u4f4d").concat(o?"\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09":""),className:o?"font-italic font-lighter text-muted":""},r.a.createElement("span",null,u.PlayerMetadata.estimateStableLevel2(t,m),o&&"?")),r.a.createElement(M,{label:"\u5206\u6570\u671f\u671b",description:"\u5728".concat(u.GameMode[m],"\u4e4b\u95f4\u6bcf\u5c40\u83b7\u5f97\u70b9\u6570\u7684\u6570\u5b66\u671f\u671b\u503c").concat(b).concat(o?"\uff08\u6570\u636e\u91cf\u4e0d\u8db3\uff0c\u8ba1\u7b97\u7ed3\u679c\u53ef\u80fd\u6709\u8f83\u5927\u504f\u5dee\uff09":""),className:o?"font-italic font-lighter text-muted":""},r.a.createElement("span",null,s.toFixed(1),i?" (".concat(Math.abs(i).toFixed(0),")"):"",o&&"?")))}function S(){var e=Object(i.b)(),t=e.getMetadata();return Object(c.useEffect)((function(){D.then((function(e){return e.rebuild()}))})),Object(c.useEffect)(d.c,[!!t]),t&&t.nickname?r.a.createElement("div",null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,t.nickname)),r.a.createElement("h2",{className:"text-center"},"\u73a9\u5bb6\uff1a",t.nickname),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",{className:"text-center mb-4"},"\u6700\u8fd1\u8d70\u52bf"),r.a.createElement(O,{dataAdapter:e,playerId:t.id,aspect:6}),r.a.createElement("h3",{className:"text-center mt-4 mb-4"},"\u76f8\u5173\u6570\u636e"),r.a.createElement("dl",{className:"row"},r.a.createElement(M,{label:"\u8bb0\u5f55\u573a\u6570"},t.count),r.a.createElement(M,{label:"\u5f53\u524d\u7b49\u7ea7"},u.LevelWithDelta.getTag(t.level)),r.a.createElement(M,{label:"\u5f53\u524d\u5206\u6570"},u.LevelWithDelta.formatAdjustedScore(t.level)),t.extended_stats&&r.a.createElement(w,{maybeStats:t.extended_stats}),r.a.createElement(M,{label:"\u5e73\u5747\u987a\u4f4d"},t.avg_rank.toFixed(3)),r.a.createElement(L,{metadata:t}),r.a.createElement(M,{label:"\u88ab\u98de\u7387"},Object(d.a)(t.negative_rate)))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h3",{className:"text-center mb-4"},"\u7d2f\u8ba1\u6218\u7ee9"),r.a.createElement(h,{metadata:t}))),r.a.createElement(k,{showLevel:!0}),r.a.createElement(N,{effect:"solid",multiline:!0,place:"top"})):r.a.createElement(E.a,null)}}}]);
//# sourceMappingURL=10.f181ced6.chunk.js.map