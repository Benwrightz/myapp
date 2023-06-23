export default function Shopping({ items }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index} style={{ color: item.item ? "green" : null }}>
            {item.item} | {item.quantity} - {item.completed}
          </li>
        );
      })}
    </ul>
  );
}
