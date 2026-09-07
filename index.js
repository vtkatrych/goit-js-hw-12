import{a as P,S as M,i as n}from"./assets/vendor-CesYmgD5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function g(o,t){const i="https://pixabay.com/api/",s={params:{key:"57290092-a2317ab3b0fbf392f64df49e7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return(await P.get(i,s)).data}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),d=document.querySelector(".btn");let $=new M(".gallery a",{captionsData:"alt",captionDelay:250});function b(o,t=!1){const i=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:a,views:w,comments:S,downloads:q})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}"> 
          <img class="gallery-image" src="${s}" alt="${r}" />
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
      </li>`).join("");t?p.insertAdjacentHTML("beforeend",i):p.innerHTML=i,$.refresh()}function O(){p.innerHTML=""}function v(){h.classList.add("is-active")}function L(){h.classList.remove("is-active")}function y(){d&&(d.style.display="block")}function f(){d&&(d.style.display="none")}let c="",l=1,u=0;const x=document.querySelector(".form"),R=document.querySelector('input[name="search-text"]'),m=document.querySelector(".btn");f();function B(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}x.addEventListener("submit",async o=>{if(o.preventDefault(),c=R.value.trim(),c!==""){l=1,v(),O(),f();try{const t=await g(c,l);if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u=Math.ceil(t.totalHits/15),b(t.hits,!1),u===1&&n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u>1&&y()}catch(t){console.log(t),n.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight"})}finally{L()}}});m&&m.addEventListener("click",async()=>{l+=1,v(),f();try{const o=await g(c,l);b(o.hits,!0),B(),l>=u?(f(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y()}catch(o){console.log(o),n.error({title:"Error",message:"Failed to load more images. Please try again!",position:"topRight"}),y()}finally{L()}});
//# sourceMappingURL=index.js.map
