import Card from "../components/Card/Card"
import { Link } from 'react-router-dom'
import StarRating from "../components/star-rating/StarRating"

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRides, selectRidesLoading, selectRidesError } from '../redux/slices/fetchRideSlice';
import Dialog from "../components/Dialog/Dialog";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./AllRides.css"

const AllRides = () => {

  const dispatch = useDispatch();
  const rides = useSelector((state) => state.rides.rides);
  const loading = useSelector(selectRidesLoading);
  const error = useSelector(selectRidesError);

  useEffect(() => {
    dispatch(fetchRides());
  }, [dispatch]);

  if (loading) {
    return <Dialog message="Loading..." isLoading={loading} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="all-rides-container">
      <Slider {...sliderSettings}>
        {
          rides.map((ride) => (
          <Link to={`/ride-details/${ride.id}`} key={ride.id}>
            <Card
              title={ride.name}
              description={ride.description}
              price={ride.price}
              imageUrl={ride.car_image_url}
              time="per week"
              rating={ride.rating}
            >
              <StarRating rating={ride.rating} />
            </Card>
          </Link>
          ))}
      </Slider>
    </div>
  );
};

export default AllRides
