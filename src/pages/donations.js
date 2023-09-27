//Gerardo Colon
//NOGD internship
//Donations Page
//Last edited:9/20/2023

import React, { useState } from "react";

const DonatePage = () => {
  const [donationAmount, setDonationAmount] = useState(10);

  const handleDonationChange = (event) => {
    const newAmount = parseFloat(event.target.value);
    if (!isNaN(newAmount)) {
      setDonationAmount(newAmount);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your donation of $${donationAmount}!`);
  };

  const paypalDonationLink =
    "https://www.paypal.com/donate/?hosted_button_id=2N3TJ3FLJ7LDE";

  return (
    <>
      <div className="donate-container">
        <p>Your support is greatly appreciated!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="donationAmount">Enter donation amount:</label>
          <input
            type="number"
            id="donationAmount"
            name="donationAmount"
            value={donationAmount}
            onChange={handleDonationChange}
            min="1"
            step="1"
          />
          <button type="submit">Donate</button>
        </form>
        <p>Or choose from the following donation:</p>
        <ul>
          <li>
            $10 <button onClick={() => setDonationAmount(10)}>Donate</button>
          </li>
          <li>
            $25 <button onClick={() => setDonationAmount(25)}>Donate</button>
          </li>
          <li>
            $50 <button onClick={() => setDonationAmount(50)}>Donate</button>
          </li>
        </ul>
        <a
          href={paypalDonationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="paypal-link"
        >
          Donate via PayPal
        </a>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(donationAmount / 100) * 100}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;
