// src/components/IngredientList/IngredientList.jsx

import Ingredient from "../Ingredient/Ingredient.jsx";

const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, i) => (
        <Ingredient b={ingredient} i={i} addToBurger={addToBurger} key={i} />
      ))}
    </ul>
  );
};

export default IngredientList;
