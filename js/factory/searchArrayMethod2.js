
const saisieArea = document.getElementById('inputSearch');


//tableau des occurences correspondant à la recherche input
let occurenceSaisie = [];

function searchInArray(e) {
    occurenceSaisie = [];

    let saisieString = e.target.value.toLowerCase()
    let offset = 0;
    let found = Boolean;
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

       
          recipesDisplay();
 
    }

}


saisieArea.addEventListener("input", searchInArray);

