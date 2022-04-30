/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/elements.scss":
/*!*******************************!*\
  !*** ./src/css/elements.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/elements.scss?");

/***/ }),

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/fonts.css?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/main.scss?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/utils/_mixins.scss":
/*!************************************!*\
  !*** ./src/css/utils/_mixins.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/utils/_mixins.scss?");

/***/ }),

/***/ "./src/css/variables.scss":
/*!********************************!*\
  !*** ./src/css/variables.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/variables.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/fonts.css */ \"./src/css/fonts.css\");\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/variables.scss */ \"./src/css/variables.scss\");\n/* harmony import */ var _css_elements_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/elements.scss */ \"./src/css/elements.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _js_petsdata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/petsdata.js */ \"./src/js/petsdata.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _css_utils_mixins_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/utils/_mixins.scss */ \"./src/css/utils/_mixins.scss\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shelter/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_petsdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/petsdata.js */ \"./src/js/petsdata.js\");\n/* navigation */\r\n/*\r\nconst navlinks = document.querySelectorAll(\".navlink\");\r\nconst navlinkAbout = document.querySelector(\".first\");\r\n\r\n//first.style.borderBottom = `3px solid #f1cdb3`;\r\n\r\nfor (let navlink of navlinks) {\r\n  navlink.addEventListener(\"click\", () => setActive(navlink));\r\n  navlink.addEventListener(\"mouseover\", () => setHover(navlink));\r\n  navlink.addEventListener(\"mouseleave\", () => removeHover(navlink));\r\n}\r\n\r\nfunction setActive(element) {\r\n  for (let navlink1 of navlinks) {\r\n    navlink1.style.borderBottom = `3px solid transparent`;\r\n    navlink1.style.color = `#cdcdcd`;\r\n  }\r\n  element.style.borderBottom = `3px solid #f1cdb3`;\r\n  element.style.color = `white`;\r\n}\r\n\r\nfunction setHover(element) {\r\n  for (let navlink1 of navlinks) {\r\n    navlink1.style.borderBottom = `3px solid transparent`;\r\n    navlink1.style.color = `#cdcdcd`;\r\n  }\r\n  //element.style.borderBottom = `3px solid #f1cdb3`;\r\n  element.style.color = `white`;\r\n}\r\n\r\nfunction removeHover(element) {\r\n  element.style.borderBottom = `3px solid transparent`;\r\n  element.style.color = `#cdcdcd`;\r\n} */\r\n\r\nlet petsJS = [];\r\n\r\n\r\n\r\nfor (let elem of _src_js_petsdata_js__WEBPACK_IMPORTED_MODULE_0__.petsArray) {\r\n  petsJS.push(elem.name);\r\n}\r\n\r\n//console.log(petsJS);\r\n\r\n/* ----------------------------slider---------------------------------------- */\r\n\r\n// const petsJS = [\r\n//   \"Freddie\",\r\n//   \"Jennifer\",\r\n//   \"Katrine\",\r\n//   \"Scarlet\",\r\n//   \"Charly\",\r\n//   \"Sophia\",\r\n//   \"Timmy\",\r\n//   \"Woody\",\r\n// ];\r\n\r\nconst cardsCount = petsJS.length;\r\n\r\nlet result = [];\r\nlet arr = [];\r\n\r\nconst LeftBtn = document.querySelector(\".right-button\");\r\nconst RightBtn = document.querySelector(\".left-button\");\r\nconst sidebar = document.querySelector(\".cardsWrapper\");\r\nlet number;\r\n\r\nconst mediaQueryLarge = window.matchMedia(\"screen and (min-width: 1280px)\");\r\n\r\nconst mediaQuery = window.matchMedia(\r\n  \"screen and (min-width: 768px) and (max-width: 1279px)\"\r\n);\r\n\r\nconst mediaQuerySmall = window.matchMedia(\"screen and (max-width: 767px)\");\r\n\r\nfunction handleTabletChange(e) {\r\n  if (e.matches) {\r\n    number = 2;\r\n    let pets = document.querySelectorAll(\".cards\");\r\n    pets.forEach((element) => {\r\n      element.remove();\r\n    });\r\n    displaySlides();\r\n  } /* else slider(3); */\r\n}\r\n\r\nfunction handleTabletChangeSmall(e) {\r\n  if (e.matches) {\r\n    number = 1;\r\n    let pets = document.querySelectorAll(\".cards\");\r\n    pets.forEach((element) => {\r\n      element.remove();\r\n    });\r\n    displaySlides();\r\n  }\r\n}\r\n\r\nfunction handleTabletChangeLarge(e) {\r\n  if (e.matches) {\r\n    number = 3;\r\n    let pets = document.querySelectorAll(\".cards\");\r\n    pets.forEach((element) => {\r\n      element.remove();\r\n    });\r\n    displaySlides();\r\n  }\r\n}\r\nmediaQuery.addListener(handleTabletChange);\r\nmediaQuerySmall.addListener(handleTabletChangeSmall);\r\nmediaQueryLarge.addListener(handleTabletChangeLarge);\r\n\r\nhandleTabletChange(mediaQuery);\r\nhandleTabletChangeSmall(mediaQuerySmall);\r\nhandleTabletChangeLarge(mediaQueryLarge);\r\n\r\nLeftBtn.addEventListener(\"click\", displaySlidesLeft);\r\nRightBtn.addEventListener(\"click\", displaySlidesRight);\r\n\r\nfunction displaySlidesLeft() {\r\n  LeftBtn.removeEventListener(\"click\", displaySlidesLeft);\r\n  RightBtn.removeEventListener(\"click\", displaySlidesRight);\r\n\r\n  sidebar.style.flexDirection = \"row\";\r\n\r\n  displaySlides();\r\n\r\n  setTimeout(() => moveLeft(), 100);\r\n}\r\n\r\nfunction displaySlidesRight() {\r\n  LeftBtn.removeEventListener(\"click\", displaySlidesLeft);\r\n  RightBtn.removeEventListener(\"click\", displaySlidesRight);\r\n\r\n  sidebar.style.flexDirection = \"row-reverse\";\r\n  displaySlides();\r\n\r\n  setTimeout(() => moveRight(), 100);\r\n}\r\n\r\nfunction moveLeft() {\r\n  let insides = document.querySelectorAll(\".cards\");\r\n\r\n  for (let i = 0; i < insides.length; i++) {\r\n    insides[i].style.transition = `transform 2s ease`;\r\n    insides[i].style.transform = `translateX(-${\r\n      parseInt(window.getComputedStyle(sidebar).width) +\r\n      parseInt(window.getComputedStyle(sidebar).gap)\r\n    }px)`;\r\n    if (i == 1)\r\n      setTimeout(\r\n        () => (\r\n          (insides[i].style.transition = ``),\r\n          (insides[i].style.transform = `translateX(0)`),\r\n          LeftBtn.addEventListener(\"click\", displaySlidesLeft),\r\n          RightBtn.addEventListener(\"click\", displaySlidesRight)\r\n        ),\r\n        2000\r\n      );\r\n\r\n    if (i == 0) setTimeout(() => insides[i].remove(), 2000);\r\n  }\r\n}\r\n\r\nfunction moveRight() {\r\n  let insides = document.querySelectorAll(\".cards\");\r\n\r\n  for (let i = 0; i < insides.length; i++) {\r\n    insides[i].style.transition = `transform 2s ease`;\r\n    insides[i].style.transform = `translateX(${\r\n      parseInt(window.getComputedStyle(sidebar).width) +\r\n      parseInt(window.getComputedStyle(sidebar).gap)\r\n    }px)`;\r\n    if (i == 1)\r\n      setTimeout(\r\n        () => (\r\n          (insides[i].style.transition = ``),\r\n          (insides[i].style.transform = `translateX(0)`),\r\n          LeftBtn.addEventListener(\"click\", displaySlidesLeft),\r\n          RightBtn.addEventListener(\"click\", displaySlidesRight)\r\n        ),\r\n        2000\r\n      );\r\n\r\n    if (i == 0) setTimeout(() => insides[i].remove(), 2000);\r\n  }\r\n}\r\n\r\nfunction displaySlides() {\r\n  arr = [];\r\n  for (let i = 0; i < cardsCount; i++) {\r\n    if (!result.includes(i)) arr.push(i);\r\n  }\r\n\r\n  getRandomNumber(arr);\r\n\r\n  sidebar.insertAdjacentHTML(`beforeend`, `<div class=\"cards temp\"></div>`);\r\n\r\n  let sidebarInside = document.querySelector(\".temp\");\r\n\r\n  for (let i = 0; i < number; i++) {\r\n    sidebarInside.insertAdjacentHTML(\r\n      `beforeend`,\r\n      `<div class=\"pet\" data-name=\"${petsJS[result[i]]}\"><div class=\"img_pet\">\r\n      <img src=\"../../assets/images/pets-${petsJS[\r\n        result[i]\r\n      ].toLowerCase()}.png\" /></div>\r\n      <div class=\"name\">${petsJS[result[i]]}</div>\r\n      <div class=\"buttonw buttonw1\">Learn more</div></div>`\r\n    );\r\n  }\r\n\r\n  sidebarInside.classList.remove(\"temp\");\r\n\r\n  /*  pets[result[i]].style.display = `block`;   */\r\n}\r\n\r\nfunction getRandomNumber(arr) {\r\n  for (let i = 0; i < number; i++) {\r\n    let index = Math.floor(Math.random() * arr.length);\r\n    result[i] = arr.splice(index, 1)[0];\r\n  }\r\n  return result;\r\n}\r\n\r\n/*--------------------modal window--------------------------------*/\r\n\r\nlet petName;\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n  let learnMores = document.querySelectorAll(\".pet\");\r\n  // console.log(learnMores);\r\n\r\n  learnMores.forEach((Element) => {\r\n    if (e.composedPath().includes(Element)) {\r\n      //     console.log(Element);\r\n      petName = Element.getAttribute(\"data-name\");\r\n      //   console.log(petName);\r\n\r\n      for (let elem of _src_js_petsdata_js__WEBPACK_IMPORTED_MODULE_0__.petsArray) {\r\n        if (elem.name == petName) {\r\n          const modal = document.createElement(\"div\");\r\n          modal.classList.add(\"modal_wrap\");\r\n\r\n          modal.innerHTML = `<div class=\"modal_window\">\r\n          <div class = \"modal_image_wrap\">\r\n            <img src=\"${elem.img.toLowerCase()}\" alt=\"\" class=\"modal_image\" />\r\n          </div>\r\n          <div class = \"modal_text_wrap\">\r\n            <h3>${elem.name}</h3>\r\n            <h4>${elem.type} - ${elem.breed}</h4>\r\n            <h5>${elem.description}</h5> \r\n            <ul class = \"modal_caracter\">\r\n            <li><strong>Age: </strong>${elem.age}</li>\r\n            <li><strong>Inoculations: </strong>${elem.inoculations}</li>\r\n            <li><strong>Diseases: </strong>${elem.diseases}</li>\r\n            <li><strong>Parasites: </strong>${elem.parasites}</li>\r\n            </ul>  \r\n          </div>    \r\n          <button class=\"modal_close\" id=\"button\"><img src=\"../../assets/images/Vector.png\" /></button> \r\n          </div>`;\r\n\r\n          //         console.log(modal);\r\n\r\n          document.body.append(modal);\r\n          document.body.style.overflow = \"hidden\";\r\n\r\n          const modalWrap = document.querySelector(\".modal_wrap\");\r\n          const modalWindow = document.querySelector(\".modal_window\");\r\n\r\n          const modalImageWrap = document.querySelector(\".modal_image_wrap\");\r\n\r\n          setTimeout(() => (modalWindow.style.transform = `scale(1)`), 100);\r\n\r\n          button.onclick = function () {\r\n            modal.remove();\r\n            document.body.style.overflow = \"\";\r\n          };\r\n\r\n          modalWrap.onclick = function (event) {\r\n            if (event.target == modalWrap) {\r\n              modal.remove();\r\n              document.body.style.overflow = \"\";\r\n            }\r\n          };\r\n          modalWrap.onmouseover = function (event) {\r\n            if (event.target == modalWrap) {\r\n              button.style.backgroundColor = `#fddcc4`;\r\n              button.style.border = `2px solid #fddcc4`;\r\n              modalWrap.style.cursor = `pointer`;\r\n            } else {\r\n              button.style.backgroundColor = ``;\r\n              button.style.border = ``;\r\n              modalWrap.style.cursor = ``;\r\n            }\r\n          };\r\n        }\r\n      }\r\n    }\r\n  });\r\n});\r\n\r\n/*--------------------------burger---------------------------------*/\r\n\r\nconst burger = document.querySelector(\".burger\");\r\nlet burgerMenuWrap;\r\nlet burgerMenu;\r\nlet navlinkBurger;\r\n\r\nburger.onclick = function (event) {\r\n  let test = document.querySelector(\".burgermenu_wrap\");\r\n  if (test) {\r\n    setTimeout(\r\n      () => (\r\n        (burgerMenu.style.transform = `translateX(0)`),\r\n        (burger.style.transform = `rotate(0deg)`)\r\n      ),\r\n      100\r\n    );\r\n    setTimeout(\r\n      () => (burgerMenuWrap.remove(), (document.body.style.overflow = \"\")),\r\n      2100\r\n    );\r\n    return;\r\n  }\r\n\r\n  burgerMenuWrap = document.createElement(\"div\");\r\n  burgerMenuWrap.classList.add(\"burgermenu_wrap\");\r\n\r\n  burgerMenuWrap.innerHTML = `<div class=\"burgermenu\">\r\n  <div class=\"logo_burger\">\r\n       <h1>Cozy House</h1>\r\n       <div class=\"pp\">Shelter for pets in Boston</div>\r\n  </div>\r\n  <nav class=\"navmenu_burger\">\r\n  <ul>\r\n    <li>\r\n      <a href=\"#\"\r\n        ><div class=\"navlink_burger first\">About the shelter</div></a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a href=\"../pets/index.html\"\r\n        ><div class=\"navlink_burger\">Our pets</div></a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a href=\"#help\"><div class=\"navlink_burger\">Help the shelter</div></a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#contacts\"><div class=\"navlink_burger\">Contacts</div></a>\r\n    </li>\r\n  </ul>\r\n  </nav>\r\n  </div>`;\r\n\r\n  document.body.style.overflow = \"hidden\";\r\n  document.body.append(burgerMenuWrap);\r\n\r\n  burgerMenu = document.querySelector(\".burgermenu\");\r\n  setTimeout(\r\n    () => (\r\n      (burgerMenu.style.transform = `translateX(-320px)`),\r\n      (burger.style.transform = `rotate(90deg)`)\r\n    ),\r\n    100\r\n  );\r\n\r\n  //navlinkBurger = document.querySelectorAll(\".navlink_burger\");\r\n  burgerMenuWrap.onclick = function (event) {\r\n    console.log(event.target);\r\n    if (\r\n      event.target == burgerMenuWrap ||\r\n      event.target.classList.contains(\"navlink_burger\")\r\n    ) {\r\n      setTimeout(\r\n        () => (\r\n          (burgerMenu.style.transform = `translateX(0)`),\r\n          (burger.style.transform = `rotate(0deg)`)\r\n        ),\r\n        100\r\n      );\r\n      setTimeout(\r\n        () => (burgerMenuWrap.remove(), (document.body.style.overflow = \"\")),\r\n        2100\r\n      );\r\n    }\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://shelter/./src/js/main.js?");

