import { useCart } from "../context/CartContext"
import styles from "../assets/css/CardPizza.module.css"
import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, img, desc, ingredients }) => {
  const { addToCart } = useCart()

  return (
    <div className={styles.tarjeta}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <p className={styles.tituloIngredientes}>Ingredientes:</p>
      <ul className={styles.listaIngredientes}>
        {ingredients.map((ingrediente) => (
          <li key={ingrediente}>{ingrediente}</li>
        ))}
      </ul>
      <p className={styles.precio}>
        ${price.toLocaleString("es-CL")}
      </p>
      <Link to={`/pizza/${id}`}>Ver detalle</Link>
      <button
        className={styles.boton}
        onClick={() => addToCart({ id, name, price, img, desc, ingredients })}
      >
        Añadir al carrito
      </button>
    </div>
  )
}

export default CardPizza