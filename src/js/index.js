const topAnimeAll = async function () {
  const response = await fetch("https://api.jikan.moe/v3/top/anime/1/tv");
  const data = await response.json();

  let topTen = data.top.splice(10, 50);

  data.top.forEach((topTen) => {
    topRated.insertAdjacentHTML(
      "beforeend",
      `<div class="placeholder"> <div class=bg> <p class=anime-title>${topTen.title}</p> <div class="anime-cover">
     <img src="${topTen.image_url}"
     class="anime-cover"/>
    </div></div></div>`
    );
  });
};

/* topAnimeAll(); */

fetch;

const search = async function () {
  const response = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=${amime.name}`
  );
  const data = await response.json();

  let topTen = data.top.splice(10, 50);

  data.top.forEach((topTen) => {
    topRated.insertAdjacentHTML(
      "beforeend",
      `<div class="placeholder"> <div class=bg> <p class=anime-title>${topTen.title}</p> <div class="anime-cover">
     <img src="${topTen.image_url}"
     class="anime-cover"/>
    </div></div></div>`
    );
  });
};

search();
