// src/components/Navbar.jsx
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"  // ← NUEVO

const Navbar = () => {
  const { total } = useCart()  // ← viene del contexto, no de props

  return (
    <nav style={{
      backgroundColor: "#1a1a2e",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}>
        🍕 Mamma Mía
      </Link>
      <Link to="/" style={{ color: "#ccc", textDecoration: "none" }}>Home</Link>
      <Link to="/register" style={{ color: "#ccc", textDecoration: "none" }}>Registro</Link>
      <Link to="/login" style={{ color: "#ccc", textDecoration: "none" }}>Login</Link>
      <Link to="/profile" style={{ color: "#ccc", textDecoration: "none" }}>Perfil</Link>

      <Link
        to="/cart"
        style={{
          marginLeft: "auto",
          backgroundColor: "#e94560",
          color: "white",
          padding: "8px 16px",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        🛒 Total: ${total.toLocaleString("es-CL")}
      </Link>
    </nav>
  )
}

export default Navbar