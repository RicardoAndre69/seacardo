import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="SeaFood" bgImage={BgSeaFood} categories={['SeaFood']}/>
    </div>
  )
}

export default SeaFood