import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ title, description, price, rating, time }) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <div className='card-header'>
         <h2 className="card-title">{title}</h2>
        </div> */}
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80" alt={title} className="card-image" />
        <div className='card-footer'>
         <p className="card-description">{description}</p>
         <p className="card-price">{price}</p>
        </div>
        <div className='card-bottom'>
         <p className="card-rating">{rating}</p>
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
