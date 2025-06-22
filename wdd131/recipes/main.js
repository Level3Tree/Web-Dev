import recipes from './recipes.mjs'; // Import recipe data

// Select the #recipes section from HTML
const recipesSection = document.querySelector('#recipes');

// Loop through each recipe and build the HTML card
recipes.forEach((recipe) => {
  const card = document.createElement('div');
  card.classList.add('recipe-card');

  // Use template literals for better HTML structure
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" />
    <h2>${recipe.name}</h2>
    <p class="recipe-meta">By ${recipe.author} | Published: ${recipe.datePublished || 'N/A'}</p>
    <p>${recipe.description}</p>
    <p class="recipe-meta">Prep Time: ${recipe.prepTime} | Cook Time: ${recipe.cookTime} | Serves: ${recipe.recipeYield}</p>
    <h3>Ingredients:</h3>
    <ul>
      ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3>Instructions:</h3>
    <ol>
      ${recipe.recipeInstructions.map(instruction => `<li>${instruction}</li>`).join('')}
    </ol>
  `;

  // Add the card to the recipes section
  recipesSection.appendChild(card);
});
