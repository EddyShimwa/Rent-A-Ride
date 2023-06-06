import { BsSearch } from 'react-icons/bs';
import './DetailsPage.css'
import { HiOutlineChevronLeft, HiOutlineChevronDown } from 'react-icons/hi';
import ProfileImage from '../../assets/profile-image.png'
import { Link, useNavigate } from 'react-router-dom';
import StarRating from '../../components/star-rating/StarRating';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { singleRide } from '../../redux/slices/singleRideSlice';
import Dialog from '../../components/Dialog/Dialog';
import { selectLoginUserId } from '../../redux/slices/loginSlice';
import axios from 'axios';

const DetailsPage = () => {
  const loading = useSelector((state) => state.singleRide.loading);

  const userId = useSelector(selectLoginUserId);

  const navigate = useNavigate();

  const { rideId } = useParams();

  const dispatch = useDispatch();

  const ride = useSelector((state) => state.singleRide.ride.ride);

  useEffect(() => {
    dispatch(singleRide(rideId));
  }, [dispatch, rideId]);

  if (loading) {
    return <Dialog message="Loading..." isLoading={loading} />;
  }

  if (!ride) {
    return <div>Loading...</div>;
  }

  const handleAddToFavorites = (e) => {
    e.preventDefault();

    const favoriteData = {
      user_id: userId,
      car_id: ride.id,
      name: ride.name,
      description: ride.description,
      image: ride.car_image_url,
    };

    axios.post('http://127.0.0.1:3000/favorites', favoriteData)
      .then(response => {
        console.log('Favorite added successfully:', response.data);
        navigate('/favorite');
      })
      .catch(error => {
        console.error('Failed to add favorite:', error);
      });

  };

  return (
    <div className="details-page-container">
      <div className="details-top-section">
        <Link to='/'>
          <HiOutlineChevronLeft className='back-icon' />
        </Link>
        <h2 className='details-title'>Beautiful Family Apartment</h2>
        <BsSearch className='search-icon' />
      </div>

      <div className="details-middle-section">
        <img src={ride.car_image_url} alt="House" className='details-image' />

        <div className="image-inner-text">
          <div className='left-side'>
            <div className='details-profile-container'>
              <div className='details-profile-image'>
                <img src={ProfileImage} alt="Profile Image" className='details-profile-image' />
              </div>
              <div className='details-user-data'>
                <p className="details-name">John Doe</p>
                <p className='details-rating'>
                <StarRating rating={4.5} />
                </p>
            </div>
            </div>
          </div>

          <div className='right-side'>
            <p>
              <span className='details-price'>${ride.price}</span>
            </p>
            <p>per month</p>
          </div>

        </div>
      </div>

      <div className="details-description-section">
        <h5 className='details-description-title'>About this listing</h5>
        <p className='details-page-description'>
          {ride.description}
        </p>
      </div>

      <div className="details-read-more-arrow">
        <HiOutlineChevronDown className='details-read-more-icon' />
      </div>

      <div className='details-footer'>
        <button className="details-footer-button" onClick={handleAddToFavorites}>
          Add to Favorites
        </button>
      </div>

    </div>
  )
}

export default DetailsPage
