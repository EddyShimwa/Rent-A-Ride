import React from 'react'

const Favorites = ({favorites}) => {
  return (
    <div>
      <h1>Favorites Rides</h1>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>{/* favorite item details */}</li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
