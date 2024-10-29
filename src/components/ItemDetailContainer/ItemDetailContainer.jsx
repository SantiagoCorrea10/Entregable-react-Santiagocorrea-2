import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const allProducts = [
          { id: 1, category: 'mates', name: 'Mate de madera', description: 'Un mate hecho de madera de alta calidad.' },
          { id: 2, category: 'bombillas', name: 'Bombilla de acero', description: 'Bombilla de acero inoxidable.' },
          { id: 3, category: 'accesorios', name: 'Bolsa para mate', description: 'Bolsa de transporte para mate.' },
        ];
        resolve(allProducts.find(product => product.id === parseInt(productId)));
      }, 500);
    });

    fetchProduct.then((result) => setProduct(result));
  }, [productId]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="item-detail-container">
      <h2 className="item-title">{product.name}</h2>
      <p className="item-description">{product.description}</p>
      <button className="button" onClick={() => alert("Producto agregado al carrito")}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;