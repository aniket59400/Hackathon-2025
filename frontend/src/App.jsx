import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import NoPage from "./components/NoPage";
import NumberFile from './components/NumberFile';
import History from './components/History';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar />

   {/* <HeroSection/> */}
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<NumberFile />}/>
          <Route path="history" element={<History/>} />
          {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
