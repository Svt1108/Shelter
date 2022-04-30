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

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/pets.scss":
/*!***************************!*\
  !*** ./src/css/pets.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/pets.scss?");

/***/ }),

/***/ "./src/css/variables.scss":
/*!********************************!*\
  !*** ./src/css/variables.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shelter/./src/css/variables.scss?");

/***/ }),

/***/ "./src/index_pet.js":
/*!**************************!*\
  !*** ./src/index_pet.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/fonts.css */ \"./src/css/fonts.css\");\n/* harmony import */ var _css_variables_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/variables.scss */ \"./src/css/variables.scss\");\n/* harmony import */ var _css_elements_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/elements.scss */ \"./src/css/elements.scss\");\n/* harmony import */ var _css_pets_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/pets.scss */ \"./src/css/pets.scss\");\n/* harmony import */ var _js_petsdata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/petsdata.js */ \"./src/js/petsdata.js\");\n/* harmony import */ var _js_pet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/pet.js */ \"./src/js/pet.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://shelter/./src/index_pet.js?");

/***/ }),

/***/ "./src/js/pet.js":
/*!***********************!*\
  !*** ./src/js/pet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_js_petsdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/js/petsdata.js */ \"./src/js/petsdata.js\");\nlet petsJS = [];\r\n\r\n\r\n\r\nfor (let elem of _src_js_petsdata_js__WEBPACK_IMPORTED_MODULE_0__.petsArray) {\r\n  petsJS.push(elem.name);\r\n}\r\n\r\n/* --------------------------navigation------------------------------ */\r\n\r\nconst navlinks = document.querySelectorAll(\".button_circle_nav\");\r\nconst firstBtn = document.querySelector(\".first_btn\");\r\nconst startBtn = document.querySelector(\"#startBtn\");\r\nconst lessBtn = document.querySelector(\"#lessBtn\");\r\nconst moreBtn = document.querySelector(\"#moreBtn\");\r\nconst endBtn = document.querySelector(\"#endBtn\");\r\n\r\nfirstBtn.style.backgroundColor = `#f1cdb3`;\r\nfirstBtn.style.border = `2px solid #f1cdb3`;\r\nfirstBtn.style.cursor = `default`;\r\n\r\nfor (let navlink of navlinks) {\r\n  //   console.log(navlink.getAttribute(\"data-disabled\"));\r\n  //  if (navlink.getAttribute(\"data-disabled\") == \"false\") {\r\n  navlink.addEventListener(\"mouseover\", () => setHover(navlink));\r\n  navlink.addEventListener(\"mouseleave\", () => removeHover(navlink));\r\n  if (navlink.getAttribute(\"data-disabled\") == \"true\") {\r\n    disableBtn(navlink);\r\n  }\r\n}\r\n\r\nfunction setHover(element) {\r\n  if (element.getAttribute(\"data-disabled\") == \"false\") {\r\n    element.style.border = `2px solid #fddcc4`;\r\n    element.style.backgroundColor = `#fddcc4`;\r\n  }\r\n}\r\n\r\nfunction removeHover(element) {\r\n  if (element.getAttribute(\"data-disabled\") == \"false\") {\r\n    element.style.backgroundColor = `transparent`;\r\n    element.style.border = `2px solid #f1cdb3`;\r\n  }\r\n}\r\n\r\nfunction disableBtn(element) {\r\n  if (element.getAttribute(\"data-disabled\") == \"true\") {\r\n    element.style.border = `2px solid #cdcdcd`;\r\n    element.style.backgroundColor = `transparent`;\r\n    element.style.cursor = `default`;\r\n    element.style.color = `#cdcdcd`;\r\n  } else {\r\n    element.style = ``;\r\n  }\r\n}\r\n\r\n/* --------------------pagination-------------------------------- */\r\n\r\n// petsJS = [\r\n//   \"Freddie\",\r\n//   \"Jennifer\",\r\n//   \"Katrine\",\r\n//   \"Scarlet\",\r\n//   \"Charly\",\r\n//   \"Sophia\",\r\n//   \"Timmy\",\r\n//   \"Woody\",\r\n// ];\r\n\r\nconst sidebar = document.querySelector(\".cards\");\r\nconst cardsCount = petsJS.length; //общее количество питомцев\r\nconst quantity = 6; //сколько раз встречается питомец\r\n\r\nlet numero; //число карточек на странице\r\nlet pages; //количество страниц\r\n\r\nlet result = [];\r\nlet resultFin = [];\r\nlet arr = [];\r\nlet pageNumber;\r\n//let pets;\r\n\r\n/* --------------------проверка разрешения экрана ----------------------*/\r\nconst mediaQueryLarge = window.matchMedia(\"screen and (min-width: 1280px)\");\r\n\r\nconst mediaQuery = window.matchMedia(\r\n  \"screen and (min-width: 768px) and (max-width: 1279px)\"\r\n);\r\n\r\nconst mediaQuerySmall = window.matchMedia(\"screen and (max-width: 767px)\");\r\n\r\nfunction handleTabletChange(e) {\r\n  if (e.matches) {\r\n    numero = 6;\r\n    pages = 8;\r\n    arr = [];\r\n    resultFin = [];\r\n    pageNumber = 1;\r\n    // let pets = document.querySelectorAll(\".pet\");\r\n    // pets.forEach((element) => {\r\n    //   element.remove();\r\n    // });\r\n    pagination();\r\n    display(pageNumber);\r\n  } /* else slider(3); */\r\n}\r\n\r\nfunction handleTabletChangeSmall(e) {\r\n  if (e.matches) {\r\n    numero = 3;\r\n    pages = 16;\r\n    arr = [];\r\n    resultFin = [];\r\n    pageNumber = 1;\r\n    // let pets = document.querySelectorAll(\".pet\");\r\n    // pets.forEach((element) => {\r\n    //   element.remove();\r\n    // });\r\n    pagination();\r\n    display(pageNumber);\r\n  }\r\n}\r\n\r\nfunction handleTabletChangeLarge(e) {\r\n  if (e.matches) {\r\n    numero = 8;\r\n    pages = 6;\r\n    arr = [];\r\n    resultFin = [];\r\n    pageNumber = 1;\r\n    // let pets = document.querySelectorAll(\".pet\");\r\n    // pets.forEach((element) => {\r\n    //   element.remove();\r\n    // });\r\n    pagination();\r\n    display(pageNumber);\r\n  }\r\n}\r\nmediaQuery.addListener(handleTabletChange);\r\nmediaQuerySmall.addListener(handleTabletChangeSmall);\r\nmediaQueryLarge.addListener(handleTabletChangeLarge);\r\n\r\nhandleTabletChange(mediaQuery);\r\nhandleTabletChangeSmall(mediaQuerySmall);\r\nhandleTabletChangeLarge(mediaQueryLarge);\r\n\r\n/*-------------------------------работа кнопок--------------------------------*/\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n  navlinks.forEach((Element) => {\r\n    if (e.composedPath().includes(Element) && Element == moreBtn) {\r\n      if (pageNumber < pages) {\r\n        pageNumber++;\r\n        display(pageNumber);\r\n      }\r\n    }\r\n    if (e.composedPath().includes(Element) && Element == endBtn) {\r\n      pageNumber = pages;\r\n      display(pageNumber);\r\n    }\r\n    if (e.composedPath().includes(Element) && Element == lessBtn) {\r\n      if (pageNumber > 1) {\r\n        pageNumber--;\r\n        display(pageNumber);\r\n      }\r\n    }\r\n    if (e.composedPath().includes(Element) && Element == startBtn) {\r\n      pageNumber = 1;\r\n      display(pageNumber);\r\n    }\r\n  });\r\n});\r\n\r\nfunction displayButtons(pageNumber) {\r\n  moreBtn.setAttribute(\"data-disabled\", \"false\");\r\n  endBtn.setAttribute(\"data-disabled\", \"false\");\r\n  lessBtn.setAttribute(\"data-disabled\", \"false\");\r\n  startBtn.setAttribute(\"data-disabled\", \"false\");\r\n\r\n  if (pageNumber == pages) {\r\n    moreBtn.setAttribute(\"data-disabled\", \"true\");\r\n    endBtn.setAttribute(\"data-disabled\", \"true\");\r\n  }\r\n  if (pageNumber == 1) {\r\n    lessBtn.setAttribute(\"data-disabled\", \"true\");\r\n    startBtn.setAttribute(\"data-disabled\", \"true\");\r\n  }\r\n  disableBtn(moreBtn);\r\n  disableBtn(endBtn);\r\n  disableBtn(lessBtn);\r\n  disableBtn(startBtn);\r\n}\r\n//pagination();\r\n\r\nfunction display(pageNumber) {\r\n  let pets = document.querySelectorAll(\".pet\");\r\n  pets.forEach((element) => {\r\n    element.remove();\r\n  });\r\n  for (let i = 0; i < numero; i++) {\r\n    sidebar.insertAdjacentHTML(\r\n      `beforeend`,\r\n      `<div class=\"pet\" data-name=\"${\r\n        petsJS[resultFin[pageNumber - 1][i]]\r\n      }\"><div class=\"img_pet\">\r\n    <img src=\"../../assets/images/pets-${petsJS[\r\n      resultFin[pageNumber - 1][i]\r\n    ].toLowerCase()}.png\" /></div>\r\n    <div class=\"name\">${petsJS[resultFin[pageNumber - 1][i]]}</div>\r\n    <div class=\"buttonw buttonw1\">Learn more</div></div>`\r\n    );\r\n  }\r\n  firstBtn.innerHTML = \"\";\r\n  firstBtn.append(`${pageNumber}`);\r\n  displayButtons(pageNumber);\r\n}\r\n\r\nfunction pagination() {\r\n  for (let j = 0; j < quantity; j++) {\r\n    for (let i = 0; i < cardsCount; i++) {\r\n      arr.push(i);\r\n    }\r\n  }\r\n\r\n  //  console.log(\"arr = \" + arr);\r\n\r\n  let numero_rand = Math.floor(Math.random() * numero);\r\n  // console.log(numero_rand);\r\n  for (let i = 0; i < pages; i++)\r\n    resultFin[i] = arr.slice(\r\n      i * numero + numero_rand,\r\n      (i + 1) * numero + numero_rand\r\n    );\r\n\r\n  if (resultFin[pages - 1].length < numero)\r\n    resultFin[pages - 1].push(\r\n      ...arr.slice(0, numero - resultFin[pages - 1].length)\r\n    );\r\n\r\n  for (let res of resultFin) shuffle(res);\r\n  //  console.log(resultFin);\r\n}\r\n\r\nfunction shuffle(array) {\r\n  for (let i = array.length - 1; i > 0; i--) {\r\n    let j = Math.floor(Math.random() * (i + 1));\r\n    let t = array[i];\r\n    array[i] = array[j];\r\n    array[j] = t;\r\n  }\r\n}\r\n\r\n/*--------------------modal window--------------------------------*/\r\n\r\nlet petName;\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n  // console.log(e.composedPath());\r\n\r\n  let learnMores = document.querySelectorAll(\".pet\");\r\n\r\n  learnMores.forEach((Element) => {\r\n    // console.log(e.composedPath());\r\n    // console.log(Element);\r\n    if (e.composedPath().includes(Element)) {\r\n      // if (e.target == Element) {\r\n      // console.log(1);\r\n      petName = Element.getAttribute(\"data-name\");\r\n\r\n      //    console.log(Element);\r\n\r\n      for (let elem of _src_js_petsdata_js__WEBPACK_IMPORTED_MODULE_0__.petsArray) {\r\n        if (elem.name == petName) {\r\n          //       console.log(elem.type);\r\n\r\n          const modal = document.createElement(\"div\");\r\n          modal.classList.add(\"modal_wrap\");\r\n\r\n          modal.innerHTML = `<div class=\"modal_window\">\r\n          <div class = \"modal_image_wrap\">\r\n            <img src=\"${elem.img.toLowerCase()}\" alt=\"\" class=\"modal_image\" />\r\n          </div>\r\n          <div class = \"modal_text_wrap\">\r\n            <h3>${elem.name}</h3>\r\n            <h4>${elem.type} - ${elem.breed}</h4>\r\n            <h5>${elem.description}</h5> \r\n            <ul class = \"modal_caracter\">\r\n            <li><strong>Age: </strong>${elem.age}</li>\r\n            <li><strong>Inoculations: </strong>${elem.inoculations}</li>\r\n            <li><strong>Diseases: </strong>${elem.diseases}</li>\r\n            <li><strong>Parasites: </strong>${elem.parasites}</li>\r\n            </ul>  \r\n          </div>    \r\n          <button class=\"modal_close\" id=\"button\"><img src=\"../../assets/images/Vector.png\" /></button> \r\n          </div>`;\r\n\r\n          document.body.append(modal);\r\n          document.body.style.overflow = \"hidden\";\r\n\r\n          const modalWrap = document.querySelector(\".modal_wrap\");\r\n          const modalWindow = document.querySelector(\".modal_window\");\r\n\r\n          const modalImageWrap = document.querySelector(\".modal_image_wrap\");\r\n\r\n          setTimeout(\r\n            () =>\r\n              // (modalWindow.style.transition = `5s`),\r\n              (modalWindow.style.transform = `scale(1)`),\r\n            100\r\n          );\r\n\r\n          button.onclick = function () {\r\n            modal.remove();\r\n            document.body.style.overflow = \"\";\r\n          };\r\n\r\n          modalWrap.onclick = function (event) {\r\n            if (event.target == modalWrap) {\r\n              modal.remove();\r\n              document.body.style.overflow = \"\";\r\n            }\r\n          };\r\n          modalWrap.onmouseover = function (event) {\r\n            if (event.target == modalWrap) {\r\n              button.style.backgroundColor = `#fddcc4`;\r\n              button.style.border = `2px solid #fddcc4`;\r\n              modalWrap.style.cursor = `pointer`;\r\n            } else {\r\n              button.style.backgroundColor = ``;\r\n              button.style.border = ``;\r\n              modalWrap.style.cursor = ``;\r\n            }\r\n          };\r\n        }\r\n      }\r\n    }\r\n  });\r\n});\r\n\r\n/*--------------------------burger---------------------------------*/\r\n\r\nconst burger = document.querySelector(\".test\");\r\nlet burgerMenuWrap;\r\nlet burgerMenu;\r\nlet navlinkBurger;\r\n\r\nburger.onclick = function (event) {\r\n  let test = document.querySelector(\".burgermenu_wrap\");\r\n  if (test) {\r\n    setTimeout(\r\n      () => (\r\n        (burgerMenu.style.transform = `translateX(0)`),\r\n        (burger.style.transform = `rotate(0deg)`)\r\n      ),\r\n      100\r\n    );\r\n    setTimeout(\r\n      () => (burgerMenuWrap.remove(), (document.body.style.overflow = \"\")),\r\n      2100\r\n    );\r\n    return;\r\n  }\r\n\r\n  burgerMenuWrap = document.createElement(\"div\");\r\n  burgerMenuWrap.classList.add(\"burgermenu_wrap\");\r\n\r\n  burgerMenuWrap.innerHTML = `<div class=\"burgermenu\">\r\n  <div class=\"logo_burger\">\r\n       <h1>Cozy House</h1>\r\n       <div class=\"pp\">Shelter for pets in Boston</div>\r\n  </div>\r\n  <nav class=\"navmenu_burger\">\r\n  <ul>\r\n    <li>\r\n      <a href=\"../main/index.html\"\r\n        ><div class=\"navlink_burger\">About the shelter</div></a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a href=\"#\"\r\n        ><div class=\"navlink_burger first\">Our pets</div></a\r\n      >\r\n    </li>\r\n    <li>\r\n      <a href=\"../main/index.html#help\"><div class=\"navlink_burger\">Help the shelter</div></a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#contacts\"><div class=\"navlink_burger\">Contacts</div></a>\r\n    </li>\r\n  </ul>\r\n  </nav>\r\n  </div>`;\r\n\r\n  document.body.style.overflow = \"hidden\";\r\n  document.body.append(burgerMenuWrap);\r\n\r\n  burgerMenu = document.querySelector(\".burgermenu\");\r\n  setTimeout(\r\n    () => (\r\n      (burgerMenu.style.transform = `translateX(-320px)`),\r\n      (burger.style.transform = `rotate(90deg)`)\r\n    ),\r\n    100\r\n  );\r\n\r\n  //navlinkBurger = document.querySelectorAll(\".navlink_burger\");\r\n  burgerMenuWrap.onclick = function (event) {\r\n    console.log(event.target);\r\n    if (\r\n      event.target == burgerMenuWrap ||\r\n      event.target.classList.contains(\"navlink_burger\")\r\n    ) {\r\n      setTimeout(\r\n        () => (\r\n          (burgerMenu.style.transform = `translateX(0)`),\r\n          (burger.style.transform = `rotate(0deg)`)\r\n        ),\r\n        100\r\n      );\r\n      setTimeout(\r\n        () => (burgerMenuWrap.remove(), (document.body.style.overflow = \"\")),\r\n        2100\r\n      );\r\n    }\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://shelter/./src/js/pet.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index_pet.js");
/******/ 	
/******/ })()
;