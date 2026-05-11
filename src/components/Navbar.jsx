import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const { total } = useContext(CartContext);

  return (
    <nav style={{
      backgroundColor: "#1a1a2e",
      padding: "12px 24px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap"
    }}>
	
	  <Link to="/">Home</Link>
	  
	  {token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

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