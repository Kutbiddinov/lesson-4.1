let elList = selectEl("#list");
let genreArray = [];

function renderFunc(array, element) {
  array.forEach((film) => {
    let newLi = creatEl("li");
    let newImg = creatEl("img");
    let newh2 = creatEl("h2");
    let newP = creatEl("p");
    let newGenreList = creatEl("ul");
    let newBtn = creatEl("button");

    setAtt(newImg, "src", film.film_image);
    setAtt(newImg, "style", "width: 400px");
    setAtt(newBtn, "type", "button");
    setAtt(newLi, "class", "item");
    setAtt(newImg, "class", "img");
    setAtt(newh2, "class", "h2");
    setAtt(newP, "class", "p");
    setAtt(newGenreList, "class", "genrelist");
    setAtt(newBtn, "class", "btn");

    newh2.textContent = film.title;
    newP.textContent = "Genre:";
    newBtn.textContent = "Show more";

    film.film_genre.forEach((genre) => {
      let newGenreLi = creatEl("li");
      newGenreLi.textContent = genre;
      newGenreList.append(newGenreLi);
    });

    newLi.append(newImg, newh2, newP, newGenreList, newBtn);

    element.append(newLi);
  });
}
renderFunc(filmData, elList);

let fruitArr = ["olma", "anor", "shoftoli", "mandarin"];

function sortGenre(array) {
  array.forEach((film) => {
    film.film_genre.forEach((genre) =>
      genreArray.includes(genre) ? null : genreArray.push(genre)
    );
  });
}

// sortGenre(filmData);
// console.log(genreArray);
