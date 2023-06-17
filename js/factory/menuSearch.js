const selectIngredient = document.querySelectorAll('#choix1');

//tableau d'index recette ou l'on trouve les filtres
let occurenceFilters = [];
//tableau des filtres actifs
let filtres = [];
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


function searchFiltersInRecipes() {

    occurenceFilters=[];
    let flag = Boolean;
    let posArray=0;
filtersSearch.forEach(filterSearch=>{
    flag=true;
    filtres.forEach(filtre=>{
                if (filterSearch.search(filtre.toLowerCase())==-1) flag=false;

});

if (flag==true){
    console.log("xxxxxxxxxxxxxxxxx");
    occurenceFilters.push(posArray);
}
posArray++;
});

console.log("num recette filtre : "+occurenceFilters.length);
}

let choix = '';

//création de tous les filtres
selectIngredient.forEach(element => {
    //recupération chaine selectionnée en supprimant les espaces             
    choix = element.innerText.replace(/\s/g, '');
    //création des éléments du DOM avec id du nom de l'élément selectionné        
    const filtre = document.querySelector('.filtres');
    const selectFiltre = document.createElement('div');
    selectFiltre.setAttribute('id', `div${choix}`);
    selectFiltre.innerHTML = `${element.innerText}<i id=${choix} class="fa-solid fa-xmark"></i>`;

    filtre.appendChild(selectFiltre);
    document.getElementById(`div${choix}`).style.display = 'none';
});


selectIngredient.forEach(element => {

    element.addEventListener("click", function () {
        //recupération chaine seletionnée en supprimant les espaces             
        choix = element.innerText.replace(/\s/g, '');

        //recherche dans le tableau si la selection à déjà été selectionné
        const found = filtres.indexOf(choix);

        if (found == -1) {
            //insertion dans un tableau       
            filtres.push(choix);
            console.log("wwwwwwwwwwwwwwwwww");
            console.log(filtres);

            searchFiltersInRecipes();

            document.getElementById(`div${choix}`).style.display = 'flex';

            //ajout d'un addEvenListner sur la croix de fermeture de l'élément
            const fermetureFiltre = function (e) {
                //fermeture de l'élément.
                document.getElementById(`div${e.target.id}`).style.display = 'none';

                //suppression dans le tableau de la selection
                console.log("ZZZZZZZZZZZZZZZZZZZ");

                filtres.splice(filtres.indexOf(e.target.id), 1);

                searchFiltersInRecipes();

                document.getElementById(e.target.id).removeEventListener('click', fermetureFiltre);
            }
            document.getElementById(choix).addEventListener('click', fermetureFiltre);
        }
    })
});

