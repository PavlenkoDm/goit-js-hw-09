let e=null,t=null,n=null;const l={form:document.querySelector(".form")};function o(e,t){Math.random()}l.form.addEventListener("submit",(function(r){if(r.preventDefault(),e=l.form.elements.delay.value,n=l.form.elements.step.value,t=l.form.elements.amount.value,t<=0)return;for(let l=1;l<=t;l+=1)o(l,e),e+=n}));
//# sourceMappingURL=03-promises.30c59233.js.map
