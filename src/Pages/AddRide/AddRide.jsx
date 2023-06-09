import './AddRide.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRide } from '../../redux/slices/addRideSlice';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../../redux/slices/loginSlice.js";
import Dialog from '../../components/Dialog/Dialog';


const AddRide = () => {
  const [carData, setCarData] = useState({
    name: '',
    model: '',
    description: '',
    rating: '',
    price: '',
    car_image_url: '',
    rentPerDay: '',
    errors: {},
  });

  const [dialogVisible, setDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.ride);

  const { name, model, description, rating, price, car_image_url, rentPerDay } = carData;

  const { user } = useSelector((state) => state.login);

  const validateForm = () => {
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Car Name is required';
    }

    if (!model.trim()) {
      errors.model = 'Car Model is required';
    }

    if (!description.trim()) {
      errors.description = 'Car Description is required';
    }

    if (!rating.trim()) {
      errors.rating = 'Car Rating is required';
    } else if (isNaN(rating) || +rating < 0 || +rating > 5) {
      errors.rating = 'Car Rating must be a number between 0 and 5';
    }

    if (!price.trim()) {
      errors.price = 'Car Price is required';
    } else if (isNaN(price) || +price <= 0) {
      errors.price = 'Car Price must be a positive number';
    }

    if (!car_image_url.trim()) {
      errors.car_image_url = 'Car Image URL is required';
    } else if (!car_image_url.startsWith('http')) {
      errors.car_image_url = 'Car Image URL must start with http';
    } else if (car_image_url.includes(' ')) {
      errors.car_image_url = 'Car Image URL must not contain spaces';
    } else if (car_image_url.includes('!')) {
      errors.car_image_url = 'Car Image URL must not contain !';
    }

    if (!rentPerDay.trim()) {
      errors.rentPerDay = 'Car Rent Per Day is required';
    } else if (isNaN(rentPerDay) || +rentPerDay <= 0) {
      errors.rentPerDay = 'Car Rent Per Day must be a positive number';
    }

    return errors;
  };

  useEffect(() => {
    if (success) {
      setCarData({
        name: '',
        model: '',
        description: '',
        rating: '',
        price: '',
        car_image_url: '',
        rentPerDay: '',
        errors: {},
      });
    }

    dispatch(loginUser());
  }, [success, dispatch]);


  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setCarData({ ...carData, errors });
      return;
    }

    const user_id = user.id;


    const carPayload = {
      user_id: user_id,
      name: name.trim(),
      model: model.trim(),
      description: description.trim(),
      rating: +rating,
      price: +price,
      car_image_url: car_image_url.trim(),
      rent_per_day: +rentPerDay,
    }

    setLoading(true);

    // Dispatch the addRide action
    await dispatch(addRide(carPayload));

    setLoading(false);

    if (success) {
      setDialogVisible(true);
      navigate('/');
    } else {
      setDialogVisible(false);
      navigate('/add-ride');
    }
};


  return (
    <div className="add-form-container">
      <h1 className="add-ride-title">Add Ride</h1>
      <form className='add-ride-form' onSubmit={handleFormSubmission}>
        <div className="add-ride-form">

            <input type="text" placeholder="Enter Car Name" className="add-car-input"
              value={name}
              onChange={(e) => setCarData({ ...carData, name: e.target.value })}
            />
            {
              carData.errors.name && <p className='error'>{carData.errors.name}</p>
            }

            <input type="text" placeholder="Enter Car Model" className="add-car-input"
              value={model}
              onChange={(e) => setCarData({ ...carData, model: e.target.value })}
            />
            {
                carData.errors.model && <p className='error'>{carData.errors.model}</p>
            }

            <input type="text" placeholder="Enter Car Description" className="add-car-input"
              value={description}
              onChange={(e) => setCarData({ ...carData, description: e.target.value })}
            />
            {
                carData.errors.description && <p className='error'>{carData.errors.description}</p>
            }

            <input type="text" placeholder="Enter Car Rating" className="add-car-input"
              value={rating}
              onChange={(e) => setCarData({ ...carData, rating: e.target.value })}
            />
            {
                carData.errors.rating && <p className='error'>{carData.errors.rating}</p>
            }

            <input type="text" placeholder="Enter Car Price" className="add-car-input"
              value={price}
              onChange={(e) => setCarData({ ...carData, price: e.target.value })}
            />
            {
                carData.errors.price && <p className='error'>{carData.errors.price}</p>
            }

            <input type="text" placeholder="Enter Car Rent Per Day Charge" className="add-car-input"
              value={rentPerDay}
              onChange={(e) => setCarData({ ...carData, rentPerDay: e.target.value })}
            />
            {
                carData.errors.rentPerDay && <p className='error'>{carData.errors.rentPerDay}</p>
            }

            <input type="text" placeholder="Enter Car Image URL" className="add-car-input"
              value={car_image_url}
              onChange={(e) => setCarData({ ...carData, car_image_url: e.target.value })}
            />
            {
              carData.errors.car_image_url && <p className='error'>{carData.errors.car_image_url}</p>
            }

        </div>

        {
          loading && (
            <Dialog message="Loading..." isLoading={loading} />
          )
        }

        {dialogVisible && (
          <Dialog
            visible={dialogVisible}
            onClose={() => setDialogVisible(false)}
            title="Success"
            body="Car added successfully!"
          />
        )}

        <button type='submit' className="add-ride-btn">Add Ride</button>
      </form>
    </div>
  )
}

export default AddRide
