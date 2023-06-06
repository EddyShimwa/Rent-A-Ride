import Card from "../components/Card/Card"
import { Link } from 'react-router-dom'
import StarRating from "../components/star-rating/StarRating"

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRides, selectRidesLoading, selectRidesError } from '../redux/slices/fetchRideSlice';
import Dialog from "../components/Dialog/Dialog";

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

  return (
    <div>
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
    </div>
  );
};

export default AllRides
