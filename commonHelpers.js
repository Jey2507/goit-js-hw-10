import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";function h(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:u}}const p=t=>{const{days:o,hours:e,minutes:s,seconds:a}=t,i=document.querySelector("[data-days]"),c=document.querySelector("[data-hours]"),d=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");i.textContent=o.toString().padStart(2,"0"),c.textContent=e.toString().padStart(2,"0"),d.textContent=s.toString().padStart(2,"0"),u.textContent=a.toString().padStart(2,"0")},S=()=>{f.show({message:"Please chose a date in the future",color:"#ef4040",messageColor:"#ffffff",theme:"dark",timeout:3e3,pauseOnHover:!0,position:"topRight",iconUrl:"/img/closeicon.svg"})};function y(){n.setAttribute("disabled",""),l.setAttribute("disabled","");let e=new Date(r).getTime()-Date.now();const s=1e3,a=setInterval(()=>{p(h(e)),e-=s,e<=0&&(b(r,a),l.removeAttribute("disabled"))},1e3)}const b=(t,o)=>{t<Date.now()+400&&clearInterval(o)},l=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");let r;n.setAttribute("disabled","");const g={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),dateFormat:"Y-m-d H:i",minuteIncrement:1,onClose(t){r=t[0],r<=Date.now()?(S(),n.setAttribute("disabled","")):n.removeAttribute("disabled")}};m(l,g);n.addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map
