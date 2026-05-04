// src/components/CardPizza.jsx
import { useCart } from "../context/CartContext"  // ← NUEVO
import styles from "../assets/css/CardPizza.module.css"

const CardPizza = ({ pizza }) => {  // ← recibe objeto completo
  const { addToCart } = useCart()   // ← toma addToCart del contexto

  return (
    <div className={styles.tarjeta}>
      <img src={pizza.img} alt={pizza.name} className={styles.imagen} />
      <div className={styles.contenido}>
        <h3 className={styles.nombre}>{pizza.name}</h3>
        <p className={styles.descripcion}>{pizza.desc}</p>

        <p className={styles.tituloIngredientes}>Ingredientes:</p>
        <ul className={styles.listaIngredientes}>
          {pizza.ingredients.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>

        <p className={styles.precio}>
          ${pizza.price.toLocaleString("es-CL")}
        </p>

        <button
          className={styles.boton}
          onClick={() => addToCart(pizza)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default CardPizza