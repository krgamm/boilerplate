!function(){"use strict";({init:function(){this.toggleSidecar(),this.addSidecarExpands(),this.toggleSidecarExpands()},toggleSidecar:function(){const e=document.querySelector(".sidecar"),t=document.querySelector(".hamburger");e&&t&&t.addEventListener("click",(function(){t.classList.contains("hamburger--active")?(e.classList.remove("sidecar--active"),t.classList.remove("hamburger--active")):(e.classList.add("sidecar--active"),t.classList.add("hamburger--active"))}))},addSidecarExpands:function(){const e=document.querySelectorAll(".sidecar-nav li");e.length&&e.forEach((function(e){if(e.querySelector("ul")){e.classList.add("has-children");const t=e.querySelector("a");let i=document.createElement("button");i.classList.add("sidecar__expand"),i.setAttribute("aria-label","Toggle Menu"),i.setAttribute("title","Toggle Menu"),i.setAttribute("type","button"),t.parentNode.insertBefore(i,t.nextSibling)}}))},toggleSidecarExpands:function(){const e="sidecar__expand",t=document.querySelectorAll(`.${e}`);function i(){const t=this,i=t.parentNode.querySelector("ul");t.classList.contains(`${e}--active`)?function(t,i){t.classList.remove(`${e}--active`),i.style.height=i.offsetHeight+"px",setTimeout((()=>{i.style.height="0px"}),0);let s=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-m").replace("s","");s=1e3*parseFloat(s),setTimeout((()=>{i.classList.remove("active")}),s)}(t,i):function(t,i){t.classList.add(`${e}--active`),i.classList.add("active"),i.style.height="auto";let s=i.offsetHeight+"px";i.style.height="0px",setTimeout((()=>{i.style.height=s}),0);let a=getComputedStyle(document.documentElement).getPropertyValue("--transition-duration-m").replace("s","");a=1e3*parseFloat(a),setTimeout((()=>{i.style.height="auto"}),a)}(t,i)}t.length&&t.forEach((function(e){e.addEventListener("click",i)}))}}).init()}();