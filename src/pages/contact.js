//Gerardo Colon
//NOGD internship
//Contact page 
//Last edited: 9/6/2023

import * as React from 'react'
import { Link } from 'gatsby'

const ContactPage = () => {
 
 return (
  
<div>
  <h1>Contact Page</h1>
   <p>Here are all the links so far:</p>
    <ul>
    <li>
      <Link to="/">Homepage</Link>
    </li>
    <li>
      <Link to="https://www.paypal.com/donate/?hosted_button_id=2N3TJ3FLJ7LDE">Donate</Link>
    </li>
    <li>
      <Link to="https://docs.google.com/document/d/1a5bUupU_ql1GKaAYlHxwL3R_xWJ0evT3hSJm2_he0z4/edit">Code Of Conduct</Link>
    </li>
    <li>
      <Link to="https://discord.com/invite/JBt6geQ">Discord</Link>
    </li>
    <a href="contact@neworleansgamedev.com">Contact</a>
  </ul>
</div>
  
  );
};

export const Head = () => <title>Contact Page</title>
export default ContactPage