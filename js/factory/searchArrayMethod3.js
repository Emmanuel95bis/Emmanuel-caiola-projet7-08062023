let occurenceSaisie=[];

class Recipe {
    constructor(name, recette, saisie) {
      this.name = name;
      this.recette = recette;
      this.saisie = saisie;
    }
  
    resultat() {
      return (this.name + this.recette).toLowerCase().search(this.saisie);
    }
  }
  
  const recipeFactory = {
    makeRecipe: (name, recette, saisie) => new Recipe(name, recette, saisie),
  };
  

  
  const saisieArea = document.getElementById("inputSearch");
  
  saisieArea.addEventListener("input", function (e) {
    occurenceSaisie=[];

    let saisieString = e.target.value.toLowerCase();
    if (saisieString.length > 2) {
      recipes.forEach((recipe) => {
        console.log(recipe.name);
        const fiche = recipeFactory.makeRecipe(
          recipe.name,
          recipe.description,
          saisieString
        );
        fiche.resultat()!=-1? occurenceSaisie.push("1"):occurenceSaisie.push("0");
        console.log("retour "+fiche.resultat());

      });
      console.log(occurenceSaisie);
    }
    recipesDisplay();
  });
  
  
  
  
  
  
  
  

