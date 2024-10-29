import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/category/mates" className="nav-link">Mates</Link>
        <Link to="/category/bombillas" className="nav-link">Bombillas</Link>
        <Link to="/category/accesorios" className="nav-link">Accesorios</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;