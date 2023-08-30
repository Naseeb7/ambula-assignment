import { CartContext } from "Contexts/CartContext";
import { ShoppingCart, Trash } from "lucide-react"; // Importing SVG icons
import React, { useContext } from "react";

const Cart = () => {
  const context = useContext(CartContext); // Access the CartContext
  const { cartItems, removeFromCart, subTotal } = context; // Destructure values from the context

  return (
    // Main container for the cart component
    <div className="flex flex-col p-2 border-2 rounded-xl">
      <div className="flex w-full justify-between items-center p-2">
        <div className="flex text-xl items-center p-2 font-semibold gap-2">
          <span className="flex"><ShoppingCart /></span>
          Cart -<span className="flex text-base">{cartItems.length}</span>
        </div>
        <div className="flex p-2 justify-center items-center">
          {Math.round(subTotal)}<span>&#36;</span> 
        </div>
      </div>
      {/* Cart item list */}
      <div className="flex flex-col gap-2 p-2 h-[40vh] overflow-auto">
        {/* Mapping through each cart item */}
        {cartItems.map((item) => {
          return (
            // Display each cart item
            <div key={item.id} className="flex w-full justify-between gap-2 p-2 animate-slideRight">
              <img src={item.image} alt="item" className="flex w-1/6 h-2/3"/>
              <div className="flex w-4/6 text-sm">{item.title.slice(0, 25)}</div>
              {/* Button to remove item */}
              <button onClick={() => removeFromCart(item.id)} className="flex w-1/6">
                <Trash />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
