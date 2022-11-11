import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartComponent from "./components/CartComponent";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState(Array(bakeryData.length).fill(0));
  const addItem = (index) => {
    const arrayCart = [...cart];
    arrayCart[index] +=1
    setCart(arrayCart);

  }


  return (
    <div className="App">
      <h1>Suyash's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item  = {item} index = {index} addItem = {addItem}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((count, index) => count? <CartComponent cartComponent = {bakeryData[index]} count  = {count}/> :<></>)}
        Total cost = $ {(cart.reduce((a,b,index) => {return a + b*bakeryData[index].price},0)).toFixed(2)}
      </div>
    </div>
  );
}

export default App;
