(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function f(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var g=f(this),h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={a:!0},m={};try{m.__proto__=l;k=m.a;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h;
function p(a,b){a.prototype=e(b.prototype);a.prototype.constructor=a;if(n)n(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype};function q(a,b){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=20);return a};function r(){var a=HTMLElement.call(this)||this;a.G=!1;return a}p(r,HTMLElement);r.prototype.initialize=function(){};r.prototype.render=function(){};r.prototype.handlePointerUpdate=function(){this.G=!0};r.prototype.handlePointerOut=function(){this.G=!1};r.prototype.shouldRenderOnHoverWhilePaused=function(){return!1};var t=[0,0,100,100];var u="length magnitude orientation position reverse speed transparent type".split(" ");function v(){var a=r.call(this)||this;a.B=!1;return a}p(v,r);
v.prototype.connectedCallback=function(){this.J=Math.max(.1,q(this,"length"));this.F=q(this,"magnitude");this.m=this.getAttribute("orientation");"vertical"!==this.m&&(this.m="horizontal");this.g=w(this);this.H=this.hasAttribute("reverse");this.I=q(this,"speed");this.A=this.hasAttribute("transparent");this.s=this.getAttribute("type");"lensing"!==this.s&&(this.s="standard");x(this)};
v.prototype.attributeChangedCallback=function(a,b,c){if(this.B&&b!==c){switch(a){case "length":this.J=Math.max(.1,q(this,"length"));break;case "magnitude":this.F=q(this,"magnitude");break;case "orientation":this.m=this.getAttribute("orientation");"vertical"!==this.m&&(this.m="horizontal");y(this);break;case "position":this.g=w(this);break;case "reverse":this.H=this.hasAttribute("reverse");break;case "speed":this.I=q(this,"speed");break;case "transparent":(this.A=this.hasAttribute("transparent"))||
void 0===this.j||this.j.drawImage(this.u,0,0);break;case "type":this.s=this.getAttribute("type"),"lensing"!==this.s&&(this.s="standard")}x(this)}};function x(a){a.D=2.5E-4*a.I;a.C=a.J/100/(2*Math.PI);z(a)}function w(a){a=a.getAttribute("position");if(!a)return t;a=a.split(",");for(var b=[],c=0;c<a.length;c++)b.push(parseFloat(a[c]));return 4==b.length&&"number"===typeof b[0]&&b[0]<=b[1]&&b[1]<=b[2]&&b[2]<=b[3]?b:t}
v.prototype.initialize=function(a,b,c){this.j=this.parentElement.querySelector("canvas").getContext("2d");this.o=this.parentElement.clientWidth*c;this.l=this.parentElement.clientHeight*c;(a=a[0])||(a=this.ownerDocument.createElement("canvas"),a.width=this.o,a.height=this.l);this.u=a;y(this);z(this);this.B=!0};
function y(a){a.h=[];if("horizontal"===a.m){a.i=Math.ceil(a.l/300);for(var b=0;b<a.l;b+=a.i){var c=a.ownerDocument.createElement("canvas");c.width=a.o;c.height=a.i;c.getContext("2d").drawImage(a.u,0,-b);a.h.push(c)}}else for(a.i=Math.ceil(a.o/300),b=0;b<a.o;b+=a.i)c=a.ownerDocument.createElement("canvas"),c.width=a.i,c.height=a.l,c.getContext("2d").drawImage(a.u,-b,0),a.h.push(c)}
function z(a){a.v=[];if(a.h&&a.h.length){var b=a.F/500;b*="horizontal"===a.m?a.o:a.l;for(var c=0;c<a.h.length;c++){var d=c/a.h.length;a.v.push((d<a.g[0]||d>a.g[3]?0:d>=a.g[0]&&d<a.g[1]?(Math.sin(Math.PI*((d-a.g[0])/(a.g[1]-a.g[0])-.5))+1)/2:d>=a.g[1]&&d<=a.g[2]?1:d>=a.g[2]&&d<a.g[3]?(Math.sin(Math.PI*((a.g[3]-d)/(a.g[3]-a.g[2])-.5))+1)/2:0)*b)}}}
v.prototype.render=function(a){if(this.B){this.A?this.j.clearRect(0,0,this.o,this.l):this.K||this.j.drawImage(this.u,0,0);this.H&&(a*=-1);if("horizontal"===this.m)for(var b=0;b<this.h.length;b++){var c=b*this.i,d=Math.sin(a*this.D+c/this.l/this.C);d*=this.v[b];"standard"===this.s?this.j.drawImage(this.h[b],d,c):this.j.drawImage(this.h[b],2*d,c,this.o-4*d,this.i)}else for(b=0;b<this.h.length;b++)c=b*this.i,d=Math.sin(a*this.D+c/this.o/this.C),d*=this.v[b],"standard"===this.s?this.j.drawImage(this.h[b],
c,d):this.j.drawImage(this.h[b],c,2*d,this.i,this.l-4*d);this.K=!0}};g.Object.defineProperties(v,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return u}}});customElements.define("gwd-wave",v);}).call(this);