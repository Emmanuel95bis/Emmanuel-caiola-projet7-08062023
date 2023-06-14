const selectIngredient = document.querySelectorAll('#choix1');
let filtres = [];



let choix = '';
selectIngredient.forEach(element => {
    element.addEventListener("click", function () {
        //recupération chaine seletionnée en supprimante les espace             
        choix = element.innerText.replace(/\s/g, '');

        //recherche dans le tableau si la selection à déjà été selectionné
        const found = filtres.indexOf(choix);
      
console.log(found);
        if (found == -1) {
            //insertion dans un tableau       
            filtres.push(choix);
            console.log(filtres);

            //création des éléments du DOM avec id du nom de l'élément selectionné        
            const filtre = document.querySelector('.filtres');
            const selectFiltre = document.createElement('div');
            selectFiltre.setAttribute('id', `div${choix}`);
            selectFiltre.innerHTML = `${element.innerText}<i id=${choix} class="fa-solid fa-xmark"></i>`;
            filtre.appendChild(selectFiltre);

            //ajout d'un addEvenListner sur la croix de fermeture de l'élément

  
             const fermetureFiltre=function (e) {
                //fermeture de l'élément.
                document.getElementById(choix).removeEventListener('click',fermetureFiltre);
                
                document.getElementById(`div${e.target.id}`).style.display = 'none';
              
                
                //suppression dans le tableau de la selection
                console.log(filtres);
                console.log(e.target.id);
                console.log(filtres.indexOf(e.target.id));
                filtres.splice(filtres.indexOf(e.target.id), 1);
                console.log(filtres);
              
                
            }
            
            document.getElementById(choix).addEventListener('click',fermetureFiltre);
            
        }
    })
});

