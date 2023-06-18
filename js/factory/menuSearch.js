const selectIngredient = document.querySelectorAll('#choix1');










//création de tous les filtres
//création de tous les filtres
//création de tous les filtres
let choix = '';


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
console.log("1111111111111");
console.log(occurenceFilters);

selectIngredient.forEach(element => {

    element.addEventListener("click", function () {
        //recupération chaine seletionnée en supprimant les espaces             
        choix = element.innerText.replace(/\s/g, '');

        //recherche dans le tableau si la selection à déjà été selectionné
        const found = filtres.indexOf(choix);

        if (found == -1) {
            //insertion dans un tableau       
            filtres.push(choix);
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            console.log(filtres);

            searchFiltersInRecipes();

            document.getElementById(`div${choix}`).style.display = 'flex';

            //ajout d'un addEvenListner sur la croix de fermeture de l'élément
            const fermetureFiltre = function (e) {
                //fermeture de l'élément.
                document.getElementById(`div${e.target.id}`).style.display = 'none';

                //suppression dans le tableau de la selection
                
                filtres.splice(filtres.indexOf(e.target.id), 1);
                console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
            console.log(filtres);

                searchFiltersInRecipes();

                console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
                console.log(filtres);

                document.getElementById(e.target.id).removeEventListener('click', fermetureFiltre);
            }
            document.getElementById(choix).addEventListener('click', fermetureFiltre);
        }
    })
});




//fonction de recherche occurrences des filtres dans les recettes
function searchFiltersInRecipes() {

    occurenceFilters = [];
    let flag = Boolean;
    filtersSearch.forEach(filterSearch => {
        flag = true;
        filtres.forEach(filtre => {
            if (filterSearch.search(filtre.toLowerCase()) == -1) flag = false;
        });

        if (flag) {
               occurenceFilters.push("1");
        } else {
            occurenceFilters.push("0");
        }
    });
    console.log("33333333333");
    console.log(occurenceFilters);

    recipesDisplay();

    console.log("4444444444444");
console.log(occurenceFilters);
}
