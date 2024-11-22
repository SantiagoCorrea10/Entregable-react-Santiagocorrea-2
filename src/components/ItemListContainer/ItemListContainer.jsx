import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, Typography } from "@mui/material";

const ItemListContainer = ({ products, addToCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Nuestros Productos
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ItemListContainer;