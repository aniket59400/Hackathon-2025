import { useState } from 'react'
import NumberFile from './components/NumberFile'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar />
   
   <NumberFile />
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="history" element={<History/>} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
