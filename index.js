import{a as m,S as p,i as c}from"./assets/vendor-CesYmgD5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const n={key:"57290092-a2317ab3b0fbf392f64df49e7",q:query,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15,incrementPage(){this.page+=1},resetPage(){this.page=1}};function g(o){const r="https://pixabay.com/api/";return n.q=o,m.get(r,{params:n}).then(i=>i.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");document.querySelector(".btn");let y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:d,downloads:f})=>`<li class="gallery-item">
        <a class="galerry-link" href=${a}>
      <img class="gallery-image" src="${i}" alt="${e}" />
      </a>
      <div class="info">
      <div class="info-item">
      <p>Likes: ${t}</p>
      </div>
      <div class="info-item">
      <p>Views: ${s}</p>
      </div>
      <div class="info-item">
      <p>Comments: ${d}</p>
      </div>
      <div class="info-item">
      <p>Downloads: ${f}</p>
      </div>
      </div>
    </li>`).join("");l.innerHTML=r,y.refresh()}function v(){l.innerHTML=""}function L(){u.classList.add("is-active")}function b(){u.classList.remove("is-active")}const q=document.querySelector(".form"),P=document.querySelector('input[name="search-text"]');q.addEventListener("submit",o=>{o.preventDefault(),n.resetPage();const r=P.value.trim();r!==""&&(L(),v(),g(r).then(i=>{if(i.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits)}).catch(i=>{console.log(i),c.error({title:"Error",message:"'Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{b()}))});btn.addEventListener("click",()=>{n.increment()});
//# sourceMappingURL=index.js.map
