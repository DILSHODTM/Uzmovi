"use strict"
movies.splice(50)
const $=(selector)=>document.querySelector(selector);
const $$=(selector)=>document.querySelectorAll(selector);


const Allmovies=movies.map((movies)=>{
    return{
        title:movies.title,
        year:movies.year,
        cotegories:movies.categories,
        lang:movies.language,
        id:movies.imdbId,
        rating:movies.imdbRating,
        time:`${Math.floor(movies.runtime/60)} Soat ${movies.runtime%60} Daqiqa`,
        link:`https://youtube.com/embed/${movies.youtubeId}`,
        summary:movies.summary,
        photos:movies.bigThumbnail
    }
})

console.log(Allmovies);


function renderAllmovies(){
    Allmovies.forEach((el)=>{
        const card=document.createElement('div');
card.classList.add('card','navs','text-light','card-width');
card.innerHTML=`<img src="${el.photos}" class="card-img-top" style="height:200px" alt="...">
                    <div class="card-body">
                      <a href="" class=" nav-link fs-5">${el.title}</a>
                      <hr>
                      <div class="row row-cols-2">
                        <p class="card-text">JANR :</p>
                      <p class="card-text">${el.cotegories}</p>
                      <p class="card-text">YILI :</p>
                      <p class="card-text">${el.year}</p>
                      <p class="card-text">REYTING :</p>
                      <p class="card-text">${el.rating}</p>
                      <p class="card-text">DAVOMIYLIGI :</p>
                      <p class="card-text">${el.time}</p>
                      
                      </div>
                      <div class="d-flex gap-2 justify-content-around">
                        <button class="btn btn-success"><i class="bi bi-tv"></i> Treyler</button>
                        <button class="btn btn-success">Ko'rish</button>
                        <button class="btn btn-danger love" id="${el.id}" ><i class="bi bi-heart"></i></button>
                      </div>
                    </div>`;
                    $('.wraps').appendChild(card);
                  
    })
}

renderAllmovies()



 












