import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-10 py-4 flex items-center justify-between backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg shadow-cyan-500/20 rounded-b-lg">
    <a href="#" className="text-lg font-medium  hover:text-indigo-600 transition duration-300 relative group border-none">
      Home
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
    </a>
    
    <h2 className="text-2xl font-bold  tracking-wide drop-shadow-lg">DataFlowX</h2>
  
    <a href="#" className="text-lg font-medium  hover:text-indigo-600 transition duration-300 relative group">
      History
      <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
    </a>
  </div> 
  
  )
}

export default NavBar;