!function(){var e=[,function(){const e=document.querySelector("body"),t=navigator.userAgent;/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(t)?e.classList.add("tablet"):/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(t)?e.classList.add("mobile"):e.classList.add("desktop")},function(){const e=document.querySelectorAll(['iframe[src*="youtube.com"]','iframe[src*="vimeo.com"]'].join(","));if(e.length)for(let t=0;t<e.length;t++){const n=e[t],i=n.getAttribute("width"),o=n.getAttribute("height")/i,a=n.parentNode,c=document.createElement("div");c.className="fitVids-wrapper",c.style.paddingBottom=100*o+"%",a.insertBefore(c,n),n.remove(),c.appendChild(n),n.removeAttribute("height"),n.removeAttribute("width")}},function(){({init:function(){this.handleSearchToggle(),this.submitSearch()},handleSearchToggle:function(){const e=document.querySelector(".search-panel"),t=document.querySelector(".search-trigger"),n=document.querySelector(".search-panel__dismiss"),i=document.querySelector(".search-panel__input");function o(){e.classList.remove("search-panel--active"),t.classList.remove("search-trigger--active")}e&&t&&t.addEventListener("click",(function(){t.classList.contains("search-trigger--active")?o():(e.classList.add("search-panel--active"),t.classList.add("search-trigger--active"),i.focus())})),n&&n.addEventListener("click",o)},submitSearch:function(){const e="search-panel__input",t=document.querySelectorAll(".search-panel__button"),n=document.querySelectorAll(`.${e}`);function i(e){window.location.href=`/SearchResults.aspx?s=${e.value}`}function o(t){t.preventDefault();i(this.parentNode.querySelector(`.${e}`))}function a(e){if(13==e.which){e.preventDefault();i(this)}}t.length&&t.forEach((function(e){e.addEventListener("click",o)})),n.length&&n.forEach((function(e){e.addEventListener("keydown",a)}))}}).init()},function(){({init:function(){this.addSecondaryNavExpands(),this.toggleSecondaryNavExpands()},addSecondaryNavExpands:function(){const e=document.querySelectorAll(".secondary-nav li");e.length&&e.forEach((function(e){if(e.querySelector("ul")){e.classList.add("has-children");const t=e.querySelector("a");let n=document.createElement("button");n.classList.add("secondary-nav__expand"),n.setAttribute("aria-label","Toggle Menu"),n.setAttribute("title","Toggle Menu"),n.setAttribute("type","button"),t.parentNode.insertBefore(n,t.nextSibling)}}))},toggleSecondaryNavExpands:function(){const e="secondary-nav__expand",t=document.querySelectorAll(`.${e}`);function n(){const t=this,n=t.parentNode.querySelector("ul");t.classList.contains(`${e}--active`)?function(t,n){t.classList.remove(`${e}--active`),n.style.height=n.offsetHeight+"px",setTimeout((()=>{n.style.height="0px"}),0);let i=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-m").replace("s","");i=1e3*parseFloat(i),setTimeout((()=>{n.classList.remove("active")}),i)}(t,n):function(t,n){t.classList.add(`${e}--active`),n.classList.add("active"),n.style.height="auto";let i=n.offsetHeight+"px";n.style.height="0px",setTimeout((()=>{n.style.height=i}),0);let o=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-m").replace("s","");o=1e3*parseFloat(o),setTimeout((()=>{n.style.height="auto"}),o)}(t,n)}t.length&&t.forEach((function(e){e.addEventListener("click",n)}))}}).init()},function(){({init:function(){this.toggleSidecar(),this.addSidecarExpands(),this.toggleSidecarExpands()},toggleSidecar:function(){const e=document.querySelector(".sidecar"),t=document.querySelector(".hamburger");e&&t&&t.addEventListener("click",(function(){t.classList.contains("hamburger--active")?(e.classList.remove("sidecar--active"),t.classList.remove("hamburger--active")):(e.classList.add("sidecar--active"),t.classList.add("hamburger--active"))}))},addSidecarExpands:function(){const e=document.querySelectorAll(".sidecar-nav li");e.length&&e.forEach((function(e){if(e.querySelector("ul")){e.classList.add("has-children");const t=e.querySelector("a");let n=document.createElement("button");n.classList.add("sidecar__expand"),n.setAttribute("aria-label","Toggle Menu"),n.setAttribute("title","Toggle Menu"),n.setAttribute("type","button"),t.parentNode.insertBefore(n,t.nextSibling)}}))},toggleSidecarExpands:function(){const e="sidecar__expand",t=document.querySelectorAll(`.${e}`);function n(){const t=this,n=t.parentNode.querySelector("ul");t.classList.contains(`${e}--active`)?function(t,n){t.classList.remove(`${e}--active`),n.style.height=n.offsetHeight+"px",setTimeout((()=>{n.style.height="0px"}),0);let i=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-m").replace("s","");i=1e3*parseFloat(i),setTimeout((()=>{n.classList.remove("active")}),i)}(t,n):function(t,n){t.classList.add(`${e}--active`),n.classList.add("active"),n.style.height="auto";let i=n.offsetHeight+"px";n.style.height="0px",setTimeout((()=>{n.style.height=i}),0);let o=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-m").replace("s","");o=1e3*parseFloat(o),setTimeout((()=>{n.style.height="auto"}),o)}(t,n)}t.length&&t.forEach((function(e){e.addEventListener("click",n)}))}}).init()}],t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};!function(){"use strict";n.r(i);n(1),n(2),n(3),n(4),n(5)}()}();