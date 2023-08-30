import React from 'react'
import TodoWidget from '../../widgets/TodoWidget'
import ProductsWidget from '../../widgets/ProductsWidget'
import WeatherWidget from '../../widgets/WeatherWidget'
import WelcomeWidget from 'widgets/WelcomeWidget'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-6'>
      <WelcomeWidget />
      <TodoWidget />
      <ProductsWidget />
      <WeatherWidget />
    </div>
  )
}

export default Homepage
