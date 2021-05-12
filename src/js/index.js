const query = async function () {
  const response = await fetch("https://api.jikan.moe/v3/top/anime/1/tv");
  console.log(response);
  const data = await response.json();
  console.log(data.top);
  
  data.top.forEach((anime) => {
  topRated.insertAdjacentHTML("beforeend", `<p class=anime-title>${anime.title}</p> <div class="anime-cover">
     <img src="${anime.image_url}"
     class="anime-cover"/>
    </div`);
});

};
query();


