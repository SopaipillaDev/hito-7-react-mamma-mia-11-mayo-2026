import { createContext, useState, useContext } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === pizza.id)
      if (existe) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...pizza, quantity: 1 }]
    })
  }

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === pizzaId)
      if (item.quantity === 1) {
        return prevCart.filter((i) => i.id !== pizzaId)
      }
      return prevCart.map((i) =>
        i.id === pizzaId ? { ...i, quantity: i.quantity - 1 } : i
      )
    })
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

export default CartProvider