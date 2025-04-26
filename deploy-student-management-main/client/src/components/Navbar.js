import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/">Student Management System</Link>
      <div>
        <Link className="btn btn-light me-2" to="/">Home</Link>
        <Link className="btn btn-light" to="/add-student">Add Student</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
