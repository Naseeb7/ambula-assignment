import React from 'react'

const WelcomeWidget = () => {
  return (
    // Main container for the WelcomeWidget component
    <div className='flex flex-col sm:flex-row justify-center items-center m-2 p-2 gap-2'>
      {/* Animated logo */}
      <div className="flex relative justify-center w-1/2 sm:w-1/6 overflow-hidden p-2 h-10">
        <div className="flex flex-col absolute items-center justify-center p-1 text-2xl font-bold text-teal-600 gap-4 animate-scrollY">
          {/* Animated text */}
          <div className="flex">Todo</div>
          <div className="flex">Shopping</div>
          <div className="flex">Weather</div>
        </div>
      </div>
      {/* Welcome text */}
      <div className="flex justify-start text-center sm:text-left items-center w-full  sm:w-3/5 text-teal-800 text-lg">
        {/* Detailed description */}
        Welcome to a webpage that understands your needs and simplifies your digital life.
        With our integrated trio of features – the to-do list, shopping cart, and weather app – you're empowered to stay organized,
        shop wisely, and stay weather-aware without switching between tabs or apps.
        Experience the convenience of multipurpose functionality at your fingertips.
        Start your journey with our all-in-one webpage now!
      </div>
    </div>
  )
}

export default WelcomeWidget;
