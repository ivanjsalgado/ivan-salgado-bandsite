let arr = [
  {
    name: ["Connor Walton", "Emilie Beach", "Miles Acosta"],
  },
  {
    date: ["02/17/2021", "01/09/2021", "12/20/2020"],
  },
  {
    text: [
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    ],
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

let functionRow = () => {
  for (let i = 0; i < arr.length; i++) {
    let child = createCard("section", parent, "comments__submitted");
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
      `${arr[0].name[i]}`
    );
    greatGrandChild = createCard(
      "p",
      grandChild,
      "comments__new-comment-date",
      `${arr[1].date[i]}`
    );
    grandChild = createCard("div", child, "comments__text-container");
    greatGrandChild = createCard(
      "p",
      grandChild,
      "comments__text",
      `${arr[2].text[i]}`
    );
  }
};

functionRow();
