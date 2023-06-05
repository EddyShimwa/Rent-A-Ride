import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import './DetailsPage.css'
import { HiOutlineChevronLeft, HiOutlineChevronDown } from 'react-icons/hi';
import ProfileImage from '../../assets/profile-image.png'
import { Link } from 'react-router-dom';
//import StarRating from '../../components/star-rating/StarRating';

const DetailsPage = ({currentItems}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
  };

  return (
  <div className="details-page-container">
    {currentItems
          && currentItems.map((item) => (
            <div
            className="reservation-card"
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => handleAddToFavorites(item.id)}
          >
      <div className="details-top-section">
        <Link to='/'>
          <HiOutlineChevronLeft className='back-icon' />
        </Link>
        <h2 className='details-title'>Beautiful Family Rides</h2>
        <BsSearch className='search-icon' />
      </div>

      <div className="details-middle-section">
        <img className='card-image' src={item.images.length > 0 && item.images[0].url}
                  alt={item.name} />
          <span className="label">Available</span>
          <h2 className="car-name">{item.name}</h2>
        <div className="image-inner-text">
          <div className='left-side'>
            <div className='details-profile-container'>
              <div className='details-profile-image'>
                <img src={ProfileImage} alt="Profile Image" className='details-profile-image' />
              </div>
              <div className='details-user-data'>
                <p className='details-rating'>
                <p>{item.rating}</p>
                </p>
            </div>
            </div>
          </div>

          <div className='right-side'>
            <p>${item.price_per_day}</p>
          </div>

        </div>
      </div>

      <div className="details-description-section">
        <h5 className='details-description-title'>About this listing</h5>
        <p className="description">
                {item.description.length > 50
                  ? `${item.description.slice(0, 55)}...`
                  : item.description}
              </p>
      </div>

      <div className="details-read-more-arrow">
        <HiOutlineChevronDown className='details-read-more-icon' />
      </div>

      <div className='details-footer'>
      <button className="details-footer-button" onClick={handleAddToFavorites}>
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </button>
      </div>
    </div>
      ))}
  </div>
  )
}
DetailsPage.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default DetailsPage
