const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const makeup = ingredients =>
  ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');

    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add('item');

    return ingredientEl;
  });

ingredientsEl.append(...makeup(ingredients));
