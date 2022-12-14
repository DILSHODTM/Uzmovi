"use strict"
movies.splice(10)
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
                      <p class="card-text">DAVOMIY :</p>
                      <p class="card-text">${el.time}</p>
                      
                      </div>
                      <div class="d-flex gap-2 mt-3 justify-content-around">
                        <button class="btn btn-success"><i class="bi bi-tv"></i> Treyler</button>
                        <button class="btn btn-success">Ko'rish</button>
                        <button class="btn btn-danger love" id="${el.id}" ><i class="bi bi-heart"></i></button>
                      </div>
                    </div>`;
                    $('.wraps').appendChild(card);
                  
    })
}

renderAllmovies()

const findFilm=(regexp ,rating , year)=>{
console.log(regexp);
  return Allmovies.filter((film)=>{
    return film.title.match(regexp)  && film.rating>=rating &&film.year>=year
  })
}


$('#forms').addEventListener('submit',(e)=>{

  e.preventDefault()
  
  $('.wraps').innerHTML=`<span class="loader"></span>`

  const searchValue=$('#filmName').value;

  const filmRating=$('#filmRating').value

  const filmYear=$('#filmYear').value

  const regexp=new RegExp(searchValue,"gi");

  const searchResult=findFilm(regexp, filmRating, filmYear );

 if (searchResult.length>0 ){
setTimeout(()=>{
  $('.wrapss').innerHTML=`<h3 class="text-success text-center"> <strong>${searchResult.length}</strong> ta malumot topildi</h3>`
  searchResultsrender(searchResult)
  $('.wrapss').classList.add('d-block')
},1000)
if(searchValue.length===0){
  $('.wrapss').classList.add('d-none')
}
else{
  {
    $('.wrapss').classList.remove('d-none')}
}
 }
 else{
setTimeout(()=>{
$('.wrapss').innerHTML=`<h3 class="text-danger text-center"> <strong>MALUMOT TOPILMADI</strong></h3>`
$('.wraps').innerHTML=`<img src="./assets/images/webp.webp" class="w-100" " alt="..."> <audio id="musicplayer" autoplay>
<source src="./assets/music/musics.mp3" />
</audio>
`},1000)

 }
 

})

 

function searchResultsrender(data=[]){
$('.wraps').innerHTML=""
  data.forEach((el)=>{
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
                <p class="card-text">DAVOMIY :</p>
                <p class="card-text">${el.time}</p>
                
                </div>
                <div class="d-flex gap-2 mt-3 justify-content-around">
                  <button class="btn btn-success"><i class="bi bi-tv"></i> Treyler</button>
                  <button class="btn btn-success">Ko'rish</button>
                  <button class="btn btn-danger love" id="${el.id}" ><i class="bi bi-heart"></i></button>
                </div>
              </div>`;
              $('.wraps').appendChild(card);
            
})


}









