import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import nogdImage from "../images/nogd2.jpg";
function ThirdThursdayPage() {
  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4">Join Us on the Third Thursday of every month</h1>
            <h2>We Meet Monthly for Exciting Events</h2>
            <p className="lead">
              Join us every third Thursday of the month for engaging discussions, networking opportunities, and more. Don't miss out on the fun!
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <img
              src={nogdImage}
              alt="Thursday Image"
              style={{ maxWidth: '100%', height: '75%' }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <button className="btn btn-primary btn-lg">Learn More</button>
          </div>
        </div>
      </div>
  );
}

export default ThirdThursdayPage;
