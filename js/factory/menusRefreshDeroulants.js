


function refreshdisplay(element,etat){
    element = element.charAt(0).toUpperCase() + element.slice(1);
    element= suppressCaractere(element);
    console.log(element);
    etat=="flex"?document.querySelector(`.${element.replace(/ /g,'')}`).style.display="flex":document.querySelector(`.${element.replace(/ /g,'')}`).style.display="none";
}

function updateMenusDeroulants(){
let index=0;

recipes.forEach(element => {
    element.ingredients.forEach(ingredient => {
        occurence2[index]==1?refreshdisplay(ingredient.ingredient,"flex"):refreshdisplay(ingredient.ingredient,"none") 
    });
    index++;
});


index=0;
recipes.forEach(element => {
occurence2[index]==1?refreshdisplay(element.appliance,"flex"):refreshdisplay(element.appliance,"none") 
index++;
});

index=0;
recipes.forEach(element => {
    element.ustensils.forEach(ustencils => {
        occurence2[index]==1?refreshdisplay(ustencils,"flex"):refreshdisplay(ustencils,"none") 
    });
    index++;
});



}