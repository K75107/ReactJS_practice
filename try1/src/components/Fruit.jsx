export default function Fruit({ name, price, soldOut }) {
  return (
    <div>
      {!soldOut ? (
        <li>
          {name} {price}
        </li>
      ) : (
        ""
      )}
    </div>
  );
}
