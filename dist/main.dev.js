"use strict";

var database = [{
  carName: "ford",
  carPrice: 17000,
  carCode: "FD"
}, {
  carName: "Toyota",
  carPrice: 17000,
  carCode: "TY"
}, {
  carName: "Tesla",
  carPrice: 17000,
  carCode: "TS"
}, {
  carName: "Honda",
  carPrice: 17000,
  carCode: "HD"
}, {
  carName: "ferrari",
  carPrice: 17000,
  carCode: "FR"
}, {
  carName: "BMW",
  carPrice: 17000,
  carCode: "BMW"
}, {
  carName: "Mercedez",
  carPrice: 17000,
  carCode: "MZ"
}, {
  carName: "Nissab",
  carPrice: 17000,
  carCode: "Ns"
}]; // selsct elements passed in
// function selectElement(selector) {
//     return document.getElementById(selector);
// }

function clearScreen() {
  var clearScreen = document.querySelector(".search-results");
  clearScreen.innerHTML = "";
}

function getResults() {
  var search = document.querySelector('.searchbar').value;
  clearScreen();

  if (search.length > 0) {
    for (var i = 0; i < database.length; i++) {
      if (database[i].carName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || database[i].carCode.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        var searchResultUpdate = document.querySelector(".search-results");
        searchResultUpdate.innerHTML += "\n    \n                     <div class=\"search-results-item\">\n                        <span class=\"search-item\" > ".concat(database[i].carName, "</span>\n                        <span class=\"search-item\" > ").concat(database[i].carPrice, "</span>\n                        <span class=\"search-item\" > ").concat(database[i].carCode, "</span>\n                     </div>\n                     \n                     ");
        document.getElementById("empty").innerHTML = "";
      } else {
        document.getElementById("empty").innerHTML = "nothing found coresponding to your research!";
      }
    }
  }
}

var inputSearch = document.querySelector(".searchbar");
inputSearch.addEventListener('keyup', getResults);