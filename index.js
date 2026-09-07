import{a as P,S as M,i as n}from"./assets/vendor-CesYmgD5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function g(r,t){const i="https://pixabay.com/api/",s={params:{key:"57290092-a2317ab3b0fbf392f64df49e7",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return(await P.get(i,s)).data}const d=document.querySelector(".gallery"),h=document.querySelector(".loader"),f=document.querySelector(".btn");let $=new M(".gallery a",{captionsData:"alt",captionDelay:250});function b(r,t=!1){const i=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:a,views:w,comments:S,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}"> 
          <img class="gallery-image" src="${s}" alt="${o}" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <p>${a}</p>
          </div>
          <div class="info-item">
            <b>Views</b>
            <p>${w}</p>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <p>${S}</p>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <p>${q}</p>
          </div>
        </div>
      </li>`).join("");t?(d.insertAdjacentHTML("beforeend",i),O()):d.innerHTML=i,$.refresh()}function O(){const r=d.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}function x(){d.innerHTML=""}function v(){h.classList.add("is-active")}function L(){h.classList.remove("is-active")}function y(){f&&(f.style.display="block")}function p(){f&&(f.style.display="none")}let c="",l=1,u=0;const R=document.querySelector(".form"),B=document.querySelector('input[name="search-text"]'),m=document.querySelector(".btn");p();R.addEventListener("submit",async r=>{if(r.preventDefault(),c=B.value.trim(),c!==""){l=1,v(),x(),p();try{const t=await g(c,l);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(u=Math.ceil(t.totalHits/15),b(t.hits,!1),u===1){n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}u>1&&y()}catch(t){console.log(t),n.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}}});m&&m.addEventListener("click",async()=>{l+=1,v(),p();try{const r=await g(c,l);b(r.hits,!0),l>=u?(p(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y()}catch(r){console.log(r),n.error({title:"Error",message:"Failed to load more images. Please try again!",position:"topRight"}),y()}finally{L()}});
//# sourceMappingURL=index.js.map
