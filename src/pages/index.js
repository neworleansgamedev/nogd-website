//Gerardo Colon
//NOGD internship
//Index Page
//Last edited:9/6/2023

//classic imports
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


//const stuff
const IndexPage = () => {
 
  return (

  <main>
    
    <h1>New Orleans Game Dev</h1>
     <p>Still unfinished, working on it!</p>
      <Link to="/contact">Contact Page</Link>
      <Link to="/about">About Page</Link>
  
  </main>
  
  )
}

//exporting 
export const Head = () => <title>New Orleans Game Developers</title>
export default IndexPage