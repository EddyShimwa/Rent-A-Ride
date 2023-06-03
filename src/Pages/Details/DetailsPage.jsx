import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import './DetailsPage.css'
import { HiOutlineChevronLeft, HiOutlineChevronDown } from 'react-icons/hi';
import ProfileImage from '../../assets/profile-image.png'
import { Link } from 'react-router-dom';
import StarRating from '../../components/star-rating/StarRating';

const DetailsPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
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
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80" alt="House" className='details-image' />

        <div className="image-inner-text">
          <div className='left-side'>
            <div className='details-profile-container'>
              <div className='details-profile-image'>
                <img src={ProfileImage} alt="Profile Image" className='details-profile-image' />
              </div>
              <div className='details-user-data'>
                <p className="details-name">John Doe</p>
                <p className='details-rating'>ratings
                      <StarRating rating={4.5} /> {/* Render the StarRating component */}
                      <span>4.5</span>
                </p>
            </div>
            </div>
          </div>

          <div className='right-side'>
            <p>$1000</p>
            <p>per month</p>
          </div>

        </div>
      </div>

      <div className="details-description-section">
        <h5 className='details-description-title'>About this listing</h5>
        <p className='details-page-description'>
          Lorem ipsum dolor sit ame consec tetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
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
  )
}

export default DetailsPage
