import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const Meats = () => {
  return (
    <div>
      <CategoryPage title="Meat" bgImage={BgSeaFood} categories={['Meat']}/>
    </div>
  )
}

export default Meats