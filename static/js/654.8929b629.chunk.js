"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[654],{480:function(n,e,t){t.d(e,{Ej:function(){return p},IQ:function(){return l},Jh:function(){return d},XT:function(){return u},qP:function(){return f}});var r=t(861),a=t(757),c=t.n(a),i=t(243),o="https://api.themoviedb.org/3/",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZTQzYmM1YWJkNjJiY2U0YTQxMjI1MGNhMmI0YSIsInN1YiI6IjY0OGRmMWZjYzNjODkxMDBlYjMyOGIyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.na6QWvyUcstLt3R2SMZMeFGFAjRDN7q7NqBOmfFB0qU"}},u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/movie/day?language=en-US"),s);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"?language=en-US"),s);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/credits?language=en-US"),s);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(e,"/reviews?language=en-US"),s);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),s);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},654:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,a,c,i,o,s,u,p,l,d=t(861),f=t(439),h=t(757),x=t.n(h),v=t(689),g=t(87),m=t(791),j=t(480),Z=t(168),w=t(444),b=w.ZP.section(r||(r=(0,Z.Z)(["\n  padding: 20px;\n  background-color: #fff;\n"]))),k=w.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n  border-bottom: 3px solid grey;\n  padding: 10px 0;\n  img {\n    width: 250px;\n  }\n"]))),y=w.ZP.h1(c||(c=(0,Z.Z)(["\n  margin-bottom: 8px;\n  font-size: 34px;\n  font-weight: 700;\n  color: black;\n"]))),S=w.ZP.h2(i||(i=(0,Z.Z)(["\n  margin-bottom: 8px;\n  font-size: 28px;\n  font-weight: 700;\n  color: black;\n"]))),I=w.ZP.h3(o||(o=(0,Z.Z)(["\n  margin-bottom: 8px;\n  font-size: 22px;\n  font-weight: 700;\n  color: black;\n"]))),U=w.ZP.h4(s||(s=(0,Z.Z)(["\n  font-weight: 600;\n  color: black;\n"]))),J=w.ZP.p(u||(u=(0,Z.Z)(["\n  margin-bottom: 20px;\n  color: black;\n"]))),M=w.ZP.ul(p||(p=(0,Z.Z)(["\n  li {\n    margin-left: 30px;\n    margin-top: 8px;\n    font-weight: 600;\n  }\n"]))),P=w.ZP.div(l||(l=(0,Z.Z)(["\n  padding: 10px 0;\n  border-bottom: 3px solid grey;\n  img {\n    outline: 1px solid red;\n  }\n"]))),N=t(194),O=t(184),Y=function(){var n,e,t=(0,v.UO)().id,r=(0,v.TH)(),a=(0,m.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),c=(0,m.useState)([]),i=(0,f.Z)(c,2),o=i[0],s=i[1],u=(0,m.useState)([]),p=(0,f.Z)(u,2),l=p[0],h=p[1],Z=(0,m.useState)(""),w=(0,f.Z)(Z,2),Y=w[0],_=w[1],z=(0,m.useState)(""),G=(0,f.Z)(z,2),W=G[0],B=G[1],Q=(0,m.useState)(null),q=(0,f.Z)(Q,2),C=q[0],R=q[1],T=(0,m.useState)("idle"),E=(0,f.Z)(T,2),F=E[0],L=E[1];(0,m.useEffect)((function(){var n=function(){var n=(0,d.Z)(x().mark((function n(){var e,r,a,c;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,j.Ej)(t);case 3:e=n.sent,r=e.genres,a=e.release_date.split("-")[0],c=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):N,e===[]?(R("\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u043e \u0444\u0456\u043b\u044c\u043c\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u044f"),L("rejected")):(h(r),s(e),_(a),B(c),L("resolved")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),R(n.t0.message),L("rejected");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]);var A=o.title,D=o.overview,X=o.vote_average;return(0,O.jsxs)(b,{children:[(0,O.jsx)(g.OL,{to:a.current,children:"Back"}),"rejected"===F&&(0,O.jsx)("p",{children:C}),"resolved"===F&&(0,O.jsxs)(k,{children:[(0,O.jsx)("img",{src:W,alt:A}),(0,O.jsxs)("div",{children:[(0,O.jsxs)(y,{children:[A," ",(0,O.jsxs)("span",{children:[" (",Y,")"]})]}),(0,O.jsxs)(J,{children:["User Score: ",(10*X).toFixed(0)," %"]}),(0,O.jsx)(S,{children:"Overview"}),(0,O.jsx)(J,{children:D}),(0,O.jsx)(I,{children:"Genres"}),(0,O.jsx)(J,{children:l.map((function(n){return n.name})).join(" / ")})]})]}),"resolved"===F&&(0,O.jsxs)(P,{children:[(0,O.jsx)(U,{children:"Additional information"}),(0,O.jsxs)(M,{children:[(0,O.jsx)("li",{children:(0,O.jsx)(g.rU,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(g.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,O.jsx)(m.Suspense,{fallback:(0,O.jsx)("div",{children:"Loading..."}),children:(0,O.jsx)(v.j3,{})})]})}},194:function(n,e,t){n.exports=t.p+"static/media/avatar-picture.7ffcf71e4876d305875c.png"}}]);
//# sourceMappingURL=654.8929b629.chunk.js.map