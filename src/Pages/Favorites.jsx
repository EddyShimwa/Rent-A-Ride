import React from 'react';
import "../Pages/favorites.css"


const Favorites = () => {
  const favorites = [
    { name: 'Favorite 1', description: 'Description 1' },
    { name: 'Favorite 2', description: 'Description 2' },
  ];

  if (!favorites || favorites.length === 0) {
    return <div>No favorites available</div>;
  }

  return (
    <div className="favorites-container">
      <h1 className="favz-header">Favorites Rides</h1>
      <ul>
        {favorites.map((item, index) => (
          <li key={index} className="favorite-list">
            <p className="car-name">{item.name}</p>
            <p className="car-description">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;










