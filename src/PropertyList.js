import Property from "./property";
import "./PropertyList.css";

export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((p) => {
        return (
          <Property
            name={p.name}
            price={p.price}
            rating={p.rating}
            key={p.id}
          />
        );
      })}
    </div>
  );
}
