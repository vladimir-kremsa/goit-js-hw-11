import{a as d,S as f,i as n}from"./assets/vendor-ChWqHE5o.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="51375874-08b60e99a61a885b42830ac73",g="https://pixabay.com/api/";async function y(a){const r={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20};return(await d.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p>
              <b>Likes:</b> ${t}
            </p>
            <p>
              <b>Views:</b> ${i}
            </p>
            <p>
              <b>Comments:</b> ${u}
            </p>
            <p>
              <b>Downloads:</b> ${p}
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.remove("active")}function w(){l.classList.add("active")}const S=document.querySelector(".form");S.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),v();try{const o=await y(r);!o.hits||o.hits.length===0?n.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(o.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
