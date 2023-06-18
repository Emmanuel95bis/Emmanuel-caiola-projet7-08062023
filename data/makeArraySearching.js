

//création d'un tableau searchArray à 2 dimensions dans lequel il y aura l'indice de recette et 
// le titre, les ingrédients et la description de façon séquentiel pour effectuer les recherches.
const searchArray = [];
let indice = 0;
let contenu = '';

console.log("variable de recette :");
console.log(recipes);

recipes.forEach(element => {
    contenu = '';
    contenu = element.id + " " + element.name + " " + element.description + " ";

    element.ingredients.forEach(ingredientElement => {
        contenu = contenu + ingredientElement.ingredient + " ";

    });
    searchArray[indice] = contenu.toLowerCase();
    indice++;

});


console.log(searchArray);





//tableau contaténation des ustencils, ingrédients avec un numéro index
let filtersSearch = [];
let num = 0;
let concatChaine = '';

//création de la table pour filtre
recipes.forEach(recipe => {
    concatChaine = '';
    recipe.ingredients.forEach(ingredient => {
        concatChaine = `${concatChaine}${ingredient.ingredient.toLowerCase()}`;
    })
    recipe.ustensils.forEach(ustensil => {
        concatChaine = `${concatChaine}${ustensil.toLowerCase()}`;
    })
    filtersSearch[num] = recipe.appliance.toLowerCase().replace(/\s/g, '') + concatChaine.replace(/\s/g, '');
    num++;
});

console.log("concaténation : " + filtersSearch);
