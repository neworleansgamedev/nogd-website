import React from 'react';

function TitledList({ title, list }) {
  return (
    <div className='list'>
      <h2>{title}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TitledList;
