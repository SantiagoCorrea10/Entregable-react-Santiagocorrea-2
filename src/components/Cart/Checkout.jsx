import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../db/db.js";

const Checkout = ({ cart = [], clearCart }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const order = {
      buyer: formData,
      items: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      alert(`Compra registrada con éxito. ID de la orden: ${docRef.id}`);
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error al registrar la compra:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Nombre y Apellido"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleInputChange}
        />
        <TextField
          name="phone"
          label="Teléfono"
          fullWidth
          margin="normal"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="Correo Electrónico"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Typography variant="h6" gutterBottom>
          Resumen del Pedido
        </Typography>

        <List>
          {cart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${item.name} (x${item.quantity})`}
                secondary={`Precio: $${item.price}`}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" gutterBottom>
          Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </Typography>

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "10px" }}>
          Confirmar Compra
        </Button>
      </form>
    </div>
  );
};

export default Checkout;