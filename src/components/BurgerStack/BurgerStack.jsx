// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <p>
      {stack.map((b, index) => (
        <li key={index} style={{ backgroundColor: b.color }}>
          {b.name}
          <button onClick={() => removeFromBurger(index)}>x</button>
        </li>
      ))}
    </p>
  );
};

export default BurgerStack;
