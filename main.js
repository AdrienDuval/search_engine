const database = [
    {
        carName: "ford",
        carPrice: 17000,
        carCode: "FD"
    },
    {
        carName: "Toyota",
        carPrice: 17000,
        carCode: "TY"
    },
    {
        carName: "Tesla",
        carPrice: 17000,
        carCode: "TS"
    },
    {
        carName: "Honda",
        carPrice: 17000,
        carCode: "HD"
    },
    {
        carName: "ferrari",
        carPrice: 17000,
        carCode: "FR"
    },
    {
        carName: "BMW",
        carPrice: 17000,
        carCode: "BMW"
    },
    {
        carName: "Mercedez",
        carPrice: 17000,
        carCode: "MZ"
    },
    {
        carName: "Nissab",
        carPrice: 17000,
        carCode: "Ns"
    }
];

// selsct elements passed in
// function selectElement(selector) {
//     return document.getElementById(selector);
// }
function clearScreen() {
  const clearScreen = document.querySelector(".search-results");
  clearScreen.innerHTML = "";
}

function getResults(){
    const search = document.querySelector('.searchbar').value;
    clearScreen();
    if (search.length > 0) {
        for(let i = 0; i < database.length; i++) {
            if (
                database[i].carName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                database[i].carCode.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                 )
                 {
                    
                     var searchResultUpdate = document.querySelector(".search-results");
    
                     searchResultUpdate.innerHTML += `
    
                     <div class="search-results-item">
                        <span class="search-item" > ${database[i].carName}</span>
                        <span class="search-item" > ${database[i].carPrice}</span>
                        <span class="search-item" > ${database[i].carCode}</span>
                     </div>
                     
                     `;
                     document.getElementById("empty").innerHTML = "";
                 } else {
                    document.getElementById("empty").innerHTML = "nothing found coresponding to your research!";
                }
        }
    }

}

const inputSearch = document.querySelector(".searchbar");
inputSearch.addEventListener('keyup', getResults);
 