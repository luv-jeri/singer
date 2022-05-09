import React from 'react';
import '../css/card.css';

const Card = (props) => {
  const { hello, name } = props;
  return (
    <div id='wrap'>
      <h1>{name}</h1>
      <h2>{hello.title}</h2>
      <p>{hello.content}</p>
      <img src={hello.image} />
      <button>Click Me</button>
    </div>
  );
};


export default Card;