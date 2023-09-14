//Gerardo Colon
//NOGD internship
//Layout Page
//Last edited:9/13/2023

//classic imports
import React from 'react';
import { Link } from 'gatsby';
import nogdImage from '../images/nogd.png'; // 
import './layout.css'; 

const Layout = ({ PageTitle, PageHeading, children }) => {
    
   return (

    <div className="layout">
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <h1>{PageHeading}</h1>
      </header>
      <main className="content">
        <title>{PageTitle}</title>
        {children}
      </main>
    </div>
   )
}

export default Layout