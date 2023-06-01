import Card from "../components/Card/Card"
import { Link } from 'react-router-dom'

const AllRides = () => {
  return (
    <div>
      <Link to='/ride-details'>
        <Card
          title="Houses"
          description="Beautiful family apartment"
          price = "$1000"
          imageUrl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80"
          rating="4.5"
          time="per week"
        />
      </Link>
    </div>
  )
}

export default AllRides
