import { useState, useEffect } from "react"
import styles from "../assets/css/Pizza.module.css"
import { useCart } from "../context/CartContext"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetchPizza()
  }, [])

  const fetchPizza = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas/p001")
    const data = await response.json()
    setPizza(data)
  }

  if (!pizza) return <p>Cargando...</p>

  return (
    <div className={styles.contenedor}>
      <img src={pizza.img} alt={pizza.name} className={styles.imagen} />
      <div className={styles.contenido}>
        <h2 className={styles.nombre}>{pizza.name}</h2>
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
		<button className={styles.boton} onClick={() => addToCart(pizza)}>
			Añadir al carrito
		</button>
      </div>
    </div>

  )
}

export default Pizza