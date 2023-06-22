
function recipesDisplayGo(status){
    let numberRecipesDisplayed = 0;
    let message='';
    for (let i = 0; i < recipes.length; i++) {
        if (occurence2[i] == '1' || status=='all') {
            numberRecipesDisplayed++;
            document.getElementById(`recette${i}`).style.display = "block";
        } else {
            document.getElementById(`recette${i}`).style.display = "none";
        }
    }
    
document.getElementById('numberRecipes').innerHTML=`${numberRecipesDisplayed} recettes`;

message=`Aucune recette ne contient "${saisieString}" vous pouvez chercher «
tarte aux pommes », « poisson », etc.`;
document.getElementById('errorMessage').innerHTML=message;
numberRecipesDisplayed==0?document.getElementById('errorMessage').style.display="flex":document.getElementById('errorMessage').style.display="none";
updateMenusDeroulants();
}

//rafraichisement des affichages des recettes en fonction des recettes
function recipesDisplay() {

// le tableau saisie et filters sont vide
if (occurenceSaisie.length==0 && occurenceFilters.length==0){
recipesDisplayGo("all");
}

//seul le tableau de saisie est vide
if (occurenceSaisie.length==0 && occurenceFilters.length!=0){
    occurence2=occurenceFilters;
    recipesDisplayGo("normal");
}

//seul le tableau filters est vide
if (occurenceSaisie.length!=0 && occurenceFilters.length==0){
    occurence2=occurenceSaisie;
    recipesDisplayGo("normal");
}

//aucun tableaux vides
if (occurenceSaisie.length!=0 && occurenceFilters.length!=0){
    occurence2=[];
    for (let k = 0; k < recipes.length; k++) {
        ((occurenceFilters[k] === '1') && (occurenceSaisie[k] === '1'))?occurence2.push('1'):occurence2.push('0');
    }
    recipesDisplayGo("normal");
}

}

