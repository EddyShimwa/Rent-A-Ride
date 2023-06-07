import { useState } from 'react'
import { useSelector } from 'react-redux'
import Modal from '../Modal'
import { selectRides } from '../../redux/slices/fetchRideSlice'
import './Delete.css'

const DeleteRide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const rides = useSelector(selectRides)

  const handleDeleteClick = () => {
    setIsModalOpen(true)
  }

  const handleCancelClick = () => {
    setIsModalOpen(false)
  }

  const handleConfirmClick = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='delete-car-card'>
      <h2 className='delete-ride-title'>Delete Ride</h2>
      {rides.map((ride) => {
        return (
          <div className='delete-content' key={ride.id}>
            <p className='delete-car-name'>{ride.name}</p>
            <button
              className='btn-delete'
              type='button'
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        )
      })}
      <Modal
        isOpen={isModalOpen}
        onCancel={handleCancelClick}
        onConfirm={handleConfirmClick}
      />
    </div>
  )
}

export default DeleteRide
