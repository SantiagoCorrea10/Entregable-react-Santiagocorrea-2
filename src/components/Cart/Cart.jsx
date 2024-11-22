import React from "react";
import { Link } from "react-router-dom";
import { Typography, List, ListItem, ListItemText, Button } from "@mui/material";

const Cart = ({ cart = [], removeFromCart, clearCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>

      {cart.length === 0 ? (
        <Typography variant="h6">
          Tu carrito está vacío. <Link to="/">Regresar a la tienda</Link>
        </Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={`${item.name} (x${item.quantity})`}
                  secondary={`Precio: $${item.price}`}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" gutterBottom>
            Total: ${total.toFixed(2)}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
            style={{ marginTop: "10px" }}
          >
            Ir al Checkout
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            onClick={clearCart}
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            Vaciar Carrito
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;