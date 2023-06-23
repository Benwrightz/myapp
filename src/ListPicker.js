const ListPicker = ({ set1, set2, set3 }) => {
  const isEqual = set1 === set2 && set2 === set3;
  return (
    <>
      <h1>
        {set1}
        {set2}
        {set3}
      </h1>
      {isEqual ? (
        <>
          <h2 style={{ color: "green" }}>You win!!!</h2>
        </>
      ) : (
        <>
          <h2 style={{ color: "red" }}>You lose!!!</h2>
        </>
      )}
      {isEqual && <h3>Congrats</h3>}
    </>
  );
};

export default ListPicker;

//<h2 style = {{color: isEqual ? "green" : "red"}}>{isEqual ? "You win!" : "You lose!"}</h2>

///const ListPicker = ({ sport }) => {
// const list = ["fast", "break", "car", "deck", "earl"];
// return (
//  <div>
//    <h1>This is for Props</h1>
//    {list.map((items, index) => (
//      <h2 key={index}>Hello {items}!!</h2>
//    ))}
//    <h2>Hello {sport}!!</h2>
//  </div>
// );
//};

//export default ListPicker;
