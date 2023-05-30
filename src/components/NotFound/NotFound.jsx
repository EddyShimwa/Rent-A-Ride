import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
    <h1 className="not-found-text">404 - Page Not Found</h1>
    <p className='not-found-paragraph' >
      The page you are looking for might have been removed had its name changed or is temporarily unavailable.
    </p>

    <button className='not-found-button'>
     <a href="">
      <Link to='/'>Go To Homepage</Link>
      </a>
    </button>
    </div>
  );
}

export default NotFound;
