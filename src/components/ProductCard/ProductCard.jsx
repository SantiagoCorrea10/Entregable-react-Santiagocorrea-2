import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card style={{ maxWidth: 345, margin: "auto" }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Precio: ${product.price}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
        >
          Añadir al Carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;