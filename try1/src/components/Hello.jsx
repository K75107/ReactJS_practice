import Fruit from "./Fruit";

function Hello({ animals }) {
  const fruits = [
    { name: "apple", price: 10, soldOut: false },
    { name: "banana", price: 20, soldOut: true },
    { name: "durian", price: 30, soldOut: false },
    { name: "orange", price: 5, soldOut: true },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            name={fruit.name}
            price={fruit.price}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default Hello;
