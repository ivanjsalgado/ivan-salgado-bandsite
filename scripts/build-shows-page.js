let pulledArr;
let selectedElements;
const api =
  "https://project-1-api.herokuapp.com/showdates/?api_key=<af87379d-e746-4710-9695-e27430d52d03>";

axios.get(api).then((response) => {
  pulledArr = response.data;
  functionRow("shows__small-text-visible", 0, grandChild);
  for (let i = 1; i < pulledArr.length; i++) {
    functionRow("shows__hide", i, copyGrandChild);
  }
  selectedElements = document.querySelectorAll(".shows__container");
  for (let i = 0; i < selectedElements.length; i++) {
    selectedElements[i].addEventListener("click", selected);
  }
});

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
    `${new Date(pulledArr[i].date).toDateString()}`
  );
  greatGrandChild = createCard("div", child, ["shows__venue"]);
  createCard("p", greatGrandChild, ["shows__small-text", hide], "VENUE");
  createCard(
    "p",
    greatGrandChild,
    ["shows__middle-text"],
    `${pulledArr[i].place}`
  );
  greatGrandChild = createCard("div", child, ["shows__location"]);
  createCard("p", greatGrandChild, ["shows__small-text", hide], "LOCATION");
  createCard(
    "p",
    greatGrandChild,
    ["shows__middle-text"],
    `${pulledArr[i].location}`
  );
  createCard("button", child, ["shows__button"], "BUY TICKETS");
};

const removeClass = () => {
  for (const selectedElement of selectedElements) {
    selectedElement.classList.remove("shows__selected");
  }
};

const selected = (e) => {
  removeClass();
  e.target.classList.add("shows__selected");
};
