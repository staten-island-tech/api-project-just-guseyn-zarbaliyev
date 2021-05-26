//============================================= CLEARS PAGE

const result = document.getElementById("result");
function freshenUp() {
  result.innerHTML = "";
}

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  freshenUp();
});

//============================================= INSERTS TOP ANIME OF ALL TIME

const topAnimeAll = async function () {
  const response = await fetch("https://api.jikan.moe/v3/top/anime/1/tv");
  const data = await response.json();

  let topTen = data.top.splice(15, 50);

  data.top.forEach((topTen) => {
    result.insertAdjacentHTML(
      "beforeend",
      ` <div class="anime-container"> 
      <div class=bg>
          <p class=anime-title>${topTen.title}</p> 
          <div class="anime-cover-parent">
          <img src="${topTen.image_url}" class="anime-cover-child"/>
          </div>
          <p class="anime-desc">Score: ${topTen.score}</p>
          <p class="anime-desc"> Released: ${topTen.start_date}</p>
    </div>
    </div>`
    );
  });
};

const topAnime = document.getElementById("anime-top-all");
topAnime.addEventListener("click", () => {
  freshenUp();
  topAnimeAll();
});

//============================================= INSERTS TOP ANIME AIRING

const topAnimeAir = async function () {
  const response = await fetch("https://api.jikan.moe/v3/top/anime/1/airing");
  const data = await response.json();

  let topTen = data.top.splice(15, 50);

  data.top.forEach((topTen) => {
    result.insertAdjacentHTML(
      "beforeend",
      `<div class="anime-container"> 
      <div class=bg>
          <p class=anime-title>${topTen.title}</p> 
          <div class="anime-cover-parent">
          <img src="${topTen.image_url}" class="anime-cover-child"/>
          </div>
          <p class="anime-desc">Score: ${topTen.score}</p>
          <p class="anime-desc"> Released: ${topTen.start_date}</p>
    </div>
    </div>`
    );
  });
};

const airAnimeBtn = document.getElementById("anime-top-air");
airAnimeBtn.addEventListener("click", () => {
  freshenUp();
  topAnimeAir();
});

//============================================= INSERTS MY TOP ANIME

/* https://api.jikan.moe/v3/search/anime?q=Bleach */
