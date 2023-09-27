//Gerardo Colon
//NOGD internship
//Index Page
//Last edited:9/20/2023

//classic imports
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import nogdImage from '../images/nogd.png';
import './index.css';

function IndexPage() {
  return (
    <Layout>
      <main>
        <div className="header">
          <h1>New Orleans Game Developer</h1>
          <p>Still unfinished, working on it!</p>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="logo-container">
          <img src={nogdImage} alt="NOGD Image" className="logo" />
        </div>
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_817psp5emlgh8vgg432udrtv20%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: 0, width: '100%', height: '600px' }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;