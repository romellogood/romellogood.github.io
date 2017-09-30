import Link from 'gatsby-link';
import React from 'react';

const NotFoundPage = () => (
  <div>
    <h1>page not found</h1>
    <Link to="/">
      <h3 className="color">return home</h3>
    </Link>
  </div>
);

export default NotFoundPage;
