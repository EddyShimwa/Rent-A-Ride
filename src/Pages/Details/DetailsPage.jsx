import { BsSearch } from 'react-icons/bs';
import './DetailsPage.css'
import { HiOutlineChevronLeft } from 'react-icons/hi';

const DetailsPage = () => {
  return (
    <div className="details-page-container">
      <div className="details-top-section">
        <HiOutlineChevronLeft className='back-icon' />
        <p className='details-title'>Beautiful Family Apartment</p>
        <BsSearch className='search-icon' />
      </div>

      <div className="details-middle-section">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80" alt="House" className='details-image' />

        <div className="image-inner-text">
          <div className='left-side'>
            <div className='details-profile-container'>
              <div className='details-profile-image'></div>
              <div className='details-user-data'>
                <p className="details-name">John Doe</p>
                <p className='details-rating'>ratings</p>
            </div>
            </div>
          </div>

          <div className='right-side'>
            <p>$1000</p>
            <p>per month</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default DetailsPage
