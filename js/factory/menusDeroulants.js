let tableau = [];
let liste = '';
let chaine = '';
let compteur = 0;


//creation des listes à partir du tableau ordonné
function createMenuList(tableau) {
    tableau.sort();
    compteur = 0;
    tableau.forEach(element => {
        compteur++;
        if (compteur == 1) liste = liste + "<ul>";
        if (compteur % 30 == 0) liste = liste + '</ul><ul>';
        liste = liste + `<li>${element}</li>`;
    });
}

//création des listes dans un tableau
function displayMenuConstruction(element) {
    element = element.charAt(0).toUpperCase() + element.slice(1);
    if (chaine.search(element) == -1) {
        chaine = chaine + element;
        tableau.push(element);
    };
}

function displayMenu() {
    //création du menu ingrédients
    liste = '';
    recipes.forEach(element => {
        element.ingredients.forEach(ingredient => {
            displayMenuConstruction(ingredient.ingredient);
        });
    });
    createMenuList(tableau);
    const dropdown1 = document.querySelector('.dropdown-child');
    const menu1 = document.createElement('div');
    menu1.setAttribute('class', 'menu1');
    menu1.innerHTML = liste;
    dropdown1.appendChild(menu1);

    //création du menu appareils
    chaine, liste = '';
    compteur = 0;
    tableau = [];

    recipes.forEach(element => {
        displayMenuConstruction(element.appliance);
    });
    createMenuList(tableau);
    const dropdown2 = document.querySelector('.dropdown-child2');
    const menu2 = document.createElement('div');
    menu2.setAttribute('class', 'menu1');
    menu2.innerHTML = liste;
    dropdown2.appendChild(menu2);

    //création du menu ustencils
    chaine, liste = '';
    compteur = 0;
    tableau = [];
    recipes.forEach(element => {
        element.ustensils.forEach(ustencils => {

            displayMenuConstruction(ustencils);
        });
    });
    createMenuList(tableau);
    const dropdown3 = document.querySelector('.dropdown-child3');
    const menu3 = document.createElement('div');
    menu3.setAttribute('class', 'menu1');
    menu3.innerHTML = liste;
    dropdown3.appendChild(menu3);

}