/***/ }),

/***/ "./src/js/petsdata.js":
/*!****************************!*\
  !*** ./src/js/petsdata.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"petsArray\": () => (/* binding */ petsArray)\n/* harmony export */ });\nconst json = `[\r\n    {\r\n      \"name\": \"Jennifer\",\r\n      \"img\": \"../../assets/images/pets-jennifer.png\",\r\n      \"type\": \"Dog\",\r\n      \"breed\": \"Labrador\",\r\n      \"description\": \"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.\",\r\n      \"age\": \"2 months\",\r\n      \"inoculations\": [\"none\"],\r\n      \"diseases\": [\"none\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Sophia\",\r\n      \"img\": \"../../assets/images/pets-sophia.png\",\r\n      \"type\": \"Dog\",\r\n      \"breed\": \"Shih tzu\",\r\n      \"description\": \"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.\",\r\n      \"age\": \"1 month\",\r\n      \"inoculations\": [\"parvovirus\"],\r\n      \"diseases\": [\"none\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Woody\",\r\n      \"img\": \"../../assets/images/pets-woody.png\",\r\n      \"type\": \"Dog\",\r\n      \"breed\": \"Golden Retriever\",\r\n      \"description\": \"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.\",\r\n      \"age\": \"3 years 6 months\",\r\n      \"inoculations\": [\"adenovirus\", \"distemper\"],\r\n      \"diseases\": [\"right back leg mobility reduced\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Scarlett\",\r\n      \"img\": \"../../assets/images/pets-scarlett.png\",\r\n      \"type\": \"Dog\",\r\n      \"breed\": \"Jack Russell Terrier\",\r\n      \"description\": \"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.\",\r\n      \"age\": \"3 months\",\r\n      \"inoculations\": [\"parainfluenza\"],\r\n      \"diseases\": [\"none\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Katrine\",\r\n      \"img\": \"../../assets/images/pets-katrine.png\",\r\n      \"type\": \"Cat\",\r\n      \"breed\": \"British Shorthair\",\r\n      \"description\": \"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.\",\r\n      \"age\": \"6 months\",\r\n      \"inoculations\": [\"panleukopenia\"],\r\n      \"diseases\": [\"none\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Timmy\",\r\n      \"img\": \"../../assets/images/pets-timmy.png\",\r\n      \"type\": \"Cat\",\r\n      \"breed\": \"British Shorthair\",\r\n      \"description\": \"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.\",\r\n      \"age\": \"2 years 3 months\",\r\n      \"inoculations\": [\"calicivirus\", \"viral rhinotracheitis\"],\r\n      \"diseases\": [\"kidney stones\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Freddie\",\r\n      \"img\": \"../../assets/images/pets-freddie.png\",\r\n      \"type\": \"Cat\",\r\n      \"breed\": \"British Shorthair\",\r\n      \"description\": \"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.\",\r\n      \"age\": \"2 months\",\r\n      \"inoculations\": [\"rabies\"],\r\n      \"diseases\": [\"none\"],\r\n      \"parasites\": [\"none\"]\r\n    },\r\n    {\r\n      \"name\": \"Charly\",\r\n      \"img\": \"../../assets/images/pets-charly.png\",\r\n      \"type\": \"Dog\",\r\n      \"breed\": \"Jack Russell Terrier\",\r\n      \"description\": \"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.\",\r\n      \"age\": \"8 years\",\r\n      \"inoculations\": [\"bordetella bronchiseptica\", \"leptospirosis\"],\r\n      \"diseases\": [\"deafness\", \"blindness\"],\r\n      \"parasites\": [\"lice\", \"fleas\"]\r\n    }\r\n  ]`;\r\n\r\nconst petsArray = JSON.parse(json);\r\n// console.log(obj);\r\n// console.log(obj[0].name);\r\n\n\n//# sourceURL=webpack://shelter/./src/js/petsdata.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;