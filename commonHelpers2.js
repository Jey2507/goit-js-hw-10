import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const m=document.querySelector(".form"),i=document.querySelector('input[type="number"]'),l=document.querySelectorAll('[name="state"]'),n=e=>{r.show({message:`Fulfilled promise in ${e}ms`,iconUrl:"/img/okay.svg",color:"#59a10d",messageColor:"#ffffff",titleColor:"#ffffff",theme:"dark",timeout:3e3,position:"topRight"})},c=e=>{r.show({message:`Rejected promise in ${e}ms`,iconUrl:"/img/closeicon.svg",color:"#ef4040",messageColor:"#ffffff",titleColor:"#ffffff",theme:"dark",timeout:3e3,position:"topRight"})},a=e=>{let t=parseInt(i.value);e.preventDefault(),new Promise((o,f)=>{l.forEach(s=>{s.value==="fulfilled"&&s.checked?o(t):f(t)})}).then(o=>{setTimeout(()=>{n(o)},t)}).catch(o=>{setTimeout(()=>{c(o)},t)}),i.value=""};m.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map
