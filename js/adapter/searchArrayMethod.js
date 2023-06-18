
const saisieArea = document.getElementById('inputSearch');







function searchInArray(e){
    occurenceSaisie=[];


    let saisieString=e.target.value.toLowerCase()

    console.log("55555555555");
console.log(occurenceFilters);

if (saisieString.length > 2){
    searchArray.forEach(chaine=>{
        console.log(saisieString);
       if (chaine.search(saisieString)!=-1){ 
        occurenceSaisie.push("1");
        console.log(chaine);
        }else{
            occurenceSaisie.push("0");
        }
     });
console.log(occurenceSaisie);
}
recipesDisplay();
}

    
saisieArea.addEventListener("input", searchInArray);