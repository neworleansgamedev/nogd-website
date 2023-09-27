//Gerardo Colon
//NOGD internship
//Contact page 
//Last edited: 9/20/2023

import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

function ContactPage() {
  return (
    <Layout PageTitle='Contact Page' PageHeading='Links'>
      <div className="contact-container">
        <ul className="link-list">
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="https://www.instagram.com/neworleansgamedev//">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/NOLA_GameDev/">Twitter</a>
          </li>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1DJ4_UTCkRUkWNuzlNBIUBm2TWThy6d8yzCglqZYYEps/edit?usp=sharing/">Super Cool Doc</a>
          </li>
          <li>
            <a href="https://www.paypal.com/donate/?hosted_button_id=2N3TJ3FLJ7LDE" target="_blank" rel="noopener noreferrer">
              Donate
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1a5bUupU_ql1GKaAYlHxwL3R_xWJ0evT3hSJm2_he0z4/edit" target="_blank" rel="noopener noreferrer">
              Code Of Conduct
            </a>
          </li>
          <li>
            <a href="https://discord.com/invite/JBt6geQ" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </li>
          <li>
            <a href="mailto:contact@neworleansgamedev.com">Contact Us!</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default ContactPage;