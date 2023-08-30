import { createContext, useState } from "react"

// Create a new context for managing cart-related state
export const CartContext = createContext()

// Fetch the shopping URL from the environment variables
const url = process.env.REACT_APP_SHOP_URL

// Define the CartState component to manage cart-related state
export const CartState = (props) => {
  // State to manage products, cart items, and subTotal
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [subTotal, setSubTotal] = useState(0)

  // Function to fetch products from the provided URL
  const getProducts = async () => {
    const response = await fetch(`${url}/products?limit=5`)
    const result = await response.json()
    setProducts(result)
  }

  // Function to add an item to the cart
  const addToCart = (id) => {
    const item = products.filter((item) => item.id === id)
    const hasItem = cartItems.some((ele) => ele.id === item[0].id)
    if (!hasItem) {
      setCartItems((prev) => [...prev, item[0]])
      setSubTotal(subTotal + item[0].price)
    }
  }

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(() => cartItems.filter((item) => item.id !== id))
    const item = products.filter((item) => item.id === id)
    setSubTotal(subTotal - item[0].price)
  }

  // Provide the defined values and functions through the context
  return (
    <CartContext.Provider value={{
      getProducts,
      products,
      addToCart,
      cartItems,
      removeFromCart,
      subTotal
    }}>
      {props.children}
    </CartContext.Provider>
  )
}
