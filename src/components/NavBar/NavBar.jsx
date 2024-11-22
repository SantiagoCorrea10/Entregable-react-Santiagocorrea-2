import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <AppBar position="static" style={{ backgroundColor: "red" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Borja Mates
          </Link>
        </Typography>
        <Link to="/category/mates" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>
          Mates
        </Link>
        <Link to="/category/termos" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>
          Termos
        </Link>
        <Link to="/category/porta-termos" style={{ textDecoration: "none", color: "white", marginRight: "15px" }}>
          Porta Termos
        </Link>
        <IconButton color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;