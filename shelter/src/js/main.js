/* navigation */
/*
const navlinks = document.querySelectorAll(".navlink");
const navlinkAbout = document.querySelector(".first");

//first.style.borderBottom = `3px solid #f1cdb3`;

for (let navlink of navlinks) {
  navlink.addEventListener("click", () => setActive(navlink));
  navlink.addEventListener("mouseover", () => setHover(navlink));
  navlink.addEventListener("mouseleave", () => removeHover(navlink));
}

function setActive(element) {
  for (let navlink1 of navlinks) {
    navlink1.style.borderBottom = `3px solid transparent`;
    navlink1.style.color = `#cdcdcd`;
  }
  element.style.borderBottom = `3px solid #f1cdb3`;
  element.style.color = `white`;
}

function setHover(element) {
  for (let navlink1 of navlinks) {
    navlink1.style.borderBottom = `3px solid transparent`;
    navlink1.style.color = `#cdcdcd`;
  }
  //element.style.borderBottom = `3px solid #f1cdb3`;
  element.style.color = `white`;
}

function removeHover(element) {
  element.style.borderBottom = `3px solid transparent`;
  element.style.color = `#cdcdcd`;
} */

const mediaQueryLarge = window.matchMedia("screen and (min-width: 1280px)");

const mediaQuery = window.matchMedia(
  "screen and (min-width: 768px) and (max-width: 1279px)"
);

const mediaQuerySmall = window.matchMedia("screen and (max-width: 767px)");

function handleTabletChange(e) {
  if (e.matches) {
    slider(2);
  } /* else slider(3); */
}

function handleTabletChangeSmall(e) {
  if (e.matches) {
    slider(1);
  }
}

function handleTabletChangeLarge(e) {
  if (e.matches) {
    slider(3);
  }
}
mediaQuery.addListener(handleTabletChange);
mediaQuerySmall.addListener(handleTabletChangeSmall);
mediaQueryLarge.addListener(handleTabletChangeLarge);

handleTabletChange(mediaQuery);
handleTabletChangeSmall(mediaQuerySmall);
handleTabletChangeLarge(mediaQueryLarge);

/* slider */

function slider(number) {
  const RightBtn = document.querySelector(".right-button");
  const LeftBtn = document.querySelector(".left-button");
  const sidebar = document.querySelector(".cards");
  const cardsCount = document.querySelectorAll(".cards > div").length;
  const pets = document.querySelectorAll(".pet");
  const container = document.querySelector(".slider");

  let result = [];
  let arr = [];
  let flag = 0;

  displaySlides();

  LeftBtn.addEventListener("click", () => displaySlides());
  RightBtn.addEventListener("click", () => displaySlides());

  function displaySlides() {
    arr = [];
    for (let i = 0; i < cardsCount; i++) {
      if (!result.includes(i)) arr.push(i);
    }

    getRandomNumber(arr);
    pets.forEach((element) => {
      element.style.display = `none`;
      // element.style.transition = `left 2s`;
      // element.style.left = `-2500px`;
    });

    pets.forEach((element) => {
      element.style.display = `none`;
    });

    for (let i = 0; i < number; i++) {
      pets[result[i]].style.display = `block`;
    }
  }

  function getRandomNumber(arr) {
    for (let i = 0; i < number; i++) {
      let index = Math.floor(Math.random() * arr.length);
      result[i] = arr.splice(index, 1)[0];
    }
    return result;
  }
}
