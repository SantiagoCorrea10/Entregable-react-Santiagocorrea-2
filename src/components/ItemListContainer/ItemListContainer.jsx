import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../App.css';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        const allProducts = [
          { id: 1, category: 'mates', name: 'Mate de madera', image: 'https://acdn.mitiendanube.com/stores/002/211/880/products/dsc_1071-21-66cb3bc268dd11fd2916591944443347-640-0.jpg' },
          { id: 2, category: 'bombillas', name: 'Bombilla de acero', image: 'https://acdn.mitiendanube.com/stores/003/859/300/products/whatsapp-image-2023-12-05-at-13-40-10-ca9cfd6b0c79c0abc517017955828795-1024-1024.jpg' },
          { id: 3, category: 'accesorios', name: 'Bolsa para mate', image: 'https://acdn.mitiendanube.com/stores/442/344/products/0221-47a05aec75a60ff87016305213247503-1024-1024.jpg' },
        ];
        resolve(allProducts.filter(product => !categoryId || product.category === categoryId));
      }, 500);
    });

    fetchProducts.then((result) => setProducts(result));
  }, [categoryId]);

  return (
    <div>
      <h2>Catálogo de Productos {categoryId ? `- ${categoryId}` : ''}</h2>
      <div className="product-list">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-title">{product.name}</h3>
            <button className="button product-button">Ver Detalles</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;