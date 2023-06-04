var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(t,n,i){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}function c(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function g(){return M(" ")}function d(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function N(e){return function(t){return t.stopPropagation(),e.call(this,t)}}function j(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e,t,n){t in e?e[t]=n:j(e,t,n)}let I;function m(e){I=e}function y(e){(function(){if(!I)throw new Error("Function called outside component initialization");return I})().$$.on_mount.push(e)}function f(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}const x=[],h=[],p=[],T=[],z=Promise.resolve();let A=!1;function k(e){p.push(e)}let L=!1;const w=new Set;function b(){if(!L){L=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];m(t),S(t.$$)}for(m(null),x.length=0;h.length;)h.pop()();for(let e=0;e<p.length;e+=1){const t=p[e];w.has(t)||(w.add(t),t())}p.length=0}while(x.length);for(;T.length;)T.pop()();A=!1,L=!1,w.clear()}}function S(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const O=new Set;function v(e,t){e&&e.i&&(O.delete(e),e.i(t))}function E(e,t,n,i){if(e&&e.o){if(O.has(e))return;O.add(e),(void 0).c.push(()=>{O.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function Q(e,t){e.d(1),t.delete(e.key)}function C(e,t,n,i,s,o,l,c,r,a,u,M){let g=e.length,d=o.length,N=g;const j={};for(;N--;)j[e[N].key]=N;const D=[],I=new Map,m=new Map;for(N=d;N--;){const e=M(s,o,N),c=n(e);let r=l.get(c);r?i&&r.p(e,t):(r=a(c,e),r.c()),I.set(c,D[N]=r),c in j&&m.set(c,Math.abs(N-j[c]))}const y=new Set,f=new Set;function x(e){v(e,1),e.m(c,u),l.set(e.key,e),u=e.first,d--}for(;g&&d;){const t=D[d-1],n=e[g-1],i=t.key,s=n.key;t===n?(u=t.first,g--,d--):I.has(s)?!l.has(i)||y.has(i)?x(t):f.has(s)?g--:m.get(i)>m.get(s)?(f.add(i),x(t)):(y.add(s),g--):(r(n,l),g--)}for(;g--;){const t=e[g];I.has(t.key)||r(t,l)}for(;d;)x(D[d-1]);return D}function U(e){e&&e.c()}function Z(e,n,o){const{fragment:l,on_mount:c,on_destroy:r,after_update:a}=e.$$;l&&l.m(n,o),k(()=>{const n=c.map(t).filter(s);r?r.push(...n):i(n),e.$$.on_mount=[]}),a.forEach(k)}function P(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(x.push(e),A||(A=!0,z.then(b)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $(t,s,o,l,c,r,u=[-1]){const M=I;m(t);const g=s.props||{},d=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(M?M.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let N=!1;if(d.ctx=o?o(t,g,(e,n,...i)=>{const s=i.length?i[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),N&&Y(t,e)),n}):[],d.update(),N=!0,i(d.before_update),d.fragment=!!l&&l(d.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);d.fragment&&d.fragment.l(e),e.forEach(a)}else d.fragment&&d.fragment.c();s.intro&&v(t.$$.fragment),Z(t,s.target,s.anchor),b()}m(M)}class G{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const H=[];const B=function(t,n=e){let i;const s=[];function l(e){if(o(t,e)&&(t=e,i)){const e=!H.length;for(let e=0;e<s.length;e+=1){const n=s[e];n[1](),H.push(n,t)}if(e){for(let e=0;e<H.length;e+=2)H[e][0](H[e+1]);H.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(o,c=e){const r=[o,c];return s.push(r),1===s.length&&(i=n(l)||e),o(t),()=>{const e=s.indexOf(r);-1!==e&&s.splice(e,1),0===s.length&&(i(),i=null)}}}}("about");function W(t){let n,s,o,l,M,N,D,I,m,y,f,x,h,p,T,z,A,k,L,w,b,S,O,v,E,Q,C,U,Z,P,Y,$,G,H,B,W,X,V,F,K;return{c(){n=u("main"),s=u("div"),o=u("h1"),l=u("a"),l.textContent=""+R,M=g(),N=u("h2"),N.textContent=""+_,D=g(),I=u("p"),I.textContent=""+J,m=g(),y=u("nav"),f=u("ul"),x=u("li"),h=u("a"),p=u("span"),p.innerHTML='<span class="line svelte-13wj3dj"></span> \n                            <span>About</span>',z=g(),A=u("li"),k=u("a"),L=u("span"),L.innerHTML='<span class="line svelte-13wj3dj"></span> \n                            <span>Experience</span>',b=g(),S=u("li"),O=u("a"),v=u("span"),v.innerHTML='<span class="line svelte-13wj3dj"></span> \n                            <span>Projects</span>',Q=g(),C=u("div"),U=u("a"),Z=u("img"),Y=g(),$=u("a"),G=u("img"),B=g(),W=u("a"),X=u("img"),j(l,"href","/"),j(o,"class","text-4xl font-bold tracking-tight text-white sm:text-5xl"),j(N,"class","mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl"),j(I,"class","mt-4 max-w-md leading-normal text-light-slate"),j(p,"class","nav-text text-xs font-bold uppercase tracking-widest text-lightest-slate group-hover:text-slate-200 group-focus-visible:text-slate-200"),j(h,"class",T="group flex items-center py-3 "+("about"===t[0]||!t[0]&&"about"===t[1]?"active-text":"")+" svelte-13wj3dj"),j(h,"href","#about"),j(L,"class","nav-text text-xs font-bold uppercase tracking-widest text-lightest-slate group-hover:text-slate-200 group-focus-visible:text-slate-200"),j(k,"class",w="group flex items-center py-3 "+("experience"===t[0]||!t[0]&&"experience"===t[1]?"active-text":"")+" svelte-13wj3dj"),j(k,"href","#experience"),j(v,"class","nav-text text-xs font-bold uppercase tracking-widest text-lightest-slate group-hover:text-slate-200 group-focus-visible:text-slate-200"),j(O,"class",E="group flex items-center py-3 "+("projects"===t[0]||!t[0]&&"projects"===t[1]?"active-text":"")+" svelte-13wj3dj"),j(O,"href","#projects"),j(f,"class","mt-16 w-max"),j(y,"class","nav hidden lg:block"),j(y,"aria-label","In-page jump links"),j(Z,"class","icon svelte-13wj3dj"),Z.src!==(P="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgNDkuNCA1MTIgMzk5LjQyMDAwMDAwMDAwMDEiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzQuOTEgNDQ4LjgxOGg4MS40NTRWMjUxTDAgMTYzLjcyN1Y0MTMuOTFjMCAxOS4yODcgMTUuNjIyIDM0LjkxIDM0LjkxIDM0LjkxeiIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGQ9Ik0zOTUuNjM2IDQ0OC44MThoODEuNDU1YzE5LjI4NyAwIDM0LjkwOS0xNS42MjIgMzQuOTA5LTM0LjkwOVYxNjMuNzI3TDM5NS42MzYgMjUxeiIgZmlsbD0iIzM0YTg1MyIvPjxwYXRoIGQ9Ik0zOTUuNjM2IDk5LjcyN1YyNTFMNTEyIDE2My43Mjd2LTQ2LjU0NWMwLTQzLjE0Mi00OS4yNS02Ny43ODItODMuNzgyLTQxLjg5MXoiIGZpbGw9IiNmYmJjMDQiLz48L2c+PHBhdGggZD0iTTExNi4zNjQgMjUxVjk5LjcyN0wyNTYgMjA0LjQ1NSAzOTUuNjM2IDk5LjcyN1YyNTFMMjU2IDM1NS43Mjd6IiBmaWxsPSIjZWE0MzM1Ii8+PHBhdGggZD0iTTAgMTE3LjE4MnY0Ni41NDVMMTE2LjM2NCAyNTFWOTkuNzI3TDgzLjc4MiA3NS4yOTFDNDkuMjUgNDkuNCAwIDc0LjA0IDAgMTE3LjE4eiIgZmlsbD0iI2M1MjIxZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg==")&&j(Z,"src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgNDkuNCA1MTIgMzk5LjQyMDAwMDAwMDAwMDEiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzQuOTEgNDQ4LjgxOGg4MS40NTRWMjUxTDAgMTYzLjcyN1Y0MTMuOTFjMCAxOS4yODcgMTUuNjIyIDM0LjkxIDM0LjkxIDM0LjkxeiIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGQ9Ik0zOTUuNjM2IDQ0OC44MThoODEuNDU1YzE5LjI4NyAwIDM0LjkwOS0xNS42MjIgMzQuOTA5LTM0LjkwOVYxNjMuNzI3TDM5NS42MzYgMjUxeiIgZmlsbD0iIzM0YTg1MyIvPjxwYXRoIGQ9Ik0zOTUuNjM2IDk5LjcyN1YyNTFMNTEyIDE2My43Mjd2LTQ2LjU0NWMwLTQzLjE0Mi00OS4yNS02Ny43ODItODMuNzgyLTQxLjg5MXoiIGZpbGw9IiNmYmJjMDQiLz48L2c+PHBhdGggZD0iTTExNi4zNjQgMjUxVjk5LjcyN0wyNTYgMjA0LjQ1NSAzOTUuNjM2IDk5LjcyN1YyNTFMMjU2IDM1NS43Mjd6IiBmaWxsPSIjZWE0MzM1Ii8+PHBhdGggZD0iTTAgMTE3LjE4MnY0Ni41NDVMMTE2LjM2NCAyNTFWOTkuNzI3TDgzLjc4MiA3NS4yOTFDNDkuMjUgNDkuNCAwIDc0LjA0IDAgMTE3LjE4eiIgZmlsbD0iI2M1MjIxZiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="),j(Z,"alt","gmail"),j(U,"href","mailto:mingyuninja@sillylabs.xyz?subject=Example%20Subject&body=Hello%20World"),j(U,"target","_blank"),j(U,"rel","noopener noreferrer"),j(G,"class","icon svelte-13wj3dj"),G.src!==(H="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjU2IDQxMS4xMkwwIDIwMi42NjcgMjU2IDB6IiBmaWxsPSIjNDI4NWY0Ii8+PHBhdGggZD0iTTI1NiA0MTEuMTJsMjU2LTIwOC40NTNMMjU2IDB6IiBmaWxsPSIjMzU2YWMzIi8+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMzYyLjY2NyIgZmlsbD0iI2EwYzNmZiIgcj0iMTQ5LjMzMyIvPjxwYXRoIGQ9Ik0xMjEuMDM3IDI5OC42NjdjMjMuOTY4LTUwLjQ1MyA3NS4zOTItODUuMzM0IDEzNC45NjMtODUuMzM0czExMC45OTUgMzQuODgxIDEzNC45NjMgODUuMzM0SDEyMS4wMzd6IiBmaWxsPSIjNzZhN2ZhIi8+CjwvZz4KPC9zdmc+")&&j(G,"src","data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjU2IDQxMS4xMkwwIDIwMi42NjcgMjU2IDB6IiBmaWxsPSIjNDI4NWY0Ii8+PHBhdGggZD0iTTI1NiA0MTEuMTJsMjU2LTIwOC40NTNMMjU2IDB6IiBmaWxsPSIjMzU2YWMzIi8+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMzYyLjY2NyIgZmlsbD0iI2EwYzNmZiIgcj0iMTQ5LjMzMyIvPjxwYXRoIGQ9Ik0xMjEuMDM3IDI5OC42NjdjMjMuOTY4LTUwLjQ1MyA3NS4zOTItODUuMzM0IDEzNC45NjMtODUuMzM0czExMC45OTUgMzQuODgxIDEzNC45NjMgODUuMzM0SDEyMS4wMzd6IiBmaWxsPSIjNzZhN2ZhIi8+CjwvZz4KPC9zdmc+"),j(G,"alt","scholar"),j($,"href","https://scholar.google.com/citations?user=V69oGVEAAAAJ&hl=en"),j($,"target","_blank"),j($,"rel","noopener noreferrer"),j(X,"class","icon svelte-13wj3dj"),X.src!==(V="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMi40MTE1IDRDMTYuNzE0MSA0IDQgMTYuNzE0MSA0IDMyLjQxMTVDNCA0NC45ODM1IDEyLjEzMjggNTUuNjAyMyAyMy40MjYzIDU5LjM2NjlDMjQuODQ2OSA1OS42MTU1IDI1LjM3OTYgNTguNzYzMSAyNS4zNzk2IDU4LjAxNzNDMjUuMzc5NiA1Ny4zNDI1IDI1LjM0NDEgNTUuMTA1MSAyNS4zNDQxIDUyLjcyNTdDMTguMjA1NyA1NC4wMzk3IDE2LjM1OSA1MC45ODU1IDE1Ljc5MDggNDkuMzg3M0MxNS40NzExIDQ4LjU3MDUgMTQuMDg2MSA0Ni4wNDkgMTIuODc4NiA0NS4zNzQyQzExLjg4NDIgNDQuODQxNSAxMC40NjM2IDQzLjUyNzUgMTIuODQzMSA0My40OTE5QzE1LjA4MDUgNDMuNDU2NCAxNi42Nzg2IDQ1LjU1MTggMTcuMjExMyA0Ni40MDQxQzE5Ljc2ODQgNTAuNzAxNCAyMy44NTI1IDQ5LjQ5MzkgMjUuNDg2MiA0OC43NDgxQzI1LjczNDggNDYuOTAxMyAyNi40ODA2IDQ1LjY1ODMgMjcuMjk3NCA0NC45NDhDMjAuOTc1OSA0NC4yMzc3IDE0LjM3MDIgNDEuNzg3MyAxNC4zNzAyIDMwLjkxOTlDMTQuMzcwMiAyNy44MzAxIDE1LjQ3MTEgMjUuMjczMSAxNy4yODI0IDIzLjI4NDNDMTYuOTk4MiAyMi41NzQgMTYuMDAzOCAxOS42NjE4IDE3LjU2NjUgMTUuNzU1MkMxNy41NjY1IDE1Ljc1NTIgMTkuOTQ1OSAxNS4wMDk0IDI1LjM3OTYgMTguNjY3NEMyNy42NTI1IDE4LjAyODIgMzAuMDY3NSAxNy43MDg1IDMyLjQ4MjUgMTcuNzA4NUMzNC44OTc1IDE3LjcwODUgMzcuMzEyNSAxOC4wMjgyIDM5LjU4NTQgMTguNjY3NEM0NS4wMTkxIDE0Ljk3MzkgNDcuMzk4NSAxNS43NTUyIDQ3LjM5ODUgMTUuNzU1MkM0OC45NjEyIDE5LjY2MTggNDcuOTY2OCAyMi41NzQgNDcuNjgyNiAyMy4yODQzQzQ5LjQ5MzkgMjUuMjczMSA1MC41OTQ4IDI3Ljc5NDYgNTAuNTk0OCAzMC45MTk5QzUwLjU5NDggNDEuODIyOCA0My45NTM2IDQ0LjIzNzcgMzcuNjMyMSA0NC45NDhDMzguNjYyIDQ1LjgzNTkgMzkuNTQ5OSA0Ny41NDA2IDM5LjU0OTkgNTAuMjA0MkMzOS41NDk5IDU0LjAwNDIgMzkuNTE0MyA1Ny4wNTg0IDM5LjUxNDMgNTguMDE3M0MzOS41MTQzIDU4Ljc2MzEgNDAuMDQ3MSA1OS42NTEgNDEuNDY3NiA1OS4zNjY5QzQ3LjEwNzcgNTcuNDYyNiA1Mi4wMDg3IDUzLjgzNzcgNTUuNDgwOCA0OS4wMDIzQzU4Ljk1MjkgNDQuMTY2OCA2MC44MjEyIDM4LjM2NDQgNjAuODIyOSAzMi40MTE1QzYwLjgyMjkgMTYuNzE0MSA0OC4xMDg4IDQgMzIuNDExNSA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==")&&j(X,"src","data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMi40MTE1IDRDMTYuNzE0MSA0IDQgMTYuNzE0MSA0IDMyLjQxMTVDNCA0NC45ODM1IDEyLjEzMjggNTUuNjAyMyAyMy40MjYzIDU5LjM2NjlDMjQuODQ2OSA1OS42MTU1IDI1LjM3OTYgNTguNzYzMSAyNS4zNzk2IDU4LjAxNzNDMjUuMzc5NiA1Ny4zNDI1IDI1LjM0NDEgNTUuMTA1MSAyNS4zNDQxIDUyLjcyNTdDMTguMjA1NyA1NC4wMzk3IDE2LjM1OSA1MC45ODU1IDE1Ljc5MDggNDkuMzg3M0MxNS40NzExIDQ4LjU3MDUgMTQuMDg2MSA0Ni4wNDkgMTIuODc4NiA0NS4zNzQyQzExLjg4NDIgNDQuODQxNSAxMC40NjM2IDQzLjUyNzUgMTIuODQzMSA0My40OTE5QzE1LjA4MDUgNDMuNDU2NCAxNi42Nzg2IDQ1LjU1MTggMTcuMjExMyA0Ni40MDQxQzE5Ljc2ODQgNTAuNzAxNCAyMy44NTI1IDQ5LjQ5MzkgMjUuNDg2MiA0OC43NDgxQzI1LjczNDggNDYuOTAxMyAyNi40ODA2IDQ1LjY1ODMgMjcuMjk3NCA0NC45NDhDMjAuOTc1OSA0NC4yMzc3IDE0LjM3MDIgNDEuNzg3MyAxNC4zNzAyIDMwLjkxOTlDMTQuMzcwMiAyNy44MzAxIDE1LjQ3MTEgMjUuMjczMSAxNy4yODI0IDIzLjI4NDNDMTYuOTk4MiAyMi41NzQgMTYuMDAzOCAxOS42NjE4IDE3LjU2NjUgMTUuNzU1MkMxNy41NjY1IDE1Ljc1NTIgMTkuOTQ1OSAxNS4wMDk0IDI1LjM3OTYgMTguNjY3NEMyNy42NTI1IDE4LjAyODIgMzAuMDY3NSAxNy43MDg1IDMyLjQ4MjUgMTcuNzA4NUMzNC44OTc1IDE3LjcwODUgMzcuMzEyNSAxOC4wMjgyIDM5LjU4NTQgMTguNjY3NEM0NS4wMTkxIDE0Ljk3MzkgNDcuMzk4NSAxNS43NTUyIDQ3LjM5ODUgMTUuNzU1MkM0OC45NjEyIDE5LjY2MTggNDcuOTY2OCAyMi41NzQgNDcuNjgyNiAyMy4yODQzQzQ5LjQ5MzkgMjUuMjczMSA1MC41OTQ4IDI3Ljc5NDYgNTAuNTk0OCAzMC45MTk5QzUwLjU5NDggNDEuODIyOCA0My45NTM2IDQ0LjIzNzcgMzcuNjMyMSA0NC45NDhDMzguNjYyIDQ1LjgzNTkgMzkuNTQ5OSA0Ny41NDA2IDM5LjU0OTkgNTAuMjA0MkMzOS41NDk5IDU0LjAwNDIgMzkuNTE0MyA1Ny4wNTg0IDM5LjUxNDMgNTguMDE3M0MzOS41MTQzIDU4Ljc2MzEgNDAuMDQ3MSA1OS42NTEgNDEuNDY3NiA1OS4zNjY5QzQ3LjEwNzcgNTcuNDYyNiA1Mi4wMDg3IDUzLjgzNzcgNTUuNDgwOCA0OS4wMDIzQzU4Ljk1MjkgNDQuMTY2OCA2MC44MjEyIDM4LjM2NDQgNjAuODIyOSAzMi40MTE1QzYwLjgyMjkgMTYuNzE0MSA0OC4xMDg4IDQgMzIuNDExNSA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="),j(X,"alt","github"),j(W,"href","https://github.com/MingyuNinja"),j(W,"target","_blank"),j(W,"rel","noopener noreferrer"),j(C,"id","title-socials"),j(C,"class","flex space-x-4 mt-16"),j(C,"data-animate",""),j(s,"class","my-4 mx-auto max-w-3xl"),j(n,"class","mx-6 text-left svelte-13wj3dj")},m(e,i){r(e,n,i),c(n,s),c(s,o),c(o,l),c(s,M),c(s,N),c(s,D),c(s,I),c(s,m),c(s,y),c(y,f),c(f,x),c(x,h),c(h,p),c(f,z),c(f,A),c(A,k),c(k,L),c(f,b),c(f,S),c(S,O),c(O,v),c(s,Q),c(s,C),c(C,U),c(U,Z),c(C,Y),c(C,$),c($,G),c(C,B),c(C,W),c(W,X),F||(K=[d(h,"mouseenter",t[2]),d(h,"mouseleave",t[3]),d(k,"mouseenter",t[4]),d(k,"mouseleave",t[5]),d(O,"mouseenter",t[6]),d(O,"mouseleave",t[7])],F=!0)},p(e,[t]){3&t&&T!==(T="group flex items-center py-3 "+("about"===e[0]||!e[0]&&"about"===e[1]?"active-text":"")+" svelte-13wj3dj")&&j(h,"class",T),3&t&&w!==(w="group flex items-center py-3 "+("experience"===e[0]||!e[0]&&"experience"===e[1]?"active-text":"")+" svelte-13wj3dj")&&j(k,"class",w),3&t&&E!==(E="group flex items-center py-3 "+("projects"===e[0]||!e[0]&&"projects"===e[1]?"active-text":"")+" svelte-13wj3dj")&&j(O,"class",E)},i:e,o:e,d(e){e&&a(n),F=!1,i(K)}}}let R="Mingyu Park",_="Master Candidate, Seoul National University ECE",J="Dedicated to democratizing high-tech innovation.";function X(e,t,n){let i;l(e,B,e=>n(1,i=e));let s=null;return[s,i,()=>n(0,s="about"),()=>n(0,s=null),()=>n(0,s="experience"),()=>n(0,s=null),()=>n(0,s="projects"),()=>n(0,s=null)]}class V extends G{constructor(e){super(),$(this,e,X,W,o,{})}}const F=[{text:"In 2019, my journey as a high-tech enthusiast took flight when I led Northeast Asia's sole team in an international rocket competition. This milestone sparked my passion for leading cutting-edge teams, a journey that has since extended from rocket science to the captivating world of machine learning."},{text:"As it stands, I am a Military Science and Technology Researcher at the",link:"https://www.kma.ac.kr:461/kma/427/subview.do",linkText:"Korea Military Academy",afterLinkText:", pioneering the application of AI in defense. Simultaneously, I'm immersing myself in advanced studies as a master's candidate in ",secondLink:"https://ece.snu.ac.kr/en",secondLinkText:"SNU ECE",afterSecondLinkText:", focusing on algorithms for decision-making under uncertainty."},{text:"Beyond work, my personal interests are as diverse as they are intriguing. I'm an avid reader with a deep admiration for",link:"https://www.andyweirauthor.com/",linkText:"Andy Weir",afterLinkText:", and I love spending time exploring",secondLink:"https://www.reddit.com/r/LocalLLaMA/",secondLinkText:"open-source AI communities",afterSecondLinkText:"."},{text:"This page design is just a linear interpolation of",link:"https://brittanychiang.com/",linkText:"Brittany Chiang's",afterLinkText:"and",secondLink:"https://qewer.dev/",secondLinkText:"qewer33's page",afterSecondLinkText:"."}];function K(e,t,n){const i=e.slice();return i[1]=t[n],i[3]=n,i}function q(t,n){let i,s,o,l,d,N=n[1].text+"",D=n[1].link&&function(t){let n,i,s,o,l=t[1].linkText+"",d=t[1].afterLinkText+"";return{c(){n=u("a"),i=M(l),s=g(),o=M(d),j(n,"class","highlight text-white hover:text-blue svelte-wjb0h3"),j(n,"href",t[1].link),j(n,"target","_blank")},m(e,t){r(e,n,t),c(n,i),r(e,s,t),r(e,o,t)},p:e,d(e){e&&a(n),e&&a(s),e&&a(o)}}}(n),I=n[1].secondLink&&function(t){let n,i,s,o,l=t[1].secondLinkText+"",d=t[1].afterSecondLinkText+"";return{c(){n=u("a"),i=M(l),s=g(),o=M(d),j(n,"class","highlight text-white hover:text-blue svelte-wjb0h3"),j(n,"href",t[1].secondLink),j(n,"target","_blank")},m(e,t){r(e,n,t),c(n,i),r(e,s,t),r(e,o,t)},p:e,d(e){e&&a(n),e&&a(s),e&&a(o)}}}(n);return{key:t,first:null,c(){i=u("p"),s=M(N),o=g(),D&&D.c(),l=g(),I&&I.c(),d=g(),j(i,"class","mb-4"),this.first=i},m(e,t){r(e,i,t),c(i,s),c(i,o),D&&D.m(i,null),c(i,l),I&&I.m(i,null),c(i,d)},p(e,t){e[1].link&&D.p(e,t),e[1].secondLink&&I.p(e,t)},d(e){e&&a(i),D&&D.d(),I&&I.d()}}}function ee(t){let n,i,s=[],o=new Map,l=F;const M=e=>e[3];for(let e=0;e<l.length;e+=1){let n=K(t,l,e),i=M(n);o.set(i,s[e]=q(i,n))}return{c(){n=u("main"),i=u("div");for(let e=0;e<s.length;e+=1)s[e].c();j(i,"id",t[0]),j(i,"class","my-4 mx-auto max-w-3xl text-light-slate"),j(n,"class","mx-6 text-left svelte-wjb0h3")},m(e,t){r(e,n,t),c(n,i);for(let e=0;e<s.length;e+=1)s[e].m(i,null)},p(e,[t]){if(0&t){s=C(s,t,M,1,e,F,o,i,Q,q,null,K)}1&t&&j(i,"id",e[0])},i:e,o:e,d(e){e&&a(n);for(let e=0;e<s.length;e+=1)s[e].d()}}}function te(e,t,n){let{id:i}=t;return e.$$set=e=>{"id"in e&&n(0,i=e.id)},[i]}class ne extends G{constructor(e){super(),$(this,e,te,ee,o,{id:0})}}const ie=[{id:1,title:"Military Science and Technology Researcher, Korea Military Academy (KMA)",duration:"2022 - Present",text:"Developed proof-of-concept for surveilence automation using MOT module and mobile robots, including video restoration for survelience cameras. Also engaged in deployment of the developed system for testbeds in KMA.",technologies:["Svelte","TypeScript","Server","Generative Models","Multi-Object Tracking","Restoration Model","Pytorch","Python","ROS"],url:"https://rokanwmd.kma.ac.kr:462/rokanwmd/440/subview.do"},{id:2,title:"Master Candidate, Control+Optimization Research Lab, Seoul National University",duration:"2021 - Present",text:"Focused on accelerating Reinforcement Learning and POMDP algorithms, including theoretical analysis. In joint with LG Electronics and ETRI, studied application of the meta RL to practical scenarios. Advised by Prof.",link:"http://coregroup.snu.ac.kr/~yang/",linkText:"Insoon Yang",afterLinkText:".",technologies:["Reinforcement Learning","POMDP","C++","Gurobi","Python","Pytorch","ROS"],url:"http://coregroup.snu.ac.kr/"},{id:3,title:"Reinforcement Learning Teaching Assistant",duration:"2021 - 2022",text:"Provided clear understanding of the Reinforcement Learning landscape, focusing on implementation for employees from Samsung Electronics, ",link:"assets/pdf/TA.pdf",linkText:"Hyundai Motors, LG Chem / Energy Solution",afterLinkText:", Korea Development Bank.",technologies:["Reinforecement Learning","Python","Pytorch"],url:"http://gece.snu.ac.kr/gecexe/"},{id:4,title:"B.S., Mechanical and Aerospace Engineering (Cum Laude), Seoul National University",duration:"2017 - 2021",text:"Got thesis with 'Robust Guidance of a CanSat Paramotor with Single-Axis Controller' advised by Prof.",link:"http://gnss.snu.ac.kr/bbs/board.php?bo_table=eng1_1",linkText:"Changdon Kee",afterLinkText:"in 2021. Honored KSAS-KAI scholarship in 2019.",technologies:["GPS","Embedded System","SILS","Control System","MATLAB","C++","TypeScript","PHP"],url:"https://aerospace.snu.ac.kr/"},{id:5,title:"Alt. Student Lead, SNU Rocket Team HANARO",duration:"2018 - 2019",text:"Involved from concept design to recovery and avionics system development for 3k feet target Identitiy-2 and 10k feet target HALO rockets. Organized fundraising and provided leadership to participate",link:"https://www.soundingrocket.org/uploads/9/0/6/4/9064598/team_list.png",linkText:"SA Cup 2019",afterLinkText:", the world's largest intercollegiate rocket conference and competition. Researched a cold gas reaction control system and a corresponding measurement system for a sounding rocket.",technologies:["SolidWorks","MATLAB","LabVIEW","3D Printing","Pneumatic System","GPS","Python"],url:"http://hanaro.snu.ac.kr/members/"}];function se(e,t,n){const i=e.slice();return i[10]=t[n],i}function oe(e,t,n){const i=e.slice();return i[7]=t[n],i}function le(t){let n,i,s,o,l=t[10]+"";return{c(){n=u("li"),i=u("div"),s=M(l),o=g(),j(i,"class","flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue"),j(n,"class","mr-1.5 mt-2")},m(e,t){r(e,n,t),c(n,i),c(i,s),c(n,o)},p:e,d(e){e&&a(n)}}}function ce(t,n){let s,o,l,D,I,m,y,f,x,h,p,T,z,A,k,L,w,b,S,O=n[7].duration+"",v=n[7].title+"",E=n[7].text+"",Q=n[7].link&&function(t){let n,i,s,o,l,D,I=t[7].linkText+"",m=t[7].afterLinkText+"";return{c(){n=u("a"),i=M(I),s=g(),o=M(m),j(n,"class","highlight text-white hover:text-blue"),j(n,"href",t[7].link),j(n,"target","_blank")},m(e,a){r(e,n,a),c(n,i),r(e,s,a),r(e,o,a),l||(D=d(n,"click",N(t[3])),l=!0)},p:e,d(e){e&&a(n),e&&a(s),e&&a(o),l=!1,D()}}}(n),C=n[7].secondLink&&function(t){let n,i,s,o,l,D,I=t[7].secondLinkText+"",m=t[7].afterSecondLinkText+"";return{c(){n=u("a"),i=M(I),s=g(),o=M(m),j(n,"class","highlight text-white hover:text-blue"),j(n,"href",t[7].secondLink),j(n,"target","_blank")},m(e,a){r(e,n,a),c(n,i),r(e,s,a),r(e,o,a),l||(D=d(n,"click",N(t[2])),l=!0)},p:e,d(e){e&&a(n),e&&a(s),e&&a(o),l=!1,D()}}}(n),U=n[7].technologies,Z=[];for(let e=0;e<U.length;e+=1)Z[e]=le(se(n,U,e));function P(...e){return n[4](n[7],...e)}function Y(...e){return n[6](n[7],...e)}return{key:t,first:null,c(){s=u("article"),o=u("div"),l=M(O),D=g(),I=u("div"),m=u("h3"),y=M(v),x=g(),h=u("p"),p=M(E),T=g(),Q&&Q.c(),z=g(),C&&C.c(),A=g(),k=u("ul");for(let e=0;e<Z.length;e+=1)Z[e].c();L=g(),j(o,"class","bg-transparent py-4 rounded text-slate-200 text-sm w-24 flex-shrink-0"),j(m,"class",f="font-medium "+(n[1]===n[7]?"text-blue":"text-white")),j(k,"class","mt-2 flex flex-wrap"),j(k,"aria-label","Technologies used"),j(s,"class",w="my-4 flex items-start gap-4 "+(null!==n[1]&&n[7]!==n[1]?"fade":"")+" svelte-1cg94fb"),this.first=s},m(e,t){r(e,s,t),c(s,o),c(o,l),c(s,D),c(s,I),c(I,m),c(m,y),c(I,x),c(I,h),c(h,p),c(h,T),Q&&Q.m(h,null),c(h,z),C&&C.m(h,null),c(I,A),c(I,k);for(let e=0;e<Z.length;e+=1)Z[e].m(k,null);c(s,L),b||(S=[d(s,"mouseenter",P),d(s,"mouseleave",n[5]),d(s,"click",Y)],b=!0)},p(e,t){if(n=e,2&t&&f!==(f="font-medium "+(n[1]===n[7]?"text-blue":"text-white"))&&j(m,"class",f),n[7].link&&Q.p(n,t),n[7].secondLink&&C.p(n,t),0&t){let e;for(U=n[7].technologies,e=0;e<U.length;e+=1){const i=se(n,U,e);Z[e]?Z[e].p(i,t):(Z[e]=le(i),Z[e].c(),Z[e].m(k,null))}for(;e<Z.length;e+=1)Z[e].d(1);Z.length=U.length}2&t&&w!==(w="my-4 flex items-start gap-4 "+(null!==n[1]&&n[7]!==n[1]?"fade":"")+" svelte-1cg94fb")&&j(s,"class",w)},d(e){e&&a(s),Q&&Q.d(),C&&C.d(),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(Z,e),b=!1,i(S)}}}function re(t){let n,i,s=[],o=new Map,l=ie;const M=e=>e[7].id;for(let e=0;e<l.length;e+=1){let n=oe(t,l,e),i=M(n);o.set(i,s[e]=ce(i,n))}return{c(){n=u("main"),i=u("div");for(let e=0;e<s.length;e+=1)s[e].c();j(i,"id",t[0]),j(i,"class","my-4 mx-auto max-w-3xl text-light-slate"),j(n,"class","mx-6 text-left svelte-1cg94fb")},m(e,t){r(e,n,t),c(n,i);for(let e=0;e<s.length;e+=1)s[e].m(i,null)},p(e,[t]){if(2&t){s=C(s,t,M,1,e,ie,o,i,Q,ce,null,oe)}1&t&&j(i,"id",e[0])},i:e,o:e,d(e){e&&a(n);for(let e=0;e<s.length;e+=1)s[e].d()}}}function ae(e,t,n){let{id:i}=t,s=null;return e.$$set=e=>{"id"in e&&n(0,i=e.id)},[i,s,function(t){f(e,t)},function(t){f(e,t)},e=>n(1,s=e),()=>n(1,s=null),e=>window.open(e.url,"_blank")]}class ue extends G{constructor(e){super(),$(this,e,ae,re,o,{id:0})}}const Me=[{id:1,title:"Silly Labs",url:"https://sillylabs.xyz/",description:"A new journey to Metaverse. Stay tuned!",envdSrc:"https://prod.spline.design/4AFSeDV9uuLroKUb/scene.splinecode"},{id:2,title:"HALO (HAnaro Launch Object)",url:"https://www.youtube.com/watch?v=PvHXIeuu4qs",description:"Solid propellant rocket “HALO(HAnaro Launch Object)”. It aims to reach 10,000ft in height with a commercial off-the-shelf(COTS) motor manufactured by Cesaroni Technology, Inc.. Its main mission is to deliver the payload, which contains an inertial compensator, to the desired altitude, make a successful wireless communication via Iridium module with a ground station and achieve full recovery by deploying both of the drogue parachute and the main parachute.",imageSrc:"/assets/png/HALO.png"},{id:3,title:"Development and Demonstration of Cold Gas Thruster for Rocket Attitude Stabilization",url:"https://ksas.or.kr",description:"Cold Gas Thruster with 0.75N thrust. This project was funded by the SNU Undergraduate Research Program through the Faculty of Liberal Education, Seoul National University, and submitted to Spring Conference of the Korean Society for Aeronautical & Space Sciences, 2019",imageSrc:"/assets/png/pen.png"}];function ge(e,t,n){const i=e.slice();return i[6]=t[n],i}function de(t){let n,i;return{c(){var e,s,o;n=u("img"),j(n,"alt",""),j(n,"loading","lazy"),j(n,"width","96"),j(n,"height","54"),j(n,"decoding","async"),j(n,"data-nimg","1"),j(n,"class","rounded border-2 border-slate-200/10 self-start"),e="color",s="transparent",n.style.setProperty(e,s,o?"important":""),j(n,"srcset",t[6].imageSrc),n.src!==(i=t[6].imageSrc)&&j(n,"src",i)},m(e,t){r(e,n,t)},p:e,d(e){e&&a(n)}}}function Ne(t){let n;return{c(){n=u("spline-viewer"),D(n,"width","96"),D(n,"height","96"),D(n,"url",t[6].envdSrc)},m(e,t){r(e,n,t)},p:e,d(e){e&&a(n)}}}function je(t){let n,i,s;return{c(){n=u("video"),i=u("source"),i.src!==(s=t[6].videoSrc)&&j(i,"src",s),j(i,"type","video/webm"),j(n,"width","96"),j(n,"height","54"),n.autoplay=!0,n.loop=!0,n.muted=!0},m(e,t){r(e,n,t),c(n,i)},p:e,d(e){e&&a(n)}}}function De(e,t){let n,s,o,l,N,D,I,m,y,f,x,h,p,T=t[6].title+"",z=t[6].description+"";let A=function(e,t){return e[6].videoSrc?je:e[6].envdSrc?Ne:de}(t)(t);function k(...e){return t[2](t[6],...e)}function L(...e){return t[4](t[6],...e)}return{key:e,first:null,c(){n=u("article"),A.c(),s=g(),o=u("div"),l=u("h3"),N=M(T),I=g(),m=u("p"),y=M(z),f=g(),j(l,"class",D="font-medium "+(t[1]===t[6]?"text-blue":"text-white")),j(n,"class",x="my-4 p-4 flex items-start gap-4 "+(null!==t[1]&&t[6]!==t[1]?"fade":"")+" svelte-aok9a9"),this.first=n},m(e,i){r(e,n,i),A.m(n,null),c(n,s),c(n,o),c(o,l),c(l,N),c(o,I),c(o,m),c(m,y),c(n,f),h||(p=[d(n,"mouseenter",k),d(n,"mouseleave",t[3]),d(n,"click",L)],h=!0)},p(e,i){t=e,A.p(t,i),2&i&&D!==(D="font-medium "+(t[1]===t[6]?"text-blue":"text-white"))&&j(l,"class",D),2&i&&x!==(x="my-4 p-4 flex items-start gap-4 "+(null!==t[1]&&t[6]!==t[1]?"fade":"")+" svelte-aok9a9")&&j(n,"class",x)},d(e){e&&a(n),A.d(),h=!1,i(p)}}}function Ie(t){let n,i,s=[],o=new Map,l=Me;const M=e=>e[6].id;for(let e=0;e<l.length;e+=1){let n=ge(t,l,e),i=M(n);o.set(i,s[e]=De(i,n))}return{c(){n=u("main"),i=u("div");for(let e=0;e<s.length;e+=1)s[e].c();j(i,"id",t[0]),j(i,"class","my-4 mx-auto max-w-3xl text-light-slate"),j(n,"class","mx-6 text-left svelte-aok9a9")},m(e,t){r(e,n,t),c(n,i);for(let e=0;e<s.length;e+=1)s[e].m(i,null)},p(e,[t]){if(2&t){s=C(s,t,M,1,e,Me,o,i,Q,De,null,ge)}1&t&&j(i,"id",e[0])},i:e,o:e,d(e){e&&a(n);for(let e=0;e<s.length;e+=1)s[e].d()}}}function me(e,t,n){let{id:i}=t,s=null;y(async()=>{(await import("https://unpkg.com/@splinetool/viewer@0.9.356/build/spline-viewer.js")).default});return e.$$set=e=>{"id"in e&&n(0,i=e.id)},[i,s,e=>n(1,s=e),()=>n(1,s=null),e=>window.open(e.url,"_blank")]}class ye extends G{constructor(e){super(),$(this,e,me,Ie,o,{id:0})}}function fe(t){let n,i,s,o,l,M,d,N,D,I,m,y;return o=new V({props:{activeSection:B}}),d=new ne({props:{id:"about"}}),D=new ue({props:{id:"experience"}}),m=new ye({props:{id:"projects"}}),{c(){n=u("main"),i=u("div"),s=u("div"),U(o.$$.fragment),l=g(),M=u("div"),U(d.$$.fragment),N=g(),U(D.$$.fragment),I=g(),U(m.$$.fragment),j(s,"class","mb-4 lg:mb-0 lg:mr-8 flex-1 lg:sticky lg:top-24"),j(M,"class","lg:ml-8 flex-1 svelte-1bfr16s"),j(M,"id","scrollable-section"),j(i,"class","flex flex-col lg:flex-row justify-between max-w-7xl"),j(n,"class","flex flex-col lg:flex-row justify-center mx-8 pt-24 svelte-1bfr16s")},m(e,t){r(e,n,t),c(n,i),c(i,s),Z(o,s,null),c(i,l),c(i,M),Z(d,M,null),c(M,N),Z(D,M,null),c(M,I),Z(m,M,null),y=!0},p:e,i(e){y||(v(o.$$.fragment,e),v(d.$$.fragment,e),v(D.$$.fragment,e),v(m.$$.fragment,e),y=!0)},o(e){E(o.$$.fragment,e),E(d.$$.fragment,e),E(D.$$.fragment,e),E(m.$$.fragment,e),y=!1},d(e){e&&a(n),P(o),P(d),P(D),P(m)}}}function xe(e){return y(()=>{const e=["about","experience","projects"],t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&B.set(e.target.id)})},{threshold:[.6]});return e.forEach(e=>{const n=document.getElementById(e);n&&t.observe(n)}),()=>{e.forEach(e=>{const n=document.getElementById(e);n&&t.unobserve(n)})}}),[]}return new class extends G{constructor(e){super(),$(this,e,xe,fe,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
