const body = document.querySelector("body");
const ua = navigator.userAgent;

if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  body.classList.add('tablet');
} else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
  body.classList.add('mobile');
} else {
  body.classList.add('desktop');
}