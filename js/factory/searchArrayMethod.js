
const saisieArea = document.getElementById('inputSearch');
let saisieString;

//tableau des occurences correspondant à la recherche input
let occurenceSaisie = [];

function searchInArray(e){
    occurenceSaisie = [];
    let saisieString=e.target.value.toLowerCase()
  
if (saisieString.length > 2){
    searchArray.forEach(chaine=>{
       if (chaine.search(saisieString)!=-1){ 
        occurenceSaisie.push("1");
        }else{
            occurenceSaisie.push("0");
        }
     });
     
}
recipesDisplay();
}
    
saisieArea.addEventListener("input", searchInArray);