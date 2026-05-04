// src/pages/Cart.jsx
import { useCart } from "../context/CartContext"  // ← NUEVO
import styles from "../assets/css/Cart.module.css"

const Cart = () => {
  const { cart, total, addToCart, removeFromCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className={styles.contenedor}>
        <h3 className={styles.titulo}>Tu carrito está vacío 🍕</h3>
      </div>
    )
  }

  return (
    <div className={styles.contenedor}>
      <h3 className={styles.titulo}>Detalles del pedido:</h3>

      {cart.map((pizza) => (
        <div key={pizza.id} className={styles.fila}>
          <img src={pizza.img} alt={pizza.name} className={styles.imagen} />

          <span className={styles.nombre}>{pizza.name}</span>

          <span className={styles.precio}>
            ${pizza.price.toLocaleString("es-CL")}
          </span>

          <div className={styles.controles}>
            <button
              className={styles.botonCantidad}
              onClick={() => removeFromCart(pizza.id)}
            >
              -
            </button>
            <span className={styles.cantidad}>{pizza.quantity}</span> 
            <button
              className={styles.botonCantidad}
              onClick={() => addToCart(pizza)} 
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h4 className={styles.total}>
        Total: ${total.toLocaleString("es-CL")}
      </h4>

      <button className={styles.botonPagar}>Pagar</button>
    </div>
  )
}

export default Cart