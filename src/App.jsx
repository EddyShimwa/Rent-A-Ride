import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="md:text-center">
        This text will be centered on medium screens, but revert back
        to the default (left-aligned) at all other screen sizes.
      </div>
    </>
  )
}

export default App
