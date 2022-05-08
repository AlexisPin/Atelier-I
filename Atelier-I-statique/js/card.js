/*
let cardlist = [
        {
            family_src:"https://imgc.allpostersimages.com/img/print/affiches/marvel-super-hero-squad-iron-man-standing_a-G-9448041-4985690.jpg",
            family_name:"Jose",
            image_src:"https://imgc.allpostersimages.com/img/print/affiches/marvel-super-hero-squad-iron-man-standing_a-G-9448041-4985690.jpg",
            date:"14h",
            comment:"3 comments",
            like: "17 likes",
            button: "Buy"
        },
        {
            family_src:"https://media.giphy.com/media/l4q8hciiYNT5RGi4w/giphy.gif",
            family_name:"John",
            image_src:"https://media.giphy.com/media/l4q8hciiYNT5RGi4w/giphy.gif",
            date:"1h",
            comment:"345 comments",
            like: "1000 likes",
            button: "Read"
        },
        {
            family_src:"http://www.superherobroadband.com/app/themes/superhero/assets/img/superhero.gif",
            family_name:"Elliot",
            image_src:"http://www.superherobroadband.com/app/themes/superhero/assets/img/superhero.gif",
            date:"142h",
            comment:"0 comment",
            like: "1 likes",
            button: "Read"
        }

    ];
*/
function generate() {
  const GET_CHUCK_URL = "https://asi2-backend-market.herokuapp.com/cards";
  let context = {
    method: "GET",
  };

  fetch(GET_CHUCK_URL, context)
    .then((response) => response.json())
    .then((response) => callback(response))
    .catch((error) => err_callback(error));
}

function callback(response) {
  let cardlist = [];
  for (i in response) {
    cardlist.push(response[i]);
  }
  console.log(cardlist);
  Display(cardlist);
}

function err_callback(error) {
  console.log(error);
}

generate();

function Display(cardlist) {
  let template = document.querySelector("#selectedCard");

  for (const card of cardlist) {
    let clone = document.importNode(template.content, true);

    newContent = clone.firstElementChild.innerHTML
      .replace(/{{family_src}}/g, card.smallImgUrl)
      .replace(/{{family_name}}/g, card.family)
      .replace(/{{image_src}}/g, card.image_src);
    //.replace(/{{date}}/g, card.date)
    //.replace(/{{comment}}/g, card.comment)
    //.replace(/{{like}}/g, card.like)
    // .replace(/{{button}}/g, card.button);
    clone.firstElementChild.innerHTML = newContent;

    let cardContainer = document.querySelector("#gridContainer");
    cardContainer.appendChild(clone);
  }
}
