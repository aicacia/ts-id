import{S as s,i as a,s as t,D as n,e as c,t as e,k as l,c as r,a as i,g as o,d as u,n as h,b as f,f as p,E as d,F as m,v as b,r as g,G as v,C as E,H as y}from"../chunks/index-128c958e.js";import{s as $,g as x,u as k}from"../chunks/navigation-22e30b47.js";import"../chunks/singletons-2bbdf6b6.js";function A(s){let a,t,n,m,b;return{c(){a=c("a"),t=e("Login"),n=l(),m=c("a"),b=e("Sign-up"),this.h()},l(s){a=r(s,"A",{type:!0,class:!0,href:!0});var c=i(a);t=o(c,"Login"),c.forEach(u),n=h(s),m=r(s,"A",{type:!0,class:!0,href:!0});var e=i(m);b=o(e,"Sign-up"),e.forEach(u),this.h()},h(){f(a,"type","button"),f(a,"class","btn btn-primary me-2"),f(a,"href","/sign-in"),f(m,"type","button"),f(m,"class","btn btn-secondary"),f(m,"href","/sign-up")},m(s,c){p(s,a,c),d(a,t),p(s,n,c),p(s,m,c),d(m,b)},p:E,d(s){s&&u(a),s&&u(n),s&&u(m)}}}function j(s){let a,t,n,l;return{c(){a=c("button"),t=e("Sign out"),this.h()},l(s){a=r(s,"BUTTON",{type:!0,class:!0});var n=i(a);t=o(n,"Sign out"),n.forEach(u),this.h()},h(){f(a,"type","button"),f(a,"class","btn btn-primary me-2")},m(c,e){p(c,a,e),d(a,t),n||(l=y(a,"click",s[1]),n=!0)},p:E,d(s){s&&u(a),n=!1,l()}}}function I(s){let a,t,v,E,y,$,x,k,I,D,S,H,L;function V(s,a){return s[0].token?j:A}let N=V(s),T=N(s);const U=s[3].default,w=n(U,s,s[2],null);return{c(){a=c("header"),t=c("div"),v=c("div"),E=c("a"),y=c("h3"),$=e("Aicacia Id"),x=l(),k=c("ul"),I=l(),D=c("div"),T.c(),S=l(),H=c("main"),w&&w.c(),this.h()},l(s){a=r(s,"HEADER",{class:!0});var n=i(a);t=r(n,"DIV",{class:!0});var c=i(t);v=r(c,"DIV",{class:!0});var e=i(v);E=r(e,"A",{href:!0,class:!0});var l=i(E);y=r(l,"H3",{});var f=i(y);$=o(f,"Aicacia Id"),f.forEach(u),l.forEach(u),x=h(e),k=r(e,"UL",{class:!0}),i(k).forEach(u),I=h(e),D=r(e,"DIV",{class:!0});var p=i(D);T.l(p),p.forEach(u),e.forEach(u),c.forEach(u),n.forEach(u),S=h(s),H=r(s,"MAIN",{class:!0});var d=i(H);w&&w.l(d),d.forEach(u),this.h()},h(){f(E,"href","/"),f(E,"class","d-flex align-items-center mb-2 mb-lg-0 text-decoration-none text-black"),f(k,"class","nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"),f(D,"class","text-end"),f(v,"class","d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"),f(t,"class","container"),f(a,"class","p-3"),f(H,"class","container")},m(s,n){p(s,a,n),d(a,t),d(t,v),d(v,E),d(E,y),d(y,$),d(v,x),d(v,k),d(v,I),d(v,D),T.m(D,null),p(s,S,n),p(s,H,n),w&&w.m(H,null),L=!0},p(s,[a]){N===(N=V(s))&&T?T.p(s,a):(T.d(1),T=N(s),T&&(T.c(),T.m(D,null))),w&&w.p&&4&a&&m(w,U,s,s[2],a,null,null)},i(s){L||(b(w,s),L=!0)},o(s){g(w,s),L=!1},d(s){s&&u(a),T.d(),s&&u(S),s&&u(H),w&&w.d(s)}}}function D(s,a,t){let n;v(s,k,(s=>t(0,n=s)));let{$$slots:c={},$$scope:e}=a;return s.$$set=s=>{"$$scope"in s&&t(2,e=s.$$scope)},[n,function(){$(),x("/sign-in")},e,c]}export default class extends s{constructor(s){super(),a(this,s,D,I,t,{})}}
