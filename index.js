import{a as S,S as w,i as u}from"./assets/vendor-CesYmgD5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r,t){const s="https://pixabay.com/api/",a={params:{key:"57290092-a2317ab3b0fbf392f64df49e7",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return(await S.get(s,a)).data}const d=document.querySelector(".gallery"),p=document.querySelector(".loader");document.querySelector(".btn");let q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(r,t=!1){const s=r.map(({webformatURL:a,largeImageURL:e,tags:o,likes:n,views:v,comments:b,downloads:L})=>`<li class="gallery-item">
        <a class="galery-link" href=${e}>
      <img class="gallery-image" src="${a}" alt="${o}" />
      </a>
      <div class="info">
      <div class="info-item">
      <p>Likes: ${n}</p>
      </div>
      <div class="info-item">
      <p>Views: ${v}</p>
      </div>
      <div class="info-item">
      <p>Comments: ${b}</p>
      </div>
      <div class="info-item">
      <p>Downloads: ${L}</p>
      </div>
      </div>
    </li>`).join("");t?(d.insertAdjacentHTML("beforeend",s),P()):d.innerHTML=s,q.refresh()}function P(){const r=d.querySelector(".gallery-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}function O(){d.innerHTML=""}function g(){p.classList.add("is-active")}function h(){p.classList.remove("is-active")}let l="",c=1,f=0;const $=document.querySelector(".form"),x=document.querySelector('input[name="search-text"]'),i=document.querySelector(".btn");$.addEventListener("submit",async r=>{if(r.preventDefault(),l=x.value.trim(),l!==""){c=1,g(),O(),i&&i.classList.add("btn");try{const t=await m(l,c);if(t.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f=Math.ceil(t.totalHits/15),y(t.hits),f>1&&i&&i.classList.remove("btn")}catch(t){console.log(t),u.error({title:"Error",message:"'Something went wrong. Please try again!",position:"topRight"})}finally{h()}}});i&&i.addEventListener("click",async()=>{c+=1,g();try{const r=await m(l,c);y(r.hits),c>=f&&(i.classList.add("btn"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.log(r)}finally{h()}});
//# sourceMappingURL=index.js.map
