//Gerardo Colon
//NOGD internship
//Layout Page
//Last edited:9/6/2023

//classic imports
import * as React from 'react'
import { Link } from 'gatsby'




const Layout = ({ PageTitle, PageHeading, children }) => {
   return (

    <main>
     <title>{PageTitle}</title>
     <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
     <h1>{PageHeading}</h1>
    {children}
    </main>
    
   ) 
}

export default Layout
