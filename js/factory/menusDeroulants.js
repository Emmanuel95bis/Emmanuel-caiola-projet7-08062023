let choixIngredients = [];
let choixAppareils = [];
let choixUstencils = [];
let liste = '';
let chaine='';
let compteur = 0;
console.log(recipes);



//création des listes appareils
function displayMenuAppliance(element){

    if (liste.search(element) == -1) {
        
        compteur++;
        if (compteur == 1) liste = liste + "<ul>";
        if (compteur % 30 == 0) liste = liste + '</ul><ul>';
        liste = liste + `<li>${element}</li>`;
    };
}








//creation des listes à partir du tableau ordonné
function createMenuList(tableau){
    tableau.sort();
    compteur=0;
    tableau.forEach(element=>{
    compteur++;
    if (compteur == 1) liste = liste + "<ul>";
    if (compteur % 30 == 0) liste = liste + '</ul><ul>';
    liste = liste + `<li>${element}</li>`;
    });
}



//création des listes appareils et ustencils
function displayMenuApplianceUstensils(element){
element = element.charAt(0).toUpperCase() + element.slice(1);    
    if (chaine.search(element) == -1) {
        chaine=chaine+element;
        choixIngredients.push(element);
         };
}

//création d'un tableau avec la liste ingrédient
function displayMenuIngredients(element) {
    element.ingredient = element.ingredient.charAt(0).toUpperCase() + element.ingredient.slice(1);
    if (chaine.search(element.ingredient) == -1) {
     chaine=chaine+element.ingredient;
     choixIngredients.push(element.ingredient);
      };
}

function displayMenu() {
    //création du menu ingrédients
    liste='';
   
    recipes.forEach(element => {
        element.ingredients.forEach(ingredient => {
            displayMenuIngredients(ingredient);
        });
    });
    createMenuList(choixIngredients);
    const dropdown1 = document.querySelector('.dropdown-child');
    const menu1 = document.createElement('div');
    menu1.setAttribute('class', 'menu1');
    menu1.innerHTML = liste;
    dropdown1.appendChild(menu1);

//création du menu appareils
    chaine,liste='';
    compteur = 0;
    choixIngredients=[];
   
    recipes.forEach(element => {
        displayMenuApplianceUstensils(element.appliance);
    });
    createMenuList(choixIngredients);
    const dropdown2 = document.querySelector('.dropdown-child2');
    const menu2 = document.createElement('div');
    menu2.setAttribute('class', 'menu1');
    menu2.innerHTML = liste;
    dropdown2.appendChild(menu2);

//création du menu ustencils
chaine,liste='';
compteur = 0;
choixIngredients=[];
recipes.forEach(element => {
    element.ustensils.forEach(ustencils => {
       
        displayMenuApplianceUstensils(ustencils);
    });
});
createMenuList(choixIngredients);
const dropdown3 = document.querySelector('.dropdown-child3');
const menu3 = document.createElement('div');
menu3.setAttribute('class', 'menu1');
menu3.innerHTML = liste;
dropdown3.appendChild(menu3);

}