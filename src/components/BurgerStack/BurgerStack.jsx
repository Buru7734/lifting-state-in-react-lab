// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient.jsx";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <p>
      {stack.map((b, index) => (
        <Ingredient b={b} key={index} removeFromBurger={removeFromBurger} />
      ))}
    </p>
  );
};

export default BurgerStack;
