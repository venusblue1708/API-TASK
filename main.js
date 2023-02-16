let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
let wrapper = document.querySelector(".wrapper");
fetch(API).then((data) =>
  data.json().then((elem) => {
    elem.Search.forEach((item) => {
      wrapper.innerHTML += `
      <div class="wrapper__child_block">
      <img src=${item.Poster} class="img">
      <h4 class ='title'>${item.Title}</h4>
      <h5 class='year'>Year: ${item.Year}</h5>
      </div>
        `;
    });
  })
);
