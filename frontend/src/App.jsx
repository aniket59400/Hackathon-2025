import { useState } from 'react'
import NumberFile from './components/NumberFile'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NumberFile />
   </>
  )
}

export default App
