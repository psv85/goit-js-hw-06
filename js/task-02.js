const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeIngredients = ingredient => {
  return ingredient.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;
    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
listEl.append(...elements);
