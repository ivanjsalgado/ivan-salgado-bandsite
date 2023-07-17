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

const selectedElements = document.querySelectorAll(".shows__container");

const removeClass = () => {
  for (const selectedElement of selectedElements) {
    selectedElement.classList.remove("shows__selected");
  }
};

const selected = (e) => {
  removeClass();
  e.target.classList.add("shows__selected");
};

for (let i = 0; i < selectedElements.length; i++) {
  selectedElements[i].addEventListener("click", selected);
}
