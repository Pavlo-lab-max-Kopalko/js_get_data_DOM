var t=document.querySelectorAll(".population"),e=0,n=!0,o=!1,r=void 0;try{for(var l,a=t[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var u=l.value,c=u.textContent.split(","),i=Number(c.reduce(function(t,e){return t+e}));u.textContent=i,e+=i}}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}var y=e/t.length,S=document.querySelector(".total-population"),p=document.querySelector(".average-population");S.textContent=e.toLocaleString("en-US"),p.textContent=y.toLocaleString("en-US");
//# sourceMappingURL=index.46df1716.js.map
