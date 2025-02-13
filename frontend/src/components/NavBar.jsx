import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
<<<<<<< HEAD
    <div className="z-10 fixed top-0 left-0 w-full px-51 py-4 flex items-center justify-between backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg shadow-cyan-500/20 rounded-b-lg">
=======
    <div className="z-10 fixed top-0 left-0 w-full px-10 py-4 flex items-center justify-between backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg shadow-cyan-500/20 rounded-b-lg">
>>>>>>> 1c8d9d1fd7730f5e2bafc6af0e7b859e6f8822c8
    <a href="#" className="text-lg font-medium  hover:text-indigo-600 transition duration-300 relative group border-none">
      Home
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
    </a>
    
    <h2 className="tracking-widest text-cyan-600 text-3xl font-bold  tracking-wide drop-shadow-lg">DataFlowX</h2>
  
    <Link to={"/history"} className="text-lg font-medium  hover:text-indigo-600 transition duration-300 relative group">
      History
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
    </Link>
  </div> 
  
  )
}

export default NavBar;