let pulledArr;
let newComment = [];
const api =
  "https://project-1-api.herokuapp.com/comments/?api_key=<af87379d-e746-4710-9695-e27430d52d03>";

axios.get(api).then((response) => {
  pulledArr = response.data;
  displayComment(response.data, 0, 3);
});

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

let displayComment = (arr, start, end) => {
  for (let i = start; i < end; i++) {
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
      `${new Date(arr[i].timestamp).toLocaleDateString()}`
    );
    grandChild = createCard("div", child, "comments__text-container");
    greatGrandChild = createCard(
      "p",
      grandChild,
      "comments__text",
      `${arr[i].comment}`
    );
  }
};

let form = document.getElementById("form");

form.addEventListener("submit", retrieveComment);

function retrieveComment(e) {
  e.preventDefault();
  let obj = { name: "", comment: "", timestamp: "" };
  let userName = document.getElementById("name").value;
  let userComment = document.getElementById("comment-area").value;
  let date = new Date();
  obj.name = userName;
  obj.timestamp = date;
  obj.comment = userComment;
  axios
    .post(api, {
      name: userName,
      comment: userComment,
    })
    .then((result) => {
      form.reset();
      divContainer.innerHTML = "";
      newComment.unshift(result.data);
      displayComment(newComment, 0, newComment.length);
      displayComment(pulledArr, 0, 3);
    });
}
