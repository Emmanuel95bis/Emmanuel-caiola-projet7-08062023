const selectIngredient = document.querySelectorAll('#choix1');
let filtres = [];



let choix = '';

selectIngredient.forEach(element => {
    //recupération chaine selletionnée en supprimant les espaces             
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
      
console.log(found);
        if (found == -1) {
            //insertion dans un tableau       
            filtres.push(choix);
            console.log(filtres);

            document.getElementById(`div${choix}`).style.display = 'flex';

            //ajout d'un addEvenListner sur la croix de fermeture de l'élément
             const fermetureFiltre=function (e) {
                //fermeture de l'élément.
                document.getElementById(`div${e.target.id}`).style.display = 'none';
              
                //suppression dans le tableau de la selection
               console.log("ZZZZZZZZZZZZZZZZZZZ");
                console.log("target : "+e.target.id);
                console.log("tableau : "+filtres);
              
                filtres.splice(filtres.indexOf(e.target.id), 1);
              
                console.log("tableau : "+filtres);
                console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                document.getElementById(e.target.id).removeEventListener('click',fermetureFiltre);
            }
            document.getElementById(choix).addEventListener('click',fermetureFiltre);
            console.log('ajoutchoix :'+ choix);
           
            
        }
    })
});

