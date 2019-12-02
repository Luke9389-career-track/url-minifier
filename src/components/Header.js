import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/urls">My URLs</Link>
      <Link to="/create">Create A URL</Link>
    </nav>
  </header>
);

export default Header;
