
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data));
  }, [id]);

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} style={{ width: "300px" }} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price.toLocaleString()}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {pizza.ingredients.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pizza;