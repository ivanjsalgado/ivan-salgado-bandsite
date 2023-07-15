let arr = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let createCard = (element, parent, className, text) => {
  const card = document.createElement(element);
  card.classList.add(className);
  if (text !== undefined) {
    card.innerText = text;
  }
  parent.appendChild(card);
  return card;
};

const parent = document.querySelector(".comments");
let divContainer = createCard("div", parent, "comments__div-submitted");

let displayComment = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let child = createCard("section", divContainer, "comments__submitted");
    let grandChild = createCard("div", child, "comments__new-comment");
    let greatGrandChild = createCard(
      "div",
      grandChild,
      "comments__submit-photo"
    );
    greatGrandChild = createCard(
      "p",
      grandChild,
      "comments__new-comment-name",
      `${arr[i].name}`
    );
    greatGrandChild = createCard(
      "p",
      grandChild,
      "comments__new-comment-date",
      `${arr[i].date}`
    );
    grandChild = createCard("div", child, "comments__text-container");
    greatGrandChild = createCard(
      "p",
      grandChild,
      "comments__text",
      `${arr[i].text}`
    );
  }
};

let form = document.getElementById("form");

form.addEventListener("submit", retrieveComment);

function retrieveComment(e) {
  e.preventDefault();
  let obj = { name: "", date: "", text: "" };
  let userName = document.getElementById("name").value;
  let userComment = document.getElementById("comment-area").value;
  let date = new Date().toLocaleDateString();
  obj.name = userName;
  obj.date = date;
  obj.text = userComment;
  arr.unshift(obj);
  divContainer.innerHTML = "";
  form.reset();
  displayComment(arr);
}

displayComment(arr);
