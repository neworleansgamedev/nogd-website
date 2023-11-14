
import React from 'react';

function GoogleMap() {
  return (
    <div>
      <h1>Sea Cave Arcade Location:</h1>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4041124925798!2d-90.04853218931146!3d29.967814222093683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a62e6504baef%3A0x951857a513c4004d!2sSea%20Cave!5e0!3m2!1sen!2sus!4v1696440092688!5m2!1sen!2sus" 
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default GoogleMap;
