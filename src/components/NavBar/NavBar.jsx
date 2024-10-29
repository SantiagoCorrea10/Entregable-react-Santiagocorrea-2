import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/category/mates">Mates</Link>
      <Link to="/category/bombillas">Bombillas</Link>
      <Link to="/category/accesorios">Accesorios</Link>
    </nav>
  );
};

export default Navbar;
