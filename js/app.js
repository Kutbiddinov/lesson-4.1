let elList = selectEl("#list");
let genreArray = [];

function renderFunc(array, element) {
  array.forEach((film) => {
    let newLi = creatEl("li");
    let newImg = creatEl("img");
    let newh2 = creatEl("h2");
    let newP = creatEl("p");
    // let newGenreList = creatEl("ul");
    let newBtn = creatEl("button");

    setAtt(newImg, "src", film.film_image);
    setAtt(newImg, "style", "width: 244px;");
    setAtt(newBtn, "type", "button");
    setAtt(newLi, "style", "border: 1px solid; width: 244px; height: 486px;");
    setAtt(newh2, "style", "width: 244px; margin: 0px 0px 10px 10px; font-family: 'Roboto'; font-style: normal; font-weight: 500; font-size: 22px; line-height: 26px; color: #FFFFFF;");
    setAtt(newP, "style", " margin: 0px 0px 10px 10px; font-family: 'Roboto'; font-style: normal; font-weight: 400; font-size: 20px; line-height: 23px; color: #FFFFFF;");
    // setAtt(newGenreList, "class", "genrelist");

    newh2.textContent = film.title;
    newP.textContent = film.description;
    newBtn.textContent = "Show more";

    // film.film_genre.forEach((genre) => {
    //   let newGenreLi = creatEl("li");
    //   newGenreLi.textContent = genre;
    //   newGenreList.append(newGenreLi);
    // });

    newLi.append(newImg, newh2, newP, newBtn);

    element.append(newLi);
  });
}
renderFunc(filmData, elList);