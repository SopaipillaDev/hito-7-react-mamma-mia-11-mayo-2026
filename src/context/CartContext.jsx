// src/context/CartContext.jsx
import { createContext, useState, useContext } from "react"

// 1. Crear el contexto
export const CartContext = createContext()

// 2. El Provider: componente que "envuelve" y distribuye el estado
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === pizza.id)
      if (existe) {
        // Ya está en el carrito: solo incrementar quantity
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      // Primera vez: agregar con quantity 1
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

  // Total derivado: se recalcula solo cuando cambia el carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

// 3. Custom hook para consumir el contexto cómodamente
export const useCart = () => useContext(CartContext)

export default CartProvider