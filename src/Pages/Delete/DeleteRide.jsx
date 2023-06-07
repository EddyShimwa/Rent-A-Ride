import { useSelector, useDispatch } from 'react-redux';
import { selectRides } from '../../redux/slices/fetchRideSlice';
import './Delete.css';
import { useState } from 'react';
import { deleteRideAsync } from '../../redux/slices/DeleteRideSlice';
import Dialog from '../../components/Dialog/Dialog';

const DeleteRide = () => {
  const dispatch = useDispatch();
  const rides = useSelector(selectRides);
  const loading = useSelector((state) => state.deleteRides.loading);
  const error = useSelector((state) => state.deleteRides.error);
  const [deletingRideId, setDeletingRideId] = useState(null);

  const handleDeleteClick = (rideId) => {
    setDeletingRideId(rideId);
    dispatch(deleteRideAsync(rideId));
  };

  return (
    <div className='delete-car-card'>
      <h2 className='delete-ride-title'>Delete Ride</h2>
      {rides.map((ride) => (
        <div className='delete-content' key={ride.id}>
          <p className='delete-car-name'>{ride.name}</p>
          <button
            className='btn-delete'
            type='button'
            onClick={() => handleDeleteClick(ride.id)}
            disabled={loading}
          >
            {deletingRideId === ride.id && loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      ))}
      {error && <p className='delete-error'>{error}</p>}
      {deletingRideId && loading && (
        <Dialog isOpen={true} message='Deleting...' />
      )}
    </div>
  );
};

export default DeleteRide;
