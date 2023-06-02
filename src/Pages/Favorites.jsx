import "../Pages/favorites.css"


const Favorites = () => {
  const favorites = [
    { name: 'Favorite 1', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo ' },
    { name: 'Favorite 2', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo ' },
  ];

  if (!favorites || favorites.length === 0) {
    return <div>No favorites available</div>;
  }

  return (
    <div className="favorites-container">
      <h1 className="favz-header">Favorites Rides</h1>
      <ul className='favorite-list'>
        {favorites.map((item, index) => (
          <li key={index} className="favorite-list-item">
            <h2 className="car-name">{item.name}</h2>
            <p className="car-description">{item.description}</p>
            <button className='remove'>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;










