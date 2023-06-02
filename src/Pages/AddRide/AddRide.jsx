import './AddRide.css'
import { useState } from 'react';

const AddRide = () => {
  const [carData, setCarData] = useState({
    name: '',
    model: '',
    description: '',
    rating: '',
    price: '',
    rentPerDay: '',
    errors: {},
  });

  const { name, model, description, rating, price, rentPerDay } = carData;

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

    if (!rentPerDay.trim()) {
      errors.rentPerDay = 'Car Rent Per Day is required';
    } else if (isNaN(rentPerDay) || +rentPerDay <= 0) {
      errors.rentPerDay = 'Car Rent Per Day must be a positive number';
    }

    return errors;
  };


  const handleFormSubmission = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setCarData({ ...carData, errors });
      return;
    }

    console.log(carData);
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
        </div>

        <button type='submit' className="add-ride-btn">Add Ride</button>
      </form>
    </div>
  )
}

export default AddRide
