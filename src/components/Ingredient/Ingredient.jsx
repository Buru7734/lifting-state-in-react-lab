import React from "react";

const Ingredient = ({ b, removeFromBurger, addToBurger }) => {
  return (
    <li style={{ backgroundColor: b.color }}>
      {b.name}
      {removeFromBurger ? (
        <button onClick={() => removeFromBurger(b)}>x</button>
      ) : (
        <button onClick={() => addToBurger(b)}>+</button>
      )}
    </li>
  );
};

export default Ingredient;
