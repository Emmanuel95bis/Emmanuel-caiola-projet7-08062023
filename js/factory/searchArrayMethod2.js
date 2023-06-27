
const saisieArea = document.getElementById('inputSearch');
let saisieString;


//tableau des occurences correspondant à la recherche input
let occurenceSaisie = [];

function searchInArray(e) {
    occurenceSaisie = [];

    saisieString = e.target.value.toLowerCase()

    if (saisieString.length > 2) {

          for (let i = 0; i < searchArray.length; i++) {
            let offset = 0;
            let found = false;

            while (offset <= (searchArray[i].length - saisieString.length) && !found) {
          
              if (saisieString === searchArray[i].substr(offset, saisieString.length)) {
                found = true;
                occurenceSaisie.push("1");
              }
              offset++;
            }
            if (!found) occurenceSaisie.push("0");
          }
    }
    recipesDisplay();

}

saisieArea.addEventListener("input", searchInArray);

