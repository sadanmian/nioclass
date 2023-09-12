import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Nioclass
        </Link>
      </div>
    </nav>
  );
}
