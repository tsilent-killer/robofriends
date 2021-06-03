import React from 'react';
import Card from './Card';
import '../App.css';

const CardList = ({robots}) => {
  return (
    <div className='cardlist'>
      <Card robot= {robots[0]} />
      <Card robot= {robots[1]} />
      <Card robot= {robots[3]} />
      <Card robot= {robots[4]} />
      <Card robot= {robots[5]} />
      <Card robot= {robots[6]} />
      <Card robot= {robots[7]} />
      <Card robot= {robots[8]} />
    </div>
  );
}

export default CardList;