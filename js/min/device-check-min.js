const body=document.querySelector("body"),ua=navigator.userAgent;/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)?body.classList.add("tablet"):/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)?body.classList.add("mobile"):body.classList.add("desktop");