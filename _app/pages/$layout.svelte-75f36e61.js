import{S as s,i as a,s as t,D as n,e as c,t as e,k as r,c as l,a as i,g as o,d as u,n as h,b as f,f as p,E as d,F as m,v as b,r as g,G as v,C as y,H as E}from"../chunks/index-8198fdb4.js";import{s as $,g as x,u as A}from"../chunks/navigation-0c355196.js";import"../chunks/singletons-b4851f37.js";function I(s){let a,t,n,m,b;return{c(){a=c("a"),t=e("Login"),n=r(),m=c("a"),b=e("Sign-up"),this.h()},l(s){a=l(s,"A",{type:!0,class:!0,href:!0});var c=i(a);t=o(c,"Login"),c.forEach(u),n=h(s),m=l(s,"A",{type:!0,class:!0,href:!0});var e=i(m);b=o(e,"Sign-up"),e.forEach(u),this.h()},h(){f(a,"type","button"),f(a,"class","btn btn-primary me-2"),f(a,"href","/sign-in"),f(m,"type","button"),f(m,"class","btn btn-secondary"),f(m,"href","/sign-up")},m(s,c){p(s,a,c),d(a,t),p(s,n,c),p(s,m,c),d(m,b)},p:y,d(s){s&&u(a),s&&u(n),s&&u(m)}}}function k(s){let a,t,n,r;return{c(){a=c("button"),t=e("Sign out"),this.h()},l(s){a=l(s,"BUTTON",{type:!0,class:!0});var n=i(a);t=o(n,"Sign out"),n.forEach(u),this.h()},h(){f(a,"type","button"),f(a,"class","btn btn-primary me-2")},m(c,e){p(c,a,e),d(a,t),n||(r=E(a,"click",s[1]),n=!0)},p:y,d(s){s&&u(a),n=!1,r()}}}function D(s){let a,t,v,y,E,$,x,A,D,S,j,V;function H(s,a){return s[0].token?k:I}let L=H(s),N=L(s);const T=s[3].default,w=n(T,s,s[2],null);return{c(){a=c("header"),t=c("div"),v=c("div"),y=c("a"),E=e("Aicacia Id"),$=r(),x=c("div"),A=r(),D=c("div"),N.c(),S=r(),j=c("main"),w&&w.c(),this.h()},l(s){a=l(s,"HEADER",{class:!0});var n=i(a);t=l(n,"DIV",{class:!0});var c=i(t);v=l(c,"DIV",{class:!0});var e=i(v);y=l(e,"A",{href:!0,type:!0,class:!0});var r=i(y);E=o(r,"Aicacia Id"),r.forEach(u),e.forEach(u),$=h(c),x=l(c,"DIV",{class:!0}),i(x).forEach(u),A=h(c),D=l(c,"DIV",{class:!0});var f=i(D);N.l(f),f.forEach(u),c.forEach(u),n.forEach(u),S=h(s),j=l(s,"MAIN",{class:!0});var p=i(j);w&&w.l(p),p.forEach(u),this.h()},h(){f(y,"href","/"),f(y,"type","button"),f(y,"class","btn btn-lg btn-primary"),f(v,"class","d-flex align-items-center"),f(x,"class","nav col-auto me-auto"),f(D,"class","text-end"),f(t,"class","d-flex flex-wrap align-items-center justify-content-center"),f(a,"class","container"),f(j,"class","container")},m(s,n){p(s,a,n),d(a,t),d(t,v),d(v,y),d(y,E),d(t,$),d(t,x),d(t,A),d(t,D),N.m(D,null),p(s,S,n),p(s,j,n),w&&w.m(j,null),V=!0},p(s,[a]){L===(L=H(s))&&N?N.p(s,a):(N.d(1),N=L(s),N&&(N.c(),N.m(D,null))),w&&w.p&&4&a&&m(w,T,s,s[2],a,null,null)},i(s){V||(b(w,s),V=!0)},o(s){g(w,s),V=!1},d(s){s&&u(a),N.d(),s&&u(S),s&&u(j),w&&w.d(s)}}}function S(s,a,t){let n;v(s,A,(s=>t(0,n=s)));let{$$slots:c={},$$scope:e}=a;return s.$$set=s=>{"$$scope"in s&&t(2,e=s.$$scope)},[n,function(){$(),x("/sign-in")},e,c]}export default class extends s{constructor(s){super(),a(this,s,S,D,t,{})}}