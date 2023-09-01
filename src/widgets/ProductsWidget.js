import { CartContext } from "Contexts/CartContext";
import React, { useContext, useEffect } from "react";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";

const ProductsWidget = () => {
  const context = useContext(CartContext);
  const { products, getProducts, addToCart } = context;

  // Fetch products when the component mounts
  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line

  return (
    // Main container for the ProductsWidget component
    <div className="flex flex-col sm:flex-row p-2">
      {/* Sidebar with shopping cart */}
      <div className="flex flex-col w-full sm:w-1/5 gap-2">
        <div className="flex text-2xl font-bold text-Zinc-800 animate-slideRight">
          {" "}
          Shopping
        </div>
        <Cart />
      </div>
      <div className="flex flex-col p-2 w-full sm:w-4/5">
        <div className="flex text-xl text-zinc-600 font-semibold">Products</div>
        <div className="noScollbar flex w-full gap-4 p-2 h-[50vh] overflow-x-auto">
          {/* Mapping through each product */}
          {products.map((product) => {
            return (
              // Display each product
              <div
                key={product.id}
                className="flex relative justify-center min-w-[50%] sm:min-w-[20%]"
              >
                <div className="noScollbar flex border-2 bg-zinc-100 flex-col p-2 gap-2 rounded-xl text-zinc-800 overflow-y-auto">
                  <div className="flex text-lg font-semibold">
                    {product.title.slice(0, 35)}...
                  </div>
                  <img
                    src={product.image}
                    alt="product"
                    className="w-full h-1/2 rounded-xl"
                  />
                  <div className="flex text-sm">{product.category}</div>
                  <div className="flex text-sm">{product.description}</div>
                  {/* Add to cart button */}
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex absolute bottom-0 left-0 bg-zinc-900 text-zinc-400 w-full p-2 rounded-xl justify-between group/add"
                  >
                    <div className="flex">
                      <span>&#36;</span>
                      {product.price}
                    </div>
                    <div className="flex duration-200 gap-1">
                      Add{" "}
                      <span className="group-hover/add:translate-x-1 duration-200">
                        <ShoppingCart />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsWidget;
