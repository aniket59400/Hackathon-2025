import { useState } from 'react'
import NumberFile from './components/NumberFile'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar />
   <NumberFile />
   </>
  )
}

export default App
