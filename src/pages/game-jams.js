//Gerardo Colon
//NOGD internship
//Jam Page
//Last edited:9/20/2023

//classic imports
import React from 'react';
import { Link } from 'gatsby';

function JamPage() {
  return (
    <>
      <section>
        <h2>Game Jam</h2>
        <p>
          Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam 
        </p>
        <p>
          Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam 
        </p>
      </section>

      <section>
        <h2>Game Jam Stuff</h2>
        <ul>
          <li>
            <strong>Game Jam stuff</strong>
            <p >Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam </p>
          </li>
          <li>
            <strong>Game Jam</strong>
            <p> Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam </p>
          </li>
          <li>
            <strong>Game Jam</strong>
            <p> Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam </p>
          </li>
          <li>
            <strong>More stuff</strong>
            <p> Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam .</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>Get Involved</h2>
        <p>
          Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam Game Jam .
        </p>

      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Have questions? We'd love to hear from you! Please don't hesitate to <Link to="/contact">contact us</Link>.
        </p>
      </section>
    </>
  );
}

export default JamPage;