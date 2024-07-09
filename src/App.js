import React, { useState } from 'react';

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);

  let submitRecipe = (event) => {
    event.preventDefault();
    const name = event.target.elements.newRecipeName.value;
    const instructions = event.target.elements.newRecipeInstructions.value;
    setRecipes([...recipes, { name, instructions }]);
    showRecipeForm(false);
  };

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {recipeFormShown ? (
        <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe} role="form">
          <label htmlFor="newRecipeName">Recipe name: </label>
          <input type="text" id="newRecipeName" name="newRecipeName" />
          <label htmlFor="newRecipeInstructions">Instructions:</label>
          <textarea id="newRecipeInstructions" name="newRecipeInstructions" placeholder="write recipe instructions here..." />
          <button type="submit">Submit Recipe</button>
        </form>
      ) : (
        <button onClick={() => showRecipeForm(true)}>Add Recipe</button>
      )}
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h2>Name: {recipe.name}</h2>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default App;