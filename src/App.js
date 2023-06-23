import React from "react";
//import Pokemon from "./Pokemon";
//import ListPicker from "./ListPicker";
//import Shopping from "./shopping";
//import PropertyList from "./PropertyList";
import Clicker from "./Clicker";

const App = () => {
  return (
    <>
      <Clicker message="HI, You Clicked me!!!" buttonText="Click Me!!!" />
      <Clicker message="HI, Don't Click me!!!" buttonText="Don't Click Me!!!" />
    </>
  );
};

export default App;

const Dog = () => {
  return (
    <h1>
      This is <b>HEADING</b> for <i>Dogs</i>!!
    </h1>
  );
};

function Header() {
  return (
    <p>
      Short of the love between a parent and their child, there may not be
      another love as pure and wonderful as the love between a person and their
      dog. Nurturing, attentive, and always up for playtime, dogs are a
      quintessential part of country life, and we can't picture our lives
      without at least one. All of the dog quotes we've gathered here aren't
      just intended to make you happy; they'll also remind you of the special
      bond of friendship we have with our dogs
    </p>
  );
}

const data = [
  { item: "eggs", quantity: 10, completed: true },
  {
    item: "bread",
    quantity: 4,
    completed: false,
  },
  {
    item: "Milk",
    quantity: 3,
    completed: true,
  },
  {
    item: "Apple",
    quantity: 6,
    completed: false,
  },
];
// <PropertyList properties={properties} />;

// <Shopping items={data} />
//    <div className="App">
//      <ListPicker set1="x" set2="t" set3="x" />
//     <ListPicker set1="x" set2="x" set3="x" />
//   </div>;
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
