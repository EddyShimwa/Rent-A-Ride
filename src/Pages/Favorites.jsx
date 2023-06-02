import React from 'react';


const Favorites = () => {

  const favorites = [
    { name: 'Favorite 1', description: 'Description 1' },
    { name: 'Favorite 2', description: 'Description 2' },
  ];

  if (!favorites || favorites.length === 0) {
    return <div>No favorites available</div>;
  }

  return (
    <div>
      <h1>Favorites Rides</h1>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;











