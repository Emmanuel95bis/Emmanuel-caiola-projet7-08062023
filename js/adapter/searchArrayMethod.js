
const saisieArea = document.getElementById('inputSearch');




let occurenceSaisie=[];
//création d'un tableau searchArray à 2 dimensions dans lequel il y aura l'indice de recette et 
// le titre, les ingrédients et la description de façon séquentiel pour effectuer les recherches.
const searchArray=[];
let indice=0;
let contenu='';

console.log("variable de recette :");
console.log(recipes);

recipes.forEach(element=>{
contenu='';    
contenu=element.id+" "+element.name+" "+element.description+" ";

element.ingredients.forEach(ingredientElement=>{
contenu=contenu+ingredientElement.ingredient+" ";

});
searchArray[indice]=contenu.toLowerCase();
indice++;

});


console.log(searchArray);


function searchInArray(e){
    occurenceSaisie=[];

    console.log("1111111111111111111111111111");
    console.log("11111111111111111111111111111");
    let saisieString=e.target.value.toLowerCase()
   
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");


let position=0;
if (saisieString.length > 2){
    searchArray.forEach(chaine=>{
        console.log(saisieString);
       if (chaine.search(saisieString)!=-1){ 
        occurenceSaisie.push(position);
        console.log(chaine);
        }
       position++;
    });
console.log(occurenceSaisie);
}
}

    
saisieArea.addEventListener("input", searchInArray);