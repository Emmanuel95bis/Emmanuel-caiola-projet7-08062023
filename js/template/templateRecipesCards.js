const recipeCard = document.querySelector('main');

function ingredientsList(ingredients) {
    /*console.log(ingredients);
    console.log(ingredients[0].ingredient);*/
    let cardIngredient1 = `<ul>`;
    let cardIngredient2 = `<ul>`;
    let compteur = 0;

    ingredients.forEach(element => {
        console.log(element);
         /* console.log(element.quantity);
         console.log(element.unit);
         console.log(cardIngredient1);*/
        if (compteur % 2 == 0) {

            cardIngredient1 = cardIngredient1 + `
    <li><span>${element.ingredient}</span><br><span>`
            if (typeof element.quantity != 'undefined') cardIngredient1 = cardIngredient1 + element.quantity;
            if (typeof element.unit != 'undefined') cardIngredient1 = cardIngredient1 + element.unit;
            cardIngredient1 = cardIngredient1 + `</span></li>`
        } else {

            cardIngredient2 = cardIngredient2 + `
    <li><span>${element.ingredient}</span><br><span>`
            if (typeof element.quantity != 'undefined') cardIngredient2 = cardIngredient2 + element.quantity;
            if (typeof element.unit != 'undefined') cardIngredient2 = cardIngredient2 + element.unit;
            cardIngredient2 = cardIngredient2 + `</span></li>`
        }
        compteur++;
    });

    cardIngredient1 = cardIngredient1 + `</ul>`;
    cardIngredient2 = cardIngredient2 + `</ul>`;
    return (cardIngredient1 + cardIngredient2);
}

function displayRecipesCards() {
    console.log(recipes);
    const recipeCard = document.querySelector('main');
    const wrapper = document.createElement('section');
    recipes.forEach(element => {
        const wrapper = document.createElement('section');

        let card = `
            <img src="/assets/${element.image}">
            <div class="recipe">
                <h2>${element.name}</h2>
                <h3>RECETTE</h3>
                <p>${element.description}/p>
            </div>
            <div class="ingredients">
                <h3>INGRÉDIENTS</h3>
                <div class="ingredient-liste">`

        let card2 = ingredientsList(element.ingredients);


        card = card + card2 +`</div>
        </div>
        <span class="preparingTime">${element.time}min</span>`;

        wrapper.innerHTML = card;
        recipeCard.appendChild(wrapper);

    });
};