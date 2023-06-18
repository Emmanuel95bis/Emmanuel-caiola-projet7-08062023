
let occurence2 = [];

function recipesDisplayGo(){
    let numberRecipesDisplayed = 0;
    for (let i = 0; i < recipes.length; i++) {
        if (occurence2[i] == '1') {
            numberRecipesDisplayed++;
            document.getElementById(`recette${i}`).style.display = "block";
        } else {
            document.getElementById(`recette${i}`).style.display = "none";
        }
    }
document.getElementById('numberRecipes').innerHTML=`${numberRecipesDisplayed} recettes`;

}



//rafraichisement des affichages des recettes en fonction des recettes
function recipesDisplay() {
    
    let flagFilters = false;
    let flagSaisie = false;
    console.log("666666666666AAAAAAAA");
    console.log(occurenceFilters);
   // console.log("occurenceSaisie" + occurenceSaisie);

     //s'il n'y a pas de saisie
     if (occurenceSaisie.length==0) {
        flagSaisie=true;
        occurence2=occurenceFilters;
        recipesDisplayGo();
     
    }

    for (let j = 0; j < recipes.length; j++) {
        if (occurenceFilters[j] === '1') {flagFilters = true};
        if (occurenceSaisie[j] === '1') { flagSaisie = true};
    }

 //s'il n'y a pas de filtres
 if (flagFilters==false) {
    occurence2=occurenceSaisie;
    recipesDisplayGo();
 
}

    console.log("666666666666");
    console.log(occurenceFilters);

//Si ni la saisie est vide, ni l'absence de fitre, création de occurence2 pour les occurrences communes des 2 tableaux
if ((flagFilters!=false) && (occurenceSaisie.length!=0)){    
    occurence2=[];
    for (let k = 0; k < recipes.length; k++) {
        ((occurenceFilters[k] === '1') && (occurenceSaisie[k] === '1'))?occurence2.push('1'):occurence2.push('0');
           console.log((occurenceFilters[k] === '1') && (occurenceSaisie[k] === '1'));
           console.log(recipes.length);
           
           console.log(occurenceSaisie);
           console.log(k);
           console.log(occurenceFilters);
         
    }
    recipesDisplayGo();
}


    console.log("occurrence both:"+occurence2);
    
    console.log("777777777777777");
console.log(occurenceFilters);
    console.log("flagfilter"+flagFilters);
    console.log("flagsaisie"+flagSaisie);


}

