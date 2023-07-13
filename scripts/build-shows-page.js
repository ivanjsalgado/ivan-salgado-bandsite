let locationConst = "San Francisco, CA";
let showsArr = [
  {
    date: [
      "Mon Sept 06 2021",
      "Tue Sept 21 2021",
      "Fri Oct 15 2021",
      "Sat Nov 06 2021",
      "Fri Nov 26 2021",
      "Wed Dec 15 2021",
    ],
  },
  {
    venue: [
      "Ronald Lane",
      "Pier 3 East",
      "View Lounge",
      "Hyatt Agency",
      "Moscow Center",
      "Press Club",
    ],
  },
];

const parent = document.querySelector("main");

let createCard = (element, parent, className, text) => {
  const card = document.createElement(element);
  if (className.length > 1) {
    for (let i = 0; i < className.length; i++) {
      card.classList.add(className[i]);
    }
  }
  if (className.length === 1) {
    card.classList.add(className[0]);
  }
  if (text !== undefined) {
    card.innerText = text;
  }
  parent.appendChild(card);
  return card;
};

let grandChild;
let greatGrandChild;
let child = createCard("article", parent, ["shows"]);
grandChild = createCard("h2", child, ["shows__title"], "Shows");
grandChild = createCard("div", child, ["shows__div"]);
let copyGrandChild = grandChild;

let i = 0;

let functionRow = (hide, i, copyGrandChild) => {
  child = createCard("section", copyGrandChild, ["shows__container"]);
  greatGrandChild = createCard("div", child, ["shows__dates"]);
  copyGrandChild = createCard(
    "p",
    greatGrandChild,
    ["shows__small-text", hide],
    "DATE"
  );
  createCard(
    "p",
    greatGrandChild,
    ["shows__middle-text", "shows__middle-text--bold"],
    `${showsArr[0].date[i]}`
  );
  greatGrandChild = createCard("div", child, ["shows__venue"]);
  createCard("p", greatGrandChild, ["shows__small-text", hide], "VENUE");
  createCard(
    "p",
    greatGrandChild,
    ["shows__middle-text"],
    `${showsArr[1].venue[i]}`
  );
  greatGrandChild = createCard("div", child, ["shows__location"]);
  createCard("p", greatGrandChild, ["shows__small-text", hide], "LOCATION");
  createCard("p", greatGrandChild, ["shows__middle-text"], locationConst);
  createCard("button", child, ["shows__button"], "BUY TICKETS");
};

functionRow("shows__small-text-visible", 0, grandChild);

for (let i = 1; i < showsArr[0].date.length; i++) {
  functionRow("shows__hide", i, copyGrandChild);
}

// const shows = document.createElement("article");
// shows.classList.add("shows");
// mainContainer.appendChild(shows);
// const shows__title = document.createElement("h2");
// shows__title.innerText = "Shows";
// shows__title.classList.add("shows__title");
// shows.appendChild(shows__title);
// const shows__div = document.createElement("div");
// shows__div.classList.add("shows__div");
// shows.appendChild(shows__div);

// const shows__container = document.createElement("section");
// shows__container.classList.add("shows__container");
// shows__div.appendChild(shows__container);
// const shows__dates = document.createElement("div");
// shows__dates.classList.add("shows__dates");
// shows__container.appendChild(shows__dates);

// const date__text = document.createElement("p");
// date__text.innerText = "DATE";
// date__text.classList.add("shows__small-text", hide);
// shows__dates.appendChild(date__text);
// const date__textTwo = document.createElement("p");
// date__textTwo.classList.add("shows__middle-text", "shows__middle-text--bold");
// date__textTwo.innerText = `${showsArr[0].date[i]}`;
// shows__dates.appendChild(date__textTwo);

// const shows__venue = document.createElement("div");
// shows__venue.classList.add("shows__venue");
// shows__container.appendChild(shows__venue);

// const venue__text = document.createElement("p");
// venue__text.innerText = "VENUE";
// venue__text.classList.add("shows__small-text", hide);
// shows__venue.appendChild(venue__text);
// const venue__name = document.createElement("p");
// venue__name.innerText = `${showsArr[1].venue[i]}`;
// venue__name.classList.add("shows__middle-text");
// shows__venue.appendChild(venue__name);

// const location__name = document.createElement("p");
// location__name.classList.add("shows__middle-text");
// location__name.innerText = locationConst;
// shows__location.appendChild(location__name);
// const shows__location = document.createElement("div");
// shows__location.classList.add("shows__location");
// shows__container.appendChild(shows__location);
// const location__text = document.createElement("p");
// location__text.classList.add("shows__small-text", hide);
// location__text.innerText = "LOCATION";
// shows__location.appendChild(location__text);

// shows__button.classList.add("shows__button");
// shows__button.innerText = "BUY TICKETS";
// shows__container.appendChild(shows__button);
// const shows__button = document.createElement("button");
