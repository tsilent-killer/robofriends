import React from 'react';
import '../App.css';

const Card = ({robot}) => {
  return (
    <div className='card'>
      <img src={`https://robohash.org/${robot.id}`} alt='' />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>    
    </div>
  );
}

export default Card;