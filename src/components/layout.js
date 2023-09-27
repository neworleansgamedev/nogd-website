//Gerardo Colon
//NOGD internship
//Layout Page
//Last edited:9/20/2023

//classic imports
import React from 'react';
import { Link } from 'gatsby';
import nogdImage from '../images/nogd.png';
import './layout.css';

const Layout = ({ pageTitle, pageHeading, children }) => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/donations">Donate</Link></li>
            <li><Link to="/jam">Jam</Link></li>
            <li><Link to="/showntell">ShowntellPage</Link></li>
          </ul>
        </nav>
        <h1>{pageHeading}</h1>
      </header>
      <main className="content">
        <title>{pageTitle}</title>
        {children}
      </main>
      <footer className="footer">
{/* footer stuff if needed */}
      </footer>
    </>
  );
};

export default Layout;