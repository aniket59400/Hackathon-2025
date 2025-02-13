import React from 'react'

const HeroSection = () => {
  return (
    <div className=" mt-214">
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-indigo-500 font-semibold uppercase">Very proud to introduce</p>
          <h1 className="text-4xl font-bold text-white mt-2 leading-tight">
            Seamless Learning For Brighter Futures
          </h1>
          <p className="text-gray-300 mt-4">
            Our innovative platform offers an effortless and seamless approach to learning,
            empowering students of all ages to simplify education and unlock their full potential.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a href="#start" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Start Now
            </a>
            <a href="#tour" className="border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Take Tour
            </a>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="imgs/background_image.jpeg"
            alt="img"
            className="rounded-xl shadow-lg w-[600px] h-[600px] object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default HeroSection