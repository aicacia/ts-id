import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f as p,E as f,h as i,k as l,l as d,n as m,C as h}from"./chunks/index-8198fdb4.js";function k(s){let r,a,l=s[1].stack+"";return{c(){r=t("pre"),a=e(l)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,l),t.forEach(u)},m(s,t){p(s,r,t),f(r,a)},p(s,r){2&r&&l!==(l=s[1].stack+"")&&i(a,l)},d(s){s&&u(r)}}}function E(s){let r,a,E,x,g,v,P,$=s[1].message+"",b=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),E=l(),x=t("p"),g=e($),v=l(),b&&b.c(),P=d()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),E=m(t),x=o(t,"P",{});var p=n(x);g=c(p,$),p.forEach(u),v=m(t),b&&b.l(t),P=d()},m(s,t){p(s,r,t),f(r,a),p(s,E,t),p(s,x,t),f(x,g),p(s,v,t),b&&b.m(s,t),p(s,P,t)},p(s,[r]){1&r&&i(a,s[0]),2&r&&$!==($=s[1].message+"")&&i(g,$),s[1].stack?b?b.p(s,r):(b=k(s),b.c(),b.m(P.parentNode,P)):b&&(b.d(1),b=null)},i:h,o:h,d(s){s&&u(r),s&&u(E),s&&u(x),s&&u(v),b&&b.d(s),s&&u(P)}}}function x({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,E,a,{status:0,error:1})}}export{x as load};