import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../db/db.js";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const ItemDetailContainer = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      const selectedProduct = products.find((prod) => prod.id === productId);
      setProduct(selectedProduct);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <Typography>Cargando producto...</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", marginTop: 4 }}>
      <CardMedia component="img" height="400" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">{product.description}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemDetailContainer;