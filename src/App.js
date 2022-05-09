import React from 'react';
import Card from './components/Card.js';

const onlineThing = [
  {
    id: 1,
    title: 'Card 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nunc nisl consectetur nunc, euismod eget nunc euismod, nunc nisl consectetur nunc.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Card 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eget euismod consectetur, nunc nisl consectetur nunc, euismod eget nunc euismod, nunc nisl consectetur nunc.',
    image: 'https://via.placeholder.com/151',
  },
];

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      {onlineThing.map((item) => {
        return <Card hello={item} name='Sanjay' />; // Card(item)
      })}
    </div>
  );
};

export default App;
