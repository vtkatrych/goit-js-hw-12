import{a as L,S,i as u}from"./assets/vendor-CesYmgD5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function f(o,t){const a="https://pixabay.com/api/",s={params:{key:"57290092-a2317ab3b0fbf392f64df49e7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}};return(await L.get(a,s)).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader");document.querySelector(".btn");let w=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:r,views:n,comments:v,downloads:b})=>`<li class="gallery-item">
        <a class="galerry-link" href=${s}>
      <img class="gallery-image" src="${a}" alt="${e}" />
      </a>
      <div class="info">
      <div class="info-item">
      <p>Likes: ${r}</p>
      </div>
      <div class="info-item">
      <p>Views: ${n}</p>
      </div>
      <div class="info-item">
      <p>Comments: ${v}</p>
      </div>
      <div class="info-item">
      <p>Downloads: ${b}</p>
      </div>
      </div>
    </li>`).join("");p.innerHTML=t,w.refresh()}function q(){p.innerHTML=""}function g(){m.classList.add("is-active")}function h(){m.classList.remove("is-active")}let l="",c=1,d=0;const P=document.querySelector(".form"),O=document.querySelector('input[name="search-text"]'),i=document.querySelector(".btn");P.addEventListener("submit",async o=>{if(o.preventDefault(),l=O.value.trim(),l!==""){c=1,g(),q(),i&&i.classList.add("btn");try{const t=await f(l,c);if(t.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d=Math.ceil(t.totalHits/15),y(t.hits),d>1&&i&&i.classList.remove("btn")}catch(t){console.log(t),u.error({title:"Error",message:"'Something went wrong. Please try again!",position:"topRight"})}finally{h()}}});i&&i.addEventListener("click",async()=>{c+=1,g();try{const o=await f(l,c);y(o.hits),c>=d&&(i.classList.add("btn"),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){console.log(o)}finally{h()}});
//# sourceMappingURL=index.js.map
