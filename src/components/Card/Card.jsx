import './Card.css';
import PropTypes from 'prop-types';
import StarRating from '../star-rating/StarRating';

const Card = ({ title, description, imageUrl, price, rating, time }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className='card-footer'>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
        </div>
        <div className='card-bottom'>
        <p className='details-rating'>
                <StarRating /> {rating}
        </p>
          <p className="card-time">{time}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Card;
