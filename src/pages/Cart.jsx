import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { token } = useContext(UserContext);
  const { cart, total, removeFromCart } = useCart();

  return (
    <div>
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} × {item.quantity} — ${(item.price * item.quantity).toLocaleString("es-CL")}
          </p>
          <button onClick={() => removeFromCart(item.id)}>Quitar</button>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString("es-CL")}</h3>

      <button disabled={!token}>Pagar</button>

      {!token && <p>Debes iniciar sesión para pagar.</p>}
    </div>
  );
};

export default Cart;