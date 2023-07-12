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

const mainContainer = document.querySelector("main");

for (let i = 0; i < showsArr[0].date.length; i++) {
  const shows = document.createElement("article");
  shows.classList.add("shows");
  const shows__title = document.createElement("h2");
  shows__title.innerText = "Shows";
  shows__title.classList.add("shows__title");
  shows.appendChild(shows__title);
  const shows__container = document.createElement("section");
  shows__container.classList.add("shows__container");
  shows.appendChild(shows__container);
  const shows__dates = document.createElement("div");
  shows__dates.classList.add("shows__dates");
  shows__container.appendChild(shows__dates);
  const date__text = document.createElement("p");
  date__text.innerText = "DATE";
  date__text.classList.add("shows__small-text");
  shows__dates.appendChild(date__text);
  const date__textTwo = document.createElement("p");
  date__textTwo.classList.add("shows__middle-text", "shows__middle-text--bold");
  date__textTwo.innerText = `${showsArr[0].date[i]}`;
  shows__dates.appendChild(date__textTwo);
  const shows__venue = document.createElement("div");
  shows__venue.classList.add("shows__venue");
  shows__container.appendChild(shows__venue);
  const venue__text = document.createElement("p");
  venue__text.innerText = "VENUE";
  venue__text.classList.add("shows__small-text");
  shows__venue.appendChild(venue__text);
  const venue__name = document.createElement("p");
  venue__name.innerText = `${showsArr[1].venue[i]}`;
  venue__name.classList.add("shows__middle-text");
  shows__venue.appendChild(venue__name);
  const shows__location = document.createElement("div");
  shows__location.classList.add("shows__location");
  shows__container.appendChild(shows__location);
  const location__text = document.createElement("p");
  location__text.classList.add("shows__small-text");
  location__text.innerText = "LOCATION";
  shows__location.appendChild(location__text);
  const location__name = document.createElement("p");
  location__name.classList.add("shows__middle-text");
  location__name.innerText = `${locationConst}`;
  shows__location.appendChild(location__name);
  const shows__button = document.createElement("button");
  shows__button.classList.add("shows__button");
  shows__button.innerText = "BUY TICKETS";
  shows__container.appendChild(shows__button);
  mainContainer.appendChild(shows);
}
