//recupération informations du photographe correspondant à l'ID
async function getDataRecipes() {
    const reponse = await fetch("/data/recipes.json");
    const dataRecipes = await reponse.json();
    //const photographers = Dataphotographers.photographers;
    //const lePhotographe = photographers.filter(user => user.id == dataId);
    return (dataRecipes);
  }