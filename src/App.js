import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState({});
  const [price, setPrice] = useState(0);
  const updateCart =(uid)=>
  {
    console.log(uid);
    let newCart = cart;
    if(newCart[uid])
    {
      newCart[uid] +=1;
    }
    else{
      newCart[uid] = 1;
    }

    setCart({...newCart})

    setPrice(price + bakeryData[uid].price)
    console.log(cart);
    console.log(bakeryData[0].name)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div>
          <h2>{item.name}</h2>
          <img style = {{width: 50 + '%'}} src = {item.image} />
          <p>{item.price}</p>
          <CartItems updateCart = {updateCart} item = {item} index = {index}/>
          </div>
         // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart {price}</h2>
        {/* TODO: render a list of items in the cart */

        Object.keys(cart).map((key) => {
          return (
            <div>
          <h2>
            {bakeryData[key].name}
          </h2>
          <h2>
            {cart[key]}
          </h2>
          </div>
          )
          
              })
        /*cart.map((index, item) =>
        (
          <div>
            <h2>
              
            </h2>
            <h2>
            
            </h2>
            </div>
        ))*/}
      </div>
    </div>
  );
}

function CartItems(props)
{
  return (<button onClick = {() => props.updateCart(props.index)}> test </button>)
}

export default App;
