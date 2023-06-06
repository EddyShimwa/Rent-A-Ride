import "./favorites.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Dialog from "../../components/Dialog/Dialog";
import { fetchFavorites, selectFavoritesLoading, selectFavoritesError } from '../../redux/slices/fetchFavoriteSlice';


const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const loading = useSelector(selectFavoritesLoading);
  const error = useSelector(selectFavoritesError);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (loading) {
    return <Dialog message="Loading..." isLoading={loading} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="favorites-container">
      <h1 className="fav-header">Favorites Rides</h1>
      <ul className='favorite-list'>
        {favorites.map((item, index) => (
          <li key={index} className="favorite-list-item">
            <img src= {item.image} className="fav-car-image" alt="Favorite Car" />
            <h2 className="car-name">{item.name}</h2>
            <p className="car-desc">{item.description}</p>
            <button className='remove'>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;










